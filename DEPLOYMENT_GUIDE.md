# Brandon Portfolio - S3+CloudFront Deployment Guide

This Next.js portfolio application has been configured for static export and deployment to AWS S3 + CloudFront.

## 🚀 Quick Start

### Prerequisites
- Node.js v18 or v20
- npm or yarn
- AWS CLI configured (for deployment)

### Local Development
```bash
cd brandon_portfolio/app
npm install --legacy-peer-deps
npm run dev
```

### Build for Static Export
```bash
cd brandon_portfolio/app
npm install --legacy-peer-deps
npm run build
```

This will create an `out/` directory with all static files ready for deployment.

## 📦 Deployment Options

### Option 1: Automated Script (Recommended)

**Linux/Mac:**
```bash
chmod +x deploy-static.sh
./deploy-static.sh
```

**Windows:**
```cmd
deploy-static.bat
```

### Option 2: Manual Steps

1. **Build the application:**
   ```bash
   cd brandon_portfolio/app
   npm install --legacy-peer-deps
   npm run build
   ```

2. **Deploy to S3:**
   ```bash
   aws s3 sync out/ s3://your-bucket-name --delete
   ```

3. **Invalidate CloudFront cache:**
   ```bash
   aws cloudfront create-invalidation --distribution-id YOUR_DISTRIBUTION_ID --paths "/*"
   ```

## 🏗️ AWS Infrastructure Setup

### S3 Bucket Configuration

1. **Create S3 Bucket:**
   - Bucket name: `your-portfolio-bucket`
   - Region: `us-east-1` (recommended for CloudFront)
   - Disable "Block all public access"

2. **Enable Static Website Hosting:**
   - Index document: `index.html`
   - Error document: `404.html`

3. **Bucket Policy:**
   ```json
   {
     "Version": "2012-10-17",
     "Statement": [
       {
         "Sid": "PublicReadGetObject",
         "Effect": "Allow",
         "Principal": "*",
         "Action": "s3:GetObject",
         "Resource": "arn:aws:s3:::your-portfolio-bucket/*"
       }
     ]
   }
   ```

### CloudFront Distribution

1. **Create Distribution:**
   - Origin Domain: `your-portfolio-bucket.s3-website-us-east-1.amazonaws.com`
   - Viewer Protocol Policy: `Redirect HTTP to HTTPS`
   - Allowed HTTP Methods: `GET, HEAD`
   - Compress Objects Automatically: `Yes`

2. **Custom Error Pages:**
   - 403: `/404.html` (TTL: 300)
   - 404: `/404.html` (TTL: 300)

3. **Cache Behaviors:**
   - Default: Cache everything
   - `/images/*`: Cache for 1 year
   - `/videos/*`: Cache for 1 year
   - `/_next/static/*`: Cache for 1 year

## 🔧 Configuration Details

### Next.js Configuration (`next.config.js`)
```javascript
const nextConfig = {
  output: 'export',           // Enable static export
  trailingSlash: true,        // Add trailing slashes to URLs
  images: { 
    unoptimized: true         // Required for static export
  },
};
```

### Key Features Enabled
- ✅ Static Site Generation (SSG)
- ✅ Client-side routing
- ✅ Optimized images and videos
- ✅ Responsive design
- ✅ SEO-friendly URLs

## 📊 Cost Estimation

**Monthly costs for low-traffic portfolio:**
- S3 Storage (1GB): ~$0.02
- S3 Requests: ~$0.01
- CloudFront (1GB transfer): ~$0.09
- **Total: ~$0.12/month**

**Medium traffic (10GB transfer):**
- **Total: ~$1.00/month**

## 🛠️ Troubleshooting

### Build Issues
1. **Missing dependencies:**
   ```bash
   npm install --legacy-peer-deps
   ```

2. **TypeScript errors:**
   - Check `tsconfig.json` configuration
   - Ensure all imports are correct

3. **Image optimization errors:**
   - Verify `images: { unoptimized: true }` in `next.config.js`

### Deployment Issues
1. **S3 sync fails:**
   - Check AWS credentials: `aws configure list`
   - Verify bucket permissions

2. **CloudFront not updating:**
   - Create invalidation: `aws cloudfront create-invalidation --distribution-id ID --paths "/*"`
   - Wait 5-15 minutes for propagation

## 📁 Project Structure
```
brandon_portfolio/
├── app/
│   ├── components/          # React components
│   ├── public/             # Static assets
│   │   ├── images/         # Optimized images
│   │   └── videos/         # Compressed videos
│   ├── app/                # Next.js app directory
│   ├── next.config.js      # Next.js configuration
│   └── package.json        # Dependencies
├── deploy-static.sh        # Linux/Mac deployment script
├── deploy-static.bat       # Windows deployment script
└── README.md              # This file
```

## 🎯 Performance Optimizations

- **Images:** Compressed to 85% quality, max 1920x1080
- **Videos:** H.264 codec, CRF 28, optimized for web
- **Total size reduction:** 79.5% (from original files)
- **CDN:** Global edge caching via CloudFront

## 🔄 CI/CD Integration

### GitHub Actions Example
```yaml
name: Deploy to S3+CloudFront
on:
  push:
    branches: [main]
jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - uses: actions/setup-node@v3
        with:
          node-version: '20'
      - run: cd brandon_portfolio/app && npm install --legacy-peer-deps
      - run: cd brandon_portfolio/app && npm run build
      - run: aws s3 sync brandon_portfolio/app/out/ s3://${{ secrets.S3_BUCKET }} --delete
      - run: aws cloudfront create-invalidation --distribution-id ${{ secrets.CLOUDFRONT_ID }} --paths "/*"
```

## 📞 Support

For issues or questions:
1. Check the troubleshooting section above
2. Review AWS CloudFormation/CDK templates for infrastructure as code
3. Consider using AWS Amplify Console for simpler deployment (if the original issues are resolved)

---

**Ready to deploy!** 🚀 Your portfolio is now optimized for global delivery via AWS S3 + CloudFront.