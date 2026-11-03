import React from 'react';
import { SiteNav } from '@/components/SiteNav';
import { SiteFooter } from '@/components/SiteFooter';
import { HeroSection } from '@/components/landing/HeroSection';
import { DestinationGallery } from '@/components/landing/DestinationGallery';
import { DiscoverExperiences } from '@/components/landing/DiscoverExperiences';
import { AppShowcase } from '@/components/landing/AppShowcase';
import { LocalAdvantage } from '@/components/landing/LocalAdvantage';
import { DownloadCta } from '@/components/landing/DownloadCta';
import { SITE_CONFIG } from '@/config/site';
import { NASHIK_REAL_PLACES } from '@/data/nashikPlaces';

export default function HomePage() {
  const spotsSchema = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: 'Featured Nashik destinations in ' + SITE_CONFIG.name,
    description: 'Temples, vineyards, Sahyadri trails and nature spots around Nashik.',
    itemListElement: NASHIK_REAL_PLACES.map((place, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      item: {
        '@type': 'TouristAttraction',
        name: place.name,
        description: place.highlight,
        address: {
          '@type': 'PostalAddress',
          addressLocality: place.locationArea,
          addressRegion: 'Maharashtra',
          addressCountry: 'IN',
        },
      },
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(spotsSchema) }}
      />
      <SiteNav />
      <main id="main-content">
        <HeroSection />
        <DestinationGallery />
        <DiscoverExperiences />
        <AppShowcase />
        <LocalAdvantage />
        <DownloadCta />
      </main>
      <SiteFooter />
    </>
  );
}
