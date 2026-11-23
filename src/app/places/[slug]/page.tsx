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

  return constructMetadata({
    title: `${place.title} Nashik`,
    description: place.excerpt || place.directAnswer,
    path: `/places/${place.slug}`,
    ogType: 'article',
    ogImage: place.heroImage,
    locale: 'en',
  });
}

export default function PlacePage({ params }: PageProps) {
  return <PlaceDetailView slug={params.slug} locale="en" />;
}
