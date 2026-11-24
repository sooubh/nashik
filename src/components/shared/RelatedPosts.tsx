import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

export interface RelatedPostItem {
  title: string;
  href: string;
  category: string;
  heroImage: string;
  excerpt: string;
}

interface RelatedPostsProps {
  posts: RelatedPostItem[];
  title?: string;
}

export const RelatedPosts: React.FC<RelatedPostsProps> = ({
  posts,
  title = 'Related Guides & Destinations',
}) => {
  if (!posts || posts.length === 0) return null;

  return (
    <section className="border-t border-gray-200 pt-8" aria-label="Related Guides">
      <h3 className="text-2xl font-bold text-gray-900 mb-6">{title}</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {posts.map((post) => (
          <Link
            key={post.href}
            href={post.href}
            className="group flex flex-col bg-white border border-gray-200 rounded-xl overflow-hidden hover:shadow-md transition-shadow"
          >
            <div className="relative w-full h-44 bg-gray-100 overflow-hidden">
              <Image
                src={post.heroImage}
                alt={post.title}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                className="object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <span className="absolute top-2 left-2 px-2 py-0.5 bg-black/60 backdrop-blur-sm text-white text-[10px] font-semibold rounded uppercase tracking-wider">
                {post.category}
              </span>
            </div>
            <div className="p-4 flex flex-col flex-grow">
              <h4 className="font-bold text-gray-900 text-base group-hover:text-purple-700 transition-colors line-clamp-2 mb-2">
                {post.title}
              </h4>
              <p className="text-xs text-gray-600 line-clamp-3 leading-relaxed flex-grow">
                {post.excerpt}
              </p>
              <span className="mt-3 text-xs font-semibold text-purple-700 inline-flex items-center gap-1">
                Read guide <span>→</span>
              </span>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
};
