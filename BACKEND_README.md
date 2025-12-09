# AKOS Backend Setup Guide

## 🚀 Getting Started

This guide will help you set up the complete backend for the AKOS Taxation & Accounting Services platform.

## Prerequisites

- Node.js 18+ installed
- MongoDB installed locally OR MongoDB Atlas account
- npm or yarn package manager

## Installation Steps

### 1. Install Dependencies

```bash
npm install
```

### 2. Setup MongoDB

**Option A: Local MongoDB**
```bash
# Install MongoDB (macOS)
brew tap mongodb/brew
brew install mongodb-community

# Start MongoDB
brew services start mongodb-community

# MongoDB will run on: mongodb://localhost:27017
```

**Option B: MongoDB Atlas (Cloud)**
1. Go to [MongoDB Atlas](https://www.mongodb.com/cloud/atlas)
2. Create a free cluster
3. Get your connection string
4. Update `.env.local` with your connection string

### 3. Environment Configuration

Copy `.env.example` to `.env.local`:
```bash
cp .env.example .env.local
```

Update the following variables in `.env.local`:

```env
# MongoDB Connection
MONGODB_URI=mongodb://localhost:27017/akos
# OR for MongoDB Atlas:
# MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/akos

# JWT Secret (generate a strong random string)
JWT_SECRET=your-super-secret-key-change-this
JWT_EXPIRE=7d

# Email Configuration (for Gmail)
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=your-email@gmail.com
SMTP_PASSWORD=your-app-specific-password
FROM_EMAIL=noreply@akos.com
FROM_NAME=AKOS Services

# Admin Email (for notifications)
ADMIN_EMAIL=admin@akos.com

# Clerk Authentication (optional - if using Clerk)
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=
CLERK_SECRET_KEY=

# App URL
NEXT_PUBLIC_APP_URL=http://localhost:3000
NODE_ENV=development
```

### 4. Email Setup (Gmail)

To use Gmail for sending emails:
1. Go to your Google Account settings
2. Enable 2-factor authentication
3. Generate an App Password: [https://myaccount.google.com/apppasswords](https://myaccount.google.com/apppasswords)
4. Use this app password in `SMTP_PASSWORD`

### 5. Start the Development Server

```bash
npm run dev
```

The server will start on `http://localhost:3000`

## 📁 Project Structure

```
akos/
├── app/
│   ├── api/                    # API Routes
│   │   ├── auth/              # Authentication endpoints
│   │   ├── consultation/      # Consultation CRUD
│   │   ├── contact/           # Contact form
│   │   ├── reviews/           # Reviews system
│   │   ├── service-inquiry/   # Service inquiries
│   │   ├── services/          # Services CRUD
│   │   ├── admin/             # Admin dashboard
│   │   ├── analytics/         # Analytics tracking
│   │   └── upload/            # File uploads
│   └── ...
├── lib/
│   ├── config/                # Configuration files
│   ├── db/                    # Database connection
│   ├── models/                # Mongoose models
│   │   ├── User.ts
│   │   ├── Consultation.ts
│   │   ├── Contact.ts
│   │   ├── Review.ts
│   │   ├── ServiceInquiry.ts
│   │   ├── Service.ts
│   │   └── Analytics.ts
│   └── utils/                 # Utility functions
│       ├── api.ts             # API helpers
│       ├── auth.ts            # Authentication
│       ├── email.ts           # Email service
│       ├── validation.ts      # Zod schemas
│       └── fileUpload.ts      # File handling
├── public/
│   └── uploads/               # Uploaded files
├── .env.local                 # Environment variables
└── API_DOCUMENTATION.md       # API docs
```

## 🗄️ Database Models

### User
- Authentication and user management
- Roles: user, staff, admin
- Status: active, inactive, suspended

### Consultation
- Consultation requests
- Status tracking: pending, in-progress, completed, cancelled
- Document attachments
- Assignment to staff

### Contact
- Contact form submissions
- Status: new, read, replied, archived

### Review
- Customer reviews and ratings
- Status: pending, approved, rejected
- Verification system

### ServiceInquiry
- Service-specific inquiries
- Status: new, contacted, converted, closed
- Priority levels

### Service
- Service catalog
- Pricing tiers
- Features, requirements, benefits
- SEO optimization

### Analytics
- Event tracking
- Page views, conversions
- Service popularity metrics

## 🔑 API Authentication

The backend supports two authentication methods:

### 1. JWT Authentication (Built-in)
```javascript
// Register
POST /api/auth/register
// Login
POST /api/auth/login
// Get Profile
GET /api/auth/profile
```

### 2. Clerk Authentication (Optional)
- Already integrated in the frontend
- Can be used alongside JWT
- User sync between Clerk and MongoDB

## 🧪 Testing the API

### Using cURL

**Register a user:**
```bash
curl -X POST http://localhost:3000/api/auth/register \
  -H "Content-Type: application/json" \
  -d '{
    "name": "Test User",
    "email": "test@example.com",
    "password": "password123"
  }'
```

**Create a consultation:**
```bash
curl -X POST http://localhost:3000/api/consultation \
  -H "Content-Type: application/json" \
  -d '{
    "service": "Company Registration",
    "name": "John Doe",
    "email": "john@example.com",
    "phone": "+91 9876543210",
    "message": "I need help with company registration"
  }'
```

**Get all consultations:**
```bash
curl http://localhost:3000/api/consultation?page=1&limit=10
```

### Using Postman

1. Import the API collection
2. Set base URL: `http://localhost:3000/api`
3. Add Bearer token for authenticated requests

## 📊 Admin Dashboard

Access admin features:
1. Register an admin user or update an existing user's role to 'admin' in MongoDB
2. Login to get JWT token
3. Use token to access admin endpoints

**Dashboard stats:**
```bash
curl http://localhost:3000/api/admin/dashboard \
  -H "Authorization: Bearer YOUR_JWT_TOKEN"
```

## 🔒 Security Features

- ✅ JWT-based authentication
- ✅ Password hashing with bcrypt
- ✅ Input validation with Zod
- ✅ Rate limiting (100 req/15min)
- ✅ File type validation
- ✅ File size limits (10MB)
- ✅ XSS protection
- ✅ CORS configuration
- ✅ Role-based access control

## 📧 Email Notifications

Automated emails are sent for:
- User registration (Welcome email)
- Consultation confirmation
- Contact form acknowledgment
- Status updates
- Admin notifications for new inquiries

## 📤 File Uploads

Supported file types:
- Documents: PDF, DOC, DOCX
- Images: JPG, JPEG, PNG, WEBP
- Spreadsheets: XLS, XLSX

**Upload endpoint:**
```bash
curl -X POST http://localhost:3000/api/upload \
  -F "file=@/path/to/document.pdf"
```

## 🔄 Data Migration

To migrate existing JSON data to MongoDB:

1. Start MongoDB
2. Run the dev server
3. The first API calls will automatically create collections
4. Optionally create a migration script in `/scripts/migrate.ts`

## 🐛 Troubleshooting

### MongoDB Connection Issues
```
Error: MongooseError: The `uri` parameter to `openUri()` must be a string
```
**Solution:** Check your `MONGODB_URI` in `.env.local`

### Email Not Sending
```
Error: Invalid login: 535 Authentication failed
```
**Solution:**
- Enable 2FA on Gmail
- Generate an App Password
- Use the app password in `SMTP_PASSWORD`

### JWT Token Issues
```
Error: jwt must be provided
```
**Solution:** Include token in Authorization header:
```
Authorization: Bearer YOUR_TOKEN_HERE
```

## 📈 Performance Optimization

- ✅ Database indexing on frequently queried fields
- ✅ Pagination for large datasets
- ✅ Lean queries for read operations
- ✅ Connection pooling
- ✅ Async/await for non-blocking operations
- ✅ Parallel queries where possible

## 🚀 Production Deployment

### Environment Variables for Production

Update these in your production environment:

```env
NODE_ENV=production
MONGODB_URI=your-production-mongodb-uri
JWT_SECRET=strong-random-production-secret
NEXT_PUBLIC_APP_URL=https://yourdomain.com
SMTP_USER=your-production-email
ADMIN_EMAIL=admin@yourdomain.com
```

### Deployment Platforms

**Vercel (Recommended):**
```bash
npm install -g vercel
vercel
```

**Other Platforms:**
- Netlify
- AWS
- DigitalOcean
- Railway

### Production Checklist

- [ ] Update all environment variables
- [ ] Use MongoDB Atlas for production database
- [ ] Enable SSL/HTTPS
- [ ] Set up monitoring (Sentry, LogRocket)
- [ ] Configure CORS for your domain
- [ ] Set up backup strategy
- [ ] Enable rate limiting
- [ ] Use Cloudinary for file uploads (optional)
- [ ] Set up error tracking
- [ ] Configure logging

## 📚 Additional Resources

- [MongoDB Documentation](https://docs.mongodb.com/)
- [Next.js API Routes](https://nextjs.org/docs/app/building-your-application/routing/route-handlers)
- [Mongoose Documentation](https://mongoosejs.com/docs/)
- [Zod Documentation](https://zod.dev/)
- [JWT Documentation](https://jwt.io/)

## 🤝 Support

For issues or questions:
- Create an issue in the repository
- Email: support@akos.com
- Documentation: See `API_DOCUMENTATION.md`

## 📄 License

This project is proprietary and confidential.

---

**Backend Development Complete! 🎉**

All APIs are ready and MongoDB integrated. The system is production-ready with proper authentication, validation, error handling, and email notifications.
