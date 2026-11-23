import React from 'react';
import { Train, Bus, Car, Navigation } from 'lucide-react';
import { HowToReach, Locale } from '@/types/content';

interface HowToReachCardProps {
  howToReach: HowToReach;
  locale: Locale;
  googleMapsUrl: string;
}

export function HowToReachCard({ howToReach, locale, googleMapsUrl }: HowToReachCardProps) {
  const isMr = locale === 'mr';
  const isHi = locale === 'hi';

  const heading = isMr
    ? 'कसे पोहोचावे (वाहतूक माहिती)'
    : isHi
    ? 'कैसे पहुंचे (मार्ग एवं परिवहन)'
    : 'How to Reach & Transit Details';

  return (
    <section className="rounded-2xl border border-brand-100 bg-[#FBFAFD] p-6 sm:p-8 shadow-xs">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
        <div>
          <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-on-surface">
            {heading}
          </h2>
          <p className="text-xs sm:text-sm text-on-surface-variant mt-1">
            {howToReach.distanceFromNashikCenterKm} km from Central Nashik
          </p>
        </div>

        <a
          href={googleMapsUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex min-h-[40px] items-center gap-1.5 self-start rounded-full bg-deep-violet px-4 py-2 text-xs font-semibold text-white transition-colors hover:bg-primary"
        >
          <Navigation className="h-3.5 w-3.5" />
          <span>Open Live Route</span>
        </a>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {/* Rail */}
        <div className="rounded-xl border border-brand-100 bg-white p-4 space-y-2">
          <div className="flex items-center gap-2 text-deep-violet font-semibold text-sm">
            <Train className="h-4 w-4" />
            <span>By Train / Railway</span>
          </div>
          <p className="text-xs text-on-surface-variant leading-relaxed">
            {howToReach.nearestRail}
          </p>
        </div>

        {/* Bus */}
        <div className="rounded-xl border border-brand-100 bg-white p-4 space-y-2">
          <div className="flex items-center gap-2 text-deep-violet font-semibold text-sm">
            <Bus className="h-4 w-4" />
            <span>By Bus / Citilinc</span>
          </div>
          <p className="text-xs text-on-surface-variant leading-relaxed">
            {howToReach.busTransit}
          </p>
        </div>

        {/* Road */}
        <div className="rounded-xl border border-brand-100 bg-white p-4 space-y-2">
          <div className="flex items-center gap-2 text-deep-violet font-semibold text-sm">
            <Car className="h-4 w-4" />
            <span>By Car / Taxi</span>
          </div>
          <p className="text-xs text-on-surface-variant leading-relaxed">
            {howToReach.roadDrive}
          </p>
        </div>
      </div>
    </section>
  );
}
