import { NextRequest, NextResponse } from 'next/server';
import { connectDB } from '@/lib/db/mongodb';
import { Consultation } from '@/lib/models';
import { consultationSchema } from '@/lib/utils/validation';
import { apiHandler, successResponse, errorResponse, validateRequest, getPaginationParams, paginatedResponse } from '@/lib/utils/api';
import { sendConsultationConfirmation, sendEmail } from '@/lib/utils/email';
import { uploadToCloudinary } from '@/lib/utils/cloudinary';

// GET - Fetch all consultations with pagination and filters
export const GET = apiHandler(async (request: NextRequest) => {
  await connectDB();

  const { searchParams } = new URL(request.url);
  const { page, limit, skip } = getPaginationParams(request);

  // Build query filters
  const query: any = {};

  const status = searchParams.get('status');
  if (status) query.status = status;

  const service = searchParams.get('service');
  if (service) query.service = new RegExp(service, 'i');

  const email = searchParams.get('email');
  if (email) query.email = email;

  // Fetch consultations
  const [consultations, total] = await Promise.all([
    Consultation.find(query)
      .sort({ createdAt: -1 })
      .skip(skip)
      .limit(limit)
      .populate('userId', 'name email')
      .populate('assignedTo', 'name email')
      .lean(),
    Consultation.countDocuments(query),
  ]);

  return successResponse(
    paginatedResponse(consultations, total, page, limit),
    'Consultations retrieved successfully'
  );
});

// POST - Create new consultation
export const POST = apiHandler(async (request: NextRequest) => {
  await connectDB();

  try {
    const contentType = request.headers.get('content-type') || '';
    
    let rawData: any;
    
    // Handle both FormData and JSON
    if (contentType.includes('multipart/form-data')) {
      const formData = await request.formData();
      
      // Extract form fields
      rawData = {
        service: formData.get('service'),
        serviceCategory: formData.get('serviceCategory'),
        name: formData.get('name'),
        email: formData.get('email'),
        phone: formData.get('phone'),
        date: formData.get('date'),
        time: formData.get('time'),
        message: formData.get('message'),
      };

      // Handle file upload if present
      const file = formData.get('file');
      if (file && file instanceof File) {
        try {
          // Convert File to Buffer
          const arrayBuffer = await file.arrayBuffer();
          const buffer = Buffer.from(arrayBuffer);
          
          // Upload to Cloudinary
          const uploadResult = await uploadToCloudinary(buffer, file.name, 'consultations');
          
          if (uploadResult.success && uploadResult.url) {
            rawData.documents = [{
              name: uploadResult.fileName || file.name,
              size: uploadResult.fileSize || file.size,
              type: file.type,
              url: uploadResult.url,
            }];
          }
        } catch (uploadError) {
          console.error('File upload error:', uploadError);
          // Continue without the document rather than failing the entire request
        }
      }
    } else {
      // Handle JSON body
      rawData = await request.json();
    }

    // Validate the data
    const validatedData = consultationSchema.parse(rawData);

    // Create consultation
    const consultation = await Consultation.create(validatedData);

    // Send emails to both owner and user (non-blocking)
    if (consultation.email) {
      const ownerEmail = process.env.OWNER_EMAIL || process.env.ADMIN_EMAIL || 'admin@akos.com';
      
      // Send confirmation to user
      sendConsultationConfirmation(consultation.email, {
        name: consultation.name,
        service: consultation.service,
        date: consultation.date,
        time: consultation.time,
      }).catch(err => console.error('User email error:', err));
      
      // Send notification to owner
      sendEmail({
        to: ownerEmail,
        subject: `New Consultation Request: ${consultation.service}`,
        html: `
          <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
            <h2 style="color: #3b82f6;">📋 New Consultation Request</h2>
            <div style="background: #f3f4f6; padding: 20px; border-radius: 8px; margin: 20px 0;">
              <p><strong>Service:</strong> ${consultation.service}</p>
              <p><strong>Name:</strong> ${consultation.name}</p>
              <p><strong>Email:</strong> ${consultation.email}</p>
              <p><strong>Phone:</strong> ${consultation.phone}</p>
              ${consultation.date ? `<p><strong>Preferred Date:</strong> ${consultation.date}</p>` : ''}
              ${consultation.time ? `<p><strong>Preferred Time:</strong> ${consultation.time}</p>` : ''}
              <p><strong>Message:</strong></p>
              <p>${consultation.message || 'No message provided'}</p>
            </div>
            <div style="background: #fef3c7; padding: 15px; border-radius: 8px; margin: 20px 0;">
              <p style="margin: 0;"><strong>⚡ Action Required:</strong> Please respond within 24 hours.</p>
            </div>
            <a href="${process.env.NEXT_PUBLIC_APP_URL || 'http://localhost:3000'}/admin" 
               style="background: #3b82f6; color: white; padding: 12px 24px; text-decoration: none; border-radius: 6px; display: inline-block;">
              Manage in Admin Dashboard
            </a>
          </div>
        `
      }).catch(err => console.error('Owner email error:', err));
    }

    return successResponse(
      consultation,
      'Consultation request submitted successfully',
      201
    );
  } catch (error: any) {
    if (error.name === 'ZodError') {
      return errorResponse('Validation failed', 400, error.issues);
    }
    throw error; // Let apiHandler handle other errors
  }
});
