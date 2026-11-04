import type { Metadata, Viewport } from 'next';
import { Bricolage_Grotesque, Newsreader } from 'next/font/google';
import './globals.css';
import { SITE_CONFIG } from '@/config/site';
import { safeJsonLd } from '@/lib/utils';

const bricolage = Bricolage_Grotesque({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-bricolage',
});

const newsreader = Newsreader({
  subsets: ['latin'],
  style: ['normal', 'italic'],
  display: 'swap',
  variable: '--font-newsreader',
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_CONFIG.canonicalUrl),
  title: {
    default: `${SITE_CONFIG.name} · Temples, Forts & Vineyards in Nashik`,
    template: `%s | ${SITE_CONFIG.name}`,
  },
  description: SITE_CONFIG.description,
  applicationName: SITE_CONFIG.name,
  authors: [{ name: 'sooubh', url: SITE_CONFIG.canonicalUrl }],
  generator: 'Next.js',
  keywords: [
    'Nashik travel guide',
    'Trivio Nashik',
    'Nashik tourism app',
    'Trimbakeshwar Shiva Temple darshan timings',
    'Sula Vineyards wine tour Nashik',
    'Harihar Fort rock steps trek',
    'Panchavati Ramkund Nashik',
    'Pandavleni Caves Nashik',
    'Anjaneri Fort birthplace of Lord Hanuman',
    'Someshwar Waterfall Nashik',
    'Gangapur Dam boat club',
    'Nashik itinerary planner 1 day 2 days',
    'best places to visit in Nashik',
    'Maharashtra tourism offline travel guide',
    'Jyotirlinga Maharashtra travel companion',
  ],
  referrer: 'origin-when-cross-origin',
  creator: 'sooubh',
  publisher: SITE_CONFIG.name,
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
    url: `${SITE_CONFIG.canonicalUrl}/`,
    siteName: SITE_CONFIG.name,
    title: `${SITE_CONFIG.name} · Temples, Forts & Vineyards in Nashik`,
    description: SITE_CONFIG.description,
    images: [
      {
        url: '/images/destinations/sula-vineyards.jpg',
        width: 1200,
        height: 630,
        alt: `${SITE_CONFIG.name} · Authentic Travel Guide for Nashik`,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: `${SITE_CONFIG.name} · Temples, Forts & Vineyards in Nashik`,
    description: SITE_CONFIG.description,
    images: ['/images/destinations/sula-vineyards.jpg'],
  },
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon.ico',
    apple: '/Icon-192.png',
  },
};

export const viewport: Viewport = {
  themeColor: '#4B2E83',
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
        '@type': 'Organization',
        '@id': `${SITE_CONFIG.canonicalUrl}/#organization`,
        name: SITE_CONFIG.name,
        url: SITE_CONFIG.canonicalUrl,
        logo: `${SITE_CONFIG.canonicalUrl}/images/branding/logo.png`,
        contactPoint: {
          '@type': 'ContactPoint',
          email: SITE_CONFIG.supportEmail,
          contactType: 'Customer Support',
          areaServed: 'IN',
          availableLanguage: ['English', 'Hindi', 'Marathi'],
        },
        address: {
          '@type': 'PostalAddress',
          addressLocality: 'Nashik',
          addressRegion: 'Maharashtra',
          addressCountry: 'IN',
        },
        sameAs: [
          SITE_CONFIG.playStoreUrl,
          'https://twitter.com',
          'https://instagram.com',
          'https://youtube.com',
        ],
      },
      {
        '@type': 'WebSite',
        '@id': `${SITE_CONFIG.canonicalUrl}/#website`,
        url: SITE_CONFIG.canonicalUrl,
        name: SITE_CONFIG.name,
        description: SITE_CONFIG.description,
        inLanguage: 'en-IN',
        publisher: {
          '@id': `${SITE_CONFIG.canonicalUrl}/#organization`,
        },
      },
      {
        '@type': 'MobileApplication',
        '@id': `${SITE_CONFIG.canonicalUrl}/#app`,
        name: `${SITE_CONFIG.name} - Nashik Travel Guide`,
        operatingSystem: 'ANDROID',
        applicationCategory: 'TravelApplication',
        installUrl: SITE_CONFIG.playStoreUrl,
        downloadUrl: SITE_CONFIG.playStoreUrl,
        offers: {
          '@type': 'Offer',
          price: '0',
          priceCurrency: 'INR',
        },
        featureList: [
          'Offline Sahyadri trail maps and elevation markers',
          'Sacred Jyotirlinga and temple puja timings',
          'Sula and Gangapur wine tasting estate dossiers',
          'Deterministic multi-day itinerary generator',
          'One-tap GPS turn-by-turn navigation handoff',
        ],
        screenshot: [
          `${SITE_CONFIG.canonicalUrl}/images/screenshots/home.png`,
          `${SITE_CONFIG.canonicalUrl}/images/screenshots/explore.png`,
          `${SITE_CONFIG.canonicalUrl}/images/screenshots/ai-planner.png`,
          `${SITE_CONFIG.canonicalUrl}/images/screenshots/saved.png`,
          `${SITE_CONFIG.canonicalUrl}/images/screenshots/profile.png`,
        ],
        author: {
          '@id': `${SITE_CONFIG.canonicalUrl}/#organization`,
        },
        publisher: {
          '@id': `${SITE_CONFIG.canonicalUrl}/#organization`,
        },
      },
    ],
  };

  return (
    <html lang="en" className={`${bricolage.variable} ${newsreader.variable}`} suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: safeJsonLd(structuredData),
          }}
        />
      </head>
      <body className="bg-white font-sans text-on-surface antialiased min-h-screen w-full overflow-x-hidden p-0 m-0">
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-deep-violet focus:text-white focus:rounded-full text-xs font-bold"
        >
          Skip to content
        </a>
        <div className="w-full min-h-screen">
          {children}
        </div>
      </body>
    </html>
  );
}
