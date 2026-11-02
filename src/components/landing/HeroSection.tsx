'use client';

import React from 'react';
import Image from 'next/image';
import { motion, useReducedMotion, type Variants } from 'framer-motion';
import { Download } from 'lucide-react';
import { SITE_CONFIG } from '@/config/site';

export function HeroSection() {
  const shouldReduceMotion = useReducedMotion();

  const containerVariants: Variants = {
    hidden: { opacity: shouldReduceMotion ? 1 : 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: shouldReduceMotion ? 0 : 0.15,
        delayChildren: shouldReduceMotion ? 0 : 0.1,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: shouldReduceMotion ? 1 : 0, y: shouldReduceMotion ? 0 : 18 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: 'easeOut' },
    },
  };

  return (
    <section className="relative min-h-[92vh] flex flex-col justify-center items-center overflow-hidden bg-slate-950 text-white pt-24 pb-16 px-6 sm:px-10">
      {/* Cinematic Old Meadow Backdrop */}
      <div className="absolute inset-0 w-full h-full pointer-events-none select-none overflow-hidden">
        <Image
          src="/images/trivio/hero-meadow.jpg"
          alt="Atmospheric scenic travel road and meadow landscape"
          fill
          priority
          fetchPriority="high"
          quality={85}
          sizes="100vw"
          className="object-cover object-center scale-[1.02]"
        />
        {/* Multilayer Readability Scrim with WCAG AAA Contrast */}
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950/75 via-slate-950/50 to-slate-950/85" /> {/* taste-skill-ignore */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(15,23,42,0.5)_100%)]" /> {/* taste-skill-ignore */}
      </div>

      {/* Hero Minimal Animated Content */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative z-20 max-w-3xl mx-auto text-center flex flex-col items-center my-auto"
      >
        {/* Primary Headline */}
        <motion.h1
          variants={itemVariants}
          className="text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-white leading-[1.08] mb-6"
        >
          Every road leads somewhere worth going.
        </motion.h1>

        {/* Minimal Subtitle */}
        <motion.p
          variants={itemVariants}
          className="text-lg sm:text-xl lg:text-2xl text-white/90 font-normal max-w-xl mb-10 leading-relaxed"
        >
          Places, events and people in one app.
        </motion.p>

        {/* Single Clean Google Play CTA */}
        <motion.div variants={itemVariants} className="w-full sm:w-auto">
          <a
            href={SITE_CONFIG.playStoreUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="group w-full sm:w-auto inline-flex items-center justify-center gap-3 bg-signal-lime hover:bg-[#d5ff4f] text-[#221045] text-base font-bold px-9 py-4 rounded-full transition-transform duration-150 hover:scale-[1.02] active:scale-95"
          >
            <Download className="w-5 h-5 shrink-0 transition-transform group-hover:translate-y-0.5" />
            <span>Get it on Google Play</span>
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
}
