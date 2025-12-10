import { z } from 'zod';

// User validation schemas
export const userSchema = z.object({
  name: z.string().min(2).max(100),
  email: z.string().email(),
  phone: z.string().optional(),
  password: z.string().min(6).optional(),
  role: z.enum(['user', 'admin', 'staff']).optional(),
});

export const loginSchema = z.object({
  email: z.string().email(),
  password: z.string().min(6),
});

// Consultation validation schemas
export const consultationSchema = z.object({
  service: z.string().min(1),
  serviceCategory: z.string().optional(),
  name: z.string().min(2).max(100),
  email: z.string().email(),
  phone: z.string().optional(),
  date: z.string().optional(),
  time: z.string().optional(),
  message: z.string().max(1000).optional(),
  documents: z.array(z.object({
    name: z.string(),
    url: z.string(),
    size: z.number(),
    type: z.string(),
  })).optional(),
});

export const updateConsultationSchema = z.object({
  status: z.enum(['pending', 'in-progress', 'completed', 'cancelled']).optional(),
  assignedTo: z.string().optional(),
  notes: z.string().optional(),
  priority: z.enum(['low', 'medium', 'high']).optional(),
});

// Contact validation schemas
export const contactSchema = z.object({
  name: z.string().min(2).max(100),
  email: z.string().email(),
  phone: z.string().optional(),
  service: z.string().optional(),
  subject: z.string().max(200).optional(),
  message: z.string().min(1).max(2000),
});

export const updateContactSchema = z.object({
  status: z.enum(['new', 'read', 'replied', 'archived']).optional(),
  repliedBy: z.string().optional(),
});

// Review validation schemas
export const reviewSchema = z.object({
  name: z.string().min(2).max(100),
  email: z.string().email().optional(),
  rating: z.number().min(1).max(5),
  message: z.string().min(1).max(1000),
  service: z.string().optional(),
});

export const updateReviewSchema = z.object({
  status: z.enum(['pending', 'approved', 'rejected']).optional(),
  isVerified: z.boolean().optional(),
});

// Service Inquiry validation schemas
export const serviceInquirySchema = z.object({
  serviceName: z.string().min(1),
  serviceCategory: z.string().min(1),
  name: z.string().min(2).max(100),
  email: z.string().email(),
  phone: z.string().optional(),
  message: z.string().max(2000).optional(),
  documents: z.array(z.object({
    name: z.string(),
    url: z.string(),
    size: z.number(),
    type: z.string(),
  })).optional(),
});

export const updateServiceInquirySchema = z.object({
  status: z.enum(['new', 'contacted', 'converted', 'closed']).optional(),
  priority: z.enum(['low', 'medium', 'high']).optional(),
  assignedTo: z.string().optional(),
  notes: z.string().optional(),
});

// Service validation schemas
export const serviceSchema = z.object({
  name: z.string().min(1),
  slug: z.string().min(1),
  category: z.string().min(1),
  description: z.string().min(1).max(500),
  longDescription: z.string().optional(),
  duration: z.string().optional(),
  pricing: z.object({
    basic: z.number().optional(),
    standard: z.number().optional(),
    premium: z.number().optional(),
    custom: z.boolean().optional(),
  }).optional(),
  features: z.array(z.string()).optional(),
  requirements: z.array(z.string()).optional(),
  benefits: z.array(z.string()).optional(),
  icon: z.string().optional(),
  image: z.string().optional(),
  status: z.enum(['active', 'inactive']).optional(),
  popular: z.boolean().optional(),
  featured: z.boolean().optional(),
  order: z.number().optional(),
  tags: z.array(z.string()).optional(),
  seo: z.object({
    title: z.string().optional(),
    description: z.string().optional(),
    keywords: z.array(z.string()).optional(),
  }).optional(),
});

// Query validation schemas
export const paginationSchema = z.object({
  page: z.string().optional().transform(val => parseInt(val || '1')),
  limit: z.string().optional().transform(val => Math.min(parseInt(val || '10'), 100)),
});

export const dateRangeSchema = z.object({
  startDate: z.string().optional(),
  endDate: z.string().optional(),
});

export const searchSchema = z.object({
  query: z.string().optional(),
  category: z.string().optional(),
  status: z.string().optional(),
  sortBy: z.string().optional(),
  sortOrder: z.enum(['asc', 'desc']).optional(),
});

// Analytics validation schemas
export const analyticsSchema = z.object({
  type: z.enum(['page_view', 'service_inquiry', 'consultation', 'contact', 'review']),
  page: z.string().optional(),
  service: z.string().optional(),
  sessionId: z.string().optional(),
  metadata: z.record(z.string(), z.any()).optional(),
});
