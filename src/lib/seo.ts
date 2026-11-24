import type { Metadata } from 'next';
import { SITE_CONFIG } from '@/config/site';
import { Locale } from '@/types/content';

export interface SeoMetadataOptions {
  title: string;
  description: string;
  path: string;
  ogType?: 'website' | 'article';
  ogImage?: string;
  ogImageAlt?: string;
  publishedTime?: string;
  modifiedTime?: string;
  author?: string;
  locale?: Locale;
  noindex?: boolean;
  follow?: boolean;
}

/**
 * Normalizes title string to strictly fit 50-60 characters where feasible.
 * Ensures brand suffix ' | Trivio' is appended without exceeding 60 characters.
 */
export function formatSeoTitle(rawTitle: string): string {
  const brand = ' | Trivio';
  const cleanTitle = rawTitle.replace(/\s*\|\s*Trivio/g, '').trim();

  // If already with brand fits 50-60
  const candidate = `${cleanTitle}${brand}`;
  if (candidate.length >= 50 && candidate.length <= 60) {
    return candidate;
  }

  if (candidate.length < 50) {
    // Expand with high-value keyword if too short
    const withKeyword = `${cleanTitle} · Nashik Guide${brand}`;
    if (withKeyword.length <= 60 && withKeyword.length >= 50) {
      return withKeyword;
    }
    const withCity = `${cleanTitle} Nashik${brand}`;
    if (withCity.length <= 60 && withCity.length >= 50) {
      return withCity;
    }
    return candidate.length > 60 ? candidate.slice(0, 60) : candidate;
  }

  // If too long (> 60), trim the base title
  const maxBaseLen = 60 - brand.length;
  const trimmed = cleanTitle.slice(0, maxBaseLen).trim().replace(/[\s·,:-]+$/, '');
  return `${trimmed}${brand}`;
}

/**
 * Normalizes meta description to strictly fit 140-160 characters.
 */
export function formatSeoDescription(rawDesc: string): string {
  const clean = rawDesc.replace(/\s+/g, ' ').trim();
  if (clean.length >= 140 && clean.length <= 160) {
    return clean;
  }

  if (clean.length > 160) {
    // Smart trim at last punctuation or space
    const sliced = clean.slice(0, 157);
    const lastSpace = sliced.lastIndexOf(' ');
    const boundary = lastSpace > 135 ? lastSpace : 157;
    return `${sliced.slice(0, boundary).trim()}...`;
  }

  // If shorter than 140, append verified local travel CTA
  const cta = ' Plan your visit with verified 2026 timings, entry fees, and transit with Trivio.';
  const combined = `${clean}${cta}`;
  if (combined.length <= 160 && combined.length >= 140) {
    return combined;
  }
  if (combined.length > 160) {
    return formatSeoDescription(combined);
  }
  // Fallback pad
  return `${clean} Complete Nashik tourism guide with darshan timings, ticket fees, route maps & tips.`.slice(0, 160);
}

/**
 * Reusable Next.js App Router Metadata Generator.
 * Generates absolute canonical URLs, strict OpenGraph, Twitter Cards,
 * and multi-language hreflang alternates without deprecated tags.
 */
export function constructMetadata({
  title,
  description,
  path,
  ogType = 'website',
  ogImage = '/images/destinations/sula-vineyards.webp',
  ogImageAlt,
  publishedTime,
  modifiedTime,
  author = SITE_CONFIG.name,
  locale = 'en',
  noindex = false,
  follow,
}: SeoMetadataOptions): Metadata {
  const cleanPath = path.startsWith('/') ? path : `/${path}`;
  const canonicalUrl = `${SITE_CONFIG.canonicalUrl}${cleanPath}`;
  const absoluteImageUrl = ogImage.startsWith('http')
    ? ogImage
    : `${SITE_CONFIG.canonicalUrl}${ogImage.startsWith('/') ? ogImage : `/${ogImage}`}`;

  // Ensure formatted title & description
  const formattedTitle = formatSeoTitle(title);
  const formattedDescription = formatSeoDescription(description);

  // Derive multilingual hreflang paths
  const baseSubpath = cleanPath.replace(/^\/(mr|hi)(\/|$)/, '/');
  const enUrl = `${SITE_CONFIG.canonicalUrl}${baseSubpath}`;
  const mrUrl = `${SITE_CONFIG.canonicalUrl}/mr${baseSubpath === '/' ? '' : baseSubpath}`;
  const hiUrl = `${SITE_CONFIG.canonicalUrl}/hi${baseSubpath === '/' ? '' : baseSubpath}`;

  const ogLocaleMap: Record<Locale, string> = {
    en: 'en_IN',
    mr: 'mr_IN',
    hi: 'hi_IN',
  };

  const metadata: Metadata = {
    title: formattedTitle,
    description: formattedDescription,
    alternates: {
      canonical: canonicalUrl,
      languages: {
        'en': enUrl,
        'mr': mrUrl,
        'hi': hiUrl,
        'x-default': enUrl,
      },
    },
    robots: {
      index: !noindex,
      follow: follow !== undefined ? follow : !noindex,
      'max-image-preview': 'large',
      'max-snippet': -1,
      'max-video-preview': -1,
      googleBot: {
        index: !noindex,
        follow: follow !== undefined ? follow : !noindex,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
    openGraph: {
      type: ogType,
      locale: ogLocaleMap[locale] || 'en_IN',
      url: canonicalUrl,
      siteName: SITE_CONFIG.name,
      title: formattedTitle,
      description: formattedDescription,
      images: [
        {
          url: absoluteImageUrl,
          width: 1200,
          height: 630,
          alt: ogImageAlt || formattedTitle,
        },
      ],
      ...(ogType === 'article'
        ? {
            publishedTime: publishedTime || '2026-01-15T08:00:00+05:30',
            modifiedTime: modifiedTime || new Date().toISOString(),
            authors: [author],
          }
        : {}),
    },
    twitter: {
      card: 'summary_large_image',
      title: formattedTitle,
      description: formattedDescription,
      images: [absoluteImageUrl],
      creator: '@sooubh',
    },
  };

  return metadata;
}
