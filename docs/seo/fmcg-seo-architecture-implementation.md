# FMCG SEO architecture implementation report

Implementation date: 2026-08-17  
Source audit: [FMCG keyword-to-URL audit](fmcg-keyword-url-map.md)

## Summary

The 30-page English FMCG guide set now has clearer pillar-to-supporting-page routes, stronger service paths and explicit separation between diagnostic, procedural and specialist content. The implementation preserved every existing URL and did not create, merge, redirect or delete any article.

| Measure | Result |
|---|---:|
| Blog pages modified | 23 |
| Implementation report files created | 1 |
| Internal link occurrences added | 65 |
| Internal links with changed anchor text | 33 |
| Service-link occurrences added | 6 |
| Service links with changed anchor text | 2 |
| Titles changed | 1 |
| H1s changed | 0 |
| Meta descriptions changed | 1 |
| URLs renamed | 0 |
| Pages merged or redirected | 0 |

“Internal links with changed anchor text” counts existing article or service routes whose visible anchor was made more descriptive. The added-link count is occurrence-based, so repeated links on different pages are counted separately.

## Pillar changes

| Pillar | What changed | Supporting pages now pointing to it | Service path |
|---|---|---|---|
| `/blog/how-to-reconcile-retailer-sell-out-data-with-erp/` | Added diagnostic and returns specialists to the related-resources block while keeping the page as the full procedural guide | `/blog/why-retailer-sales-data-does-not-match-erp/`; `/blog/reconcile-retailer-returns-with-erp/`; existing links from POS, cutoff and mapping content remain | `/services/data-reconciliation/` |
| `/blog/sell-in-vs-sell-out-fmcg-reconciliation/` | Expanded related resources around distributor gaps, distributor stock, the three-source bridge and secondary-sales definitions | `/blog/distributor-sales-not-match-retailer-sell-out/`; `/blog/distributor-inventory-sales-reconciliation/`; `/blog/reconcile-pos-shipments-inventory-data/`; `/blog/inventory-data-not-match-physical-stock/`; `/blog/secondary-sales-data-fmcg/` | `/services/data-reconciliation/` |
| `/blog/create-reliable-fmcg-sell-out-dataset/` | Added the cross-market comparison guide and used the page as the controlled-dataset hub | `/blog/consolidate-sell-out-data-multiple-distributors/`; `/blog/compare-retail-sales-across-countries/` | `/services/managed-data-analysis/` with standardization and reconciliation context retained |
| `/blog/sku-ean-gtin-mapping-fmcg/` | Expanded the related-resources block to cover international failures, missing SKUs and pre-join mapping | `/blog/why-sku-mapping-fails-international/`; `/blog/missing-skus-retailer-sell-out-files/`; `/blog/sell-out-mapping-product-location-period/` | `/services/data-mapping-integration/` |
| `/blog/retail-data-integration-pos-erp/` | Added the pipeline sequence from integration to standardization, validation, POS audit and pre-join mapping | `/blog/standardize-retailer-distributor-excel-files/`; `/blog/data-validation-retailer-distributor-files/`; `/blog/retail-pos-sales-audit/`; `/blog/sell-out-mapping-product-location-period/` | `/services/data-mapping-integration/` |
| `/blog/retail-calendar-vs-financial-calendar-reconciliation/` | Added diagnostic cutoff, sell-in/sell-out and controlled-dataset routes plus the reconciliation service | `/blog/retailer-erp-reporting-cutoff-differences/` | `/services/data-reconciliation/` |
| `/blog/fmcg-data-reconciliation-operating-model/` | Added the Excel, reusable-rules, exception-management and automation progression | `/blog/retail-data-reconciliation-excel-workflow/`; `/blog/design-reusable-data-reconciliation-rules/`; `/blog/manage-monthly-reconciliation-exceptions/`; `/blog/when-to-automate-retailer-data-reconciliation/` | `/services/data-reconciliation/` and `/services/managed-data-analysis/` |
| `/blog/compare-retail-sales-across-countries/` | Added the reliable dataset, market-share and sell-through next steps without turning metrics pages into reconciliation guides | `/blog/create-reliable-fmcg-sell-out-dataset/`; `/blog/how-to-calculate-retail-market-share-sell-out/`; `/blog/sell-through-rate-retail-data/` | `/services/data-standardization/` and `/services/data-reconciliation/` |
| `/blog/reconcile-promotional-deductions-trade-spend-fmcg/` | No structural change was necessary; its existing rule, exception, dataset and service paths already preserved the money-side distinction | Standalone financial reconciliation page | `/services/data-reconciliation/` and `/services/managed-data-analysis/` |

### Distributor sub-pillar

`/blog/consolidate-sell-out-data-multiple-distributors/` now points directly to the reliable-dataset pillar and the file-standardization guide, while retaining its mapping and sell-in/sell-out context. It continues to route to `/services/data-mapping-integration/` and is supported by the dataset page.

