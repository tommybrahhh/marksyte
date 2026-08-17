# Travel Retail Retirement Technical Implementation

Implementation date: 2026-08-17  
Repository: `C:\Users\roman\Documents\marksyte`  
Source audit: [`technical-seo-indexability-audit.md`](./technical-seo-indexability-audit.md)  
Scope: conservative Travel Retail commercial retirement, FMCG architecture reinforcement, confirmed technical SEO fixes, and deployment-surface hardening

## Summary

The repository now separates current FMCG/data operations from retired commercial material and preserved editorial history.

| Measure | Result |
| --- | ---: |
| Travel Retail commercial routes retired | 18 |
| Pages given `noindex, follow` | 18 |
| Legacy Travel Retail editorial articles preserved | 74 |
| Travel Retail editorial URLs changed | 0 |
| URLs deleted | 0 |
| Redirects created | 0 |
| Broken Spanish links fixed | 12 references across 6 files |
| FMCG sitemap `lastmod` values updated | 24 |
| Case-study Article blocks normalized | 18 |
| Travel Retail Service schema blocks removed | 8 |
| Deployment exclusions added | 3 patterns/rules |
| New SEO content URLs created | 0 |

The 18 retired routes remain accessible at their existing URLs. They retain self-canonicals and valid hreflang relationships, are excluded from the sitemap, and now use page-level `noindex, follow`. No redirect was introduced.

The 74 English/Spanish Travel Retail editorial articles remain indexable and accessible through the blog index. The blog now presents the FMCG/data guides first and labels the lower Travel Retail section as an archive.

## Route classification

### Active FMCG commercial

- Homepage and About pages
- 30 English FMCG guides and their 30 Spanish equivalents
- `/services/data-reconciliation/`
- `/services/data-mapping-integration/`
- `/services/data-standardization/`
- `/services/managed-data-analysis/`
- Spanish equivalents under `/es/servicios/`
- Current company, blog, legal, and utility routes

### Retired commercial cluster

The brief's confirmed 18-route set is retired from organic targeting. It includes Travel Retail services and the previously published commercial case-study cluster. The three FMCG category-analysis pairs in that set are also no longer presented as current commercial landing pages because they sit outside the current data-operations architecture.

### Active FMCG case studies

These six language routes remain indexable, self-canonical, in the sitemap, and crawlable:

- `/study-cases/data-reconciliation-fmcg/`
- `/study-cases/ai-flows-fmcg/`
- `/study-cases/ai-integration-fmcg/`
- `/es/casos-de-estudio/conciliacion-datos-fmcg/`
- `/es/casos-de-estudio/flujos-ia-fmcg/`
- `/es/casos-de-estudio/integracion-ia-fmcg/`

### Legacy Travel Retail case study

`/study-cases/ees-airport-commercial-strategy/` remains accessible as an English-only historical airport/Travel Retail case. It was not part of the confirmed 18-route retirement set, so it remains indexable and in the sitemap, but its case-index card is no longer featured and the page now carries historical context. Its reduced hreflang set remains valid because no Spanish counterpart exists.

### Legacy Travel Retail editorial archive

The 37 English and 37 Spanish Travel Retail/editorial blog articles remain indexable. Their URLs, canonicals, publication dates, organization authorship, and hreflang were not changed. Only shared navigation labels and the blog-index presentation were normalized.

### Neutral, company, and utility pages

Homepage, About, blog and case-study indexes, legal notice, privacy, cookies, language roots, and current operational pages remain outside the retirement set.

## Travel Retail commercial retirement

