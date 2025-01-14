/* @type {import('next').NextConfig} 

import withBundleAnalyzer from '@next/bundle-analyzer';

const nextConfig = withBundleAnalyzer({
  output:"export",
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

export default nextConfig;*/
/** @type {import('next').NextConfig} */
import withBundleAnalyzer from '@next/bundle-analyzer';

const nextConfig = {
  output: 'export', // This specifies static export mode
  images: {
    domains: ['firebasestorage.googleapis.com'], // Allowed domains for images
    unoptimized: true, // Required for static export when using external images
  },
  experimental: {
    optimizeCss: true, // Enable CSS optimization
    productionBrowserSourceMaps: true, // Enable source maps for production
  },
};

// Export the configuration after applying the bundle analyzer
export default withBundleAnalyzer({
  enabled: process.env.ANALYZE === 'true',
})(nextConfig);
