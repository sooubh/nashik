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

  // Lock body scroll when lightbox is open
  useEffect(() => {
    if (selectedIndex !== null) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [selectedIndex]);

  const activeScreenshot = selectedIndex !== null ? appScreenshotsData[selectedIndex] : null;

  return (
    <section id="gallery" className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8 section-bg-alt section-border-t">
      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-14 sm:mb-18">
          <span className="text-xs uppercase font-bold tracking-widest text-brand-blue dark:text-brand-400 mb-2 block">
            Visual Gallery
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white">
            Android Production Screenshots
          </h2>
          <p className="text-slate-600 dark:text-slate-400 mt-3 sm:mt-4 text-sm sm:text-base leading-relaxed">
            High-definition captures from our production Android release. Click any screen to view in full resolution.
          </p>
        </div>

        {/* Responsive Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 sm:gap-6">
          {appScreenshotsData.map((screen, idx) => (
            <motion.div
              key={screen.id}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.06, ease: 'easeOut' }}
              onClick={() => setSelectedIndex(idx)}
              className="group cursor-pointer flex flex-col select-none"
            >
              <div className="relative w-full aspect-[9/19] rounded-2xl screenshot-card overflow-hidden transition-all duration-300 shadow-card dark:shadow-card-dark hover:shadow-card-hover dark:hover:shadow-card-dark-hover hover:-translate-y-1">
                <Image
                  src={screen.src}
                  alt={screen.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                  sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 16vw"
                />
                <div className="absolute inset-0 bg-black/30 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <div className="p-2 sm:p-2.5 rounded-full bg-white/20 backdrop-blur-md text-white">
                    <Maximize2 className="w-4 h-4" />
                  </div>
                </div>
              </div>

              <div className="mt-3 sm:mt-4 text-center">
                <span className="text-base sm:text-lg font-bold text-slate-900 dark:text-white block truncate">
                  {screen.title}
                </span>
                <span className="text-sm text-slate-500 dark:text-slate-400 font-medium">
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
            className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4 sm:p-6"
          >
            {/* Close Button with safe padding */}
            <button
              onClick={() => setSelectedIndex(null)}
              className="absolute top-4 right-4 sm:top-6 sm:right-6 z-50 p-2.5 sm:p-3 rounded-full bg-white/15 hover:bg-white/25 text-white transition-colors min-h-[44px] min-w-[44px] flex items-center justify-center cursor-pointer"
              aria-label="Close preview"
            >
              <X className="w-5 h-5 sm:w-6 sm:h-6" />
            </button>

            {/* Previous Button */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                setSelectedIndex((prev) =>
                  prev !== null ? (prev - 1 + appScreenshotsData.length) % appScreenshotsData.length : null
                );
              }}
              className="absolute left-2 sm:left-6 top-1/2 -translate-y-1/2 z-50 p-2.5 sm:p-3 rounded-full bg-white/15 hover:bg-white/25 text-white transition-colors flex items-center justify-center min-h-[44px] min-w-[44px] cursor-pointer"
              aria-label="Previous screenshot"
            >
              <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6" />
            </button>

            {/* Next Button */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                setSelectedIndex((prev) =>
                  prev !== null ? (prev + 1) % appScreenshotsData.length : null
                );
              }}
              className="absolute right-2 sm:right-6 top-1/2 -translate-y-1/2 z-50 p-2.5 sm:p-3 rounded-full bg-white/15 hover:bg-white/25 text-white transition-colors flex items-center justify-center min-h-[44px] min-w-[44px] cursor-pointer"
              aria-label="Next screenshot"
            >
              <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6" />
            </button>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 16 }}
              transition={{ duration: 0.3, ease: 'easeOut' }}
              onClick={(e) => e.stopPropagation()}
              className="flex flex-col items-center max-w-[320px] sm:max-w-[400px] w-full mx-auto"
            >
              <div className="relative w-full aspect-[9/19] rounded-2xl shadow-soft-xl overflow-hidden bg-slate-900">
                <Image
                  src={activeScreenshot.src}
                  alt={activeScreenshot.title}
                  fill
                  className="object-contain"
                  sizes="(max-width: 640px) 320px, 400px"
                />
              </div>

              <div className="mt-4 text-center text-white">
                <h4 className="font-bold text-base sm:text-lg">{activeScreenshot.title}</h4>
                <p className="text-sm text-slate-300 mt-1 max-w-xs">{activeScreenshot.description}</p>
                <div className="flex items-center justify-center gap-1 mt-4">
                  {appScreenshotsData.map((_, i) => (
                    <button
                      key={i}
                      onClick={() => setSelectedIndex(i)}
                      className="p-2 cursor-pointer flex items-center justify-center min-h-[44px] min-w-[44px]"
                      aria-label={`Go to screenshot ${i + 1}`}
                    >
                      <div className={`h-1.5 rounded-full transition-all ${
                        selectedIndex === i ? 'w-6 bg-brand-blue' : 'w-2 bg-white/40'
                      }`} />
                    </button>
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
