'use client';

import React, { useRef } from 'react';
import Image from 'next/image';
import { motion, useReducedMotion } from 'framer-motion';
import { ArrowLeft, ArrowRight, ArrowUpRight } from 'lucide-react';
import { NASHIK_REAL_PLACES } from '@/data/nashikPlaces';

export function DestinationGallery() {
  const railRef = useRef<HTMLDivElement>(null);
  const reduceMotion = useReducedMotion();

  const moveRail = (direction: -1 | 1) => {
    const rail = railRef.current;
    if (!rail) return;

    rail.scrollBy({
      left: direction * Math.min(rail.clientWidth * 0.82, 560),
      behavior: reduceMotion ? 'auto' : 'smooth',
    });
  };

  return (
    <section
      id="destinations"
      aria-labelledby="destinations-title"
      className="w-full scroll-mt-24 bg-[#F4F1F8] px-4 py-14 sm:px-8 sm:py-20 lg:px-12 lg:py-24"
    >
      <div className="mx-auto grid max-w-[1400px] grid-cols-1 gap-8 overflow-hidden rounded-[28px] border border-[#e5dfed] bg-[#FBFAFD] p-5 shadow-sm sm:p-8 lg:grid-cols-[0.78fr_2fr] lg:items-center lg:gap-10 lg:rounded-[34px] lg:p-10">
        <div className="flex flex-col justify-between lg:min-h-[350px]">
          <div>
            <div className="mb-5 h-[3px] w-14 rounded-full bg-deep-violet/70" />
            <p className="mb-2 text-[11px] font-semibold uppercase tracking-[0.2em] text-deep-violet">
              Start exploring
            </p>
            <h2
              id="destinations-title"
              className="max-w-sm text-4xl font-bold leading-[1.04] tracking-tight text-on-surface sm:text-5xl"
            >
              Top places
              <span className="block font-editorial font-normal italic text-deep-violet">
                in Nashik.
              </span>
            </h2>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-on-surface-variant sm:text-base">
              Handpicked places for your next journey, from quiet lake views to
              ancient trails and sacred landmarks.
            </p>
          </div>

          <div className="mt-7 flex items-center gap-3 lg:mt-10">
            <button
              type="button"
              onClick={() => moveRail(-1)}
              aria-label="Previous destinations"
              className="flex h-11 w-11 items-center justify-center rounded-full border border-[#d9d2e3] bg-white text-deep-violet transition-colors hover:border-deep-violet hover:bg-brand-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-deep-violet focus-visible:ring-offset-2"
            >
              <ArrowLeft className="h-4 w-4" />
            </button>
            <button
              type="button"
              onClick={() => moveRail(1)}
              aria-label="Next destinations"
              className="flex h-11 w-11 items-center justify-center rounded-full bg-deep-violet text-white transition-colors hover:bg-[#392066] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-deep-violet focus-visible:ring-offset-2"
            >
              <ArrowRight className="h-4 w-4" />
            </button>
            <span className="ml-2 text-xs font-medium text-on-surface-variant">
              Scroll to explore
            </span>
          </div>
        </div>

        <div
          ref={railRef}
          className="no-scrollbar flex snap-x snap-mandatory gap-4 overflow-x-auto scroll-smooth pb-1 sm:gap-5"
          aria-label="Featured Nashik destinations"
        >
          {NASHIK_REAL_PLACES.map((place, index) => (
            <motion.a
              key={place.id}
              href={place.googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={'Explore ' + place.name + ' on Google Maps'}
              initial={reduceMotion ? false : { opacity: 0, y: 18 }}
              whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.12 }}
              transition={{ duration: 0.45, delay: Math.min(index * 0.04, 0.2) }}
              className="group relative aspect-[3/4] w-[235px] shrink-0 snap-start overflow-hidden rounded-[20px] bg-slate-900 shadow-sm sm:w-[270px] lg:w-[250px] xl:w-[275px]"
            >
              <Image
                src={place.image}
                alt={place.name}
                fill
                sizes="(max-width: 640px) 235px, (max-width: 1024px) 270px, 275px"
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/15 to-black/5" />
              <span className="absolute left-4 top-4 rounded-full border border-white/20 bg-black/25 px-3 py-1 text-[10px] font-medium tracking-wide text-white/90 backdrop-blur-sm">
                {place.categoryLabel}
              </span>
              <span className="absolute right-4 top-4 flex h-9 w-9 items-center justify-center rounded-full bg-white/85 text-slate-900 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
                <ArrowUpRight className="h-4 w-4" />
              </span>
              <div className="absolute inset-x-0 bottom-0 p-4 sm:p-5">
                <h3 className="text-lg font-bold leading-tight tracking-tight text-white sm:text-xl">
                  {place.name}
                </h3>
                <p className="mt-1 line-clamp-1 text-xs text-white/75">
                  {place.locationArea}
                </p>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
