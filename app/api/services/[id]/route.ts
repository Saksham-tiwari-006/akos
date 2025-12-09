import { NextRequest } from 'next/server';
import { connectDB } from '@/lib/db/mongodb';
import { Service } from '@/lib/models';
import { serviceSchema } from '@/lib/utils/validation';
import { apiHandler, successResponse, errorResponse, validateRequest } from '@/lib/utils/api';
import { requireStaffOrAdmin } from '@/lib/utils/auth';

// GET - Fetch single service by ID or slug
export const GET = apiHandler(async (request: NextRequest, { params }: { params: Promise<{ id: string }> }) => {
  await connectDB();
  const { id } = await params;

  // Try to find by ID first, then by slug
  let service = await Service.findById(id);
  if (!service) {
    service = await Service.findOne({ slug: id });
  }

  if (!service) {
    return errorResponse('Service not found', 404);
  }

  return successResponse(service, 'Service retrieved successfully');
});

// PATCH - Update service (admin/staff only)
export const PATCH = apiHandler(async (request: NextRequest, { params }: { params: Promise<{ id: string }> }) => {
  await connectDB();
  const { id } = await params;

  // Check authentication
  const user = await requireStaffOrAdmin(request);

  const body = await request.json();

  // If slug is being updated, check for duplicates
  if (body.slug) {
    const existing = await Service.findOne({
      slug: body.slug,
      _id: { $ne: id }
    });
    if (existing) {
      return errorResponse('Service with this slug already exists', 400);
    }
  }

  const service = await Service.findByIdAndUpdate(
    id,
    { ...body, updatedBy: user.userId },
    { new: true, runValidators: true }
  );

  if (!service) {
    return errorResponse('Service not found', 404);
  }

  return successResponse(service, 'Service updated successfully');
});

// DELETE - Delete service (admin only)
export const DELETE = apiHandler(async (request: NextRequest, { params }: { params: Promise<{ id: string }> }) => {
  await connectDB();
  const { id } = await params;

  // Check admin authentication
  await requireStaffOrAdmin(request);

  const service = await Service.findByIdAndDelete(id);

  if (!service) {
    return errorResponse('Service not found', 404);
  }

  return successResponse(
    { id: service._id },
    'Service deleted successfully'
  );
});
