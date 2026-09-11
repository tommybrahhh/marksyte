# Phase 3C Data Reconciliation Review Draft

Status: review-only draft

Target URL: `/services/data-reconciliation/`

This document proposes a clearer version of the existing service page. It is not approved website copy. Bracketed claim IDs refer to `docs/seo/phase-3b-data-reconciliation-claim-ledger.md` and are editorial annotations to remove before publication.

Page-level GSC validation is now available from the latest workbook. Query-to-page association is still unresolved, so this draft does not select a measured query or claim page-specific search demand.

## Evidence basis

The draft uses only current public Marksyte repository evidence:

- `services/data-reconciliation/index.html` for the existing service scope, problem, controls, outputs, tools, and CTA [F-01] [F-02] [F-03] [F-04] [F-05] [F-06] [F-07]
- `es/servicios/conciliacion-datos/index.html` for the existing Spanish equivalent and localization baseline [F-09]
- `study-cases/data-reconciliation-fmcg/index.html` for an explicitly synthetic method example and its limits [F-11] [F-12]
- `blog/how-to-reconcile-retailer-sell-out-data-with-erp/index.html` for source definitions, comparison grain, common differences, process steps, and exception handling [F-14]
- `blog/why-retailer-sales-data-does-not-match-erp/index.html` for diagnostic categories such as product identifiers, location grain, cutoffs, returns, units, duplicates, missing data, values, and export limits [F-14]
- `blog/fmcg-data-reconciliation-operating-model/index.html` for intake, mapping, comparison, classification, resolution, sign-off, roles, and exception lifecycle guidance [F-13]
- `blog/data-validation-retailer-distributor-files/index.html` for structural checks, required fields, key uniqueness, reference validity, coverage, total controls, severity, and quarantine guidance [F-13]
- `blog/sku-ean-gtin-mapping-fmcg/index.html` for the narrower product-identity and mapping context [F-14]
- `C:\Users\roman\Downloads\marksyte.com-Performance-on-Search-2026-09-06.xlsx` for the latest page-level baseline and site-level query direction [G-04] [G-05] [G-06] [G-07]

No external source is used. No client evidence, performance result, benchmark, or page-specific query association is added.

## Proposed page metadata

- Proposed title: `Data reconciliation and controls | Marksyte`
- Proposed H1: `Turn conflicting numbers into a controlled exception process`
- Proposed meta description: `Match records, reconcile totals, define tolerances, and turn data exceptions into visible, traceable root-cause work.`
- Direction: Keep the current subject-led title, problem-led H1, and narrow service description while making the operating process and outputs easier to understand
- GSC status: The English pilot has 1 click, 231 impressions, a 0.43% CTR, and an average position of 81.07 for the latest selected period. No target query is selected because the query sheet has no page dimension
- Technical status: Planning only. Do not change title, H1, meta description, canonical, robots, sitemap, hreflang, structured data, redirects, or URL in this phase

## Proposed page structure

1. Hero answer and service scope
2. When the service fits
3. Match, reconcile, explain
4. Define the inputs and comparison rules
5. Run the control and classify the differences
6. Keep exceptions owned and evidenced
7. Typical outputs
8. Tools and system boundaries
9. Illustrative synthetic case
10. Practical next step
11. Related Marksyte resources

Do not add a keyword-variant section, generic definition section, or unsupported benchmark section. The page should answer the operational problem directly.

## Proposed draft copy

### Hero

Eyebrow: Data reconciliation and controls

H1: Turn conflicting numbers into a controlled exception process

Lead:

When records, transactions, or totals disagree, the first task is not to force them to balance. It is to establish what each source records, which records should match, which differences are expected, and who needs to resolve the rest. Marksyte helps define that control process, from matching logic and tolerances to visible exceptions and retained evidence [F-02] [F-04] [F-05].

Primary action: Discuss your reconciliation challenge

Secondary action: See what you receive

Review note: The lead keeps the service scope from the current page. It does not promise a time saving, error reduction, client outcome, or universal system capability.

### When this service fits

This service is a possible fit when:

- Two sources report different totals or transaction counts [F-03]
- Records need matching across product, customer, supplier, or location identifiers [F-03]
- Exceptions are resolved late or through scattered email [F-03]
- The team needs an audit trail for a recurring control [F-03]

These are fit signals, not guarantees that a project will have a particular result.

### Match, reconcile, explain

#### Match

Define the keys that determine which records belong together. Set the treatment of duplicates, missing records, unmatched rows, and ambiguous cases [F-04] [F-05].