| URL | Type | Language | Retirement action | Sitemap status | Robots status | Commercial schema action |
| --- | --- | --- | --- | --- | --- | --- |
| `/services/buyer-negotiation/` | Service | English | Accessible historical page with retirement context | Omitted | `noindex, follow` | Travel Retail `Service` schema removed |
| `/services/rgm-pricing/` | Service | English | Accessible historical page with retirement context | Omitted | `noindex, follow` | Travel Retail `Service` schema removed |
| `/services/travel-retail-activation/` | Service | English | Accessible historical page with retirement context | Omitted | `noindex, follow` | Travel Retail `Service` schema removed |
| `/services/travel-retail-portfolio-strategy/` | Service | English | Accessible historical page with retirement context | Omitted | `noindex, follow` | Travel Retail `Service` schema removed |
| `/es/servicios/negociacion-compradores/` | Service | Spanish | Accessible historical page with retirement context | Omitted | `noindex, follow` | Travel Retail `Service` schema removed |
| `/es/servicios/rgm-pricing/` | Service | Spanish | Accessible historical page with retirement context | Omitted | `noindex, follow` | Travel Retail `Service` schema removed |
| `/es/servicios/activacion-travel-retail/` | Service | Spanish | Accessible historical page with retirement context | Omitted | `noindex, follow` | Travel Retail `Service` schema removed |
| `/es/servicios/estrategia-portfolio-travel-retail/` | Service | Spanish | Accessible historical page with retirement context | Omitted | `noindex, follow` | Travel Retail `Service` schema removed |
| `/study-cases/border-duty-free-commercial-strategy/` | Case study | English | Accessible historical case with retirement context | Omitted | `noindex, follow` | Article retained and normalized |
| `/study-cases/brand-relevance-distribution/` | Case study | English | Accessible earlier commercial analysis with retirement context | Omitted | `noindex, follow` | Article retained and normalized |
| `/study-cases/energy-drinks/` | Case study | English | Accessible earlier commercial analysis with retirement context | Omitted | `noindex, follow` | Article retained and normalized |
| `/study-cases/protein-rtd/` | Case study | English | Accessible earlier commercial analysis with retirement context | Omitted | `noindex, follow` | Article retained and normalized |
| `/study-cases/travel-retail-distribution-strategy/` | Case study | English | Accessible historical case with retirement context | Omitted | `noindex, follow` | Article retained and normalized |
| `/es/casos-de-estudio/estrategia-comercial-duty-free-fronteras/` | Case study | Spanish | Accessible historical case with retirement context | Omitted | `noindex, follow` | Article retained and normalized |
| `/es/casos-de-estudio/relevancia-marca-distribucion/` | Case study | Spanish | Accessible earlier commercial analysis with retirement context | Omitted | `noindex, follow` | Article retained and normalized |
| `/es/casos-de-estudio/bebidas-energeticas/` | Case study | Spanish | Accessible earlier commercial analysis with retirement context | Omitted | `noindex, follow` | Article retained and normalized |
| `/es/casos-de-estudio/proteina-rtd/` | Case study | Spanish | Accessible earlier commercial analysis with retirement context | Omitted | `noindex, follow` | Article retained and normalized |
| `/es/casos-de-estudio/estrategia-distribucion-travel-retail/` | Case study | Spanish | Accessible historical case with retirement context | Omitted | `noindex, follow` | Article retained and normalized |

Valid self-canonicals and existing hreflang relationships were deliberately preserved. The retired routes were already absent from `sitemap.xml`; no sitemap deletion was necessary.

## Legacy editorial handling

- 74 Travel Retail/editorial articles were preserved: 37 English and 37 Spanish
- 0 editorial articles were deleted, redirected, bulk-noindexed, rewritten, or URL-migrated
- All editorial article robots directives remain index-follow
- All editorial article canonicals remain self-referencing
- All valid hreflang pairs remain in place
- Shared legacy labels were normalized from `Offers`, `Team`, `Study cases`, and `Equipo` to current terminology
- The English and Spanish blog indexes now put FMCG/data reconciliation first
- Lower sections are labeled `Travel Retail archive` / `Archivo Travel Retail`
- The archive remains linked from the normal blog index, so the articles are not isolated

## Current FMCG architecture

Validation after implementation confirms:

- 30/30 English FMCG guides remain indexable and in the sitemap
- 30/30 Spanish FMCG equivalents remain in the sitemap
- all four English data/FMCG services remain indexable, crawlable, and in the sitemap
- all four Spanish data/FMCG services remain indexable, crawlable, and in the sitemap
- `/study-cases/data-reconciliation-fmcg/` and its Spanish counterpart remain indexable and in the sitemap
- the active FMCG case-study routes remain reachable from the homepage graph
- no active FMCG service or case-study route has zero contextual inlinks
- no active FMCG route became unreachable after retirement

