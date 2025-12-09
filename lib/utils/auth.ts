import jwt from 'jsonwebtoken';
import bcrypt from 'bcryptjs';
import { JWT_CONFIG } from '../config';
import { NextRequest } from 'next/server';
import { IUser } from '../models/User';

// Generate JWT token
export function generateToken(userId: string, email: string, role: string): string {
  return jwt.sign(
    { userId, email, role },
    JWT_CONFIG.secret,
    { expiresIn: JWT_CONFIG.expiresIn } as jwt.SignOptions
  );
}

// Verify JWT token
export function verifyToken(token: string): { userId: string; email: string; role: string } | null {
  try {
    const decoded = jwt.verify(token, JWT_CONFIG.secret) as {
      userId: string;
      email: string;
      role: string;
    };
    return decoded;
  } catch (error) {
    return null;
  }
}

// Hash password
export async function hashPassword(password: string): Promise<string> {
  const salt = await bcrypt.genSalt(10);
  return bcrypt.hash(password, salt);
}

// Compare password
export async function comparePassword(
  plainPassword: string,
  hashedPassword: string
): Promise<boolean> {
  return bcrypt.compare(plainPassword, hashedPassword);
}

// Extract token from request
export function extractToken(request: NextRequest): string | null {
  // Check Authorization header
  const authHeader = request.headers.get('Authorization');
  if (authHeader && authHeader.startsWith('Bearer ')) {
    return authHeader.substring(7);
  }

  // Check cookie
  const tokenCookie = request.cookies.get('token');
  if (tokenCookie) {
    return tokenCookie.value;
  }

  return null;
}

// Get user from request
export async function getUserFromRequest(request: NextRequest): Promise<{
  userId: string;
  email: string;
  role: string;
} | null> {
  const token = extractToken(request);
  if (!token) {
    return null;
  }

  return verifyToken(token);
}

// Check if user is admin
export function isAdmin(user: { role: string } | null): boolean {
  return user?.role === 'admin';
}

// Check if user is staff or admin
export function isStaffOrAdmin(user: { role: string } | null): boolean {
  return user?.role === 'admin' || user?.role === 'staff';
}

// Middleware to require authentication
export async function requireAuth(request: NextRequest) {
  const user = await getUserFromRequest(request);
  if (!user) {
    throw new Error('Authentication required');
  }
  return user;
}

// Middleware to require admin role
export async function requireAdmin(request: NextRequest) {
  const user = await requireAuth(request);
  if (!isAdmin(user)) {
    throw new Error('Admin access required');
  }
  return user;
}

// Middleware to require staff or admin role
export async function requireStaffOrAdmin(request: NextRequest) {
  const user = await requireAuth(request);
  if (!isStaffOrAdmin(user)) {
    throw new Error('Staff or admin access required');
  }
  return user;
}

// Generate password reset token
export function generateResetToken(userId: string): string {
  return jwt.sign(
    { userId, type: 'reset' },
    JWT_CONFIG.secret,
    { expiresIn: '1h' }
  );
}

// Verify password reset token
export function verifyResetToken(token: string): { userId: string } | null {
  try {
    const decoded = jwt.verify(token, JWT_CONFIG.secret) as {
      userId: string;
      type: string;
    };
    if (decoded.type !== 'reset') {
      return null;
    }
    return { userId: decoded.userId };
  } catch (error) {
    return null;
  }
}

// Generate email verification token
export function generateVerificationToken(email: string): string {
  return jwt.sign(
    { email, type: 'verification' },
    JWT_CONFIG.secret,
    { expiresIn: '24h' }
  );
}

// Verify email verification token
export function verifyVerificationToken(token: string): { email: string } | null {
  try {
    const decoded = jwt.verify(token, JWT_CONFIG.secret) as {
      email: string;
      type: string;
    };
    if (decoded.type !== 'verification') {
      return null;
    }
    return { email: decoded.email };
  } catch (error) {
    return null;
  }
}
