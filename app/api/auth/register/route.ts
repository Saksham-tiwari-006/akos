import { NextRequest } from 'next/server';
import { connectDB } from '@/lib/db/mongodb';
import { User } from '@/lib/models';
import { loginSchema, userSchema } from '@/lib/utils/validation';
import { apiHandler, successResponse, errorResponse, validateRequest } from '@/lib/utils/api';
import { generateToken, hashPassword, comparePassword } from '@/lib/utils/auth';
import { sendWelcomeEmail } from '@/lib/utils/email';

// POST - Register new user
export const POST = apiHandler(async (request: NextRequest) => {
  await connectDB();

  const { data, error } = await validateRequest(request, userSchema);
  if (error) return error;

  // Check if user already exists
  const existingUser = await User.findOne({ email: data?.email });
  if (existingUser) {
    return errorResponse('User with this email already exists', 400);
  }

  // Hash password if provided
  let hashedPassword;
  if (data?.password) {
    hashedPassword = await hashPassword(data.password);
  }

  // Create user
  const user = await User.create({
    ...data,
    password: hashedPassword,
    role: 'user', // Default role
  });

  // Generate token
  const token = generateToken(user._id.toString(), user.email, user.role);

  // Send welcome email (non-blocking)
  sendWelcomeEmail(user.email, user.name)
    .catch(err => console.error('Email error:', err));

  // Remove password from response
  const userResponse = user.toObject();
  delete userResponse.password;

  return successResponse(
    {
      user: userResponse,
      token,
    },
    'User registered successfully',
    201
  );
});