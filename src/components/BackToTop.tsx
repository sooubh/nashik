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
    window.addEventListener('scroll', handleScroll);
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
        'fixed bottom-6 right-6 z-40 p-3 rounded-full bg-brand-blue text-white shadow-xl shadow-brand-blue/30 transition-all duration-300 hover:bg-brand-secondary hover:scale-110 active:scale-95 focus:outline-none',
        isVisible
          ? 'opacity-100 translate-y-0 pointer-events-auto'
          : 'opacity-0 translate-y-6 pointer-events-none'
      )}
      aria-label="Scroll back to top"
      title="Back to top"
    >
      <ChevronUp className="h-5 w-5 stroke-[2.5]" />
    </button>
  );
}
