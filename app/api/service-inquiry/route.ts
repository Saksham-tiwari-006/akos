import { NextRequest } from 'next/server';
import { connectDB } from '@/lib/db/mongodb';
import { ServiceInquiry } from '@/lib/models';
import { serviceInquirySchema } from '@/lib/utils/validation';
import { apiHandler, successResponse, validateRequest, getPaginationParams, paginatedResponse } from '@/lib/utils/api';
import { sendServiceInquiryNotification } from '@/lib/utils/email';

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

  const { data, error } = await validateRequest(request, serviceInquirySchema);
  if (error) return error;

  // Create service inquiry
  const inquiry = await ServiceInquiry.create(data);

  // Send notification email to admin (non-blocking)
  const adminEmail = process.env.ADMIN_EMAIL || 'admin@akos.com';
  if (data) {
    sendServiceInquiryNotification(adminEmail, {
      name: inquiry.name,
      email: inquiry.email,
      service: inquiry.serviceName,
      message: inquiry.message,
    }).catch(err => console.error('Email error:', err));
  }

  return successResponse(
    inquiry,
    'Service inquiry submitted successfully',
    201
  );
});
