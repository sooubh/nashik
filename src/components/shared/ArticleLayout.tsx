import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Breadcrumbs, BreadcrumbItem } from './Breadcrumbs';
import { TrivioCTA } from './TrivioCTA';
import { AdSlot } from './AdSlot';
import { RelatedPosts, RelatedPostItem } from './RelatedPosts';
import { VerifiedSource } from '@/types/contract';

interface ArticleLayoutProps {
  title: string;
  description: string;
  heroImage: string;
  heroImageAlt?: string;
  category: string;
  categoryHref: string;
  breadcrumbs: BreadcrumbItem[];
  author: string;
  publishedDate: string;
  lastVerified: string;
  directAnswer?: string;
  sources: VerifiedSource[];
  relatedPosts?: RelatedPostItem[];
  slug: string;
  children: React.ReactNode;
}

export const ArticleLayout: React.FC<ArticleLayoutProps> = ({
  title,
  heroImage,
  heroImageAlt = title,
  category,
  categoryHref,
  breadcrumbs,
  author,
  publishedDate,
  lastVerified,
  directAnswer,
  sources,
  relatedPosts = [],
  slug,
  children,
}) => {
  return (
    <main id="main-content" className="min-h-screen bg-gray-50 pb-16">
      <Breadcrumbs items={breadcrumbs} />

      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-4">
        {/* Category Badge & Headline */}
        <div className="mb-4">
          <Link
            href={categoryHref}
            className="inline-block px-3 py-1 bg-purple-100 text-purple-800 text-xs font-semibold rounded-full uppercase tracking-wider hover:bg-purple-200 transition-colors"
          >
            {category}
          </Link>
        </div>

        <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-900 tracking-tight mb-4">
          {title}
        </h1>

        {/* Byline and Trust Metadata */}
        <div className="flex flex-wrap items-center gap-4 text-sm text-gray-600 pb-6 border-b border-gray-200 mb-6">
          <span className="font-medium text-gray-900">By {author}</span>
          <span>•</span>
          <time dateTime={publishedDate}>Published: {publishedDate}</time>
          <span>•</span>
          <span className="inline-flex items-center text-emerald-700 font-semibold bg-emerald-50 px-2.5 py-0.5 rounded-full">
            ✓ Fact-Checked & Verified: {lastVerified}
          </span>
        </div>

        {/* Hero Image */}
        <div className="relative w-full h-64 sm:h-96 rounded-2xl overflow-hidden mb-8 shadow-md">
          <Image
            src={heroImage}
            alt={heroImageAlt}
            fill
            priority
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 896px"
          />
        </div>

        {/* Direct Answer Summary Box for AI / Search engines */}
        {directAnswer && (
          <div className="mb-8 p-5 bg-gradient-to-r from-purple-50 to-indigo-50 border-l-4 border-purple-600 rounded-r-xl shadow-sm">
            <h2 className="text-xs uppercase font-bold tracking-wider text-purple-900 mb-1">
              Verified Summary & Key Takeaways
            </h2>
            <p className="text-gray-800 text-base leading-relaxed font-normal">{directAnswer}</p>
          </div>
        )}

        {/* Main Article Content */}
        <div className="prose prose-purple max-w-none text-gray-800 leading-relaxed space-y-6">
          {children}
        </div>

        {/* Mid-Article Ad Slot */}
        <div className="my-8">
          <AdSlot slotId="article-mid" format="banner" />
        </div>

        {/* Mid-Article Trivio CTA */}
        <div className="my-10">
          <TrivioCTA
            variant="compact"
            slug={slug}
            headline={`Explore ${title} with Offline Maps in Trivio`}
            subline="Get direct GPS navigation, crowd timings, and audio guide offline in the Trivio Android App."
          />
        </div>

        {/* Verified Live Sources Section */}
        {sources && sources.length > 0 && (
          <section className="mt-12 p-6 bg-white rounded-xl border border-gray-200 shadow-sm">
            <h2 className="text-lg font-bold text-gray-900 mb-3 flex items-center gap-2">
              <span className="text-emerald-600">🛡️</span> Primary Official Sources & Verification
            </h2>
            <p className="text-xs text-gray-500 mb-4">
              All timings, ticket prices, schedules, and administrative rules in this article are cross-verified with official government portals, municipal authorities, and temple trusts.
            </p>
            <ul className="divide-y divide-gray-100">
              {sources.map((src, index) => (
                <li key={index} className="py-2.5 flex flex-col sm:flex-row sm:items-center justify-between text-sm">
                  <a
                    href={src.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-purple-700 hover:underline font-medium break-all"
                  >
                    {src.title} ↗
                  </a>
                  <span className="text-xs text-gray-400 mt-1 sm:mt-0">
                    Type: <span className="capitalize">{src.type}</span> • Verified: {src.verifiedDate}
                  </span>
                </li>
              ))}
            </ul>
          </section>
        )}

        {/* Bottom Ad Slot */}
        <div className="my-8">
          <AdSlot slotId="article-bottom" format="rectangle" />
        </div>

        {/* Related Posts */}
        {relatedPosts && relatedPosts.length > 0 && (
          <div className="mt-12">
            <RelatedPosts posts={relatedPosts} />
          </div>
        )}

        {/* Bottom Full Trivio CTA */}
        <div className="mt-12">
          <TrivioCTA variant="full" slug={slug} />
        </div>
      </article>
    </main>
  );
};
