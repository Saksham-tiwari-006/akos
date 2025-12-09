import { NextRequest } from 'next/server';
import { connectDB } from '@/lib/db/mongodb';
import { Consultation, Contact, Review, ServiceInquiry, User } from '@/lib/models';
import { apiHandler, successResponse } from '@/lib/utils/api';
import { requireStaffOrAdmin } from '@/lib/utils/auth';

// GET - Fetch dashboard statistics
export const GET = apiHandler(async (request: NextRequest) => {
  await connectDB();

  // Check authentication
  await requireStaffOrAdmin(request);

  const { searchParams } = new URL(request.url);
  const days = parseInt(searchParams.get('days') || '30');
  const startDate = new Date();
  startDate.setDate(startDate.getDate() - days);

  // Parallel queries for better performance
  const [
    totalConsultations,
    pendingConsultations,
    inProgressConsultations,
    completedConsultations,
    totalContacts,
    unreadContacts,
    totalReviews,
    pendingReviews,
    approvedReviews,
    averageRating,
    totalServiceInquiries,
    newInquiries,
    totalUsers,
    activeUsers,
    recentConsultations,
    recentContacts,
    recentInquiries,
  ] = await Promise.all([
    // Consultations stats
    Consultation.countDocuments(),
    Consultation.countDocuments({ status: 'pending' }),
    Consultation.countDocuments({ status: 'in-progress' }),
    Consultation.countDocuments({ status: 'completed' }),

    // Contacts stats
    Contact.countDocuments(),
    Contact.countDocuments({ status: 'new' }),

    // Reviews stats
    Review.countDocuments(),
    Review.countDocuments({ status: 'pending' }),
    Review.countDocuments({ status: 'approved' }),
    Review.aggregate([
      { $match: { status: 'approved' } },
      { $group: { _id: null, avgRating: { $avg: '$rating' } } }
    ]),

    // Service inquiries stats
    ServiceInquiry.countDocuments(),
    ServiceInquiry.countDocuments({ status: 'new' }),

    // Users stats
    User.countDocuments(),
    User.countDocuments({ status: 'active' }),

    // Recent activities
    Consultation.find().sort({ createdAt: -1 }).limit(5).select('name service status createdAt'),
    Contact.find().sort({ createdAt: -1 }).limit(5).select('name subject status createdAt'),
    ServiceInquiry.find().sort({ createdAt: -1 }).limit(5).select('name serviceName status createdAt'),
  ]);

  // Service-wise inquiries
  const serviceStats = await ServiceInquiry.aggregate([
    {
      $group: {
        _id: '$serviceCategory',
        count: { $sum: 1 },
      },
    },
    { $sort: { count: -1 } },
    { $limit: 10 },
  ]);

  // Monthly trends
  const monthlyConsultations = await Consultation.aggregate([
    {
      $match: {
        createdAt: { $gte: startDate },
      },
    },
    {
      $group: {
        _id: {
          year: { $year: '$createdAt' },
          month: { $month: '$createdAt' },
        },
        count: { $sum: 1 },
      },
    },
    { $sort: { '_id.year': 1, '_id.month': 1 } },
  ]);

  const stats = {
    overview: {
      totalConsultations,
      pendingConsultations,
      inProgressConsultations,
      completedConsultations,
      totalContacts,
      unreadContacts,
      totalReviews,
      pendingReviews,
      approvedReviews,
      averageRating: averageRating[0]?.avgRating?.toFixed(2) || 0,
      totalServiceInquiries,
      newInquiries,
      totalUsers,
      activeUsers,
    },
    serviceStats,
    monthlyTrends: monthlyConsultations,
    recentActivities: {
      consultations: recentConsultations,
      contacts: recentContacts,
      inquiries: recentInquiries,
    },
  };

  return successResponse(stats, 'Dashboard statistics retrieved successfully');
});
