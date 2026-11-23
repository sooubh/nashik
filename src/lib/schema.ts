import { SITE_CONFIG } from '@/config/site';
import { Place, FAQItem, Guide, BlogPost, Locale } from '@/types/content';

/**
 * Generates Schema.org JSON-LD for a TouristAttraction entity.
 * Meets Google Search and GEO (AI Citation Engine) requirements.
 */
export function generateTouristAttractionSchema(place: Place, locale: Locale = 'en') {
  const isMr = locale === 'mr';
  const isHi = locale === 'hi';

  const name = isMr && place.localized?.mr?.title
    ? place.localized.mr.title
    : isHi && place.localized?.hi?.title
    ? place.localized.hi.title
    : place.title;

  const description = isMr && place.localized?.mr?.directAnswer
    ? place.localized.mr.directAnswer
    : isHi && place.localized?.hi?.directAnswer
    ? place.localized.hi.directAnswer
    : place.directAnswer || place.excerpt;

  const urlPrefix = locale === 'en' ? '' : `/${locale}`;
  const canonicalUrl = `${SITE_CONFIG.canonicalUrl}${urlPrefix}/places/${place.slug}`;
  const imageUrl = place.heroImage.startsWith('http')
    ? place.heroImage
    : `${SITE_CONFIG.canonicalUrl}${place.heroImage}`;

  return {
    '@context': 'https://schema.org',
    '@type': 'TouristAttraction',
    '@id': `${canonicalUrl}#attraction`,
    name,
    alternateName: [place.localName.mr, place.localName.hi].filter(Boolean),
    description,
    url: canonicalUrl,
    image: [imageUrl],
    geo: {
      '@type': 'GeoCoordinates',
      latitude: place.coordinates.latitude,
      longitude: place.coordinates.longitude,
    },
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Nashik',
      addressRegion: 'Maharashtra',
      addressCountry: 'IN',
    },
    isAccessibleForFree: place.entryFee.isFree,
    publicAccess: true,
    maximumAttendeeCapacity: undefined,
    touristType: [place.category],
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        opens: place.timings.open,
        closes: place.timings.close,
        dayOfWeek: [
          'https://schema.org/Monday',
          'https://schema.org/Tuesday',
          'https://schema.org/Wednesday',
          'https://schema.org/Thursday',
          'https://schema.org/Friday',
          'https://schema.org/Saturday',
          'https://schema.org/Sunday',
        ],
      },
    ],
    offers: {
      '@type': 'Offer',
      price: place.entryFee.isFree ? '0' : place.entryFee.general.replace(/[^0-9]/g, '') || '0',
      priceCurrency: 'INR',
      description: place.entryFee.description,
    },
  };
}

/**
 * Generates Schema.org JSON-LD for Nashik as a overarching TouristDestination.
 */
export function generateTouristDestinationSchema(locale: Locale = 'en') {
  const url = locale === 'en' ? SITE_CONFIG.canonicalUrl : `${SITE_CONFIG.canonicalUrl}/${locale}`;

  return {
    '@context': 'https://schema.org',
    '@type': 'TouristDestination',
    '@id': `${url}#destination`,
    name: 'Nashik',
    alternateName: ['नाशिक', 'Nasik'],
    description:
      'Historic Maharashtra district celebrated for Trimbakeshwar Jyotirlinga, sacred Panchavati ghats, Sahyadri mountain fortresses, and premier wine estates.',
    url,
    touristType: [
      'Pilgrimage Destination',
      'Wine Tourism',
      'Sahyadri Trekking',
      'Monsoon Waterfalls',
      'Heritage Circuit',
    ],
    containedInPlace: {
      '@type': 'AdministrativeArea',
      name: 'Maharashtra',
      containedInPlace: {
        '@type': 'Country',
        name: 'India',
      },
    },
  };
}

/**
 * Generates Schema.org JSON-LD for BreadcrumbList.
 */
export function generateBreadcrumbSchema(items: Array<{ name: string; url: string }>) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };
}

/**
 * Generates Schema.org JSON-LD for FAQPage.
 */
export function generateFAQSchema(faqs: FAQItem[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  };
}

/**
 * Generates Schema.org JSON-LD for an Article / Travel Guide.
 */
export function generateArticleSchema(
  guide: Guide | BlogPost,
  url: string,
  locale: Locale = 'en'
) {
  const isMr = locale === 'mr';
  const isHi = locale === 'hi';

  const title = isMr && 'localTitle' in guide && guide.localTitle?.mr
    ? guide.localTitle.mr
    : isHi && 'localTitle' in guide && guide.localTitle?.hi
    ? guide.localTitle.hi
    : guide.title;

  const description =
    'directAnswer' in guide && guide.directAnswer
      ? guide.directAnswer
      : 'excerpt' in guide
      ? guide.excerpt
      : guide.summary;

  const imageUrl = guide.heroImage.startsWith('http')
    ? guide.heroImage
    : `${SITE_CONFIG.canonicalUrl}${guide.heroImage}`;

  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    '@id': `${url}#article`,
    headline: title,
    description,
    url,
    image: [imageUrl],
    author: {
      '@type': 'Organization',
      name: SITE_CONFIG.name,
      url: SITE_CONFIG.canonicalUrl,
    },
    publisher: {
      '@type': 'Organization',
      name: SITE_CONFIG.name,
      logo: {
        '@type': 'ImageObject',
        url: `${SITE_CONFIG.canonicalUrl}/images/branding/logo.png`,
      },
    },
    inLanguage: locale === 'mr' ? 'mr-IN' : locale === 'hi' ? 'hi-IN' : 'en-IN',
  };
}

/**
 * Generates Schema.org JSON-LD for Trivio MobileApplication entity.
 */
export function generateMobileApplicationSchema() {
  return {
    '@context': 'https://schema.org',
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
      '@type': 'Organization',
      name: SITE_CONFIG.name,
      url: SITE_CONFIG.canonicalUrl,
    },
    publisher: {
      '@type': 'Organization',
      name: SITE_CONFIG.name,
      url: SITE_CONFIG.canonicalUrl,
    },
  };
}
