import { SITE_CONFIG } from '@/config/site';

export interface UtmParams {
  source?: string;
  medium?: string;
  campaign?: string;
  content?: string;
  term?: string;
}

/**
 * Generates an Android Google Play Store install URL enriched with standard
 * UTM campaign parameters encoded into the Google Play Install Referrer.
 *
 * @param placement - Location/element triggering the CTA (e.g. 'hero_button', 'nav_pill', 'place_dossier')
 * @param campaign - Overarching campaign name (default: 'web_to_app')
 * @param additionalParams - Optional UTM overrides (source, content, term)
 */
export function getPlayStoreUrl(
  placement: string = 'general',
  campaign: string = 'web_to_app',
  additionalParams?: Partial<UtmParams>
): string {
  const base = SITE_CONFIG.playStoreUrl;
  const utmSource = additionalParams?.source || 'website';
  const utmMedium = additionalParams?.medium || placement;
  const utmCampaign = additionalParams?.campaign || campaign;

  const referrerParams = new URLSearchParams({
    utm_source: utmSource,
    utm_medium: utmMedium,
    utm_campaign: utmCampaign,
  });

  if (additionalParams?.content) {
    referrerParams.append('utm_content', additionalParams.content);
  }
  if (additionalParams?.term) {
    referrerParams.append('utm_term', additionalParams.term);
  }

  // Google Play URL format requires encoded referrer parameter
  const referrerString = encodeURIComponent(referrerParams.toString());
  return `${base}&referrer=${referrerString}`;
}
