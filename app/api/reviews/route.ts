import { NextRequest } from 'next/server';
import { connectDB } from '@/lib/db/mongodb';
import { Review } from '@/lib/models';
import { reviewSchema } from '@/lib/utils/validation';
import { apiHandler, successResponse, validateRequest, getPaginationParams, paginatedResponse } from '@/lib/utils/api';

// GET - Fetch all approved reviews with pagination
export const GET = apiHandler(async (request: NextRequest) => {
  await connectDB();

  const { searchParams } = new URL(request.url);
  const { page, limit, skip } = getPaginationParams(request);

  // Build query filters - only show approved reviews publicly
  const query: any = { status: 'approved' };

  const rating = searchParams.get('rating');
  if (rating) query.rating = parseInt(rating);

  const service = searchParams.get('service');
  if (service) query.service = new RegExp(service, 'i');

  // Fetch reviews
  const [reviews, total] = await Promise.all([
    Review.find(query)
      .sort({ createdAt: -1 })
      .skip(skip)
      .limit(limit)
      .select('-email') // Don't expose email publicly
      .lean(),
    Review.countDocuments(query),
  ]);

  return successResponse(
    paginatedResponse(reviews, total, page, limit),
    'Reviews retrieved successfully'
  );
});

// POST - Create new review
export const POST = apiHandler(async (request: NextRequest) => {
  await connectDB();

  const { data, error } = await validateRequest(request, reviewSchema);
  if (error) return error;

  // Generate avatar if not provided
  const reviewData = {
    ...data,
    avatar: data?.avatar || `https://api.dicebear.com/7.x/avataaars/svg?seed=${data?.name}`,
    status: 'pending', // Reviews need approval
  };

  // Create review
  const review = await Review.create(reviewData);

  return successResponse(
    review,
    'Review submitted successfully. It will be visible after approval.',
    201
  );
});
