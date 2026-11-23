'use client';

import React, { useState, useMemo } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Search, MapPin, Clock, Ticket, ArrowUpRight, Filter } from 'lucide-react';
import { Place, Category } from '@/types/content';
import { ALL_CATEGORIES, CATEGORIES_DATA } from '@/data/categoriesData';

interface PlacesDirectoryClientProps {
  places: Place[];
}

export function PlacesDirectoryClient({ places }: PlacesDirectoryClientProps) {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<Category | 'all'>('all');

  const filteredPlaces = useMemo(() => {
    return places.filter((place) => {
      const matchesCategory =
        selectedCategory === 'all' || place.category === selectedCategory;

      const query = searchQuery.toLowerCase().trim();
      const matchesSearch =
        !query ||
        place.title.toLowerCase().includes(query) ||
        place.localName.mr.toLowerCase().includes(query) ||
        place.localName.hi.toLowerCase().includes(query) ||
        place.tags.some((t) => t.toLowerCase().includes(query)) ||
        place.excerpt.toLowerCase().includes(query);

      return matchesCategory && matchesSearch;
    });
  }, [places, selectedCategory, searchQuery]);

  return (
    <div className="space-y-8">
      {/* Controls: Search Bar & Category Filter Pills */}
      <div className="space-y-4">
        <div className="relative w-full max-w-xl">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-on-surface-variant/60" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search attractions, temples, forts, vineyards, or misal..."
            className="w-full pl-12 pr-4 py-3.5 rounded-2xl bg-white border border-brand-100 text-on-surface placeholder:text-on-surface-variant/50 focus:outline-none focus:border-deep-violet focus:ring-2 focus:ring-deep-violet/10 shadow-xs text-sm sm:text-base"
          />
        </div>

        {/* Filter Pills */}
        <div className="flex items-center gap-2 overflow-x-auto pb-2 no-scrollbar">
          <button
            type="button"
            onClick={() => setSelectedCategory('all')}
            className={`whitespace-nowrap px-4 py-2 rounded-full text-xs font-bold transition-all cursor-pointer ${
              selectedCategory === 'all'
                ? 'bg-deep-violet text-white shadow-sm'
                : 'bg-white hover:bg-brand-50 border border-brand-100 text-on-surface-variant'
            }`}
          >
            All Places ({places.length})
          </button>

          {ALL_CATEGORIES.map((cat) => {
            const isSelected = selectedCategory === cat;
            const catMeta = CATEGORIES_DATA[cat];
            const count = places.filter((p) => p.category === cat).length;
            if (count === 0) return null;

            return (
              <button
                key={cat}
                type="button"
                onClick={() => setSelectedCategory(cat)}
                className={`whitespace-nowrap px-4 py-2 rounded-full text-xs font-bold transition-all cursor-pointer ${
                  isSelected
                    ? 'bg-deep-violet text-white shadow-sm'
                    : 'bg-white hover:bg-brand-50 border border-brand-100 text-on-surface-variant'
                }`}
              >
                {catMeta.title.en} ({count})
              </button>
            );
          })}
        </div>
      </div>

      {/* Results Header */}
      <div className="flex items-center justify-between text-xs text-on-surface-variant font-medium">
        <span>
          Showing <strong>{filteredPlaces.length}</strong> of {places.length} destinations
        </span>
        {(searchQuery || selectedCategory !== 'all') && (
          <button
            type="button"
            onClick={() => {
              setSearchQuery('');
              setSelectedCategory('all');
            }}
            className="text-deep-violet font-semibold hover:underline"
          >
            Reset filters
          </button>
        )}
      </div>

      {/* Grid of Places */}
      {filteredPlaces.length === 0 ? (
        <div className="rounded-2xl border border-brand-100 bg-white p-12 text-center space-y-3">
          <p className="text-lg font-bold text-on-surface">No attractions matched your search.</p>
          <p className="text-sm text-on-surface-variant">Try adjusting your keywords or category filters.</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredPlaces.map((place) => (
            <Link
              key={place.slug}
              href={`/places/${place.slug}`}
              className="group relative rounded-2xl overflow-hidden border border-brand-100 bg-white shadow-xs hover:shadow-xl transition-all flex flex-col justify-between"
            >
              <div>
                <div className="relative aspect-[16/10] w-full overflow-hidden bg-slate-900">
                  <Image
                    src={place.heroImage}
                    alt={place.title}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 360px"
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <span className="absolute top-3 left-3 rounded-full bg-slate-950/80 backdrop-blur-sm px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-white">
                    {place.categoryLabel.en}
                  </span>
                  <div className="absolute top-3 right-3 rounded-full bg-white/90 p-1.5 text-deep-violet shadow-sm">
                    <ArrowUpRight className="h-4 w-4" />
                  </div>
                </div>

                <div className="p-5 space-y-2.5">
                  <div className="flex items-center gap-1.5 text-[11px] font-semibold text-deep-violet">
                    <MapPin className="h-3.5 w-3.5 shrink-0" />
                    <span>{place.howToReach.distanceFromNashikCenterKm} km from station</span>
                  </div>

                  <div>
                    <h3 className="text-lg font-bold text-on-surface group-hover:text-deep-violet transition-colors leading-snug">
                      {place.title}
                    </h3>
                    <p className="text-xs text-on-surface-variant/80 font-medium">
                      {place.localName.mr}
                    </p>
                  </div>

                  <p className="text-xs sm:text-sm text-on-surface-variant line-clamp-2 leading-relaxed">
                    {place.excerpt}
                  </p>
                </div>
              </div>

              <div className="p-5 pt-3 border-t border-brand-50 flex items-center justify-between text-xs font-semibold text-deep-violet">
                <div className="flex items-center gap-1 text-on-surface-variant">
                  <Ticket className="h-3.5 w-3.5" />
                  <span>{place.entryFee.isFree ? 'Free' : place.entryFee.general}</span>
                </div>
                <div className="flex items-center gap-1 text-on-surface-variant">
                  <Clock className="h-3.5 w-3.5" />
                  <span>{place.timings.open} - {place.timings.close}</span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}
