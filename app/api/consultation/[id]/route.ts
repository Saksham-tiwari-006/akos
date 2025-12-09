import { NextRequest } from 'next/server';
import { connectDB } from '@/lib/db/mongodb';
import { Consultation } from '@/lib/models';
import { updateConsultationSchema } from '@/lib/utils/validation';
import { apiHandler, successResponse, errorResponse, validateRequest } from '@/lib/utils/api';
import { requireStaffOrAdmin } from '@/lib/utils/auth';
import { sendStatusUpdate } from '@/lib/utils/email';

// GET - Fetch single consultation by ID
export const GET = apiHandler(async (request: NextRequest, { params }: { params: Promise<{ id: string }> }) => {
  await connectDB();
  const { id } = await params;

  const consultation = await Consultation.findById(id)
    .populate('userId', 'name email phone')
    .populate('assignedTo', 'name email');

  if (!consultation) {
    return errorResponse('Consultation not found', 404);
  }

  return successResponse(consultation, 'Consultation retrieved successfully');
});

// PATCH - Update consultation (admin/staff only)
export const PATCH = apiHandler(async (request: NextRequest, { params }: { params: Promise<{ id: string }> }) => {
  await connectDB();
  const { id } = await params;

  // Check authentication
  const user = await requireStaffOrAdmin(request);

  const { data, error } = await validateRequest(request, updateConsultationSchema);
  if (error) return error;

  const consultation = await Consultation.findByIdAndUpdate(
    id,
    { ...data, updatedBy: user.userId },
    { new: true, runValidators: true }
  ).populate('userId', 'name email')
   .populate('assignedTo', 'name email');

  if (!consultation) {
    return errorResponse('Consultation not found', 404);
  }

  // Send status update email if status changed
  if (data?.status && consultation.email) {
    sendStatusUpdate(consultation.email, {
      name: consultation.name,
      service: consultation.service,
      status: data.status,
    }).catch(err => console.error('Email error:', err));
  }

  return successResponse(consultation, 'Consultation updated successfully');
});

// DELETE - Delete consultation (admin only)
export const DELETE = apiHandler(async (request: NextRequest, { params }: { params: Promise<{ id: string }> }) => {
  await connectDB();
  const { id } = await params;

  // Check admin authentication
  await requireStaffOrAdmin(request);

  const consultation = await Consultation.findByIdAndDelete(id);

  if (!consultation) {
    return errorResponse('Consultation not found', 404);
  }

  return successResponse(
    { id: consultation._id },
    'Consultation deleted successfully'
  );
});
