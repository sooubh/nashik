import { SITE_CONFIG } from '@/config/site';

export interface FaqItem {
  question: string;
  answer: string;
}

export const FAQ_ITEMS: FaqItem[] = [
  {
    question: 'What is TRIVIO?',
    answer:
      'TRIVIO is an Android travel guide focused on Nashik, Maharashtra. It helps travellers discover local destinations, explore place information, search by category, save favourites and create custom itineraries.',
  },
  {
    question: `Is ${SITE_CONFIG.name} free to download?`,
    answer:
      'TRIVIO is free to install from Google Play. Optional in-app Premium subscription offers may be available, and some free app experiences may include advertising. Check the app and Google Play listing for current plans, prices and inclusions.',
  },
  {
    question: 'Which places can I explore with TRIVIO in Nashik?',
    answer:
      'Explore destination information for places such as Trimbakeshwar Shiva Temple, Kalaram Mandir and Panchavati, Sula and York vineyards, Harihar Fort, Anjaneri and Pandavleni Caves. The guide also features nature destinations around Nashik; check each place entry for the latest available details.',
  },
  {
    question: 'Can TRIVIO create a Nashik trip itinerary?',
    answer:
      'Yes. The Android app includes a custom itinerary builder for single-day and multi-day Nashik trips. You can shape a plan around your interests, trip duration and starting point, then review the suggested stops before travelling.',
  },
  {
    question: 'Can I use saved TRIVIO information without an internet connection?',
    answer:
      'The app stores selected destination information and saved lists locally, so previously loaded or saved details may remain available when connectivity is weak. Live information, account features and cloud syncing can still require an internet connection.',
  },
  {
    question: 'Does TRIVIO book hotels, tickets or vineyard experiences?',
    answer:
      'No. TRIVIO is a destination discovery and trip-planning guide, not a booking platform. Confirm current entry rules, opening hours, ticket availability and vineyard tasting reservations directly with the venue before visiting.',
  },
  {
    question: 'How do I navigate to a destination?',
    answer:
      'Open a place in the app and use its map or navigation hand-off to continue in a maps application such as Google Maps. Check the route and local travel conditions before starting your journey.',
  },
  {
    question: 'Are destination timings and travel conditions always current?',
    answer:
      'Venue schedules, temple arrangements, road access and seasonal conditions can change. Treat the app as a planning guide and confirm time-sensitive information with the destination or relevant local authority before you travel.',
  },
];
