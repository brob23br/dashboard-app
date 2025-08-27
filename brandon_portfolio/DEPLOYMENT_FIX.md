# Brandon Robinson Portfolio - Deployment Guide

## Fixed Issues for Vercel Deployment

### 1. Directory Structure Fixed
- Moved all configuration files to the root directory
- Fixed the double-nested `app/app/` structure to proper `app/` structure
- Moved `package.json`, `next.config.js`, `tsconfig.json`, and other config files to root

### 2. Next.js Configuration Updated
- Removed problematic `experimental.outputFileTracingRoot` configuration
- Simplified `next.config.js` to avoid server runtime errors
- Kept API routes enabled for Strava integration

### 3. Environment Variables Required
Add these environment variables in your Vercel dashboard:

```
STRAVA_CLIENT_ID=your_client_id_here
STRAVA_CLIENT_SECRET=your_client_secret_here
STRAVA_ACCESS_TOKEN=your_access_token_here
STRAVA_REFRESH_TOKEN=your_refresh_token_here
```

### 4. Deployment Steps
1. Push the updated code to your GitHub repository
2. Connect the repository to Vercel
3. Set the root directory to `brandon_portfolio` in Vercel settings
4. Add the environment variables in Vercel dashboard
5. Deploy

### 5. Build Command
The build should now work with the standard Next.js commands:
- `npm install`
- `npm run build`
- `npm start`

## Key Changes Made
- Fixed directory structure (moved from nested app/app/ to proper app/)
- Removed experimental outputFileTracingRoot configuration
- Added vercel.json for proper deployment configuration
- Maintained API routes for Strava integration functionality