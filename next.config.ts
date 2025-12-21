import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  experimental: {
    serverActions: {
      bodySizeLimit: '10mb',
      allowedOrigins: ['*'],
    },
  },
  webpack: (config, { isServer }) => {
    // Fallback to traditional webpack
    return config;
  },
  serverExternalPackages: ['@clerk/nextjs'],
};

export default nextConfig;
