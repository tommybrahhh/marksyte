# Marksyte FMCG data reconciliation editorial plan

Created: 2026-08-07  
Scope: English-first SEO library.  
Published: 1, 2, 13, 7, 31, 5, 26 and 28 (EN + ES). In progress per the recommended publishing order.

## Website and blog findings

- Marksyte is a static bilingual website built with plain HTML, shared CSS and browser JavaScript. There is no CMS, Markdown or MDX rendering layer.
- English posts use `/blog/<slug>/index.html`; Spanish counterparts use `/es/blog/<slug>/index.html`.
- Every article owns its SEO metadata, canonical and hreflang links, Open Graph/Twitter tags and Article/FAQ JSON-LD.
- Shared presentation comes from `/styles.css` and `/assets/blog/article-enhancements.css`. Existing articles use an article hero, `article-body`, reading navigation, callout blocks, action lists, related links, FAQs and a final CTA.
- The live homepage already positions Marksyte around retailer and distributor data reconciliation for FMCG. The existing blog index still primarily presents operational-data and Travel Retail editorial. Existing posts should remain; the new reconciliation library should appear as a new primary cluster above that archive.
- Existing Travel Retail articles are useful contextual proof of complex multi-retailer and multi-market work, but are not substitutes for search-oriented reconciliation guides.

## Service pages available for internal linking

| Service | Route | Best article contexts |
|---|---|---|
| Data reconciliation and controls | `/services/data-reconciliation/` | Retailer/ERP differences, sell-in/sell-out, returns, exceptions, control design |
| Data mapping and integration | `/services/data-mapping-integration/` | SKU/EAN/GTIN, customer/store mappings, source-to-target rules, partner consolidation |
| Data audit and standardization | `/services/data-standardization/` | File templates, units, calendars, data-quality validation, master-data cleanup |
| Managed data operations and analysis | `/services/managed-data-analysis/` | Recurring monthly workflows, managed reconciliation, monitoring and dataset maintenance |
| Illustrative FMCG reconciliation case | `/study-cases/data-reconciliation-fmcg/` | Worked examples and evidence of the operating approach |

## Cluster architecture

1. **Retailer data reconciliation** — pillar: article 1; supporting articles 2–6.
2. **Distributor data reconciliation** — pillar: article 7; supporting articles 8–12.
3. **Product and master-data mapping** — pillar: article 13; supporting articles 14–18.
4. **Sell-in, sell-out and commercial data** — pillar: article 19; supporting articles 20–24.
5. **Reconciliation processes and automation** — pillar: article 25; supporting articles 26–30.

Each supporting article should link to its cluster pillar, the most relevant service page and one adjacent supporting article. Pillars should link back to all cluster support pages as they are published.

## Editorial map: 30 article specifications

### Cluster 1 — Retailer data reconciliation

#### 1. How to reconcile retailer sell-out data with ERP data — High, pillar

- **SEO title / slug / H1:** How to reconcile retailer sell-out data with ERP data | `/blog/how-to-reconcile-retailer-sell-out-data-with-erp/` | same as title.
- **Meta description:** A practical process for reconciling retailer POS and sell-out data with ERP sales, shipments, returns and product master data.
- **Intent / keyword / related terms:** Problem-solving guide; retailer sell-out data reconciliation; retail POS reconciliation, ERP reconciliation, FMCG/CPG data reconciliation.
- **Reader / problem:** Sales operations, finance, BI and data teams that cannot explain retailer-versus-ERP differences.
- **Commercial relevance / service link:** Very high; directly demonstrates the reconciliation engagement. Link to data reconciliation, with secondary mapping and standardization links.
- **H2s:** Define the sources; Why the numbers differ; Worked example; Reconciliation process; Exception management; Common mistakes; When manual work stops scaling; Practical takeaway.
- **Related articles:** 2, 3, 5, 25.

#### 2. Why retailer sales data does not match your ERP — High

