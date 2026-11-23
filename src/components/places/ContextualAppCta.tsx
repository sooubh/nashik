import React from 'react';
import { Smartphone, Download, CheckCircle2 } from 'lucide-react';
import { AppCtaHook, Locale } from '@/types/content';
import { getPlayStoreUrl } from '@/lib/utm';

interface ContextualAppCtaProps {
  appCtaHook: AppCtaHook;
  placeSlug?: string;
  locale?: Locale;
}

export function ContextualAppCta({
  appCtaHook,
  placeSlug,
  locale = 'en',
}: ContextualAppCtaProps) {
  const isMr = locale === 'mr';
  const isHi = locale === 'hi';

  const downloadText = isMr
    ? 'गुगल प्लेवरून डाऊनलोड करा'
    : isHi
    ? 'गूगल प्ले से डाउनलोड करें'
    : 'Download on Google Play';

  const playStoreLink = getPlayStoreUrl(
    'contextual_cta',
    appCtaHook.utmCampaign || placeSlug || 'article_hook'
  );

  return (
    <section className="relative overflow-hidden rounded-[28px] bg-gradient-to-br from-[#1b0d38] via-[#241349] to-[#14082b] p-6 sm:p-10 text-white shadow-xl">
      <div className="relative z-10 max-w-2xl">
        <div className="inline-flex items-center gap-1.5 rounded-full bg-signal-lime/20 px-3 py-1 text-xs font-bold uppercase tracking-wider text-signal-lime mb-3">
          <Smartphone className="h-3.5 w-3.5" />
          <span>Trivio Android App</span>
        </div>

        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-white leading-tight">
          {appCtaHook.headline}
        </h2>

        <p className="mt-3 text-sm sm:text-base text-white/80 leading-relaxed">
          {appCtaHook.subline}
        </p>

        <div className="mt-6 flex flex-wrap items-center gap-3">
          <a
            href={playStoreLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex min-h-[48px] items-center gap-2.5 rounded-full bg-signal-lime px-7 py-3 text-sm font-bold text-[#221045] shadow-lg transition-transform hover:scale-105 active:scale-95"
          >
            <Download className="h-4 w-4 shrink-0" />
            <span>{appCtaHook.ctaText || downloadText}</span>
          </a>

          <div className="flex items-center gap-1.5 text-xs text-white/70">
            <CheckCircle2 className="h-4 w-4 text-signal-lime" />
            <span>100% Free · No Ads · Offline Support</span>
          </div>
        </div>
      </div>
    </section>
  );
}
