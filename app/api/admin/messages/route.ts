import { NextRequest } from 'next/server';
import { currentUser } from '@clerk/nextjs/server';
import { connectDB } from '@/lib/db/mongodb';
import { Message } from '@/lib/models';
import { apiHandler, successResponse, errorResponse, getPaginationParams } from '@/lib/utils/api';

// Check if user is admin
async function isAdmin() {
  const user = await currentUser();
  if (!user) return false;
  
  const adminEmail = process.env.NEXT_PUBLIC_ADMIN_EMAIL || process.env.ADMIN_EMAIL;
  const userEmail = user.emailAddresses[0]?.emailAddress;
  return userEmail === adminEmail;
}

// GET - Fetch all messages (admin only)
export const GET = apiHandler(async (request: NextRequest) => {
  await connectDB();

  if (!await isAdmin()) {
    return errorResponse('Admin access required', 403);
  }

  const { searchParams } = new URL(request.url);
  const { page, limit, skip } = getPaginationParams(request);
  
  const userId = searchParams.get('userId');
  const conversationId = searchParams.get('conversationId');
  const unreadOnly = searchParams.get('unreadOnly') === 'true';
  const status = searchParams.get('status'); // 'sent' or 'received'

  let query: any = {};

  if (userId) {
    query.$or = [
      { senderId: userId },
      { recipientId: userId }
    ];
  }

  if (conversationId) {
    query.conversationId = conversationId;
  }

  if (unreadOnly) {
    query.read = false;
  }

  if (status === 'sent') {
    query.senderType = 'admin';
  } else if (status === 'received') {
    query.recipientType = 'admin';
  }

  const [messages, total] = await Promise.all([
    Message.find(query)
      .sort({ createdAt: -1 })
      .skip(skip)
      .limit(limit),
    Message.countDocuments(query)
  ]);

  // Get conversation stats
  const conversationStats = await Message.aggregate([
    {
      $group: {
        _id: '$conversationId',
        totalMessages: { $sum: 1 },
        unreadCount: {
          $sum: { $cond: [{ $eq: ['$read', false] }, 1, 0] }
        },
        lastMessage: { $max: '$createdAt' }
      }
    },
    { $sort: { lastMessage: -1 } }
  ]);

  return successResponse(
    {
      messages,
      conversationStats,
      pagination: {
        total,
        page,
        limit,
        totalPages: Math.ceil(total / limit),
        hasNext: page * limit < total,
        hasPrev: page > 1,
      }
    },
    'Messages retrieved successfully'
  );
});