- **SEO title / slug / H1:** Why retailer sales data does not match your ERP | `/blog/why-retailer-sales-data-does-not-match-erp/` | same.
- **Meta:** Diagnose the product, timing, location, returns and data-quality issues behind retailer-to-ERP discrepancies.
- **Intent / keyword / related:** Diagnostic; retailer data discrepancies; retailer sales vs ERP, POS data mismatch, commercial data reconciliation.
- **Reader / problem:** Commercial and finance owners seeing unexplained variances; needs a cause tree before changing numbers.
- **Commercial / link:** Very high; creates demand for a reconciliation review. Link to data reconciliation.
- **H2s:** What is being compared; Ten causes; How to isolate each cause; Diagnostic table; What not to adjust; Escalation path.
- **Related:** 1, 3, 4, 5.

#### 3. Reporting cutoffs: why retailer and ERP sales land in different periods — High

- **SEO title / slug / H1:** Reporting cutoffs in retailer and ERP reconciliation | `/blog/retailer-erp-reporting-cutoff-differences/` | Why retailer and ERP sales land in different periods.
- **Meta:** Learn how retail weeks, invoice dates, delivery dates and close calendars create timing differences—and how to reconcile them.
- **Intent / keyword / related:** Fix timing variance; reporting cutoff differences; retail calendar, financial calendar, timing reconciliation.
- **Reader / problem:** Finance, revenue management and BI teams with period-end variances that reverse later.
- **Commercial / link:** High; supports calendar rules and exception controls. Link to data reconciliation.
- **H2s:** Dates in each system; Boundary example; Calendar bridge; Carry-forward rules; Evidence; Common mistakes.
- **Related:** 1, 4, 20.

#### 4. How to reconcile returns between retailer data and ERP systems — High

- **SEO title / slug / H1:** How to reconcile retailer returns with ERP data | `/blog/reconcile-retailer-returns-with-erp/` | same.
- **Meta:** A practical guide to consumer returns, stock returns, credit notes, restatements and negative quantities in reconciliation.
- **Intent / keyword / related:** How-to; retailer returns reconciliation; ERP credit notes, sell-out adjustments, negative sales.
- **Reader / problem:** Finance and sales operations teams whose returns appear in different periods or at different grains.
- **Commercial / link:** High; needs explicit event and timing rules. Link to data reconciliation.
- **H2s:** Types of return; Event timeline; Matching logic; Restated files; Example; Exception categories; Controls.
- **Related:** 1, 3, 22.

#### 5. How to handle missing SKUs in retailer sell-out files — High

- **SEO title / slug / H1:** How to handle missing SKUs in retailer sell-out files | `/blog/missing-skus-retailer-sell-out-files/` | same.
- **Meta:** Find, classify and resolve unmapped or missing products without silently excluding valid retailer sales.
- **Intent / keyword / related:** Troubleshooting; missing SKU retailer data; unmapped EAN, retailer product code, product master exceptions.
- **Reader / problem:** Data and BI teams losing rows during joins or repeatedly repairing lookups.
- **Commercial / link:** High; clear mapping and exception-management need. Link to data mapping and integration.
- **H2s:** Missing vs unmapped; Detection controls; Mapping waterfall; New listings; Discontinued items; Queue design; Prevention.
- **Related:** 1, 13, 14, 16.
- **Published:** 2026-08-11, EN and ES. Sources: GS1 (GTIN identification), SPS Commerce (item data failures), MDPI (product master data quality study).
- **Spanish slug:** `/es/blog/skus-faltantes-archivos-sell-out-retailer/`.

#### 6. Retailer data reconciliation checklist for monthly close — Medium

- **SEO title / slug / H1:** Retailer data reconciliation checklist for monthly close | `/blog/retailer-data-reconciliation-checklist/` | same.
- **Meta:** A repeatable checklist covering inputs, mappings, periods, measures, exceptions, sign-off and audit trail.
- **Intent / keyword / related:** Checklist; retailer reconciliation checklist; monthly close controls, POS validation.
- **Reader / problem:** Process owners who need a controlled routine rather than a person-dependent workbook.
- **Commercial / link:** Medium-high; useful conversion asset. Link to data reconciliation and managed data operations.
- **H2s:** Before files arrive; Intake; Validation; Matching; Exceptions; Sign-off; Next-cycle maintenance.
- **Related:** 1, 25, 26, 29.

### Cluster 2 — Distributor data reconciliation

