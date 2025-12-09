# Dashboard Setup Guide

## 🎯 Overview
This guide explains how to use the **User Dashboard** and **Admin Dashboard** with Clerk authentication and MongoDB backend.

---

## 📋 Environment Setup

### Required Environment Variables

```env
# Admin Demo Account (Clerk)
ADMIN_EMAIL=admin@akos.com
NEXT_PUBLIC_ADMIN_EMAIL=admin@akos.com
```

**Important:** Change `ADMIN_EMAIL` in `.env.local` to set your admin email. Any user logged in with this email will have admin access.

---

## 👥 User Dashboard

### Access
- **URL:** `/dashboard`
- **Auth:** Any logged-in user (via Clerk)

### Features
1. **Overview Tab**
   - Statistics cards showing total submissions
   - Recent activity summary
   - Quick status overview

2. **Consultations Tab**
   - View all consultation requests
   - Track status (pending, in-progress, completed, cancelled)
   - See priority levels
   - Download attached documents

3. **Messages Tab**
   - View all contact form submissions
   - See admin responses
   - Track message status (new, read, replied)

4. **Reviews Tab**
   - View submitted reviews
   - See approval status (pending, approved, rejected)
   - Track rating and service reviewed

5. **Inquiries Tab**
   - View service inquiries
   - Track inquiry status

### User Flow
```
User Login → Dashboard → View Submissions → Track Progress
```

---

## 🔧 Admin Dashboard

### Access
- **URL:** `/admin`
- **Auth:** User with email matching `ADMIN_EMAIL`
- **Redirect:** Non-admin users are redirected to `/dashboard`

### Features

#### 1. **Dashboard Overview**
- Real-time statistics
  - Total consultations with pending count
  - Total contact messages with new count
  - Total reviews with pending approval count
- Quick action buttons for pending items

#### 2. **Consultations Management**
- View all consultation requests
- **Actions:**
  - Update status (pending → in-progress → completed)
  - Change priority (low, medium, high)
  - Add internal notes
  - Delete consultations
- **Search & Filter:**
  - Search by name, email, service
  - Filter by status
- **Details Shown:**
  - Service type
  - User contact info
  - Message/requirements
  - Attached documents
  - Created/updated timestamps

#### 3. **Contact Messages Management**
- View all contact form submissions
- **Actions:**
  - Update status (new → read → replied → archived)
  - Add response messages
  - Delete messages
- **Search & Filter:**
  - Search by name, email, subject
  - Filter by status

#### 4. **Reviews Management**
- View all customer reviews
- **Actions:**
  - Approve/Reject reviews
  - Mark as verified
  - Delete reviews
- **Search & Filter:**
  - Search by name, email, service
  - Filter by status (pending, approved, rejected)
- **Details Shown:**
  - Rating (1-5 stars)
  - Review message
  - Service reviewed
  - Verification status

### Admin Flow
```
Admin Login → Admin Dashboard → Manage Submissions → Update Status → User Sees Changes
```

---

## 🔐 Setting Up Admin Account

### Option 1: Using Clerk Dashboard

