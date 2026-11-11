import { MetadataRoute } from 'next';
import { SITE_CONFIG } from '@/config/site';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
      },
      {
        userAgent: [
          'OAI-SearchBot',
          'Claude-SearchBot',
          'PerplexityBot',
        ],
        allow: '/',
      },
    ],
    sitemap: `${SITE_CONFIG.canonicalUrl}/sitemap.xml`,
    host: SITE_CONFIG.canonicalUrl,
  };
}
