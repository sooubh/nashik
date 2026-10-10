import type { Metadata, Viewport } from 'next';
import { DM_Sans } from 'next/font/google';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
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
    default: 'NashikExplore — Discover Places Around Nashik',
    template: '%s | NashikExplore',
  },
  description:
    'Discover Nashik attractions, browse place details, and plan your visit with NashikExplore. Get the app on Google Play.',
  applicationName: 'NashikExplore',
  authors: [{ name: 'NashikExplore' }],
  generator: 'Next.js',
  keywords: [
    'Nashik travel guide',
    'Nashik android app',
    'Trimbakeshwar',
    'Sula Vineyards',
    'Harihar Fort',
    'Nashik places to visit',
    'Nashik trip planner',
  ],
  referrer: 'origin-when-cross-origin',
  creator: 'NashikExplore',
  publisher: 'NashikExplore',
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
    siteName: 'NashikExplore',
    title: 'NashikExplore — Discover Places Around Nashik',
    description:
      'Discover Nashik attractions, browse place details, and plan your visit with NashikExplore.',
    images: [
      {
        url: '/images/app-horizontal-icon.png',
        width: 1200,
        height: 630,
        alt: 'NashikExplore Android App Preview',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'NashikExplore — Discover Places Around Nashik',
    description:
      'Discover Nashik attractions, browse place details, and plan your visit with NashikExplore.',
    images: ['/images/app-horizontal-icon.png'],
  },
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon.ico',
    apple: '/apple-touch-icon.png',
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
        name: 'NashikExplore',
        operatingSystem: 'Android 8.0+',
        applicationCategory: 'TravelApplication',
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
          'Category-based destination discovery',
          'Multi-day itinerary planning with transit hubs',
          'Custom saved places and wishlist boards',
          'Distance estimates and Google Maps navigation handoff',
          'Material 3 design with light and dark theme',
        ],
      },
      {
        '@type': 'WebSite',
        '@id': 'https://nashik.sooubh.me/#website',
        url: 'https://nashik.sooubh.me/',
        name: 'NashikExplore',
        description:
          'Official website and travel directory companion for NashikExplore.',
        publisher: {
          '@type': 'Organization',
          name: 'NashikExplore',
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
      </body>
    </html>
  );
}
