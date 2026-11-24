# NASHIK_SWARM_MASTER.md

Place this file at `/docs/NASHIK_SWARM_MASTER.md` in the repo. Every agent reads it fully before doing anything.

---

## 0. HOW TO RUN (for the owner, Sourabh)

1. Put this file in the repo at `/docs/NASHIK_SWARM_MASTER.md` and commit.
2. Paste ONLY the short launcher prompt (section 14) into Antigravity.
3. Orchestrator does Phase 0 and STOPS. Reply "go" only after you read the audit.
4. Content ships in batches of 10 pages. Deploy and verify after each batch.

---

## 1. PROJECT

- Site: https://nashik.sooubh.in (Nashik travel guide; subdomain of sooubh.in). Languages present: English plus `/mr/` and `/hi/` URLs.
- App to promote: **Trivio**. Play Store link: `<PASTE_TRIVIO_LINK>`
- Goals:
  1. Fully indexable on Google, Bing and other engines
  2. Cited by AI assistants (ChatGPT, Perplexity, Gemini, Copilot, Claude)
  3. Organic traffic growth
  4. Fast, clean, consistent, manageable codebase
  5. Every page shows an image when shared (WhatsApp, Facebook, X, LinkedIn, Telegram)
  6. Trivio promotion everywhere, tastefully
  7. Ads-ready (off by default)

### Known problems to fix first
- Bing URL Inspection on the homepage: Crawl allowed = Yes, Page Fetch = Successful, **Indexing allowed = NO**, Canonical empty. Something sends a noindex signal.
- Google Search Console sitemap submission: "Couldn't fetch" then "Sitemap could not be read", even though `sitemap.xml` opens fine in the browser. Diagnose: HTTP status and redirects, Content-Type (must be XML), bot-protection/Cloudflare blocking Googlebot, X-Robots-Tag on the sitemap, invalid XML or hreflang namespace errors, wrong host/protocol inside the sitemap, size limits.
- Other platforms are also not indexing. Suspect a shared cause (site-wide header or flag) before suspecting content.

---

## 2. GLOBAL RULES (all agents)

1. **Zero invented facts.** Every date, timing, fee, distance, rule, phone number, route and statistic must be verified live on the internet. Official sources first: Maharashtra Tourism, Nashik Municipal Corporation, district administration / Kumbh authority, Indian Railways, MSRTC, ASI, temple trusts, Google Maps. If unverifiable, write "check official source" or omit.
2. Every article ends with **Sources** (real URLs) and **Last verified: <date>**.
3. No outdated data. Fix existing pages too. Log every change.
4. No thin, padded, copy-pasted or mass-generated filler. Paraphrase and cite. Each page must carry real practical value.
5. Never break existing URLs. If a URL changes, add a 301 redirect.
6. Small, clean, readable code. Do not touch unrelated code.
7. Images: own, openly licensed (record license and attribution in `/docs/image-licenses.md`), or generated branded graphics. No hotlinking. No random Google Images.
8. **Secrets:** never commit API keys, OAuth files or service-account JSON. Use env vars and `.gitignore`.
9. No agent edits another agent's files. Request changes through the orchestrator.

---

## 3. PHASE 0: ORCHESTRATOR SOLO (before spawning agents)

1. Detect stack: framework, hosting, build, rendering mode (static / SSR / SPA).
2. Crawl the full site. Output a table: URL | title | description | words | canonical | robots meta | X-Robots-Tag | status | inbound links | has OG image.
3. Find the exact noindex source and quote the exact line (meta, X-Robots-Tag, hosting headers such as `firebase.json`, framework flag, env var, robots.txt, JS-injected tags, Cloudflare rules).
4. Diagnose the GSC sitemap "could not be read" error (see section 1) with real `curl -sI` output.
5. Create and commit the **shared contract** to main:
   - `/src/config/site.*`: site name, URL, Trivio link, socials, default OG image, theme
   - Content schema (frontmatter): `title, description, slug, category, tags[], date, updated, author, heroImage, sources[], related[], intent, lastVerified, lang`
   - URL map: `/kumbh/ /temples/ /places/ /food/ /day-trips/ /itineraries/ /travel-tips/ /stay/ /guides/ /tags/ /trivio/`
   - Shared components: `Seo, Breadcrumbs, ArticleLayout, TrivioCTA, AdSlot, RelatedPosts`
   - `/docs/content-guidelines.md`