## Cannibalization changes

The implementation preserved all 11 Medium-risk relationships as separate indexable pages. No canonical tags, merges or redirects were added.

| Pages involved | Distinction preserved | Changes made |
|---|---|---|
| `/blog/how-to-reconcile-retailer-sell-out-data-with-erp/` ↔ `/blog/why-retailer-sales-data-does-not-match-erp/` | The diagnostic page owns cause isolation; the pillar owns the full reconciliation procedure | The pillar now links to the diagnostic with diagnostic anchor text; the diagnostic already linked back, so its body did not need rewriting |
| `/blog/retailer-erp-reporting-cutoff-differences/` ↔ `/blog/retail-calendar-vs-financial-calendar-reconciliation/` | Cutoff page owns the symptom and evidence; calendar page owns the reusable bridge and calendar rules | Repositioned the cutoff page, added the calendar link in its opening and related block, and added a reciprocal calendar-pillar link |
| `/blog/sell-in-vs-sell-out-fmcg-reconciliation/` ↔ `/blog/distributor-sales-not-match-retailer-sell-out/` | Broad conceptual/procedural sell-in and sell-out guide versus distributor-specific gap diagnosis | Added the distributor diagnostic to the pillar; added a contextual pillar link to the diagnostic page without duplicating the full stock explanation |
| `/blog/sell-in-vs-sell-out-fmcg-reconciliation/` ↔ `/blog/reconcile-pos-shipments-inventory-data/` | Broad business-event bridge versus the three-source POS, shipments and inventory model | Added the three-source specialist to the pillar; the specialist already pointed to the pillar |
| `/blog/distributor-inventory-sales-reconciliation/` ↔ `/blog/reconcile-pos-shipments-inventory-data/` | Distributor stock equation versus broader retail-network stock bridge | Added the broad sell-in/sell-out pillar to the distributor page; its existing link to the three-source bridge was retained |
| `/blog/sku-ean-gtin-mapping-fmcg/` ↔ `/blog/why-sku-mapping-fails-international/` | Canonical identifier model and governance versus international failure diagnosis | Expanded the SKU pillar’s supporting links; the diagnostic page already linked to the pillar |
| `/blog/sku-ean-gtin-mapping-fmcg/` ↔ `/blog/missing-skus-retailer-sell-out-files/` | Product identity model versus missing-row detection and exception handling | Added the missing-SKU specialist to the pillar; the specialist already linked to the pillar |
| `/blog/sku-ean-gtin-mapping-fmcg/` ↔ `/blog/sell-out-mapping-product-location-period/` | Product identity governance versus product/location/period pre-join workflow | Added the pre-join guide to the pillar and explicitly framed its product section as narrower than the identifier model |
| `/blog/why-sku-mapping-fails-international/` ↔ `/blog/sell-out-mapping-product-location-period/` | Cross-market failure diagnosis versus operational pre-join workflow | The failure page already linked to the mapping workflow; the workflow now links back with a narrower scope statement |
| `/blog/missing-skus-retailer-sell-out-files/` ↔ `/blog/sell-out-mapping-product-location-period/` | Dropped-row detection versus complete pre-join dimension alignment | No new link was required on the missing-SKU page because its existing SKU, dataset and exception routes already serve the next question; the mapping workflow now points to missing-SKU handling |
| `/blog/retail-data-integration-pos-erp/` ↔ `/blog/sell-out-mapping-product-location-period/` | Integration definition and system boundary versus implementation-level pre-join mapping | The integration pillar now links to the mapping workflow, and the workflow now links back to the integration concept |

## Repositioned pages

### `/blog/retailer-erp-reporting-cutoff-differences/`

Changes:

- Changed the `<title>` from a broad reporting-cutoff label to `Why retailer and ERP sales land in different periods`
- Rewrote the meta description around the symptom, timing causes and evidence
- Kept the existing H1 because it already matched the assigned diagnostic search intent
- Tightened the second introduction paragraph so it stops at diagnosis and evidence rather than presenting itself as the full calendar solution
- Added an opening link to the reusable retail and financial calendar bridge
- Reworked the related-resources block so the calendar pillar is the first procedural next step

### `/blog/sell-out-mapping-product-location-period/`

Changes:

- Added an opening scope paragraph defining the page as the pre-join workflow for product, location/store, period and grain
- Added a direct link to the SKU/EAN/GTIN pillar for the broader identifier model
- Renamed the product section from `Map SKU and product codes` to `Align product codes before the join`
- Updated the reading navigation to match the narrower heading
- Framed the product section around comparison readiness rather than repeating product-master governance
- Added a related-resources block connecting the page to the SKU pillar, international mapping diagnosis, missing-SKU handling and the wider integration concept
- Kept the existing URL, title, H1, canonical and service path

## Internal-link changes

