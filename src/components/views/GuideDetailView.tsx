import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import { Clock, Calendar, CheckCircle2, ArrowLeft, ArrowUpRight } from 'lucide-react';
import { GUIDES_DATA } from '@/data/guidesData';
import { DESTINATIONS_DATA } from '@/data/destinationsData';
import { Guide, Locale } from '@/types/content';
import { generateArticleSchema } from '@/lib/schema';
import { safeJsonLd } from '@/lib/utils';
import { SITE_CONFIG } from '@/config/site';
import { SiteNav } from '@/components/SiteNav';
import { SiteFooter } from '@/components/SiteFooter';
import { Breadcrumbs } from '@/components/common/Breadcrumbs';
import { LanguageSwitcher } from '@/components/common/LanguageSwitcher';
import { DirectAnswerBox } from '@/components/places/DirectAnswerBox';
import { FAQAccordion } from '@/components/places/FAQAccordion';
import { ContextualAppCta } from '@/components/places/ContextualAppCta';

interface GuideDetailViewProps {
  slug: string;
  locale: Locale;
}

export function GuideDetailView({ slug, locale }: GuideDetailViewProps) {
  const guide = GUIDES_DATA.find((g) => g.slug === slug);
  if (!guide) {
    notFound();
  }

  const isMr = locale === 'mr';
  const isHi = locale === 'hi';

  const title = isMr && guide.localTitle?.mr
    ? guide.localTitle.mr
    : isHi && guide.localTitle?.hi
    ? guide.localTitle.hi
    : guide.title;

  const localePrefix = locale === 'en' ? '' : `/${locale}`;
  const canonicalUrl = `${SITE_CONFIG.canonicalUrl}${localePrefix}/guides/${guide.slug}`;

  const breadcrumbs = [
    { label: isMr ? 'मुख्यपृष्ठ' : isHi ? 'होम' : 'Home', href: `${localePrefix || '/'}` },
    { label: isMr ? 'मार्गदर्शिका' : isHi ? 'गाइड' : 'Guides', href: `${localePrefix}/destinations/${guide.category}` },
    { label: title, href: canonicalUrl },
  ];

  const relatedPlaces = DESTINATIONS_DATA.filter((p) =>
    guide.relatedPlaces.includes(p.slug)
  );

  return (
    <div className="min-h-screen bg-paper flex flex-col justify-between">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: safeJsonLd(generateArticleSchema(guide, canonicalUrl, locale)),
        }}
      />

      <SiteNav />

      <main id="main-content" className="flex-1 pt-24 sm:pt-28 pb-16 px-4 sm:px-8 lg:px-12 max-w-5xl mx-auto w-full space-y-8 sm:space-y-12">
        {/* Navigation & Language Switcher */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <Breadcrumbs items={breadcrumbs} />
          <LanguageSwitcher currentLocale={locale} />
        </div>

        {/* Guide Header */}
        <header className="space-y-4">
          <div className="flex flex-wrap items-center gap-3 text-xs font-semibold text-deep-violet">
            <span className="rounded-full bg-brand-50 border border-brand-100 px-3 py-1 uppercase tracking-wider">
              {guide.category}
            </span>
            <div className="flex items-center gap-1 text-on-surface-variant">
              <Clock className="h-3.5 w-3.5" />
              <span>{guide.readingTime}</span>
            </div>
            <div className="flex items-center gap-1 text-on-surface-variant">
              <Calendar className="h-3.5 w-3.5" />
              <span>Updated {guide.lastUpdated}</span>
            </div>
          </div>

          <h1 className="text-3xl sm:text-5xl font-black tracking-tight text-on-surface leading-tight">
            {title}
          </h1>

          <p className="text-base sm:text-lg text-on-surface-variant leading-relaxed">
            {guide.excerpt}
          </p>
        </header>

        {/* Hero Image */}
        <div className="relative aspect-[16/9] w-full rounded-[28px] overflow-hidden bg-slate-900 shadow-md">
          <Image
            src={guide.heroImage}
            alt={title}
            fill
            priority
            sizes="(max-width: 1024px) 100vw, 1000px"
            className="object-cover object-center"
          />
        </div>

        {/* Direct Answer Box */}
        <DirectAnswerBox answer={guide.directAnswer} locale={locale} subjectTitle={title} />

        {/* Guide Content Sections */}
        <article className="space-y-8">
          {guide.sections.map((section, idx) => (
            <div
              key={idx}
              className="rounded-2xl border border-brand-100 bg-white p-6 sm:p-8 space-y-4 shadow-xs"
            >
              <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-on-surface">
                {section.heading}
              </h2>
              <p className="text-sm sm:text-base leading-relaxed text-on-surface-variant">
                {section.content}
              </p>

              {section.highlights && section.highlights.length > 0 && (
                <div className="mt-4 p-4 rounded-xl bg-brand-50 border border-brand-100 space-y-2">
                  <span className="text-xs font-bold uppercase tracking-wider text-deep-violet block">
                    Key Highlights
                  </span>
                  <ul className="space-y-1.5 text-xs sm:text-sm text-on-surface">
                    {section.highlights.map((h, hIdx) => (
                      <li key={hIdx} className="flex items-start gap-2">
                        <CheckCircle2 className="h-4 w-4 text-deep-violet shrink-0 mt-0.5" />
                        <span>{h}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {section.tips && section.tips.length > 0 && (
                <div className="mt-4 p-4 rounded-xl bg-amber-50/70 border border-amber-200 text-amber-950 space-y-1 text-xs sm:text-sm">
                  <span className="font-bold uppercase tracking-wider text-amber-900 block mb-1">
                    Local Pro-Tip
                  </span>
                  {section.tips.map((t, tIdx) => (
                    <p key={tIdx}>• {t}</p>
                  ))}
                </div>
              )}
            </div>
          ))}
        </article>

        {/* Related Places */}
        {relatedPlaces.length > 0 && (
          <section className="space-y-4">
            <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-on-surface">
              Featured Attractions in this Guide
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {relatedPlaces.map((rp) => (
                <Link
                  key={rp.slug}
                  href={`${localePrefix}/places/${rp.slug}`}
                  className="group rounded-2xl overflow-hidden border border-brand-100 bg-white shadow-xs hover:shadow-md transition-all flex flex-col"
                >
                  <div className="relative aspect-[16/10] w-full overflow-hidden">
                    <Image
                      src={rp.heroImage}
                      alt={rp.title}
                      fill
                      sizes="(max-width: 640px) 100vw, 300px"
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-4 space-y-1">
                    <h3 className="text-sm font-bold text-on-surface group-hover:text-deep-violet transition-colors">
                      {isMr && rp.localized?.mr?.title ? rp.localized.mr.title : rp.title}
                    </h3>
                    <p className="text-xs text-on-surface-variant line-clamp-2">
                      {rp.excerpt}
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          </section>
        )}

        {/* FAQs */}
        <FAQAccordion faqs={guide.faqs} locale={locale} />

        {/* App CTA */}
        <ContextualAppCta
          appCtaHook={guide.appCtaHooks}
          placeSlug={guide.slug}
          locale={locale}
        />
      </main>

      <SiteFooter />
    </div>
  );
}
