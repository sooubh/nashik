import React from 'react';
import Image from 'next/image';
import { MapPin, Navigation, Smartphone, ArrowUpRight } from 'lucide-react';
import { Place, Locale } from '@/types/content';
import { getPlayStoreUrl } from '@/lib/utm';

interface PlaceHeroProps {
  place: Place;
  locale: Locale;
}

export function PlaceHero({ place, locale }: PlaceHeroProps) {
  const isMr = locale === 'mr';
  const isHi = locale === 'hi';

  const title = isMr && place.localized?.mr?.title
    ? place.localized.mr.title
    : isHi && place.localized?.hi?.title
    ? place.localized.hi.title
    : place.title;

  const subtitle = isMr
    ? place.localName.mr
    : isHi
    ? place.localName.hi
    : `${place.localName.mr} · ${place.localName.hi}`;

  const categoryLabel = isMr && place.categoryLabel.mr
    ? place.categoryLabel.mr
    : isHi && place.categoryLabel.hi
    ? place.categoryLabel.hi
    : place.categoryLabel.en;

  const ctaAppText = isMr
    ? 'ॲपमध्ये ऑफलाइन माहिती पहा'
    : isHi
    ? 'ऐप में ऑफलाइन देखें'
    : 'View Offline in App';

  const ctaMapsText = isMr
    ? 'गूगल मॅप्सवर पहा'
    : isHi
    ? 'गूगल मैप्स पर देखें'
    : 'Open in Google Maps';

  return (
    <section className="relative w-full overflow-hidden rounded-[28px] sm:rounded-[34px] bg-slate-950 text-white shadow-xl">
      {/* Background Image Plate */}
      <div className="relative aspect-[16/10] sm:aspect-[21/9] w-full overflow-hidden">
        <Image
          src={place.heroImage}
          alt={title}
          fill
          priority
          fetchPriority="high"
          sizes="(max-width: 1024px) 100vw, 1400px"
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-black/20" />
      </div>

      {/* Hero Overlay Content */}
      <div className="relative z-10 -mt-24 sm:-mt-32 p-6 sm:p-10 lg:p-12">
        <div className="flex flex-wrap items-center gap-2 mb-3">
          <span className="rounded-full bg-signal-lime/90 px-3 py-1 text-xs font-bold uppercase tracking-wider text-[#221045]">
            {categoryLabel}
          </span>
          {place.difficultyLevel && (
            <span className="rounded-full border border-white/20 bg-black/40 px-3 py-1 text-xs font-semibold text-white/90 backdrop-blur-sm">
              Difficulty: {place.difficultyLevel}
            </span>
          )}
          {place.elevationMeters && (
            <span className="rounded-full border border-white/20 bg-black/40 px-3 py-1 text-xs font-semibold text-white/90 backdrop-blur-sm">
              Elevation: {place.elevationMeters}m
            </span>
          )}
        </div>

        <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight text-white leading-tight">
          {title}
        </h1>
        <p className="mt-2 text-base sm:text-xl font-medium text-white/80">
          {subtitle}
        </p>

        {/* Location & Coordinates Meta */}
        <div className="mt-4 flex flex-wrap items-center gap-4 text-xs sm:text-sm text-white/75">
          <div className="flex items-center gap-1.5">
            <MapPin className="h-4 w-4 text-signal-lime shrink-0" />
            <span>{place.howToReach.distanceFromNashikCenterKm} km from Nashik Central</span>
          </div>
          <div className="flex items-center gap-1.5">
            <Navigation className="h-4 w-4 text-signal-lime shrink-0" />
            <span>
              {place.coordinates.latitude.toFixed(4)}° N, {place.coordinates.longitude.toFixed(4)}° E
            </span>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="mt-6 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
          <a
            href={getPlayStoreUrl('place_hero_cta', place.slug)}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex min-h-[48px] items-center justify-center gap-2 rounded-full bg-signal-lime px-6 py-3 text-sm font-bold text-[#221045] shadow-lg transition-transform hover:scale-[1.02] active:scale-95"
          >
            <Smartphone className="h-4 w-4 shrink-0" />
            <span>{ctaAppText}</span>
          </a>

          <a
            href={place.googleMapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex min-h-[48px] items-center justify-center gap-2 rounded-full border border-white/30 bg-white/10 px-6 py-3 text-sm font-semibold text-white backdrop-blur-md transition-colors hover:bg-white/20 active:scale-95"
          >
            <span>{ctaMapsText}</span>
            <ArrowUpRight className="h-4 w-4 shrink-0" />
          </a>
        </div>
      </div>
    </section>
  );
}
