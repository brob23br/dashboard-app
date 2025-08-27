const path = require('path');

/** @type {import('next').NextConfig} */
const nextConfig = {
  // Removed 'output: export' to enable API routes for Strava integration
  trailingSlash: true,
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: false,
  },
  images: { 
    unoptimized: true 
  },
};

module.exports = nextConfig;