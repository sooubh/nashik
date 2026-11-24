'use client';

import React, { useEffect, useRef, useState } from 'react';
import { SITE_CONFIG } from '@/config/site';

export interface AdSlotProps {
  slotId: string;
  format?: 'banner' | 'rectangle' | 'leaderboard';
  className?: string;
}

/**
 * CLS-Safe, Lazy-Loaded AdSlot Component.
 * - Gated by SITE_CONFIG.adsEnabled (controlled by NEXT_PUBLIC_ADS_ENABLED=true).
 * - Defaults to disabled (ADS_ENABLED=false) with zero DOM and zero layout shift.
 * - When enabled, enforces strict pre-allocated min-height and layout containment
 *   to guarantee 0 Cumulative Layout Shift (CLS).
 * - Utilizes IntersectionObserver with 200px root margin for optimized lazy loading.
 */
export const AdSlot: React.FC<AdSlotProps> = ({
  slotId,
  format = 'banner',
  className = '',
}) => {
  const containerRef = useRef<HTMLElement>(null);
  const [isInView, setIsInView] = useState(false);

  // IntersectionObserver for lazy loading when ads are enabled
  useEffect(() => {
    if (!SITE_CONFIG.adsEnabled) return;

    // Fallback for environments without IntersectionObserver
    if (typeof window === 'undefined' || !('IntersectionObserver' in window)) {
      setIsInView(true);
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.disconnect();
        }
      },
      {
        rootMargin: '200px 0px', // Pre-load 200px before scrolling into view
        threshold: 0,
      }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => {
      observer.disconnect();
    };
  }, []);

  // If ads are disabled globally (default), render nothing (0 DOM, 0 shift)
  if (!SITE_CONFIG.adsEnabled) {
    return null;
  }

  // Pre-allocated dimensions to strictly prevent Cumulative Layout Shift (CLS)
  // Standard IAB display ad formats with exact bounding heights
  const formatConfig: Record<
    string,
    { classes: string; style: React.CSSProperties; dimensions: string }
  > = {
    banner: {
      classes: 'w-full max-w-2xl min-h-[100px] sm:min-h-[90px]',
      style: { minHeight: 100, contain: 'layout' },
      dimensions: '320x100 / 728x90 Responsive',
    },
    rectangle: {
      classes: 'w-full max-w-[300px] sm:max-w-sm min-h-[250px]',
      style: { minHeight: 250, contain: 'layout' },
      dimensions: '300x250 Medium Rectangle',
    },
    leaderboard: {
      classes: 'w-full max-w-4xl min-h-[90px]',
      style: { minHeight: 90, contain: 'layout' },
      dimensions: '728x90 Leaderboard',
    },
  };

  const currentFormat = formatConfig[format] || formatConfig.banner;

  return (
    <aside
      ref={containerRef}
      aria-label="Advertisement"
      data-ad-slot={slotId}
      data-ad-format={format}
      style={currentFormat.style}
      className={`mx-auto rounded-xl border border-dashed border-gray-300 dark:border-gray-700 bg-gray-50/70 dark:bg-gray-900/40 flex items-center justify-center text-xs text-gray-400 overflow-hidden transition-opacity duration-300 ${currentFormat.classes} ${className}`}
    >
      {isInView ? (
        <div className="text-center p-3">
          <span className="block font-semibold uppercase tracking-wider text-[11px] text-gray-500 dark:text-gray-400">
            Sponsored Advertisement
          </span>
          <span className="text-[10px] text-gray-400 dark:text-gray-500 font-mono">
            Slot: {slotId} ({currentFormat.dimensions})
          </span>
        </div>
      ) : (
        <div className="w-full h-full flex items-center justify-center">
          <span className="sr-only">Advertisement loading...</span>
        </div>
      )}
    </aside>
  );
};
