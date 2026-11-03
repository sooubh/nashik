'use client';

import React from 'react';
import Image from 'next/image';
import { motion, useReducedMotion, useScroll, useSpring, useTransform } from 'framer-motion';
import { Download } from 'lucide-react';
import { SITE_CONFIG } from '@/config/site';

export function HeroSection() {
  const shouldReduceMotion = useReducedMotion();
  const heroRef = React.useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ['start start', 'end start'],
  });
  const wordmarkY = useSpring(
    useTransform(scrollYProgress, [0, 0.62, 1], [0, -18, -72]),
    { stiffness: 105, damping: 28, mass: 0.35 },
  );
  const wordmarkOpacity = useTransform(scrollYProgress, [0, 0.58, 0.9, 1], [1, 1, 0.35, 0]);
  const foregroundY = useSpring(
    useTransform(scrollYProgress, [0, 1], [0, -34]),
    { stiffness: 90, damping: 28, mass: 0.4 },
  );

  return (
    <section ref={heroRef} className="relative h-screen min-h-[640px] w-full overflow-hidden bg-slate-950 text-white select-none max-sm:h-[100svh] max-sm:min-h-[680px]">
      {/* One original sky image is used across desktop and mobile. */}
      <div className="absolute inset-0 z-0 h-full w-full select-none">
        <div className="absolute inset-0 h-full w-full">
          <Image
            src="/images/trivio/hero-sky.jpg"
            alt=""
            aria-hidden="true"
            fill
            priority
            fetchPriority="high"
            quality={95}
            sizes="100vw"
            className="scale-[1.002] object-cover object-center max-sm:scale-100"
          />
        </div>
        <div className="pointer-events-none absolute inset-x-0 top-0 h-36 bg-gradient-to-b from-slate-950/60 via-slate-950/20 to-transparent" />
      </div>

      {/* The oversized wordmark sits behind the transparent mountain foreground. */}
      <motion.div
        className="pointer-events-none absolute inset-x-0 top-[34%] z-[5] flex w-full justify-center px-2 sm:top-[11%] md:top-[9%] lg:top-[7%]"
        style={shouldReduceMotion ? undefined : { y: wordmarkY, opacity: wordmarkOpacity }}
      >
        <motion.h1
          initial={shouldReduceMotion ? false : { opacity: 0, y: 24 }}
          animate={shouldReduceMotion ? undefined : { opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: 'easeOut' }}
          className="w-full select-none text-center font-sans text-[21vw] font-black uppercase leading-none tracking-tight text-white drop-shadow-[0_12px_40px_rgba(0,0,0,0.6)] sm:text-[19.2vw]"
        >
          NASHIK
        </motion.h1>
      </motion.div>

      {/* Reuse the exact desktop foreground cutout; responsive object-fit frames it for phones. */}
      <motion.div className="pointer-events-none absolute inset-0 z-10 h-full w-full select-none" style={shouldReduceMotion ? undefined : { y: foregroundY }}>
        <div className="absolute inset-0 h-full w-full">
          <Image
            src="/images/trivio/hero-temple-cutout.png"
            alt="Trimbakeshwar Temple and Brahmagiri Mountain"
            aria-hidden="true"
            fill
            priority
            fetchPriority="high"
            quality={95}
            sizes="100vw"
            className="scale-[1.002] object-cover object-center max-sm:scale-100 max-sm:object-[center_50%]"
          />
        </div>
      </motion.div>

      {/* Softly blends the hero artwork into the following destination section. */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-x-0 bottom-0 z-[15] h-24 bg-gradient-to-b from-transparent to-[#F4F1F8] sm:h-28" />

      {/* The primary hero action now takes visitors directly to Google Play. */}
      <div className="pointer-events-auto absolute left-1/2 top-[51%] z-20 -translate-x-1/2 sm:top-[52%] md:top-[53%] max-sm:top-[73%]">
        <a
          href={SITE_CONFIG.playStoreUrl}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Download Trivio on Google Play"
          className="group inline-flex min-h-12 items-center justify-center gap-2.5 whitespace-nowrap rounded-full border border-white/75 bg-black/35 px-7 py-3 text-xs font-semibold uppercase tracking-[0.2em] text-white shadow-[0_8px_30px_rgba(0,0,0,0.5)] backdrop-blur-md transition-all duration-200 hover:scale-105 hover:border-white hover:bg-black/55 active:scale-95 sm:px-10 sm:text-sm"
        >
          <Download className="h-4 w-4 transition-transform group-hover:translate-y-0.5" />
          <span>DOWNLOAD NOW</span>
        </a>
      </div>

      {/* Desktop / tablet location accent. Hidden on narrow phones to keep the art clear. */}
      <div className="pointer-events-none absolute left-6 top-[36%] z-20 hidden flex-col items-center sm:flex sm:left-10 sm:top-[38%] lg:left-14">
        <span className="text-[10px] font-semibold uppercase tracking-[0.32em] text-white/85 sm:text-[11px] [writing-mode:vertical-rl]">
          TRIMBAKESHWAR
        </span>
        <div className="mt-3 h-16 w-[1.5px] bg-white/60 sm:h-24" />
      </div>

      {/* Existing desktop social links remain in place. */}
      <div className="pointer-events-auto absolute bottom-6 right-6 z-20 hidden items-center gap-5 text-white sm:flex sm:bottom-8 sm:right-10 sm:gap-6 lg:right-14">
        <a
          href="https://youtube.com"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Trivio YouTube Channel"
          className="opacity-90 transition-transform hover:scale-110 hover:opacity-100"
        >
          <svg className="h-5 w-5 fill-current" viewBox="0 0 24 24" aria-hidden="true">
            <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
          </svg>
        </a>
        <a
          href="https://facebook.com"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Trivio Facebook Page"
          className="opacity-90 transition-transform hover:scale-110 hover:opacity-100"
        >
          <svg className="h-5 w-5 fill-current" viewBox="0 0 24 24" aria-hidden="true">
            <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
          </svg>
        </a>
        <a
          href="https://twitter.com"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Trivio Twitter / X Feed"
          className="opacity-90 transition-transform hover:scale-110 hover:opacity-100"
        >
          <svg className="h-5 w-5 fill-current" viewBox="0 0 24 24" aria-hidden="true">
            <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 23.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
          </svg>
        </a>
        <a
          href="https://instagram.com"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Trivio Instagram"
          className="opacity-90 transition-transform hover:scale-110 hover:opacity-100"
        >
          <svg className="h-5 w-5 fill-current" viewBox="0 0 24 24" aria-hidden="true">
            <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
          </svg>
        </a>
      </div>
    </section>
  );
}