The post-implementation graph contains 164 routes reachable from the homepage and 18 intentionally isolated retired commercial routes. The isolated routes are no longer treated as a defect because their reduced discovery is part of the approved retirement model.

## Spanish broken-link fix

The following six Spanish articles had two broken references each. The old paths resolved to nonexistent `/es/legal/` and `/es/privacy/` routes.

| Affected file | Old legal path | New legal path | Old privacy path | New privacy path |
| --- | --- | --- | --- | --- |
| `es/blog/auditoria-ventas-retail-pos/index.html` | `../../legal/` | `../../aviso-legal/` | `../../privacy/` | `../../privacidad/` |
| `es/blog/datos-inventario-no-coinciden-stock-fisico/index.html` | `../../legal/` | `../../aviso-legal/` | `../../privacy/` | `../../privacidad/` |
| `es/blog/datos-ventas-secundarias-fmcg/index.html` | `../../legal/` | `../../aviso-legal/` | `../../privacy/` | `../../privacidad/` |
| `es/blog/integracion-datos-retail-pos-erp/index.html` | `../../legal/` | `../../aviso-legal/` | `../../privacy/` | `../../privacidad/` |
| `es/blog/mapeo-sell-out-producto-local-periodo/index.html` | `../../legal/` | `../../aviso-legal/` | `../../privacy/` | `../../privacidad/` |
| `es/blog/tasa-sell-through-retail-datos/index.html` | `../../legal/` | `../../aviso-legal/` | `../../privacy/` | `../../privacidad/` |

Result: 12/12 broken references fixed, with no duplicate utility routes created.

## Sitemap changes

The sitemap remains valid XML with 164 unique URLs.

- 0 retired Travel Retail routes are included
- 30/30 English FMCG guides remain included
- 30/30 Spanish FMCG equivalents remain included
- current data services, FMCG case study, homepage, About, and blog indexes remain included
- 24 FMCG guide `lastmod` values were updated to `2026-08-17`
- no unrelated sitemap dates were changed
- no future dates were introduced
- HTTPS, `www.marksyte.com`, and trailing-slash conventions remain intact

The documented policy is: `sitemap lastmod represents the most recent meaningful page-content change supported by repository evidence`. Deployment-only or template-only changes are not treated as article updates. The policy is also recorded as an XML comment in `sitemap.xml`.

## Structured data changes

All 18 case-study Article JSON-LD blocks were normalized without changing their schema type.

- `Article` remains the safest representation because the pages are published case-study narratives with headlines, descriptions, language, URLs, dates, and article sections
- every case-study Article now has an organization author
- every case-study Article now has an organization publisher
- author: `Marksyte`, URL `https://www.marksyte.com/about/`
- publisher: `Marksyte`, URL `https://www.marksyte.com/`
- no personal author was introduced
- existing dates, URLs, topics, and valid fields were preserved
- all JSON-LD blocks parse after implementation
- Article URLs remain aligned with page canonicals

The eight retired Travel Retail service pages no longer emit Service-specific JSON-LD. They retain their page content and general metadata but do not present a retired Travel Retail offering as an active structured service.

## Deployment hardening

`.vercelignore` now adds three explicit exclusions:

- `*.md` for internal Markdown, planning files, and drafts
- `docs/` for internal audit and implementation documentation
- `study-cases/travel-retail-distribution-strategy/draft.md` as an explicit protection for the unpublished composite draft

The draft remains in the repository and was not deleted. No public HTML or required asset directory was excluded. No HTML file links to a Markdown draft.

## Navigation normalization

The common navigation on 83 legacy-template HTML files was normalized:

- `Offers` → `Services`
- `Team` → `About`
- `Study cases` → `Case studies`
- Spanish `Equipo` → `Sobre Marksyte`

No current primary navigation contains a link to any of the 18 retired commercial routes. Retired pages may still contain their own contextual or language links so that old URLs remain usable and crawlable for `noindex, follow` processing.

The case-study indexes now feature current FMCG cases first. The English-only EES airport case remains accessible as an earlier case but is no longer featured as a current case. The blog index has a primary FMCG guide section and a lower neutral Travel Retail archive section.

## Meta cleanup

