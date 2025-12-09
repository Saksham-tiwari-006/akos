# AKOS Backend API Documentation

## Overview
This is the complete backend API documentation for the AKOS Taxation & Accounting Services platform. The backend is built with Next.js 16 API Routes and MongoDB with Mongoose ODM.

## Tech Stack
- **Framework**: Next.js 16 (App Router)
- **Database**: MongoDB with Mongoose
- **Authentication**: JWT + Clerk (optional)
- **File Upload**: Local storage + Cloudinary (optional)
- **Email**: Nodemailer
- **Validation**: Zod

## Base URL
- Development: `http://localhost:3000/api`
- Production: `https://your-domain.com/api`

## Authentication
Most endpoints require authentication. Include the JWT token in the request header:
```
Authorization: Bearer <your-token>
```

## Response Format
All API responses follow this format:

**Success Response:**
```json
{
  "success": true,
  "message": "Operation successful",
  "data": { ... }
}
```

**Error Response:**
```json
{
  "success": false,
  "message": "Error description",
  "errors": [ ... ]
}
```

## API Endpoints

### Authentication

#### POST /api/auth/register
Register a new user.

**Request Body:**
```json
{
  "name": "John Doe",
  "email": "john@example.com",
  "password": "password123",
  "phone": "+91 9876543210"
}
```

**Response:**
```json
{
  "success": true,
  "message": "User registered successfully",
  "data": {
    "user": { ... },
    "token": "jwt-token"
  }
}
```

#### POST /api/auth/login
Login user.

**Request Body:**
```json
{
  "email": "john@example.com",
  "password": "password123"
}
```

**Response:**
```json
{
  "success": true,
  "message": "Login successful",
  "data": {
    "user": { ... },
    "token": "jwt-token"
  }
}
```

#### GET /api/auth/profile
Get current user profile. (Requires authentication)

**Response:**
```json
{
  "success": true,
  "message": "Profile retrieved successfully",
  "data": { ... }
}
```

#### PATCH /api/auth/profile
Update user profile. (Requires authentication)

---

### Consultations

#### GET /api/consultation
Fetch all consultations with pagination and filters.

**Query Parameters:**
- `page` (number): Page number (default: 1)
- `limit` (number): Items per page (default: 10, max: 100)
- `status` (string): Filter by status (pending, in-progress, completed, cancelled)
- `service` (string): Filter by service name
- `email` (string): Filter by email

**Response:**
```json
{
  "success": true,
  "message": "Consultations retrieved successfully",
  "data": {
    "data": [...],
    "pagination": {
      "total": 100,
      "page": 1,
      "limit": 10,
      "totalPages": 10,
      "hasNext": true,
      "hasPrev": false
    }
  }
}
```

#### POST /api/consultation
Create new consultation request.

**Request Body:**
```json
{
  "service": "Company Registration",
  "serviceCategory": "Registrations",
  "name": "John Doe",
  "email": "john@example.com",
  "phone": "+91 9876543210",
  "date": "2025-12-15",
  "time": "10:00 AM",
  "message": "I need help with company registration",
  "documents": [
    {
      "name": "document.pdf",
      "url": "/uploads/document.pdf",
      "size": 1024000,
      "type": "application/pdf"
    }
  ]
}
```

#### GET /api/consultation/[id]
Get single consultation by ID.

#### PATCH /api/consultation/[id]
Update consultation. (Requires staff/admin role)

**Request Body:**
```json
{
  "status": "in-progress",
  "assignedTo": "user-id",
  "notes": "Processing started",
  "priority": "high"
}
```

#### DELETE /api/consultation/[id]
Delete consultation. (Requires staff/admin role)

---

### Contacts

#### GET /api/contact
Fetch all contacts with pagination.

**Query Parameters:** Same as consultations

#### POST /api/contact
Submit contact form.

**Request Body:**
```json
{
  "name": "John Doe",
  "email": "john@example.com",
  "phone": "+91 9876543210",
  "subject": "Inquiry",
  "message": "I have a question about your services"
}
```

#### GET /api/contact/[id]
Get single contact by ID.

#### PATCH /api/contact/[id]
Update contact status. (Requires staff/admin role)

**Request Body:**
```json
{
  "status": "replied",
  "repliedBy": "user-id"
}
```

#### DELETE /api/contact/[id]
Delete contact. (Requires staff/admin role)

---

### Reviews

#### GET /api/reviews
Fetch all approved reviews with pagination.

**Query Parameters:**
- `page`, `limit`: Pagination
- `rating` (number): Filter by rating (1-5)
- `service` (string): Filter by service name

#### POST /api/reviews
Submit a review.

**Request Body:**
```json
{
  "name": "John Doe",
  "email": "john@example.com",
  "rating": 5,
  "message": "Excellent service!",
  "service": "Company Registration"
}
```

#### GET /api/reviews/[id]
Get single review by ID.

#### PATCH /api/reviews/[id]
Update review status. (Requires staff/admin role)

**Request Body:**
```json
{
  "status": "approved",
  "isVerified": true
}
```

#### DELETE /api/reviews/[id]
Delete review. (Requires staff/admin role)

---

### Service Inquiries

#### GET /api/service-inquiry
Fetch all service inquiries.

**Query Parameters:**
- `page`, `limit`: Pagination
- `status`: Filter by status (new, contacted, converted, closed)
- `category`: Filter by service category
- `email`: Filter by email

