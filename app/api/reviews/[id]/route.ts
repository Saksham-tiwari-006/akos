import { NextRequest } from 'next/server';
import { connectDB } from '@/lib/db/mongodb';
import { Review } from '@/lib/models';
import { updateReviewSchema } from '@/lib/utils/validation';
import { apiHandler, successResponse, errorResponse, validateRequest } from '@/lib/utils/api';
import { requireStaffOrAdmin } from '@/lib/utils/auth';

// GET - Fetch single review by ID
export const GET = apiHandler(async (request: NextRequest, { params }: { params: Promise<{ id: string }> }) => {
  await connectDB();
  const { id } = await params;

  const review = await Review.findById(id).populate('userId', 'name email');

  if (!review) {
    return errorResponse('Review not found', 404);
  }

  return successResponse(review, 'Review retrieved successfully');
});

// PATCH - Update review status (staff/admin only)
export const PATCH = apiHandler(async (request: NextRequest, { params }: { params: Promise<{ id: string }> }) => {
  await connectDB();
  const { id } = await params;

  // Check authentication
  await requireStaffOrAdmin(request);

  const { data, error } = await validateRequest(request, updateReviewSchema);
  if (error) return error;

  const review = await Review.findByIdAndUpdate(
    id,
    data,
    { new: true, runValidators: true }
  );

  if (!review) {
    return errorResponse('Review not found', 404);
  }

  return successResponse(review, 'Review updated successfully');
});

// DELETE - Delete review (admin only)
export const DELETE = apiHandler(async (request: NextRequest, { params }: { params: Promise<{ id: string }> }) => {
  await connectDB();
  const { id } = await params;

  // Check admin authentication
  await requireStaffOrAdmin(request);

  const review = await Review.findByIdAndDelete(id);

  if (!review) {
    return errorResponse('Review not found', 404);
  }

  return successResponse(
    { id: review._id },
    'Review deleted successfully'
  );
});
