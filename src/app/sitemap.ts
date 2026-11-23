import { MetadataRoute } from 'next';
import { SITE_CONFIG } from '@/config/site';
import { DESTINATIONS_DATA } from '@/data/destinationsData';
import { ALL_CATEGORIES } from '@/data/categoriesData';
import { ALL_REGIONAL_CITIES } from '@/data/regionalCities';
import { GUIDES_DATA } from '@/data/guidesData';
import { BLOG_POSTS_DATA } from '@/data/blogData';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = SITE_CONFIG.canonicalUrl;
  const lastModified = '2026-11-23';

  // Static platform & directory hub pages
  const staticRoutes: MetadataRoute.Sitemap = [
    { url: baseUrl, lastModified, changeFrequency: 'weekly', priority: 1.0 },
    { url: `${baseUrl}/places`, lastModified, changeFrequency: 'weekly', priority: 0.95 },
    { url: `${baseUrl}/destinations`, lastModified, changeFrequency: 'weekly', priority: 0.95 },
    { url: `${baseUrl}/guides`, lastModified, changeFrequency: 'weekly', priority: 0.9 },
    { url: `${baseUrl}/blog`, lastModified, changeFrequency: 'weekly', priority: 0.9 },
    { url: `${baseUrl}/trip-planner`, lastModified, changeFrequency: 'weekly', priority: 0.9 },
    { url: `${baseUrl}/contact`, lastModified, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${baseUrl}/delete-account`, lastModified, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${baseUrl}/data-safety`, lastModified, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${baseUrl}/privacy-policy`, lastModified, changeFrequency: 'yearly', priority: 0.6 },
    { url: `${baseUrl}/terms-of-use`, lastModified, changeFrequency: 'yearly', priority: 0.5 },
    { url: `${baseUrl}/cookies-policy`, lastModified, changeFrequency: 'yearly', priority: 0.5 },
    { url: `${baseUrl}/disclaimer`, lastModified, changeFrequency: 'yearly', priority: 0.5 },
  ];

  // Category & Regional City routes (en, mr, hi)
  const destinationSlugs = [...ALL_CATEGORIES, ...ALL_REGIONAL_CITIES];
  const destinationRoutes: MetadataRoute.Sitemap = destinationSlugs.flatMap((slug) => [
    {
      url: `${baseUrl}/destinations/${slug}`,
      lastModified,
      changeFrequency: 'weekly',
      priority: 0.85,
    },
    {
      url: `${baseUrl}/mr/destinations/${slug}`,
      lastModified,
      changeFrequency: 'weekly',
      priority: 0.85,
    },
    {
      url: `${baseUrl}/hi/destinations/${slug}`,
      lastModified,
      changeFrequency: 'weekly',
      priority: 0.85,
    },
  ]);

  // Destination / Place routes (en, mr, hi)
  const placeRoutes: MetadataRoute.Sitemap = DESTINATIONS_DATA.flatMap((place) => [
    {
      url: `${baseUrl}/places/${place.slug}`,
      lastModified,
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/mr/places/${place.slug}`,
      lastModified,
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/hi/places/${place.slug}`,
      lastModified,
      changeFrequency: 'weekly',
      priority: 0.9,
    },
  ]);

  // Guide routes (en, mr, hi)
  const guideRoutes: MetadataRoute.Sitemap = GUIDES_DATA.flatMap((guide) => [
    {
      url: `${baseUrl}/guides/${guide.slug}`,
      lastModified,
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/mr/guides/${guide.slug}`,
      lastModified,
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/hi/guides/${guide.slug}`,
      lastModified,
      changeFrequency: 'weekly',
      priority: 0.8,
    },
  ]);

  // Blog / Itinerary routes (en, mr, hi)
  const blogRoutes: MetadataRoute.Sitemap = BLOG_POSTS_DATA.flatMap((post) => [
    {
      url: `${baseUrl}/blog/${post.slug}`,
      lastModified,
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/mr/blog/${post.slug}`,
      lastModified,
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/hi/blog/${post.slug}`,
      lastModified,
      changeFrequency: 'weekly',
      priority: 0.8,
    },
  ]);

  return [...staticRoutes, ...destinationRoutes, ...placeRoutes, ...guideRoutes, ...blogRoutes];
}
