import React from 'react';
import { Hero } from '@/components/Hero';
import { Benefits } from '@/components/Benefits';
import { PlacesExplorer } from '@/components/PlacesExplorer';
import { ScreenshotStrip } from '@/components/ScreenshotStrip';
import { TravelFaq } from '@/components/TravelFaq';
import { DownloadCta } from '@/components/DownloadCta';
import { NASHIK_REAL_PLACES } from '@/data/nashikPlaces';

export default function HomePage() {
  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'When is the best season to explore Nashik?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'October through March is the peak travel window. The weather is cool and crisp (12°C to 28°C), ideal for exploring Sahyadri forts like Harihar and Anjaneri, and late January through March is the active grape harvest and wine-crush season at Sula and York. For lush landscapes and cascading waterfalls like Someshwar, the monsoon months of July to September are spectacular.',
        },
      },
      {
        '@type': 'Question',
        name: 'Does the mobile app work if cell reception drops?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes. NashikExplore is built with mobile field realities in mind. Your saved wishlist boards and previously viewed spot dossiers are stored directly in your phone’s local cache. If network drops while you are trekking or driving through rural ghat passes, the app uses a deterministic offline trip generator rather than failing with network errors.',
        },
      },
      {
        '@type': 'Question',
        name: 'Which transit hubs can I use as itinerary starting points?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'The multi-day itinerary builder lets you select your actual point of arrival: Nashik Road Railway Station (main rail terminus), Ozar Airport (direct flights from regional centers), or Central Bus Stand (CBS / Thakkar Bazaar). Itineraries sequence your morning and afternoon stops to minimize backtracking.',
        },
      },
      {
        '@type': 'Question',
        name: 'How does navigation between destinations work?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'The app displays approximate geographic distances to help you plan your day, and provides a direct one-tap button to open the exact coordinates in Google Maps for live road directions, live traffic conditions, and turn-by-turn navigation.',
        },
      },
      {
        '@type': 'Question',
        name: 'Are temple dress codes and visiting guidelines included?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes. Significant heritage and pilgrimage sites such as Trimbakeshwar Jyotirlinga and Kalaram Temple Mandir include practical notes regarding expected attire (such as traditional clothing requirements for inner sanctum puja access) and recommended morning hours to minimize queue times.',
        },
      },
      {
        '@type': 'Question',
        name: 'Is NashikExplore free to download and use?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'NashikExplore is free to download on Google Play. It provides full access to the destination directory, category filters, and itinerary planner. There are no surprise paywalls for essential travel information.',
        },
      },
    ],
  };

  const placesListSchema = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: 'Curated Landmarks & Destinations in Nashik',
    description:
      'Authentic field guide to vineyards, historic forts, ancient temples, and waterfalls across Nashik, Maharashtra.',
    numberOfItems: NASHIK_REAL_PLACES.length,
    itemListElement: NASHIK_REAL_PLACES.map((place, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      item: {
        '@type': 'TouristAttraction',
        name: place.name,
        alternateName: place.marathiName,
        description: place.highlight,
        url: 'https://nashik.sooubh.me/#places-preview',
        image: `https://nashik.sooubh.me${place.image}`,
        address: {
          '@type': 'PostalAddress',
          addressLocality: place.locationArea,
          addressRegion: 'Maharashtra',
          addressCountry: 'IN',
        },
        geo: {
          '@type': 'GeoCoordinates',
          latitude: place.coordinates.latitude,
          longitude: place.coordinates.longitude,
        },
        hasMap: place.googleMapsUrl,
        touristType: place.categoryLabel,
      },
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(placesListSchema) }}
      />
      <Hero />
      <Benefits />
      <PlacesExplorer />
      <ScreenshotStrip />
      <TravelFaq />
      <DownloadCta />
    </>
  );
}
