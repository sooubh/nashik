'use client';

import React, { useEffect, useState } from 'react';
import { ChevronUp } from 'lucide-react';
import { cn } from '@/lib/utils';

export function BackToTop() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 400) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <button
      onClick={scrollToTop}
      type="button"
      className={cn(
        'fixed bottom-6 right-6 z-40 p-3 rounded-xl bg-brand-blue text-white shadow-soft-md ring-2 ring-brand-blue/20 transition-all duration-300 hover:bg-brand-700 hover:-translate-y-1 active:scale-[0.97] focus:outline-none min-h-[44px] min-w-[44px] flex items-center justify-center',
        isVisible
          ? 'opacity-100 pointer-events-auto'
          : 'opacity-0 pointer-events-none'
      )}
      aria-label="Scroll back to top"
      title="Back to top"
    >
      <ChevronUp className="h-5 w-5 stroke-[2.5]" />
    </button>
  );
}
