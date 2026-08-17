# Blog trust and authorship implementation

## Summary

- English articles inspected: 67
- English article files modified: 67
- Organization-author links added: 67
- Visible publication dates surfaced: 29
- Visible modified dates surfaced: 26 — 24 new evidence-backed dates and 2 existing later modification dates
- `datePublished` fields added: 0
- `dateModified` fields added: 24
- Article schema blocks updated: 67
- About-page changes: yes
- New pages created: 0
- Public article URLs or canonical routes changed: 0
- Redirects created: 0

The English blog is a static collection of 67 article files. No shared blog template or generator was found, so the trust layer was applied consistently to each English article file. Spanish pages were not modified.

## Authorship decision

Marksyte remains the default author because the repository presents these operational guides as Marksyte material and does not provide reliable personal byline evidence for the articles. Roman Petrychenko remains visible on the About page as the named Solutions Leader and FMCG champion, but was not made the default article author.

Each article now presents `Marksyte` as a compact linked author label pointing to `/about/`. Each Article JSON-LD block represents the author as:

```json
{
  "@type": "Organization",
  "name": "Marksyte",
  "url": "https://www.marksyte.com/about/"
}
```

Publisher remains the existing Marksyte Organization at `https://www.marksyte.com/`. No personal authors, invented editorial groups, credentials or review claims were added. There are no author exceptions.

## About and editorial transparency

The existing `/about/` page already explained Marksyte’s FMCG and data-operations focus, methodology, founder identity and delivery model. A short section titled “How Marksyte publishes practical guides” was added to explain that:

- Marksyte publishes material about FMCG retail data, reconciliation, mapping, data quality and recurring data operations
- operational examples are illustrative unless stated otherwise
- external factual claims are sourced where appropriate
- practical methods reflect Marksyte’s operating approach
- articles may be updated when methods, examples or source material change

No separate editorial-policy or editorial-method page was created because `/about/` provides the required context without creating a thin duplicate page.

## Visible metadata model

The compact pattern is now:

`Marksyte · Published 25 July 2026 · 10 min read`

or, where a later material update exists:

`Marksyte · Published 10 July 2026 · Updated 11 July 2026 · 7 min read`

Articles with no reliable publication date show no guessed publication date. The 24 current-diff guides with material recent FMCG architecture or pillar changes show `Updated 17 August 2026` and carry only `dateModified`, because no reliable original publication date was established.

## Publication dates

The 29 dates below were already present as explicit Article JSON-LD and `article:published_time` metadata. They were surfaced visibly without changing their values. Confidence is Confirmed because both metadata forms agreed.

