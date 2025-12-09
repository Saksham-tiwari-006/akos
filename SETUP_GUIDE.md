# 🚀 AKOS Backend - Complete Setup Guide

## Table of Contents
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Database Setup](#database-setup)
- [Environment Configuration](#environment-configuration)
- [Running the Application](#running-the-application)
- [Database Management](#database-management)
- [Testing the APIs](#testing-the-apis)
- [Project Structure](#project-structure)
- [Troubleshooting](#troubleshooting)

---

## Prerequisites

Before you begin, ensure you have the following installed:

- **Node.js**: Version 18.0 or higher ([Download](https://nodejs.org/))
- **npm**: Comes with Node.js
- **MongoDB**: Either local installation or MongoDB Atlas account
- **Git**: For version control

### Check Installations
```bash
node --version   # Should be v18.0+
npm --version    # Should be 8.0+
```

---

## Installation

### 1. Clone the Repository (if not already done)
```bash
git clone <repository-url>
cd akos
```

### 2. Install Dependencies
```bash
npm install
```

This will install all required packages including:
- `mongoose` - MongoDB ODM
- `bcryptjs` - Password hashing
- `jsonwebtoken` - JWT authentication
- `nodemailer` - Email service
- `formidable` - File upload handling
- `zod` - Schema validation

---

## Database Setup

### Option 1: MongoDB Atlas (Cloud - Recommended)

1. **Create MongoDB Atlas Account**
   - Go to [MongoDB Atlas](https://www.mongodb.com/cloud/atlas)
   - Sign up for a free account

2. **Create a Cluster**
   - Click "Build a Cluster"
   - Choose the free tier (M0)
   - Select your preferred region

3. **Create Database User**
   - Go to Database Access
   - Add a new database user
   - Remember the username and password

4. **Get Connection String**
   - Click "Connect" on your cluster
   - Choose "Connect your application"
   - Copy the connection string
   - Replace `<password>` with your database user password
   - Replace `<dbname>` with `akos`

### Option 2: Local MongoDB

1. **Install MongoDB**
   ```bash
   # macOS (using Homebrew)
   brew tap mongodb/brew
   brew install mongodb-community

   # Start MongoDB
   brew services start mongodb-community
   ```

2. **Connection String**
   ```
   mongodb://localhost:27017/akos
   ```

---

## Environment Configuration

### 1. Configure .env.local

The `.env.local` file is already created. Update the following values:

```env
# MongoDB Configuration
MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/akos

# JWT Configuration (Change in production!)
JWT_SECRET=your-super-secret-jwt-key-minimum-32-characters-long
JWT_EXPIRE=7d

# Email Configuration
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=your-email@gmail.com
SMTP_PASSWORD=your-gmail-app-password
FROM_EMAIL=noreply@akos.com
FROM_NAME=AKOS Services

# App Configuration
NEXT_PUBLIC_APP_URL=http://localhost:3000
NODE_ENV=development
```

### 2. Email Setup (Gmail)

To use Gmail for sending emails:

1. Enable 2-Factor Authentication on your Gmail account
2. Generate an App Password:
   - Go to Google Account Settings
   - Security > 2-Step Verification
   - App passwords
   - Generate new password for "Mail"
3. Use this password in `SMTP_PASSWORD`

---

## Running the Application

### Quick Start (Automated Setup)
```bash
npm run setup
```
This will:
- Check Node.js installation
- Verify MongoDB connection
- Install dependencies
- Create required directories

### Manual Start

1. **Start Development Server**
   ```bash
   npm run dev
   ```
   The application will be available at `http://localhost:3000`

2. **Seed the Database (Optional)**
   ```bash
   npm run db:seed
   ```
   This adds sample data including:
   - 5 sample services
   - 2 users (admin and regular user)
   - 3 sample reviews

3. **Access Admin Panel**
   - URL: `http://localhost:3000/admin`
   - Email: `admin@akos.com`
   - Password: `admin123`

---

## Database Management

### Available Scripts

```bash
# Seed database with sample data
npm run db:seed

# Reset database (clear all data)
npm run db:reset

# Quick setup
npm run setup
```

### Manual Database Operations

```bash
# Connect to MongoDB (if running locally)
mongosh

# Use the database
use akos

# View collections
show collections

# View data
db.services.find().pretty()
db.users.find().pretty()
db.reviews.find().pretty()
```

---

## Testing the APIs

### Using curl

```bash
# Health Check
curl http://localhost:3000/api/health

# Create Consultation
curl -X POST http://localhost:3000/api/consultation \
  -H "Content-Type: application/json" \
  -d '{
    "name": "John Doe",
    "email": "john@example.com",
    "phone": "+91-9876543210",
    "service": "Company Registration",
    "message": "Need help with company registration"
  }'

# Get All Services
curl http://localhost:3000/api/services

# Contact Form
curl -X POST http://localhost:3000/api/contact \
  -H "Content-Type: application/json" \
  -d '{
    "name": "Jane Doe",
    "email": "jane@example.com",
    "subject": "Inquiry",
    "message": "I need more information"
  }'
```

### Using Postman

1. Import the collection from `API_DOCUMENTATION.md`
2. Set base URL: `http://localhost:3000`
3. Test all endpoints

### Using Thunder Client (VS Code Extension)

1. Install Thunder Client extension
2. Create new request
3. Set URL and test endpoints

---

## Project Structure

```
akos/
├── app/
│   ├── api/                      # API Routes
│   │   ├── consultation/         # Consultation endpoints
│   │   ├── contact/              # Contact form endpoints
│   │   ├── reviews/              # Reviews endpoints
│   │   ├── services/             # Services CRUD
│   │   ├── service-inquiry/      # Service inquiries
│   │   ├── admin/                # Admin APIs
│   │   ├── analytics/            # Analytics
│   │   └── auth/                 # Authentication
│   └── ...
├── lib/
│   ├── config/
│   │   └── db.ts                 # MongoDB connection
│   ├── models/                   # Mongoose models
│   │   ├── User.ts
│   │   ├── Service.ts
│   │   ├── Consultation.ts
│   │   ├── Contact.ts
│   │   ├── Review.ts
│   │   ├── ServiceInquiry.ts
│   │   └── Analytics.ts
│   └── utils/                    # Utility functions
│       ├── api.ts                # API helpers
│       ├── auth.ts               # Auth helpers
│       ├── email.ts              # Email service
│       ├── fileUpload.ts         # File handling
│       └── validation.ts         # Zod schemas
├── scripts/
│   ├── seed.js                   # Database seeding
│   ├── reset.js                  # Database reset
│   └── quickstart.sh             # Setup script
├── public/
│   └── uploads/                  # File uploads
├── .env.local                    # Environment variables
└── package.json                  # Dependencies
```

---

## Troubleshooting

### Common Issues

#### 1. MongoDB Connection Error
```
Error: connect ECONNREFUSED
```
**Solution:**
- Check if MongoDB is running: `brew services list`
- Verify MONGODB_URI in `.env.local`
- Check network connection (for Atlas)

#### 2. Port Already in Use
```
Error: Port 3000 is already in use
```
**Solution:**
```bash
# Kill process on port 3000
lsof -ti:3000 | xargs kill -9

# Or use a different port
PORT=3001 npm run dev
```

#### 3. Module Not Found
```
Error: Cannot find module 'mongoose'
```
**Solution:**
```bash
rm -rf node_modules package-lock.json
npm install
```

#### 4. Environment Variables Not Loading
**Solution:**
- Ensure file is named `.env.local` (not `.env`)
- Restart the development server
- Check for syntax errors in `.env.local`

#### 5. Email Not Sending
**Solution:**
- Verify SMTP credentials
- Check Gmail App Password (not regular password)
- Ensure "Less secure app access" is enabled (if not using App Password)

#### 6. File Upload Fails
**Solution:**
- Check if `public/uploads` directory exists
- Verify file size is under 10MB
- Check file type is allowed

### Database Issues

#### Reset Database
```bash
npm run db:reset
npm run db:seed
```

#### Check MongoDB Logs (Local)
```bash
tail -f /usr/local/var/log/mongodb/mongo.log
```

#### Verify Database Connection
```bash
mongosh "your-mongodb-uri"
```

---

## Next Steps

1. **Review Documentation**
   - Read `BACKEND_README.md` for backend details
   - Check `API_DOCUMENTATION.md` for API reference
   - See `PROJECT_SUMMARY.md` for project overview

2. **Customize**
   - Update email templates
   - Modify service categories
   - Add custom validations

3. **Deploy**
   - Review `DEPLOYMENT.md` for deployment instructions
   - Set up production environment variables
   - Configure production MongoDB

4. **Development**
   - Add new features
   - Implement additional APIs
   - Enhance security

---

## Support

For issues or questions:
- Check documentation files
- Review error logs
- Test API endpoints
- Verify environment configuration

---

## Security Notes

⚠️ **Important:**
- Change `JWT_SECRET` in production
- Use strong passwords
- Enable HTTPS in production
- Implement rate limiting
- Regular security audits
- Keep dependencies updated

---

**Happy Coding! 🚀**
