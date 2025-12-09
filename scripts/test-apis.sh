#!/bin/bash

# AKOS API Testing Script
# Tests all backend APIs with curl commands

echo "🧪 AKOS Backend API Testing"
echo "================================"
echo ""

BASE_URL="http://localhost:3000"

# Colors for output
GREEN='\033[0;32m'
RED='\033[0;31m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

# Function to test API endpoint
test_endpoint() {
    local method=$1
    local endpoint=$2
    local description=$3
    local data=$4

    echo -e "${BLUE}Testing: ${description}${NC}"
    echo "Endpoint: ${method} ${endpoint}"

    if [ -z "$data" ]; then
        response=$(curl -s -w "\n%{http_code}" -X ${method} "${BASE_URL}${endpoint}")
    else
        response=$(curl -s -w "\n%{http_code}" -X ${method} "${BASE_URL}${endpoint}" \
            -H "Content-Type: application/json" \
            -d "${data}")
    fi

    http_code=$(echo "$response" | tail -n1)
    body=$(echo "$response" | sed '$d')

    if [ $http_code -eq 200 ] || [ $http_code -eq 201 ]; then
        echo -e "${GREEN}✓ Status: ${http_code}${NC}"
        echo "Response preview:"
        echo "$body" | head -c 500
        echo ""
        echo "---"
    else
        echo -e "${RED}✗ Status: ${http_code}${NC}"
        echo "Error:"
        echo "$body" | head -c 300
        echo ""
        echo "---"
    fi
    echo ""
}

echo "📋 1. Testing Services API"
echo "================================"
test_endpoint "GET" "/api/services" "Get all services"
echo ""

echo "⭐ 2. Testing Reviews API"
echo "================================"
test_endpoint "GET" "/api/reviews" "Get all approved reviews"
echo ""

echo "📞 3. Testing Contact API (POST)"
echo "================================"
test_endpoint "POST" "/api/contact" "Submit contact form" '{
    "name": "Test User",
    "email": "test@example.com",
    "phone": "1234567890",
    "subject": "API Test",
    "message": "This is a test message from the API testing script"
}'
echo ""

echo "💼 4. Testing Consultation API (POST)"
echo "================================"
test_endpoint "POST" "/api/consultation" "Submit consultation request" '{
    "name": "Test User",
    "email": "test@example.com",
    "phone": "1234567890",
    "service": "Company Registration",
    "message": "I need help with company registration",
    "preferredDate": "2024-12-15",
    "preferredTime": "10:00"
}'
echo ""

echo "📊 5. Testing Analytics API"
echo "================================"
test_endpoint "GET" "/api/analytics" "Get analytics data"
echo ""

echo "🔍 6. Testing Service Inquiry API (POST)"
echo "================================"
test_endpoint "POST" "/api/service-inquiry" "Submit service inquiry" '{
    "name": "Test User",
    "email": "test@example.com",
    "phone": "1234567890",
    "serviceName": "GST Registration",
    "message": "I want to know more about GST registration"
}'
echo ""

echo "📝 7. Testing Submit Review API (POST)"
echo "================================"
test_endpoint "POST" "/api/reviews" "Submit review" '{
    "name": "Happy Customer",
    "email": "customer@example.com",
    "rating": 5,
    "comment": "Excellent service! Very professional and helpful.",
    "service": "Company Registration"
}'
echo ""

echo ""
echo "🎉 API Testing Complete!"
echo "================================"
echo ""
echo "📝 Summary:"
echo "  - All public APIs tested"
echo "  - Check responses above for details"
echo ""
echo "⚠️  Note: Admin APIs require authentication"
echo "   To test admin APIs, you need to:"
echo "   1. Sign in at http://localhost:3000/login with admin@akos.com"
echo "   2. Get the Clerk session token"
echo "   3. Include it in the Authorization header"
echo ""
echo "📚 Admin API endpoints:"
echo "   GET  /api/admin/consultations"
echo "   PUT  /api/admin/consultations/[id]"
echo "   GET  /api/admin/contacts"
echo "   PUT  /api/admin/contacts/[id]"
echo "   GET  /api/admin/reviews"
echo "   PUT  /api/admin/reviews/[id]"
echo ""
echo "👤 User API endpoints:"
echo "   GET  /api/user/submissions (requires authentication)"
echo ""
