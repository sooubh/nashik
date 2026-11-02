import type { Metadata, Viewport } from 'next';
import { Bricolage_Grotesque, Newsreader } from 'next/font/google';
import './globals.css';

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
  metadataBase: new URL('https://nashik.sooubh.me'),
  title: {
    default: 'Trivio — Places, events and people in one app',
    template: '%s | Trivio',
  },
  description:
    'Hand-curated quiet trails, riverbank ghats, and hidden viewpoints in Nashik. One tap transfers exact GPS coordinates to your favorite maps. Free on Android.',
  applicationName: 'Trivio',
  authors: [{ name: 'Trivio', url: 'https://nashik.sooubh.me' }],
  generator: 'Next.js',
  keywords: [
    'Trivio',
    'Nashik travel guide',
    'Nashik android app',
    'Trimbakeshwar Shiva Temple',
    'Sula Vineyards',
    'Harihar Fort',
    'Panchavati',
    'Pandavleni Caves',
    'Godavari River',
    'Maharashtra tourism',
  ],
  referrer: 'origin-when-cross-origin',
  creator: 'Trivio',
  publisher: 'Trivio',
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
    siteName: 'Trivio',
    title: 'Trivio — Places, events and people in one app',
    description:
      'Hand-curated quiet trails, riverbank ghats, and hidden viewpoints in Nashik. One tap transfers exact GPS coordinates to your favorite maps.',
    images: [
      {
        url: '/images/trivio/hero-meadow.jpg',
        width: 1200,
        height: 630,
        alt: 'Trivio — Places, events and people in one app',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Trivio — Places, events and people in one app',
    description:
      'Hand-curated quiet trails, riverbank ghats, and hidden viewpoints in Nashik. One tap transfers exact GPS coordinates to your favorite maps.',
    images: ['/images/trivio/hero-meadow.jpg'],
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
        '@type': 'MobileApplication',
        '@id': 'https://nashik.sooubh.me/#app',
        name: 'Trivio',
        alternateName: 'NashikExplore',
        operatingSystem: 'Android 8.0+',
        applicationCategory: 'TravelApplication',
        applicationSubCategory: 'Travel & Local',
        softwareVersion: '1.0.0',
        offers: {
          '@type': 'Offer',
          price: '0',
          priceCurrency: 'INR',
        },
        downloadUrl:
          'https://play.google.com/store/apps/details?id=com.nashikexplore.app',
        installUrl:
          'https://play.google.com/store/apps/details?id=com.nashikexplore.app',
        url: 'https://nashik.sooubh.me',
        image: 'https://nashik.sooubh.me/images/branding/trivio_launcher_icon.png',
        author: {
          '@type': 'Organization',
          name: 'Trivio',
          url: 'https://nashik.sooubh.me',
        },
        featureList: [
          'Hand-curated quiet trails and riverbank ghats',
          'One-tap GPS coordinate transfer to map apps',
          'Verified visiting timings and guidelines',
          'Offline cached wishlist boards',
          'Community circles and sunrise treks',
        ],
      },
      {
        '@type': 'WebSite',
        '@id': 'https://nashik.sooubh.me/#website',
        url: 'https://nashik.sooubh.me/',
        name: 'Trivio',
        alternateName: 'NashikExplore',
        description:
          'Official website and travel directory companion for Trivio.',
        publisher: {
          '@type': 'Organization',
          name: 'Trivio',
          url: 'https://nashik.sooubh.me',
        },
      },
    ],
  };

  return (
    <html lang="en" className={`${bricolage.variable} ${newsreader.variable}`} suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </head>
      <body className="bg-[#ECE7F2] font-sans text-on-surface antialiased p-2 sm:p-5 lg:p-8">
        <a
          href="#journey"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-deep-violet focus:text-white focus:rounded-full text-xs font-bold"
        >
          Skip to content
        </a>
        <div data-ui="true" className="max-w-[1360px] mx-auto bg-paper rounded-frame overflow-hidden border border-[#ded9e8]">
          {children}
        </div>
      </body>
    </html>
  );
}
