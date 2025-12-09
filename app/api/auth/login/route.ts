import { NextRequest } from 'next/server';
import { connectDB } from '@/lib/db/mongodb';
import { User } from '@/lib/models';
import { loginSchema } from '@/lib/utils/validation';
import { apiHandler, successResponse, errorResponse, validateRequest } from '@/lib/utils/api';
import { generateToken, comparePassword } from '@/lib/utils/auth';

// POST - Login user
export const POST = apiHandler(async (request: NextRequest) => {
  await connectDB();

  const { data, error } = await validateRequest(request, loginSchema);
  if (error) return error;

  // Find user by email
  const user = await User.findOne({ email: data?.email }).select('+password');
  if (!user) {
    return errorResponse('Invalid email or password', 401);
  }

  // Check if user is active
  if (user.status !== 'active') {
    return errorResponse('Account is inactive or suspended', 403);
  }

  // Verify password
  if (!user.password || !(await comparePassword(data!.password, user.password))) {
    return errorResponse('Invalid email or password', 401);
  }

  // Update last login
  user.lastLogin = new Date();
  await user.save();

  // Generate token
  const token = generateToken(user._id.toString(), user.email, user.role);

  // Remove password from response
  const userResponse = user.toObject();
  delete userResponse.password;

  return successResponse(
    {
      user: userResponse,
      token,
    },
    'Login successful'
  );
});