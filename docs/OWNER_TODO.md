# OWNER_TODO.md - Mandatory Actions for Site Owner (Sourabh)

This checklist contains all hard blockers and external credential/manual steps that cannot be automated via local code. Follow these step-by-step.

---

## 1. Cloudflare Dashboard: Stop Disallowing GoogleOther (CRITICAL BLOCKER)

**Problem:** Cloudflare's edge proxy is injecting `User-agent: GoogleOther Disallow: /` into `https://nashik.sooubh.in/robots.txt`. Google Search Console uses `GoogleOther` to fetch `sitemap.xml`, which is why GSC reports *"Sitemap could not be read"*.

**Exact Steps to Fix:**
1. Log into your **Cloudflare Dashboard** (https://dash.cloudflare.com).
2. Select the domain **`sooubh.in`**.
3. Go to **AI** > **AI Scrapers and Crawlers** (or **Security** > **Bots**).
4. Look for the toggle **"Block AI Scrapers and Crawlers"** or **"Cloudflare Managed robots.txt"**.
5. **Turn off** the Managed robots.txt option OR under custom rules, ensure `GoogleOther`, `Google-Sitemaps`, and verified search bots are excluded from Disallow rules.
6. Go to **Caching** > **Configuration** > click **Purge Everything** to clear the cached `robots.txt` from the edge.
7. Verify live by running:
   ```bash
   curl -s https://nashik.sooubh.in/robots.txt | grep -i "GoogleOther"
   ```
   Confirm that `GoogleOther` is no longer disallowed.

---

## 2. Google Search Console (GSC) - Sitemap & Manual "Request Indexing"

**Prerequisite:** Step 1 must be completed first.

**Exact Steps:**
1. Open [Google Search Console](https://search.google.com/search-console).
2. Select property `https://nashik.sooubh.in/`.
3. In the left menu, click **Sitemaps**.
4. In "Add a new sitemap", enter: `sitemap.xml` and click **Submit**.
5. Confirm status changes from "Couldn't fetch" to **"Success"**.
6. **Manual Request Indexing (Google API does not permit this for standard websites):**
   - In the top search bar ("Inspect any URL in..."), paste each of the following priority URLs one by one:
     - `https://nashik.sooubh.in/`
     - `https://nashik.sooubh.in/places`
     - `https://nashik.sooubh.in/kumbh`
     - `https://nashik.sooubh.in/places/trimbakeshwar`
     - `https://nashik.sooubh.in/places/sula-vineyards`
     - `https://nashik.sooubh.in/places/harihar-fort`
     - `https://nashik.sooubh.in/places/panchavati-kalaram`
     - `https://nashik.sooubh.in/places/saptashrungi-gad`
     - `https://nashik.sooubh.in/guides`
     - `https://nashik.sooubh.in/trivio`
   - For each URL, after test completes, click **"Request Indexing"**.

---

## 3. Bing Webmaster Tools - Verification & IndexNow Setup

**Exact Steps:**
1. Open [Bing Webmaster Tools](https://www.bing.com/webmasters).
2. Ensure `https://nashik.sooubh.in/` is verified (via Google Search Console import or DNS).
3. In **Sitemaps**, submit: `https://nashik.sooubh.in/sitemap.xml`.
4. In **URL Inspection**, enter `https://nashik.sooubh.in/` > click **Live URL** > click **Request Indexing**.
5. Check **IndexNow** tab:
   - Confirm that key `b8d32d0c5a274ffab6ee2088f58b688d` at `https://nashik.sooubh.in/b8d32d0c5a274ffab6ee2088f58b688d.txt` is verified.
   - Automated submissions from our `npm run indexnow` script will register here.

---

## 4. MCP Server Credentials (Optional - For Routine Automated Queries)

If you wish to query GSC and Bing directly from agent tools in Antigravity:
1. **Google Search Console MCP:**
   - Create a service account in Google Cloud Console, enable "Google Search Console API", download JSON key.
   - Add service account email with **Full** permission in GSC > Settings > Users and permissions.
   - Configure in Antigravity MCP settings with `GOOGLE_APPLICATION_CREDENTIALS`.
2. **Bing Webmaster MCP:**
   - In Bing Webmaster Tools > Settings > API Access > Generate API key.
   - Configure in Antigravity MCP settings with `BING_WEBMASTER_API_KEY`.

---

## 5. Authority & Backlink Foundations (Week 1)

1. **Main Domain Interlink:** Ensure your main domain `https://sooubh.in` contains a prominent contextual backlink to `https://nashik.sooubh.in`.
2. **Play Store App Link:** Ensure the Trivio Android App store listing links to `https://nashik.sooubh.in` as its official developer website.
3. **Google Business Profile:** Create a local entity presence for Trivio / Nashik Explore Guide.
