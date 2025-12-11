import { NextRequest } from 'next/server';
import { connectDB } from '@/lib/db/mongodb';
import { Contact } from '@/lib/models';
import { contactSchema } from '@/lib/utils/validation';
import { apiHandler, successResponse, validateRequest, getPaginationParams, paginatedResponse, errorResponse, checkRateLimit, getClientIp } from '@/lib/utils/api';
import { sendContactAcknowledgment, sendEmail, emailTemplates } from '@/lib/utils/email';

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
  // Rate limiting - 5 submissions per 15 minutes per IP
  const clientIp = getClientIp(request);
  if (!checkRateLimit(`contact:${clientIp}`, 5, 15 * 60 * 1000)) {
    return errorResponse('Too many requests. Please try again later.', 429);
  }

  await connectDB();

  const { data, error } = await validateRequest(request, contactSchema);
  if (error) return error;

  // Ensure data is defined before creating
  if (!data) {
    return errorResponse('Invalid request data', 400);
  }

  // Create contact
  const contact = await Contact.create(data);

  // Send emails to both owner and user (non-blocking)
  if (contact.email) {
    const ownerEmail = process.env.OWNER_EMAIL || process.env.ADMIN_EMAIL || 'admin@akos.com';
    
    // Send acknowledgment to user
    sendContactAcknowledgment(contact.email, contact.name)
      .catch(err => console.error('User email error:', err));
    
    // Send notification to owner
    sendEmail({
      to: ownerEmail,
      subject: `New Contact Form: ${contact.subject}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
          <h2 style="color: #3b82f6;">🔔 New Contact Form Submission</h2>
          <div style="background: #f3f4f6; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <p><strong>Name:</strong> ${contact.name}</p>
            <p><strong>Email:</strong> ${contact.email}</p>
            <p><strong>Phone:</strong> ${contact.phone}</p>
            <p><strong>Subject:</strong> ${contact.subject}</p>
            <p><strong>Message:</strong></p>
            <p>${contact.message}</p>
          </div>
          <a href="${process.env.NEXT_PUBLIC_APP_URL || 'http://localhost:3000'}/admin" 
             style="background: #3b82f6; color: white; padding: 12px 24px; text-decoration: none; border-radius: 6px; display: inline-block;">
            View in Admin Dashboard
          </a>
        </div>
      `
    }).catch(err => console.error('Owner email error:', err));
  }

  return successResponse(
    contact,
    'Contact form submitted successfully',
    201
  );
});
