import { FaqItem } from '@/lib/types';

export const faqData: FaqItem[] = [
  {
    question: 'What permissions does the Nashik Travel Guide Android app require?',
    answer:
      'The app requests standard internet permissions to sync travel directories, coordinates, and spot reviews. It also requires fine location (GPS) permissions to calculate real-time distance estimations from your location and provide seamless Google Maps navigation.',
    category: 'Permissions',
  },
  {
    question: 'How does the weather system operate under low billing calls?',
    answer:
      'Instead of having individual client devices make expensive third-party weather API queries, a cloud scheduler updates a single global Firestore document hourly. Client apps fetch this cached document directly, reducing operational billing and network battery footprint drastically.',
    category: 'Architecture',
  },
  {
    question: 'What features does the ₹199 Lifetime Premium Tier offer?',
    answer:
      'The one-time ₹199 lifetime upgrade removes all Google Mobile Ads (AdMob) from the dashboard, unlocks unlimited AI itinerary trip planning configurations, and provides offline maps download capabilities for remote Sahyadri regions.',
    category: 'Pricing',
  },
  {
    question: 'Are the destination details and warnings locally verified?',
    answer:
      'Yes. Nashik Travel Guide includes local moderation. Verified spots detail exact accessibility options, parking facilities, monsoonal flash-flood risks, and Maharashtra 25+ age wine tasting legal requirements.',
    category: 'Verification',
  },
  {
    question: 'Can I use the app and save wishlists offline without an account?',
    answer:
      'Yes! You can explore the entire directory and build offline saved boards as a guest. All wishlist data is stored directly on your phone using high-performance Hive local storage.',
    category: 'Offline',
  },
  {
    question: 'How do I submit new hidden spots or report outdated timings?',
    answer:
      'You can reach out directly to the developer helpdesk via our Contact page or send an email to support@nashikexplore.com. Our moderation team reviews submissions within 24 to 48 hours.',
    category: 'Contributions',
  },
];
