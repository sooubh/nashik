import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import { Clock, Calendar, CheckCircle2, ArrowLeft, ArrowUpRight, ShieldCheck, ExternalLink, Tag as TagIcon } from 'lucide-react';
import { normalizeTagSlug, getTagsForGuide } from '@/lib/tags';
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

  const guideTags = getTagsForGuide(guide.slug);

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
            fetchPriority="high"
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
                      loading="lazy"
                      decoding="async"
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

        {/* Travel Themes & Tags */}
        {guideTags.length > 0 && (
          <div className="flex flex-wrap items-center gap-2 pt-2">
            <span className="text-xs font-bold text-on-surface flex items-center gap-1 mr-1">
              <TagIcon className="h-3.5 w-3.5 text-deep-violet" />
              <span>{isMr ? 'थीम्स:' : isHi ? 'थीम्स:' : 'Travel Themes:'}</span>
            </span>
            {guideTags.map((tag) => (
              <Link
                key={tag}
                href={`/tags/${normalizeTagSlug(tag)}`}
                className="inline-flex items-center gap-1 rounded-full bg-brand-50 border border-brand-100 px-3 py-1 text-xs font-semibold text-deep-violet hover:bg-brand-100 hover:border-brand-200 transition-colors"
                title={`Explore ${tag} guides and places in Nashik`}
              >
                <span>{tag}</span>
              </Link>
            ))}
          </div>
        )}

        {/* FAQs */}
        <FAQAccordion faqs={guide.faqs} locale={locale} />

        {/* Verified Sources & Fact-Check Audit */}
        {guide.sources && guide.sources.length > 0 && (
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
                <time dateTime={guide.lastVerified || '2026-11-24'}>{guide.lastVerified || '2026-11-24'}</time>
              </span>
            </div>
            <p className="text-xs text-on-surface-variant leading-relaxed">
              {isMr
                ? 'या मार्गदर्शिकेतील सर्व प्रवास सल्ला, वेळा व माहिती थेट अधिकृत पर्यटन महामंडळ व स्थानिक प्राधिकरणांकडून तपासली गेली आहे.'
                : isHi
                ? 'इस गाइड में दी गई सभी यात्रा सलाह, समय और विवरण आधिकारिक पर्यटन विकास निगम एवं स्थानीय प्रशासन से सत्यापित हैं।'
                : 'In accordance with our zero-invented-facts policy, all travel advice, routes, and operational details are verified against official authorities.'}
            </p>
            <ul className="space-y-2 text-xs sm:text-sm">
              {guide.sources.map((source, idx) => (
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
