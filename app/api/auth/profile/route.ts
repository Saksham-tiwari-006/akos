import { NextRequest } from 'next/server';
import { connectDB } from '@/lib/db/mongodb';
import { User } from '@/lib/models';
import { apiHandler, successResponse, errorResponse } from '@/lib/utils/api';
import { getUserFromRequest } from '@/lib/utils/auth';

// GET - Get current user profile
export const GET = apiHandler(async (request: NextRequest) => {
  await connectDB();

  const authUser = await getUserFromRequest(request);
  if (!authUser) {
    return errorResponse('Not authenticated', 401);
  }

  const user = await User.findById(authUser.userId).select('-password');
  if (!user) {
    return errorResponse('User not found', 404);
  }

  return successResponse(user, 'Profile retrieved successfully');
});

// PATCH - Update user profile
export const PATCH = apiHandler(async (request: NextRequest) => {
  await connectDB();

  const authUser = await getUserFromRequest(request);
  if (!authUser) {
    return errorResponse('Not authenticated', 401);
  }

  const body = await request.json();

  // Don't allow updating sensitive fields
  delete body.password;
  delete body.role;
  delete body.email;
  delete body.clerkId;

  const user = await User.findByIdAndUpdate(
    authUser.userId,
    body,
    { new: true, runValidators: true }
  ).select('-password');

  if (!user) {
    return errorResponse('User not found', 404);
  }

  return successResponse(user, 'Profile updated successfully');
});
