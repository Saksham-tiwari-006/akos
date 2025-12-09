#!/usr/bin/env node

/**
 * Database Seeding Script
 * Populates the MongoDB database with sample data
 */

const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
require('dotenv').config({ path: '.env.local' });

const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost:27017/akos';

// Import models
const Service = require('../lib/models/Service.ts').default;
const User = require('../lib/models/User.ts').default;
const Review = require('../lib/models/Review.ts').default;

// Sample data
const sampleServices = [
  {
    name: 'Company Registration',
    slug: 'company-registration',
    category: 'Registrations',
    description: 'Complete company registration services including documentation and compliance',
    duration: '7-10 days',
    pricing: { basic: 5000, standard: 8000, premium: 12000 },
    features: [
      'Name approval and reservation',
      'Complete documentation support',
      'Digital signature certificate',
      'PAN and TAN registration',
    ],
    status: 'active',
    popular: true,
    featured: true,
    order: 1,
    tags: ['company', 'registration', 'incorporation'],
  },
  {
    name: 'GST Registration',
    slug: 'gst-registration',
    category: 'Registrations',
    description: 'Quick and hassle-free GST registration for your business',
    duration: '3-5 days',
    pricing: { basic: 2000, standard: 3500, premium: 5000 },
    features: [
      'GST number procurement',
      'Complete filing assistance',
      'Documentation support',
      'Compliance guidance',
    ],
    status: 'active',
    popular: true,
    featured: true,
    order: 2,
    tags: ['gst', 'tax', 'registration'],
  },
  {
    name: 'ITR Filing',
    slug: 'itr-filing',
    category: 'Compliance',
    description: 'Expert assistance for income tax return filing',
    duration: '2-3 days',
    pricing: { basic: 1500, standard: 3000, premium: 5000 },
    features: [
      'Form selection guidance',
      'Maximum refund optimization',
      'Detailed review',
      'E-filing support',
    ],
    status: 'active',
    popular: true,
    featured: true,
    order: 3,
    tags: ['itr', 'tax', 'filing', 'income-tax'],
  },
  {
    name: 'Trademark Registration',
    slug: 'trademark-registration',
    category: 'IPR',
    description: 'Protect your brand with trademark registration',
    duration: '6-8 months',
    pricing: { basic: 6000, standard: 10000, premium: 15000 },
    features: [
      'Trademark search',
      'Application filing',
      'Response to examination report',
      'Registration certificate',
    ],
    status: 'active',
    popular: true,
    featured: false,
    order: 4,
    tags: ['trademark', 'ipr', 'brand'],
  },
  {
    name: 'Virtual CFO Services',
    slug: 'virtual-cfo',
    category: 'CA Services',
    description: 'Professional CFO services for growing businesses',
    duration: 'Ongoing',
    pricing: { basic: 15000, standard: 25000, premium: 40000 },
    features: [
      'Financial planning and analysis',
      'Cash flow management',
      'Budgeting and forecasting',
      'Strategic business advice',
    ],
    status: 'active',
    popular: false,
    featured: true,
    order: 5,
    tags: ['cfo', 'finance', 'accounting'],
  },
];

const sampleUsers = [
  {
    name: 'Admin User',
    email: 'admin@akos.com',
    password: 'admin123', // Will be hashed
    role: 'admin',
    phone: '+91-9876543210',
  },
  {
    name: 'John Doe',
    email: 'john@example.com',
    password: 'user123',
    role: 'user',
    phone: '+91-9876543211',
  },
];

const sampleReviews = [
  {
    name: 'Rajesh Kumar',
    email: 'rajesh@example.com',
    service: 'Company Registration',
    rating: 5,
    message: 'Excellent service! The team was very professional and completed the registration process smoothly.',
    status: 'approved',
  },
  {
    name: 'Priya Sharma',
    email: 'priya@example.com',
    service: 'GST Registration',
    rating: 5,
    message: 'Very helpful and quick service. Got my GST registration done in just 3 days!',
    status: 'approved',
  },
  {
    name: 'Amit Patel',
    email: 'amit@example.com',
    service: 'ITR Filing',
    rating: 4,
    message: 'Good service overall. The team helped me file my returns correctly.',
    status: 'approved',
  },
];

async function seedDatabase() {
  try {
    console.log('🌱 Starting database seeding...\n');

    // Connect to MongoDB
    await mongoose.connect(MONGODB_URI);
    console.log('✅ Connected to MongoDB\n');

    // Clear existing data
    console.log('🗑️  Clearing existing data...');
    await Service.deleteMany({});
    await User.deleteMany({});
    await Review.deleteMany({});
    console.log('✅ Cleared existing data\n');

    // Insert sample services
    console.log('📦 Inserting sample services...');
    const services = await Service.insertMany(sampleServices);
    console.log(`✅ Inserted ${services.length} services\n`);

    // Insert sample users (with hashed passwords)
    console.log('👤 Inserting sample users...');
    const usersWithHashedPasswords = await Promise.all(
      sampleUsers.map(async (user) => ({
        ...user,
        password: await bcrypt.hash(user.password, 10),
      }))
    );
    const users = await User.insertMany(usersWithHashedPasswords);
    console.log(`✅ Inserted ${users.length} users\n`);

    // Insert sample reviews
    console.log('⭐ Inserting sample reviews...');
    const reviews = await Review.insertMany(sampleReviews);
    console.log(`✅ Inserted ${reviews.length} reviews\n`);

    // Display inserted data
    console.log('📋 Seeded Data Summary:');
    console.log(`   Services: ${services.length}`);
    console.log(`   Users: ${users.length}`);
    console.log(`   Reviews: ${reviews.length}\n`);

    console.log('🔐 Admin Credentials:');
    console.log(`   Email: admin@akos.com`);
    console.log(`   Password: admin123\n`);

    console.log('🎉 Database seeding completed successfully!\n');

    // Disconnect
    await mongoose.disconnect();
    console.log('👋 Disconnected from MongoDB');

  } catch (error) {
    console.error('❌ Seeding error:', error);
    process.exit(1);
  }
}

// Run seeding
seedDatabase();
