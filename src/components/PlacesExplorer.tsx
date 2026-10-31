'use client';

import React, { useState } from 'react';
import { NASHIK_REAL_PLACES, NashikPlace } from '@/data/nashikPlaces';
import { MapPin, Clock, Info, Compass, Tag, ArrowUpRight, Wine, Landmark, Mountain, Waves } from 'lucide-react';

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
    <section id="places-preview" className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto scroll-mt-20">
      {/* Section Header */}
      <div className="max-w-3xl mb-10 sm:mb-14 text-left">
        <span className="text-xs font-bold text-blue-600 dark:text-blue-400 block mb-2">
          Curated destination preview
        </span>
        <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 dark:text-white headline-editorial">
          Authentic Nashik landmarks covered in the app.
        </h2>
        <p className="text-slate-600 dark:text-slate-300 mt-3 text-base sm:text-lg leading-relaxed">
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
              className={`inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-bold whitespace-nowrap transition-all min-h-[42px] cursor-pointer ${
                isActive
                  ? 'bg-blue-600 text-white shadow-sm'
                  : 'bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700 hover:border-slate-300 dark:hover:border-slate-600'
              }`}
            >
              <Icon className="w-3.5 h-3.5" />
              <span>{cat.label}</span>
            </button>
          );
        })}
      </div>

      {/* Main Split Explorer: List on Left, Detailed Field Card on Right */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        
        {/* Left Side: Destination Selectable Cards (5 cols) */}
        <div className="lg:col-span-5 space-y-3">
          {filteredPlaces.map((place) => {
            const isSelected = selectedPlace.id === place.id;
            return (
              <button
                key={place.id}
                onClick={() => setSelectedPlaceId(place.id)}
                type="button"
                className={`w-full text-left p-4 sm:p-5 rounded-2xl transition-all border min-h-[72px] cursor-pointer flex items-center justify-between gap-4 ${
                  isSelected
                    ? 'bg-blue-50/80 dark:bg-blue-950/40 border-blue-600 dark:border-blue-500 shadow-sm'
                    : 'bg-white dark:bg-slate-800/80 border-slate-200 dark:border-slate-800 hover:border-slate-300 dark:hover:border-slate-700'
                }`}
              >
                <div className="min-w-0">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-[10px] font-semibold text-blue-600 dark:text-blue-400">
                      {place.categoryLabel}
                    </span>
                    <span className="text-[10px] text-slate-400">•</span>
                    <span className="text-[10px] text-slate-500 dark:text-slate-400">
                      {place.distanceFromStation}
                    </span>
                  </div>
                  <h4 className="text-sm sm:text-base font-bold text-slate-900 dark:text-white truncate">
                    {place.name}
                  </h4>
                  <span className="text-xs text-slate-500 dark:text-slate-400 block mt-0.5">
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
        <div className="lg:col-span-7 editorial-card p-6 sm:p-10 rounded-3xl sticky top-24">
          <div className="space-y-6">
            
            {/* Top Place Header */}
            <div>
              <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-blue-50 dark:bg-blue-950/60 text-blue-600 dark:text-blue-400 border border-blue-200 dark:border-blue-800">
                  {selectedPlace.categoryLabel}
                </span>
                <span className="text-xs text-slate-500 dark:text-slate-400 font-medium flex items-center gap-1">
                  <MapPin className="w-3.5 h-3.5 text-slate-400" />
                  {selectedPlace.locationArea}
                </span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white mt-2">
                {selectedPlace.name}
              </h3>
              <p className="text-sm font-semibold text-slate-500 dark:text-slate-400 mt-1">
                {selectedPlace.marathiName}
              </p>
            </div>

            {/* Core Highlight */}
            <div className="p-4 sm:p-5 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200/60 dark:border-slate-700/60">
              <span className="block text-xs font-bold text-slate-900 dark:text-slate-200 mb-1.5">
                Place Overview
              </span>
              <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                {selectedPlace.highlight}
              </p>
            </div>

            {/* Travel Intelligence Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-4 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/60">
                <div className="flex items-center gap-2 text-xs font-bold text-slate-700 dark:text-slate-300 mb-1">
                  <Clock className="w-3.5 h-3.5 text-blue-600 dark:text-blue-400" />
                  <span>Best Visiting Window</span>
                </div>
                <p className="text-xs text-slate-600 dark:text-slate-400 mt-1">
                  {selectedPlace.bestTime}
                </p>
              </div>

              <div className="p-4 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/60">
                <div className="flex items-center gap-2 text-xs font-bold text-slate-700 dark:text-slate-300 mb-1">
                  <MapPin className="w-3.5 h-3.5 text-amber-600 dark:text-amber-400" />
                  <span>Transit Distance</span>
                </div>
                <p className="text-xs text-slate-600 dark:text-slate-400 mt-1">
                  {selectedPlace.distanceFromStation} from Nashik Road Railway Station
                </p>
              </div>
            </div>

            {/* Field Practical Tip */}
            <div className="p-4 sm:p-5 rounded-2xl bg-amber-50/60 dark:bg-amber-950/30 border border-amber-200/70 dark:border-amber-800/50">
              <div className="flex items-start gap-2.5">
                <Info className="w-4 h-4 text-amber-700 dark:text-amber-400 shrink-0 mt-0.5" />
                <div>
                  <span className="block text-xs font-bold text-amber-900 dark:text-amber-300 mb-1">
                    Traveler&apos;s Field Note
                  </span>
                  <p className="text-xs sm:text-sm text-amber-900/90 dark:text-amber-200/90 leading-relaxed">
                    {selectedPlace.practicalTip}
                  </p>
                </div>
              </div>
            </div>

            {/* Tags */}
            <div className="flex flex-wrap gap-1.5 pt-2">
              {selectedPlace.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-2.5 py-1 rounded-lg text-[11px] font-medium bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300"
                >
                  #{tag}
                </span>
              ))}
            </div>

            {/* App Action Teaser */}
            <div className="pt-4 border-t border-slate-200 dark:border-slate-800 flex items-center justify-between flex-wrap gap-3">
              <span className="text-xs text-slate-500 dark:text-slate-400">
                View GPS coordinates, offline maps &amp; route planner in app.
              </span>
              <a
                href="https://play.google.com/store/apps/details?id=com.nashikexplore.app"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-blue-700 hover:bg-blue-800 text-white text-xs font-bold transition-colors"
              >
                <span>Get App on Play Store</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