#### POST /api/service-inquiry
Create service inquiry.

**Request Body:**
```json
{
  "serviceName": "GST Registration",
  "serviceCategory": "Registrations",
  "name": "John Doe",
  "email": "john@example.com",
  "phone": "+91 9876543210",
  "message": "Need GST registration",
  "documents": []
}
```

#### GET /api/service-inquiry/[id]
Get single inquiry by ID.

#### PATCH /api/service-inquiry/[id]
Update inquiry. (Requires staff/admin role)

#### DELETE /api/service-inquiry/[id]
Delete inquiry. (Requires staff/admin role)

---

### Services

#### GET /api/services
Fetch all services.

**Query Parameters:**
- `page`, `limit`: Pagination
- `status`: Filter by status (active, inactive)
- `category`: Filter by category
- `search`: Search in name, description, tags
- `popular`: Filter popular services (true/false)
- `featured`: Filter featured services (true/false)

#### POST /api/services
Create new service. (Requires staff/admin role)

**Request Body:**
```json
{
  "name": "Company Registration",
  "slug": "company-registration",
  "category": "Registrations",
  "description": "Register your company with ease",
  "longDescription": "Detailed description...",
  "duration": "7-10 days",
  "pricing": {
    "basic": 5000,
    "standard": 8000,
    "premium": 12000
  },
  "features": ["Feature 1", "Feature 2"],
  "requirements": ["Requirement 1"],
  "benefits": ["Benefit 1"],
  "status": "active",
  "popular": true,
  "featured": false,
  "tags": ["company", "registration"]
}
```

#### GET /api/services/[id]
Get single service by ID or slug.

#### PATCH /api/services/[id]
Update service. (Requires staff/admin role)

#### DELETE /api/services/[id]
Delete service. (Requires staff/admin role)

---

### Admin Dashboard

#### GET /api/admin/dashboard
Get dashboard statistics. (Requires staff/admin role)

**Query Parameters:**
- `days` (number): Number of days for trends (default: 30)

**Response:**
```json
{
  "success": true,
  "data": {
    "overview": {
      "totalConsultations": 150,
      "pendingConsultations": 25,
      "totalContacts": 80,
      "totalReviews": 45,
      "averageRating": "4.5",
      ...
    },
    "serviceStats": [...],
    "monthlyTrends": [...],
    "recentActivities": {...}
  }
}
```

---

### Analytics

#### POST /api/analytics
Track analytics event.

**Request Body:**
```json
{
  "type": "page_view",
  "page": "/services/company-registration",
  "service": "Company Registration",
  "sessionId": "session-123",
  "metadata": {}
}
```

#### GET /api/analytics
Get analytics data. (Requires admin role)

**Query Parameters:**
- `startDate` (ISO date): Start date
- `endDate` (ISO date): End date
- `type`: Event type filter

---

### File Upload

#### POST /api/upload
Upload single or multiple files.

**Request:** multipart/form-data
- `file`: File(s) to upload (max 10 files, 10MB each)
- `folder` (optional): Upload folder name

**Allowed file types:**
- PDF, JPEG, JPG, PNG, WEBP
- DOC, DOCX, XLS, XLSX

**Response:**
```json
{
  "success": true,
  "message": "Files uploaded successfully",
  "data": {
    "files": [
      {
        "name": "document.pdf",
        "url": "/uploads/document-123456.pdf",
        "size": 1024000,
        "type": "application/pdf",
        "uploadedAt": "2025-12-07T..."
      }
    ],
    "count": 1
  }
}
```

---

## Error Codes

- `400` - Bad Request (Validation errors, missing fields)
- `401` - Unauthorized (Authentication required)
- `403` - Forbidden (Insufficient permissions)
- `404` - Not Found (Resource doesn't exist)
- `500` - Internal Server Error

---

## Rate Limiting

API requests are rate-limited to prevent abuse:
- **Default**: 100 requests per 15 minutes per IP
- Exceeding the limit returns `429 Too Many Requests`

---

## Pagination

All list endpoints support pagination:
- Default: 10 items per page
- Maximum: 100 items per page

**Pagination Response:**
```json
{
  "pagination": {
    "total": 100,
    "page": 1,
    "limit": 10,
    "totalPages": 10,
    "hasNext": true,
    "hasPrev": false
  }
}
```

---

## Environment Variables

Required environment variables:

```env
# MongoDB
MONGODB_URI=mongodb://localhost:27017/akos

# JWT
JWT_SECRET=your-secret-key
JWT_EXPIRE=7d

# Email (SMTP)
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=your-email@gmail.com
SMTP_PASSWORD=your-password
FROM_EMAIL=noreply@akos.com
FROM_NAME=AKOS Services

# Admin
ADMIN_EMAIL=admin@akos.com

# Clerk (Optional)
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=
CLERK_SECRET_KEY=

# Cloudinary (Optional)
CLOUDINARY_CLOUD_NAME=
CLOUDINARY_API_KEY=
CLOUDINARY_API_SECRET=
```

---

## Testing

Use tools like Postman, Insomnia, or cURL to test the API.

**Example cURL:**
```bash
curl -X POST http://localhost:3000/api/auth/register \
  -H "Content-Type: application/json" \
  -d '{"name":"John Doe","email":"john@example.com","password":"password123"}'
```

---

## Support

For issues or questions, contact: support@akos.com
