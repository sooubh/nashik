'use client';

import React from 'react';
import Image from 'next/image';
import { motion, useReducedMotion } from 'framer-motion';

const PREVIEW_SCREENS = [
  {
    id: 'explore',
    title: 'Explore',
    image: '/images/screenshots/explore.png',
    position: 'relative z-0 -mr-3 translate-y-7 -rotate-[8deg] sm:mr-0 sm:translate-y-10',
    size: 'h-[214px] w-[104px] sm:h-[370px] sm:w-[180px] lg:h-[430px] lg:w-[210px]',
  },
  {
    id: 'home',
    title: 'Home',
    image: '/images/screenshots/home.png',
    position: 'relative z-10',
    size: 'h-[296px] w-[145px] sm:h-[440px] sm:w-[215px] lg:h-[490px] lg:w-[240px]',
  },
  {
    id: 'planner',
    title: 'Trip planner',
    image: '/images/screenshots/ai-planner.png',
    position: 'relative z-0 -ml-3 translate-y-7 rotate-[8deg] sm:ml-0 sm:translate-y-10',
    size: 'h-[214px] w-[104px] sm:h-[370px] sm:w-[180px] lg:h-[430px] lg:w-[210px]',
  },
];

export function AppShowcase() {
  const reduceMotion = useReducedMotion();

  return (
    <section
      id="app-preview"
      aria-labelledby="app-preview-title"
      className="relative w-full scroll-mt-24 overflow-hidden bg-[#F4F1F8] px-4 py-16 sm:px-8 sm:py-20 lg:px-12 lg:py-24"
    >
      <div className="pointer-events-none absolute left-1/2 top-[38%] h-[340px] w-[min(760px,90vw)] -translate-x-1/2 -translate-y-1/2 rounded-full bg-white/80 blur-3xl" />
      <div className="relative mx-auto max-w-6xl">
        <motion.div
          initial={reduceMotion ? false : { opacity: 0, y: 18 }}
          whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.5 }}
          className="mx-auto mb-10 max-w-2xl text-center sm:mb-14"
        >
          <p className="mb-3 text-[11px] font-semibold uppercase tracking-[0.2em] text-deep-violet">
            App preview
          </p>
          <h2
            id="app-preview-title"
            className="text-3xl font-bold leading-tight tracking-tight text-on-surface sm:text-4xl lg:text-5xl"
          >
            Your Nashik journey,
            <span className="block font-editorial font-normal italic text-deep-violet">
              right in your pocket.
            </span>
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-sm leading-relaxed text-on-surface-variant sm:text-base">
            A closer look at the tools that help you discover, save and plan your next trip.
          </p>
        </motion.div>

        <motion.div
          initial={reduceMotion ? false : { opacity: 0, y: 28 }}
          whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.16 }}
          transition={{ duration: 0.65, ease: 'easeOut' }}
          className="relative flex items-center justify-center overflow-hidden px-0 pb-5 pt-2 sm:gap-4 sm:overflow-visible"
        >
          {PREVIEW_SCREENS.map((screen) => (
            <div
              key={screen.id}
              className={'shrink-0 rounded-[2.25rem] border-[6px] border-[#17151D] bg-[#17151D] p-[3px] shadow-[0_28px_70px_rgba(35,20,66,0.18)] sm:rounded-[2.6rem] sm:border-[7px] sm:p-1 ' + screen.position + ' ' + screen.size}
            >
              <div className="relative h-full w-full overflow-hidden rounded-[1.8rem] bg-slate-100 sm:rounded-[2.1rem]">
                <Image
                  src={screen.image}
                  alt={screen.title + ' screen in the Trivio app'}
                  fill
                  sizes="(max-width: 640px) 145px, (max-width: 1024px) 215px, 240px"
                  className="object-cover object-top"
                />
              </div>
            </div>
          ))}
        </motion.div>

        <div className="mt-5 flex flex-wrap items-center justify-center gap-x-5 gap-y-2 text-[11px] font-medium tracking-wide text-on-surface-variant sm:mt-8 sm:gap-x-8 sm:text-xs">
          <span>Explore places</span>
          <span className="h-1 w-1 rounded-full bg-deep-violet/50" />
          <span>Save favourites</span>
          <span className="h-1 w-1 rounded-full bg-deep-violet/50" />
          <span>Plan your route</span>
        </div>
      </div>
    </section>
  );
}
