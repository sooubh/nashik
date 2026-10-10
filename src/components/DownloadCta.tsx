'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Download, Smartphone } from 'lucide-react';

export function DownloadCta() {
  return (
    <section id="download" className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="relative rounded-3xl sm:rounded-4xl bg-gradient-to-br from-brand-950 via-brand-900 to-slate-950 text-white p-6 sm:p-10 lg:p-16 border border-white/10 shadow-2xl overflow-hidden text-center lg:text-left"
      >
        {/* Ambient Glows */}
        <div className="absolute -top-24 -right-24 w-80 sm:w-96 h-80 sm:h-96 bg-brand-400/20 rounded-full blur-[80px] pointer-events-none" />
        <div className="absolute -bottom-24 -left-24 w-80 sm:w-96 h-80 sm:h-96 bg-brand-300/10 rounded-full blur-[80px] pointer-events-none" />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center relative z-10">
          <div className="lg:col-span-8 space-y-5 sm:space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/10 text-brand-100 text-[11px] sm:text-xs font-bold uppercase tracking-wider">
              <Smartphone className="w-4 h-4" />
              <span>Available on Android</span>
            </div>

            <h2 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight leading-tight">
              Ready to explore Nashik?
            </h2>

            <p className="text-slate-300 text-sm sm:text-base leading-relaxed max-w-2xl mx-auto lg:mx-0">
              Download NashikExplore to discover places, plan your itineraries, and keep your favorite spots organized in one clean, reliable mobile companion.
            </p>

            <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center lg:justify-start gap-4 pt-2 sm:pt-4 max-w-md mx-auto lg:mx-0">
              <a
                href="https://play.google.com/store/apps/details?id=com.nashikexplore.app"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Download NashikExplore on Google Play (opens in a new window)"
                className="inline-flex items-center justify-center gap-3 px-6 sm:px-8 py-3.5 sm:py-4 rounded-xl bg-brand-blue hover:bg-brand-700 text-white font-bold text-sm shadow-glow-sm transition-all active:scale-[0.97] min-h-[48px]"
              >
                <Download className="w-5 h-5" />
                <span>Get it on Google Play</span>
              </a>
            </div>

            <p className="text-xs text-slate-400">
              Compatible with Android devices • Free download with optional ad-free upgrade
            </p>
          </div>

          <div className="lg:col-span-4 flex justify-center">
            <div className="relative w-36 h-36 sm:w-44 sm:h-44 rounded-3xl overflow-hidden border border-white/15 shadow-2xl bg-white/5 backdrop-blur-xl flex items-center justify-center p-4">
              <div className="relative w-24 h-24 sm:w-28 sm:h-28">
                <Image
                  src="/images/logo.png"
                  alt="NashikExplore App Icon"
                  fill
                  className="object-contain"
                />
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
