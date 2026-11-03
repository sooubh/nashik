'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { motion, useReducedMotion } from 'framer-motion';
import { Play, X } from 'lucide-react';

export function HeroSection() {
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);
  const shouldReduceMotion = useReducedMotion();

  return (
    <section className="relative h-screen min-h-[640px] w-full overflow-hidden bg-slate-950 text-white select-none">
      {/* =========================================================================
          LAYER 0 (z-0): Clean Sky Backdrop (Sky & Clouds)
         ========================================================================= */}
      <div className="absolute inset-0 w-full h-full pointer-events-none select-none z-0">
        <Image
          src="/images/trivio/hero-sky.jpg"
          alt="Twilight blue sky over Nashik"
          fill
          priority
          fetchPriority="high"
          quality={95}
          sizes="100vw"
          className="object-cover object-center scale-[1.002]"
        />
        {/* Subtle Top Gradient for Navigation Legibility */}
        <div className="absolute inset-x-0 top-0 h-36 bg-gradient-to-b from-slate-950/60 via-slate-950/20 to-transparent pointer-events-none" />
      </div>

      {/* =========================================================================
          LAYER 1 (z-[5]): Massive 3D NASHIK Display Typography
          Sits directly on top of the sky, behind the mountain & temple cutout!
         ========================================================================= */}
      <motion.div
        initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, ease: 'easeOut' }}
        className="absolute inset-x-0 top-[13%] sm:top-[11%] md:top-[9%] lg:top-[7%] z-[5] w-full flex justify-center pointer-events-none px-2"
      >
        <h1 className="text-[19.2vw] font-black tracking-tight text-white leading-none font-sans drop-shadow-[0_12px_40px_rgba(0,0,0,0.6)] select-none uppercase text-center w-full">
          NASHIK
        </h1>
      </motion.div>

      {/* =========================================================================
          LAYER 2 (z-10): Transparent Cutout of Mountain and Temple
          Superimposed with exact 1024x576 alignment over the NASHIK letters!
         ========================================================================= */}
      <div className="absolute inset-0 w-full h-full pointer-events-none select-none z-10">
        <Image
          src="/images/trivio/hero-temple-cutout.png"
          alt="Trimbakeshwar Temple and Brahmagiri Mountain"
          aria-hidden="true"
          fill
          priority
          fetchPriority="high"
          quality={95}
          sizes="100vw"
          className="object-cover object-center scale-[1.002]"
        />
      </div>

      {/* =========================================================================
          LAYER 3 (z-20): Interactive UI Elements in Front of the Cutout
         ========================================================================= */}
      {/* Centered WATCH TOUR Pill Button */}
      <div className="absolute left-1/2 -translate-x-1/2 top-[51%] sm:top-[52%] md:top-[53%] z-20 pointer-events-auto">
        <button
          type="button"
          onClick={() => setIsVideoModalOpen(true)}
          aria-label="Watch Nashik Virtual Tour"
          className="group inline-flex items-center justify-center gap-2 px-9 sm:px-12 py-2.5 sm:py-3 rounded-full border border-white/75 hover:border-white bg-black/30 hover:bg-black/55 backdrop-blur-md text-white text-xs sm:text-sm font-semibold tracking-[0.24em] uppercase transition-all duration-200 hover:scale-105 active:scale-95 shadow-[0_8px_30px_rgba(0,0,0,0.5)]"
        >
          <span>WATCH TOUR</span>
        </button>
      </div>

      {/* Left Vertical TRIMBAKESHWAR Accent with Downward Rule */}
      <div className="absolute left-6 sm:left-10 lg:left-14 top-[36%] sm:top-[38%] z-20 flex flex-col items-center pointer-events-auto">
        <span className="text-[10px] sm:text-[11px] font-semibold tracking-[0.32em] text-white/85 uppercase [writing-mode:vertical-rl]">
          TRIMBAKESHWAR
        </span>
        <div className="w-[1.5px] h-16 sm:h-24 bg-white/60 mt-3" />
      </div>

      {/* Right Social Media Strip */}
      <div className="absolute right-6 sm:right-10 lg:right-14 bottom-6 sm:bottom-8 z-20 flex items-center gap-5 sm:gap-6 text-white pointer-events-auto">
        <a
          href="https://youtube.com"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Trivio YouTube Channel"
          className="hover:scale-110 transition-transform opacity-90 hover:opacity-100"
        >
          <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
            <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
          </svg>
        </a>
        <a
          href="https://facebook.com"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Trivio Facebook Page"
          className="hover:scale-110 transition-transform opacity-90 hover:opacity-100"
        >
          <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
            <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
          </svg>
        </a>
        <a
          href="https://twitter.com"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Trivio Twitter / X Feed"
          className="hover:scale-110 transition-transform opacity-90 hover:opacity-100"
        >
          <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
            <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 23.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
          </svg>
        </a>
        <a
          href="https://instagram.com"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Trivio Instagram"
          className="hover:scale-110 transition-transform opacity-90 hover:opacity-100"
        >
          <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
            <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
          </svg>
        </a>
      </div>

      {/* Video Tour Modal */}
      {isVideoModalOpen && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Virtual Tour Preview"
          className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-8 bg-slate-950/85 backdrop-blur-md"
          onClick={() => setIsVideoModalOpen(false)}
        >
          <div
            className="relative w-full max-w-4xl bg-slate-900 rounded-3xl overflow-hidden shadow-2xl border border-white/20"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="flex items-center justify-between px-6 py-4 border-b border-white/10 bg-slate-950/50">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-signal-lime animate-pulse" />
                <h3 className="font-bold text-white text-base">Nashik Virtual Tour Experience</h3>
              </div>
              <button
                type="button"
                onClick={() => setIsVideoModalOpen(false)}
                aria-label="Close Tour Preview"
                className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Video Canvas / Teaser Player */}
            <div className="relative aspect-video w-full bg-black flex items-center justify-center">
              <Image
                src="/images/trivio/hero-trimbakeshwar.jpg"
                alt="Trimbakeshwar Temple Sanctum"
                fill
                className="object-cover opacity-60"
              />
              <div className="relative z-10 text-center max-w-lg px-6">
                <div className="w-16 h-16 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center mx-auto mb-4 border border-white/40">
                  <Play className="w-7 h-7 fill-white text-white translate-x-0.5" />
                </div>
                <h4 className="text-2xl font-bold text-white mb-2">Trimbakeshwar & Brahmagiri Foothills</h4>
                <p className="text-sm text-white/80 leading-relaxed">
                  Sacred Jyotirlinga sanctum, Brahmagiri mist ridges, and Kushavarta holy water tank. Download Trivio for GPS trail coordinates, aarti timings, and guided routes.
                </p>
                <a
                  href="#tours"
                  onClick={() => setIsVideoModalOpen(false)}
                  className="mt-6 inline-block bg-white text-slate-950 px-6 py-2.5 rounded-full font-bold text-sm hover:bg-slate-100 transition-colors"
                >
                  Explore Tour Packages
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
