/**
 * Content Schema and Contract for Nashik Travel Guide (Trivio)
 * Adheres strictly to NASHIK_SWARM_MASTER.md Section 3.5 & 12
 */

export type ContentCategory =
  | 'kumbh'
  | 'temples'
  | 'places'
  | 'food'
  | 'day-trips'
  | 'itineraries'
  | 'travel-tips'
  | 'stay'
  | 'guides'
  | 'tags'
  | 'trivio';

export type SupportedLocale = 'en' | 'mr' | 'hi';

export interface VerifiedSource {
  title: string;
  url: string;
  type: 'official' | 'government' | 'academic' | 'news';
  verifiedDate: string;
}

export interface ContentArticleSchema {
  title: string;
  description: string;
  slug: string;
  category: ContentCategory;
  tags: string[];
  date: string; // YYYY-MM-DD
  updated?: string; // YYYY-MM-DD
  author: string;
  heroImage: string;
  sources: VerifiedSource[];
  related: string[]; // Related slugs
  intent: string; // Target search intent / search query
  lastVerified: string; // YYYY-MM-DD
  lang: SupportedLocale;
  directAnswer?: string; // 40-50 word answer-first TL;DR for GEO / AI citations
  readingTimeMinutes?: number;
}
