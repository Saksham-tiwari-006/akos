import { NextRequest } from 'next/server';
import { connectDB } from '@/lib/db/mongodb';
import { Service } from '@/lib/models';
import { serviceSchema } from '@/lib/utils/validation';
import { apiHandler, successResponse, errorResponse, validateRequest, getPaginationParams, paginatedResponse } from '@/lib/utils/api';
import { requireStaffOrAdmin } from '@/lib/utils/auth';

// GET - Fetch all services with pagination and filters
export const GET = apiHandler(async (request: NextRequest) => {
  await connectDB();

  const { searchParams } = new URL(request.url);
  const { page, limit, skip } = getPaginationParams(request);

  // Build query filters
  const query: any = {};

  const status = searchParams.get('status');
  if (status) query.status = status;

  const category = searchParams.get('category');
  if (category) query.category = category;

  const search = searchParams.get('search');
  if (search) {
    query.$or = [
      { name: new RegExp(search, 'i') },
      { description: new RegExp(search, 'i') },
      { tags: new RegExp(search, 'i') },
    ];
  }

  const popular = searchParams.get('popular');
  if (popular === 'true') query.popular = true;

  const featured = searchParams.get('featured');
  if (featured === 'true') query.featured = true;

  // Fetch services
  const [services, total] = await Promise.all([
    Service.find(query)
      .sort({ order: 1, createdAt: -1 })
      .skip(skip)
      .limit(limit)
      .lean(),
    Service.countDocuments(query),
  ]);

  return successResponse(
    paginatedResponse(services, total, page, limit),
    'Services retrieved successfully'
  );
});

// POST - Create new service (admin/staff only)
export const POST = apiHandler(async (request: NextRequest) => {
  await connectDB();

  // Check authentication
  const user = await requireStaffOrAdmin(request);

  const { data, error } = await validateRequest(request, serviceSchema);
  if (error) return error;

  // Check if service with same slug already exists
  const existing = await Service.findOne({ slug: data?.slug });
  if (existing) {
    return errorResponse('Service with this slug already exists', 400);
  }

  // Create service
  const service = await Service.create({
    ...data,
    createdBy: user.userId,
  });

  return successResponse(
    service,
    'Service created successfully',
    201
  );
});
