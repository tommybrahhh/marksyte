# Marksyte

Static bilingual landing page for Marksyte, with a preview linking to a standalone Spain alcohol-consumption study case.

## Site behavior

- English is available at `/` and Spanish at `/es/`, with visible language links between indexable canonical pages.
- The discovery-call form opens a prepared email draft to `roman@marksyte.com`; it does not store submissions or require a backend.

## Search discovery

- `/robots.txt` permits crawling and points search engines to `/sitemap.xml`.
- `/sitemap.xml` lists both localized landing pages and the full public-data case study.
- Localized landing pages include reciprocal `hreflang` discovery metadata; indexable pages include canonical links, metadata and JSON-LD structured data.
- After production deployment, submit `https://marksyte.com/sitemap.xml` in Google Search Console.

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
- `/#study-cases` - Study cases section
- `/study-cases/alc-spain/` - Full Spain case-study page

After production deployment, assign `marksyte.com` in the Vercel project's Domains settings and follow the DNS records Vercel provides.
