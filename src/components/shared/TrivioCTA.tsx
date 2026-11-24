import React from 'react';
import Link from 'next/link';
import { SITE_CONFIG } from '@/config/site';

interface TrivioCTAProps {
  variant?: 'full' | 'compact' | 'inline' | 'floating';
  slug?: string;
  headline?: string;
  subline?: string;
  ctaText?: string;
}

export const TrivioCTA: React.FC<TrivioCTAProps> = ({
  variant = 'full',
  slug = 'website',
  headline,
  subline,
  ctaText = 'Get Trivio Free on Google Play',
}) => {
  const playStoreLink = `${SITE_CONFIG.playStoreUrl}&referrer=utm_source%3Dwebsite%26utm_medium%3Darticle%26utm_campaign%3D${encodeURIComponent(slug)}`;

  if (variant === 'compact') {
    return (
      <aside aria-label="Trivio App Download" className="p-4 bg-purple-50 border border-purple-200 rounded-xl flex flex-col sm:flex-row items-center justify-between gap-4">
        <div>
          <h4 className="font-bold text-gray-900 text-sm">{headline || 'Plan this trip offline with Trivio'}</h4>
          <p className="text-xs text-gray-600">{subline || 'Download offline maps, spot live crowd status, and navigate easily.'}</p>
        </div>
        <a
          href={playStoreLink}
          target="_blank"
          rel="noopener noreferrer"
          className="whitespace-nowrap px-4 py-2 bg-purple-700 hover:bg-purple-800 text-white text-xs font-semibold rounded-lg shadow-sm transition-colors"
        >
          {ctaText} ↗
        </a>
      </aside>
    );
  }

  if (variant === 'inline') {
    return (
      <span className="inline-block p-1 bg-purple-100 rounded text-purple-900 font-medium text-sm">
        📱 <a href={playStoreLink} target="_blank" rel="noopener noreferrer" className="underline hover:text-purple-700">Open in Trivio App</a>
      </span>
    );
  }

  return (
    <aside aria-label="Trivio Travel Assistant" className="relative overflow-hidden p-8 rounded-2xl bg-gradient-to-br from-purple-900 via-indigo-900 to-purple-950 text-white shadow-xl">
      <div className="relative z-10 max-w-2xl">
        <span className="inline-block px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full text-xs font-semibold text-purple-200 uppercase tracking-wider mb-3">
          Your Local Nashik Companion
        </span>
        <h3 className="text-2xl sm:text-3xl font-extrabold tracking-tight mb-3">
          {headline || 'Explore Nashik Smarter with Trivio'}
        </h3>
        <p className="text-purple-200 text-sm sm:text-base mb-6 leading-relaxed">
          {subline ||
            'Trivio puts verified temple darshan timings, offline trekking trails, vineyard maps, and local emergency helplines directly in your pocket. No signal required.'}
        </p>
        <div className="flex flex-wrap items-center gap-4">
          <a
            href={playStoreLink}
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 bg-white text-purple-900 hover:bg-purple-50 font-bold rounded-xl shadow-lg transition-transform transform active:scale-95 flex items-center gap-2"
          >
            <span>📱</span>
            <span>{ctaText}</span>
          </a>
          <Link
            href="/trivio"
            className="px-5 py-3 border border-white/30 hover:bg-white/10 text-white font-medium rounded-xl transition-colors text-sm"
          >
            Learn More
          </Link>
        </div>
      </div>
      <div className="absolute right-0 bottom-0 opacity-10 pointer-events-none text-9xl select-none">
        🗺️
      </div>
    </aside>
  );
};