| URL | Published Date | Evidence Source | Confidence |
| --- | --- | --- | --- |
| /blog/agentic-ai-travel-retail/ | 25 July 2026 | Existing Article JSON-LD and `article:published_time` | Confirmed |
| /blog/ai-visibility-chinese-traveller-travel-retail/ | 27 July 2026 | Existing Article JSON-LD and `article:published_time` | Confirmed |
| /blog/airline-disruption-vouchers-global-commercial-network/ | 26 July 2026 | Existing Article JSON-LD and `article:published_time` | Confirmed |
| /blog/airline-ownership-route-map-travel-retail/ | 27 July 2026 | Existing Article JSON-LD and `article:published_time` | Confirmed |
| /blog/asia-pacific-reshapes-global-airport-map/ | 25 July 2026 | Existing Article JSON-LD and `article:published_time` | Confirmed |
| /blog/asia-pacific-travel-retail-regulation/ | 22 July 2026 | Existing Article JSON-LD and `article:published_time` | Confirmed |
| /blog/bacardi-circular-packaging-cruise-travel-retail/ | 23 July 2026 | Existing Article JSON-LD and `article:published_time` | Confirmed |
| /blog/banks-airport-hospitality-chase-dfw/ | 29 July 2026 | Existing Article JSON-LD and `article:published_time` | Confirmed |
| /blog/border-duty-free-commercial-destination/ | 24 July 2026 | Existing Article JSON-LD and `article:published_time` | Confirmed |
| /blog/changi-duty-free-exclusivity-experience-ecommerce/ | 18 July 2026 | Existing Article JSON-LD and `article:published_time` | Confirmed |
| /blog/china-duty-free-profit-revenue-profitability/ | 21 July 2026 | Existing Article JSON-LD and `article:published_time` | Confirmed |
| /blog/china-duty-free-sanya-leisure-destination/ | 28 July 2026 | Existing Article JSON-LD and `article:published_time` | Confirmed |
| /blog/ees-biometric-airport-queues-travel-retail/ | 15 July 2026 | Existing Article JSON-LD and `article:published_time` | Confirmed |
| /blog/end-low-value-ecommerce-exemptions-travel-retail/ | 27 July 2026 | Existing Article JSON-LD and `article:published_time` | Confirmed |
| /blog/europe-travel-season-longer-travel-retail/ | 10 July 2026 | Existing Article JSON-LD and `article:published_time` | Confirmed |
| /blog/european-duty-free-record-conversion-gap-travel-retail/ | 11 August 2026 | Existing Article JSON-LD and `article:published_time` | Confirmed |
| /blog/european-traveller-safety-value-access-travel-retail/ | 11 July 2026 | Existing Article JSON-LD and `article:published_time` | Confirmed |
| /blog/frankfurt-retail-media-experience-point-of-sale/ | 14 July 2026 | Existing Article JSON-LD and `article:published_time` | Confirmed |
| /blog/fuel-airfares-demand-forecasting-travel-retail/ | 25 July 2026 | Existing Article JSON-LD and `article:published_time` | Confirmed |
| /blog/gen-z-travel-essentials-airport-retail/ | 17 July 2026 | Existing Article JSON-LD and `article:published_time` | Confirmed |
| /blog/heathrow-passenger-mix-travel-retail/ | 16 July 2026 | Existing Article JSON-LD and `article:published_time` | Confirmed |
| /blog/late-booking-travel-demand-travel-retail/ | 13 July 2026 | Existing Article JSON-LD and `article:published_time` | Confirmed |
| /blog/lotte-chatgpt-ai-shopping-duty-free/ | 20 July 2026 | Existing Article JSON-LD and `article:published_time` | Confirmed |
| /blog/morocco-world-cup-2030-tourism-corridor/ | 25 July 2026 | Existing Article JSON-LD and `article:published_time` | Confirmed |
| /blog/ospree-vfs-visa-duty-free-pre-travel/ | 27 July 2026 | Existing Article JSON-LD and `article:published_time` | Confirmed |
| /blog/sydney-airport-duty-free-reinvention/ | 27 July 2026 | Existing Article JSON-LD and `article:published_time` | Confirmed |
| /blog/sydney-airport-mecca-local-brands-duty-free/ | 29 July 2026 | Existing Article JSON-LD and `article:published_time` | Confirmed |
| /blog/visitor-dispersal-destinations-travel-retail/ | 11 July 2026 | Existing Article JSON-LD and `article:published_time` | Confirmed |
| /blog/zurich-passenger-growth-commercial-sales-gap/ | 19 July 2026 | Existing Article JSON-LD and `article:published_time` | Confirmed |

### Publication dates remaining unknown

No visible or structured publication date was added to these 38 articles. Git history was not used as a publication date because the repository history appears to include imports and later working-tree implementation changes. Sitemap `lastmod` values were also not used because they are not reliable article publication dates.

`/blog/ai-inventory-planning-beirut-duty-free/`, `/blog/airport-operators-proprietary-restaurant-brands/`, `/blog/compare-retail-sales-across-countries/`, `/blog/consolidate-sell-out-data-multiple-distributors/`, `/blog/create-reliable-fmcg-sell-out-dataset/`, `/blog/data-validation-retailer-distributor-files/`, `/blog/design-reusable-data-reconciliation-rules/`, `/blog/distributor-inventory-sales-reconciliation/`, `/blog/distributor-sales-not-match-retailer-sell-out/`, `/blog/fmcg-data-reconciliation-operating-model/`, `/blog/fragrance-resilience-category-travel-retail/`, `/blog/generational-shopping-differences-travel-retail/`, `/blog/how-to-calculate-retail-market-share-sell-out/`, `/blog/how-to-reconcile-retailer-sell-out-data-with-erp/`, `/blog/inventory-data-not-match-physical-stock/`, `/blog/k-content-travel-retail-sales/`, `/blog/manage-monthly-reconciliation-exceptions/`, `/blog/missing-skus-retailer-sell-out-files/`, `/blog/more-seats-not-more-passengers-travel-retail/`, `/blog/product-carbon-footprint-data-travel-retail/`, `/blog/reconcile-pos-shipments-inventory-data/`, `/blog/reconcile-promotional-deductions-trade-spend-fmcg/`, `/blog/reconcile-retailer-returns-with-erp/`, `/blog/retail-calendar-vs-financial-calendar-reconciliation/`, `/blog/retail-data-integration-pos-erp/`, `/blog/retail-data-reconciliation-excel-workflow/`, `/blog/retail-pos-sales-audit/`, `/blog/retailer-erp-reporting-cutoff-differences/`, `/blog/scheduled-airline-seats-real-airport-demand/`, `/blog/secondary-sales-data-fmcg/`, `/blog/sell-in-vs-sell-out-fmcg-reconciliation/`, `/blog/sell-out-mapping-product-location-period/`, `/blog/sell-through-rate-retail-data/`, `/blog/sku-ean-gtin-mapping-fmcg/`, `/blog/standardize-retailer-distributor-excel-files/`, `/blog/when-to-automate-retailer-data-reconciliation/`, `/blog/why-retailer-sales-data-does-not-match-erp/`, `/blog/why-sku-mapping-fails-international/`.