#### 7. How to consolidate sell-out data from multiple distributors — High, pillar

- **SEO title / slug / H1:** How to consolidate sell-out data from multiple distributors | `/blog/consolidate-sell-out-data-multiple-distributors/` | same.
- **Meta:** Standardize distributor templates, map master data and consolidate market-level sell-out into one controlled dataset.
- **Intent / keyword / related:** Practical build guide; distributor sell-out consolidation; multi-distributor reporting, distributor data harmonization.
- **Reader / problem:** Regional sales operations, BI and commercial excellence teams combining inconsistent partner reports.
- **Commercial / link:** Very high; central Marksyte use case. Link to mapping/integration and managed data operations.
- **H2s:** Source inventory; Canonical schema; Mapping dimensions; Calendar/currency/unit rules; Consolidation workflow; Exceptions; Controls.
- **Related:** 8, 9, 10, 12, 27.

#### 8. Why distributor sell-out reports are difficult to consolidate — High

- **SEO title / slug / H1:** Why distributor sell-out reports are difficult to consolidate | `/blog/why-distributor-sell-out-reports-are-hard-to-consolidate/` | same.
- **Meta:** Understand the templates, definitions, product masters and market rules that make distributor reporting inconsistent.
- **Intent / keyword / related:** Diagnostic; distributor reporting problems; distributor templates, master-data differences.
- **Reader / problem:** Regional commercial leaders who see late, incomparable or incomplete reporting.
- **Commercial / link:** High; opens source audit and standardization work. Link to data standardization.
- **H2s:** Where variation enters; Examples by field; False comparability; Diagnostic questions; Prioritizing fixes.
- **Related:** 7, 9, 11.

#### 9. How to standardize retailer and distributor Excel files — High

- **SEO title / slug / H1:** How to standardize retailer and distributor Excel files | `/blog/standardize-retailer-distributor-excel-files/` | same.
- **Meta:** Build a canonical input structure for partner files without losing source lineage, corrections or local detail.
- **Intent / keyword / related:** How-to; standardize retailer Excel files; distributor templates, data harmonization, canonical schema.
- **Reader / problem:** Analysts spending days renaming columns, fixing dates and copying tabs.
- **Commercial / link:** Very high; direct standardization offer. Link to data standardization.
- **H2s:** Profile files; Canonical schema; Field mapping; Data types/units; Validation; Source lineage; Template changes; Example.
- **Related:** 7, 8, 27, 28.

#### 10. Distributor inventory and sales reconciliation: what should balance? — High

- **SEO title / slug / H1:** Distributor inventory and sales reconciliation: what should balance? | `/blog/distributor-inventory-sales-reconciliation/` | same.
- **Meta:** Reconcile opening stock, receipts, sales, returns and closing stock while keeping timing and adjustment differences visible.
- **Intent / keyword / related:** Process design; distributor inventory reconciliation; stock bridge, sell-out, inventory movements.
- **Reader / problem:** Supply chain, finance and commercial teams unable to explain stock movement equations.
- **Commercial / link:** High; demonstrates multi-source control design. Link to data reconciliation.
- **H2s:** Stock equation; Source events; Worked bridge; Timing; Returns/damage; Tolerances; Exception workflow.
- **Related:** 7, 21, 22.

#### 11. How to compare distributor performance across markets with different data — Medium

- **SEO title / slug / H1:** How to compare distributor performance across markets with different data | `/blog/compare-distributor-performance-across-markets/` | same.
- **Meta:** Create comparable distributor reporting while preserving local definitions, coverage limits and data-quality caveats.
- **Intent / keyword / related:** Build comparable reporting; distributor performance consolidation; cross-market sales reporting, coverage.
- **Reader / problem:** Regional directors comparing totals that differ in currency, channel scope, calendar or product hierarchy.
- **Commercial / link:** Medium-high; follows harmonization into analysis. Link to managed data operations.
- **H2s:** Define comparability; Coverage matrix; Currency/units; Calendar alignment; Hierarchy; Quality flags; Reporting view.
- **Related:** 7, 8, 18, 24.

#### 12. How to manage corrected and late distributor files — Medium

