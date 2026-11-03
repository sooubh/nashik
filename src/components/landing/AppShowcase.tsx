'use client';

import React from 'react';
import Image from 'next/image';
import { motion, useReducedMotion } from 'framer-motion';

const AUDIENCES = [
  'Weekend explorers',
  'Heritage lovers',
  'Nature seekers',
  'Food explorers',
  'Local travellers',
];

export function AppShowcase() {
  const reduceMotion = useReducedMotion();

  return (
    <section
      id="app-preview"
      aria-labelledby="app-preview-title"
      className="relative w-full scroll-mt-24 overflow-hidden bg-white px-4 pb-10 pt-16 sm:px-8 sm:pb-14 sm:pt-20 lg:px-12 lg:pb-16 lg:pt-24"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-[24%] mx-auto h-[360px] max-w-5xl rounded-full bg-[radial-gradient(ellipse_at_center,rgba(204,226,250,0.52)_0%,rgba(235,244,253,0.25)_45%,transparent_72%)] blur-2xl"
      />

      <div className="relative mx-auto max-w-7xl">
        <motion.div
          initial={reduceMotion ? false : { opacity: 0, y: 24 }}
          whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="mx-auto max-w-4xl text-center"
        >
          <p className="mb-4 text-[10px] font-semibold uppercase tracking-[0.24em] text-deep-violet sm:text-[11px]">
            Your Nashik travel companion
          </p>
          <h2
            id="app-preview-title"
            className="mx-auto max-w-4xl text-[2rem] font-bold leading-[1.08] tracking-[-0.045em] text-on-surface sm:text-4xl md:text-5xl lg:text-[3.65rem]"
          >
            Make every Nashik trip
            <span className="block font-editorial font-normal italic tracking-[-0.025em] text-[#7A7484]">
              easier to discover.
            </span>
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-on-surface-variant sm:mt-5 sm:text-base">
            Find remarkable places, local experiences and useful travel details — all in one simple guide.
          </p>
        </motion.div>

        <motion.div
          initial={reduceMotion ? false : { opacity: 0, y: 18 }}
          whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.65, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
          className="mt-9 text-center sm:mt-11"
        >
          <p className="mb-4 text-[10px] font-medium tracking-[0.16em] text-on-surface-variant/65 sm:text-[11px]">
            A GUIDE FOR EVERY KIND OF EXPLORER
          </p>
          <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3">
            {AUDIENCES.map((audience) => (
              <span
                key={audience}
                className="rounded-full border border-[#e8e5ed] bg-white/90 px-3.5 py-2 text-[10px] font-semibold tracking-wide text-[#5B5664] shadow-[0_3px_12px_rgba(31,22,47,0.035)] sm:px-4 sm:text-[11px]"
              >
                # {audience}
              </span>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={reduceMotion ? false : { opacity: 0, y: 42, scale: 0.985 }}
          whileInView={reduceMotion ? undefined : { opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, amount: 0.12 }}
          transition={{ duration: 0.9, delay: 0.12, ease: [0.22, 1, 0.36, 1] }}
          className="relative mx-auto mt-7 w-full max-w-[1360px] sm:mt-9 lg:mt-10"
        >
          <Image
            src="/images/app-preview/trivio-app-preview.webp"
            alt="Trivio travel guide app preview showing Nashik destinations, temple and waterfall discoveries, and a trip route planner across three phone screens"
            width={1536}
            height={1024}
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 96vw, 1360px"
            className="block h-auto w-full select-none object-contain"
            draggable={false}
          />
        </motion.div>
      </div>
    </section>
  );
}
