# Message System Documentation

## Overview
A complete messaging system has been implemented to enable direct communication between users and administrators. The system supports bi-directional messaging without real-time updates (page refresh required).

## Features

### For Users (Dashboard)
- **Send Messages**: Users can send messages to admin/support team
- **View Messages**: See all sent and received messages in one place
- **Message Status**: Visual indication of read/unread messages
- **Subject Line**: Optional subject for better organization
- **Response Tracking**: See when admin has read their messages

### For Admin
- **Conversation Management**: View messages grouped by conversations
- **Filter Options**: 
  - All Messages
  - Unread Only
  - Sent Messages
  - Received Messages
- **Send Messages**: Reply to users or initiate new conversations
- **User Selection**: Dropdown to select recipient from existing senders
- **Mark as Read**: Quickly mark messages as read
- **Conversation Stats**: See total messages and unread count per conversation

## Architecture

### Database Model
**File**: `lib/models/Message.ts`

```typescript
interface IMessage {
  conversationId: string;      // Groups messages between same sender/recipient
  senderId: string;            // Clerk user ID
  senderType: 'admin' | 'user';
  senderName: string;
  senderEmail: string;
  recipientId: string;
  recipientType: 'admin' | 'user';
  subject?: string;            // Optional message subject
  message: string;             // Message content (max 5000 chars)
  read: boolean;               // Read status
  readAt?: Date;               // Timestamp when marked as read
  attachments?: Array;         // Future: Support for file attachments
  createdAt: Date;
  updatedAt: Date;
}
```

### API Routes

#### User Messages API
- `GET /api/messages` - Fetch user's messages
  - Query params: `conversationId`, `unreadOnly`
- `POST /api/messages` - Send a new message
- `GET /api/messages/[id]` - Get specific message
- `PUT /api/messages/[id]` - Mark message as read
- `DELETE /api/messages/[id]` - Delete message (sender only)

#### Admin Messages API
- `GET /api/admin/messages` - Fetch all messages with filters
  - Query params: `userId`, `conversationId`, `unreadOnly`, `status`, `page`, `limit`

### Pages

#### User Interface
**File**: `app/dashboard/messages/page.tsx`
- Access via: `/dashboard/messages`
- Features:
  - Compose new message
  - View message history
  - Mark messages as read
  - Visual distinction between admin and user messages

#### Admin Interface
**File**: `app/admin/messages/page.tsx`
- Access via: `/admin/messages`
- Features:
  - Conversation list sidebar
  - Message composition with user selection
  - Filter tabs (All/Unread/Sent)
  - Bulk message management

### Navigation Integration

#### Dashboard Navigation
Added "Messages" tab to user dashboard (`app/dashboard/page.tsx`):
- Tab redirects to `/dashboard/messages`
- Shows Mail icon
- Positioned after Contacts tab

#### Admin Navigation
Added "Messages" tab to admin dashboard (`app/admin/page.tsx`):
- Tab provides link to `/admin/messages`
- Shows Mail icon
- Positioned after Reviews tab

## Usage Examples

### User Sending a Message
```javascript
// POST /api/messages
{
  "recipientId": "admin",
  "recipientType": "admin",
  "subject": "Question about service",
  "message": "I have a question about the GST filing service..."
}
```

### Admin Replying
```javascript
// POST /api/messages
{
  "recipientId": "user_123abc",
  "recipientType": "user",
  "subject": "Re: Question about service",
  "message": "Thank you for your inquiry. Here is the information..."
}
```

### Fetching Unread Messages
```javascript
// GET /api/messages?unreadOnly=true
```

### Marking as Read
```javascript
// PUT /api/messages/[messageId]
```

## Conversation System

Messages are grouped by `conversationId` which is generated as:
- For user-to-admin: `user_{userId}_admin`
- For admin-to-user: `admin_{userId}`

This ensures all messages between two parties are grouped together, creating a conversation thread.

## Security

### Authentication
- All routes protected by Clerk authentication
- Admin routes check email against `NEXT_PUBLIC_ADMIN_EMAIL` or `ADMIN_EMAIL`
- Users can only access their own messages
- Admin can access all messages

### Authorization
- Users can only:
  - View their own messages
  - Send messages to admin
  - Mark received messages as read
  - Delete their sent messages