The duplicate English About description was corrected. `/about/` now has a distinct description focused on Marksyte's FMCG data reconciliation, integration, recurring operations, rules, owners, and evidence.

The English and Spanish blog index metadata was also aligned with the current FMCG/data focus while retaining the Travel Retail archive as a secondary editorial area. No article titles, article descriptions, or body copy were rewritten as part of this cleanup.

The five long article descriptions identified in the audit were not mechanically shortened. They remain a lower-priority review item.

## Custom 404

No custom `404.html` was created. The repository does not establish that a custom page is required by the current Vercel setup, and live status behavior remains outside this repository validation. This lower-priority item is documented rather than implemented speculatively.

## Validation

### Repository checks

| Check | Result |
| --- | --- |
| Deployable HTML inventory | 182 pages |
| Retired pages with `noindex, follow` | 18/18 |
| Unexpected noindex on active FMCG routes | 0 |
| Broken English internal routes | 0 |
| Broken Spanish internal routes | 0 |
| Links to `/es/legal/` | 0 |
| Links to `/es/privacy/` | 0 |
| Links to the unpublished draft | 0 |
| Retired routes in sitemap | 0 |
| English FMCG guides in sitemap | 30/30 |
| Spanish FMCG equivalents in sitemap | 30/30 |
| Active FMCG services in sitemap | 8/8 language routes |
| FMCG case-study routes in sitemap | 6/6 current language routes |
| Current active routes reachable from homepage | 100% |
| Strict zero-inlink pages | 0 |
| Invalid canonical routes | 0 |
| Invalid hreflang routes | 0 |
| JSON-LD parse errors | 0 |
| Case-study author/publisher inconsistencies | 0 |
| Case-study Article blocks using a personal author | 0 |
| Duplicate H1s or zero-H1 pages | 0 |
| URL changes | 0 |
| Redirect changes | 0 |

`git diff --check` passed. Git emitted existing line-ending normalization warnings (`LF will be replaced by CRLF`); no whitespace error was reported.

No package manifest, build script, or test runner was present in the repository, so no application build/test command was available. Static HTML, XML, JSON-LD, route-resolution, sitemap, canonical, hreflang, crawl-graph, and deployment-ignore checks were run directly.

### Live verification

No Search Console work was started. No live redirect or HTTP-header changes were inferred from the repository. Production status codes, response headers, live 404 behavior, and actual deployment-artifact contents still require a controlled browser, `curl`, or CI check.

## Files changed

This list covers files touched by this implementation. The worktree also contained earlier user changes, which were preserved.

### Configuration, sitemap, indexes, and metadata

- `.vercelignore`
- `sitemap.xml`
- `about/index.html`
- `blog/index.html`
- `es/blog/index.html`
- `study-cases/index.html`
- `es/casos-de-estudio/index.html`
- `study-cases/ees-airport-commercial-strategy/index.html`

### Retired commercial routes

- `services/buyer-negotiation/index.html`
- `services/rgm-pricing/index.html`
- `services/travel-retail-activation/index.html`
- `services/travel-retail-portfolio-strategy/index.html`
- `es/servicios/negociacion-compradores/index.html`
- `es/servicios/rgm-pricing/index.html`
- `es/servicios/activacion-travel-retail/index.html`
- `es/servicios/estrategia-portfolio-travel-retail/index.html`
- `study-cases/border-duty-free-commercial-strategy/index.html`
- `study-cases/brand-relevance-distribution/index.html`
- `study-cases/energy-drinks/index.html`
- `study-cases/protein-rtd/index.html`
- `study-cases/travel-retail-distribution-strategy/index.html`
- `es/casos-de-estudio/estrategia-comercial-duty-free-fronteras/index.html`
- `es/casos-de-estudio/relevancia-marca-distribucion/index.html`
- `es/casos-de-estudio/bebidas-energeticas/index.html`
- `es/casos-de-estudio/proteina-rtd/index.html`
- `es/casos-de-estudio/estrategia-distribucion-travel-retail/index.html`

### Spanish utility-link corrections