1. Sign up for Clerk account at [clerk.com](https://clerk.com)
2. Create a new user with email: `admin@akos.com`
3. This user will automatically have admin access

### Option 2: Change Admin Email

Update `.env.local`:
```env
ADMIN_EMAIL=your-admin-email@example.com
NEXT_PUBLIC_ADMIN_EMAIL=your-admin-email@example.com
```

Then sign up with that email via Clerk.

### Option 3: Using Existing Clerk User

1. Log in to your Clerk Dashboard
2. Find your user's email
3. Update `.env.local` with that email as `ADMIN_EMAIL`

---

## 🔄 Data Flow

### User Submission Flow
```
1. User fills form (consultation/contact/review)
2. POST request to API (/api/consultation, /api/contact, /api/reviews)
3. Data saved to MongoDB
4. User can view in /dashboard
5. Admin can manage in /admin
6. Admin updates status
7. User sees updated status in /dashboard
```

### Real-time Updates
- Both dashboards fetch fresh data on:
  - Page load
  - Tab change
  - Refresh button click
  - Status update

---

## 🛠️ API Endpoints Used

### User APIs
```
GET /api/user/submissions
- Fetches all user's submissions based on logged-in email
- Returns: consultations, contacts, reviews, inquiries, stats
```

### Admin APIs
```
GET  /api/admin/consultations     - List all consultations
PUT  /api/admin/consultations/:id - Update consultation
DELETE /api/admin/consultations/:id - Delete consultation

GET  /api/admin/contacts          - List all contacts
PUT  /api/admin/contacts/:id      - Update contact
DELETE /api/admin/contacts/:id    - Delete contact

GET  /api/admin/reviews           - List all reviews
PUT  /api/admin/reviews/:id       - Update review
DELETE /api/admin/reviews/:id     - Delete review
```

---

## 🎨 UI Features

### Status Badges
- **Pending:** Yellow badge with clock icon
- **In Progress:** Blue badge with refresh icon
- **Completed:** Green badge with checkmark
- **Cancelled/Rejected:** Red badge with X icon
- **New:** Purple badge with alert icon

### Priority Badges
- **High:** Red background
- **Medium:** Yellow background
- **Low:** Gray background

### Interactive Elements
- Search bar for filtering
- Status dropdown filters
- Refresh button for manual updates
- Action buttons (approve, reject, delete)
- Status change dropdowns

---

## 🧪 Testing

### Test User Dashboard
1. Sign up via Clerk (any email except admin)
2. Submit some forms:
   - Consultation request
   - Contact message
   - Review
3. Visit `/dashboard`
4. Verify all submissions appear
5. Check status badges and details

### Test Admin Dashboard
1. Sign up via Clerk with admin email
2. Visit `/admin` (should not redirect)
3. Verify stats cards show correct counts
4. Test each tab:
   - Overview: Check pending items
   - Consultations: Update status/priority
   - Messages: Update status
   - Reviews: Approve/reject
5. Verify changes reflect immediately

### Test Role-Based Access
1. Log in as regular user
2. Try to visit `/admin`
3. Should redirect to `/dashboard`
4. Log in as admin user
5. Should access `/admin` successfully

---

## 📱 Responsive Design

Both dashboards are fully responsive:
- **Mobile:** Stacked cards, scrollable tabs
- **Tablet:** 2-column grid
- **Desktop:** 3-column grid, side-by-side layout

---

## 🔒 Security Features

1. **Authentication Required**
   - All dashboard routes require Clerk authentication
   - Unauthenticated users redirected to `/login`

2. **Role-Based Access**
   - Admin routes check email against `ADMIN_EMAIL`
   - Non-admin users cannot access admin features

3. **API Protection**
   - All admin APIs verify Clerk authentication
   - Email verification against `ADMIN_EMAIL` env variable
   - 401 Unauthorized for missing auth
   - 403 Forbidden for non-admin access

---

## 🚀 Quick Start

### 1. Install Dependencies
```bash
npm install
```

### 2. Configure Environment
```bash
# Copy and update .env.local
ADMIN_EMAIL=admin@akos.com
NEXT_PUBLIC_ADMIN_EMAIL=admin@akos.com
```

### 3. Start Server
```bash
npm run dev
```

### 4. Create Admin Account
- Visit `http://localhost:3000`
- Click "Sign In" → "Sign Up"
- Use email: `admin@akos.com`
- Complete signup

### 5. Test Dashboards
- **User:** `/dashboard`
- **Admin:** `/admin`

---

## 📊 Demo Data

To populate with test data:
```bash
npm run db:seed
```

This creates:
- 5 sample services
- 2 users (admin + regular)
- 3 sample reviews
- Sample consultations and contacts

---

## 🐛 Troubleshooting

### "Unauthorized" Error
- Ensure you're logged in via Clerk
- Check if Clerk keys are set in `.env.local`

### "Forbidden" Error on Admin Routes
- Verify your email matches `ADMIN_EMAIL`
- Check environment variable is set correctly
- Restart dev server after changing env

### No Data Showing
- Run `npm run db:seed` to add test data
- Check MongoDB connection in `.env.local`
- Open browser console for API errors

### Redirected from /admin to /dashboard
- Your email doesn't match admin email
- Update `ADMIN_EMAIL` in `.env.local`
- Or sign in with the configured admin email

---

## 📞 Support

For issues:
1. Check MongoDB connection
2. Verify Clerk configuration
3. Review environment variables
4. Check browser console for errors
5. Review API responses in Network tab

---

**✅ You're all set! Both user and admin dashboards are fully functional and connected to the MongoDB backend.**
