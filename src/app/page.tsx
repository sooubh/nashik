import React from 'react';
import { SiteNav } from '@/components/SiteNav';
import { SiteFooter } from '@/components/SiteFooter';
import { HeroSection } from '@/components/landing/HeroSection';
import { PopularToursSection } from '@/components/landing/PopularToursSection';
import { TourPackagesSection } from '@/components/landing/TourPackagesSection';
import { DestinationGallery } from '@/components/landing/DestinationGallery';
import { PlaceIntelligence } from '@/components/landing/PlaceIntelligence';
import { AppShowcase } from '@/components/landing/AppShowcase';
import { LocalAdvantage } from '@/components/landing/LocalAdvantage';
import { AppFaq } from '@/components/landing/AppFaq';
import { DownloadCta } from '@/components/landing/DownloadCta';
import { SITE_CONFIG } from '@/config/site';

export default function HomePage() {
  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: `Is ${SITE_CONFIG.name} free to download and use on Android?`,
        acceptedAnswer: {
          '@type': 'Answer',
          text: `Yes. ${SITE_CONFIG.name} is 100% free to download on Android via Google Play. You get full access to all destination guides, category filters, offline caching, and itinerary planning with zero surprise paywalls.`,
        },
      },
      {
        '@type': 'Question',
        name: `How does ${SITE_CONFIG.name} differ from generic chatbots or standard map apps?`,
        acceptedAnswer: {
          '@type': 'Answer',
          text: `${SITE_CONFIG.name} uses verified local entries that verify opening hours, check aarti closures, factor in real road transit times, and sequence stops with zero backtracking.`,
        },
      },
      {
        '@type': 'Question',
        name: 'Does the app work if cellular reception drops in Sahyadri valleys?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: `Yes. ${SITE_CONFIG.name} is built local-first for the realities of the Western Ghats. Saved wishlist boards and destination guides are cached on-device in Hive NoSQL. When cellular signal drops at fort summits or in rural valleys, core data and coordinates remain accessible without network errors.`,
        },
      },
      {
        '@type': 'Question',
        name: 'Which transit arrival hubs can I select for multi-day itineraries?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'You can choose your exact point of arrival: Nashik Road Railway Station (main rail terminus), Ozar Airport (regional flight hub), or Central Bus Stand (CBS / Thakkar Bazaar). The itinerary sequences your stops geographically from that starting hub.',
        },
      },
      {
        '@type': 'Question',
        name: 'How does turn-by-turn road navigation work?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: `${SITE_CONFIG.name} displays point-to-point geographic distances for planning and provides a direct one-tap button to push exact GPS coordinates into your favorite map app (such as Google Maps) for live directions, road traffic, and navigation.`,
        },
      },
      {
        '@type': 'Question',
        name: 'Are temple dress codes and visiting guidelines included?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes. Heritage and pilgrimage sites like Trimbakeshwar Jyotirlinga and Kalaram Mandir provide specific guidance on expected attire and optimal morning hours to avoid long queues.',
        },
      },
    ],
  };

  const spotsSchema = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: `Featured Nashik Exploration Spots in ${SITE_CONFIG.name}`,
    description: 'Hand-curated trails, sacred ghats, hill overlooks, and vineyards in Nashik.',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        item: {
          '@type': 'TouristAttraction',
          name: 'Panchavati & Ramkund',
          description: 'Historic river ghats and Godavari temples.',
          address: {
            '@type': 'PostalAddress',
            addressLocality: 'Nashik',
            addressRegion: 'Maharashtra',
            addressCountry: 'IN',
          },
        },
      },
      {
        '@type': 'ListItem',
        position: 2,
        item: {
          '@type': 'TouristAttraction',
          name: 'Trimbakeshwar Shiva Temple',
          description: 'Sacred Jyotirlinga shrine tucked beneath Brahmagiri peaks.',
          address: {
            '@type': 'PostalAddress',
            addressLocality: 'Trimbak',
            addressRegion: 'Maharashtra',
            addressCountry: 'IN',
          },
        },
      },
      {
        '@type': 'ListItem',
        position: 3,
        item: {
          '@type': 'TouristAttraction',
          name: 'Sula Vineyards & Estate',
          description: 'Rolling green vine estates, tasting rooms, and barrel cellars in Gangapur basin.',
          address: {
            '@type': 'PostalAddress',
            addressLocality: 'Govardhan, Nashik',
            addressRegion: 'Maharashtra',
            addressCountry: 'IN',
          },
        },
      },
      {
        '@type': 'ListItem',
        position: 4,
        item: {
          '@type': 'TouristAttraction',
          name: 'Harihar Fort',
          description: 'Historic hill fort featuring iconic 80-degree rock-cut steps.',
          address: {
            '@type': 'PostalAddress',
            addressLocality: 'Harshewadi, Trimbak',
            addressRegion: 'Maharashtra',
            addressCountry: 'IN',
          },
        },
      },
      {
        '@type': 'ListItem',
        position: 5,
        item: {
          '@type': 'TouristAttraction',
          name: 'Pandavleni Caves',
          description: '2nd-century BCE rock-cut Buddhist caves and hill overlook.',
          address: {
            '@type': 'PostalAddress',
            addressLocality: 'Nashik',
            addressRegion: 'Maharashtra',
            addressCountry: 'IN',
          },
        },
      },
      {
        '@type': 'ListItem',
        position: 6,
        item: {
          '@type': 'TouristAttraction',
          name: 'Someshwar Waterfall',
          description: 'Scenic monsoon cascade along the holy Godavari river basin.',
          address: {
            '@type': 'PostalAddress',
            addressLocality: 'Someshwar, Nashik',
            addressRegion: 'Maharashtra',
            addressCountry: 'IN',
          },
        },
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(spotsSchema) }}
      />
      <SiteNav />
      <main id="main-content">
        {/* Pixel-Perfect Reference Hero Section matching media_1793715148625_8d55c47a.jpg */}
        <HeroSection />

        {/* Pixel-Perfect Section 1: Discover Our Most Popular Tours matching media_1793715148150_afc46a87.jpg */}
        <PopularToursSection />

        {/* Section 2: Curated Tour Packages matching reference specification */}
        <TourPackagesSection />

        {/* Authentic Nashik Field Intelligence & Gazetteer */}
        <PlaceIntelligence />

        {/* Authentic Android App Showcase with Real Device Frames */}
        <AppShowcase />

        {/* Destination Gallery Reel */}
        <DestinationGallery />

        {/* Local Advantage Comparison */}
        <LocalAdvantage />

        {/* App FAQ */}
        <AppFaq />

        {/* Conversion Download CTA */}
        <DownloadCta />
      </main>
      <SiteFooter />
    </>
  );
}
