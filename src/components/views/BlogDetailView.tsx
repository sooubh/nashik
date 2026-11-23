import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import { Calendar, User, Tag, Clock } from 'lucide-react';
import { BLOG_POSTS_DATA } from '@/data/blogData';
import { BlogPost, Locale } from '@/types/content';
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

interface BlogDetailViewProps {
  slug: string;
  locale: Locale;
}

export function BlogDetailView({ slug, locale }: BlogDetailViewProps) {
  const post = BLOG_POSTS_DATA.find((b) => b.slug === slug);
  if (!post) {
    notFound();
  }

  const isMr = locale === 'mr';
  const isHi = locale === 'hi';

  const title = isMr && post.localTitle?.mr
    ? post.localTitle.mr
    : isHi && post.localTitle?.hi
    ? post.localTitle.hi
    : post.title;

  const localePrefix = locale === 'en' ? '' : `/${locale}`;
  const canonicalUrl = `${SITE_CONFIG.canonicalUrl}${localePrefix}/blog/${post.slug}`;

  const breadcrumbs = [
    { label: isMr ? 'मुख्यपृष्ठ' : isHi ? 'होम' : 'Home', href: `${localePrefix || '/'}` },
    { label: isMr ? 'ब्लॉग व प्रवास' : isHi ? 'ब्लॉग एवं यात्रा' : 'Blog & Travelogue', href: `${localePrefix || '/'}` },
    { label: title, href: canonicalUrl },
  ];

  return (
    <div className="min-h-screen bg-paper flex flex-col justify-between">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: safeJsonLd(generateArticleSchema(post, canonicalUrl, locale)),
        }}
      />

      <SiteNav />

      <main id="main-content" className="flex-1 pt-24 sm:pt-28 pb-16 px-4 sm:px-8 lg:px-12 max-w-5xl mx-auto w-full space-y-8 sm:space-y-12">
        {/* Navigation & Language Switcher */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <Breadcrumbs items={breadcrumbs} />
          <LanguageSwitcher currentLocale={locale} />
        </div>

        {/* Post Header */}
        <header className="space-y-4">
          <div className="flex flex-wrap items-center gap-3 text-xs font-semibold text-deep-violet">
            <span className="rounded-full bg-brand-50 border border-brand-100 px-3 py-1 uppercase tracking-wider">
              {post.category}
            </span>
            <div className="flex items-center gap-1 text-on-surface-variant">
              <Calendar className="h-3.5 w-3.5" />
              <span>{post.publishedDate}</span>
            </div>
            <div className="flex items-center gap-1 text-on-surface-variant">
              <User className="h-3.5 w-3.5" />
              <span>{post.author}</span>
            </div>
          </div>

          <h1 className="text-3xl sm:text-5xl font-black tracking-tight text-on-surface leading-tight">
            {title}
          </h1>

          <p className="text-base sm:text-lg text-on-surface-variant leading-relaxed">
            {post.summary}
          </p>
        </header>

        {/* Hero Image */}
        <div className="relative aspect-[16/9] w-full rounded-[28px] overflow-hidden bg-slate-900 shadow-md">
          <Image
            src={post.heroImage}
            alt={title}
            fill
            priority
            sizes="(max-width: 1024px) 100vw, 1000px"
            className="object-cover object-center"
          />
        </div>

        {/* Direct Answer Box */}
        <DirectAnswerBox answer={post.directAnswer} locale={locale} subjectTitle={title} />

        {/* Itinerary Days if present */}
        {post.itineraryDays && post.itineraryDays.length > 0 && (
          <section className="space-y-6">
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-on-surface">
              Day-by-Day Route Itinerary
            </h2>

            <div className="space-y-4">
              {post.itineraryDays.map((day) => (
                <div
                  key={day.dayNumber}
                  className="rounded-2xl border border-brand-100 bg-white p-6 sm:p-8 space-y-4 shadow-xs"
                >
                  <div className="flex items-center gap-3">
                    <span className="flex h-8 w-8 items-center justify-center rounded-full bg-deep-violet text-white text-xs font-bold">
                      {day.dayNumber}
                    </span>
                    <h3 className="text-lg sm:text-xl font-bold text-on-surface">
                      {day.dayTitle}
                    </h3>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2 text-xs sm:text-sm">
                    <div className="p-3 rounded-xl bg-brand-50 space-y-1">
                      <span className="font-bold text-deep-violet block">Morning</span>
                      <p className="text-on-surface-variant">{day.morningActivity}</p>
                    </div>

                    <div className="p-3 rounded-xl bg-brand-50 space-y-1">
                      <span className="font-bold text-deep-violet block">Afternoon</span>
                      <p className="text-on-surface-variant">{day.afternoonActivity}</p>
                    </div>

                    <div className="p-3 rounded-xl bg-brand-50 space-y-1">
                      <span className="font-bold text-deep-violet block">Evening</span>
                      <p className="text-on-surface-variant">{day.eveningActivity}</p>
                    </div>
                  </div>

                  <div className="pt-2 border-t border-brand-50 flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-xs text-on-surface-variant">
                    <div>
                      <strong className="text-deep-violet">Meals: </strong>
                      <span>{day.recommendedMeals}</span>
                    </div>
                    <div>
                      <strong className="text-deep-violet">Travel Tip: </strong>
                      <span>{day.travelTips}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Main Content Article */}
        <article className="rounded-2xl border border-brand-100 bg-white p-6 sm:p-8 space-y-4 shadow-xs text-on-surface text-base sm:text-lg leading-relaxed whitespace-pre-line">
          {post.content}
        </article>

        {/* Tags */}
        <div className="flex flex-wrap gap-2">
          {post.tags.map((tag) => (
            <span
              key={tag}
              className="inline-flex items-center gap-1 rounded-full bg-brand-50 border border-brand-100 px-3 py-1 text-xs font-semibold text-deep-violet"
            >
              <Tag className="h-3 w-3" />
              <span>{tag}</span>
            </span>
          ))}
        </div>

        {/* FAQs */}
        <FAQAccordion faqs={post.faqs} locale={locale} />

        {/* App CTA */}
        <ContextualAppCta
          appCtaHook={post.appCtaHooks}
          placeSlug={post.slug}
          locale={locale}
        />
      </main>

      <SiteFooter />
    </div>
  );
}
