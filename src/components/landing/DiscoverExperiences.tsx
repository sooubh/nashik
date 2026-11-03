'use client';

import React from 'react';
import Image from 'next/image';
import { motion, useReducedMotion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { NASHIK_REAL_PLACES } from '@/data/nashikPlaces';

const EXPERIENCE_CARDS = [
  {
    placeId: 'trimbakeshwar',
    label: 'Sacred heritage',
    title: 'Find a moment of calm.',
    layout: 'col-span-2 row-span-2 lg:col-span-1 lg:col-start-1 lg:row-start-1 lg:row-span-2',
    featured: true,
  },
  {
    placeId: 'sula-vineyards',
    label: 'Vineyard escapes',
    title: 'Slow down by the vines.',
    layout: 'col-span-1 row-span-1 lg:col-start-2 lg:row-start-1',
    featured: false,
  },
  {
    placeId: 'harihar-fort',
    label: 'Mountain trails',
    title: 'Take the path higher.',
    layout: 'col-span-1 row-span-1 lg:col-start-2 lg:row-start-2',
    featured: false,
  },
  {
    placeId: 'someshwar-waterfall',
    label: 'Nature & waterfalls',
    title: 'Follow the sound of water.',
    layout: 'col-span-2 row-span-2 lg:col-span-1 lg:col-start-3 lg:row-start-1 lg:row-span-2',
    featured: true,
  },
  {
    placeId: 'pandavleni-caves',
    label: 'Ancient history',
    title: 'Walk through the past.',
    layout: 'col-span-1 row-span-1 lg:col-start-4 lg:row-start-1',
    featured: false,
  },
  {
    placeId: 'kalaram-temple',
    label: 'Local culture',
    title: 'Discover old Nashik.',
    layout: 'col-span-1 row-span-1 lg:col-start-4 lg:row-start-2',
    featured: false,
  },
];

export function DiscoverExperiences() {
  const reduceMotion = useReducedMotion();

  return (
    <section
      id="experiences"
      aria-labelledby="experiences-title"
      className="w-full scroll-mt-24 bg-white px-4 py-16 sm:px-8 sm:py-20 lg:px-12 lg:py-24"
    >
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={reduceMotion ? false : { opacity: 0, y: 18 }}
          whileInView={reduceMotion ? undefined : { opacity: 1, y: 0, rotateX: 0, scale: 1 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.5 }}
          className="mb-10 text-center sm:mb-12"
        >
          <p className="mb-3 text-[11px] font-semibold uppercase tracking-[0.2em] text-deep-violet">
            More than places
          </p>
          <h2
            id="experiences-title"
            className="text-3xl font-bold tracking-tight text-on-surface sm:text-4xl lg:text-5xl"
          >
            Discover experiences.
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-sm leading-relaxed text-on-surface-variant sm:text-base">
            Find the side of Nashik that feels like your kind of journey.
          </p>
        </motion.div>

        <div className="grid auto-rows-[190px] grid-cols-2 gap-3 sm:auto-rows-[250px] sm:gap-4 lg:auto-rows-[270px] lg:grid-cols-4 lg:gap-5">
          {EXPERIENCE_CARDS.map((card, index) => {
            const place = NASHIK_REAL_PLACES.find((item) => item.id === card.placeId);
            if (!place) return null;

            return (
              <motion.a
                key={card.placeId}
                href={place.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={'Discover ' + place.name + ' on Google Maps'}
                initial={reduceMotion ? false : { opacity: 0, y: 44, rotateX: 8, scale: 0.96 }}
                whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.1 }}
                transition={{ duration: 0.72, delay: Math.min(index * 0.075, 0.3), ease: [0.22, 1, 0.36, 1] }}
                whileHover={reduceMotion ? undefined : { y: -10, rotateX: 2, rotateY: -2, scale: 1.018 }}
                style={{ perspective: 1100, transformStyle: 'preserve-3d' }}
                className={'group relative min-h-0 overflow-hidden rounded-[24px] bg-slate-900 shadow-[0_18px_42px_rgba(21,17,35,0.14)] ring-1 ring-inset ring-black/5 ' + card.layout}
              >
                <Image
                  src={place.image}
                  alt={place.name}
                  fill
                  sizes="(max-width: 640px) 50vw, (max-width: 1024px) 50vw, 25vw"
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-black/5 transition-colors duration-500 group-hover:from-black/95" />
                <div className="absolute inset-0 bg-gradient-to-br from-white/15 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                <span className="absolute left-4 top-4 rounded-full border border-white/25 bg-black/30 px-3.5 py-1.5 text-[10px] font-medium tracking-wide text-white/90 backdrop-blur-sm">
                  {card.label}
                </span>
                <span className="absolute right-4 top-4 flex h-8 w-8 items-center justify-center rounded-full bg-white/85 text-slate-900 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
                  <ArrowUpRight className="h-4 w-4" />
                </span>
                <div className="absolute inset-x-0 bottom-0 p-4 sm:p-5">
                  <h3 className="text-lg font-bold leading-tight tracking-tight text-white sm:text-xl lg:text-2xl">
                    {place.name}
                  </h3>
                  {card.featured && (
                    <p className="mt-2 line-clamp-2 max-w-sm text-xs leading-relaxed text-white/85 sm:text-sm">
                      {place.highlight}
                    </p>
                  )}
                  {!card.featured && (
                    <p className="mt-1 text-xs text-white/75">
                      {card.title}
                    </p>
                  )}
                </div>
              </motion.a>
            );
          })}
        </div>
      </div>
    </section>
  );
}
