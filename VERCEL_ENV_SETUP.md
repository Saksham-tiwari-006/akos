# Environment Variables Setup for Vercel

## Required Variables (Minimum for deployment):

### Clerk Authentication (Required)
```
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=pk_test_xxxxx
CLERK_SECRET_KEY=sk_test_xxxxx
NEXT_PUBLIC_CLERK_SIGN_IN_URL=/sign-in
NEXT_PUBLIC_CLERK_SIGN_UP_URL=/sign-up
```

Get these from: https://dashboard.clerk.com/

### App URL
```
NEXT_PUBLIC_APP_URL=https://your-domain.vercel.app
NODE_ENV=production
```

### JWT Secret
```
JWT_SECRET=your-super-secret-jwt-key-change-this-in-production
```

## Optional Variables (For full functionality):

### MongoDB (For database features)
```
MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/akos?retryWrites=true&w=majority
```

### Cloudinary (For file uploads)
```
CLOUDINARY_CLOUD_NAME=your-cloud-name
CLOUDINARY_API_KEY=your-api-key
CLOUDINARY_API_SECRET=your-api-secret
```

### Email Configuration
```
EMAIL_SERVICE=gmail
EMAIL_HOST=smtp.gmail.com
EMAIL_PORT=587
EMAIL_USER=your-email@gmail.com
EMAIL_PASSWORD=your-app-password
FROM_EMAIL=noreply@akos.com
FROM_NAME=AKOS Services
```

## How to Add to Vercel:

1. Go to your Vercel project dashboard
2. Click on **Settings** → **Environment Variables**
3. Add each variable one by one
4. Click **Save**
5. Redeploy your project

## Quick Setup (Minimum):

To get the site working quickly, you only need:
1. **Clerk keys** (required for authentication)
2. **JWT_SECRET** (any random secure string)
3. **NEXT_PUBLIC_APP_URL** (your Vercel domain)

The site will work without MongoDB and Cloudinary, but those features will be disabled.