6. **STOP.** Show audit and plan. Wait for "go".

---

## 4. AGENT 1: INDEXING + TECH SEO

Owns: head/SEO component, robots.txt, sitemap, hosting config, redirects, headers.

- Remove EVERY noindex source (meta, X-Robots-Tag, framework settings, staging flags).
- All public pages: `<meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1">`, unique title (50-60 chars), unique description (140-160), self-referencing absolute https canonical (one trailing-slash style, no www/http mismatch).
- Meta, canonical, hreflang and JSON-LD must be in the **initial HTML** (SSG/SSR), not JS-injected.
- hreflang for `en`, `mr`, `hi` with `x-default`, self-referencing and reciprocal.
- JSON-LD: WebSite + SearchAction, Organization, BreadcrumbList, Article, FAQPage (real FAQs only), TouristAttraction / Place / Event, MobileApplication (Trivio).
- Auto-generated `sitemap.xml` (canonical URLs only, accurate lastmod, sitemap index split by section/language), `robots.txt` (`Allow: /` plus Sitemap line), custom 404, favicon/manifest, RSS feed.
- Headers: HSTS, X-Content-Type-Options, Referrer-Policy, immutable cache for hashed assets, brotli. **No X-Robots-Tag noindex anywhere.**
- Multi-engine setup:
  - Google: domain + URL-prefix property, sitemap, URL Inspection checklist. (Do not use the Indexing API; it is not for this content type.)
  - Bing: Webmaster Tools, sitemap, IndexNow.
  - IndexNow key file plus post-deploy ping script (Bing, Yandex, Naver, Seznam, Yep). DuckDuckGo and Ecosia rely on Bing's index.
  - Prepare verification and sitemap steps (docs only) for Yandex Webmaster, Naver, Brave.
- Ensure main domain `sooubh.in` links to `nashik.sooubh.in` (crawl path and authority).
- Write findings to `/docs/indexing-diagnosis.md`. Common causes of "Discovered / Crawled, currently not indexed": new subdomain with no authority, thin or duplicate content, weak internal links, orphan pages, slow TTFB, soft 404s, wrong canonical.

---

## 5. AGENT 2: ARCHITECTURE + DESIGN SYSTEM + PERFORMANCE

Owns: layout, global CSS, components, build config, fonts.

- One layout, one design system (fonts, colors, spacing, buttons, cards), mobile-first.
- Mobile targets: Lighthouse Performance 90+, SEO 100, Accessibility 95+, Best Practices 95+; LCP < 2.5s, CLS < 0.1, INP < 200ms.
- Self-hosted/subset fonts (`font-display: swap`), minimal JS, critical CSS, code-split, remove unused deps/CSS, WebP/AVIF, width/height on images, lazy-load below the fold, preload hero.
- ESLint + Prettier, clear folders, README (setup, add-article guide, deploy).
- **Build validator:** fail the build if a page lacks title, description, canonical, sources, OG image or lastVerified.
- Accessibility: semantic HTML, alt text, contrast, focus states, skip link.

---

## 6. AGENT 3: KUMBH / SIMHASTHA CLUSTER

Owns: `/content/kumbh/*`

10+ verified articles plus a hub page. Verify every date and rule live from official notifications first.

1. Complete guide (what, why Nashik, history)
2. Official dates, Shahi Snan schedule and tithis
3. Ramkund + Godavari ghats: snan rules, timings, etiquette
4. How to reach: train, bus, air, road; official special trains if announced
5. Where to stay: areas, budgets, official accommodation if announced
6. Crowd management, safety, do's and don'ts, official helplines
7. Trimbakeshwar + Kumbh: darshan, rules, timings
8. Akhadas, sadhus, Shahi procession explained simply
9. Kumbh with elders / kids / first-timers: checklist
10. Kumbh FAQ: top 25 questions
11. Nashik vs Prayagraj / Haridwar / Ujjain Kumbh
12. Food and day trips during Kumbh

Plus: "Kumbh updates" page (with last-updated date) and a printable checklist.

---

## 7. AGENT 4: SEARCH-INTENT CONTENT

Owns: `/content/guides/*`, `/content/itineraries/*`

Build one page per intent from Google's "People also search for". Each page has a unique angle, no keyword cannibalization:

