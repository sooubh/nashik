import React from 'react';
import { TrivioHero } from '@/components/trivio/TrivioHero';
import { TrivioJourney } from '@/components/trivio/TrivioJourney';
import { TrivioSpots } from '@/components/trivio/TrivioSpots';
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
        name: 'What is Trivio and how does it work in Nashik?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Trivio is a curated travel and community discovery app built for Nashik, Maharashtra. It connects travelers and locals with hand-curated quiet trails, riverbank ghats, viewpoints, community circles, and one-tap GPS navigation.',
        },
      },
      {
        '@type': 'Question',
        name: 'How does turn-by-turn navigation work in Trivio?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Trivio provides verified geographic coordinates and one-tap handoff to your favorite map application (such as Google Maps) so you can pocket your phone and explore the outdoors distraction-free.',
        },
      },
      {
        '@type': 'Question',
        name: 'What spots can I explore in Nashik today?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'You can discover over 50 verified landmarks in Nashik including Panchavati river ghats, Trimbakeshwar Jyotirlinga, Sula Vineyards rolling trails, and Pandavleni rock-cut caves.',
        },
      },
      {
        '@type': 'Question',
        name: 'Is Trivio free on Android?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes, Trivio is 100% free to download on Google Play without subscription fees or paywalled spot guides.',
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
        <TrivioFounderNote />
        <TrivioCta />
      </main>
      <TrivioFooter />
    </>
  );
}
