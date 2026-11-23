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
    ? `${REGIONAL_CITIES[params.category].title.en} Tourism Guide`
    : `${CATEGORIES_DATA[params.category as Category].title.en} Nashik`;

  const description = isCity
    ? REGIONAL_CITIES[params.category].description.en
    : CATEGORIES_DATA[params.category as Category].description.en;

  const heroImage = isCity
    ? REGIONAL_CITIES[params.category].heroImage
    : CATEGORIES_DATA[params.category as Category].heroImage;

  return constructMetadata({
    title,
    description,
    path: `/destinations/${params.category}`,
    ogType: 'website',
    ogImage: heroImage,
    locale: 'en',
  });
}

export default function DestinationPage({ params }: PageProps) {
  return <CategoryHubView slug={params.category} locale="en" />;
}
