# 🚀 AKOS System Architecture & Data Flow Documentation

## Table of Contents
1. [System Overview](#system-overview)
2. [Architecture](#architecture)
3. [Data Flow: User to Admin](#data-flow-user-to-admin)
4. [API Endpoints](#api-endpoints)
5. [Database Schema](#database-schema)
6. [Authentication Flow](#authentication-flow)
7. [File Upload with Cloudinary](#file-upload-with-cloudinary)
8. [Testing Guide](#testing-guide)

---

## System Overview

**AKOS** is a full-stack web application for taxation, accounting, and business registration services. It uses:

- **Frontend**: Next.js 16 (App Router), React 19, TailwindCSS
- **Backend**: Next.js API Routes
- **Database**: MongoDB with Mongoose ODM
- **Authentication**: Clerk (with JWT fallback)
- **File Storage**: Cloudinary
- **Email**: Nodemailer

---

## Architecture

```
┌─────────────────────────────────────────────────────────────┐
│                         FRONTEND                             │
│  (Next.js 16 App Router + React 19 + TailwindCSS)          │
└────────────────┬────────────────────────────────────────────┘
                 │
                 │ HTTP Requests (JSON/Form Data)
                 ▼
┌─────────────────────────────────────────────────────────────┐
│                    API ROUTES (Next.js)                      │
│  ┌──────────────────────────────────────────────────────┐  │
│  │  /api/consultation   /api/contact   /api/reviews     │  │
│  │  /api/services      /api/upload     /api/admin/*     │  │
│  │  /api/auth/*        /api/analytics                   │  │
│  └──────────────────────────────────────────────────────┘  │
└────────────┬───────────────────────┬────────────────────────┘
             │                       │
             │                       │ Upload Files
             ▼                       ▼
┌─────────────────────┐    ┌──────────────────────┐
│     MONGODB         │    │    CLOUDINARY        │
│  (Mongoose ODM)     │    │  (Media Storage)     │
└─────────────────────┘    └──────────────────────┘
```

---

## Data Flow: User to Admin

### 1. **Consultation Request Flow**

```
USER SUBMITS FORM
       │
       ▼
┌────────────────────────────────────────────┐
│  Frontend: /app/page.tsx or service pages  │
│  Component: ServiceConsultationForm        │
└────────────────┬───────────────────────────┘
                 │
                 │ POST /api/consultation
                 │ {name, email, phone, service, message}
                 ▼
┌────────────────────────────────────────────┐
│  API: /app/api/consultation/route.ts       │
│  1. Validate input (Zod schema)            │
│  2. Create consultation document           │
│  3. Save to MongoDB                        │
│  4. Send email notification (optional)     │
└────────────────┬───────────────────────────┘
                 │
                 ▼
┌────────────────────────────────────────────┐
│  MongoDB: consultations collection         │
│  Document: {                               │
│    _id, name, email, phone, service,       │
│    message, status, priority, createdAt    │
│  }                                         │
└────────────────┬───────────────────────────┘
                 │
                 │
                 ▼
┌────────────────────────────────────────────┐
│  ADMIN VIEWS DATA                          │
│  1. Admin logs in (/login)                 │
│  2. Navigates to /admin                    │
│  3. Dashboard shows consultations          │
│  4. API: GET /api/consultation             │
└────────────────────────────────────────────┘
```

### 2. **Contact Form Flow**

```
USER FILLS CONTACT FORM
       │
       ▼
┌────────────────────────────────────────────┐
│  Frontend: /app/contact/page.tsx           │
│  Form fields: name, email, phone,          │
│               subject, message             │
└────────────────┬───────────────────────────┘
                 │
                 │ POST /api/contact
                 ▼
┌────────────────────────────────────────────┐
│  API: /app/api/contact/route.ts            │
│  1. Validate input                         │
│  2. Create contact document                │
│  3. Save to MongoDB                        │
│  4. Send email to admin                    │
└────────────────┬───────────────────────────┘
                 │
                 ▼
┌────────────────────────────────────────────┐
│  MongoDB: contacts collection              │
│  Admin can view at /admin/contacts         │
└────────────────────────────────────────────┘
```

### 3. **Review Submission Flow**

```
USER SUBMITS REVIEW
       │
       ▼
┌────────────────────────────────────────────┐
│  Frontend: Service pages                   │
│  Form: name, email, service, rating,       │
│        message                             │
└────────────────┬───────────────────────────┘
                 │
                 │ POST /api/reviews
                 ▼
┌────────────────────────────────────────────┐
│  API: /app/api/reviews/route.ts            │
│  1. Validate input                         │
│  2. Create review (status: pending)        │
│  3. Save to MongoDB                        │
└────────────────┬───────────────────────────┘
                 │
                 ▼
┌────────────────────────────────────────────┐
│  MongoDB: reviews collection               │
│  Status: 'pending' (not visible on site)   │
└────────────────┬───────────────────────────┘
                 │
                 │ ADMIN APPROVAL
                 ▼
┌────────────────────────────────────────────┐
│  Admin Dashboard: /admin/reviews           │
│  PUT /api/reviews/:id                      │
│  Update status to 'approved'               │
└────────────────┬───────────────────────────┘
                 │
                 ▼
┌────────────────────────────────────────────┐
│  Review now visible on website             │
│  GET /api/reviews?status=approved          │
└────────────────────────────────────────────┘
```

### 4. **File Upload Flow (with Cloudinary)**

```
USER UPLOADS FILE
       │
       ▼
┌────────────────────────────────────────────┐
│  Frontend: FileUpload component            │
│  FormData with file(s)                     │
└────────────────┬───────────────────────────┘
                 │
                 │ POST /api/upload
                 │ Content-Type: multipart/form-data
                 ▼
┌────────────────────────────────────────────┐
│  API: /app/api/upload/route.ts             │
│  1. Validate file type & size              │
│  2. Convert to buffer                      │
│  3. Upload to Cloudinary                   │
└────────────────┬───────────────────────────┘
                 │
                 ▼
┌────────────────────────────────────────────┐
│  CLOUDINARY Storage                        │
│  Returns: {url, publicId}                  │
└────────────────┬───────────────────────────┘
                 │
                 │ Return URL to frontend
                 ▼
┌────────────────────────────────────────────┐
│  Store URL in consultation/inquiry         │
│  documents field: [{url, name, size}]      │
└────────────────────────────────────────────┘
```

---

## API Endpoints

### **Public APIs** (No authentication required)

| Method | Endpoint | Description |
|--------|----------|-------------|
| `POST` | `/api/consultation` | Submit consultation request |
| `POST` | `/api/contact` | Submit contact form |
| `POST` | `/api/reviews` | Submit review (pending approval) |
| `GET` | `/api/services` | Get all services |
| `GET` | `/api/services/:id` | Get service by ID |
| `GET` | `/api/reviews` | Get approved reviews |
| `POST` | `/api/service-inquiry` | Submit service inquiry |
| `POST` | `/api/upload` | Upload files to Cloudinary |

### **Admin APIs** (Authentication required)

| Method | Endpoint | Description |
|--------|----------|-------------|
| `POST` | `/api/auth/login` | Admin login |
| `POST` | `/api/auth/register` | Register new user |
| `GET` | `/api/auth/profile` | Get user profile |
| `GET` | `/api/admin/dashboard` | Get dashboard stats |
| `GET` | `/api/consultation` | Get all consultations |
| `GET` | `/api/consultation/:id` | Get consultation by ID |
| `PUT` | `/api/consultation/:id` | Update consultation |
| `DELETE` | `/api/consultation/:id` | Delete consultation |
| `GET` | `/api/contact` | Get all contacts |
| `PUT` | `/api/reviews/:id` | Approve/reject review |
| `DELETE` | `/api/reviews/:id` | Delete review |
| `POST` | `/api/services` | Create service |
| `PUT` | `/api/services/:id` | Update service |
| `DELETE` | `/api/services/:id` | Delete service |
| `POST` | `/api/analytics` | Track analytics |

---

## Database Schema

### **Consultations Collection**
```typescript
{
  _id: ObjectId,
  service: String (required),
  name: String (required),
  email: String (required),
  phone: String (required),
  message: String (required),
  status: 'pending' | 'in-progress' | 'completed' | 'cancelled',
  priority: 'low' | 'medium' | 'high',
  documents: [{url, name, size, uploadedAt}],
  notes: String,
  assignedTo: ObjectId (ref: User),
  createdAt: Date,
  updatedAt: Date
}
```

### **Contacts Collection**
```typescript
{
  _id: ObjectId,
  name: String (required),
  email: String (required),
  phone: String,
  subject: String (required),
  message: String (required),
  status: 'new' | 'read' | 'replied',
  reply: String,
  repliedAt: Date,
  repliedBy: ObjectId (ref: User),
  createdAt: Date,
  updatedAt: Date
}
```

### **Reviews Collection**
```typescript
{
  _id: ObjectId,
  name: String (required),
  email: String (required),
  rating: Number (1-5, required),
  message: String (required),
  avatar: String,
  service: String,
  status: 'pending' | 'approved' | 'rejected',
  isVerified: Boolean,
  helpful: Number,
  createdAt: Date,
  updatedAt: Date
}
```

### **Services Collection**
```typescript
{
  _id: ObjectId,
  name: String (required),
  slug: String (unique, required),
  category: String (required),
  description: String (required),
  duration: String,
  pricing: {
    basic: Number,
    standard: Number,
    premium: Number,
    custom: Boolean
  },
  features: [String],
  requirements: [String],
  benefits: [String],
  status: 'active' | 'inactive' | 'draft',
  popular: Boolean,
  featured: Boolean,
  order: Number,
  tags: [String],
  seo: {
    title: String,
    description: String,
    keywords: [String]
  },
  createdAt: Date,
  updatedAt: Date
}
```

### **Users Collection**
```typescript
{
  _id: ObjectId,
  name: String (required),
  email: String (unique, required),
  password: String (hashed, required),
  role: 'user' | 'admin' | 'manager',
  phone: String,
  avatar: String,
  isActive: Boolean,
  emailVerified: Boolean,
  lastLogin: Date,
  createdAt: Date,
  updatedAt: Date
}
```

---

## Authentication Flow

### **User Registration**
```
1. User fills form at /login (Sign Up tab)
2. POST /api/auth/register {name, email, password, phone}
3. Password hashed with bcrypt (10 rounds)
4. User created in MongoDB
5. Success message shown
6. User can now login
```

### **User Login**
```
1. User enters credentials at /login
2. POST /api/auth/login {email, password}
3. Backend verifies password (bcrypt.compare)
4. JWT token generated (expires in 7 days)
5. Token stored in cookie (httpOnly)
6. Redirect to /admin (if admin) or / (if user)
```

### **Protected Routes**
```
1. User accesses /admin/*
2. Middleware checks for auth-token cookie
3. Verifies JWT token
4. If valid: Allow access
5. If invalid: Redirect to /login
```

---

## File Upload with Cloudinary

### **Configuration**
```env
CLOUDINARY_CLOUD_NAME=your-cloud-name
CLOUDINARY_API_KEY=your-api-key
CLOUDINARY_API_SECRET=your-api-secret
```

### **Upload Process**
```typescript
// 1. User selects file
<input type="file" onChange={handleUpload} />

// 2. Frontend sends to API
const formData = new FormData();
formData.append('file', file);
formData.append('folder', 'consultations');

fetch('/api/upload', {
  method: 'POST',
  body: formData
});

// 3. Backend processes
- Validates file (type, size)
- Converts to buffer
- Uploads to Cloudinary
- Returns {url, publicId}

// 4. Frontend stores URL
consultationData.documents.push({
  url: result.url,
  name: file.name,
  size: file.size
});
```

### **Supported File Types**
- Images: JPG, JPEG, PNG, WEBP
- Documents: PDF, DOC, DOCX, XLS, XLSX
- Max Size: 10MB per file

---

## Testing Guide

### **Test Consultation API**
```bash
curl -X POST http://localhost:3000/api/consultation \
  -H "Content-Type: application/json" \
  -d '{
    "name": "Test User",
    "email": "test@example.com",
    "phone": "+91-9876543210",
    "service": "Company Registration",
    "message": "I need help with company registration"
  }'
```

**Expected Response:**
```json
{
  "success": true,
  "message": "Consultation request submitted successfully",
  "data": {
    "_id": "...",
    "name": "Test User",
    "email": "test@example.com",
    "status": "pending",
    "createdAt": "2025-12-09T..."
  }
}
```

### **Test Contact API**
```bash
curl -X POST http://localhost:3000/api/contact \
  -H "Content-Type: application/json" \
  -d '{
    "name": "John Doe",
    "email": "john@example.com",
    "phone": "+91-9988776655",
    "subject": "General Inquiry",
    "message": "I have some questions"
  }'
```

### **Test Review API**
```bash
curl -X POST http://localhost:3000/api/reviews \
  -H "Content-Type: application/json" \
  -d '{
    "name": "Sarah Johnson",
    "email": "sarah@example.com",
    "service": "ITR Filing",
    "rating": 5,
    "message": "Excellent service!"
  }'
```

### **Test Services API**
```bash
# Get all services
curl http://localhost:3000/api/services

# Get service by ID
curl http://localhost:3000/api/services/[serviceId]
```

### **Test File Upload**
```bash
curl -X POST http://localhost:3000/api/upload \
  -F "file=@/path/to/document.pdf" \
  -F "folder=test-uploads"
```

### **Test Admin Login**
```bash
curl -X POST http://localhost:3000/api/auth/login \
  -H "Content-Type: application/json" \
  -d '{
    "email": "admin@akos.com",
    "password": "admin123"
  }'
```

---

## Admin Dashboard Features

### **Dashboard Overview** (`/admin`)
- Total consultations, contacts, reviews
- Recent activity
- Pending approvals
- Analytics graphs

### **Manage Consultations** (`/admin/consultations`)
- View all consultation requests
- Filter by status (pending, in-progress, completed)
- Update status and priority
- Add notes
- View attached documents

### **Manage Contacts** (`/admin/contacts`)
- View all contact messages
- Mark as read/replied
- Send replies
- Archive old contacts

### **Manage Reviews** (`/admin/reviews`)
- View pending reviews
- Approve or reject
- Mark as verified
- Delete spam reviews

### **Manage Services** (`/admin/services`)
- Create new services
- Edit existing services
- Set pricing tiers
- Toggle active/inactive

---

## Environment Variables Required

```env
# MongoDB
MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/akos

# JWT
JWT_SECRET=your-super-secret-jwt-key-minimum-32-characters
JWT_EXPIRE=7d

# Email (Nodemailer)
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=your-email@gmail.com
SMTP_PASSWORD=your-gmail-app-password
FROM_EMAIL=noreply@akos.com
FROM_NAME=AKOS Services

# Cloudinary
CLOUDINARY_CLOUD_NAME=your-cloud-name
CLOUDINARY_API_KEY=your-api-key
CLOUDINARY_API_SECRET=your-api-secret

# Clerk (Optional)
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=pk_test_...
CLERK_SECRET_KEY=sk_test_...

# App
NEXT_PUBLIC_APP_URL=http://localhost:3000
NODE_ENV=development
```

---

## Quick Start Commands

```bash
# Install dependencies
npm install

# Seed database with sample data
npm run db:seed

# Start development server
npm run dev

# Reset database
npm run db:reset

# Build for production
npm run build

# Start production server
npm start
```

---

## Troubleshooting

### **"Cannot connect to MongoDB"**
- Check MONGODB_URI in .env.local
- Verify MongoDB cluster is running
- Check network/firewall settings

### **"File upload fails"**
- Verify Cloudinary credentials
- Check file size (max 10MB)
- Ensure file type is allowed

### **"Unauthorized error on admin routes"**
- Login at /login with admin credentials
- Check if auth-token cookie is set
- Verify JWT_SECRET matches

### **"API returns HTML instead of JSON"**
- Route file may not exist
- Check file naming: `route.ts` not `route.tsx`
- Verify API is exported: `export const POST/GET/PUT/DELETE`

---

## Support

For issues or questions:
- Review API documentation: `API_DOCUMENTATION.md`
- Check backend setup: `BACKEND_README.md`
- View project summary: `PROJECT_SUMMARY.md`

**Admin Credentials (Development):**
- Email: `admin@akos.com`
- Password: `admin123`

---

**System is ready! 🚀**
