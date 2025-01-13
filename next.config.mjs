/** @type {import('next').NextConfig} */

import withBundleAnalyzer from '@next/bundle-analyzer';

const nextConfig = withBundleAnalyzer({
  enabled: process.env.ANALYZE === 'true',
})({
  images: {
    domains: ['firebasestorage.googleapis.com'],
  },
  experimental: {
    optimizeCss: true,
    productionBrowserSourceMaps: true,
  },
});

export default nextConfig;

/*const nextConfig = {
    images: {
      domains: ['firebasestorage.googleapis.com'],
    }
  };
export default nextConfig;*/
