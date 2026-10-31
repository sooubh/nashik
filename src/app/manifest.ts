import { MetadataRoute } from 'next';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'NashikExplore: Curated Travel Companion',
    short_name: 'NashikExplore',
    description:
      'Field guide to Nashik’s vineyards, sacred ghats, and mountain forts. Curated landmark dossiers, station-based itineraries, and offline wishlists.',
    start_url: '/',
    display: 'standalone',
    background_color: '#070B14',
    theme_color: '#2563EB',
    orientation: 'portrait',
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
        src: '/images/app-splashscreen-icon.png',
        sizes: '512x512',
        type: 'image/png',
        purpose: 'maskable',
      },
    ],
  };
}
