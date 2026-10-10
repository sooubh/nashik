import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    unoptimized: true,
  },
  webpack: (config) => {
    config.resolve.alias['@'] = path.resolve(__dirname, 'src');
    return config;
  },
  async redirects() {
    return [
      { source: '/index.html', destination: '/', permanent: true },
      { source: '/privacy-policy.html', destination: '/privacy-policy', permanent: true },
      { source: '/terms-of-use.html', destination: '/terms-of-use', permanent: true },
      { source: '/data-safety.html', destination: '/data-safety', permanent: true },
      { source: '/cookies-policy.html', destination: '/cookies-policy', permanent: true },
      { source: '/disclaimer.html', destination: '/disclaimer', permanent: true },
      { source: '/contact.html', destination: '/contact', permanent: true },
      { source: '/delete-account.html', destination: '/delete-account', permanent: true },
      { source: '/trip-planner.html', destination: '/trip-planner', permanent: true },
      { source: '/404.html', destination: '/', permanent: true },
    ];
  },
};

export default nextConfig;
