import { Metadata } from 'next';
import { BLOG_POSTS_DATA } from '@/data/blogData';
import { BlogDetailView } from '@/components/views/BlogDetailView';
import { constructMetadata } from '@/lib/seo';

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

  return constructMetadata({
    title: post.title,
    description: post.summary || post.directAnswer,
    path: `/blog/${post.slug}`,
    ogType: 'article',
    ogImage: post.heroImage,
    publishedTime: `${post.publishedDate}T08:00:00+05:30`,
    modifiedTime: '2026-01-15T12:00:00+05:30',
    author: post.author,
    locale: 'en',
  });
}

export default function BlogPostPage({ params }: PageProps) {
  return <BlogDetailView slug={params.slug} locale="en" />;
}
