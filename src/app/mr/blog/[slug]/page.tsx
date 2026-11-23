import { Metadata } from 'next';
import { BLOG_POSTS_DATA } from '@/data/blogData';
import { BlogDetailView } from '@/components/views/BlogDetailView';
import { SITE_CONFIG } from '@/config/site';

interface PageProps {
  params: {
    slug: string;
  };
}

export const dynamicParams = false;

export async function generateStaticParams() {
  return BLOG_POSTS_DATA.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const post = BLOG_POSTS_DATA.find((b) => b.slug === params.slug);
  if (!post) return {};

  const postTitle = post.localTitle?.mr || post.title;
  const title = `${postTitle} · नाशिक प्रवास ब्लॉग व नियोजन`;
  const description = post.directAnswer || post.summary;
  const canonical = `/mr/blog/${post.slug}`;

  return {
    title,
    description,
    alternates: {
      canonical,
      languages: {
        'en': `/blog/${post.slug}`,
        'mr': `/mr/blog/${post.slug}`,
        'hi': `/hi/blog/${post.slug}`,
        'x-default': `/blog/${post.slug}`,
      },
    },
    openGraph: {
      title,
      description,
      url: `${SITE_CONFIG.canonicalUrl}${canonical}`,
      images: [post.heroImage],
      type: 'article',
      locale: 'mr_IN',
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [post.heroImage],
    },
  };
}

export default function BlogPostMarathiPage({ params }: PageProps) {
  return <BlogDetailView slug={params.slug} locale="mr" />;
}
