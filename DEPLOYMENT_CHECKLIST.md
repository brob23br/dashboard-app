# 📋 S3+CloudFront Deployment Checklist

## Pre-Deployment Setup
- [ ] Install Node.js (v18 or v20)
- [ ] Install AWS CLI and configure credentials
- [ ] Create S3 bucket for hosting
- [ ] Set up CloudFront distribution (optional but recommended)

## Build Process
- [ ] Navigate to project: `cd brandon_portfolio/app`
- [ ] Install dependencies: `npm install --legacy-peer-deps`
- [ ] Build for static export: `npm run build`
- [ ] Verify `out/` directory is created

## AWS Infrastructure
- [ ] S3 bucket configured for static website hosting
- [ ] Bucket policy allows public read access
- [ ] CloudFront distribution created (optional)
- [ ] Custom domain configured (optional)

## Deployment
- [ ] Upload files: `aws s3 sync out/ s3://your-bucket-name --delete`
- [ ] Invalidate CloudFront cache (if using CloudFront)
- [ ] Test website functionality
- [ ] Verify all pages load correctly
- [ ] Check mobile responsiveness

## Post-Deployment
- [ ] Set up monitoring (CloudWatch, etc.)
- [ ] Configure CI/CD pipeline (GitHub Actions, etc.)
- [ ] Update DNS records (if using custom domain)
- [ ] Test from different geographic locations

## Cost Optimization
- [ ] Enable S3 lifecycle policies for old versions
- [ ] Configure CloudFront caching rules
- [ ] Monitor usage and costs
- [ ] Set up billing alerts

---

**Estimated Monthly Cost**: $0.12 - $1.00 for low traffic
**Build Time**: ~2-5 minutes
**Deployment Time**: ~1-3 minutes