- **SEO title / slug / H1:** How to manage corrected and late distributor files | `/blog/manage-corrected-late-distributor-files/` | same.
- **Meta:** Version distributor submissions, rerun affected periods and retain a clear audit trail when partner files arrive late or change.
- **Intent / keyword / related:** Operational fix; corrected distributor files; file versioning, late data, restatements.
- **Reader / problem:** Data operations teams whose monthly dataset changes without traceable versions.
- **Commercial / link:** Medium-high; recurring operating-model fit. Link to managed data operations.
- **H2s:** Submission states; File identity; Version rules; Restatement logic; Downstream impact; Notifications; Audit trail.
- **Related:** 7, 26, 29.

### Cluster 3 — Product and master-data mapping

#### 13. SKU-to-EAN and GTIN mapping: a practical guide for FMCG teams — High, pillar

- **SEO title / slug / H1:** SKU-to-EAN and GTIN mapping for FMCG teams | `/blog/sku-ean-gtin-mapping-fmcg/` | SKU-to-EAN and GTIN mapping: a practical guide for FMCG teams.
- **Meta:** Build and maintain reliable mappings between internal SKUs, retailer codes, EANs and GTINs across packs and markets.
- **Intent / keyword / related:** Practical guide; SKU to EAN mapping; GTIN mapping, product-code mapping, FMCG master data.
- **Reader / problem:** Master-data, BI and commercial teams with failed joins and ambiguous product identities.
- **Commercial / link:** Very high; direct mapping engagement. Link to data mapping and integration.
- **H2s:** Identifier roles; Mapping model; Pack hierarchy; Effective dates; Many-to-one cases; Validation; Ownership; Example.
- **Related:** 5, 14, 15, 16, 17.

#### 14. What to do when retailers and manufacturers use different product codes — High

- **SEO title / slug / H1:** When retailers and manufacturers use different product codes | `/blog/retailer-manufacturer-product-code-mapping/` | What to do when retailer and manufacturer product codes do not match.
- **Meta:** Create a controlled mapping path from retailer product code to EAN or GTIN and internal SKU.
- **Intent / keyword / related:** Fix mismatch; retailer product code mapping; manufacturer SKU, cross-reference table.
- **Reader / problem:** Analysts with unmatched partner records and manual lookup chains.
- **Commercial / link:** High; source-to-target mapping fit. Link to data mapping/integration.
- **H2s:** Why codes differ; Mapping waterfall; Confidence/status; Example; Unmapped queue; Governance.
- **Related:** 5, 13, 16.

#### 15. How to maintain SKU, EAN and GTIN mapping tables — High

- **SEO title / slug / H1:** How to maintain SKU, EAN and GTIN mapping tables | `/blog/maintain-sku-ean-gtin-mapping-tables/` | same.
- **Meta:** Version mappings, manage effective dates and prevent product-code changes from breaking retailer reconciliation.
- **Intent / keyword / related:** Process improvement; maintain SKU mapping table; master-data governance, effective dating.
- **Reader / problem:** Data owners whose lookup table is overwritten, duplicated or never retired.
- **Commercial / link:** High; reusable rules and managed maintenance. Link to mapping/integration and managed operations.
- **H2s:** Required fields; Lifecycle/status; Effective dating; Evidence; Approval; Quality checks; Change log; Ownership.
- **Related:** 13, 16, 29.

#### 16. Product-code changes and relaunches: how to preserve sales history — Medium

- **SEO title / slug / H1:** How to handle product-code changes without breaking sales history | `/blog/product-code-changes-preserve-sales-history/` | same.
- **Meta:** Map replacements, relaunches and identifier changes while preserving valid historical reporting and pack distinctions.
- **Intent / keyword / related:** How-to; product code changes sales history; SKU replacement, EAN change, relaunch mapping.
- **Reader / problem:** BI and brand teams seeing broken trends after code migrations.
- **Commercial / link:** Medium-high; effective-dated hierarchy design. Link to mapping/integration.
- **H2s:** Types of change; Successor relationships; Restatement choices; Effective dates; Example; Validation.
- **Related:** 13, 14, 15, 18.

#### 17. Pack-size and unit-of-measure differences in retail data — High

