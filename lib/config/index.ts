// Database configuration and constants
export const DB_CONFIG = {
  name: 'akos',
  collections: {
    users: 'users',
    consultations: 'consultations',
    contacts: 'contacts',
    reviews: 'reviews',
    serviceInquiries: 'service_inquiries',
    services: 'services',
    documents: 'documents',
    notifications: 'notifications',
    analytics: 'analytics',
  },
};

// JWT Configuration
export const JWT_CONFIG = {
  secret: process.env.JWT_SECRET || 'fallback-secret-key',
  expiresIn: process.env.JWT_EXPIRE || '7d',
  algorithm: 'HS256' as const,
};

// Email Configuration
export const EMAIL_CONFIG = {
  host: process.env.SMTP_HOST || 'smtp.gmail.com',
  port: parseInt(process.env.SMTP_PORT || '587'),
  secure: false,
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASSWORD,
  },
  from: {
    email: process.env.FROM_EMAIL || 'noreply@akos.com',
    name: process.env.FROM_NAME || 'AKOS Services',
  },
};

// File Upload Configuration
export const FILE_CONFIG = {
  maxSize: parseInt(process.env.MAX_FILE_SIZE || '10485760'), // 10MB
  allowedTypes: (process.env.ALLOWED_FILE_TYPES || 'pdf,jpg,jpeg,png,doc,docx,xls,xlsx').split(','),
  uploadDir: 'public/uploads',
};

// Rate Limiting Configuration
export const RATE_LIMIT_CONFIG = {
  max: parseInt(process.env.RATE_LIMIT_MAX || '100'),
  windowMs: parseInt(process.env.RATE_LIMIT_WINDOW_MS || '900000'), // 15 minutes
};

// App Configuration
export const APP_CONFIG = {
  url: process.env.NEXT_PUBLIC_APP_URL || 'http://localhost:3000',
  env: process.env.NODE_ENV || 'development',
  isDevelopment: process.env.NODE_ENV === 'development',
  isProduction: process.env.NODE_ENV === 'production',
};

// Pagination defaults
export const PAGINATION_CONFIG = {
  defaultPage: 1,
  defaultLimit: 10,
  maxLimit: 100,
};

// Status enums
export const STATUS = {
  consultation: ['pending', 'in-progress', 'completed', 'cancelled'] as const,
  service: ['active', 'inactive'] as const,
  document: ['pending', 'verified', 'rejected'] as const,
  user: ['active', 'inactive', 'suspended'] as const,
};

export type ConsultationStatus = typeof STATUS.consultation[number];
export type ServiceStatus = typeof STATUS.service[number];
export type DocumentStatus = typeof STATUS.document[number];
export type UserStatus = typeof STATUS.user[number];
