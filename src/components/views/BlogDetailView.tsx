import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import { Calendar, User, Tag, ListOrdered, ArrowRight, MapPin, Compass } from 'lucide-react';
import { BLOG_POSTS_DATA } from '@/data/blogData';
import { DESTINATIONS_DATA } from '@/data/destinationsData';
import { GUIDES_DATA } from '@/data/guidesData';
import { BlogPost, Locale } from '@/types/content';
import { generateBlogPostingSchema, generateBreadcrumbSchema } from '@/lib/schema';
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
    { label: isMr ? 'ब्लॉग व प्रवास' : isHi ? 'ब्लॉग एवं यात्रा' : 'Blog & Travelogue', href: `${localePrefix || ''}/blog` },
    { label: title, href: canonicalUrl },
  ];

  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: isMr ? 'मुख्यपृष्ठ' : isHi ? 'होम' : 'Home', url: `${SITE_CONFIG.canonicalUrl}${localePrefix || '/'}` },
    { name: isMr ? 'ब्लॉग व प्रवास' : isHi ? 'ब्लॉग एवं यात्रा' : 'Blog & Travelogue', url: `${SITE_CONFIG.canonicalUrl}${localePrefix || ''}/blog` },
    { name: title, url: canonicalUrl },
  ]);

  const blogPostingSchema = generateBlogPostingSchema(post, canonicalUrl, locale);

  // Curate 3 contextual internal places and 2 guides
  const relatedPlaces = DESTINATIONS_DATA.slice(0, 3);
  const relatedGuides = GUIDES_DATA.slice(0, 2);

  return (
    <div className="min-h-screen bg-paper flex flex-col justify-between">
      {/* BlogPosting JSON-LD Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: safeJsonLd(blogPostingSchema),
        }}
      />
      {/* BreadcrumbList JSON-LD Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: safeJsonLd(breadcrumbSchema),
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
              <time dateTime={post.publishedDate}>{post.publishedDate}</time>
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
            alt={`${title} - Nashik Travel Guide`}
            fill
            priority
            sizes="(max-width: 1024px) 100vw, 1000px"
            className="object-cover object-center"
          />
        </div>

        {/* Table of Contents (TOC) */}
        <nav aria-label="Table of Contents" className="rounded-2xl border border-brand-100 bg-white p-6 sm:p-8 space-y-4 shadow-xs">
          <div className="flex items-center gap-2 text-deep-violet font-bold text-base sm:text-lg">
            <ListOrdered className="h-5 w-5 text-signal-lime bg-deep-violet rounded-md p-0.5" />
            <span>{isMr ? 'अनुक्रमणिका (Table of Contents)' : isHi ? 'विषय सूची (Table of Contents)' : 'Table of Contents'}</span>
          </div>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm text-on-surface-variant">
            <li>
              <a href="#direct-answer" className="inline-flex items-center gap-1.5 hover:text-deep-violet transition-colors py-1">
                <span className="text-deep-violet font-bold">1.</span> Quick Answer & Key Highlights
              </a>
            </li>
            {post.itineraryDays && post.itineraryDays.length > 0 && (
              <li>
                <a href="#itinerary-breakdown" className="inline-flex items-center gap-1.5 hover:text-deep-violet transition-colors py-1">
                  <span className="text-deep-violet font-bold">2.</span> Day-by-Day Route Itinerary
                </a>
              </li>
            )}
            <li>
              <a href="#detailed-article" className="inline-flex items-center gap-1.5 hover:text-deep-violet transition-colors py-1">
                <span className="text-deep-violet font-bold">{post.itineraryDays && post.itineraryDays.length > 0 ? '3.' : '2.'}</span> Complete Travelogue & Tips
              </a>
            </li>
            <li>
              <a href="#frequently-asked-questions" className="inline-flex items-center gap-1.5 hover:text-deep-violet transition-colors py-1">
                <span className="text-deep-violet font-bold">{post.itineraryDays && post.itineraryDays.length > 0 ? '4.' : '3.'}</span> FAQs & Practical Logistics
              </a>
            </li>
            <li>
              <a href="#related-attractions" className="inline-flex items-center gap-1.5 hover:text-deep-violet transition-colors py-1">
                <span className="text-deep-violet font-bold">{post.itineraryDays && post.itineraryDays.length > 0 ? '5.' : '4.'}</span> Nearby Places & Guides
              </a>
            </li>
            <li>
              <a href="#offline-app-cta" className="inline-flex items-center gap-1.5 hover:text-deep-violet transition-colors py-1">
                <span className="text-deep-violet font-bold">{post.itineraryDays && post.itineraryDays.length > 0 ? '6.' : '5.'}</span> Offline Maps & Trivio App
              </a>
            </li>
          </ul>
        </nav>

        {/* Direct Answer Box */}
        <div id="direct-answer">
          <DirectAnswerBox answer={post.directAnswer} locale={locale} subjectTitle={title} />
        </div>

        {/* Itinerary Days if present */}
        {post.itineraryDays && post.itineraryDays.length > 0 && (
          <section id="itinerary-breakdown" className="space-y-6">
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-on-surface">
              {isMr ? 'दिवसनिहाय प्रवास योजना (Day-by-Day Itinerary)' : isHi ? 'दिन-प्रतिदिन यात्रा योजना' : 'Day-by-Day Route Itinerary'}
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
        <section id="detailed-article" className="space-y-4">
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-on-surface">
            {isMr ? 'तपशीलवार प्रवास माहिती' : isHi ? 'विस्तृत यात्रा विवरण' : 'Detailed Travelogue & Field Notes'}
          </h2>
          <article className="rounded-2xl border border-brand-100 bg-white p-6 sm:p-8 space-y-4 shadow-xs text-on-surface text-base sm:text-lg leading-relaxed whitespace-pre-line">
            {post.content}
          </article>
        </section>

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
        <div id="frequently-asked-questions">
          <FAQAccordion faqs={post.faqs} locale={locale} />
        </div>

        {/* Contextual Internal Links Section */}
        <section id="related-attractions" className="space-y-6 rounded-2xl border border-brand-100 bg-white p-6 sm:p-8 shadow-xs">
          <h2 className="text-xl sm:text-2xl font-bold text-on-surface flex items-center gap-2">
            <Compass className="h-5 w-5 text-deep-violet" />
            <span>{isMr ? 'संबंधित पर्यटन स्थळे व मार्गदर्शक' : isHi ? 'संबंधित पर्यटन स्थल एवं गाइड' : 'Featured Nashik Attractions & Guides'}</span>
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {relatedPlaces.map((place) => (
              <Link
                key={place.slug}
                href={`${localePrefix}/places/${place.slug}`}
                className="group p-4 rounded-xl border border-brand-100 hover:border-deep-violet bg-brand-50/50 hover:bg-brand-50 transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center gap-1 text-xs text-deep-violet font-bold mb-1">
                    <MapPin className="h-3 w-3" />
                    <span>{place.categoryLabel[locale] || place.category}</span>
                  </div>
                  <h3 className="font-bold text-sm text-on-surface group-hover:text-deep-violet transition-colors line-clamp-1">
                    {place.title}
                  </h3>
                  <p className="text-xs text-on-surface-variant line-clamp-2 mt-1">
                    {place.excerpt}
                  </p>
                </div>
                <span className="text-xs font-bold text-deep-violet mt-3 inline-flex items-center gap-1">
                  View Timings & Pass <ArrowRight className="h-3 w-3 group-hover:translate-x-1 transition-transform" />
                </span>
              </Link>
            ))}
          </div>

          <div className="pt-2 border-t border-brand-100 flex flex-wrap items-center justify-between gap-4 text-xs font-semibold text-deep-violet">
            <span>Explore More Guides:</span>
            <div className="flex flex-wrap gap-2">
              {relatedGuides.map((guide) => (
                <Link
                  key={guide.slug}
                  href={`${localePrefix}/guides/${guide.slug}`}
                  className="rounded-full bg-white border border-brand-200 px-3 py-1 hover:bg-deep-violet hover:text-white transition-colors"
                >
                  {guide.title}
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* App CTA */}
        <div id="offline-app-cta">
          <ContextualAppCta
            appCtaHook={post.appCtaHooks}
            placeSlug={post.slug}
            locale={locale}
          />
        </div>
      </main>

      <SiteFooter />
    </div>
  );
}