- **SEO title / slug / H1:** How to reconcile pack-size and unit-of-measure differences | `/blog/reconcile-pack-size-unit-of-measure-differences/` | same.
- **Meta:** Resolve cases, packs, eaches, litres and changing pack configurations across retailer, distributor and ERP data.
- **Intent / keyword / related:** Fix conversion issue; pack size reconciliation; UOM conversion, case-to-each, product mapping.
- **Reader / problem:** Supply, finance and commercial teams with plausible but wrong quantities.
- **Commercial / link:** High; concrete mapping/standardization problem. Link to data standardization.
- **H2s:** Common units; Conversion table; Effective dates; Mixed packs; Returns; Worked example; Controls.
- **Related:** 1, 10, 13, 21.

#### 18. How to map retailer product hierarchies to an internal product master — Medium

- **SEO title / slug / H1:** How to map retailer product hierarchies to your product master | `/blog/map-retailer-product-hierarchy-internal-master/` | same.
- **Meta:** Align retailer categories, brands, sub-brands and packs to an internal hierarchy without losing either view.
- **Intent / keyword / related:** Mapping guide; product hierarchy mapping; retailer category mapping, master-data harmonization.
- **Reader / problem:** Category, BI and revenue teams whose reports aggregate products differently.
- **Commercial / link:** Medium-high; mapping design and analytical dataset fit. Link to mapping/integration.
- **H2s:** Why hierarchies differ; Preserve both views; Crosswalk design; Many-to-many cases; Versioning; Reporting example.
- **Related:** 11, 13, 16, 24.

### Cluster 4 — Sell-in, sell-out and commercial data

#### 19. Sell-in vs sell-out in FMCG: how to reconcile the numbers — High, pillar

- **SEO title / slug / H1:** Sell-in vs sell-out in FMCG: how to reconcile the numbers | `/blog/sell-in-vs-sell-out-fmcg-reconciliation/` | same.
- **Meta:** Understand what sell-in and sell-out measure, why they diverge and how to reconcile them with inventory and timing.
- **Intent / keyword / related:** Understand and fix; sell-in vs sell-out FMCG; sell-in sell-out reconciliation, CPG commercial data.
- **Reader / problem:** Sales, finance and revenue teams treating different commercial events as directly comparable.
- **Commercial / link:** Very high; broad high-intent pillar. Link to data reconciliation.
- **H2s:** Definitions through events; Expected relationship; Stock bridge; Timing/returns; Example; Reconciliation steps; Limits.
- **Related:** 1, 10, 20, 21, 22.

#### 20. Retail calendar vs financial calendar: reconciling reporting periods — High

- **SEO title / slug / H1:** Retail calendar vs financial calendar: reconciling reporting periods | `/blog/retail-calendar-vs-financial-calendar-reconciliation/` | same.
- **Meta:** Build calendar bridges for retail weeks, 4-4-5 periods, months and financial close without double counting days.
- **Intent / keyword / related:** How-to; retail calendar reconciliation; financial calendar, 4-4-5 calendar, period mapping.
- **Reader / problem:** Finance and BI teams with recurring boundary variances.
- **Commercial / link:** High; explicit transformation rule. Link to data reconciliation/standardization.
- **H2s:** Calendar types; Date bridge; Partial weeks; 53rd week; Cutoffs; Restatements; Example; Controls.
- **Related:** 3, 19, 24.

#### 21. How to reconcile POS, shipments and inventory data — High

- **SEO title / slug / H1:** How to reconcile POS, shipments and inventory data | `/blog/reconcile-pos-shipments-inventory-data/` | same.
- **Meta:** Connect consumer sales, supplier shipments and stock movements to explain commercial differences without forcing one-to-one matches.
- **Intent / keyword / related:** Process guide; POS shipments inventory reconciliation; stock flow, retail POS data.
- **Reader / problem:** Commercial and supply teams lacking one coherent stock-and-sales bridge.
- **Commercial / link:** Very high; multi-source reconciliation. Link to data reconciliation.
- **H2s:** Event model; Stock equation; Grain; Worked bridge; Timing; Missing movements; Exceptions; Controls.
- **Related:** 10, 17, 19, 22.

