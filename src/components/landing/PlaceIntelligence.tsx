'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { ArrowUpRight } from 'lucide-react';
import { NASHIK_REAL_PLACES, NashikPlace } from '@/data/nashikPlaces';

export function PlaceIntelligence() {
  const [selectedPlaceId, setSelectedPlaceId] = useState(NASHIK_REAL_PLACES[0].id);

  const activePlace =
    NASHIK_REAL_PLACES.find((p) => p.id === selectedPlaceId) || NASHIK_REAL_PLACES[0];

  return (
    <section className="w-full bg-[#FBFAFD] py-16 sm:py-20 lg:py-28 px-4 sm:px-8 lg:px-16" id="gazetteer">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="max-w-2xl mb-10 sm:mb-14">
          <p className="mb-3 text-[11px] font-semibold uppercase tracking-[0.2em] text-deep-violet">
            DESTINATION GUIDE
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-on-surface">
            Explore places around Nashik
          </h2>
          <p className="text-base sm:text-lg text-on-surface-variant mt-3 leading-relaxed">
            Browse selected Nashik destinations with descriptions, suggested visiting windows, map links and practical travel notes.
          </p>
        </div>

        {/* Two-Column Split Dossier */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-12 items-start">
          {/* Destination Selector: Horizontal scrollable rail on mobile/tablet, vertical stack on desktop */}
          <div className="lg:col-span-5 flex flex-col gap-2">
            <div className="flex items-center justify-between mb-1">
              <span className="text-xs font-semibold text-deep-violet">
                Select a destination
              </span>
              <span className="text-[11px] text-on-surface-variant lg:hidden font-medium">
                Swipe to explore &rarr;
              </span>
            </div>

            <div
              className="flex flex-row lg:flex-col gap-2 overflow-x-auto lg:overflow-x-visible no-scrollbar snap-x pb-2 lg:pb-0"
              role="tablist"
              aria-label="Destinations"
            >
              {NASHIK_REAL_PLACES.map((place: NashikPlace) => {
                const isActive = place.id === activePlace.id;
                return (
                  <button
                    key={place.id}
                    type="button"
                    role="tab"
                    aria-selected={isActive}
                    onClick={() => setSelectedPlaceId(place.id)}
                    className={`w-[260px] sm:w-[280px] lg:w-full shrink-0 lg:shrink snap-start text-left p-3.5 sm:p-4 rounded-xl transition-all duration-150 flex items-center justify-between cursor-pointer ${
                      isActive
                        ? 'bg-deep-violet text-white font-medium shadow-md'
                        : 'bg-white hover:bg-brand-50 text-on-surface border border-brand-100'
                    }`}
                  >
                    <div className="min-w-0 pr-2">
                      <span className="block font-semibold text-sm sm:text-base leading-snug truncate">
                        {place.name}
                      </span>
                      <span
                        className={`text-xs block mt-0.5 truncate ${
                          isActive ? 'text-white/80' : 'text-on-surface-variant'
                        }`}
                      >
                        {place.marathiName} · {place.categoryLabel}
                      </span>
                    </div>
                    <span
                      className={`text-xs shrink-0 font-medium ${
                        isActive ? 'text-signal-lime' : 'text-on-surface-variant/70'
                      }`}
                    >
                      {place.distanceFromStation.split(' ')[0]} {place.distanceFromStation.split(' ')[1]}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Active Place Detail Dossier */}
          <div className="lg:col-span-7 bg-white rounded-2xl border border-brand-100 p-5 sm:p-8 flex flex-col justify-between shadow-sm">
            <div>
              {/* Photo Plate */}
              <div className="relative w-full aspect-[16/9] rounded-xl overflow-hidden bg-slate-100 mb-6">
                <Image
                  src={activePlace.image}
                  alt={activePlace.name}
                  fill
                  sizes="(max-width: 1024px) 100vw, 640px"
                  className="object-cover object-center"
                />
                <div className="absolute bottom-3 left-3 bg-slate-950/80 backdrop-blur-sm px-3 py-1 rounded-md text-xs font-semibold text-white">
                  {activePlace.locationArea}
                </div>
              </div>

              {/* Title & Coordinates Marker */}
              <div className="mb-6">
                <h3 className="text-2xl sm:text-3xl font-bold tracking-tight text-on-surface">
                  {activePlace.name}
                </h3>
                <p className="text-sm font-medium text-deep-violet mt-1">
                  {activePlace.marathiName} · {activePlace.distanceFromStation} of Nashik Road Rail Terminus
                </p>
                <p className="text-sm text-on-surface-variant mt-3 leading-relaxed">
                  {activePlace.highlight}
                </p>
              </div>

              {/* Ground Guidance Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 mb-6">
                <div className="p-4 rounded-xl bg-brand-50">
                  <span className="block text-xs font-semibold text-deep-violet mb-1">
                    Suggested visiting window
                  </span>
                  <span className="text-sm font-medium text-on-surface block leading-snug">
                    {activePlace.bestTime}
                  </span>
                </div>

                <div className="p-4 rounded-xl bg-brand-50">
                  <span className="block text-xs font-semibold text-deep-violet mb-1">
                    GPS coordinates
                  </span>
                  <span className="text-sm font-medium text-on-surface block">
                    {activePlace.coordinates.latitude.toFixed(4)}° N, {activePlace.coordinates.longitude.toFixed(4)}° E
                  </span>
                </div>
              </div>

              {/* Local Practical Advice */}
              <div className="p-4 rounded-xl bg-[#F4F1F8] mb-6">
                <span className="block text-xs font-semibold text-deep-violet mb-1">
                  Practical travel note
                </span>
                <p className="text-sm text-on-surface leading-relaxed">
                  {activePlace.practicalTip}
                </p>
              </div>
            </div>

            {/* Action Bar */}
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-2">
              <span className="text-xs text-on-surface-variant text-center sm:text-left">
                Place notes are informational. Confirm current timings, fees and access rules before travelling.
              </span>
              <a
                href={activePlace.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-deep-violet hover:bg-[#392066] text-white text-xs sm:text-sm font-semibold transition-colors"
              >
                <span>Open in Google Maps</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
