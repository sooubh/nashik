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
      left: direction * Math.min(rail.clientWidth * 0.82, 680),
      behavior: reduceMotion ? 'auto' : 'smooth',
    });
  };

  return (
    <section
      id="destinations"
      aria-labelledby="destinations-title"
      className="w-full scroll-mt-24 bg-[#F4F1F8] px-4 py-14 sm:px-8 sm:py-20 lg:px-12 lg:py-24"
    >
      <div className="mx-auto grid max-w-[1480px] grid-cols-1 gap-8 overflow-hidden rounded-[28px] border border-[#e5dfed] bg-[#FBFAFD] p-5 shadow-sm sm:p-8 lg:grid-cols-[0.78fr_2fr] lg:items-center lg:gap-10 lg:rounded-[34px] lg:p-10">
        <motion.div initial={reduceMotion ? false : { opacity: 0, x: -28 }} whileInView={reduceMotion ? undefined : { opacity: 1, x: 0 }} viewport={{ once: true, amount: 0.25 }} transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }} className="flex flex-col justify-between lg:min-h-[420px]">
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
        </motion.div>

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
              initial={reduceMotion ? false : { opacity: 0, y: 40, rotateX: 8, scale: 0.94 }}
              whileInView={reduceMotion ? undefined : { opacity: 1, y: 0, rotateX: 0, scale: 1 }}
              viewport={{ once: true, amount: 0.12 }}
              transition={{ duration: 0.72, delay: Math.min(index * 0.075, 0.3), ease: [0.22, 1, 0.36, 1] }}
              whileHover={reduceMotion ? undefined : { y: -10, rotateX: 2, rotateY: -2, scale: 1.018 }}
              whileTap={reduceMotion ? undefined : { scale: 0.985 }}
              style={{ transformPerspective: 1100, transformStyle: 'preserve-3d' }}
              className="group relative aspect-[4/5] w-[280px] shrink-0 snap-start overflow-hidden rounded-[24px] bg-slate-900 shadow-[0_18px_38px_rgba(21,17,35,0.18)] ring-1 ring-inset ring-white/15 sm:w-[310px] sm:rounded-[26px] lg:w-[320px] xl:w-[340px]"
            >
              <Image
                src={place.image}
                alt={place.name}
                fill
                sizes="(max-width: 640px) 280px, (max-width: 1024px) 310px, 340px"
                className="object-cover transition-transform duration-700 ease-out group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/12 to-black/5 transition-colors duration-500 group-hover:from-black/95" />
              <div className="absolute inset-0 bg-gradient-to-br from-white/15 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
              <span className="absolute left-4 top-4 rounded-full border border-white/20 bg-black/25 px-3 py-1 text-[10px] font-medium tracking-wide text-white/90 backdrop-blur-sm">
                {place.categoryLabel}
              </span>
              <span className="absolute right-4 top-4 flex h-9 w-9 items-center justify-center rounded-full bg-white/85 text-slate-900 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
                <ArrowUpRight className="h-4 w-4" />
              </span>
              <div className="absolute inset-x-0 bottom-0 p-5 sm:p-6">
                <h3 className="text-xl font-bold leading-tight tracking-tight text-white sm:text-2xl">
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