The final architecture is directional rather than fully interconnected:

- Diagnostic pages point to the relevant procedural pillar
- Procedural pillars point to specialist guides and the main service
- Dataset and consolidation pages connect architecture, source standardization, mapping and managed operations
- Product mapping pages separate the identifier pillar from pre-join location and period work
- Integration points to standardization, validation, POS audit and mapping in pipeline order
- Calendar diagnosis points to reusable calendar reconciliation
- Excel/manual workflow points to operating model, rules, exceptions and automation readiness
- Metrics pages point to the controlled dataset before presenting market-share or sell-through outputs

Existing weak anchors were replaced where they were touched. New anchors use natural variations such as `diagnose why retailer and ERP sales land in different periods`, `build the controlled sell-out dataset behind the metric`, `align product codes before the join` and `design the FMCG reconciliation operating model`. No generic `read more`, `learn more`, `this guide` or `here` anchors were introduced.

## Service-link changes

| Cluster | Service path used |
|---|---|
| Retailer-to-ERP reconciliation | `/services/data-reconciliation/` |
| Sell-in, sell-out and inventory flow | `/services/data-reconciliation/` |
| Sell-out dataset and distributor consolidation | `/services/data-mapping-integration/`, `/services/data-standardization/`, `/services/managed-data-analysis/`, `/services/data-reconciliation/` according to the page’s stage |
| Product identity and sell-out mapping | `/services/data-mapping-integration/`, with standardization where pack or file quality is relevant |
| Data integration, standardization and validation | `/services/data-mapping-integration/`, `/services/data-standardization/`, `/services/data-reconciliation/` |
| Calendars and reporting periods | `/services/data-reconciliation/` |
| Reconciliation operating model and automation | `/services/data-reconciliation/`, `/services/managed-data-analysis/` |
| Retail metrics and comparability | `/services/data-standardization/` and `/services/data-reconciliation/` |
| Trade spend | `/services/data-reconciliation/`, `/services/managed-data-analysis/` |

The weaker definition-led paths were strengthened selectively: validation now connects to standardization and reconciliation, POS audit connects to integration and validation, physical inventory accuracy connects to stock bridging and reconciliation, secondary sales connects to the sell-in/sell-out and distributor-consolidation paths, and the calendar pillar now has an explicit reconciliation service route.

## Validation

| Check | Result |
|---|---|
| Internal routes checked | 564 across all 30 FMCG pages |
| Broken internal links found | 0 |
| Broken internal links fixed | 0; all links resolved after implementation |
| Duplicate H1s | 0 across the 30 pages |
| Title/H1/meta presence | 30 of 30 pages passed |
| Canonical URL changes | 0 |
| URL renames | 0 |
| Unrelated blog files modified | 0 |
| JavaScript syntax checks | Passed for `app.js`, `analytics.js` and `service-brand-carousel.js` |
| `git diff --check` | Passed |
| Build/test result | No build step or package test suite is configured in this static HTML repository; syntax and link validation passed |

The working tree also contains the pre-existing audit outputs `fmcg-keyword-url-map.md` and `fmcg-keyword-url-map.csv`; they were used as inputs and were not changed by this implementation.

## Files changed

### Blog pages

- `blog/compare-retail-sales-across-countries/index.html`
- `blog/consolidate-sell-out-data-multiple-distributors/index.html`
- `blog/create-reliable-fmcg-sell-out-dataset/index.html`
- `blog/data-validation-retailer-distributor-files/index.html`
- `blog/distributor-inventory-sales-reconciliation/index.html`
- `blog/distributor-sales-not-match-retailer-sell-out/index.html`
- `blog/fmcg-data-reconciliation-operating-model/index.html`
- `blog/how-to-calculate-retail-market-share-sell-out/index.html`
- `blog/how-to-reconcile-retailer-sell-out-data-with-erp/index.html`
- `blog/inventory-data-not-match-physical-stock/index.html`
- `blog/manage-monthly-reconciliation-exceptions/index.html`
- `blog/retail-calendar-vs-financial-calendar-reconciliation/index.html`
- `blog/retail-data-integration-pos-erp/index.html`
- `blog/retail-data-reconciliation-excel-workflow/index.html`
- `blog/retail-pos-sales-audit/index.html`
- `blog/retailer-erp-reporting-cutoff-differences/index.html`
- `blog/secondary-sales-data-fmcg/index.html`
- `blog/sell-in-vs-sell-out-fmcg-reconciliation/index.html`
- `blog/sell-out-mapping-product-location-period/index.html`
- `blog/sell-through-rate-retail-data/index.html`
- `blog/sku-ean-gtin-mapping-fmcg/index.html`
- `blog/standardize-retailer-distributor-excel-files/index.html`
- `blog/when-to-automate-retailer-data-reconciliation/index.html`

### Report

- `docs/seo/fmcg-seo-architecture-implementation.md`
