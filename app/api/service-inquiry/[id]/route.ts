import { NextRequest } from 'next/server';
import { connectDB } from '@/lib/db/mongodb';
import { ServiceInquiry } from '@/lib/models';
import { updateServiceInquirySchema } from '@/lib/utils/validation';
import { apiHandler, successResponse, errorResponse, validateRequest } from '@/lib/utils/api';
import { requireStaffOrAdmin } from '@/lib/utils/auth';

// GET - Fetch single service inquiry by ID
export const GET = apiHandler(async (request: NextRequest, { params }: { params: Promise<{ id: string }> }) => {
  await connectDB();
  const { id } = await params;

  const inquiry = await ServiceInquiry.findById(id)
    .populate('userId', 'name email phone')
    .populate('assignedTo', 'name email');

  if (!inquiry) {
    return errorResponse('Service inquiry not found', 404);
  }

  return successResponse(inquiry, 'Service inquiry retrieved successfully');
});

// PATCH - Update service inquiry (staff/admin only)
export const PATCH = apiHandler(async (request: NextRequest, { params }: { params: Promise<{ id: string }> }) => {
  await connectDB();
  const { id } = await params;

  // Check authentication
  const user = await requireStaffOrAdmin(request);

  const { data, error } = await validateRequest(request, updateServiceInquirySchema);
  if (error) return error;

  const inquiry = await ServiceInquiry.findByIdAndUpdate(
    id,
    data,
    { new: true, runValidators: true }
  ).populate('assignedTo', 'name email');

  if (!inquiry) {
    return errorResponse('Service inquiry not found', 404);
  }

  return successResponse(inquiry, 'Service inquiry updated successfully');
});

// DELETE - Delete service inquiry (admin only)
export const DELETE = apiHandler(async (request: NextRequest, { params }: { params: Promise<{ id: string }> }) => {
  await connectDB();
  const { id } = await params;

  // Check admin authentication
  await requireStaffOrAdmin(request);

  const inquiry = await ServiceInquiry.findByIdAndDelete(id);

  if (!inquiry) {
    return errorResponse('Service inquiry not found', 404);
  }

  return successResponse(
    { id: inquiry._id },
    'Service inquiry deleted successfully'
  );
});