## Modified dates

The 24 dates below use 17 August 2026, the audit date, because the current working diff contains material page-level changes from the recent FMCG architecture and pillar implementation. The changes include new explanatory sections, worked examples, tables, page framing or search-intent role changes. These pages have no reliable original publication date, so only `dateModified` is exposed.

| URL | Modified Date | Evidence Source | Why the change is material |
| --- | --- | --- | --- |
| /blog/compare-retail-sales-across-countries/ | 17 August 2026 | Current working diff | New comparison contract and changed supporting links |
| /blog/consolidate-sell-out-data-multiple-distributors/ | 17 August 2026 | Current working diff | New corrected-file scenario and completeness matrix |
| /blog/create-reliable-fmcg-sell-out-dataset/ | 17 August 2026 | Current working diff | New canonical row, completeness record and late-submission guidance |
| /blog/data-validation-retailer-distributor-files/ | 17 August 2026 | Current working diff | Material validation guidance and supporting links |
| /blog/distributor-inventory-sales-reconciliation/ | 17 August 2026 | Current working diff | Material reconciliation guidance and supporting links |
| /blog/distributor-sales-not-match-retailer-sell-out/ | 17 August 2026 | Current working diff | Material diagnostic framing and supporting links |
| /blog/fmcg-data-reconciliation-operating-model/ | 17 August 2026 | Current working diff | Material operating-model content and supporting links |
| /blog/how-to-calculate-retail-market-share-sell-out/ | 17 August 2026 | Current working diff | Material metric guidance and supporting links |
| /blog/how-to-reconcile-retailer-sell-out-data-with-erp/ | 17 August 2026 | Current working diff | Material reconciliation workflow and supporting links |
| /blog/inventory-data-not-match-physical-stock/ | 17 August 2026 | Current working diff | Material diagnostic guidance and supporting links |
| /blog/manage-monthly-reconciliation-exceptions/ | 17 August 2026 | Current working diff | Material operating guidance and supporting links |
| /blog/reconcile-promotional-deductions-trade-spend-fmcg/ | 17 August 2026 | Current working diff | Material promotional-deduction reconciliation content |
| /blog/retail-calendar-vs-financial-calendar-reconciliation/ | 17 August 2026 | Current working diff | Material calendar-bridge guidance |
| /blog/retail-data-integration-pos-erp/ | 17 August 2026 | Current working diff | Material integration workflow, event map and controls |
| /blog/retail-data-reconciliation-excel-workflow/ | 17 August 2026 | Current working diff | Material Excel workflow guidance and supporting links |
| /blog/retail-pos-sales-audit/ | 17 August 2026 | Current working diff | Material POS audit guidance and supporting links |
| /blog/retailer-erp-reporting-cutoff-differences/ | 17 August 2026 | Current working diff | Material page framing and calendar-bridge links |
| /blog/secondary-sales-data-fmcg/ | 17 August 2026 | Current working diff | Material sell-in/sell-out positioning and supporting links |
| /blog/sell-in-vs-sell-out-fmcg-reconciliation/ | 17 August 2026 | Current working diff | New stock-bridge table and expanded related resources |
| /blog/sell-out-mapping-product-location-period/ | 17 August 2026 | Current working diff | Material product, location, period and grain framing |
| /blog/sell-through-rate-retail-data/ | 17 August 2026 | Current working diff | Material metric guidance and supporting links |
| /blog/sku-ean-gtin-mapping-fmcg/ | 17 August 2026 | Current working diff | New copyable mapping record and expanded guidance |
| /blog/standardize-retailer-distributor-excel-files/ | 17 August 2026 | Current working diff | Material workflow and supporting links |
| /blog/when-to-automate-retailer-data-reconciliation/ | 17 August 2026 | Current working diff | Material automation decision guidance and supporting links |

Two dated articles already had a later `dateModified` than `datePublished` — Europe’s longer travel season and European traveller safety/value/access. Their existing values were preserved and their reliable update dates were surfaced visibly.

## Structured data

- All 67 English articles contain one valid Article JSON-LD block
- All 67 Article blocks use `author.@type = Organization`, `author.name = Marksyte` and the `/about/` author URL
- All 67 publishers remain Marksyte Organizations at the existing root URL
- Existing `datePublished` and `dateModified` values were preserved on 29 dated articles
- 24 Article blocks gained `dateModified: 2026-08-17` without an invented `datePublished`
- `article:author` metadata is now present on all 67 articles
- Existing FAQPage JSON-LD was preserved on 62 articles; no FAQ schema was created or removed
- No Article block uses a Person author

