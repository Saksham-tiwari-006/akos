#!/bin/bash

echo "🚀 AKOS Backend Quick Start"
echo "============================"
echo ""

# Check if Node.js is installed
if ! command -v node &> /dev/null; then
    echo "❌ Node.js is not installed. Please install Node.js 18+ first."
    exit 1
fi

echo "✅ Node.js version: $(node -v)"
echo ""

# Check if MongoDB is running (local)
if command -v mongod &> /dev/null; then
    if pgrep -x "mongod" > /dev/null; then
        echo "✅ MongoDB is running"
    else
        echo "⚠️  MongoDB is not running. Starting MongoDB..."
        brew services start mongodb-community 2>/dev/null || echo "Please start MongoDB manually"
    fi
else
    echo "ℹ️  MongoDB not found locally. Make sure you have MongoDB Atlas configured in .env.local"
fi

echo ""

# Check if .env.local exists
if [ ! -f ".env.local" ]; then
    echo "⚠️  .env.local not found. Creating from .env.example..."
    cp .env.example .env.local
    echo "📝 Please update .env.local with your configuration"
    echo ""
fi

# Install dependencies if node_modules doesn't exist
if [ ! -d "node_modules" ]; then
    echo "📦 Installing dependencies..."
    npm install
    echo ""
fi

# Create uploads directory
mkdir -p public/uploads
echo "📁 Created uploads directory"
echo ""

echo "✅ Setup complete!"
echo ""
echo "📋 Next steps:"
echo "   1. Update .env.local with your MongoDB URI and other settings"
echo "   2. Run 'npm run dev' to start the development server"
echo "   3. (Optional) Run 'npm run db:seed' to add sample data"
echo ""
echo "📚 Documentation:"
echo "   - Backend README: BACKEND_README.md"
echo "   - API Documentation: API_DOCUMENTATION.md"
echo ""
echo "🎉 Happy coding!"
