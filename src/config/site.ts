export interface SiteConfig {
  name: string;
  tagline: string;
  description: string;
  canonicalUrl: string;
  playStoreUrl: string;
  supportEmail: string;
  navLinks: Array<{ label: string; href: string; external?: boolean }>;
  footerColumns: Array<{
    title: string;
    links: Array<{ label: string; href: string; external?: boolean }>;
  }>;
}

export const SITE_CONFIG: SiteConfig = {
  name: 'Trivio',
  tagline: 'Discover Nashik. Plan your journey.',
  description:
    'TRIVIO is an Android travel guide for Nashik, Maharashtra. Discover temples, forts, vineyards and waterfalls, explore local place details, save favourites and build custom multi-day itineraries.',
  canonicalUrl: 'https://nashik.sooubh.me',
  playStoreUrl: 'https://play.google.com/store/apps/details?id=com.sooubh.nashikexplore',
  supportEmail: 'trivio-support@sooubh.in',
  navLinks: [
    { label: 'Destinations', href: '#destinations' },
    { label: 'Field Guide', href: '#gazetteer' },
    { label: 'Experiences', href: '#experiences' },
    { label: 'Why Local', href: '#why-trivio' },
    { label: 'Trip Guide', href: '/trip-planner' },
    { label: 'FAQ', href: '#faq' },
  ],
  footerColumns: [
    {
      title: 'App & Features',
      links: [
        { label: 'Trip Architecture Guide', href: '/trip-planner' },
        { label: 'Google Play Store', href: 'https://play.google.com/store/apps/details?id=com.sooubh.nashikexplore', external: true },
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
