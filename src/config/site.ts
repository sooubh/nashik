export interface SiteConfig {
  name: string;
  tagline: string;
  description: string;
  canonicalUrl: string;
  playStoreUrl: string;
  packageId: string;
  supportEmail: string;
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
  canonicalUrl: 'https://nashik.sooubh.me',
  playStoreUrl: 'https://play.google.com/store/apps/details?id=com.sooubh.nashikexplore',
  packageId: 'com.sooubh.nashikexplore',
  supportEmail: 'support@nashikexplore.com',
  navLinks: [
    { label: 'Destinations', href: '#places' },
    { label: 'Field Guide', href: '#gazetteer' },
    { label: 'App Features', href: '#features' },
    { label: 'Why Local', href: '#comparison' },
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
        { label: 'Contact Developer', href: 'mailto:support@nashikexplore.com', external: true },
      ],
    },
  ],
};
