import { Metadata } from 'next';
import { ALL_CATEGORIES, CATEGORIES_DATA } from '@/data/categoriesData';
import { ALL_REGIONAL_CITIES, REGIONAL_CITIES } from '@/data/regionalCities';
import { CategoryHubView } from '@/components/views/CategoryHubView';
import { Category } from '@/types/content';
import { constructMetadata } from '@/lib/seo';

interface PageProps {
  params: {
    category: string;
  };
}

export const dynamicParams = false;

export async function generateStaticParams() {
  const categoryParams = ALL_CATEGORIES.map((category) => ({ category }));
  const cityParams = ALL_REGIONAL_CITIES.map((city) => ({ category: city }));
  return [...categoryParams, ...cityParams];
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const isCity = params.category in REGIONAL_CITIES;
  const isCat = params.category in CATEGORIES_DATA;

  if (!isCity && !isCat) return {};

  const title = isCity
    ? `${REGIONAL_CITIES[params.category].title.hi} पर्यटन`
    : `${CATEGORIES_DATA[params.category as Category].title.hi} नासिक`;

  const description = isCity
    ? REGIONAL_CITIES[params.category].description.hi
    : CATEGORIES_DATA[params.category as Category].description.hi;

  const heroImage = isCity
    ? REGIONAL_CITIES[params.category].heroImage
    : CATEGORIES_DATA[params.category as Category].heroImage;

  return constructMetadata({
    title,
    description,
    path: `/hi/destinations/${params.category}`,
    ogType: 'website',
    ogImage: heroImage,
    locale: 'hi',
  });
}

export default function DestinationHindiPage({ params }: PageProps) {
  return <CategoryHubView slug={params.category} locale="hi" />;
}