- Admins can:
  - View all messages
  - Send messages to any user
  - Mark any message as read
  - Access conversation statistics

## UI/UX Features

### Visual Indicators
- **Unread Badge**: Blue background for unread messages
- **Read Receipt**: Green checkmark shown on user's sent messages when admin reads them
- **Timestamp**: Shows date and time of message
- **Sender Badge**: "Admin Support" highlighted in blue for admin messages

### Empty States
- Helpful messages when no messages exist
- Call-to-action buttons to start conversations
- Icons for visual appeal

### Responsive Design
- Grid layout adapts to screen size
- Scrollable conversation list
- Mobile-friendly interface

## Future Enhancements

### Potential Features
1. **Real-time Updates**: Use WebSockets or Server-Sent Events
2. **File Attachments**: Enable users to send documents
3. **Rich Text Editor**: Support formatted text, links, etc.
4. **Typing Indicators**: Show when other party is typing
5. **Message Search**: Full-text search across messages
6. **Email Notifications**: Notify users of new messages via email
7. **Message Templates**: Pre-written responses for common queries
8. **Priority Levels**: Mark urgent messages
9. **Message Categories**: Tag messages by topic/service
10. **Archive System**: Archive old conversations

## Middleware Update

### Clerk Integration Fixed
**File**: `middleware.ts`

**Issue**: Dynamic import of Clerk middleware not detected by Clerk
**Solution**: Changed to static import

```typescript
// BEFORE (not detected):
let clerkMiddleware: any;
if (isClerkConfigured) {
  const clerkModule = require('@clerk/nextjs/server');
  clerkMiddleware = clerkModule.clerkMiddleware;
}

// AFTER (properly detected):
import { clerkMiddleware, createRouteMatcher } from '@clerk/nextjs/server';

export default clerkMiddleware(async (auth, req) => {
  if (!isPublicRoute(req)) {
    await auth.protect();
  }
  return NextResponse.next();
});
```

This ensures Clerk properly detects middleware usage and authentication works correctly.

## Testing

### Test Scenarios
1. ✅ User can send message to admin
2. ✅ Admin can view all messages
3. ✅ Admin can reply to user
4. ✅ User receives admin reply
5. ✅ Mark as read functionality works
6. ✅ Unread count displays correctly
7. ✅ Conversation grouping works
8. ✅ Authentication protects routes
9. ✅ Authorization limits access properly
10. ✅ Build compiles without errors

### Manual Testing Steps
1. Login as regular user
2. Navigate to Dashboard → Messages
3. Send a test message to admin
4. Logout and login as admin
5. Navigate to Admin → Messages
6. Verify message appears
7. Reply to the message
8. Logout and login as user
9. Verify reply appears
10. Test mark as read functionality

## Troubleshooting

### Common Issues

**Messages not appearing**
- Check database connection
- Verify Clerk authentication is working
- Check browser console for errors
- Ensure API routes are accessible

**Clerk middleware error**
- Verify `NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY` is set
- Check middleware.ts is using static imports
- Ensure Clerk packages are installed

**Cannot send messages**
- Verify user is authenticated
- Check recipient ID is valid
- Ensure message content is not empty
- Check API response for error details

## Environment Variables

Required:
```env
# Clerk Authentication
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=pk_test_...
CLERK_SECRET_KEY=sk_test_...

# Admin Email (for admin identification)
NEXT_PUBLIC_ADMIN_EMAIL=admin@example.com
# OR
ADMIN_EMAIL=admin@example.com

# MongoDB
MONGODB_URI=mongodb://localhost:27017/akos
```

## Database Indexes

For optimal performance, the following indexes are created:
- `conversationId` + `createdAt` (for conversation queries)
- `recipientId` + `read` (for unread message queries)
- `senderId` (for sender queries)
- `recipientId` (for recipient queries)

## Summary

The message system provides a complete solution for user-admin communication with:
- ✅ Secure authentication and authorization
- ✅ Clean, intuitive UI for both users and admins
- ✅ Conversation threading
- ✅ Read/unread tracking
- ✅ Flexible filtering options
- ✅ Scalable architecture
- ✅ Full TypeScript type safety
- ✅ Mobile-responsive design

The system is production-ready and can be easily extended with additional features as needed.
