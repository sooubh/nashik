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
    <section className="w-full bg-[#FBFAFD] py-20 lg:py-28 px-6 sm:px-10 lg:px-16" id="gazetteer">
      <div className="max-w-6xl mx-auto">
        {/* Section Header without AI Pill Badges */}
        <div className="max-w-2xl mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-on-surface">
            Nashik Field Intelligence
          </h2>
          <p className="text-base sm:text-lg text-on-surface-variant mt-3 leading-relaxed">
            Essential ground realities for travelers: sanctum entry windows, Sahyadri terrain alerts, and road transit markers.
          </p>
        </div>

        {/* Two-Column Split Dossier */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          {/* Destination Selector Column */}
          <div className="lg:col-span-5 flex flex-col gap-2">
            <span className="text-xs font-semibold text-deep-violet mb-2">
              Select a destination
            </span>
            <div className="flex flex-col gap-1.5" role="tablist" aria-label="Destinations">
              {NASHIK_REAL_PLACES.map((place: NashikPlace) => {
                const isActive = place.id === activePlace.id;
                return (
                  <button
                    key={place.id}
                    type="button"
                    role="tab"
                    aria-selected={isActive}
                    onClick={() => setSelectedPlaceId(place.id)}
                    className={`text-left p-4 rounded-xl transition-colors duration-150 flex items-center justify-between ${
                      isActive
                        ? 'bg-deep-violet text-white font-medium'
                        : 'bg-white hover:bg-brand-50 text-on-surface border border-brand-100'
                    }`}
                  >
                    <div>
                      <span className="block font-semibold text-sm sm:text-base leading-snug">
                        {place.name}
                      </span>
                      <span
                        className={`text-xs block mt-0.5 ${
                          isActive ? 'text-white/80' : 'text-on-surface-variant'
                        }`}
                      >
                        {place.marathiName} · {place.categoryLabel}
                      </span>
                    </div>
                    <span
                      className={`text-xs shrink-0 ml-3 font-medium ${
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
          <div className="lg:col-span-7 bg-white rounded-2xl border border-brand-100 p-6 sm:p-8 flex flex-col justify-between">
            <div>
              {/* Photo Plate */}
              <div className="relative w-full aspect-[16/9] rounded-xl overflow-hidden bg-slate-100 mb-6">
                <Image
                  src={activePlace.image}
                  alt={activePlace.name}
                  fill
                  sizes="(max-width: 1024px) 100vw, 600px"
                  className="object-cover object-center"
                />
                <div className="absolute bottom-3 left-3 bg-slate-950/80 px-3 py-1 rounded-md text-xs font-semibold text-white">
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
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
                <div className="p-4 rounded-xl bg-brand-50">
                  <span className="block text-xs font-semibold text-deep-violet mb-1">
                    Optimal visiting hours
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
                  Local ground reality
                </span>
                <p className="text-sm text-on-surface leading-relaxed">
                  {activePlace.practicalTip}
                </p>
              </div>
            </div>

            {/* Action Bar */}
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-2">
              <span className="text-xs text-on-surface-variant">
                Full offline directions and cached maps available in Trivio on Android.
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
