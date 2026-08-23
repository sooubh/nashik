export interface FeatureItem {
  id: string;
  title: string;
  description: string;
  icon: string;
  screenshot: string;
  badge?: string;
  technicalDetails?: string[];
}

export interface CategoryItem {
  id: string;
  name: string;
  description: string;
  iconName: string;
  count: number;
  colorClass: {
    bg: string;
    text: string;
    border: string;
    darkBg: string;
    darkText: string;
  };
  sampleSpots: string[];
}

export interface StatItem {
  value: string;
  label: string;
  sublabel: string;
  icon: string;
}

export interface FaqItem {
  question: string;
  answer: string;
  category?: string;
}

export interface TestimonialItem {
  id: string;
  name: string;
  role: string;
  rating: number;
  comment: string;
  avatar: string;
  location: string;
}

export interface AppScreenshot {
  id: string;
  title: string;
  description: string;
  src: string;
  tag: string;
}

export interface Destination {
  id: string;
  name: string;
  categoryId: 'temple' | 'vineyard' | 'fort' | 'waterfall' | 'heritage' | 'viewpoint' | 'viewpoints' | 'food';
  categoryLabel: string;
  area: string;
  entryFee: number;
  latitude: number;
  longitude: number;
  comment: string;
  duration: number; // in minutes
  access: string;
  bestTime?: string;
  climbingWarning?: boolean;
  waterfallWarning?: boolean;
  wineWarning?: boolean;
  image?: string;
}

export interface TransitHub {
  id: string;
  name: string;
  shortName: string;
  lat: number;
  lon: number;
  type: string;
}

export interface TimelineStop {
  slot: 'Morning' | 'Afternoon' | 'Evening';
  place: Destination;
  distanceKm: string;
}

export interface DayItinerary {
  day: number;
  stops: TimelineStop[];
}
