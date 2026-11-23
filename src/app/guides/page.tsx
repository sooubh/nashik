import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { Clock, Calendar, ArrowUpRight } from 'lucide-react';
import { GUIDES_DATA } from '@/data/guidesData';
import { SiteNav } from '@/components/SiteNav';
import { SiteFooter } from '@/components/SiteFooter';
import { Breadcrumbs } from '@/components/common/Breadcrumbs';
import { ContextualAppCta } from '@/components/places/ContextualAppCta';
import { SITE_CONFIG } from '@/config/site';

export const metadata: Metadata = {
  title: `Nashik Travel Guides · 15 In-Depth Dossiers & Trek Blueprints | ${SITE_CONFIG.name}`,
  description:
    'Detailed travel, trekking, wine tasting, and temple darshan guides for Nashik: Trimbakeshwar VIP passes, Harihar rock steps, Sula wine etiquette, and transit routes.',
  alternates: {
    canonical: '/guides',
  },
  openGraph: {
    title: `Nashik Travel Guides · 15 In-Depth Dossiers`,
    description:
      'Curated expert travel guides for exploring Nashik temples, forts, waterfalls, and wine country.',
    url: `${SITE_CONFIG.canonicalUrl}/guides`,
  },
};

export default function GuidesPage() {
  const breadcrumbs = [
    { label: 'Home', href: '/' },
    { label: 'Travel Guides', href: '/guides' },
  ];

  return (
    <div className="min-h-screen bg-paper flex flex-col justify-between">
      <SiteNav />

      <main id="main-content" className="flex-1 pt-24 sm:pt-28 pb-16 px-4 sm:px-8 lg:px-12 max-w-6xl mx-auto w-full space-y-8 sm:space-y-12">
        <Breadcrumbs items={breadcrumbs} />

        {/* Page Header */}
        <div className="max-w-3xl space-y-3">
          <span className="text-xs font-bold uppercase tracking-wider text-deep-violet block">
            Field Guides &amp; Trekking Blueprints
          </span>
          <h1 className="text-3xl sm:text-5xl font-black tracking-tight text-on-surface leading-tight">
            Nashik Travel Guides.
          </h1>
          <p className="text-base sm:text-lg text-on-surface-variant leading-relaxed">
            In-depth guides with verified 2026 advice on darshan passes, trekking gear, wine etiquette, and bus routes.
          </p>
        </div>

        {/* Guides Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {GUIDES_DATA.map((guide) => (
            <Link
              key={guide.slug}
              href={`/guides/${guide.slug}`}
              className="group rounded-2xl overflow-hidden border border-brand-100 bg-white shadow-xs hover:shadow-xl transition-all flex flex-col justify-between"
            >
              <div>
                <div className="relative aspect-[16/10] w-full overflow-hidden bg-slate-900">
                  <Image
                    src={guide.heroImage}
                    alt={guide.title}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 360px"
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <span className="absolute top-3 left-3 rounded-full bg-slate-950/80 backdrop-blur-sm px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-white">
                    {guide.category}
                  </span>
                </div>

                <div className="p-5 space-y-2.5">
                  <div className="flex items-center gap-3 text-[11px] text-on-surface-variant font-medium">
                    <span className="flex items-center gap-1">
                      <Clock className="h-3.5 w-3.5 text-deep-violet" />
                      {guide.readingTime}
                    </span>
                    <span>·</span>
                    <span className="flex items-center gap-1">
                      <Calendar className="h-3.5 w-3.5 text-deep-violet" />
                      {guide.lastUpdated}
                    </span>
                  </div>

                  <h2 className="text-lg font-bold text-on-surface group-hover:text-deep-violet transition-colors leading-snug">
                    {guide.title}
                  </h2>

                  <p className="text-xs sm:text-sm text-on-surface-variant line-clamp-2 leading-relaxed">
                    {guide.excerpt}
                  </p>
                </div>
              </div>

              <div className="p-5 pt-3 border-t border-brand-50 flex items-center justify-between text-xs font-bold text-deep-violet">
                <span>Read Full Guide</span>
                <ArrowUpRight className="h-4 w-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </div>
            </Link>
          ))}
        </div>

        {/* App CTA */}
        <ContextualAppCta
          appCtaHook={{
            headline: 'Offline field guides on your phone',
            subline: 'Never worry about lost connectivity at fort summits or remote waterfall valleys. Trivio keeps all guides saved on-device.',
            ctaText: 'Get Trivio App',
            utmCampaign: 'guides_directory',
          }}
        />
      </main>

      <SiteFooter />
    </div>
  );
}
