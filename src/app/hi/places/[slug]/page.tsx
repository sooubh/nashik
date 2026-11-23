import { Metadata } from 'next';
import { DESTINATIONS_DATA } from '@/data/destinationsData';
import { PlaceDetailView } from '@/components/views/PlaceDetailView';
import { constructMetadata } from '@/lib/seo';

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
  const desc = place.localized?.hi?.excerpt || place.excerpt;

  return constructMetadata({
    title: `${placeTitle} नासिक`,
    description: desc,
    path: `/hi/places/${place.slug}`,
    ogType: 'article',
    ogImage: place.heroImage,
    locale: 'hi',
  });
}

export default function PlaceHindiPage({ params }: PageProps) {
  return <PlaceDetailView slug={params.slug} locale="hi" />;
}
