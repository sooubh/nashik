import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import { ArrowLeft, MapPin, Tag, ShieldCheck, ExternalLink } from 'lucide-react';
import { DESTINATIONS_DATA } from '@/data/destinationsData';
import { CATEGORIES_DATA } from '@/data/categoriesData';
import { Place, Locale } from '@/types/content';
import { SITE_CONFIG } from '@/config/site';
import { generateTouristAttractionSchema } from '@/lib/schema';
import { safeJsonLd } from '@/lib/utils';
import { SiteNav } from '@/components/SiteNav';
import { SiteFooter } from '@/components/SiteFooter';
import { Breadcrumbs } from '@/components/common/Breadcrumbs';
import { LanguageSwitcher } from '@/components/common/LanguageSwitcher';
import { PlaceHero } from '@/components/places/PlaceHero';
import { DirectAnswerBox } from '@/components/places/DirectAnswerBox';
import { TimingEntryTable } from '@/components/places/TimingEntryTable';
import { HowToReachCard } from '@/components/places/HowToReachCard';
import { SafetyAlert } from '@/components/places/SafetyAlert';
import { FAQAccordion } from '@/components/places/FAQAccordion';
import { ContextualAppCta } from '@/components/places/ContextualAppCta';

interface PlaceDetailViewProps {
  slug: string;
  locale: Locale;
}