#### 22. Returns, credits and adjustments in sell-in/sell-out reconciliation — High

- **SEO title / slug / H1:** Returns and adjustments in sell-in/sell-out reconciliation | `/blog/returns-adjustments-sell-in-sell-out-reconciliation/` | same.
- **Meta:** Separate consumer returns, trade returns, credits and restatements so they do not create recurring false variances.
- **Intent / keyword / related:** Diagnostic/how-to; sell-out adjustments reconciliation; returns, credit notes, restatements.
- **Reader / problem:** Finance and sales operations teams mixing correction types.
- **Commercial / link:** High; exception taxonomy and event rules. Link to data reconciliation.
- **H2s:** Adjustment types; Sign conventions; Period treatment; Matching evidence; Examples; Exception classes; Controls.
- **Related:** 4, 10, 19, 21.

#### 23. How to measure completeness in retailer and distributor sell-out data — Medium

- **SEO title / slug / H1:** How to measure completeness in sell-out data | `/blog/measure-sell-out-data-completeness/` | How to measure completeness in retailer and distributor sell-out data.
- **Meta:** Check expected stores, products, periods and files before incomplete sell-out reaches commercial reporting.
- **Intent / keyword / related:** Validation guide; sell-out data completeness; missing stores, missing periods, data coverage.
- **Reader / problem:** BI and data teams receiving totals without knowing coverage.
- **Commercial / link:** Medium-high; data-quality control fit. Link to data standardization.
- **H2s:** Completeness dimensions; Expected-population tables; Coverage metrics; Late data; Example; Thresholds; Reporting flags.
- **Related:** 5, 7, 28.

#### 24. How to create one reliable FMCG sell-out dataset — High

- **SEO title / slug / H1:** How to create a reliable FMCG sell-out dataset | `/blog/create-reliable-fmcg-sell-out-dataset/` | same.
- **Meta:** Design a traceable sell-out dataset across retailers, distributors, markets, products, calendars and corrected submissions.
- **Intent / keyword / related:** Build process; reliable FMCG sell-out dataset; commercial data harmonization, CPG reporting data.
- **Reader / problem:** BI/commercial excellence leaders seeking one version without hiding source differences.
- **Commercial / link:** Very high; joins all four service capabilities. Primary link to managed data operations.
- **H2s:** Source contract; Canonical model; Mappings; Calendars/measures; Quality flags; Versioning; Exceptions; Output layers.
- **Related:** 7, 11, 18, 23, 25.

### Cluster 5 — Reconciliation processes and automation

#### 25. FMCG data reconciliation: a practical operating model — High, pillar

- **SEO title / slug / H1:** FMCG data reconciliation: a practical operating model | `/blog/fmcg-data-reconciliation-operating-model/` | same.
- **Meta:** Design roles, rules, controls, exception queues and audit trails for repeatable retailer and distributor reconciliation.
- **Intent / keyword / related:** Process design; FMCG data reconciliation; CPG reconciliation process, commercial data controls.
- **Reader / problem:** Heads of data, finance and commercial operations formalizing an ad hoc monthly process.
- **Commercial / link:** Very high; describes the whole service operating model. Link to data reconciliation and managed operations.
- **H2s:** Scope and grain; Roles; Source intake; Rules; Control stages; Exception lifecycle; Sign-off; Improvement backlog.
- **Related:** 1, 6, 24, 26, 30.

#### 26. Retail data reconciliation in Excel: a practical workflow — High

- **SEO title / slug / H1:** Retail data reconciliation in Excel: a practical workflow | `/blog/retail-data-reconciliation-excel-workflow/` | same.
- **Meta:** Structure an Excel reconciliation with raw inputs, mappings, controls, comparison output and a trackable exception log.
- **Intent / keyword / related:** Hands-on workflow; retail data reconciliation Excel; POS reconciliation spreadsheet, Power Query.
- **Reader / problem:** Analysts rebuilding workbooks every month without separation of inputs and logic.
- **Commercial / link:** High; captures users at the manual-to-controlled transition. Link to data reconciliation.
- **H2s:** Workbook structure; Raw-data rules; Mapping joins; Comparison table; Exceptions; Versioning; Failure points; Next step.
- **Related:** 6, 9, 25, 27, 30.
- **Published:** 2026-08-11, EN and ES. Sources: Microsoft Learn (Power Query combine files), Panko (spreadsheet development error research).
- **Spanish slug:** `/es/blog/workflow-excel-conciliacion-datos-retailer/`.

