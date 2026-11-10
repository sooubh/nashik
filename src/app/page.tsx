import React from 'react';
import { SiteNav } from '@/components/SiteNav';
import { SiteFooter } from '@/components/SiteFooter';
import { HeroSection } from '@/components/landing/HeroSection';
import { DestinationGallery } from '@/components/landing/DestinationGallery';
import { PlaceIntelligence } from '@/components/landing/PlaceIntelligence';
import { DiscoverExperiences } from '@/components/landing/DiscoverExperiences';
import { AppShowcase } from '@/components/landing/AppShowcase';
import { LocalAdvantage } from '@/components/landing/LocalAdvantage';
import { AppFaq } from '@/components/landing/AppFaq';
import { DownloadCta } from '@/components/landing/DownloadCta';
import { NASHIK_REAL_PLACES } from '@/data/nashikPlaces';
import { FAQ_ITEMS } from '@/data/faqData';
import { safeJsonLd } from '@/lib/utils';

export default function HomePage() {
  const pageSchema = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'ItemList',
        name: 'Places to visit in Nashik, Maharashtra',
        description: 'A curated set of Nashik-area temples, heritage sites, forts, vineyards and nature attractions featured in the Trivio travel guide.',
        itemListElement: NASHIK_REAL_PLACES.map((place, index) => ({
          '@type': 'ListItem',
          position: index + 1,
          item: {
            '@type': 'TouristAttraction',
            name: place.name,
            alternateName: place.marathiName,
            description: place.highlight,
            address: {
              '@type': 'PostalAddress',
              addressLocality: place.locationArea,
              addressRegion: 'Maharashtra',
              addressCountry: 'IN',
            },
          },
        })),
      },
      {
        '@type': 'FAQPage',
        mainEntity: FAQ_ITEMS.map((item) => ({
          '@type': 'Question',
          name: item.question,
          acceptedAnswer: {
            '@type': 'Answer',
            text: item.answer,
          },
        })),
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: safeJsonLd(pageSchema),
        }}
      />
      <SiteNav />
      <main id="main-content">
        <HeroSection />
        <DestinationGallery />
        <PlaceIntelligence />
        <DiscoverExperiences />
        <AppShowcase />
        <LocalAdvantage />
        <AppFaq />
        <DownloadCta />
      </main>
      <SiteFooter />
    </>
  );
}
