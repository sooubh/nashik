import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const ContentSecurityPolicy = `
  default-src 'self';
  script-src 'self' 'unsafe-inline' 'unsafe-eval';
  style-src 'self' 'unsafe-inline' https://fonts.googleapis.com;
  font-src 'self' https://fonts.gstatic.com data:;
  img-src 'self' data: blob: https://maps.google.com https://*.google.com https://*.googleapis.com;
  connect-src 'self';
  frame-ancestors 'none';
  form-action 'self' mailto:;
  base-uri 'self';
  object-src 'none';
  upgrade-insecure-requests;
`.replace(/\s{2,}/g, ' ').trim();

const securityHeaders = [
  {
    key: 'Content-Security-Policy',
    value: ContentSecurityPolicy,
  },
  {
    key: 'Strict-Transport-Security',
    value: 'max-age=63072000; includeSubDomains; preload',
  },
  {
    key: 'X-Frame-Options',
    value: 'DENY',
  },
  {
    key: 'X-Content-Type-Options',
    value: 'nosniff',
  },
  {
    key: 'Referrer-Policy',
    value: 'strict-origin-when-cross-origin',
  },
  {
    key: 'Permissions-Policy',
    value: 'camera=(), microphone=(), geolocation=(), payment=(), usb=()',
  },
  {
    key: 'Cross-Origin-Opener-Policy',
    value: 'same-origin',
  },
  {
    key: 'Cross-Origin-Resource-Policy',
    value: 'same-origin',
  },
];

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
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: securityHeaders,
      },
    ];
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
