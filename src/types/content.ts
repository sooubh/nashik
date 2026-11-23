export type Locale = 'en' | 'mr' | 'hi';

export type Category =
  | 'spiritual'
  | 'vineyards'
  | 'treks'
  | 'waterfalls'
  | 'food'
  | 'itineraries'
  | 'logistics'
  | 'festivals';

export interface LocalizedString {
  en: string;
  mr: string;
  hi: string;
}

export interface Coordinates {
  latitude: number;
  longitude: number;
}

export interface PlaceTimings {
  open: string;
  close: string;
  description: string;
  morningAartiOrSlot?: string;
  eveningAartiOrSlot?: string;
  closedDays?: string[];
}

export interface PlaceEntryFee {
  isFree: boolean;
  general: string;
  vipOrSpecial?: string;
  description: string;
}

export interface PlaceBestTime {
  season: string;
  idealHours: string;
  description: string;
}

export interface HowToReach {
  nearestRail: string;
  busTransit: string;
  roadDrive: string;
  distanceFromNashikCenterKm: number;
}

export interface FAQItem {
  question: string;
  answer: string;
}

export interface AppCtaHook {
  headline: string;
  subline: string;
  ctaText: string;
  utmCampaign: string;
}

export interface Place {
  slug: string;
  title: string;
  localName: {
    mr: string;
    hi: string;
  };
  category: Category;
  categoryLabel: LocalizedString;
  heroImage: string;
  galleryImages: string[];
  excerpt: string;
  directAnswer: string; // 40-50 words answer-first summary for GEO / search snippets
  coordinates: Coordinates;
  timings: PlaceTimings;
  entryFee: PlaceEntryFee;
  bestTimeToVisit: PlaceBestTime;
  howToReach: HowToReach;
  dressCode: string;
  safetyTips: string[];
  elevationMeters?: number;
  difficultyLevel?: 'Easy' | 'Moderate' | 'Difficult' | 'Strenuous';
  nearbyPlaceSlugs: string[];
  faqs: FAQItem[];
  appCtaHooks: AppCtaHook;
  tags: string[];
  googleMapsUrl: string;
  featured?: boolean;
  // Localized override content for mr and hi
  localized?: {
    mr?: Partial<Omit<Place, 'slug' | 'coordinates' | 'category' | 'localized'>>;
    hi?: Partial<Omit<Place, 'slug' | 'coordinates' | 'category' | 'localized'>>;
  };
}

export interface GuideSection {
  heading: string;
  content: string;
  highlights?: string[];
  tips?: string[];
}

export interface Guide {
  slug: string;
  title: string;
  localTitle?: {
    mr: string;
    hi: string;
  };
  category: Category;
  readingTime: string;
  lastUpdated: string;
  heroImage: string;
  excerpt: string;
  directAnswer: string;
  sections: GuideSection[];
  relatedPlaces: string[];
  faqs: FAQItem[];
  appCtaHooks: AppCtaHook;
  author: string;
  featured?: boolean;
  localized?: {
    mr?: Partial<Omit<Guide, 'slug' | 'category' | 'localized'>>;
    hi?: Partial<Omit<Guide, 'slug' | 'category' | 'localized'>>;
  };
}

export interface ItineraryDay {
  dayNumber: number;
  dayTitle: string;
  morningActivity: string;
  afternoonActivity: string;
  eveningActivity: string;
  recommendedMeals: string;
  travelTips: string;
}

export interface BlogPost {
  slug: string;
  title: string;
  localTitle?: {
    mr: string;
    hi: string;
  };
  category: Category;
  publishedDate: string;
  author: string;
  heroImage: string;
  summary: string;
  directAnswer: string;
  content: string; // Markdown or long-form HTML-compatible text
  itineraryDays?: ItineraryDay[];
  faqs: FAQItem[];
  appCtaHooks: AppCtaHook;
  tags: string[];
  localized?: {
    mr?: Partial<Omit<BlogPost, 'slug' | 'category' | 'localized'>>;
    hi?: Partial<Omit<BlogPost, 'slug' | 'category' | 'localized'>>;
  };
}

export interface CategoryMetadata {
  id: Category;
  title: LocalizedString;
  tagline: LocalizedString;
  description: LocalizedString;
  heroImage: string;
  iconName: string;
}
