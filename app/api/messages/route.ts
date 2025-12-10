import { NextRequest } from 'next/server';
import { currentUser } from '@clerk/nextjs/server';
import { connectDB } from '@/lib/db/mongodb';
import { Message } from '@/lib/models';
import { messageSchema } from '@/lib/utils/validation';
import { apiHandler, successResponse, validateRequest, errorResponse } from '@/lib/utils/api';

// GET - Fetch user's messages/conversations
export const GET = apiHandler(async (request: NextRequest) => {
  await connectDB();

  const user = await currentUser();
  if (!user) {
    return errorResponse('Unauthorized', 401);
  }

  const userId = user.id;
  const { searchParams } = new URL(request.url);
  const conversationId = searchParams.get('conversationId');
  const unreadOnly = searchParams.get('unreadOnly') === 'true';

  let query: any = {
    $or: [
      { senderId: userId },
      { recipientId: userId }
    ]
  };

  if (conversationId) {
    query.conversationId = conversationId;
  }

  if (unreadOnly) {
    query.recipientId = userId;
    query.read = false;
  }

  const messages = await Message.find(query)
    .sort({ createdAt: -1 })
    .limit(100);

  // Get unique conversations
  const conversations = await Message.aggregate([
    {
      $match: {
        $or: [
          { senderId: userId },
          { recipientId: userId }
        ]
      }
    },
    {
      $sort: { createdAt: -1 }
    },
    {
      $group: {
        _id: '$conversationId',
        lastMessage: { $first: '$$ROOT' },
        unreadCount: {
          $sum: {
            $cond: [
              { $and: [{ $eq: ['$recipientId', userId] }, { $eq: ['$read', false] }] },
              1,
              0
            ]
          }
        }
      }
    },
    {
      $sort: { 'lastMessage.createdAt': -1 }
    }
  ]);

  return successResponse(
    {
      messages,
      conversations,
    },
    'Messages retrieved successfully'
  );
});

// POST - Send a new message
export const POST = apiHandler(async (request: NextRequest) => {
  await connectDB();

  const user = await currentUser();
  if (!user) {
    return errorResponse('Unauthorized', 401);
  }

  const { data, error } = await validateRequest(request, messageSchema);
  if (error) return error;

  if (!data) {
    return errorResponse('Invalid request data', 400);
  }

  const userId = user.id;
  const userEmail = user.emailAddresses[0]?.emailAddress || '';
  const userName = user.firstName && user.lastName 
    ? `${user.firstName} ${user.lastName}` 
    : user.username || 'User';

  // Determine sender type (check if user is admin)
  const adminEmail = process.env.NEXT_PUBLIC_ADMIN_EMAIL || process.env.ADMIN_EMAIL;
  const isAdmin = userEmail === adminEmail;
  const senderType = isAdmin ? 'admin' : 'user';

  // Generate or use existing conversation ID
  const conversationId = `${senderType === 'admin' ? 'admin' : userId}_${data.recipientId}`;

  const messageData = {
    conversationId,
    senderId: userId,
    senderType,
    senderName: userName,
    senderEmail: userEmail,
    recipientId: data.recipientId,
    recipientType: data.recipientType,
    subject: data.subject,
    message: data.message,
    attachments: data.attachments || [],
    read: false,
  };

  const newMessage = await Message.create(messageData);

  return successResponse(
    newMessage,
    'Message sent successfully',
    201
  );
});
