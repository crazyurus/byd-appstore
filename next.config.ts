import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'byd-store-cdn-rel.byd.auto',
      },
    ],
  },
};

export default nextConfig;