- Top 10 places to visit in Nashik
- Top 10 places to visit in Nashik with family
- Top 5 tourist places in Nashik
- Places to visit in Nashik for couples
- Places to visit in Nashik with friends
- Tourist places near Nashik within 100 km (verified distances and travel times)
- Places to visit in Nashik with family in 1 day (hour-by-hour)
- One day picnic spots in Nashik

Then research 20+ more high-intent queries (Google autocomplete, People Also Ask, related searches, Bing suggestions, Google Trends India): Nashik in 1/2/3 days, best time to visit, budget trip, monsoon/winter, wineries, trekking, Nashik to Shirdi / Trimbakeshwar / Saptashrungi, food, etc. Save in `/docs/keyword-map.md` (query | intent | target page | priority). Build the top ones.

Each page: answer-first TL;DR, ranked list with verified practical details (timings, fee, best time, distance, map link), FAQ, internal links, Sources, Last verified, Trivio CTA.

---

## 8. AGENT 5: PLACES, TEMPLES, FOOD, TRAVEL TIPS

Owns: `/content/places/*, /temples/*, /food/*, /day-trips/*, /travel-tips/*, /stay/*`

- Audit existing pages; fix outdated and wrong data.
- Reach 50+ total pages over time, in batches of 10, quality over count. Cover: Panchavati, Kalaram, Sita Gufa, Trimbakeshwar, Saptashrungi, Pandavleni, Anjaneri, Brahmagiri, Someshwar, Sula/wineries, Igatpuri, Bhandardara, Shirdi day trip, transport, safety, budget, seasonal guides, local food, stay areas.
- Each: how to reach, timings, fees, best time, map link, FAQ, Sources, Last verified.
- If a language version (`/mr/`, `/hi/`) exists for a page, keep facts identical across languages.

---

## 9. AGENT 6: IMAGES + SOCIAL SHARING

Owns: `/public/images`, OG image generator, image components.

- Every page shows an image when its link is shared.
- Build-time branded 1200x630 OG images (page title + Nashik visual + Trivio mark) with a default fallback.
- `og:title, og:description, og:url, og:type, og:image, og:image:alt, og:site_name`, `twitter:card=summary_large_image` on all pages.
- Hero images with descriptive alt text and captions. License log in `/docs/image-licenses.md`.
- WebP/AVIF, no hotlinking.
- Verify on 10 sample URLs with OG/Facebook-debugger-style checks.

---

## 10. AGENT 7: INTERNAL LINKING + TAGS + ON-SITE SEARCH

Owns: related/tag/category/search components, `/docs/backlinks.md`

- Hub-and-spoke: hubs link to all spokes; every spoke links back to its hub. No orphans. Everything within 3 clicks of home.
- 3-5 contextual internal links per article with descriptive anchors (never "click here"). Related posts, Popular guides, Recently updated, header/footer links.
- 3-6 tags per article, `/tags/<tag>/` pages (indexable only with 3+ posts, else `noindex, follow`). Category pages with unique intro text. Crawlable pagination.
- Fast on-site search (Pagefind or Fuse).
- External links: official sources with `rel="noopener"`; `rel="sponsored nofollow"` for ads/affiliates. Run a broken-link checker.
- `/docs/backlinks.md`: legit plan only (Google Business Profile, Trivio Play Store listing, sooubh.in, GitHub, socials, local directories, Nashik travel communities, Reddit/Quora with genuinely useful answers, outreach template, shareable assets like maps and checklists). No spam.

---

## 11. AGENT 8: TRIVIO PROMOTION + ADS + LEGAL

Owns: `/trivio/`, CTA/ad components, legal pages.

- Header "Get Trivio" button, footer block, dismissible mobile bottom bar.
- Contextual CTA mid-article and end ("Plan this on Trivio") with `utm_source=website&utm_medium=article&utm_campaign=<slug>`.
- `/trivio/` landing page: features, screenshots, FAQ, install button, MobileApplication JSON-LD.
- Ad slots (header, in-article after paragraph 3, sidebar, footer): fixed heights (no CLS), lazy-loaded, behind `ADS_ENABLED=false`. `ads.txt` placeholder. Never place ads above the main content on mobile.
- Cookie/consent banner (DPDP + AdSense compatible), Privacy Policy, Terms, About, Contact, Disclaimer.

---

## 12. AGENT 9: FACT-CHECKER + QA (can block merges)