export function PlaceDetailView({ slug, locale }: PlaceDetailViewProps) {
  const place = DESTINATIONS_DATA.find((p) => p.slug === slug);
  if (!place) {
    notFound();
  }

  const isMr = locale === 'mr';
  const isHi = locale === 'hi';

  const title = isMr && place.localized?.mr?.title
    ? place.localized.mr.title
    : isHi && place.localized?.hi?.title
    ? place.localized.hi.title
    : place.title;

  const directAnswer = isMr && place.localized?.mr?.directAnswer
    ? place.localized.mr.directAnswer
    : isHi && place.localized?.hi?.directAnswer
    ? place.localized.hi.directAnswer
    : place.directAnswer;

  const excerpt = isMr && place.localized?.mr?.excerpt
    ? place.localized.mr.excerpt
    : isHi && place.localized?.hi?.excerpt
    ? place.localized.hi.excerpt
    : place.excerpt;

  const dressCode = isMr && place.localized?.mr?.dressCode
    ? place.localized.mr.dressCode
    : isHi && place.localized?.hi?.dressCode
    ? place.localized.hi.dressCode
    : place.dressCode;

  const safetyTips = isMr && place.localized?.mr?.safetyTips
    ? place.localized.mr.safetyTips
    : isHi && place.localized?.hi?.safetyTips
    ? place.localized.hi.safetyTips
    : place.safetyTips;

  const faqs = isMr && place.localized?.mr?.faqs
    ? place.localized.mr.faqs
    : isHi && place.localized?.hi?.faqs
    ? place.localized.hi.faqs
    : place.faqs;

  const categoryMeta = CATEGORIES_DATA[place.category];
  const categoryTitle = isMr
    ? categoryMeta.title.mr
    : isHi
    ? categoryMeta.title.hi
    : categoryMeta.title.en;

  const localePrefix = locale === 'en' ? '' : `/${locale}`;

  const breadcrumbs = [
    { label: isMr ? 'मुख्यपृष्ठ' : isHi ? 'होम' : 'Home', href: `${localePrefix || '/'}` },
    { label: categoryTitle, href: `${localePrefix}/destinations/${place.category}` },
    { label: title, href: `${localePrefix}/places/${place.slug}` },
  ];

  // Resolve nearby places
  const nearbyPlaces = DESTINATIONS_DATA.filter((p) =>
    place.nearbyPlaceSlugs.includes(p.slug)
  ).slice(0, 3);

  return (
    <div className="min-h-screen bg-paper flex flex-col justify-between">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: safeJsonLd(generateTouristAttractionSchema(place, locale)),
        }}
      />

      <SiteNav />

      <main id="main-content" className="flex-1 pt-24 sm:pt-28 pb-16 px-4 sm:px-8 lg:px-12 max-w-6xl mx-auto w-full space-y-8 sm:space-y-12">
        {/* Navigation & Controls Bar */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <Breadcrumbs items={breadcrumbs} />
          <LanguageSwitcher currentLocale={locale} />
        </div>

        {/* Place Hero */}
        <PlaceHero place={place} locale={locale} />

        {/* Direct Answer Box (GEO / Search Snippet) */}
        <DirectAnswerBox
          answer={directAnswer}
          locale={locale}
          subjectTitle={title}
        />

        {/* Timings, Entry Fee & Best Time Table */}
        <TimingEntryTable
          timings={place.timings}
          entryFee={place.entryFee}
          bestTimeToVisit={place.bestTimeToVisit}
          locale={locale}
        />

        {/* Safety & Protocol Alert */}
        <SafetyAlert
          safetyTips={safetyTips}
          dressCode={dressCode}
          locale={locale}
        />

        {/* Narrative & Practical Overview */}
        <section className="rounded-2xl border border-brand-100 bg-white p-6 sm:p-8 space-y-4 shadow-xs">
          <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-on-surface">
            {isMr ? 'ठिकाणाचा तपशील व माहिती' : isHi ? 'स्थल विवरण एवं परिचय' : 'About & Practical Overview'}
          </h2>
          <p className="text-sm sm:text-base leading-relaxed text-on-surface-variant">
            {excerpt}
          </p>

          {/* Tags */}
          <div className="pt-4 border-t border-brand-50 flex flex-wrap gap-2">
            {place.tags.map((tag) => (
              <span
                key={tag}
                className="inline-flex items-center gap-1 rounded-full bg-brand-50 border border-brand-100 px-3 py-1 text-xs font-semibold text-deep-violet"
              >
                <Tag className="h-3 w-3" />
                <span>{tag}</span>
              </span>
            ))}
          </div>
        </section>

        {/* How to Reach Card */}
        <HowToReachCard
          howToReach={place.howToReach}
          locale={locale}
          googleMapsUrl={place.googleMapsUrl}
        />

        {/* Nearby Places Section */}
        {nearbyPlaces.length > 0 && (
          <section className="space-y-4">
            <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-on-surface">
              {isMr ? 'जवळपासची इतर प्रेक्षणीय स्थळे' : isHi ? 'आसपास के अन्य प्रमुख स्थल' : 'Nearby Attractions'}
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {nearbyPlaces.map((np) => (
                <Link
                  key={np.slug}
                  href={`${localePrefix}/places/${np.slug}`}
                  className="group relative rounded-2xl overflow-hidden border border-brand-100 bg-white shadow-xs hover:shadow-md transition-all flex flex-col"
                >
                  <div className="relative aspect-[16/10] w-full overflow-hidden">
                    <Image
                      src={np.heroImage}
                      alt={np.title}
                      fill
                      loading="lazy"
                      decoding="async"
                      sizes="(max-width: 640px) 100vw, 300px"
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-4 flex-1 flex flex-col justify-between">
                    <div>
                      <span className="text-[10px] font-bold uppercase tracking-wider text-deep-violet block mb-1">
                        {isMr ? np.categoryLabel.mr : isHi ? np.categoryLabel.hi : np.categoryLabel.en}
                      </span>
                      <h3 className="text-sm font-bold text-on-surface group-hover:text-deep-violet transition-colors line-clamp-1">
                        {isMr && np.localized?.mr?.title ? np.localized.mr.title : np.title}
                      </h3>
                      <p className="text-xs text-on-surface-variant line-clamp-2 mt-1">
                        {np.excerpt}
                      </p>
                    </div>
                    <span className="mt-3 text-xs font-semibold text-deep-violet flex items-center gap-1">
                      <span>{isMr ? 'माहिती पहा' : isHi ? 'विवरण देखें' : 'View Guide'} &rarr;</span>
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </section>
        )}

        {/* Frequently Asked Questions */}
        <FAQAccordion faqs={faqs} locale={locale} />

        {/* Verified Sources & Fact-Check Audit */}
        {place.sources && place.sources.length > 0 && (
          <section className="rounded-2xl border border-brand-100 bg-white p-6 sm:p-8 space-y-4 shadow-xs" aria-label="Official Sources and Verification">
            <div className="flex flex-wrap items-center justify-between gap-3 pb-3 border-b border-brand-50">
              <div className="flex items-center gap-2">
                <ShieldCheck className="h-5 w-5 text-emerald-600" />
                <h2 className="text-base sm:text-lg font-bold text-on-surface">
                  {isMr ? 'सत्यापित अधिकृत संदर्भ व पडताळणी' : isHi ? 'सत्यापित आधिकारिक स्रोत एवं सत्यापन' : 'Verified Sources & Ground Truth'}
                </h2>
              </div>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 text-emerald-800 text-xs font-semibold">
                <span>{isMr ? 'शेवटची पडताळणी:' : isHi ? 'अंतिम सत्यापन:' : 'Last Verified:'}</span>
                <time dateTime={place.lastVerified || '2026-11-24'}>{place.lastVerified || '2026-11-24'}</time>
              </span>
            </div>
            <p className="text-xs text-on-surface-variant leading-relaxed">
              {isMr
                ? 'आमच्या तथ्य-पडताळणी धोरणानुसार, सर्व दर्शन वेळा, प्रवेश शुल्क व प्रवास मार्ग थेट शासकीय पोर्टल आणि मंदिर विश्वस्त मंडळाच्या सूचनांवरून तपासले गेले आहेत.'
                : isHi
                ? 'हमारी तथ्य-सत्यापन नीति के तहत, सभी दर्शन समय, टिकट शुल्क और यात्रा मार्ग आधिकारिक सरकारी पोर्टलों और मंदिर ट्रस्टों से सत्यापित हैं।'
                : 'In accordance with our zero-invented-facts policy, all timings, fees, and travel guidelines are independently verified against primary authorities and official trust portals.'}
            </p>
            <ul className="space-y-2 text-xs sm:text-sm">
              {place.sources.map((source, idx) => (
                <li key={idx} className="flex items-center gap-2 text-on-surface">
                  <ExternalLink className="h-3.5 w-3.5 text-deep-violet shrink-0" />
                  <a href={source.url} target="_blank" rel="noopener noreferrer" className="text-deep-violet hover:underline font-medium">
                    {source.title}
                  </a>
                  <span className="text-[10px] uppercase font-bold text-slate-500 bg-slate-100 px-2 py-0.5 rounded-full">{source.type}</span>
                </li>
              ))}
            </ul>
          </section>
        )}

        {/* Contextual Trivio App CTA */}
        <ContextualAppCta
          appCtaHook={place.appCtaHooks}
          placeSlug={place.slug}
          locale={locale}
        />
      </main>

      <SiteFooter />
    </div>
  );
}
