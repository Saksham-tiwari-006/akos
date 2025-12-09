# 🎯 AKOS Quick Reference Guide

## 🚀 Quick Start Commands

```bash
# Start development server
npm run dev

# Seed database with test data
npm run db:seed

# Test all APIs
./scripts/test-apis.sh

# Build for production
npm run build

# Start production server
npm start
```

---

## 🔐 Admin Credentials

```
Email: admin@akos.com
Password: admin123
```

**To change admin:**
Edit `.env.local`:
```env
ADMIN_EMAIL=your-new-admin@example.com
NEXT_PUBLIC_ADMIN_EMAIL=your-new-admin@example.com
```

---

## 🌐 Important URLs

| Page | URL | Access |
|------|-----|--------|
| Homepage | http://localhost:3000 | Public |
| Login/Signup | http://localhost:3000/login | Public |
| User Dashboard | http://localhost:3000/dashboard | Authenticated Users |
| Admin Dashboard | http://localhost:3000/admin | Admin Only |
| Contact Form | http://localhost:3000/contact | Public |

---

## 📡 API Endpoints

### ✅ Public APIs (No Auth Required)

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/api/services` | List all services |
| GET | `/api/reviews` | Get approved reviews |
| POST | `/api/contact` | Submit contact form |
| POST | `/api/consultation` | Request consultation |
| POST | `/api/service-inquiry` | Service inquiry |
| POST | `/api/reviews` | Submit review |

### 🔒 User APIs (Auth Required)

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/api/user/submissions` | Get user's submissions |

### 🔐 Admin APIs (Admin Auth Required)

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/api/admin/consultations` | List all consultations |
| GET | `/api/admin/consultations?status=pending` | Filter by status |
| GET | `/api/admin/consultations?search=john` | Search consultations |
| PUT | `/api/admin/consultations/[id]` | Update consultation |
| DELETE | `/api/admin/consultations/[id]` | Delete consultation |
| GET | `/api/admin/contacts` | List all contacts |
| PUT | `/api/admin/contacts/[id]` | Update contact |
| DELETE | `/api/admin/contacts/[id]` | Delete contact |
| GET | `/api/admin/reviews` | List all reviews |
| PUT | `/api/admin/reviews/[id]` | Approve/reject review |
| DELETE | `/api/admin/reviews/[id]` | Delete review |

---

## 📊 Database Models

### Service
```typescript
{
  name: string
  slug: string
  category: string
  description: string
  duration: string
  pricing: { basic, standard, premium }
  features: string[]
}
```

### Consultation
```typescript
{
  service: string
  name: string
  email: string
  phone: string
  message: string
  status: 'pending' | 'in-progress' | 'completed' | 'cancelled'
  priority: 'low' | 'medium' | 'high'
  documents: string[]
}
```

### Contact
```typescript
{
  name: string
  email: string
  phone: string
  subject: string
  message: string
  status: 'new' | 'read' | 'replied' | 'archived'
}
```

### Review
```typescript
{
  name: string
  email: string
  rating: number (1-5)
  comment: string
  service: string
  status: 'pending' | 'approved' | 'rejected'
  isVerified: boolean
}
```

---

## 🎨 Dashboard Features

### User Dashboard (`/dashboard`)
- ✅ View all submissions (consultations, contacts, reviews, inquiries)
- ✅ Track status of each submission
- ✅ Download documents
- ✅ See statistics (total, pending)
- ✅ Refresh data anytime
- ✅ 5 tabs: Overview, Consultations, Messages, Reviews, Inquiries

### Admin Dashboard (`/admin`)
- ✅ View ALL user submissions
- ✅ Update consultation status & priority
- ✅ Respond to contact messages
- ✅ Approve/reject reviews
- ✅ Delete any submission
- ✅ Search and filter
- ✅ Real-time statistics
- ✅ 4 tabs: Overview, Consultations, Messages, Reviews

---

## 🔧 Common Tasks

### 1. Test Contact Form
```bash
curl -X POST http://localhost:3000/api/contact \
  -H "Content-Type: application/json" \
  -d '{
    "name": "John Doe",
    "email": "john@example.com",
    "phone": "1234567890",
    "subject": "Test",
    "message": "Hello"
  }'
```

### 2. Test Consultation Request
```bash
curl -X POST http://localhost:3000/api/consultation \
  -H "Content-Type: application/json" \
  -d '{
    "name": "Jane Smith",
    "email": "jane@example.com",
    "phone": "9876543210",
    "service": "Company Registration",
    "message": "Need help"
  }'