#### Reconcile

Compare records and totals at a stated grain. Keep the period, measure, unit, status, scope, and tolerance rules visible before interpreting a variance [F-04] [F-05] [F-14].

#### Explain

Classify the differences, assign an owner, retain the supporting evidence, and record the next action. A difference is useful when the team can explain what caused it and what happens next [F-04] [F-06].

### Define the inputs before comparing totals

The comparison depends on what each source records. A retailer sell-out file, supplier shipment file, ERP invoice extract, returns file, and internal report may describe related activity without using the same identifiers, periods, units, or business events [F-14].

Start by recording:

- Source name and owner
- Reporting period and cutoff rule
- Product, customer, supplier, and location identifiers
- Measure, unit, currency, and status definitions
- Expected grain of the comparison
- Known exclusions, corrections, returns, and late files

Validate the input before reading the variance. Structural checks can cover required fields, data types, date formats, units, and schema changes. Business checks can cover identifier validity, duplicates, totals, and coverage [F-13]. Preserve the source file and the raw values so a later decision can be traced back to the input [F-14].

### Set rules that can be reviewed

The control needs explicit rules for:

- Product and pack mapping
- Customer, retailer, outlet, or location mapping
- Source and canonical periods
- Unit and currency conversion
- Duplicate and missing-row treatment
- Tolerances and expected relationships
- Severity and escalation
- The evidence required to close an exception

Product, location, and period mappings should be kept as separate, owned dimensions where the comparison requires them. A source value should remain visible beside its canonical value, with the rule version and effective dates available for review [F-14].

### Make every difference visible

Do not let a failed comparison disappear inside a comment or an email thread. Record the difference type, affected source and period, owner, priority, evidence, proposed action, and status [F-06] [F-13] [F-14].

The categories will depend on the control, but may include:

- Identifier or mapping difference
- Timing or cutoff difference
- Missing, late, or corrected input
- Duplicate or omitted record
- Unit, pack, value, or currency difference
- Genuine business exception

The category is a working control label. A reviewer must confirm that the proposed labels fit the real Marksyte delivery method before publication.

### Typical outputs

The service page currently describes these typical outputs:

#### Matching logic

Keys, standardization, tolerances, duplicate rules, and treatment of ambiguous records [F-06]

#### Reconciliation view

A comparison of records, transactions, totals, periods, and expected relationships [F-06]

#### Exception queue

Classified differences with owners, priority, status, evidence, and next action [F-06]

#### Control documentation

Definitions, assumptions, audit trail, root-cause patterns, and operating guidance [F-06]

“Typical” is deliberate. These are public descriptions of possible outputs, not a promise that every engagement receives the same deliverables.

### Tools and system boundaries

Controls can be implemented through structured spreadsheets, reporting models, database queries, or existing workflow tools. The right design depends on frequency, risk, volume, ownership, and the consequences of an unresolved difference [F-07].

This draft does not claim support for every ERP, retailer, country, data format, or integration environment. It does not describe the service as AI-powered or fully automated. Any future wording about automation must preserve a human review path for ambiguous cases and receive separate approval.

### Illustrative case

The related case study shows how a supplier file, an internal ERP, and retailer sell-out data can be organized into a controlled operating view. It is a synthetic composite built from common FMCG operating patterns. It does not claim a client engagement, logo, or commercial result [F-11].

The example covers a source register, mapping table, control totals, exception queue, decision view, and operating notes [F-12]. Use it to explain the method only. Keep the illustrative label next to the link and any reference to the case.

### Practical next step

Bring one recurring mismatch, the sources involved, the comparison period, and the decision the result is meant to support. The review can then start with the source definitions, matching rules, unresolved exceptions, and evidence trail [O-01].

Primary action: Discuss the reconciliation

Review note: This is a proposed recommendation, not a claim about measured conversion, lead quality, or search demand.

## Internal-link recommendations

These are recommendations only. No links are being edited.

