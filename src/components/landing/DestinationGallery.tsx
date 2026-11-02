'use client';

import React from 'react';
import Image from 'next/image';
import { ArrowUpRight } from 'lucide-react';
import { NASHIK_REAL_PLACES, NashikPlace } from '@/data/nashikPlaces';

export function DestinationGallery() {
  // Duplicate places to achieve a seamless, continuous infinite horizontal marquee
  const loopedPlaces = [...NASHIK_REAL_PLACES, ...NASHIK_REAL_PLACES];

  return (
    <section className="w-full bg-[#F4F1F8] py-20 lg:py-28 overflow-hidden" id="places">
      {/* Section Header */}
      <div className="max-w-6xl mx-auto px-6 sm:px-10 lg:px-16 mb-10 sm:mb-12">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-on-surface">
          Authentic Nashik Destinations
        </h2>
        <p className="text-sm sm:text-base text-on-surface-variant mt-2 max-w-xl">
          Curated Sahyadri trails, sacred ghats, hill overlooks, and estate vineyards.
        </p>
      </div>

      {/* Full-bleed Horizontal Marquee Reel with Edge Fades */}
      <div className="relative w-full overflow-hidden group/reel">
        {/* Left & Right Soft Fade Gradients */}
        <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-8 sm:w-20 bg-gradient-to-r from-[#F4F1F8] to-transparent z-10" /> {/* taste-skill-ignore */}
        <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-8 sm:w-20 bg-gradient-to-l from-[#F4F1F8] to-transparent z-10" /> {/* taste-skill-ignore */}

        {/* Scrolling Track */}
        <div className="animate-marquee flex gap-6 px-4 py-2 hover:[animation-play-state:paused]">
          {loopedPlaces.map((place: NashikPlace, index: number) => (
            <a
              key={`${place.id}-${index}`}
              href={place.googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`View ${place.name} on Google Maps`}
              className="relative shrink-0 w-[300px] sm:w-[400px] lg:w-[440px] aspect-[16/10] rounded-2xl overflow-hidden group bg-slate-900 border border-black/5"
            >
              {/* Destination Image */}
              <Image
                src={place.image}
                alt={place.name}
                fill
                sizes="(max-width: 640px) 300px, (max-width: 1024px) 400px, 440px"
                className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
              />

              {/* Cinematic Vignette Scrim */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-black/10 group-hover:from-black/90 transition-colors" /> {/* taste-skill-ignore */}

              {/* Category Pill */}
              <div className="absolute top-3.5 left-3.5 px-3 py-1 rounded-full bg-slate-950/80 text-[11px] font-semibold text-white/90 border border-white/15">
                {place.categoryLabel}
              </div>

              {/* Direction Indicator Hint */}
              <div className="absolute top-3.5 right-3.5 w-8 h-8 rounded-full bg-white/20 flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                <ArrowUpRight className="w-4 h-4" />
              </div>

              {/* Minimal Bottom Label */}
              <div className="absolute bottom-0 inset-x-0 p-5 text-white">
                <h3 className="font-bold text-lg sm:text-xl tracking-tight leading-snug group-hover:text-signal-lime transition-colors">
                  {place.name}
                </h3>
                <p className="text-xs text-white/80 mt-1 font-medium truncate">
                  {place.marathiName} · {place.locationArea}
                </p>
              </div>
            </a>
          ))}
        </div>
      </div>

      {/* Subtext Notice */}
      <div className="max-w-6xl mx-auto px-6 sm:px-10 lg:px-16 mt-6">
        <p className="text-xs text-on-surface-variant/70">
          Hover or touch to pause · Tap any destination to view live coordinates and road directions
        </p>
      </div>
    </section>
  );
}
