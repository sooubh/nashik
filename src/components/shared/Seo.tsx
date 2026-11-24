import React from 'react';
import Head from 'next/head';
import { SITE_CONFIG } from '@/config/site';

interface SeoProps {
  title: string;
  description: string;
  path: string;
  ogImage?: string;
  ogType?: 'website' | 'article';
  publishedTime?: string;
  modifiedTime?: string;
  author?: string;
  noindex?: boolean;
}

export const Seo: React.FC<SeoProps> = ({
  title,
  description,
  path,
  ogImage = SITE_CONFIG.defaultOgImage,
  ogType = 'website',
  publishedTime,
  modifiedTime,
  author = SITE_CONFIG.name,
  noindex = false,
}) => {
  const canonicalUrl = `${SITE_CONFIG.canonicalUrl}${path.startsWith('/') ? path : `/${path}`}`;
  const fullTitle = `${title} | ${SITE_CONFIG.name}`;

  return (
    <Head>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={canonicalUrl} />
      <meta
        name="robots"
        content={
          noindex
            ? 'noindex, follow'
            : 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1'
        }
      />
      <meta
        name="googlebot"
        content={
          noindex
            ? 'noindex, follow'
            : 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1'
        }
      />
      {/* Alternate hreflangs */}
      <link rel="alternate" hrefLang="en" href={canonicalUrl} />
      <link rel="alternate" hrefLang="mr" href={`${SITE_CONFIG.canonicalUrl}/mr${path}`} />
      <link rel="alternate" hrefLang="hi" href={`${SITE_CONFIG.canonicalUrl}/hi${path}`} />
      <link rel="alternate" hrefLang="x-default" href={canonicalUrl} />

      {/* Open Graph */}
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:site_name" content={SITE_CONFIG.name} />
      <meta property="og:type" content={ogType} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:image:alt" content={title} />
      {publishedTime && <meta property="article:published_time" content={publishedTime} />}
      {modifiedTime && <meta property="article:modified_time" content={modifiedTime} />}
      {author && <meta property="article:author" content={author} />}

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content="@sooubh" />
      <meta name="twitter:creator" content="@sooubh" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />
    </Head>
  );
};