| Destination | Purpose | Suggested link label | Evidence or decision note |
| --- | --- | --- | --- |
| `/services/data-standardization/` | Explain source profiling, definitions, and data-quality rules before reconciliation | Data audit and standardization | Existing live service destination. Review as part of the current next-step path [R-03] |
| `/services/data-mapping-integration/` | Explain product, customer, store, and source-to-target mapping work | Data mapping and integration | Existing live service destination. Relevant when identifiers do not align [R-03] |
| `/services/managed-data-analysis/` | Explain a related recurring operating model | Managed data operations and analysis | Existing live service destination. Confirm current service boundary [R-03] |
| `/study-cases/data-reconciliation-fmcg/` | Show the method through a clearly labelled synthetic example | Illustrative FMCG data reconciliation case | Keep the synthetic-composite disclaimer visible [F-11] [R-04] |
| `/blog/how-to-reconcile-retailer-sell-out-data-with-erp/` | Support source alignment, grain, common differences, and exception handling | Reconcile retailer sell-out data with ERP data | Existing reconciliation article [F-14] |
| `/blog/why-retailer-sales-data-does-not-match-erp/` | Support diagnosis of recurring retailer-to-ERP differences | Diagnose why retailer sales data differs from ERP | Existing diagnostic article [F-14] |
| `/blog/fmcg-data-reconciliation-operating-model/` | Support intake, roles, control stages, and sign-off | FMCG data reconciliation operating model | Existing operating-model article [F-13] |
| `/blog/data-validation-retailer-distributor-files/` | Support checks before partner data enters reconciliation | Data validation checks for retailer and distributor files | Existing validation article [F-13] |
| `/blog/sku-ean-gtin-mapping-fmcg/` | Support the narrower product-identity problem | SKU-to-EAN and GTIN mapping for FMCG teams | Existing mapping article [F-14] |

Do not link to retired Travel Retail routes.

## English and Spanish localization notes

The English and Spanish pages already exist as language equivalents [F-08] [F-09]. This draft covers English only.

Before any page update:

- Preserve the same operational meaning and level of certainty in both languages
- Review `data reconciliation`, `controls`, `matching logic`, `tolerances`, `exception queue`, `audit trail`, `source register`, and `sell-out` with a fluent reviewer
- Use the existing Spanish service page as the terminology baseline, not a literal machine translation
- Keep examples, dates, units, source types, and limitations equivalent
- Do not add a country, market, client, volume, result, or capability in one language only
- Recheck that the English and Spanish links remain reciprocal and that no hreflang change is needed

Localization status: Not reviewed by a human. Spanish publication is not approved.

## Human review checklist

- [ ] Marksyte service owner assigned
- [ ] Reader problem confirmed as a real current business problem
- [ ] Service scope checked against current delivery practice
- [ ] Every `[F-*]` statement checked against the cited public page
- [ ] Every inference and recommendation remains clearly labelled during editing
- [ ] Synthetic case disclaimer retained beside the case reference
- [ ] Blocked claims remain excluded
- [ ] No client result, benchmark, ROI, guarantee, or universal capability added
- [ ] No AI-powered or fully automated claim added
- [ ] English terminology approved
- [ ] Spanish terminology reviewed by a fluent reviewer
- [ ] Proposed title, H1, and meta description reviewed without changing the website in this phase
- [ ] Initial HTML still contains the important answer if a later edit is approved
- [ ] Canonical, robots, sitemap, hreflang, redirects, and structured data reviewed separately and left unchanged unless separately approved
- [ ] `areaServed: Worldwide` has visible support before the existing structured-data field is retained
- [x] GSC export restored and page-level evidence reviewed
- [ ] No measured target query selected until query-to-page evidence is available or the fallback path is explicitly accepted
- [ ] Publication approver assigned

## Remaining blocked claims

The draft intentionally does not make or imply these claims from the ledger:

- `[B-01]` Reduced close time, increased revenue, quantified ROI, or another measurable outcome
- `[B-02]` Eliminated errors, guaranteed audit readiness, or guaranteed explainability
- `[B-03]` A named client project, client result, logo, or measurable improvement
- `[B-04]` Support for every ERP, retailer, distributor, country, volume, or data format
- `[B-05]` AI-powered delivery, full automation, or silent business-definition decisions
- `[B-06]` `areaServed: Worldwide` as visible structured-data evidence. Business scope approval is recorded, but the page does not state it visibly
- `[B-07]` Any GSC query, query cluster, or search-demand conclusion for the pilot page

The draft also does not make audience geography, conversion performance, lead quality, or publication readiness claims.

## Review state

- Drafting status: Review-only
- GSC validation: Page-level baseline verified. Query-to-page association remains unresolved
- Fact-check status: Blocked
- Human reviewer: Not assigned
- Spanish reviewer: Not assigned
- Publication status: Blocked
- Website edits: None
- External sources: None
- External systems contacted: No
- Next decision: Decide whether the site-level query direction is sufficient for the fallback path, then complete named human review before any page edit or publication
