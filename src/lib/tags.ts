import { DESTINATIONS_DATA } from '@/data/destinationsData';
import { GUIDES_DATA } from '@/data/guidesData';
import { BLOG_POSTS_DATA } from '@/data/blogData';
import { Place, Guide, BlogPost } from '@/types/content';

export interface TagData {
  slug: string;
  name: string;
  description: string;
  destinations: Place[];
  guides: Guide[];
  blogPosts: BlogPost[];
  totalCount: number;
  isIndexed: boolean; // Section 10 rule: tags with 3+ posts are indexed, else noindex, follow
}

/**
 * Normalizes a raw tag string into a clean, URL-safe slug.
 * e.g. "Wine Tasting" -> "wine-tasting", "80° Rock Steps" -> "80-rock-steps"
 */
export function normalizeTagSlug(rawTag: string): string {
  if (!rawTag) return '';
  return rawTag
    .toLowerCase()
    .trim()
    .replace(/['’"]/g, '')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '');
}

/**
 * Editorial title and description dictionary for high-value travel themes.
 */
const CURATED_TAG_META: Record<string, { name: string; description: string }> = {
  jyotirlinga: {
    name: 'Jyotirlinga',
    description:
      'Explore sacred Jyotirlinga shrines in Nashik and Trimbak, including ancient black-basalt architecture, morning and evening darshan timings, ₹200 VIP pass rules, and pilgrimage rituals verified for 2026.',
  },
  trek: {
    name: 'Trek',
    description:
      'Complete trekking guides to Nashik\'s dramatic Sahyadri forts, vertical rock-cut stairs, panoramic summit plateaus, trail difficulty ratings, and safety precautions.',
  },
  waterfall: {
    name: 'Waterfall',
    description:
      'Discover seasonal monsoon waterfalls around Nashik and the Western Ghats, including scenic gorge lookouts, plunge pools, safety rules, and transit directions.',
  },
  vineyard: {
    name: 'Vineyard',
    description:
      'Nashik\'s premier wine estates, tasting room etiquette, barrel cellar tours, grape harvest season schedules, and boutique lakeside vineyard resorts.',
  },
  heritage: {
    name: 'Heritage',
    description:
      'Historical monuments, ancient rock-cut caves, Maratha forts, sacred Godavari bathing ghats, and heritage food trails across Old Nashik.',
  },
  pilgrimage: {
    name: 'Pilgrimage',
    description:
      'Sacred temple circuits, Shaktipeeth shrines, Godavari holy snan rituals, and Kumbh Mela pilgrimage logistics across Nashik and Trimbakeshwar.',
  },
  food: {
    name: 'Food',
    description:
      'Authentic Nashik food trails, legendary Chulivarchi wood-fired misal, black gravy kala rassa, traditional sweet shops, and local culinary culture.',
  },
  adventure: {
    name: 'Adventure',
    description:
      'Thrill-seeking experiences in Nashik: rock-cut fort ascents, waterfall rappelling in Igatpuri, monsoon canyon trails, and water sports on Gangapur backwaters.',
  },
  monsoon: {
    name: 'Monsoon',
    description:
      'Monsoon travel itineraries, roaring Western Ghats cascades, emerald plateau hikes, reverse waterfalls, and Sahyadri rainy season safety advice.',
  },
  panchavati: {
    name: 'Panchavati',
    description:
      'Sacred Ramayana landmarks, black-stone Kalaram Temple, Sita Gufa cave, Ramkund holy bathing tank, and evening Godavari aarti ceremonies.',
  },
  ramkund: {
    name: 'Ramkund',
    description:
      'The sacred central bathing ghat of Nashik on the Godavari River, epicentre of Simhastha Kumbh Mela, daily twilight aarti, and asthi visarjan rituals.',
  },
  trimbak: {
    name: 'Trimbak',
    description:
      'Sacred town at the base of Brahmagiri Mountain, home to Shri Trimbakeshwar Jyotirlinga, Kushavarta Kund, and wild mountain trails.',
  },
  'wine-tasting': {
    name: 'Wine Tasting',
    description:
      'Curated wine tasting room flights, sommelier cellar tours, cheese pairings, and vineyard hopping itineraries across the Gangapur and Dindori wine belts.',
  },
  'road-trip': {
    name: 'Road Trip',
    description:
      'Verified driving routes, toll plazas, expressway interchanges, and scenic weekend road trip itineraries connecting Mumbai and Pune to Nashik.',
  },
  transit: {
    name: 'Transit',
    description:
      'Public transport guides, Citilinc local bus schedules, MSRTC Shivshahi connections, Vande Bharat train routes, and station taxi fares.',
  },
};

/**
 * Mapping of primary tags for guides based on content topic.
 */
const GUIDE_TAGS_MAP: Record<string, string[]> = {
  'trimbakeshwar-temple-darshan-guide': ['Jyotirlinga', 'Pilgrimage', 'Heritage', 'Trimbak'],
  'sula-vineyards-tour-tasting-complete-guide': ['Vineyard', 'Wine Tasting', 'Resort'],
  'harihar-fort-trek-complete-guide': ['Trek', 'Adventure', 'Sahyadri'],
  'panchavati-ramkund-sita-gufa-walking-tour': ['Heritage', 'Panchavati', 'Ramkund', 'Pilgrimage'],
  'best-misal-pav-in-nashik-ultimate-guide': ['Food', 'Food Tourism', 'Panchavati'],
  'dugarwadi-waterfall-trimbak-complete-guide': ['Waterfall', 'Monsoon', 'Adventure', 'Trimbak'],
  'mumbai-to-nashik-samruddhi-expressway-drive-guide': ['Road Trip', 'Transit', 'Mumbai to Nashik', 'Expressway'],
  'saptashrungi-devi-temple-vani-guide': ['Pilgrimage', 'Shaktipeeth', 'Heritage'],
  'kapaleshwar-temple-nandi-mystery': ['Heritage', 'Panchavati', 'Ramkund', 'Pilgrimage'],
  'saptashrungi-devi-vani-ropeway-guide': ['Pilgrimage', 'Logistics', 'Ropeway'],
  'nashik-wine-tasting-etiquette-guide': ['Vineyard', 'Wine Tasting', 'Food Tourism'],
  'monsoon-trekking-safety-rules-nashik': ['Trek', 'Monsoon', 'Safety', 'Adventure'],
  'gangapur-dam-boat-club-water-sports': ['Adventure', 'Family Picnic', 'Gangapur Dam'],
  'csmt-to-nashik-vande-bharat-guide': ['Transit', 'Budget Travel', 'Mumbai to Nashik'],
  'nashik-road-station-to-trimbakeshwar-transit': ['Transit', 'Trimbak', 'Citilinc Bus', 'Pilgrimage'],
};

/**
 * Smart supplemental theme tags for destinations to guarantee zero-orphan categorization.
 */
function getSupplementalDestinationTags(place: Place): string[] {
  const extra: string[] = [];

  // Theme category mapping
  if (place.category === 'vineyards' || ['sula-vineyards', 'york-winery', 'soma-wine-village', 'chandon', 'vallonne'].includes(place.slug)) {
    extra.push('Vineyard', 'Wine Tasting');
  }
  if (place.category === 'treks' || ['harihar-fort', 'anjaneri-hills', 'brahmagiri-hill', 'ramshej-fort', 'salher-fort'].includes(place.slug)) {
    extra.push('Trek', 'Sahyadri');
  }
  if (place.category === 'waterfalls' || ['dugarwadi-waterfall', 'someshwar-waterfall', 'vihigaon-waterfall', 'bhandardara'].includes(place.slug)) {
    extra.push('Waterfall', 'Monsoon');
  }
  if (['trimbakeshwar', 'muktidham'].includes(place.slug)) {
    extra.push('Jyotirlinga');
  }
  if (['kalaram-temple', 'kapaleshwar-temple', 'pandavleni-caves', 'ramshej-fort', 'salher-fort'].includes(place.slug)) {
    extra.push('Heritage');
  }
  if (place.category === 'food') {
    extra.push('Food');
  }
  if (place.category === 'spiritual') {
    extra.push('Pilgrimage');
  }

  return extra;
}

/**
 * Smart supplemental theme tags for blog itineraries.
 */
function getSupplementalBlogTags(post: BlogPost): string[] {
  const extra: string[] = [];

  if (post.slug === 'mumbai-to-nashik-weekend-itinerary') {
    extra.push('Vineyard', 'Pilgrimage', 'Road Trip');
  } else if (post.slug === 'pune-to-nashik-3-day-road-trip-plan') {
    extra.push('Trek', 'Vineyard', 'Road Trip');
  } else if (post.slug === 'budget-travel-guide-nashik-under-3000') {
    extra.push('Transit', 'Budget Travel');
  } else if (post.slug === 'kumbh-mela-nashik-2027-dates-guide') {
    extra.push('Jyotirlinga', 'Pilgrimage', 'Heritage', 'Ramkund');
  } else if (post.slug === 'places-to-visit-in-nashik-in-one-day') {
    extra.push('Heritage', 'Vineyard', 'Jyotirlinga');
  } else if (post.slug === 'pune-to-nashik-road-trip-guide-nh60' || post.slug === 'samruddhi-mahamarg-mumbai-nashik-drive-guide') {
    extra.push('Road Trip', 'Transit');
  } else if (post.slug === 'old-nashik-heritage-food-walk') {
    extra.push('Food', 'Heritage', 'Panchavati');
  } else if (post.slug === 'best-vineyard-resorts-in-nashik-for-couples') {
    extra.push('Vineyard');
  } else if (post.slug === 'godavari-aarti-ramkund-evening-guide') {
    extra.push('Heritage', 'Pilgrimage', 'Ramkund', 'Panchavati');
  } else if (post.slug === 'grape-harvest-season-guide-nashik') {
    extra.push('Vineyard', 'Wine Tasting');
  }

  return extra;
}

/**
 * Returns formatted title-case name for any tag slug.
 */
export function formatTagDisplayName(slug: string, originalTag?: string): string {
  if (CURATED_TAG_META[slug]) {
    return CURATED_TAG_META[slug].name;
  }
  if (originalTag && originalTag.trim()) {
    return originalTag.trim();
  }
  return slug
    .split('-')
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
}

/**
 * Aggregates and returns all unique tags across destinations, guides, and blog itineraries.
 */
export function getAllTags(): TagData[] {
  const tagMap = new Map<
    string,
    {
      slug: string;
      rawName: string;
      destinations: Map<string, Place>;
      guides: Map<string, Guide>;
      blogPosts: Map<string, BlogPost>;
    }
  >();

  function registerItem(
    tag: string,
    place?: Place,
    guide?: Guide,
    blogPost?: BlogPost
  ) {
    const slug = normalizeTagSlug(tag);
    if (!slug) return;

    if (!tagMap.has(slug)) {
      tagMap.set(slug, {
        slug,
        rawName: tag,
        destinations: new Map(),
        guides: new Map(),
        blogPosts: new Map(),
      });
    }

    const entry = tagMap.get(slug)!;
    if (place) entry.destinations.set(place.slug, place);
    if (guide) entry.guides.set(guide.slug, guide);
    if (blogPost) entry.blogPosts.set(blogPost.slug, blogPost);
  }

  // 1. Process Destinations
  for (const place of DESTINATIONS_DATA) {
    const allTags = [...(place.tags || []), ...getSupplementalDestinationTags(place)];
    for (const tag of allTags) {
      registerItem(tag, place, undefined, undefined);
    }
  }

  // 2. Process Guides
  for (const guide of GUIDES_DATA) {
    const mappedTags = GUIDE_TAGS_MAP[guide.slug] || [];
    const allTags = [...(guide.tags || []), ...mappedTags];
    for (const tag of allTags) {
      registerItem(tag, undefined, guide, undefined);
    }
  }

  // 3. Process Blog Posts
  for (const post of BLOG_POSTS_DATA) {
    const allTags = [...(post.tags || []), ...getSupplementalBlogTags(post)];
    for (const tag of allTags) {
      registerItem(tag, undefined, undefined, post);
    }
  }

  // Convert map to TagData array
  const result: TagData[] = [];
  tagMap.forEach((entry, slug) => {
    const destinations: Place[] = [];
    entry.destinations.forEach((p) => destinations.push(p));
    const guides: Guide[] = [];
    entry.guides.forEach((g) => guides.push(g));
    const blogPosts: BlogPost[] = [];
    entry.blogPosts.forEach((b) => blogPosts.push(b));

    const totalCount = destinations.length + guides.length + blogPosts.length;
    const isIndexed = totalCount >= 3;

    const curated = CURATED_TAG_META[slug];
    const name = curated ? curated.name : formatTagDisplayName(slug, entry.rawName);
    const description = curated
      ? curated.description
      : `Explore verified attractions, expert travel guides, and road trip itineraries in Nashik tagged under "${name}" with 2026 timings, fees, and local tips on Trivio.`;

    result.push({
      slug,
      name,
      description,
      destinations,
      guides,
      blogPosts,
      totalCount,
      isIndexed,
    });
  });

  // Sort: indexed tags first, then by totalCount descending, then alphabetical by name
  return result.sort((a, b) => {
    if (a.isIndexed !== b.isIndexed) {
      return a.isIndexed ? -1 : 1;
    }
    if (b.totalCount !== a.totalCount) {
      return b.totalCount - a.totalCount;
    }
    return a.name.localeCompare(b.name);
  });
}

/**
 * Returns a specific tag by slug, or undefined if not found.
 */
export function getTagBySlug(slug: string): TagData | undefined {
  const normalized = normalizeTagSlug(slug);
  return getAllTags().find((t) => t.slug === normalized);
}

/**
 * Returns only the indexed tags (>= 3 posts).
 */
export function getIndexedTags(): TagData[] {
  return getAllTags().filter((t) => t.isIndexed);
}

/**
 * Returns all tag slugs for static generation.
 */
export function getAllTagSlugs(): string[] {
  return getAllTags().map((t) => t.slug);
}

/**
 * Returns associated tag names for a specific guide slug.
 */
export function getTagsForGuide(slug: string): string[] {
  const guide = GUIDES_DATA.find((g) => g.slug === slug);
  const mapped = GUIDE_TAGS_MAP[slug] || [];
  const raw = guide?.tags || [];
  const set = new Set<string>();
  raw.forEach((t) => set.add(t));
  mapped.forEach((t) => set.add(t));
  return Array.from(set);
}
