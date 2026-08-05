# SEO and route migration matrix — Phase 9

Created: 2026-08-03  
Principle: preserve existing URLs unless a replacement is clearly equivalent. A page being omitted from the sitemap does not make it deleted; it remains reachable until a later redirect, retirement or 410 decision is supported by traffic and backlink evidence.

## Route treatment

| Route group | Current state | Phase 9 treatment | Reason |
|---|---|---|---|
| `/`, `/es/`, `/about/`, `/es/about/` | Repositioned active pages | Keep in sitemap and index | Core bilingual positioning pages. |
| `/blog/`, `/es/blog/` | Rebuilt indexes | Keep in sitemap and index | New neutral editorial hubs. |
| All 36 EN/ES blog article pairs | Active articles; eight pairs reframed in Phase 6 | Keep in sitemap | URLs and search intent remain valid; broader content review continues later. |
| `/services/data-standardization/` and `/es/servicios/estandarizacion-datos/` | New service pair | Keep in sitemap and index | Canonical replacement architecture. |
| `/services/data-mapping-integration/` and `/es/servicios/mapeo-integracion-datos/` | New service pair | Keep in sitemap and index | Canonical replacement architecture. |
| `/services/data-reconciliation/` and `/es/servicios/conciliacion-datos/` | New service pair | Keep in sitemap and index | Canonical replacement architecture. |
| `/services/managed-data-analysis/` and `/es/servicios/gestion-analisis-datos/` | New service pair | Keep in sitemap and index | Canonical replacement architecture. |
| `/services/travel-retail-portfolio-strategy/` and Spanish pair | Legacy service, reframed in place | Retain at the same URL with `index, follow`; omit from sitemap pending evidence; no redirect | Preserve portfolio-strategy search intent while making structured account and product data primary. |
| `/services/rgm-pricing/` and Spanish pair | Legacy service, reframed in place | Retain at the same URL with `index, follow`; omit from sitemap pending evidence; no redirect | Preserve pricing/RGM search intent while making pricing, margin and customer data primary. |
| `/services/travel-retail-activation/` and Spanish pair | Legacy service, reframed in place | Retain at the same URL with `index, follow`; omit from sitemap pending evidence; no redirect | Preserve activation search intent while making execution measurement and connected data primary. |
| `/services/buyer-negotiation/` and Spanish pair | Legacy service, reframed in place | Retain at the same URL with `index, follow`; omit from sitemap pending evidence; no redirect | Preserve buyer-support search intent while making account data, scenarios and traceability primary. |
| `/study-cases/data-reconciliation-fmcg/` and Spanish pair | New synthetic flagship case | Keep in sitemap and index | Directly supports the new operational-data proposition; clearly labelled illustrative. |
| `/study-cases/ai-integration-fmcg/` and Spanish pair | Retained operational case | Keep in sitemap and index | Data/process fit is genuine. |
| `/study-cases/ai-flows-fmcg/` and Spanish pair | Retained operational case | Keep in sitemap and index | Workflow and execution-control fit is genuine. |
| `/study-cases/ees-airport-commercial-strategy/` | Retained English operational case | Keep in sitemap; no invented Spanish alternate | Genuine airport-flow case; Spanish counterpart requires a separate translation decision. |
| `/es/casos-de-estudio/alcohol-espana/` | Public-data category case | Keep in sitemap; retain Spanish-only treatment | Useful sector/data context; no English equivalent currently exists. |
| Five archived legacy case-study pairs | Active originals plus archive copies, reframed in place | Retain originals at the same URLs with `index, follow`; omit from sitemap pending evidence; no redirect | Preserve established case-study topics while making data sources, signals, controls and operating decisions primary. |

## Redirect decisions

- Keep the existing specific legacy-language redirects in `vercel.json` for known historical `/es/study-cases/...` aliases.
- Remove the broad `/es/study-cases/:path*` redirect because it would send unknown historical paths to the index and discard path-specific intent.
- Do not add redirects from legacy services or archived case-study URLs to the new data services. The propositions are not equivalent enough to justify a blanket redirect.
- Legacy services and case studies are currently retained and reframed at their existing URLs. No `noindex`, 301 or 410 treatment is applied.
- Retain the known `/study-cases/alc-spain` alias to the Spanish public-data case until traffic/backlink review confirms whether it should remain, redirect differently or retire.

## Sitemap policy

The regenerated sitemap includes core pages, the rebuilt indexes, all current blog articles, new data services, retained operational cases, legal pages and the new flagship case. It excludes `.archive/` and the retained legacy services/cases; those pages remain indexable and reachable, but their sitemap inclusion remains a separate evidence-based decision.
