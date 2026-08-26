import type { Metadata, Viewport } from 'next';
import { DM_Sans } from 'next/font/google';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { BackToTop } from '@/components/BackToTop';
import './globals.css';

const dmSans = DM_Sans({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-dm-sans',
  weight: ['300', '400', '500', '600', '700', '800'],
});

export const metadata: Metadata = {
  metadataBase: new URL('https://nashik.sooubh.me'),
  title: {
    default: 'Nashik Travel Guide — Official Android App for Exploring Nashik',
    template: '%s | Nashik Travel Guide',
  },
  description:
    'The official travel companion for Nashik, Maharashtra. Explore Trimbakeshwar Jyotirlinga, Sula Vineyards, Sahyadri hiking trails, waterfalls, and offline transit maps. Download the verified Android app.',
  applicationName: 'Nashik Travel Guide',
  authors: [{ name: 'Nashik Travel Guide Team' }],
  generator: 'Next.js',
  keywords: [
    'Nashik travel guide',
    'Nashik android app',
    'Trimbakeshwar temple timings',
    'Sula Vineyards tour',
    'Harihar Fort trek',
    'Anjaneri hill guide',
    'Dugarwadi waterfall',
    'Nashik offline travel maps',
    'Maharashtra tourism',
    'Kumbh Mela Nashik',
    'AI Nashik itinerary planner',
  ],
  referrer: 'origin-when-cross-origin',
  creator: 'Nashik Travel Guide',
  publisher: 'Nashik Travel Guide',
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
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    url: 'https://nashik.sooubh.me/',
    siteName: 'Nashik Travel Guide',
    title: 'Nashik Travel Guide — Official Android App for Exploring Nashik',
    description:
      'Explore Trimbakeshwar, Sula Vineyards, Sahyadri waterfalls, and offline travel maps with the verified Android app.',
    images: [
      {
        url: '/images/app-horizontal-icon.png',
        width: 1200,
        height: 630,
        alt: 'Nashik Travel Guide Android App Preview',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Nashik Travel Guide — Official Android App for Exploring Nashik',
    description:
      'Explore Trimbakeshwar, Sula Vineyards, Sahyadri waterfalls, and offline travel maps with the verified Android app.',
    images: ['/images/app-horizontal-icon.png'],
  },
  icons: {
    icon: '/images/logo.png',
    shortcut: '/images/logo.png',
    apple: '/images/logo.png',
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#FAFBFE' },
    { media: '(prefers-color-scheme: dark)', color: '#080B12' },
  ],
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
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
        '@id': 'https://nashik.sooubh.me/#app',
        name: 'Nashik Travel Guide',
        operatingSystem: 'Android 8.0+',
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
        downloadUrl:
          'https://play.google.com/store/apps/details?id=com.nashikexplore.app',
        installUrl:
          'https://play.google.com/store/apps/details?id=com.nashikexplore.app',
        url: 'https://nashik.sooubh.me',
        image: '/images/app-splashscreen-icon.png',
        screenshot: [
          'https://nashik.sooubh.me/images/home.png',
          'https://nashik.sooubh.me/images/explore.png',
          'https://nashik.sooubh.me/images/ai-planner.png',
          'https://nashik.sooubh.me/images/saved.png',
          'https://nashik.sooubh.me/images/profile.png',
          'https://nashik.sooubh.me/images/details.png',
        ],
        featureList: [
          '100% Offline Database with Hive',
          'AI Smart Itinerary Planner with Haversine Routing',
          'Material 3 Dynamic Color Theming',
          'Monsoon and Trekking Hazard Caution Warnings',
          'Verified Google Maps Coordinates',
          'Curated Vineyards, Forts, Temples, and Waterfalls',
        ],
      },
      {
        '@type': 'WebSite',
        '@id': 'https://nashik.sooubh.me/#website',
        url: 'https://nashik.sooubh.me/',
        name: 'Nashik Travel Guide',
        description:
          'Official website and travel directory companion for Nashik, Maharashtra.',
        publisher: {
          '@type': 'Organization',
          name: 'Nashik Travel Guide',
          logo: {
            '@type': 'ImageObject',
            url: 'https://nashik.sooubh.me/images/logo.png',
          },
        },
      },
    ],
  };

  return (
    <html lang="en" className={dmSans.variable} suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </head>
      <body className="font-sans antialiased min-h-screen flex flex-col selection:bg-brand-blue/20 selection:text-brand-blue dark:selection:bg-brand-400/20 dark:selection:text-brand-300">
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-brand-blue focus:text-white focus:rounded-xl focus:shadow-lg focus:outline-none text-xs font-bold"
        >
          Skip to main content
        </a>
        <Navbar />
        <main id="main-content" className="flex-1">
          {children}
        </main>
        <Footer />
        <BackToTop />
      </body>
    </html>
  );
}
