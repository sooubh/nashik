export interface SiteConfig {
  name: string;
  tagline: string;
  description: string;
  canonicalUrl: string;
  playStoreUrl: string;
  supportEmail: string;
  theme: {
    primaryColor: string;
    secondaryColor: string;
    accentColor: string;
  };
  defaultOgImage: string;
  socials: {
    twitter: string;
    github: string;
    instagram: string;
    youtube: string;
  };
  adsEnabled: boolean;
  urlMap: {
    kumbh: string;
    temples: string;
    places: string;
    food: string;
    dayTrips: string;
    itineraries: string;
    travelTips: string;
    stay: string;
    guides: string;
    tags: string;
    trivio: string;
  };
  navLinks: Array<{ label: string; href: string; external?: boolean }>;
  footerColumns: Array<{
    title: string;
    links: Array<{ label: string; href: string; external?: boolean }>;
  }>;
}

export const SITE_CONFIG: SiteConfig = {
  name: 'Trivio',
  tagline: 'Places, Events and People in One App',
  description:
    'Discover ancient Jyotirlinga shrines, world-renowned vineyards, sheer Sahyadri fort steps, and seasonal waterfalls with local-first offline intelligence.',
  canonicalUrl: 'https://nashik.sooubh.in',
  playStoreUrl: 'https://play.google.com/store/apps/details?id=com.sooubh.nashikexplore',
  supportEmail: 'trivio-support@sooubh.in',
  theme: {
    primaryColor: '#4B2E83',
    secondaryColor: '#FF6F00',
    accentColor: '#10B981',
  },
  defaultOgImage: 'https://nashik.sooubh.in/images/destinations/sula-vineyards.webp',
  socials: {
    twitter: 'https://x.com/sooubh',
    github: 'https://github.com/sooubh/nashik',
    instagram: 'https://instagram.com/trivio_app',
    youtube: 'https://youtube.com/@trivio_travel',
  },
  adsEnabled: process.env.NEXT_PUBLIC_ADS_ENABLED === 'true',
  urlMap: {
    kumbh: '/kumbh',
    temples: '/temples',
    places: '/places',
    food: '/food',
    dayTrips: '/day-trips',
    itineraries: '/itineraries',
    travelTips: '/travel-tips',
    stay: '/stay',
    guides: '/guides',
    tags: '/tags',
    trivio: '/trivio',
  },
  navLinks: [
    { label: 'Destinations', href: '/destinations' },
    { label: 'Places to Visit', href: '/places' },
    { label: 'Simhastha Kumbh', href: '/kumbh' },
    { label: 'Expert Guides', href: '/guides' },
    { label: 'Blog & Itineraries', href: '/blog' },
    { label: 'Get Trivio', href: '/trivio' },
  ],
  footerColumns: [
    {
      title: 'Directory & Hubs',
      links: [
        { label: 'All Destinations & Regions', href: '/destinations' },
        { label: 'Top Places to Visit', href: '/places' },
        { label: 'Simhastha Kumbh 2027 Guide', href: '/kumbh' },
        { label: 'Expert Travel Guides', href: '/guides' },
        { label: 'Itineraries & Road Trips', href: '/blog' },
        { label: 'Browse by Tag & Theme', href: '/tags' },
      ],
    },
    {
      title: 'App & Features',
      links: [
        { label: 'Trivio Android App', href: '/trivio' },
        { label: 'Offline GPS Navigation', href: '/trivio' },
        { label: 'Direct Support', href: '/contact' },
      ],
    },
    {
      title: 'Legal & Policies',
      links: [
        { label: 'Privacy Policy', href: '/privacy-policy' },
        { label: 'Terms of Use', href: '/terms-of-use' },
        { label: 'Travel & Trekking Disclaimer', href: '/disclaimer' },
        { label: 'Cookies Policy', href: '/cookies-policy' },
      ],
    },
    {
      title: 'Account & Safety',
      links: [
        { label: 'Account & Data Deletion', href: '/delete-account' },
        { label: 'Play Store Data Safety', href: '/data-safety' },
        { label: 'Contact Developer', href: 'mailto:trivio-support@sooubh.in', external: true },
      ],
    },
  ],
};
