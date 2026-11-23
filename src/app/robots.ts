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
        userAgent: ['Googlebot', 'Bingbot'],
        allow: '/',
      },
      {
        userAgent: [
          'GPTBot',
          'ChatGPT-User',
          'PerplexityBot',
          'ClaudeBot',
          'Google-Extended',
          'anthropic-ai',
          'OAI-SearchBot',
        ],
        allow: '/',
      },
    ],
    sitemap: `${SITE_CONFIG.canonicalUrl}/sitemap.xml`,
    host: SITE_CONFIG.canonicalUrl,
  };
}
