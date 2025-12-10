import { NextRequest } from 'next/server';
import { currentUser } from '@clerk/nextjs/server';
import { connectDB } from '@/lib/db/mongodb';
import { Message } from '@/lib/models';
import { apiHandler, successResponse, errorResponse } from '@/lib/utils/api';

// GET - Get a specific message
export const GET = apiHandler(async (request: NextRequest, { params }: { params: Promise<{ id: string }> }) => {
  await connectDB();

  const user = await currentUser();
  if (!user) {
    return errorResponse('Unauthorized', 401);
  }

  const { id } = await params;
  const userId = user.id;

  const message = await Message.findById(id);

  if (!message) {
    return errorResponse('Message not found', 404);
  }

  // Verify user has access to this message
  if (message.senderId !== userId && message.recipientId !== userId) {
    return errorResponse('Access denied', 403);
  }

  return successResponse(message, 'Message retrieved successfully');
});

// PUT - Mark message as read
export const PUT = apiHandler(async (request: NextRequest, { params }: { params: Promise<{ id: string }> }) => {
  await connectDB();

  const user = await currentUser();
  if (!user) {
    return errorResponse('Unauthorized', 401);
  }

  const { id } = await params;
  const userId = user.id;

  const message = await Message.findById(id);

  if (!message) {
    return errorResponse('Message not found', 404);
  }

  // Only recipient can mark as read
  if (message.recipientId !== userId) {
    return errorResponse('Access denied', 403);
  }

  message.read = true;
  message.readAt = new Date();
  await message.save();

  return successResponse(message, 'Message marked as read');
});

// DELETE - Delete a message
export const DELETE = apiHandler(async (request: NextRequest, { params }: { params: Promise<{ id: string }> }) => {
  await connectDB();

  const user = await currentUser();
  if (!user) {
    return errorResponse('Unauthorized', 401);
  }

  const { id } = await params;
  const userId = user.id;

  const message = await Message.findById(id);

  if (!message) {
    return errorResponse('Message not found', 404);
  }

  // Only sender can delete
  if (message.senderId !== userId) {
    return errorResponse('Access denied', 403);
  }

  await Message.findByIdAndDelete(id);

  return successResponse(null, 'Message deleted successfully');
});
