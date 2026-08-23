import { AppScreenshot } from '@/lib/types';

export const appScreenshotsData: AppScreenshot[] = [
  {
    id: 'screen-1',
    title: 'Explore Home',
    description: 'Dynamic dashboard with weather card, spotlight destinations, and categories.',
    src: '/images/home.png',
    tag: 'Dashboard',
  },
  {
    id: 'screen-2',
    title: 'Search & Filters',
    description: 'Instant keyword search, accessibility tags, and distance sorting.',
    src: '/images/explore.png',
    tag: 'Discovery',
  },
  {
    id: 'screen-3',
    title: 'AI Trip Planner',
    description: 'Custom multi-day itinerary generator with Haversine distance optimization.',
    src: '/images/ai-planner.png',
    tag: 'Itinerary',
  },
  {
    id: 'screen-4',
    title: 'Saved Wishlists',
    description: 'Offline board collections with fast Hive local caching.',
    src: '/images/saved.png',
    tag: 'Wishlist',
  },
  {
    id: 'screen-5',
    title: 'User Profile & Settings',
    description: 'Dark mode switcher, review history, and lifetime premium activation.',
    src: '/images/profile.png',
    tag: 'Account',
  },
  {
    id: 'screen-6',
    title: 'Detailed Spot Guide',
    description: 'Trekking warnings, entrance fees, Google Maps link, and timings.',
    src: '/images/details.png',
    tag: 'Details',
  },
];
