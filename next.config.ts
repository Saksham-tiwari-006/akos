import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  experimental: {
    serverActions: {
      bodySizeLimit: '10mb',
    },
  },
  // Suppress the async headers warning - this is from Clerk's internal code
  logging: {
    fetches: {
      fullUrl: false,
    },
  },
};

export default nextConfig;
