import { NextRequest, NextResponse } from 'next/server';
import { z, ZodSchema } from 'zod';

// Error response helper
export function errorResponse(
  message: string,
  status: number = 400,
  errors?: any
) {
  return NextResponse.json(
    {
      success: false,
      message,
      errors,
    },
    { status }
  );
}

// Success response helper
export function successResponse(
  data: any,
  message: string = 'Success',
  status: number = 200
) {
  return NextResponse.json(
    {
      success: true,
      message,
      data,
    },
    { status }
  );
}

// Validate request body with Zod schema
export async function validateRequest<T>(
  request: NextRequest,
  schema: ZodSchema<T>
): Promise<{ data?: T; error?: NextResponse }> {
  try {
    const body = await request.json();
    const validatedData = schema.parse(body);
    return { data: validatedData };
  } catch (error) {
    if (error instanceof z.ZodError) {
      return {
        error: errorResponse('Validation failed', 400, error.issues),
      };
    }
    return {
      error: errorResponse('Invalid request body', 400),
    };
  }
}

// Validate query parameters
export function validateQuery<T>(
  request: NextRequest,
  schema: ZodSchema<T>
): { data?: T; error?: NextResponse } {
  try {
    const { searchParams } = new URL(request.url);
    const queryObj: Record<string, any> = {};

    searchParams.forEach((value, key) => {
      queryObj[key] = value;
    });

    const validatedData = schema.parse(queryObj);
    return { data: validatedData };
  } catch (error) {
    if (error instanceof z.ZodError) {
      return {
        error: errorResponse('Validation failed', 400, error.issues),
      };
    }
    return {
      error: errorResponse('Invalid query parameters', 400),
    };
  }
}

// API error handler wrapper
export function apiHandler(handler: (request: NextRequest, context?: any) => Promise<NextResponse>) {
  return async (request: NextRequest, context?: any) => {
    try {
      return await handler(request, context);
    } catch (error: any) {
      console.error('API Error:', error);

      // Handle specific error types
      if (error.name === 'MongoError' || error.name === 'MongooseError') {
        return errorResponse('Database error occurred', 500);
      }

      if (error.name === 'ValidationError') {
        return errorResponse('Validation error', 400, error.errors);
      }

      if (error.status) {
        return errorResponse(error.message, error.status);
      }

      return errorResponse(
        process.env.NODE_ENV === 'development'
          ? error.message
          : 'Internal server error',
        500
      );
    }
  };
}

// Pagination helper
export function getPaginationParams(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const page = parseInt(searchParams.get('page') || '1');
  const limit = Math.min(parseInt(searchParams.get('limit') || '10'), 100);
  const skip = (page - 1) * limit;

  return { page, limit, skip };
}

// Create pagination response
export function paginatedResponse(
  data: any[],
  total: number,
  page: number,
  limit: number
) {
  return {
    data,
    pagination: {
      total,
      page,
      limit,
      totalPages: Math.ceil(total / limit),
      hasNext: page * limit < total,
      hasPrev: page > 1,
    },
  };
}

// Custom API Error class
export class ApiError extends Error {
  status: number;

  constructor(message: string, status: number = 400) {
    super(message);
    this.name = 'ApiError';
    this.status = status;
  }
}

// Rate limit checker (simple in-memory implementation)
const rateLimitMap = new Map<string, { count: number; resetTime: number }>();

export function checkRateLimit(
  identifier: string,
  maxRequests: number = 100,
  windowMs: number = 15 * 60 * 1000
): boolean {
  const now = Date.now();
  const record = rateLimitMap.get(identifier);

  if (!record || now > record.resetTime) {
    rateLimitMap.set(identifier, {
      count: 1,
      resetTime: now + windowMs,
    });
    return true;
  }

  if (record.count >= maxRequests) {
    return false;
  }

  record.count++;
  return true;
}

// Get client IP address
export function getClientIp(request: NextRequest): string {
  const forwarded = request.headers.get('x-forwarded-for');
  const realIp = request.headers.get('x-real-ip');

  if (forwarded) {
    return forwarded.split(',')[0].trim();
  }

  if (realIp) {
    return realIp;
  }

  return 'unknown';
}
