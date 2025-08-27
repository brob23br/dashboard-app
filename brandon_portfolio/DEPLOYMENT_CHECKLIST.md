# Vercel Deployment Checklist

## ✅ Pre-Deployment Checklist

- [x] Fixed directory structure (moved from app/app/ to app/)
- [x] Moved configuration files to root directory
- [x] Updated next.config.js (removed experimental config)
- [x] Created vercel.json configuration
- [x] Updated package.json name

## 🚀 Deployment Steps

### 1. Push to GitHub
```bash
git add .
git commit -m "Fix Vercel deployment structure and configuration"
git push origin main
```

### 2. Vercel Settings
- **Root Directory**: `brandon_portfolio` ⚠️ **IMPORTANT**
- **Framework**: Next.js (auto-detected)
- **Build Command**: `npm run build` (default)
- **Output Directory**: `.next` (default)

### 3. Environment Variables (Add in Vercel Dashboard)
```
STRAVA_CLIENT_ID=your_client_id_here
STRAVA_CLIENT_SECRET=your_client_secret_here
STRAVA_ACCESS_TOKEN=your_access_token_here
STRAVA_REFRESH_TOKEN=your_refresh_token_here
```

### 4. Deploy
Click "Deploy" in Vercel - it should now build successfully!

## 🎯 Expected Build Output
```
✓ Compiled successfully
✓ Collecting page data
✓ Generating static pages (4/4)
✓ Finalizing page optimization
```

## 🔍 If Issues Persist
1. Check that root directory is set to `brandon_portfolio`
2. Verify environment variables are set correctly
3. Check build logs for any missing dependencies
4. Ensure GitHub repository has the latest changes

The main error "Cannot find module 'next/dist/compiled/next-server/server.runtime.prod.js'" should now be resolved!