import { NextRequest } from 'next/server';
import { connectDB } from '@/lib/db/mongodb';
import { Contact } from '@/lib/models';
import { updateContactSchema } from '@/lib/utils/validation';
import { apiHandler, successResponse, errorResponse, validateRequest } from '@/lib/utils/api';
import { requireStaffOrAdmin } from '@/lib/utils/auth';

// GET - Fetch single contact by ID
export const GET = apiHandler(async (request: NextRequest, { params }: { params: Promise<{ id: string }> }) => {
  await connectDB();
  const { id } = await params;

  const contact = await Contact.findById(id)
    .populate('userId', 'name email phone')
    .populate('repliedBy', 'name email');

  if (!contact) {
    return errorResponse('Contact not found', 404);
  }

  return successResponse(contact, 'Contact retrieved successfully');
});

// PATCH - Update contact status (staff/admin only)
export const PATCH = apiHandler(async (request: NextRequest, { params }: { params: Promise<{ id: string }> }) => {
  await connectDB();
  const { id } = await params;

  // Check authentication
  const user = await requireStaffOrAdmin(request);

  const { data, error } = await validateRequest(request, updateContactSchema);
  if (error) return error;

  // Update repliedBy and repliedAt if status is 'replied'
  const updateData: any = { ...data };
  if (data?.status === 'replied') {
    updateData.repliedBy = user.userId;
    updateData.repliedAt = new Date();
  }

  const contact = await Contact.findByIdAndUpdate(
    id,
    updateData,
    { new: true, runValidators: true }
  ).populate('repliedBy', 'name email');

  if (!contact) {
    return errorResponse('Contact not found', 404);
  }

  return successResponse(contact, 'Contact updated successfully');
});

// DELETE - Delete contact (admin only)
export const DELETE = apiHandler(async (request: NextRequest, { params }: { params: Promise<{ id: string }> }) => {
  await connectDB();
  const { id } = await params;

  // Check admin authentication
  await requireStaffOrAdmin(request);

  const contact = await Contact.findByIdAndDelete(id);

  if (!contact) {
    return errorResponse('Contact not found', 404);
  }

  return successResponse(
    { id: contact._id },
    'Contact deleted successfully'
  );
});
