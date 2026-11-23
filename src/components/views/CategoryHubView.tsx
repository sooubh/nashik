import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import { ArrowUpRight, Compass, MapPin } from 'lucide-react';
import { CATEGORIES_DATA } from '@/data/categoriesData';
import { DESTINATIONS_DATA } from '@/data/destinationsData';
import { GUIDES_DATA } from '@/data/guidesData';
import { REGIONAL_CITIES } from '@/data/regionalCities';
import { Category, Locale } from '@/types/content';
import { SiteNav } from '@/components/SiteNav';
import { SiteFooter } from '@/components/SiteFooter';
import { Breadcrumbs } from '@/components/common/Breadcrumbs';
import { LanguageSwitcher } from '@/components/common/LanguageSwitcher';
import { ContextualAppCta } from '@/components/places/ContextualAppCta';

interface CategoryHubViewProps {
  slug: string;
  locale: Locale;
}

export function CategoryHubView({ slug, locale }: CategoryHubViewProps) {
  const isMr = locale === 'mr';
  const isHi = locale === 'hi';
  const localePrefix = locale === 'en' ? '' : `/${locale}`;

  // Check if slug is a regional city or a travel category
  const isCity = slug in REGIONAL_CITIES;
  const isCategory = slug in CATEGORIES_DATA;

  if (!isCity && !isCategory) {
    notFound();
  }

  const cityMeta = isCity ? REGIONAL_CITIES[slug] : null;
  const categoryMeta = isCategory ? CATEGORIES_DATA[slug as Category] : null;

  const title = isCity
    ? isMr ? cityMeta!.title.mr : isHi ? cityMeta!.title.hi : cityMeta!.title.en
    : isMr ? categoryMeta!.title.mr : isHi ? categoryMeta!.title.hi : categoryMeta!.title.en;

  const tagline = isCity
    ? isMr ? cityMeta!.tagline.mr : isHi ? cityMeta!.tagline.hi : cityMeta!.tagline.en
    : isMr ? categoryMeta!.tagline.mr : isHi ? categoryMeta!.tagline.hi : categoryMeta!.tagline.en;

  const description = isCity
    ? isMr ? cityMeta!.description.mr : isHi ? cityMeta!.description.hi : cityMeta!.description.en
    : isMr ? categoryMeta!.description.mr : isHi ? categoryMeta!.description.hi : categoryMeta!.description.en;

  const heroImage = isCity ? cityMeta!.heroImage : categoryMeta!.heroImage;

  const breadcrumbs = [
    { label: isMr ? 'मुख्यपृष्ठ' : isHi ? 'होम' : 'Home', href: `${localePrefix || '/'}` },
    { label: isMr ? 'विभाग व शहरे' : isHi ? 'क्षेत्र एवं श्रेणियां' : 'Destinations', href: `${localePrefix}/destinations` },
    { label: title, href: `${localePrefix}/destinations/${slug}` },
  ];

  // Filter places
  const categoryPlaces = isCity
    ? DESTINATIONS_DATA.filter((p) => cityMeta!.placeSlugs.includes(p.slug))
    : DESTINATIONS_DATA.filter((p) => p.category === slug);

  // Filter guides
  const categoryGuides = isCategory
    ? GUIDES_DATA.filter((g) => g.category === slug)
    : GUIDES_DATA.filter((g) =>
        g.relatedPlaces.some((rp) => cityMeta!.placeSlugs.includes(rp))
      );

  return (
    <div className="min-h-screen bg-paper flex flex-col justify-between">
      <SiteNav />

      <main id="main-content" className="flex-1 pt-24 sm:pt-28 pb-16 px-4 sm:px-8 lg:px-12 max-w-6xl mx-auto w-full space-y-10 sm:space-y-14">
        {/* Navigation & Language Switcher */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <Breadcrumbs items={breadcrumbs} />
          <LanguageSwitcher currentLocale={locale} />
        </div>

        {/* Category / City Hero Banner */}
        <div className="relative overflow-hidden rounded-[28px] sm:rounded-[36px] bg-slate-950 text-white p-8 sm:p-12 lg:p-16 shadow-xl">
          <div className="relative z-10 max-w-3xl space-y-4">
            <span className="inline-flex items-center gap-1.5 rounded-full bg-signal-lime/20 border border-signal-lime/30 px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-signal-lime">
              {isCity ? <MapPin className="h-3.5 w-3.5" /> : <Compass className="h-3.5 w-3.5" />}
              <span>{tagline}</span>
            </span>

            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight text-white leading-tight">
              {title}
            </h1>

            <p className="text-base sm:text-lg text-white/80 leading-relaxed max-w-2xl">
              {description}
            </p>
          </div>
        </div>

        {/* Places Grid */}
        <section className="space-y-6">
          <div className="flex items-center justify-between">
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-on-surface">
              {isMr ? 'सर्व प्रेक्षणीय ठिकाणे' : isHi ? 'सभी प्रमुख स्थल' : 'Featured Destinations'} ({categoryPlaces.length})
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {categoryPlaces.map((place) => {
              const placeTitle = isMr && place.localized?.mr?.title
                ? place.localized.mr.title
                : isHi && place.localized?.hi?.title
                ? place.localized.hi.title
                : place.title;

              const placeExcerpt = isMr && place.localized?.mr?.excerpt
                ? place.localized.mr.excerpt
                : isHi && place.localized?.hi?.excerpt
                ? place.localized.hi.excerpt
                : place.excerpt;

              return (
                <Link
                  key={place.slug}
                  href={`${localePrefix}/places/${place.slug}`}
                  className="group relative rounded-2xl overflow-hidden border border-brand-100 bg-white shadow-xs hover:shadow-lg transition-all flex flex-col justify-between"
                >
                  <div>
                    <div className="relative aspect-[16/10] w-full overflow-hidden bg-slate-900">
                      <Image
                        src={place.heroImage}
                        alt={placeTitle}
                        fill
                        loading="lazy"
                        decoding="async"
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 360px"
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute top-3 right-3 rounded-full bg-white/90 p-1.5 text-deep-violet shadow-sm">
                        <ArrowUpRight className="h-4 w-4" />
                      </div>
                    </div>

                    <div className="p-5 space-y-2">
                      <div className="flex items-center justify-between gap-2 text-[11px] font-semibold text-deep-violet">
                        <span>{place.howToReach.distanceFromNashikCenterKm} km from center</span>
                        <span>{place.timings.open} - {place.timings.close}</span>
                      </div>

                      <h3 className="text-lg font-bold text-on-surface group-hover:text-deep-violet transition-colors">
                        {placeTitle}
                      </h3>

                      <p className="text-xs sm:text-sm text-on-surface-variant line-clamp-2 leading-relaxed">
                        {placeExcerpt}
                      </p>
                    </div>
                  </div>

                  <div className="p-5 pt-0 border-t border-brand-50 mt-4 flex items-center justify-between text-xs font-semibold text-deep-violet">
                    <span>{place.entryFee.isFree ? 'Free Entry' : place.entryFee.general}</span>
                    <span className="group-hover:translate-x-1 transition-transform">
                      {isMr ? 'तपशील पहा' : isHi ? 'विवरण देखें' : 'View Full Guide'} &rarr;
                    </span>
                  </div>
                </Link>
              );
            })}
          </div>
        </section>

        {/* Related Guides */}
        {categoryGuides.length > 0 && (
          <section className="space-y-6 pt-6 border-t border-brand-100">
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-on-surface">
              {isMr ? 'सखोल प्रवास मार्गदर्शिका' : isHi ? 'गहन यात्रा गाइड' : 'Expert Travel Guides'}
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {categoryGuides.map((guide) => (
                <Link
                  key={guide.slug}
                  href={`${localePrefix}/guides/${guide.slug}`}
                  className="group rounded-2xl border border-brand-100 bg-[#FBFAFD] p-6 hover:bg-white hover:shadow-md transition-all space-y-3"
                >
                  <span className="text-[11px] font-bold uppercase tracking-wider text-deep-violet">
                    {guide.readingTime} · Updated {guide.lastUpdated}
                  </span>

                  <h3 className="text-xl font-bold text-on-surface group-hover:text-deep-violet transition-colors">
                    {isMr && guide.localTitle?.mr ? guide.localTitle.mr : guide.title}
                  </h3>

                  <p className="text-sm text-on-surface-variant line-clamp-2 leading-relaxed">
                    {guide.excerpt}
                  </p>

                  <span className="text-xs font-bold text-deep-violet flex items-center gap-1 pt-1">
                    <span>{isMr ? 'मार्गदर्शिका वाचा' : isHi ? 'गाइड पढ़ें' : 'Read Guide'}</span>
                    <ArrowUpRight className="h-3.5 w-3.5" />
                  </span>
                </Link>
              ))}
            </div>
          </section>
        )}

        {/* Contextual CTA */}
        <ContextualAppCta
          appCtaHook={{
            headline: `Explore all ${title} spots offline in Trivio`,
            subline: 'Get instant turn-by-turn navigation, elevation profiles, and sanctum darshan hours directly on your Android phone.',
            ctaText: 'Download Trivio Free',
            utmCampaign: `destination_${slug}`,
          }}
          locale={locale}
        />
      </main>

      <SiteFooter />
    </div>
  );
}
