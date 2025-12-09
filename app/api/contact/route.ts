import { NextRequest } from 'next/server';
import { connectDB } from '@/lib/db/mongodb';
import { Contact } from '@/lib/models';
import { contactSchema } from '@/lib/utils/validation';
import { apiHandler, successResponse, validateRequest, getPaginationParams, paginatedResponse } from '@/lib/utils/api';
import { sendContactAcknowledgment } from '@/lib/utils/email';

// GET - Fetch all contacts with pagination
export const GET = apiHandler(async (request: NextRequest) => {
  await connectDB();

  const { searchParams } = new URL(request.url);
  const { page, limit, skip } = getPaginationParams(request);

  // Build query filters
  const query: any = {};

  const status = searchParams.get('status');
  if (status) query.status = status;

  // Fetch contacts
  const [contacts, total] = await Promise.all([
    Contact.find(query)
      .sort({ createdAt: -1 })
      .skip(skip)
      .limit(limit)
      .populate('userId', 'name email')
      .populate('repliedBy', 'name email')
      .lean(),
    Contact.countDocuments(query),
  ]);

  return successResponse(
    paginatedResponse(contacts, total, page, limit),
    'Contacts retrieved successfully'
  );
});

// POST - Create new contact
export const POST = apiHandler(async (request: NextRequest) => {
  await connectDB();

  const { data, error } = await validateRequest(request, contactSchema);
  if (error) return error;

  // Create contact
  const contact = await Contact.create(data);

  // Send acknowledgment email (non-blocking)
  if (data && contact.email) {
    sendContactAcknowledgment(contact.email, contact.name)
      .catch(err => console.error('Email error:', err));
  }

  return successResponse(
    contact,
    'Contact form submitted successfully',
    201
  );
});