## Date gaps requiring manual review

The 38 unknown publication dates are the gap requiring manual review. No article was assigned a guessed publication date from file timestamps, repository import history or global sitemap values.

## Validation

- JSON-LD parsing: passed for 67/67 Article blocks; 62 existing FAQPage blocks preserved
- Author-link result: passed for 67/67 English articles; all point to `../../about/`
- Visible/schema date parity: passed for all published and modified labels
- Invalid date relationships: 0
- Duplicate H1s: 0; every English article has exactly one H1
- Canonical route check: passed; all canonical URLs remain their existing article routes
- Public URL changes: 0
- Redirects: 0
- Broken local links: 0 after correcting two stale references to the existing Changi article route
- Spanish implementation: unchanged
- `git diff --check`: passed
- Build/test status: no package or test harness is present in the repository; static validation was run instead

## Files changed

- [about/index.html](/C:/Users/roman/Documents/marksyte/about/index.html)
- All 67 English article files under `/C:/Users/roman/Documents/marksyte/blog/*/index.html`: `agentic-ai-travel-retail`, `ai-inventory-planning-beirut-duty-free`, `ai-visibility-chinese-traveller-travel-retail`, `airline-disruption-vouchers-global-commercial-network`, `airline-ownership-route-map-travel-retail`, `airport-operators-proprietary-restaurant-brands`, `asia-pacific-reshapes-global-airport-map`, `asia-pacific-travel-retail-regulation`, `bacardi-circular-packaging-cruise-travel-retail`, `banks-airport-hospitality-chase-dfw`, `border-duty-free-commercial-destination`, `changi-duty-free-exclusivity-experience-ecommerce`, `china-duty-free-profit-revenue-profitability`, `china-duty-free-sanya-leisure-destination`, `compare-retail-sales-across-countries`, `consolidate-sell-out-data-multiple-distributors`, `create-reliable-fmcg-sell-out-dataset`, `data-validation-retailer-distributor-files`, `design-reusable-data-reconciliation-rules`, `distributor-inventory-sales-reconciliation`, `distributor-sales-not-match-retailer-sell-out`, `ees-biometric-airport-queues-travel-retail`, `end-low-value-ecommerce-exemptions-travel-retail`, `europe-travel-season-longer-travel-retail`, `european-duty-free-record-conversion-gap-travel-retail`, `european-traveller-safety-value-access-travel-retail`, `fmcg-data-reconciliation-operating-model`, `fragrance-resilience-category-travel-retail`, `frankfurt-retail-media-experience-point-of-sale`, `fuel-airfares-demand-forecasting-travel-retail`, `gen-z-travel-essentials-airport-retail`, `generational-shopping-differences-travel-retail`, `heathrow-passenger-mix-travel-retail`, `how-to-calculate-retail-market-share-sell-out`, `how-to-reconcile-retailer-sell-out-data-with-erp`, `inventory-data-not-match-physical-stock`, `k-content-travel-retail-sales`, `late-booking-travel-demand-travel-retail`, `lotte-chatgpt-ai-shopping-duty-free`, `manage-monthly-reconciliation-exceptions`, `missing-skus-retailer-sell-out-files`, `more-seats-not-more-passengers-travel-retail`, `morocco-world-cup-2030-tourism-corridor`, `ospree-vfs-visa-duty-free-pre-travel`, `product-carbon-footprint-data-travel-retail`, `reconcile-pos-shipments-inventory-data`, `reconcile-promotional-deductions-trade-spend-fmcg`, `reconcile-retailer-returns-with-erp`, `retail-calendar-vs-financial-calendar-reconciliation`, `retail-data-integration-pos-erp`, `retail-data-reconciliation-excel-workflow`, `retail-pos-sales-audit`, `retailer-erp-reporting-cutoff-differences`, `scheduled-airline-seats-real-airport-demand`, `secondary-sales-data-fmcg`, `sell-in-vs-sell-out-fmcg-reconciliation`, `sell-out-mapping-product-location-period`, `sell-through-rate-retail-data`, `sku-ean-gtin-mapping-fmcg`, `standardize-retailer-distributor-excel-files`, `sydney-airport-duty-free-reinvention`, `sydney-airport-mecca-local-brands-duty-free`, `visitor-dispersal-destinations-travel-retail`, `when-to-automate-retailer-data-reconciliation`, `why-retailer-sales-data-does-not-match-erp`, `why-sku-mapping-fails-international`, and `zurich-passenger-growth-commercial-sales-gap`
- [docs/seo/blog-trust-authorship-implementation.md](/C:/Users/roman/Documents/marksyte/docs/seo/blog-trust-authorship-implementation.md)

The pre-existing FMCG SEO documents and working-tree content changes were preserved. No unrelated files were edited for this trust-layer implementation.
