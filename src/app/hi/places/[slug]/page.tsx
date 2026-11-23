import { Metadata } from 'next';
import { DESTINATIONS_DATA } from '@/data/destinationsData';
import { PlaceDetailView } from '@/components/views/PlaceDetailView';
import { SITE_CONFIG } from '@/config/site';

interface PageProps {
  params: {
    slug: string;
  };
}

export const dynamicParams = false;

export async function generateStaticParams() {
  return DESTINATIONS_DATA.map((place) => ({
    slug: place.slug,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const place = DESTINATIONS_DATA.find((p) => p.slug === params.slug);
  if (!place) return {};

  const placeTitle = place.localized?.hi?.title || place.localName.hi || place.title;
  const title = `${placeTitle} · दर्शन समय, प्रवेश शुल्क एवं नासिक यात्रा गाइड`;
  const description = place.localized?.hi?.directAnswer || place.directAnswer || place.excerpt;
  const canonical = `/hi/places/${place.slug}`;

  return {
    title,
    description,
    alternates: {
      canonical,
      languages: {
        'en': `/places/${place.slug}`,
        'mr': `/mr/places/${place.slug}`,
        'hi': `/hi/places/${place.slug}`,
        'x-default': `/places/${place.slug}`,
      },
    },
    openGraph: {
      title,
      description,
      url: `${SITE_CONFIG.canonicalUrl}${canonical}`,
      images: [place.heroImage],
      type: 'article',
      locale: 'hi_IN',
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [place.heroImage],
    },
  };
}

export default function PlaceHindiPage({ params }: PageProps) {
  return <PlaceDetailView slug={params.slug} locale="hi" />;
}
