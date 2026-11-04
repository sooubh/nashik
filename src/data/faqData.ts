import { SITE_CONFIG } from '@/config/site';

export interface FaqItem {
  question: string;
  answer: string;
}

export const FAQ_ITEMS: FaqItem[] = [
  {
    question: `Is ${SITE_CONFIG.name} free to download and use on Android?`,
    answer:
      `Yes. ${SITE_CONFIG.name} is completely free on Android via Google Play. You get access to all destination dossiers, category filters, offline caching, and itinerary planning with zero ads or surprise subscriptions.`,
  },
  {
    question: 'How does Trivio differ from generic chatbots or standard map apps?',
    answer:
      'Standard map apps frequently fail to account for afternoon Garbhagriha closures or pair distant spots that cause hours of cross-city traffic. Trivio uses verified local entries that verify opening hours, check aarti timings, factor in mountain road transit, and sequence stops without backtracking.',
  },
  {
    question: 'Does the app work if cellular reception drops in Sahyadri valleys?',
    answer:
      'Yes. The application is built local-first for the realities of the Western Ghats. Saved wishlist boards and destination guides are stored on-device in local storage. When cellular signal drops at fort summits or in rural valleys, core data and coordinates remain accessible.',
  },
  {
    question: 'Which transit arrival hubs can I select for multi-day itineraries?',
    answer:
      'You can choose your exact point of arrival: Nashik Road Railway Station (main rail terminus), Ozar Airport (regional flight hub), or Central Bus Stand (CBS / Thakkar Bazaar). The itinerary sequences your stops geographically from that starting hub.',
  },
  {
    question: 'How does turn-by-turn road navigation work?',
    answer:
      'The app displays point-to-point geographic distances for planning and provides a direct one-tap button to push exact GPS coordinates into your favorite map app (such as Google Maps) for live driving directions.',
  },
  {
    question: 'Are temple dress codes and visiting guidelines included?',
    answer:
      'Yes. Heritage and pilgrimage sites like Trimbakeshwar Jyotirlinga and Kalaram Mandir provide specific guidance on expected attire (such as dhoti/kurta rules for Gabhara puja) and optimal morning hours to avoid long queues.',
  },
];
