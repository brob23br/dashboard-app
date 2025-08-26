#!/bin/bash

# AWS S3 + CloudFront Deployment Script
# Usage: ./aws-deploy.sh <bucket-name> [cloudfront-distribution-id]

set -e

BUCKET_NAME=$1
CLOUDFRONT_ID=$2

if [ -z "$BUCKET_NAME" ]; then
    echo "❌ Error: Bucket name is required"
    echo "Usage: ./aws-deploy.sh <bucket-name> [cloudfront-distribution-id]"
    exit 1
fi

echo "🚀 Deploying to AWS S3 + CloudFront..."
echo "📦 Bucket: $BUCKET_NAME"

# Check if AWS CLI is installed
if ! command -v aws &> /dev/null; then
    echo "❌ AWS CLI is not installed. Please install it first."
    exit 1
fi

# Check if build directory exists
if [ ! -d "brandon_portfolio/app/out" ]; then
    echo "❌ Build directory not found. Please run the build first:"
    echo "   ./deploy-static.sh"
    exit 1
fi

# Sync files to S3
echo "📤 Uploading files to S3..."
aws s3 sync brandon_portfolio/app/out/ s3://$BUCKET_NAME --delete \
    --cache-control "public, max-age=31536000" \
    --exclude "*.html" \
    --exclude "*.json"

# Upload HTML files with shorter cache
echo "📤 Uploading HTML files with shorter cache..."
aws s3 sync brandon_portfolio/app/out/ s3://$BUCKET_NAME \
    --cache-control "public, max-age=0, must-revalidate" \
    --include "*.html" \
    --include "*.json"

echo "✅ Files uploaded successfully!"

# Invalidate CloudFront cache if distribution ID provided
if [ ! -z "$CLOUDFRONT_ID" ]; then
    echo "🔄 Invalidating CloudFront cache..."
    aws cloudfront create-invalidation \
        --distribution-id $CLOUDFRONT_ID \
        --paths "/*"
    echo "✅ CloudFront invalidation created!"
fi

echo ""
echo "🎉 Deployment completed successfully!"
echo "🌐 Your site should be available at:"
echo "   S3: http://$BUCKET_NAME.s3-website-us-east-1.amazonaws.com"
if [ ! -z "$CLOUDFRONT_ID" ]; then
    echo "   CloudFront: https://your-cloudfront-domain.cloudfront.net"
fi