#### 27. When to automate retailer data reconciliation — High

- **SEO title / slug / H1:** When to automate retailer data reconciliation | `/blog/when-to-automate-retailer-data-reconciliation/` | same.
- **Meta:** Decide which reconciliation steps are stable enough to automate and which exceptions still need human review.
- **Intent / keyword / related:** Evaluation; automate retailer data reconciliation; reconciliation software, workflow automation.
- **Reader / problem:** Operations and IT leaders deciding whether recurring spreadsheet work justifies automation.
- **Commercial / link:** Very high buying intent; Marksyte can assess and design. Link to managed data operations.
- **H2s:** Automation signals; Readiness criteria; Automate vs review; Architecture options; Business case inputs; Pilot; Controls.
- **Related:** 7, 9, 25, 26, 30.

#### 28. Data validation checks for retailer and distributor files — High

- **SEO title / slug / H1:** Data validation checks for retailer and distributor files | `/blog/data-validation-retailer-distributor-files/` | same.
- **Meta:** Validate schema, identifiers, duplicates, dates, units, totals and coverage before partner data enters reconciliation.
- **Intent / keyword / related:** Checklist/how-to; retailer file validation; distributor data quality, schema checks.
- **Reader / problem:** Data operations teams discovering bad inputs only after reports fail.
- **Commercial / link:** High; standardization and control design. Link to data standardization.
- **H2s:** Structural vs business checks; Required fields; Key uniqueness; Reference validity; Coverage; Total controls; Severity; Quarantine.
- **Related:** 9, 23, 25, 29.
- **Published:** 2026-08-11, EN and ES. Sources: Gartner (cost of poor data quality), TechTarget (1-10-100 rule of data verification). The planned link to article 23 is replaced by a link to article 7 (sell-out consolidation) because 23 is not yet published.
- **Spanish slug:** `/es/blog/validacion-datos-archivos-retailers-distribuidores/`.

#### 29. How to manage reconciliation exceptions month after month — High

- **SEO title / slug / H1:** How to manage reconciliation exceptions month after month | `/blog/manage-monthly-reconciliation-exceptions/` | same.
- **Meta:** Create exception categories, owners, statuses, evidence and aging rules so recurring differences are resolved rather than rediscovered.
- **Intent / keyword / related:** Process improvement; reconciliation exception management; exception queue, root cause, audit trail.
- **Reader / problem:** Finance/data teams resolving the same discrepancies repeatedly in email.
- **Commercial / link:** Very high; core differentiator. Link to data reconciliation/managed operations.
- **H2s:** Exception record; Taxonomy; Ownership; Status lifecycle; Aging/materiality; Recurrence; Evidence; Reporting.
- **Related:** 6, 12, 15, 25, 30.

#### 30. How to design reusable data reconciliation rules — High

- **SEO title / slug / H1:** How to design reusable data reconciliation rules | `/blog/design-reusable-data-reconciliation-rules/` | same.
- **Meta:** Turn one-off spreadsheet fixes into documented matching, tolerance, timing and exception rules that can be tested and rerun.
- **Intent / keyword / related:** Design guide; data reconciliation rules; matching logic, tolerance rules, rule versioning.
- **Reader / problem:** Data, finance and IT teams whose logic is hidden in formulas or analyst knowledge.
- **Commercial / link:** Very high; bridges consulting and automation. Link to data reconciliation and mapping/integration.
- **H2s:** Anatomy of a rule; Inputs/outputs; Rule order; Tolerances; Effective dates; Tests; Versioning; Exceptions; Documentation.
- **Related:** 25, 26, 27, 29.

### Cluster 6 — Trade spend and promotional deductions

#### 31. How to reconcile promotional deductions and trade spend in FMCG — High, pillar

