import { NextRequest, NextResponse } from 'next/server';
import { connectDB } from '@/lib/db/mongodb';
import { Consultation } from '@/lib/models';
import { consultationSchema } from '@/lib/utils/validation';
import { apiHandler, successResponse, errorResponse, validateRequest, getPaginationParams, paginatedResponse } from '@/lib/utils/api';
import { sendConsultationConfirmation } from '@/lib/utils/email';

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

  // Create consultation
  const consultation = await Consultation.create(data);

  // Send confirmation email (non-blocking)
  if (data && consultation.email) {
    sendConsultationConfirmation(consultation.email, {
      name: consultation.name,
      service: consultation.service,
      date: consultation.date,
      time: consultation.time,
    }).catch(err => console.error('Email error:', err));
  }

  return successResponse(
    consultation,
    'Consultation request submitted successfully',
    201
  );
});
