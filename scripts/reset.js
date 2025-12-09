#!/usr/bin/env node

/**
 * Database Reset Script
 * Clears all data from MongoDB collections
 */

const mongoose = require('mongoose');
const readline = require('readline');
require('dotenv').config({ path: '.env.local' });

const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost:27017/akos';

// Create readline interface for user confirmation
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function askConfirmation(question) {
  return new Promise((resolve) => {
    rl.question(question, (answer) => {
      resolve(answer.toLowerCase() === 'yes' || answer.toLowerCase() === 'y');
    });
  });
}

async function resetDatabase() {
  try {
    console.log('🔄 Starting database reset...\n');
    console.log('⚠️  WARNING: This will delete ALL data from the database!\n');

    // Ask for confirmation
    const confirmed = await askConfirmation('Are you sure you want to continue? (yes/no): ');

    if (!confirmed) {
      console.log('\n❌ Database reset cancelled.');
      rl.close();
      process.exit(0);
    }

    console.log('\n');

    // Connect to MongoDB
    await mongoose.connect(MONGODB_URI);
    console.log('✅ Connected to MongoDB\n');

    // Get all collections
    const collections = await mongoose.connection.db.collections();

    console.log(`🗑️  Found ${collections.length} collections\n`);

    // Drop each collection
    let droppedCount = 0;
    for (const collection of collections) {
      const name = collection.collectionName;
      console.log(`   Dropping: ${name}`);
      await collection.drop();
      droppedCount++;
    }

    console.log(`\n✅ Successfully dropped ${droppedCount} collections!`);
    console.log('🎯 Database is now empty and ready for fresh data\n');

    // Disconnect
    await mongoose.disconnect();
    console.log('👋 Disconnected from MongoDB');

    rl.close();

  } catch (error) {
    console.error('❌ Reset error:', error);
    rl.close();
    process.exit(1);
  }
}

// Run reset
resetDatabase();
