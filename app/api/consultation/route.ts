import { NextRequest, NextResponse } from 'next/server';
import { connectDB } from '@/lib/db/mongodb';
import { Consultation } from '@/lib/models';
import { consultationSchema } from '@/lib/utils/validation';
import { apiHandler, successResponse, errorResponse, validateRequest, getPaginationParams, paginatedResponse } from '@/lib/utils/api';
import { sendConsultationConfirmation, sendEmail } from '@/lib/utils/email';

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

  const { data, error } = await validateRequest(request, consultationSchema);
  if (error) return error;

  // Ensure data is defined before creating
  if (!data) {
    return NextResponse.json(
      { success: false, message: 'Invalid request data' },
      { status: 400 }
    );
  }

  // Create consultation
  const consultation = await Consultation.create(data);

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
});
