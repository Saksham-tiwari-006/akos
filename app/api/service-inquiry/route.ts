import { NextRequest } from 'next/server';
import { connectDB } from '@/lib/db/mongodb';
import { ServiceInquiry } from '@/lib/models';
import { serviceInquirySchema } from '@/lib/utils/validation';
import { apiHandler, successResponse, validateRequest, getPaginationParams, paginatedResponse, errorResponse } from '@/lib/utils/api';
import { sendServiceInquiryNotification } from '@/lib/utils/email';
import { uploadToCloudinary } from '@/lib/utils/cloudinary';

// GET - Fetch all service inquiries with pagination and filters
export const GET = apiHandler(async (request: NextRequest) => {
  await connectDB();

  const { searchParams } = new URL(request.url);
  const { page, limit, skip } = getPaginationParams(request);

  // Build query filters
  const query: any = {};

  const status = searchParams.get('status');
  if (status) query.status = status;

  const serviceCategory = searchParams.get('category');
  if (serviceCategory) query.serviceCategory = serviceCategory;

  const email = searchParams.get('email');
  if (email) query.email = email;

  // Fetch service inquiries
  const [inquiries, total] = await Promise.all([
    ServiceInquiry.find(query)
      .sort({ createdAt: -1 })
      .skip(skip)
      .limit(limit)
      .populate('userId', 'name email')
      .populate('assignedTo', 'name email')
      .lean(),
    ServiceInquiry.countDocuments(query),
  ]);

  return successResponse(
    paginatedResponse(inquiries, total, page, limit),
    'Service inquiries retrieved successfully'
  );
});

// POST - Create new service inquiry
export const POST = apiHandler(async (request: NextRequest) => {
  await connectDB();

  try {
    // Parse FormData
    const formData = await request.formData();
    
    // Extract form fields
    const rawData = {
      serviceName: formData.get('serviceName'),
      serviceCategory: formData.get('serviceCategory'),
      name: formData.get('name'),
      email: formData.get('email'),
      phone: formData.get('phone'),
      message: formData.get('message'),
    };

    // Validate the data
    const validatedData = serviceInquirySchema.parse(rawData);

    // Handle document uploads if present
    const documents = [];
    for (const [key, value] of formData.entries()) {
      if (key.startsWith('document_') && value instanceof File) {
        try {
          // Convert File to Buffer
          const arrayBuffer = await value.arrayBuffer();
          const buffer = Buffer.from(arrayBuffer);
          
          // Upload to Cloudinary
          const uploadResult = await uploadToCloudinary(buffer, value.name, 'service-inquiries');
          
          if (uploadResult.success && uploadResult.url) {
            documents.push({
              name: uploadResult.fileName || value.name,
              size: uploadResult.fileSize || value.size,
              type: value.type,
              url: uploadResult.url,
            });
          }
        } catch (uploadError) {
          console.error('File upload error:', uploadError);
          // Continue without the document rather than failing the entire request
        }
      }
    }

    // Add documents if any
    const inquiryData = documents.length > 0 
      ? { ...validatedData, documents }
      : validatedData;

    // Create service inquiry
    const inquiry = await ServiceInquiry.create(inquiryData);

    // Send notification email to admin (non-blocking)
    const adminEmail = process.env.ADMIN_EMAIL || 'admin@akos.com';
    sendServiceInquiryNotification(adminEmail, {
      name: inquiry.name,
      email: inquiry.email,
      service: inquiry.serviceName,
      message: inquiry.message,
    }).catch(err => console.error('Email error:', err));

    return successResponse(
      inquiry,
      'Service inquiry submitted successfully',
      201
    );
  } catch (error: any) {
    if (error.name === 'ZodError') {
      return errorResponse('Validation failed', 400, error.issues);
    }
    throw error; // Let apiHandler handle other errors
  }
});
