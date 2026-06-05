# Marksyte

Static bilingual website for Marksyte, with localized landing pages, a founder profile and standalone study-case pages.

## Site behavior

- English is available at `/` and Spanish at `/es/`, with visible language links between indexable canonical pages.
- The founder profile is available at `/about/` and `/es/about/`.
- The discovery-call form opens a prepared email draft to `roman@marksyte.com`; it does not store submissions or require a backend.
- Legal basics are available at `/legal/`, `/privacy/`, `/cookies/` and their Spanish equivalents under `/es/`.

## Search discovery

- `/robots.txt` permits crawling and points search engines to `/sitemap.xml`.
- `/sitemap.xml` lists both localized landing pages, founder pages, legal basics and public-data case studies.
- Localized landing pages include reciprocal `hreflang` discovery metadata; indexable pages include canonical links, metadata and JSON-LD structured data.
- After production deployment, submit `https://www.marksyte.com/sitemap.xml` in Google Search Console.

## Vercel deployment

This project contains plain HTML, CSS, and browser JavaScript. It has no build step or environment variables.

### Deploy from the Vercel dashboard

1. Import this project folder or its Git repository into Vercel.
2. Confirm `Framework Preset` is `Other`.
3. Confirm `Build Command` is empty.
4. Confirm `Output Directory` is `.`.
5. Deploy.

The included `vercel.json` supplies those project settings from source control.

### Deploy from the CLI

From this directory:

```powershell
npx vercel@latest
npx vercel@latest --prod
```

The first command creates a preview deployment and links the local folder to a Vercel project. The second deploys to production after the preview is approved.

## Routes to verify

- `/` - Marksyte landing page
- `/es/` - Spanish Marksyte landing page
- `/about/` - English founder profile
- `/es/about/` - Spanish founder profile
- `/legal/`, `/privacy/`, `/cookies/` - English legal basics
- `/es/aviso-legal/`, `/es/privacidad/`, `/es/cookies/` - Spanish legal basics
- `/#study-cases` - Study cases section
- `/study-cases/alc-spain/` - Full Spain case-study page
- `/study-cases/energy-drinks/` - Energy drinks opportunity case
- `/study-cases/ai-flows-fmcg/` - AI flows in FMCG implementation case
- `/es/study-cases/ai-flows-fmcg/` - Spanish AI flows in FMCG implementation case
- `/study-cases/protein-rtd/` - Protein RTD opportunity case

After production deployment, assign `marksyte.com` in the Vercel project's Domains settings and follow the DNS records Vercel provides.