- For EVERY article from agents 3, 4, 5: re-verify each date, fee, timing, distance and rule independently from live sources. Log in `/docs/fact-check-log.md` (claim | source URL | date verified | status).
- Reject articles with unverified claims, thin content, missing sources or copied text.
- Run duplicate / cannibalization checks.
- Run link checker, build validator, Lighthouse.

---

## 13. AI-BOT VISIBILITY (ChatGPT, Perplexity, Gemini, Copilot, Claude)

Owner: Agent 1 (technical) + Agents 3, 4, 5 (content).

Reality: AI assistants cite pages that are already indexed (especially in Bing and Google) and that are specific and trustworthy. No indexing means no AI citations.

**Technical**
- `robots.txt` must not block: `OAI-SearchBot`, `ChatGPT-User`, `PerplexityBot`, `Googlebot`, `Bingbot`, `ClaudeBot`. `GPTBot` and `Google-Extended` are training crawlers; blocking them is the owner's choice and does not affect search citations. Verify current bot names in each vendor's official docs before finalizing.
- **Cloudflare (if used):** check Bot Fight Mode and AI-crawler blocking settings. New zones may block AI crawlers by default. Verified search bots must be allowed. Check Security > Events for blocked crawlers.
- Server-rendered HTML with full content (bots do not rely on JS).
- Optional `llms.txt` summarizing the site. Low cost; no guaranteed effect.

**Content**
- Answer-first TL;DR (2-3 lines) on every page, clear H2/H3, tables for timings/fees/distances, real FAQs.
- Verified local data (Kumbh, timings, routes) is the edge. Generic "Top 10" content is everywhere.
- Visible "Last verified" date and Sources on every page.
- Consistent entity naming: "Nashik", "Trimbakeshwar", "Simhastha Kumbh Mela", "Trivio".

---

## 14. SHORT LAUNCHER PROMPT (paste this into Antigravity)

```
You are the Orchestrator of a multi-agent swarm. Read /docs/NASHIK_SWARM_MASTER.md fully.
Do Phase 0 (section 3) only: audit, find the exact noindex source, diagnose the GSC sitemap error, create the shared contract, commit it.
Then STOP and show me the audit and plan. Do not spawn agents or change site content until I reply "go".
After "go": run Agents 1 and 2 first, then 3-8 in parallel, with Agent 9 as the merge gate. Follow section 15 sequence.
Rules: no invented facts, every claim verified live and logged, no agent edits another agent's files, never commit secrets.
```

---

## 15. SEQUENCE

1. Phase 0 (orchestrator), then owner says "go".
2. Agents 1 + 2 first (indexing blockers + foundation). Merge, deploy, verify.
3. Agents 3-8 in parallel. Agent 9 reviews continuously.
4. Ship content in batches of 10 pages. After each batch: build, validate, deploy, ping IndexNow.
5. Orchestrator resolves conflicts and merges only after Agent 9 approves.

---

## 16. MCP SERVERS (Google Search Console + Bing Webmaster)

Use MCP for **reading data and routine submissions**. Do not expect it to do everything.

### What MCP CAN do
| | Google Search Console | Bing Webmaster Tools |
|---|---|---|
| Read performance, queries, pages | Yes | Yes |
| List sites, check verification status | Yes | Yes |
| Submit / list sitemaps | Yes (needs enough permission on the property) | Yes |
| Inspect a URL's index status | Yes (URL Inspection API, read-only) | Yes |
| Submit URLs for indexing | **No** for normal pages | Yes, via URL submission API (daily quota) and IndexNow |

### What MCP can NOT do
- **Google "Request indexing" is not available via API** for normal pages. The Indexing API is only for JobPosting and BroadcastEvent. Do it manually in the GSC UI for the top URLs.
- Adding and verifying a property for the first time is a manual owner step (DNS TXT record or HTML tag).
- MCP cannot make Google or Bing index a page. It only automates submission and reporting.

### Setup (owner does the credentials; agent does the rest)

