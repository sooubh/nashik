'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { NASHIK_REAL_PLACES, NashikPlace } from '@/data/nashikPlaces';
import { MapPin, Clock, Info, Compass, ArrowUpRight, Wine, Landmark, Mountain, Waves, ExternalLink } from 'lucide-react';

const categories = [
  { id: 'all', label: 'All Destinations', icon: Compass },
  { id: 'vineyard', label: 'Wine Country', icon: Wine },
  { id: 'heritage', label: 'Heritage & Temples', icon: Landmark },
  { id: 'trek', label: 'Sahyadri Treks', icon: Mountain },
  { id: 'nature', label: 'Nature & Falls', icon: Waves },
];

export function PlacesExplorer() {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [selectedPlaceId, setSelectedPlaceId] = useState<string>(NASHIK_REAL_PLACES[0].id);

  const filteredPlaces = activeCategory === 'all'
    ? NASHIK_REAL_PLACES
    : NASHIK_REAL_PLACES.filter((p) => p.category === activeCategory);

  const selectedPlace = NASHIK_REAL_PLACES.find((p) => p.id === selectedPlaceId) || filteredPlaces[0];

  return (
    <section id="places-preview" className="py-24 sm:py-32 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto scroll-mt-20">
      <div id="places" className="sr-only" aria-hidden="true" />
      
      {/* Section Header */}
      <div className="max-w-3xl mb-12 text-left">
        <span className="text-sm font-bold text-blue-600 dark:text-blue-400 block mb-3">
          Curated Terroir &amp; Landmark Radar
        </span>
        <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-900 dark:text-white leading-tight">
          Explore genuine Nashik destinations.
        </h2>
        <p className="text-slate-600 dark:text-slate-300 mt-4 text-base sm:text-lg leading-relaxed">
          From ancient 2nd-century BCE rock caves and sacred Jyotirlinga shrines to premier vineyard tasting rooms and vertical Sahyadri cliff forts.
        </p>
      </div>

      {/* Category Filter Pills */}
      <div className="flex items-center gap-2 overflow-x-auto no-scrollbar pb-4 mb-8">
        {categories.map((cat) => {
          const Icon = cat.icon;
          const isActive = activeCategory === cat.id;
          return (
            <button
              key={cat.id}
              onClick={() => {
                setActiveCategory(cat.id);
                const nextMatching = cat.id === 'all' 
                  ? NASHIK_REAL_PLACES[0] 
                  : NASHIK_REAL_PLACES.find((p) => p.category === cat.id);
                if (nextMatching) setSelectedPlaceId(nextMatching.id);
              }}
              type="button"
              className={`inline-flex items-center gap-2 px-5 py-2.5 rounded-2xl text-xs font-bold whitespace-nowrap transition-colors min-h-[44px] cursor-pointer ${
                isActive
                  ? 'bg-blue-600 text-white'
                  : 'bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700'
              }`}
            >
              <Icon className="w-4 h-4" />
              <span>{cat.label}</span>
            </button>
          );
        })}
      </div>

      {/* Main Split Explorer */}
      <div data-ui="true" className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        
        {/* Left Side: Destination Selectable Cards (5 cols) */}
        <div className="lg:col-span-5 space-y-3">
          {filteredPlaces.map((place) => {
            const isSelected = selectedPlace.id === place.id;
            return (
              <button
                key={place.id}
                onClick={() => setSelectedPlaceId(place.id)}
                type="button"
                className={`w-full text-left p-4 sm:p-5 rounded-2xl transition-colors min-h-[84px] cursor-pointer flex items-center gap-4 ${
                  isSelected
                    ? 'bg-blue-50 dark:bg-blue-950/60'
                    : 'bg-slate-100 dark:bg-slate-800/80 hover:bg-slate-200 dark:hover:bg-slate-800'
                }`}
              >
                {/* Destination Thumbnail */}
                <div className="relative w-16 h-16 rounded-xl overflow-hidden shrink-0 bg-slate-200 dark:bg-slate-700">
                  <Image
                    src={place.image}
                    alt={place.name}
                    fill
                    className="object-cover"
                    sizes="64px"
                  />
                </div>

                <div className="min-w-0 flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-xs font-bold text-blue-600 dark:text-blue-400">
                      {place.categoryLabel}
                    </span>
                    <span className="text-xs text-slate-400">•</span>
                    <span className="text-xs text-slate-500 dark:text-slate-400 font-medium truncate">
                      {place.distanceFromStation}
                    </span>
                  </div>
                  <h4 className="text-base font-bold text-slate-900 dark:text-white truncate">
                    {place.name}
                  </h4>
                  <span className="text-xs text-slate-500 dark:text-slate-400 block mt-0.5 truncate">
                    {place.marathiName}
                  </span>
                </div>

                <ArrowUpRight className={`w-4 h-4 shrink-0 transition-transform ${
                  isSelected ? 'text-blue-600 dark:text-blue-400 translate-x-0.5 -translate-y-0.5' : 'text-slate-400 opacity-60'
                }`} />
              </button>
            );
          })}
        </div>

        {/* Right Side: Detailed Field Guide Dossier Card (7 cols) */}
        <div className="lg:col-span-7 rounded-3xl bg-slate-900 text-white overflow-hidden sticky top-28 space-y-6">
          
          {/* Top Destination Visual Hero */}
          <div className="relative w-full h-56 sm:h-64 overflow-hidden bg-slate-950">
            <Image
              src={selectedPlace.image}
              alt={selectedPlace.name}
              fill
              priority
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 600px"
            />
            <div className="absolute inset-0 bg-black/40" />
            <div className="absolute bottom-4 left-6 right-6 flex items-end justify-between gap-4">
              <div>
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-blue-600 text-white">
                  {selectedPlace.categoryLabel}
                </span>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-white mt-2 leading-tight">
                  {selectedPlace.name}
                </h3>
                <p className="text-xs text-slate-300 font-medium mt-0.5">
                  {selectedPlace.marathiName}
                </p>
              </div>

              <a
                href={selectedPlace.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-white text-slate-900 text-xs font-bold hover:bg-slate-100 transition-colors shrink-0"
              >
                <span>Maps GPS</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          <div className="p-6 sm:p-8 pt-0 space-y-6">
            
            {/* Core Highlight */}
            <div className="p-5 rounded-2xl bg-slate-800">
              <span className="block text-xs font-bold text-slate-200 mb-1.5">
                Field Dossier Overview
              </span>
              <p className="text-sm text-slate-300 leading-relaxed">
                {selectedPlace.highlight}
              </p>
            </div>

            {/* Travel Intelligence Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-4 rounded-xl bg-slate-800">
                <div className="flex items-center gap-2 text-xs font-bold text-slate-200 mb-1">
                  <Clock className="w-3.5 h-3.5 text-blue-400" />
                  <span>Best Visiting Window</span>
                </div>
                <p className="text-xs text-slate-300 mt-1">
                  {selectedPlace.bestTime}
                </p>
              </div>

              <div className="p-4 rounded-xl bg-slate-800">
                <div className="flex items-center gap-2 text-xs font-bold text-slate-200 mb-1">
                  <MapPin className="w-3.5 h-3.5 text-amber-400" />
                  <span>Transit Distance</span>
                </div>
                <p className="text-xs text-slate-300 mt-1">
                  {selectedPlace.distanceFromStation} from Station
                </p>
              </div>
            </div>

            {/* Field Practical Tip */}
            <div className="p-5 rounded-2xl bg-amber-950/60">
              <div className="flex items-start gap-3">
                <Info className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                <div>
                  <span className="block text-xs font-bold text-amber-300 mb-1">
                    Traveler&apos;s Field Note
                  </span>
                  <p className="text-xs sm:text-sm text-amber-200/90 leading-relaxed">
                    {selectedPlace.practicalTip}
                  </p>
                </div>
              </div>
            </div>

            {/* Tags */}
            <div className="flex flex-wrap gap-2 pt-1">
              {selectedPlace.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1 rounded-lg text-xs font-semibold bg-slate-800 text-slate-300"
                >
                  #{tag}
                </span>
              ))}
            </div>

            {/* App Action */}
            <div className="pt-2 flex items-center justify-between flex-wrap gap-3">
              <span className="text-xs text-slate-400">
                Turn-by-turn road navigation links directly into Google Maps in the app.
              </span>
              <a
                href="https://play.google.com/store/apps/details?id=com.nashikexplore.app"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white text-xs font-bold transition-colors"
              >
                <span>View Spot in App</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
