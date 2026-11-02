import React from 'react';
import { TrivioHero } from '@/components/trivio/TrivioHero';
import { TrivioJourney } from '@/components/trivio/TrivioJourney';
import { TrivioSpots } from '@/components/trivio/TrivioSpots';
import { TrivioCategories } from '@/components/trivio/TrivioCategories';
import { TrivioComparison } from '@/components/trivio/TrivioComparison';
import { TrivioFeatures } from '@/components/trivio/TrivioFeatures';
import { TrivioPlannerTeaser } from '@/components/trivio/TrivioPlannerTeaser';
import { TrivioTestimonials } from '@/components/trivio/TrivioTestimonials';
import { TrivioFaq } from '@/components/trivio/TrivioFaq';
import { TrivioFounderNote } from '@/components/trivio/TrivioFounderNote';
import { TrivioCta } from '@/components/trivio/TrivioCta';
import { TrivioFooter } from '@/components/trivio/TrivioFooter';

export default function HomePage() {
  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'Is Trivio free to download and use on Android?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes. Trivio is 100% free to download on Android via Google Play. You get full access to all destination guides, category filters, offline caching, and itinerary planning with zero surprise paywalls.',
        },
      },
      {
        '@type': 'Question',
        name: 'How does Trivio differ from generic chatbots or standard map apps?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Generic AI tools and standard map apps frequently hallucinate places that are closed or pair spots on opposite ends of the city. Trivio uses a deterministic local clustering engine that verifies opening hours, checks aarti closures, factors in real road transit times, and sequences stops with zero backtracking.',
        },
      },
      {
        '@type': 'Question',
        name: 'Does Trivio work if cellular reception drops in Sahyadri valleys?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes. Trivio is built local-first for the realities of the Western Ghats. Your saved wishlist boards and destination guides are cached on-device. When cellular signal drops at fort summits or in rural valleys, all core data and coordinates remain accessible without network errors.',
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
          text: 'Trivio displays point-to-point geographic distances for planning, and provides a direct one-tap button to push exact GPS coordinates into your favorite map app (such as Google Maps) for live directions, road traffic, and navigation.',
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
    name: 'Featured Nashik Exploration Spots in Trivio',
    description: 'Hand-curated trails, sacred ghats, hill overlooks, and vineyards in Nashik.',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        item: {
          '@type': 'TouristAttraction',
          name: 'Panchavati',
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
          name: 'Trimbakeshwar',
          description: 'Sacred shrine tucked beneath Brahmagiri peaks.',
          address: {
            '@type': 'PostalAddress',
            addressLocality: 'Trimbak, Nashik',
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
          name: 'Sula Vineyards',
          description: 'Rolling green trails and tasting rooms.',
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
          name: 'Pandavleni',
          description: '2nd-century BCE rock-cut hill overlook.',
          address: {
            '@type': 'PostalAddress',
            addressLocality: 'Pathardi Phata, Nashik',
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
          name: 'Harihar Fort',
          description: 'Legendary 80-degree rock-cut steps chiseled into sheer rock walls.',
          address: {
            '@type': 'PostalAddress',
            addressLocality: 'Harshewadi, Nashik',
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
      <main>
        <TrivioHero />
        <TrivioJourney />
        <TrivioSpots />
        <TrivioCategories />
        <TrivioComparison />
        <TrivioFeatures />
        <TrivioPlannerTeaser />
        <TrivioTestimonials />
        <TrivioFaq />
        <TrivioFounderNote />
        <TrivioCta />
      </main>
      <TrivioFooter />
    </>
  );
}