**Google Search Console**
1. Google Cloud Console: create a project, enable "Google Search Console API".
2. Create a service account, download the JSON key (keep it OUT of git).
3. In Search Console > Settings > Users and permissions: add the service account email with **Full** access to the property (needed for sitemap submission).
4. Pick one MCP server and add it to Antigravity's `mcp.json`. Community options found in the registry (verify before use, they are third-party):
   - `mcp-search-console` (run with `uvx`; env `GSC_CREDENTIALS_PATH` or OAuth client secrets)
   - `google-search-console-mcp` (run with `uvx`; env `GSC_SITE_URL`, `GOOGLE_APPLICATION_CREDENTIALS`)
   - `mcp-google-search-console` (reported as read-oriented, cannot edit or remove properties; safest)
   Example config shape:
   ```json
   {
     "mcpServers": {
       "google-search-console": {
         "command": "uvx",
         "args": ["google-search-console-mcp"],
         "env": {
           "GSC_SITE_URL": "https://nashik.sooubh.in/",
           "GOOGLE_APPLICATION_CREDENTIALS": "/absolute/path/to/service_account.json"
         }
       }
     }
   }
   ```
5. Note: the property type matters. A Domain property uses `sc-domain:sooubh.in`; a URL-prefix property uses `https://nashik.sooubh.in/`. The service account must be added to the exact property being queried.

**Bing Webmaster Tools**
1. Bing Webmaster Tools > Settings > API Access > generate an API key.
2. Add an MCP server to `mcp.json`. Community options (verify before use):
   - `mcp-server-bwt` (run with `uvx`; env `BING_WEBMASTER_API_KEY`)
   - `bing-webmaster-mcp` (run with `uvx`; env `BING_WEBMASTER_API_KEY`, optional `INDEXNOW_KEY`)
   Example config shape:
   ```json
   {
     "mcpServers": {
       "bing-webmaster": {
         "command": "uvx",
         "args": ["mcp-server-bwt"],
         "env": { "BING_WEBMASTER_API_KEY": "YOUR_KEY" }
       }
     }
   }
   ```
3. Some servers send anonymous telemetry; opt out with `DO_NOT_TRACK=1` if present.

### Security rules for MCP
- These are third-party packages that run on the owner's machine with the owner's credentials. Review the repo, pin a version, and prefer read-oriented servers.
- Never paste keys into prompts or commit them. Use env vars.
- Agents must show the tool list of each MCP server before first use, and must not run destructive tools (delete site, remove sitemap) without the owner's confirmation.

### What the agents should do with MCP
- After deploy: list sitemaps, submit/resubmit `sitemap.xml` (and per-language sitemaps) to GSC and Bing, report status and errors.
- URL Inspection (GSC) on homepage + top 10 URLs; log verdict, canonical, robots state in `/docs/indexing-diagnosis.md`.
- Bing: submit changed URLs via URL submission (respect daily quota) and IndexNow; report quota used.
- Weekly report: impressions, clicks, queries, pages, indexed vs not-indexed, and new "Crawled/Discovered, not indexed" reasons.
- Feed top queries back into `/docs/keyword-map.md`.

---

## 17. FINAL VERIFICATION (real output only)

For home + 5 inner pages + every Kumbh article + every search-intent page:

```
curl -sI <url> | grep -i -E "HTTP|x-robots|location|content-type"
curl -s <url>  | grep -i -E "robots|canonical|hreflang|og:image|application/ld\+json"
curl -sI https://nashik.sooubh.in/sitemap.xml | grep -i -E "HTTP|content-type|x-robots"
```

Also:
- Fetch as Googlebot and Bingbot user agents; confirm 200 and no challenge page.
- Validate JSON-LD, OG previews, robots.txt, sitemap (all URLs 200).
- 0 broken links, 0 orphan pages, Lighthouse before/after.
- `/docs/fact-check-log.md` complete.
- Final report: changed files per agent, page count, deploy command, anything unverified.

---

## 18. MANUAL STEPS FOR THE OWNER (agents prepare checklists, owner executes)

1. Google Search Console: verify property, confirm sitemap status, **Request Indexing** for the top 10 URLs (manual only).
2. Bing Webmaster: URL Inspection > Live URL, Request indexing, resubmit sitemap, confirm IndexNow.
3. Yandex Webmaster, Naver, Brave submission.
4. Backlink actions this week (see `/docs/backlinks.md`).
5. Add Google Business Profile and link the Trivio Play Store page to the site.
6. Monitoring: GSC, Bing, Microsoft Clarity. Check at 2 weeks and 4 weeks.

Honest timeline: a new subdomain takes weeks to index and longer to earn AI citations. 15-20 solid verified pages beat 50 thin ones. Cross-check Kumbh dates and rules against official sources yourself before publishing.
