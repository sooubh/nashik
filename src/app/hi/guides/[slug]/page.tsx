import { Metadata } from 'next';
import { GUIDES_DATA } from '@/data/guidesData';
import { GuideDetailView } from '@/components/views/GuideDetailView';
import { constructMetadata } from '@/lib/seo';

interface PageProps {
  params: {
    slug: string;
  };
}

export const dynamicParams = false;

export async function generateStaticParams() {
  return GUIDES_DATA.map((guide) => ({
    slug: guide.slug,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const guide = GUIDES_DATA.find((g) => g.slug === params.slug);
  if (!guide) return {};

  const guideTitle = guide.localTitle?.hi || guide.title;
  const desc = guide.excerpt || guide.directAnswer;

  return constructMetadata({
    title: `${guideTitle} नासिक`,
    description: desc,
    path: `/hi/guides/${guide.slug}`,
    ogType: 'article',
    ogImage: guide.heroImage,
    locale: 'hi',
  });
}

export default function GuideHindiPage({ params }: PageProps) {
  return <GuideDetailView slug={params.slug} locale="hi" />;
}
