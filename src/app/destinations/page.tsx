import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { MapPin, Compass, ArrowUpRight } from 'lucide-react';
import { ALL_CATEGORIES, CATEGORIES_DATA } from '@/data/categoriesData';
import { ALL_REGIONAL_CITIES, REGIONAL_CITIES } from '@/data/regionalCities';
import { SiteNav } from '@/components/SiteNav';
import { SiteFooter } from '@/components/SiteFooter';
import { Breadcrumbs } from '@/components/common/Breadcrumbs';
import { ContextualAppCta } from '@/components/places/ContextualAppCta';
import { SITE_CONFIG } from '@/config/site';
import { constructMetadata } from '@/lib/seo';
import { generateBreadcrumbSchema } from '@/lib/schema';
import { safeJsonLd } from '@/lib/utils';

export const metadata: Metadata = constructMetadata({
  title: 'Nashik Destinations & Regional Hubs Guide',
  description: 'Explore Nashik tourism by region or category: Trimbakeshwar, Igatpuri highlands, Dindori wine valley, sacred temples, and Sahyadri waterfalls.',
  path: '/destinations',
  ogType: 'website',
  ogImage: '/images/destinations/harihar-fort.webp',
  ogImageAlt: 'Nashik Destinations & Regional Hubs Guide',
});

export default function DestinationsHubPage() {
  const breadcrumbs = [
    { label: 'Home', href: '/' },
    { label: 'Destinations & Hubs', href: '/destinations' },
  ];

  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: 'Home', url: `${SITE_CONFIG.canonicalUrl}/` },
    { name: 'Nashik Destinations & Regional Hubs', url: `${SITE_CONFIG.canonicalUrl}/destinations` },
  ]);

  return (
    <div className="min-h-screen bg-paper flex flex-col justify-between">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: safeJsonLd(breadcrumbSchema),
        }}
      />

      <SiteNav />

      <main id="main-content" className="flex-1 pt-24 sm:pt-28 pb-16 px-4 sm:px-8 lg:px-12 max-w-6xl mx-auto w-full space-y-12">
        <Breadcrumbs items={breadcrumbs} />

        {/* Page Header */}
        <div className="max-w-3xl space-y-3">
          <span className="text-xs font-bold uppercase tracking-wider text-deep-violet block">
            Regional Hubs &amp; Travel Clusters
          </span>
          <h1 className="text-3xl sm:text-5xl font-black tracking-tight text-on-surface leading-tight">
            Nashik Destinations &amp; Regions.
          </h1>
          <p className="text-base sm:text-lg text-on-surface-variant leading-relaxed">
            Browse Nashik by geographic area or explore by travel theme: sacred Jyotirlinga temples, rolling vineyards, sheer Sahyadri forts, and seasonal waterfalls.
          </p>
        </div>

        {/* Section 1: 4 Regional Hubs */}
        <section className="space-y-6">
          <div className="flex items-center gap-2">
            <MapPin className="h-5 w-5 text-deep-violet" />
            <h2 className="text-2xl font-bold tracking-tight text-on-surface">
              Explore by Region &amp; City
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {ALL_REGIONAL_CITIES.map((cityKey) => {
              const city = REGIONAL_CITIES[cityKey];
              return (
                <Link
                  key={city.id}
                  href={`/destinations/${city.id}`}
                  className="group relative rounded-3xl overflow-hidden bg-slate-900 border border-brand-100 shadow-md hover:shadow-2xl transition-all flex flex-col justify-between min-h-[280px] p-6 sm:p-8 text-white"
                >
                  <Image
                    src={city.heroImage}
                    alt={`${city.title.en} - Regional Travel Guide`}
                    fill
                    loading="lazy"
                    decoding="async"
                    sizes="(max-width: 768px) 100vw, 550px"
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/60 to-black/30" />

                  <div className="relative z-10 flex items-center justify-between gap-2">
                    <span className="rounded-full bg-signal-lime/90 px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-[#221045]">
                      {city.tagline.en}
                    </span>
                    <span className="rounded-full bg-white/20 backdrop-blur-sm p-1.5 text-white">
                      <ArrowUpRight className="h-4 w-4" />
                    </span>
                  </div>

                  <div className="relative z-10 space-y-2 mt-12">
                    <h3 className="text-2xl font-black tracking-tight text-white group-hover:text-signal-lime transition-colors">
                      {city.title.en}
                    </h3>
                    <p className="text-xs text-white/70 font-medium">
                      {city.title.mr}
                    </p>
                    <p className="text-xs sm:text-sm text-white/80 line-clamp-2 leading-relaxed">
                      {city.description.en}
                    </p>
                    <span className="inline-block pt-2 text-xs font-bold text-signal-lime">
                      {city.placeSlugs.length} Curated Attractions &rarr;
                    </span>
                  </div>
                </Link>
              );
            })}
          </div>
        </section>

        {/* Section 2: 8 Travel Categories */}
        <section className="space-y-6 pt-6 border-t border-brand-100">
          <div className="flex items-center gap-2">
            <Compass className="h-5 w-5 text-deep-violet" />
            <h2 className="text-2xl font-bold tracking-tight text-on-surface">
              Explore by Travel Category
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {ALL_CATEGORIES.map((catKey) => {
              const cat = CATEGORIES_DATA[catKey];
              return (
                <Link
                  key={cat.id}
                  href={`/destinations/${cat.id}`}
                  className="group rounded-2xl border border-brand-100 bg-white p-5 hover:bg-brand-50 hover:shadow-md transition-all flex flex-col justify-between"
                >
                  <div className="space-y-2">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-deep-violet">
                      {cat.tagline.en}
                    </span>
                    <h3 className="text-base font-bold text-on-surface group-hover:text-deep-violet transition-colors">
                      {cat.title.en}
                    </h3>
                    <p className="text-xs text-on-surface-variant line-clamp-2 leading-relaxed">
                      {cat.description.en}
                    </p>
                  </div>

                  <div className="mt-4 pt-2 border-t border-brand-50 flex items-center justify-between text-xs font-semibold text-deep-violet">
                    <span>View Category</span>
                    <ArrowUpRight className="h-3.5 w-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </div>
                </Link>
              );
            })}
          </div>
        </section>

        {/* App CTA */}
        <ContextualAppCta
          appCtaHook={{
            headline: 'Offline GPS navigation across all Nashik regions',
            subline: 'Whether driving through Kasara ghat, trekking in Brahmagiri, or wine tasting in Gangapur, Trivio works without cellular coverage.',
            ctaText: 'Install Free Android App',
            utmCampaign: 'destinations_hub',
          }}
        />
      </main>

      <SiteFooter />
    </div>
  );
}
