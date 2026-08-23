import { Destination, TransitHub, DayItinerary } from './types';

/**
 * Haversine formula calculation for geographical distance in kilometers
 */
export function calculateDistanceKm(lat1: number, lon1: number, lat2: number, lon2: number): number {
  const toRad = Math.PI / 180;
  const dLat = (lat2 - lat1) * toRad;
  const dLon = (lon2 - lon1) * toRad;
  const a =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos(lat1 * toRad) * Math.cos(lat2 * toRad) *
    Math.sin(dLon / 2) * Math.sin(dLon / 2);
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  return 6371 * c; // Earth radius in km
}

export interface PlanOptions {
  transitHub: TransitHub;
  durationDays: number;
  budgetTier: 'budget' | 'moderate' | 'premium';
  selectedCategories: string[];
  travelPace: 'relaxed' | 'moderate' | 'packed';
  enableDistanceCalculation: boolean;
  destinationPool: Destination[];
}

export function generateItinerary(options: PlanOptions): DayItinerary[] {
  const {
    transitHub,
    durationDays,
    budgetTier,
    selectedCategories,
    travelPace,
    enableDistanceCalculation,
    destinationPool,
  } = options;

  // 1. Filter by category
  let filtered = destinationPool.filter((d) => selectedCategories.includes(d.categoryId));
  if (filtered.length === 0) {
    filtered = [...destinationPool];
  }

  // 2. Filter by budget
  if (budgetTier === 'budget') {
    const budgetFiltered = filtered.filter((d) => d.entryFee <= 50);
    if (budgetFiltered.length > 0) filtered = budgetFiltered;
  } else if (budgetTier === 'moderate') {
    const moderateFiltered = filtered.filter((d) => d.entryFee <= 250);
    if (moderateFiltered.length > 0) filtered = moderateFiltered;
  }

  // 3. Shuffle
  const shuffled = [...filtered].sort(() => Math.random() - 0.5);

  const slotsMap: Record<'relaxed' | 'moderate' | 'packed', Array<'Morning' | 'Afternoon' | 'Evening'>> = {
    relaxed: ['Morning', 'Afternoon'],
    moderate: ['Morning', 'Afternoon', 'Evening'],
    packed: ['Morning', 'Afternoon', 'Evening'],
  };

  const slots = slotsMap[travelPace] || ['Morning', 'Afternoon', 'Evening'];
  const dayItineraries: DayItinerary[] = [];
  let poolIdx = 0;

  for (let d = 1; d <= durationDays; d++) {
    const stops = [];
    for (let s = 0; s < slots.length; s++) {
      if (poolIdx >= shuffled.length) poolIdx = 0;
      const place = shuffled[poolIdx];

      let distanceStr = '0.0';
      if (enableDistanceCalculation) {
        const dist = calculateDistanceKm(
          transitHub.lat,
          transitHub.lon,
          place.latitude,
          place.longitude
        );
        distanceStr = dist.toFixed(1);
      } else {
        distanceStr = 'Direct route';
      }

      stops.push({
        slot: slots[s],
        place,
        distanceKm: distanceStr,
      });

      poolIdx++;
    }
    dayItineraries.push({
      day: d,
      stops,
    });
  }

  return dayItineraries;
}
