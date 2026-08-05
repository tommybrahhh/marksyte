# Marksyte

Static bilingual website for Marksyte, repositioned around data standardization, mapping, integration, reconciliation, managed data operations and analysis. The site includes localized landing pages, service pages, study cases and a bilingual blog.

## Site behavior

- English is available at `/` and Spanish at `/es/`, with visible language links between indexable canonical pages.
- The team page is available at `/about/` and `/es/about/`.
- The four active service pairs are:
  - `/services/data-standardization/` and `/es/servicios/estandarizacion-datos/`
  - `/services/data-mapping-integration/` and `/es/servicios/mapeo-integracion-datos/`
  - `/services/data-reconciliation/` and `/es/servicios/conciliacion-datos/`
  - `/services/managed-data-analysis/` and `/es/servicios/gestion-analisis-datos/`
- The flagship illustrative reconciliation case is available at `/study-cases/data-reconciliation-fmcg/` and `/es/casos-de-estudio/conciliacion-datos-fmcg/`.
- The blog index is available at `/blog/` and `/es/blog/`, with posts under localized blog slugs.
- The discovery-call form opens a prepared email draft to `contact@marksyte.com`; it does not store submissions or require a backend.
- Legal basics are available at `/legal/`, `/privacy/`, `/cookies/` and their Spanish equivalents under `/es/`.

## Project status and preservation

- The pivot is implemented locally; remediation, legacy-route SEO decisions and external preview review remain pending.
- Historical commercial-positioning content is preserved under `.archive/commercial-positioning-2026-08-03/`.
- `.archive/` is retained in Git for recovery and excluded from Vercel deployment through `.vercelignore`.
- The execution plan is documented in `DATA_INTEGRATION_PIVOT_PLAN.md`; the open remediation checklist is `POST_PIVOT_AUDIT_FIXES.md`.
- Content and route inventories are maintained in `BLOG_CONTENT_MATRIX.md`, `CASE_STUDY_MATRIX.md` and `SEO_ROUTE_MIGRATION_MATRIX.md`.

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
- `/about/` - English team page
- `/es/about/` - Spanish team page
- `/services/data-standardization/` - Data audit and standardization service
- `/es/servicios/estandarizacion-datos/` - Spanish data audit and standardization service
- `/services/data-reconciliation/` - Data reconciliation and controls service
- `/es/servicios/conciliacion-datos/` - Spanish data reconciliation and controls service
- `/study-cases/data-reconciliation-fmcg/` - Illustrative reconciliation case
- `/es/casos-de-estudio/conciliacion-datos-fmcg/` - Spanish illustrative reconciliation case
- `/blog/` - English blog index
- `/blog/europe-travel-season-longer-travel-retail/` - revised Travel Retail article with assets, metrics, FAQ and sources
- `/blog/visitor-dispersal-destinations-travel-retail/` - visitor dispersal Travel Retail article with hero and flow-model assets
- `/es/blog/` - Spanish blog index
- `/es/blog/la-temporada-turistica-europea-se-esta-alargando-travel-retail/` - Spanish version of the revised Travel Retail article
- `/es/blog/distribucion-visitantes-destinos-travel-retail/` - Spanish visitor dispersal Travel Retail article
- `/legal/`, `/privacy/`, `/cookies/` - English legal basics
- `/es/aviso-legal/`, `/es/privacidad/`, `/es/cookies/` - Spanish legal basics

After production deployment, assign `marksyte.com` in the Vercel project's Domains settings and follow the DNS records Vercel provides.