- **SEO title / slug / H1:** How to reconcile promotional deductions and trade spend in FMCG | `/blog/reconcile-promotional-deductions-trade-spend-fmcg/` | same.
- **Meta:** Reconcile promotional claims, retailer deductions and trade spend by encoding terms as rules and checking every claim against what was earned.
- **Intent / keyword / related:** Money-side reconciliation; promotional deduction reconciliation; trade spend reconciliation, retailer deductions, deduction management FMCG, CPG trade promotion reconciliation.
- **Reader / problem:** Finance, sales operations and commercial finance teams whose retailer deductions are argued invoice by invoice and never decomposed by cause.
- **Commercial / link:** Very high; extends the volume reconciliation proposition into the money side of the same trade terms. Link to data reconciliation and managed data operations.
- **H2s:** Why the money side runs late; Write trade terms as rules first; What a deduction actually contains; The three-pass reconciliation; The numbers that matter; What this guide does not claim.
- **Related:** 1, 13, 19, 25, 29, 30.
- **Published:** 2026-08-11, EN and ES. Sources: BlackLine (deduction management), BlackLine (handling retailer deductions), HighRadius (deduction margin risk), McKinsey (TPM/TPO), ESM Magazine (missing-data profit leakage).
- **Spanish slug:** `/es/blog/conciliar-deducciones-gasto-comercial-fmcg/`.

## Recommended first 10 and publishing order

| Order | Article | Role | Why it comes now |
|---:|---|---|---|
| 1 | How to reconcile retailer sell-out data with ERP data | Pillar | Closest match to the repositioning and a direct “we have this problem” query. |
| 2 | Sell-in vs sell-out in FMCG: how to reconcile the numbers | Pillar | Establishes the commercial event model many later articles rely on. |
| 3 | SKU-to-EAN and GTIN mapping for FMCG teams | Pillar | Captures a concrete root cause and supports both retailer and distributor clusters. |
| 4 | How to consolidate sell-out data from multiple distributors | Pillar | Extends the proposition from one retailer to regional partner complexity. |
| 5 | Why retailer sales data does not match your ERP | Support | Strong diagnostic intent; links into the first pillar and its specific causes. |
| 6 | How to standardize retailer and distributor Excel files | Support | Recognisable monthly pain with direct standardization relevance. |
| 7 | Reporting cutoffs in retailer and ERP reconciliation | Support | Narrow, practical query that demonstrates non-generic expertise. |
| 8 | How to reconcile POS, shipments and inventory data | Support | Shows multi-source depth and connects commercial and supply-chain readers. |
| 9 | How to manage reconciliation exceptions month after month | Support | Moves the conversation from comparison to an operable control process. |
| 10 | When to automate retailer data reconciliation | Support / commercial | Highest buying-intent transition once the manual process and rules are understood. |

### Cluster grouping for the first 10

- **Retailer reconciliation:** 1, 5, 7.
- **Distributor reconciliation:** 4, 6.
- **Product/master data:** 3.
- **Sell-in/sell-out and commercial data:** 2, 8.
- **Processes and automation:** 9, 10.

### Internal-link plan for the first 10

- Article 1 links to articles 5 and 7 once live; both link back to article 1.
- Article 2 links to article 8; article 8 links back to article 2 and across to article 1.
- Article 3 receives links from articles 1, 4 and 6; it links to the mapping service.
- Article 4 links to article 6 and to article 3 for identifier mapping (article 6 to be added once live).
- Article 9 links to articles 1 and 4 as applied examples; those pillars link back from their exception sections.
- Article 10 links to articles 6 and 9 as prerequisites and to managed data operations as the understated commercial next step.

## Assumptions and editorial safeguards

- English is the first-run publishing language. A Spanish counterpart should be created before adding Spanish hreflang; the English draft therefore does not claim a Spanish alternate article.
- Search-volume tools were not used. Priority is based on problem proximity, realistic search intent, cluster value and commercial fit, as requested.
- External citations are not required for the first practical guide because it makes no market, benchmark or customer claims. Future articles should cite sources only where factual claims need support.
- Existing Travel Retail articles and URLs remain untouched. They stay as contextual editorial and can link into the reconciliation library only where the connection is natural.
- Proposed slugs are intentionally descriptive and stable. Avoid changing them after publication without redirects.
