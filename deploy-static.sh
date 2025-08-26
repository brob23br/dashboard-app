#!/bin/bash

# Static Export Deployment Script for S3+CloudFront
# This script builds the Next.js app for static export

echo "🚀 Starting static export build process..."

# Navigate to the app directory
cd brandon_portfolio/app

# Install dependencies
echo "📦 Installing dependencies..."
npm install --legacy-peer-deps

# Build the application for static export
echo "🔨 Building application for static export..."
npm run build

# Check if build was successful
if [ $? -eq 0 ]; then
    echo "✅ Build completed successfully!"
    echo "📁 Static files are ready in the 'out' directory"
    echo ""
    echo "Next steps for S3+CloudFront deployment:"
    echo "1. Upload the contents of the 'out' directory to your S3 bucket"
    echo "2. Configure S3 bucket for static website hosting"
    echo "3. Set up CloudFront distribution pointing to your S3 bucket"
    echo "4. Configure custom domain (optional)"
else
    echo "❌ Build failed. Please check the errors above."
    exit 1
fi