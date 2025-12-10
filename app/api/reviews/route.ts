import { NextRequest } from 'next/server';
import { connectDB } from '@/lib/db/mongodb';
import { Review } from '@/lib/models';
import { reviewSchema } from '@/lib/utils/validation';
import { apiHandler, successResponse, validateRequest, getPaginationParams, paginatedResponse } from '@/lib/utils/api';
import { currentUser } from '@clerk/nextjs/server';

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

  const paginationData = paginatedResponse(reviews, total, page, limit);

  return successResponse(
    paginationData,
    'Reviews retrieved successfully'
  );
});

// POST - Create new review
export const POST = apiHandler(async (request: NextRequest) => {
  await connectDB();

  const { data, error } = await validateRequest(request, reviewSchema);
  if (error) return error;

  // Get current user from Clerk if authenticated
  const user = await currentUser();

  // Generate avatar - use Clerk user image or generate one based on name
  const avatar = user?.imageUrl || 
                 `https://api.dicebear.com/7.x/avataaars/svg?seed=${data?.name}`;

  // Use Clerk user data if available, otherwise use form data
  const reviewData = {
    ...data,
    name: user?.firstName && user?.lastName 
      ? `${user.firstName} ${user.lastName}` 
      : data?.name,
    email: user?.emailAddresses[0]?.emailAddress || data?.email,
    avatar,
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
