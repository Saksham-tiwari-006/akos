import { NextRequest } from 'next/server';
import { connectDB } from '@/lib/db/mongodb';
import { Analytics } from '@/lib/models';
import { analyticsSchema } from '@/lib/utils/validation';
import { apiHandler, successResponse, errorResponse, validateRequest } from '@/lib/utils/api';
import { getClientIp } from '@/lib/utils/api';

// POST - Track analytics event
export const POST = apiHandler(async (request: NextRequest) => {
  await connectDB();

  const { data, error } = await validateRequest(request, analyticsSchema);
  if (error) return error;

  // Get client information
  const ipAddress = getClientIp(request);
  const userAgent = request.headers.get('user-agent') || undefined;
  const referrer = request.headers.get('referer') || undefined;

  // Create analytics event
  const event = await Analytics.create({
    ...data,
    ipAddress,
    userAgent,
    referrer,
  });

  return successResponse(
    { id: event._id },
    'Analytics event tracked',
    201
  );
});

// GET - Fetch analytics data (admin only)
export const GET = apiHandler(async (request: NextRequest) => {
  await connectDB();

  const { searchParams } = new URL(request.url);

  // Date range filter
  const startDate = searchParams.get('startDate');
  const endDate = searchParams.get('endDate');
  const type = searchParams.get('type');

  const query: any = {};

  if (startDate || endDate) {
    query.createdAt = {};
    if (startDate) query.createdAt.$gte = new Date(startDate);
    if (endDate) query.createdAt.$lte = new Date(endDate);
  }

  if (type) query.type = type;

  // Aggregate analytics data
  const [
    totalEvents,
    eventsByType,
    topPages,
    topServices,
  ] = await Promise.all([
    Analytics.countDocuments(query),
    Analytics.aggregate([
      { $match: query },
      { $group: { _id: '$type', count: { $sum: 1 } } },
      { $sort: { count: -1 } },
    ]),
    Analytics.aggregate([
      { $match: { ...query, type: 'page_view', page: { $exists: true } } },
      { $group: { _id: '$page', views: { $sum: 1 } } },
      { $sort: { views: -1 } },
      { $limit: 10 },
    ]),
    Analytics.aggregate([
      { $match: { ...query, service: { $exists: true } } },
      { $group: { _id: '$service', count: { $sum: 1 } } },
      { $sort: { count: -1 } },
      { $limit: 10 },
    ]),
  ]);

  return successResponse({
    totalEvents,
    eventsByType,
    topPages,
    topServices,
  }, 'Analytics data retrieved successfully');
});
