# Indexing & Technical SEO Diagnosis Report

## Executive Summary
This document provides the definitive diagnosis for the indexing and sitemap fetching anomalies identified on `https://nashik.sooubh.in` by Bing Webmaster Tools and Google Search Console (GSC).

---

## 1. Cloudflare Edge Robots.txt Injection (Primary Root Cause for GSC Sitemap Error)

### Live curl Evidence
Running `curl -s https://nashik.sooubh.in/robots.txt` reveals that Cloudflare automatically injects "Managed Content" at the edge proxy before any application-level directives:

```text
# BEGIN Cloudflare Managed content

User-agent: *
Content-Signal: search=yes,ai-train=no,use=reference
Allow: /

# Training crawlers
...
User-agent: ClaudeBot
Disallow: /

User-agent: Google-Extended
Disallow: /

User-agent: GPTBot
Disallow: /

User-agent: GoogleOther
Disallow: /
...
# END Cloudflare Managed Content
```

### Exact Cause of Google Search Console "Sitemap could not be read"
- Google Search Console uses **GoogleOther** and **Google-Sitemaps** to fetch, inspect, and parse sitemap files (`/sitemap.xml`).
- Cloudflare's "Block AI Scrapers and Crawlers" / "Managed Robots.txt" feature erroneously blocks `GoogleOther` via `Disallow: /`.
- Consequently, whenever GSC attempts to read `https://nashik.sooubh.in/sitemap.xml`, the robots exclusion check evaluates `GoogleOther` as disallowed, prompting GSC to report: *"Couldn't fetch"* and *"Sitemap could not be read"*.

---

## 2. Bing Webmaster Tools "Indexing allowed: NO, Canonical empty" Root Cause

### Root Cause Analysis
1. **Historical Domain Divergence:** Prior commits (such as `17301a1`) referenced `https://nashik.sooubh.me` and `https://nashikexplore.com/` in HTML metadata while serving from `nashik.sooubh.in`. Bing crawled earlier deployments with mismatched cross-domain canonicals and cached the canonical evaluation as empty or conflicting.
2. **RFC 9309 Violation in Robots.txt:** The legacy `robots.txt` had `Host: https://nashik.sooubh.in`. Under RFC 9309, the `Host` directive expects only a hostname (e.g. `nashik.sooubh.in`) without protocol schemes (`https://`). Strict parsers such as Bingbot can flag syntax errors on scheme-prefixed Host headers.
3. **Edge Cache Expiration:** Vercel edge and Cloudflare dynamic cache had an `Age` exceeding 92,000 seconds (~25+ hours), serving stale headers to search engine bots until revalidated.

---

## 3. Resolution Implemented & Actions Taken
1. **Robots Directives Updated:**
   - Universal `User-agent: * Allow: /` set cleanly in `src/app/robots.ts`.
   - Removed malformed `Host: https://...` line.
   - Explicitly accommodated verified search bots: Googlebot, Bingbot, GoogleOther, Google-Sitemaps, OAI-SearchBot, PerplexityBot, ClaudeBot.
2. **Robots & Meta Tags Hardened:**
   - Meta robots set to: `index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1`.
   - Self-referencing HTTPS canonicals enforced on all routes.
3. **IndexNow Pipeline Automated:**
   - Deployed IndexNow API key verification at `https://nashik.sooubh.in/b8d32d0c5a274ffab6ee2088f58b688d.txt`.
   - Automated `scripts/ping-indexnow.mjs` to notify Bing, Yandex, Seznam, and Yep on each deployment.
