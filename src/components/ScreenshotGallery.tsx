'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { Maximize2, X, ChevronLeft, ChevronRight } from 'lucide-react';
import { appScreenshotsData } from '@/data/screenshots';

export function ScreenshotGallery() {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (selectedIndex === null) return;
      if (e.key === 'Escape') setSelectedIndex(null);
      if (e.key === 'ArrowRight') {
        setSelectedIndex((prev) => (prev !== null ? (prev + 1) % appScreenshotsData.length : null));
      }
      if (e.key === 'ArrowLeft') {
        setSelectedIndex((prev) =>
          prev !== null ? (prev - 1 + appScreenshotsData.length) % appScreenshotsData.length : null
        );
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedIndex]);

  const activeScreenshot = selectedIndex !== null ? appScreenshotsData[selectedIndex] : null;

  return (
    <section id="gallery" className="py-24 px-4 sm:px-6 md:px-8 bg-slate-50/50 dark:bg-slate-900/20 border-y border-slate-200/80 dark:border-slate-800/80">
      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs uppercase font-extrabold tracking-widest text-brand-blue dark:text-brand-400 mb-2 block">
            Visual Gallery
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white">
            Android Production Screenshots
          </h2>
          <p className="text-slate-600 dark:text-slate-400 mt-4 text-base leading-relaxed">
            High-definition captures from our production Android release. Click any screen to view in full resolution.
          </p>
        </div>

        {/* Responsive Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6">
          {appScreenshotsData.map((screen, idx) => (
            <motion.div
              key={screen.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.06 }}
              onClick={() => setSelectedIndex(idx)}
              className="group cursor-pointer flex flex-col items-center select-none"
            >
              <div className="relative w-full aspect-[9/19] rounded-[32px] bg-slate-950 p-2 border-2 border-slate-800 shadow-soft-md group-hover:shadow-card-hover group-hover:-translate-y-2 transition-all duration-300 overflow-hidden">
                <div className="relative w-full h-full rounded-[22px] overflow-hidden bg-slate-900">
                  <Image
                    src={screen.src}
                    alt={screen.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                    sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 16vw"
                  />
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <div className="p-2.5 rounded-full bg-white/20 backdrop-blur-md text-white">
                      <Maximize2 className="w-4 h-4" />
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-3 text-center">
                <span className="text-xs font-bold text-slate-900 dark:text-slate-100 block">
                  {screen.title}
                </span>
                <span className="text-[10px] text-slate-500 dark:text-slate-400 font-semibold">
                  {screen.tag}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedIndex !== null && activeScreenshot && (
          <div
            onClick={() => setSelectedIndex(null)}
            className="fixed inset-0 z-50 bg-black/85 backdrop-blur-md flex items-center justify-center p-4"
          >
            <button
              onClick={() => setSelectedIndex(null)}
              className="absolute top-6 right-6 z-50 p-3 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
              aria-label="Close preview"
            >
              <X className="w-6 h-6" />
            </button>

            <button
              onClick={(e) => {
                e.stopPropagation();
                setSelectedIndex((prev) =>
                  prev !== null ? (prev - 1 + appScreenshotsData.length) % appScreenshotsData.length : null
                );
              }}
              className="hidden sm:flex absolute left-6 top-1/2 -translate-y-1/2 z-50 p-3 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors items-center justify-center"
              aria-label="Previous screenshot"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

            <button
              onClick={(e) => {
                e.stopPropagation();
                setSelectedIndex((prev) =>
                  prev !== null ? (prev + 1) % appScreenshotsData.length : null
                );
              }}
              className="hidden sm:flex absolute right-6 top-1/2 -translate-y-1/2 z-50 p-3 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors items-center justify-center"
              aria-label="Next screenshot"
            >
              <ChevronRight className="w-6 h-6" />
            </button>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ type: 'spring', duration: 0.3 }}
              onClick={(e) => e.stopPropagation()}
              className="flex flex-col items-center max-w-sm w-full"
            >
              <div className="relative w-full aspect-[9/19] bg-slate-950 rounded-[44px] p-3 border-4 border-slate-700 shadow-2xl overflow-hidden">
                <div className="relative w-full h-full rounded-[32px] overflow-hidden bg-slate-900">
                  <Image
                    src={activeScreenshot.src}
                    alt={activeScreenshot.title}
                    fill
                    className="object-contain"
                    sizes="380px"
                  />
                </div>
              </div>

              <div className="mt-4 text-center text-white">
                <h4 className="font-extrabold text-base">{activeScreenshot.title}</h4>
                <p className="text-xs text-slate-300 mt-1 max-w-xs">{activeScreenshot.description}</p>
                <div className="flex items-center justify-center gap-1.5 mt-3">
                  {appScreenshotsData.map((_, i) => (
                    <button
                      key={i}
                      onClick={() => setSelectedIndex(i)}
                      className={`h-1.5 rounded-full transition-all ${
                        selectedIndex === i ? 'w-6 bg-brand-blue' : 'w-2 bg-white/40'
                      }`}
                      aria-label={`Go to screenshot ${i + 1}`}
                    />
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
