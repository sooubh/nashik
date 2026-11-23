import { DESTINATIONS_DATA } from '@/data/destinationsData';
import { GUIDES_DATA } from '@/data/guidesData';
import { BLOG_POSTS_DATA } from '@/data/blogData';
import { CATEGORIES_DATA, ALL_CATEGORIES } from '@/data/categoriesData';
import { Place, Guide, BlogPost, Category, Locale, CategoryMetadata } from '@/types/content';

/**
 * Returns a localized copy of a Place entity
 */
export function localizePlace(place: Place, locale: Locale = 'en'): Place {
  if (locale === 'en' || !place.localized || !place.localized[locale]) {
    return place;
  }
  const overrides = place.localized[locale];
  return {
    ...place,
    title: overrides?.title ?? (locale === 'mr' ? place.localName.mr : locale === 'hi' ? place.localName.hi : place.title),
    excerpt: overrides?.excerpt ?? place.excerpt,
    directAnswer: overrides?.directAnswer ?? place.directAnswer,
    dressCode: overrides?.dressCode ?? place.dressCode,
  };
}

/**
 * Returns a localized copy of a Guide entity
 */
export function localizeGuide(guide: Guide, locale: Locale = 'en'): Guide {
  if (locale === 'en' || !guide.localized || !guide.localized[locale]) {
    return guide;
  }
  const overrides = guide.localized[locale];
  return {
    ...guide,
    title: overrides?.title ?? (guide.localTitle ? (locale === 'mr' ? guide.localTitle.mr : guide.localTitle.hi) : guide.title),
    excerpt: overrides?.excerpt ?? guide.excerpt,
    directAnswer: overrides?.directAnswer ?? guide.directAnswer,
  };
}

/**
 * Returns a localized copy of a BlogPost entity
 */
export function localizeBlogPost(post: BlogPost, locale: Locale = 'en'): BlogPost {
  if (locale === 'en' || !post.localized || !post.localized[locale]) {
    return post;
  }
  const overrides = post.localized[locale];
  return {
    ...post,
    title: overrides?.title ?? (post.localTitle ? (locale === 'mr' ? post.localTitle.mr : post.localTitle.hi) : post.title),
    summary: overrides?.summary ?? post.summary,
    directAnswer: overrides?.directAnswer ?? post.directAnswer,
  };
}

// ---------------- Places Accessors ---------------- //

export function getAllPlaces(locale: Locale = 'en'): Place[] {
  return DESTINATIONS_DATA.map((p) => localizePlace(p, locale));
}

export function getPlaceBySlug(slug: string, locale: Locale = 'en'): Place | undefined {
  const place = DESTINATIONS_DATA.find((p) => p.slug === slug);
  return place ? localizePlace(place, locale) : undefined;
}

export function getPlacesByCategory(category: Category, locale: Locale = 'en'): Place[] {
  return DESTINATIONS_DATA.filter((p) => p.category === category).map((p) => localizePlace(p, locale));
}

export function getFeaturedPlaces(locale: Locale = 'en'): Place[] {
  return DESTINATIONS_DATA.filter((p) => p.featured).map((p) => localizePlace(p, locale));
}

// ---------------- Guides Accessors ---------------- //

export function getAllGuides(locale: Locale = 'en'): Guide[] {
  return GUIDES_DATA.map((g) => localizeGuide(g, locale));
}

export function getGuideBySlug(slug: string, locale: Locale = 'en'): Guide | undefined {
  const guide = GUIDES_DATA.find((g) => g.slug === slug);
  return guide ? localizeGuide(guide, locale) : undefined;
}

export function getGuidesByCategory(category: Category, locale: Locale = 'en'): Guide[] {
  return GUIDES_DATA.filter((g) => g.category === category).map((g) => localizeGuide(g, locale));
}

// ---------------- Blog & Itinerary Accessors ---------------- //

export function getAllBlogs(locale: Locale = 'en'): BlogPost[] {
  return BLOG_POSTS_DATA.map((b) => localizeBlogPost(b, locale));
}

export function getBlogBySlug(slug: string, locale: Locale = 'en'): BlogPost | undefined {
  const blog = BLOG_POSTS_DATA.find((b) => b.slug === slug);
  return blog ? localizeBlogPost(blog, locale) : undefined;
}

// ---------------- Categories Accessors ---------------- //

export function getAllCategories(): Category[] {
  return ALL_CATEGORIES;
}

export function getCategoryMetadata(category: Category): CategoryMetadata | undefined {
  return CATEGORIES_DATA[category];
}

// ---------------- Static Params Generators ---------------- //

export function getAllPlaceSlugs(): string[] {
  return DESTINATIONS_DATA.map((p) => p.slug);
}

export function getAllGuideSlugs(): string[] {
  return GUIDES_DATA.map((g) => g.slug);
}

export function getAllBlogSlugs(): string[] {
  return BLOG_POSTS_DATA.map((b) => b.slug);
}

export function getAllCategorySlugs(): string[] {
  return ALL_CATEGORIES;
}