```

### 3. Get All Services
```bash
curl http://localhost:3000/api/services
```

### 4. Get Approved Reviews
```bash
curl http://localhost:3000/api/reviews
```

---

## 🐛 Troubleshooting

### Dev Server Won't Start
```bash
# Kill any running processes
pkill -f "next dev"

# Clear cache and restart
rm -rf .next
npm run dev
```

### Database Connection Issues
```bash
# Check .env.local has MONGODB_URI
cat .env.local | grep MONGODB_URI

# Test connection with seed script
npm run db:seed
```

### Build Errors
```bash
# Clear cache
rm -rf .next

# Reinstall dependencies
rm -rf node_modules package-lock.json
npm install

# Rebuild
npm run build
```

### Clerk Authentication Issues
```bash
# Verify Clerk keys in .env.local
cat .env.local | grep CLERK

# Required keys:
# NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=pk_test_...
# CLERK_SECRET_KEY=sk_test_...
```

---

## 📁 Important Files

```
akos/
├── app/
│   ├── dashboard/page.tsx          # User dashboard
│   ├── admin/page.tsx              # Admin dashboard
│   ├── components/Navbar.tsx       # Navigation with dashboard button
│   └── api/
│       ├── admin/                  # Admin APIs
│       ├── user/                   # User APIs
│       ├── consultation/           # Consultation API
│       ├── contact/                # Contact API
│       ├── reviews/                # Reviews API
│       └── services/               # Services API
├── lib/
│   ├── db/mongodb.ts               # Database connection
│   └── models/                     # Mongoose models
├── scripts/
│   ├── seed.js                     # Database seeder
│   └── test-apis.sh                # API testing script
├── .env.local                      # Environment variables
├── DASHBOARD_GUIDE.md              # Complete dashboard guide
├── BUILD_FIXES_AND_TESTING.md      # Build fixes & testing results
└── QUICK_REFERENCE.md              # This file
```

---

## 🎯 Status Indicators

### Consultation Status
- 🟡 **Pending** - New request
- 🔵 **In Progress** - Being processed
- 🟢 **Completed** - Finished
- 🔴 **Cancelled** - Cancelled

### Priority Levels
- 🔴 **High** - Urgent
- 🟡 **Medium** - Normal
- ⚪ **Low** - Not urgent

### Review Status
- 🟡 **Pending** - Awaiting approval
- 🟢 **Approved** - Published
- 🔴 **Rejected** - Not approved

### Contact Status
- 🟣 **New** - Just received
- 🔵 **Read** - Admin viewed
- 🟢 **Replied** - Response sent
- ⚪ **Archived** - Completed

---

## 🔑 Environment Variables

Required in `.env.local`:

```env
# MongoDB
MONGODB_URI=mongodb+srv://...

# Clerk Authentication
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=pk_test_...
CLERK_SECRET_KEY=sk_test_...

# Admin Configuration
ADMIN_EMAIL=admin@akos.com
NEXT_PUBLIC_ADMIN_EMAIL=admin@akos.com

# Cloudinary (Optional - for file uploads)
CLOUDINARY_CLOUD_NAME=...
CLOUDINARY_API_KEY=...
CLOUDINARY_API_SECRET=...

# JWT (Optional)
JWT_SECRET=...
JWT_EXPIRE=7d
```

---

## 📚 Documentation Files

1. **DASHBOARD_GUIDE.md** - Complete setup and usage guide
2. **BUILD_FIXES_AND_TESTING.md** - Build fixes and API test results
3. **QUICK_REFERENCE.md** - This quick reference (you are here)
4. **SYSTEM_DOCUMENTATION.md** - System architecture
5. **API_DOCUMENTATION.md** - Detailed API docs
6. **DASHBOARD_SUMMARY.md** - Implementation summary

---

## 🎉 You're All Set!

**Everything is configured and working!**

1. ✅ Backend APIs tested and working
2. ✅ Database seeded with test data
3. ✅ Dashboards fully functional
4. ✅ Authentication working
5. ✅ Admin panel ready
6. ✅ No build errors

**Start using AKOS:**
1. Run `npm run dev`
2. Visit http://localhost:3000
3. Sign in as admin: admin@akos.com
4. Access admin dashboard at /admin
5. Start managing submissions!

---

**Last Updated:** December 9, 2025
**Version:** 1.0.0
**Status:** ✅ Production Ready