- `es/blog/auditoria-ventas-retail-pos/index.html`
- `es/blog/datos-inventario-no-coinciden-stock-fisico/index.html`
- `es/blog/datos-ventas-secundarias-fmcg/index.html`
- `es/blog/integracion-datos-retail-pos-erp/index.html`
- `es/blog/mapeo-sell-out-producto-local-periodo/index.html`
- `es/blog/tasa-sell-through-retail-datos/index.html`

### Case-study schema normalization

- `study-cases/ai-flows-fmcg/index.html`
- `study-cases/ai-integration-fmcg/index.html`
- `study-cases/data-reconciliation-fmcg/index.html`
- `study-cases/ees-airport-commercial-strategy/index.html`
- `study-cases/border-duty-free-commercial-strategy/index.html`
- `study-cases/brand-relevance-distribution/index.html`
- `study-cases/energy-drinks/index.html`
- `study-cases/protein-rtd/index.html`
- `study-cases/travel-retail-distribution-strategy/index.html`
- `es/casos-de-estudio/flujos-ia-fmcg/index.html`
- `es/casos-de-estudio/integracion-ia-fmcg/index.html`
- `es/casos-de-estudio/conciliacion-datos-fmcg/index.html`
- `es/casos-de-estudio/alcohol-espana/index.html`
- `es/casos-de-estudio/estrategia-comercial-duty-free-fronteras/index.html`
- `es/casos-de-estudio/relevancia-marca-distribucion/index.html`
- `es/casos-de-estudio/bebidas-energeticas/index.html`
- `es/casos-de-estudio/proteina-rtd/index.html`
- `es/casos-de-estudio/estrategia-distribucion-travel-retail/index.html`

### Legacy navigation normalization

The following legacy-template files had shared navigation terminology updated:

