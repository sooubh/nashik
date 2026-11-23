import { Metadata } from 'next';
import { GUIDES_DATA } from '@/data/guidesData';
import { GuideDetailView } from '@/components/views/GuideDetailView';
import { SITE_CONFIG } from '@/config/site';

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

  const guideTitle = guide.localTitle?.mr || guide.title;
  const title = `${guideTitle} · नाशिक प्रवास मार्गदर्शिका`;
  const description = guide.directAnswer || guide.excerpt;
  const canonical = `/mr/guides/${guide.slug}`;

  return {
    title,
    description,
    alternates: {
      canonical,
      languages: {
        'en': `/guides/${guide.slug}`,
        'mr': `/mr/guides/${guide.slug}`,
        'hi': `/hi/guides/${guide.slug}`,
        'x-default': `/guides/${guide.slug}`,
      },
    },
    openGraph: {
      title,
      description,
      url: `${SITE_CONFIG.canonicalUrl}${canonical}`,
      images: [guide.heroImage],
      type: 'article',
      locale: 'mr_IN',
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [guide.heroImage],
    },
  };
}

export default function GuideMarathiPage({ params }: PageProps) {
  return <GuideDetailView slug={params.slug} locale="mr" />;
}
