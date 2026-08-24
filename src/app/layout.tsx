import type { Metadata } from 'next';
import { Plus_Jakarta_Sans } from 'next/font/google';
import './globals.css';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { BackToTop } from '@/components/BackToTop';

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '800'],
  variable: '--font-plus-jakarta-sans',
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://nashikexplore.com'),
  title: {
    default: 'Nashik Travel Guide — Official Android App for Exploring Nashik',
    template: '%s | Nashik Travel Guide',
  },
  description:
    'Discover ancient Jyotirlinga temples in Trimbakeshwar, world-famous Sula vineyards, Sahyadri waterfall trails, and historic forts with the official Nashik Travel Guide Android app. Featuring on-device AI itineraries, real-time weather, and 100% offline Hive storage.',
  keywords: [
    'Nashik',
    'Nashik Travel Guide',
    'Nashik Tourism App',
    'Trimbakeshwar Shiva Temple',
    'Sula Vineyards Nashik',
    'Harihar Fort Trek',
    'Anjaneri Hills',
    'Dugarwadi Waterfall',
    'Someshwar Waterfall',
    'Pandavleni Caves',
    'Maharashtra Tourism',
    'AI Trip Planner Nashik',
    'Android Travel App Nashik',
    'Offline Travel Guide',
  ],
  authors: [{ name: 'Nashik Travel Guide Team' }],
  creator: 'Nashik Travel Guide',
  publisher: 'Nashik Travel Guide Apps',
  alternates: {
    canonical: '/',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://nashikexplore.com/',
    siteName: 'Nashik Travel Guide',
    title: 'Nashik Travel Guide — Official Android App for Exploring Nashik',
    description:
      'The premier travel companion for Nashik, Maharashtra. Explore temples, vineyards, forts, AI itineraries, and verified offline guides.',
    images: [
      {
        url: '/images/app-horizontal-icon.png',
        width: 1200,
        height: 630,
        alt: 'Nashik Travel Guide Android Application',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Nashik Travel Guide — Official Android App',
    description:
      'The premier travel companion for Nashik, Maharashtra. Temples, Vineyards, Forts, AI Trip Planner, and Offline travel support.',
    images: ['/images/app-horizontal-icon.png'],
  },
  icons: {
    icon: '/images/app-launcher-icon.png',
    apple: '/images/app-launcher-icon.png',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const structuredData = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'MobileApplication',
        '@id': 'https://nashikexplore.com/#app',
        name: 'Nashik Travel Guide',
        operatingSystem: 'Android 8.0 and up',
        applicationCategory: 'TravelApplication',
        offers: {
          '@type': 'Offer',
          price: '0',
          priceCurrency: 'INR',
        },
        aggregateRating: {
          '@type': 'AggregateRating',
          ratingValue: '4.8',
          ratingCount: '1250',
          bestRating: '5',
          worstRating: '1',
        },
        author: {
          '@type': 'Organization',
          name: 'Nashik Travel Guide Apps',
          url: 'https://nashikexplore.com',
        },
        screenshot: [
          'https://nashikexplore.com/images/home.png',
          'https://nashikexplore.com/images/explore.png',
          'https://nashikexplore.com/images/ai-planner.png',
          'https://nashikexplore.com/images/saved.png',
          'https://nashikexplore.com/images/profile.png',
          'https://nashikexplore.com/images/details.png',
        ],
        softwareVersion: '1.0.0',
        downloadUrl: 'https://play.google.com/store/apps/details?id=com.nashikexplore.app',
        installUrl: 'https://play.google.com/store/apps/details?id=com.nashikexplore.app',
        featureList: [
          'Material 3 modern UI design',
          '100% offline Hive database storage',
          'On-device AI multi-day trip planner',
          'GPS Haversine distance calculations',
          'Verified trekking safety & monsoon cautions',
          'Google Maps direct directions integration',
        ],
      },
      {
        '@type': 'WebSite',
        '@id': 'https://nashikexplore.com/#website',
        url: 'https://nashikexplore.com/',
        name: 'Nashik Travel Guide',
        description: 'Official portal and travel companion for Nashik, Maharashtra.',
        publisher: {
          '@type': 'Organization',
          name: 'Nashik Travel Guide Apps',
          logo: {
            '@type': 'ImageObject',
            url: 'https://nashikexplore.com/images/logo.png',
          },
        },
      },
    ],
  };

  return (
    <html lang="en" className={`scroll-smooth ${plusJakartaSans.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </head>
      <body className="bg-[#FAFCFF] dark:bg-[#060A12] text-slate-900 dark:text-slate-100 font-sans antialiased min-h-screen flex flex-col justify-between selection:bg-brand-sky/25">
        {/* Skip to Content for Accessibility */}
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 z-50 px-4 py-2 bg-brand-blue text-white rounded-xl shadow-lg font-bold text-xs"
        >
          Skip to main content
        </a>

        <div className="glow-orb-blue top-0 right-1/4" />
        <div className="glow-orb-blue top-96 left-10 opacity-60" />

        <Navbar />
        <main id="main-content" className="flex-1">{children}</main>
        <Footer />
        <BackToTop />
      </body>
    </html>
  );
}
