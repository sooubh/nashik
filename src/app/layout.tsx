import type { Metadata } from 'next';
import './globals.css';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { BackToTop } from '@/components/BackToTop';

export const metadata: Metadata = {
  metadataBase: new URL('https://nashikexplore.com'),
  title: {
    default: 'Nashik Travel Guide - Explore Nashik Like a Local',
    template: '%s | Nashik Travel Guide',
  },
  description:
    'Discover ancient temples, scenic Sahyadri waterfalls, Sula vineyards, and historic forts in Nashik with the official Nashik Travel Guide Android application. Get AI itineraries, real-time weather, and offline maps.',
  keywords: [
    'Nashik',
    'Nashik Travel Guide',
    'Trimbakeshwar Shiva Temple',
    'Sula Vineyards',
    'Harihar Fort',
    'Anjaneri Trek',
    'Dugarwadi Waterfall',
    'Someshwar',
    'Maharashtra Tourism',
    'AI Trip Planner',
    'Android Travel App',
  ],
  authors: [{ name: 'Nashik Travel Guide Team' }],
  creator: 'Nashik Travel Guide',
  publisher: 'Nashik Travel Guide Apps',
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
    title: 'Nashik Travel Guide - Explore Nashik Like a Local',
    description:
      'The premier travel companion for Nashik. Temples, Vineyards, Forts, AI Trip Planner, and Offline travel support.',
    images: [
      {
        url: '/images/app-horizontal-icon.png',
        width: 1200,
        height: 630,
        alt: 'Nashik Travel Guide App',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Nashik Travel Guide - Explore Nashik Like a Local',
    description:
      'The premier travel companion for Nashik. Temples, Vineyards, Forts, AI Trip Planner, and Offline travel support.',
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
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'MobileApplication',
    name: 'Nashik Travel Guide',
    operatingSystem: 'Android',
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
    },
    author: {
      '@type': 'Organization',
      name: 'Nashik Travel Guide Apps',
    },
    screenshot: [
      'https://nashikexplore.com/images/home.png',
      'https://nashikexplore.com/images/explore.png',
      'https://nashikexplore.com/images/ai-planner.png',
      'https://nashikexplore.com/images/saved.png',
      'https://nashikexplore.com/images/profile.png',
    ],
    softwareVersion: '1.0.0',
    downloadUrl: 'https://play.google.com/store/apps/details?id=com.nashikexplore.app',
  };

  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="bg-[#F8FAFC] dark:bg-slate-950 text-slate-900 dark:text-slate-100 antialiased min-h-screen flex flex-col justify-between selection:bg-brand-sky/30">
        <div className="ambient-glow ambient-glow-1" />
        <div className="ambient-glow ambient-glow-2" />
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
        <BackToTop />
      </body>
    </html>
  );
}
