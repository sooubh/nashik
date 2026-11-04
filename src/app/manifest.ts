import { MetadataRoute } from 'next';
import { SITE_CONFIG } from '@/config/site';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: `${SITE_CONFIG.name}: Nashik Travel Guide, Temples & Vineyards`,
    short_name: SITE_CONFIG.name,
    description: SITE_CONFIG.description,
    start_url: '/',
    display: 'standalone',
    background_color: '#FBFAFD',
    theme_color: '#4B2E83',
    orientation: 'portrait',
    categories: ['travel', 'navigation', 'lifestyle'],
    icons: [
      {
        src: '/favicon.ico',
        sizes: '48x48 32x32 16x16',
        type: 'image/x-icon',
      },
      {
        src: '/apple-touch-icon.png',
        sizes: '180x180',
        type: 'image/png',
      },
      {
        src: '/Icon-192.png',
        sizes: '192x192',
        type: 'image/png',
      },
      {
        src: '/Icon-512.png',
        sizes: '512x512',
        type: 'image/png',
      },
      {
        src: '/images/app-splashscreen-icon.png',
        sizes: '512x512',
        type: 'image/png',
        purpose: 'maskable',
      },
    ],
  };
}
