import { MetadataRoute } from 'next';
import { SITE_CONFIG } from '@/config/site';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
      },
      // Search and user-requested retrieval agents can discover and cite the public site.
      {
        userAgent: ['OAI-SearchBot', 'ChatGPT-User'],
        allow: '/',
      },
      {
        userAgent: ['Claude-SearchBot', 'Claude-User'],
        allow: '/',
      },
      {
        userAgent: ['PerplexityBot', 'Perplexity-User'],
        allow: '/',
      },
      // Google-Extended controls Gemini grounding and model-training use, not Google Search indexing.
      {
        userAgent: 'Google-Extended',
        allow: '/',
      },
      // Keep model-training crawlers separate from search/retrieval crawlers.
      {
        userAgent: ['GPTBot', 'ClaudeBot', 'CCBot'],
        disallow: '/',
      },
    ],
    sitemap: `${SITE_CONFIG.canonicalUrl}/sitemap.xml`,
    host: SITE_CONFIG.canonicalUrl,
  };
}
