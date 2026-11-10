export interface FaqItem {
  question: string;
  answer: string;
}

export const FAQ_ITEMS: FaqItem[] = [
  {
    question: 'What is Trivio?',
    answer:
      'Trivio is an Android travel guide focused on Nashik and nearby destinations. It helps visitors discover places, browse practical destination information and plan a visit around their interests.',
  },
  {
    question: 'Which places can I explore with Trivio?',
    answer:
      'The guide highlights a range of Nashik-area places, including Trimbakeshwar Shiva Temple, Kalaram Mandir and Panchavati, Pandavleni Caves, Sula and York vineyards, Harihar Fort, Anjaneri Hills and Someshwar Waterfall. Place information and availability can change, so confirm important details before travelling.',
  },
  {
    question: 'Can Trivio help me plan a multi-day Nashik trip?',
    answer:
      'Yes. The app collects preferences such as trip duration, budget, travel style, interests, transport and pace. It can request AI-assisted itinerary generation and also has a local rule-based fallback. Treat generated plans as suggestions and check current opening hours, travel conditions and access rules before your trip.',
  },
  {
    question: 'Can I search and filter destinations?',
    answer:
      'Yes. Trivio supports destination discovery with search and filters across available place listings, helping you browse categories and find places that match your interests.',
  },
  {
    question: 'Can I save places for a future visit?',
    answer:
      'Signed-in users can save places to wishlist boards in the app and organise destinations they want to revisit.',
  },
  {
    question: 'Does Trivio provide turn-by-turn navigation or live opening hours?',
    answer:
      'When a place has a valid map link or coordinates, the app can hand off to an external maps application such as Google Maps. Place listings may include timing, fee or facility details where available, but these details can change and should be confirmed with the venue. Trivio does not replace live navigation or venue confirmation.',
  },
];
