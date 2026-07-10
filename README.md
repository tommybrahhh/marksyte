# Marksyte

Static bilingual website for Marksyte, with localized landing pages, a founder profile, study cases and an English blog.

## Site behavior

- English is available at `/` and Spanish at `/es/`, with visible language links between indexable canonical pages.
- The founder profile is available at `/about/` and `/es/about/`.
- The blog index is available at `/blog/` and `/es/blog/`, with posts under localized blog slugs.
- The discovery-call form opens a prepared email draft to `roman@marksyte.com`; it does not store submissions or require a backend.
- Legal basics are available at `/legal/`, `/privacy/`, `/cookies/` and their Spanish equivalents under `/es/`.

## Search discovery

- `/robots.txt` permits crawling and points search engines to `/sitemap.xml`.
- `/sitemap.xml` lists indexable public routes, with reciprocal `hreflang` alternates for translated URL pairs.
- Localized landing pages include reciprocal `hreflang` discovery metadata; indexable pages include canonical links, metadata and JSON-LD structured data.
- `vercel.json` keeps 301 redirects from the former mixed-language Spanish case paths to the localized Spanish paths.
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
- `/blog/` - English blog index
- `/blog/europe-travel-season-longer-travel-retail/` - first Travel Retail article
- `/es/blog/` - Spanish blog index
- `/es/blog/la-temporada-turistica-europea-se-esta-alargando-travel-retail/` - Spanish version of the first Travel Retail article
- `/legal/`, `/privacy/`, `/cookies/` - English legal basics
- `/es/aviso-legal/`, `/es/privacidad/`, `/es/cookies/` - Spanish legal basics

After production deployment, assign `marksyte.com` in the Vercel project's Domains settings and follow the DNS records Vercel provides.