- `blog/agentic-ai-travel-retail/index.html`
- `blog/ai-inventory-planning-beirut-duty-free/index.html`
- `blog/ai-visibility-chinese-traveller-travel-retail/index.html`
- `blog/airline-disruption-vouchers-global-commercial-network/index.html`
- `blog/airline-ownership-route-map-travel-retail/index.html`
- `blog/airport-operators-proprietary-restaurant-brands/index.html`
- `blog/asia-pacific-reshapes-global-airport-map/index.html`
- `blog/asia-pacific-travel-retail-regulation/index.html`
- `blog/bacardi-circular-packaging-cruise-travel-retail/index.html`
- `blog/banks-airport-hospitality-chase-dfw/index.html`
- `blog/border-duty-free-commercial-destination/index.html`
- `blog/changi-duty-free-exclusivity-experience-ecommerce/index.html`
- `blog/china-duty-free-profit-revenue-profitability/index.html`
- `blog/china-duty-free-sanya-leisure-destination/index.html`
- `blog/ees-biometric-airport-queues-travel-retail/index.html`
- `blog/end-low-value-ecommerce-exemptions-travel-retail/index.html`
- `blog/europe-travel-season-longer-travel-retail/index.html`
- `blog/european-duty-free-record-conversion-gap-travel-retail/index.html`
- `blog/european-traveller-safety-value-access-travel-retail/index.html`
- `blog/fragrance-resilience-category-travel-retail/index.html`
- `blog/frankfurt-retail-media-experience-point-of-sale/index.html`
- `blog/fuel-airfares-demand-forecasting-travel-retail/index.html`
- `blog/gen-z-travel-essentials-airport-retail/index.html`
- `blog/generational-shopping-differences-travel-retail/index.html`
- `blog/heathrow-passenger-mix-travel-retail/index.html`
- `blog/k-content-travel-retail-sales/index.html`
- `blog/late-booking-travel-demand-travel-retail/index.html`
- `blog/lotte-chatgpt-ai-shopping-duty-free/index.html`
- `blog/more-seats-not-more-passengers-travel-retail/index.html`
- `blog/morocco-world-cup-2030-tourism-corridor/index.html`
- `blog/ospree-vfs-visa-duty-free-pre-travel/index.html`
- `blog/product-carbon-footprint-data-travel-retail/index.html`
- `blog/scheduled-airline-seats-real-airport-demand/index.html`
- `blog/sydney-airport-duty-free-reinvention/index.html`
- `blog/sydney-airport-mecca-local-brands-duty-free/index.html`
- `blog/visitor-dispersal-destinations-travel-retail/index.html`
- `blog/zurich-passenger-growth-commercial-sales-gap/index.html`
- `cookies/index.html`
- `legal/index.html`
- `privacy/index.html`
- `es/aviso-legal/index.html`
- `es/blog/asia-pacifico-mapa-mundial-aeropuertos-travel-retail/index.html`
- `es/blog/auditoria-ventas-retail-pos/index.html`
- `es/blog/bacardi-packaging-circular-cruceros-travel-retail/index.html`
- `es/blog/bancos-hospitality-aeroportuaria-chase-dfw/index.html`
- `es/blog/changi-duty-free-exclusividad-experiencias-ecommerce/index.html`
- `es/blog/china-duty-free-beneficio-ventas-rentabilidad/index.html`
- `es/blog/china-duty-free-sanya-parque-ocio-retail/index.html`
- `es/blog/combustible-tarifas-prevision-demanda-travel-retail/index.html`
- `es/blog/datos-inventario-no-coinciden-stock-fisico/index.html`
- `es/blog/datos-ventas-secundarias-fmcg/index.html`
- `es/blog/diferencias-generacionales-compra-travel-retail/index.html`
- `es/blog/distribucion-visitantes-destinos-travel-retail/index.html`
- `es/blog/duty-free-frontera-destino-comercial/index.html`
- `es/blog/ees-biometria-colas-aeropuertos-travel-retail/index.html`
- `es/blog/fin-exenciones-ecommerce-bajo-valor-travel-retail/index.html`
- `es/blog/frankfurt-retail-media-experiencia-punto-venta/index.html`
- `es/blog/gen-z-productos-esenciales-retail-aeroportuario/index.html`
- `es/blog/heathrow-mezcla-pasajeros-travel-retail/index.html`
- `es/blog/huella-carbono-dato-producto-travel-retail/index.html`
- `es/blog/ia-agentica-turismo-travel-retail/index.html`
- `es/blog/index.html`
- `es/blog/integracion-datos-retail-pos-erp/index.html`
- `es/blog/k-content-ventas-travel-retail/index.html`
- `es/blog/la-temporada-turistica-europea-se-esta-alargando-travel-retail/index.html`
- `es/blog/lotte-chatgpt-compra-ia-duty-free/index.html`
- `es/blog/mapeo-sell-out-producto-local-periodo/index.html`
- `es/blog/marruecos-corredor-turistico-mundial-2030/index.html`
- `es/blog/ospree-vfs-visado-duty-free-pre-viaje/index.html`
- `es/blog/propiedad-aerolineas-mapa-rutas-travel-retail/index.html`
- `es/blog/record-duty-free-europeo-brecha-conversion-travel-retail/index.html`
- `es/blog/regulacion-travel-retail-asia-pacific/index.html`
- `es/blog/reservas-tardias-demanda-travel-retail/index.html`
- `es/blog/sydney-airport-mecca-marcas-locales-duty-free/index.html`
- `es/blog/sydney-airport-reinvencion-duty-free/index.html`
- `es/blog/tasa-sell-through-retail-datos/index.html`
- `es/blog/vales-digitales-incidencias-aereas-red-comercial/index.html`
- `es/blog/viajero-europeo-seguridad-precio-acceso-travel-retail/index.html`
- `es/blog/visibilidad-ia-viajero-chino-travel-retail/index.html`
- `es/blog/zurich-pasajeros-ventas-retail-aeroportuario/index.html`
- `es/cookies/index.html`
- `es/privacidad/index.html`
- `services/buyer-negotiation/index.html`
- `services/rgm-pricing/index.html`
- `services/travel-retail-activation/index.html`
- `services/travel-retail-portfolio-strategy/index.html`
- `es/servicios/activacion-travel-retail/index.html`
- `es/servicios/estrategia-portfolio-travel-retail/index.html`
- `es/servicios/negociacion-compradores/index.html`
- `es/servicios/rgm-pricing/index.html`

## Final implementation status

The approved conservative retirement is complete. Travel Retail commercial pages remain accessible but are no longer targeted for indexing, the legacy editorial archive remains intact, current FMCG routes remain indexable and discoverable, the confirmed Medium technical defects are fixed, and the unpublished draft is excluded from the deployment surface.
