# Phase 3B Data Reconciliation Claim Ledger

Status: partially unblocked. Page-level metrics are verified. Query-to-page association and final technical review remain open

This ledger separates public first-party facts from inferences, opinions, recommendations, and unsupported claims for `/services/data-reconciliation/`. It is a review control, not approved page copy.

## Evidence conventions

- `First-party evidence` means a current public Marksyte page, repository source, or the latest GSC workbook and prior repository reports
- `Inference` means a working interpretation that must not be written as a fact without qualification
- `Opinion` means a point of view that needs a named Marksyte owner
- `Recommendation` means a proposed page or workflow decision, not a claim about Marksyte or its results
- `Blocked` means the claim must not be published until a named reviewer supplies and approves evidence

The latest GSC workbook is `C:\Users\roman\Downloads\marksyte.com-Performance-on-Search-2026-09-06.xlsx`. It provides a verified page-level baseline but no page dimension in the query sheet. No query-to-page association is invented here.

## Claim ledger

| ID | Proposed claim or content point | Type | Source or Marksyte evidence | Exact source location | Reviewer | Status | Notes |
| --- | --- | --- | --- | --- | --- | --- | --- |
| F-01 | The pilot is an existing Marksyte service page for data reconciliation and controls | First-party evidence | Current repository page | `services/data-reconciliation/index.html`, line 5 title and line 12 hero eyebrow | Marksyte service owner | In review | Safe as page identity if the service is still current |
| F-02 | The visible service scope includes matching records, reconciling transactions and totals, defining tolerances, and tracing differences to causes | First-party evidence | Current repository page | `services/data-reconciliation/index.html`, line 12 service lead | Marksyte service owner | In review | Public capability description. Confirm current offer before reusing or expanding it |
| F-03 | The page describes four situations where the service may fit, including different totals, unmatched identifiers, late or scattered exception handling, and recurring audit-trail needs | First-party evidence | Current repository page | `services/data-reconciliation/index.html`, line 12 `service-fit` list | Marksyte service owner | In review | Do not convert “best when” into a guaranteed outcome |
| F-04 | The page separates matching, comparing, and resolving as three operational decisions | First-party evidence | Current repository page | `services/data-reconciliation/index.html`, lines 13 to 14 | Marksyte service owner | In review | The page states the steps. It does not prove that every engagement follows them identically |
| F-05 | The page lists keys, tolerances, duplicate logic, unmatched rows, periods, transactions, balances, quantities, owners, decisions, and an audit trail as control topics | First-party evidence | Current repository page | `services/data-reconciliation/index.html`, lines 14 to 15 | Marksyte subject-matter reviewer | In review | Keep as a service description, not as a quantified result |
| F-06 | The page lists matching logic, a reconciliation view, an exception queue, and control documentation as typical outputs | First-party evidence | Current repository page | `services/data-reconciliation/index.html`, line 15 | Marksyte service owner | In review | The word “typical” must remain if the point is used |
| F-07 | The page says controls can use structured spreadsheets, reporting models, database queries, or existing workflow tools | First-party evidence | Current repository page | `services/data-reconciliation/index.html`, line 16 | Marksyte technical or service reviewer | In review | This describes possible implementation methods. It does not prove a specific client stack or integration |
| F-08 | The English page has a self-canonical, `index, follow, max-image-preview:large`, reciprocal English and Spanish hreflang, and a `Service` JSON-LD block | First-party evidence | Current repository page | `services/data-reconciliation/index.html`, lines 5 and 7 | SEO reviewer | Passed for planning | Observation only. No technical change is authorized by this ledger |
| F-09 | The Spanish equivalent exists at `/es/servicios/conciliacion-datos/` and contains localized service language | First-party evidence | Current Spanish page | `es/servicios/conciliacion-datos/index.html`, lines 5 and 12 to 19 | Fluent Spanish reviewer | In review | Terminology still needs a human localization check |
| F-10 | The English and Spanish service URLs are present in the sitemap with reciprocal language links | First-party evidence | Repository sitemap | `sitemap.xml`, lines 627 to 637 | SEO reviewer | Passed for planning | Record only. Do not alter the sitemap in Phase 3B |
| F-11 | The related English case study is a synthetic composite and does not imply a client, logo, or commercial result | First-party evidence | Current repository case study | `study-cases/data-reconciliation-fmcg/index.html`, lines 20 to 23 | Marksyte service owner | Passed | This limitation must remain visible if the case is linked or referenced |
| F-12 | The synthetic case describes a source register, mapping table, control totals, exception queue, decision view, and operating notes | First-party evidence | Current repository case study | `study-cases/data-reconciliation-fmcg/index.html`, line 22 | Marksyte subject-matter reviewer | In review | May support a method example only. It is not delivery proof |
| F-13 | The related operating-model article describes intake, mapping, comparison, classification, resolution, and sign-off control stages | First-party evidence | Existing Marksyte article | `blog/fmcg-data-reconciliation-operating-model/index.html`, lines 62 to 64 | Marksyte subject-matter reviewer | In review | Use as related first-party guidance, not as evidence of a client engagement |
| F-14 | The related ERP reconciliation article covers source definitions, alignment, exceptions, and a practical reconciliation process | First-party evidence | Existing Marksyte article | `blog/how-to-reconcile-retailer-sell-out-data-with-erp/index.html`, lines 46 to 106 | Marksyte subject-matter reviewer | In review | Check that any future service-page summary matches the article and does not overstate it |
| G-01 | The supplied GSC package was filtered to Web search from 18 August 2026 to 26 August 2026 | First-party evidence | Phase 1 repository report | `docs/seo/phase-1-indexation-decision.md`, lines 41 to 56 | SEO reviewer | In review | The original export is unavailable in this run, so this is inherited report evidence |
| G-02 | The page export contained 79 rows, 4 clicks, and 578 impressions in the recorded package | First-party evidence | Phase 1 repository report | `docs/seo/phase-1-indexation-decision.md`, lines 49 to 56 | SEO reviewer | In review | Aggregate export total. It is not the pilot-page metric |
| G-03 | The chart, device, and country exports each recorded 536 impressions and 4 clicks, while the visible query export recorded 68 rows, 0 visible clicks, and 266 impressions | First-party evidence | Phase 1 repository report | `docs/seo/phase-1-indexation-decision.md`, lines 52 to 66 | SEO reviewer | In review | Historical aggregate figures from the earlier package. The report says the query export was incomplete and its zero visible clicks cannot be generalized |
| G-04 | A verified GSC query or query cluster can be assigned to the pilot page | Fact | Latest GSC workbook. `Consultas` has no page dimension | `Consultas` contains query, clicks, impressions, CTR, and position only | SEO reviewer | Blocked | Site-level query rows cannot be assigned to `/services/data-reconciliation/` without a query-plus-page export |
| G-05 | The pilot page received 1 click, 231 impressions, a 0.43% CTR, and an average position of 81.07 during the selected period | First-party evidence | Latest GSC workbook | `Páginas`, exact row for `https://www.marksyte.com/services/data-reconciliation/`. Filter `Últimos 3 meses` | SEO reviewer | Passed for planning | Verified page-level baseline. Daily data covers 2026-06-05 to 2026-09-04. Treat the period as directional |
| G-06 | The Spanish equivalent received 0 clicks, 1 impression, a 0% CTR, and an average position of 37 during the selected period | First-party evidence | Latest GSC workbook | `Páginas`, exact row for `https://www.marksyte.com/es/servicios/conciliacion-datos/`. Filter `Últimos 3 meses` | SEO reviewer | Passed for planning | Verified page-level observation. The sample is too small for a performance conclusion |
| G-07 | The latest workbook reports 21 clicks and 2968 impressions in the chart, device, and country views, while the page view reports 24 clicks and 3318 impressions | First-party evidence | Latest GSC workbook | `Gráfico`, `Dispositivos`, `Países`, and `Páginas` totals | SEO reviewer | In review | Cross-dimension totals do not reconcile. Record the discrepancy and do not use one view as the universal total |
| I-01 | The pilot should serve commercial-service intent with a problem-diagnosis entry point | Inference | Existing service page purpose and visible CTA | `services/data-reconciliation/index.html`, lines 12 to 19 | Marksyte service owner and SEO reviewer | In review | Confirm against actual GSC query intent before changing copy |
| I-02 | The likely reader has a recurring mismatch between sources and needs a controlled way to identify, assign, and explain exceptions | Inference | Service problem, fit, and deliverable sections | `services/data-reconciliation/index.html`, lines 12 to 16 | Marksyte service owner | In review | Phrase as a reader problem, not as a measured audience fact |
| I-03 | A reader may need mapping or standardization before reconciliation | Inference | Existing next-step links and related service pages | `services/data-reconciliation/index.html`, line 19 | Marksyte service owner | In review | This is a workflow hypothesis. Confirm service boundaries |
| O-01 | A useful service page should start with one recurring mismatch and explain the inputs, rules, owners, evidence, and next action | Opinion | Phase 3A workflow and current page structure | `docs/seo/ai-content-workflow.md`, sections 2 to 6, plus current service page | Marksyte content reviewer | In review | Editorial recommendation, not a business fact |
| R-01 | Retain the current title `Data reconciliation and controls | Marksyte` for the pilot review while query-to-page evidence remains unresolved | Recommendation | Current title and verified page baseline | `services/data-reconciliation/index.html`, line 5 | SEO reviewer | In review | No metadata edit is made |
| R-02 | Retain the current H1 `Turn conflicting numbers into a controlled exception process` for the pilot review while query-to-page evidence remains unresolved | Recommendation | Current H1 and current service intent | `services/data-reconciliation/index.html`, line 12 | SEO reviewer and service owner | In review | No page edit is made |
| R-03 | Add or strengthen contextual links to the live mapping, standardization, managed-operations, case-study, and relevant blog pages only after content review | Recommendation | Existing live destinations verified in the repository | `services/data-reconciliation/index.html`, line 19, plus linked target files | SEO reviewer and content reviewer | In review | No links are edited in Phase 3B |
| R-04 | Use the synthetic case study as a method example and label its limits | Recommendation | Case study’s visible synthetic-composite disclaimer | `study-cases/data-reconciliation-fmcg/index.html`, line 20 | Marksyte service owner | In review | Never imply a client engagement or result |
| B-01 | The service reduces month-end close time, increases revenue, or produces a quantified ROI | Fact or outcome claim | No approved first-party evidence found | No source in the reviewed repository materials | Marksyte service owner | Blocked | Requires a named, approved source and exact wording. Otherwise remove |
| B-02 | The service eliminates data errors, guarantees audit readiness, or makes every difference explainable | Fact or outcome claim | No approved evidence. Current page describes controls, not guarantees | Current page lines 12 to 16 do not support a guarantee | Marksyte service owner | Blocked | Do not publish |
| B-03 | Marksyte has completed a client reconciliation project with a named result or measurable improvement | Fact or client claim | No approved client evidence found | Synthetic case explicitly disclaims client attribution | Marksyte service owner | Blocked | Requires explicit publication approval and source |
| B-04 | Marksyte supports every ERP, retailer, distributor, country, volume, or data format | Fact or capability claim | No evidence of universal coverage | Current page names possible methods, not universal compatibility | Marksyte service owner | Blocked | Replace with the narrower documented scope if approved |
| B-05 | The service is AI-powered, fully automated, or able to decide the correct business definition without human ownership | Fact or capability claim | Current page describes controls and existing tools. Case study says the control owner remains accountable | `study-cases/data-reconciliation-fmcg/index.html`, line 23 | Marksyte service owner | Blocked | Do not publish. This also conflicts with the Phase 3A workflow guardrails |
| B-06 | `areaServed: Worldwide` is a visible, approved service claim | Fact or structured-data claim | Existing Service JSON-LD and user confirmation in task | `services/data-reconciliation/index.html`, line 7. User confirmed Worldwide scope on 2026-09-06 | SEO reviewer and service owner | Blocked | Business scope is approved, but the field is not visibly stated on the page. Resolve by adding visible support or removing the field in a separately authorized technical change |
| B-07 | A GSC query or query cluster proves demand for the pilot page | Fact | Latest GSC workbook. `Consultas` and `Páginas` sheets | `Consultas` has no page dimension. The pilot page row is present in `Páginas` | SEO reviewer | Blocked | The workbook proves page-level visibility but cannot assign any query row to the pilot page. Obtain a query-plus-page export before selecting a measured primary query |

## Claim handling rules for a future draft

- Use only `Passed` or human-approved `In review` first-party facts in visible copy
- Mark inferences as interpretations when they remain useful to the reader
- Keep opinions and recommendations out of factual proof sections
- Remove blocked claims unless the named reviewer adds an approved source
- Keep the synthetic-case disclaimer next to any case-study reference
- Do not add external sources merely to make a page look researched
- Do not put a claim in structured data unless the same claim is visible and approved on the page

## Human decisions required

1. Decide whether a query-plus-page export is required for the next copy decision or whether the site-level query direction is sufficient for the fallback editorial path
2. Name a Marksyte service reviewer, SEO reviewer, and fluent Spanish reviewer
3. Confirm the intended buyer role and whether the page should speak specifically to FMCG data operations or a wider audience
4. Confirm which public delivery descriptions are current and whether any approved client evidence exists
5. Decide whether the visible page should state Worldwide before retaining `areaServed: Worldwide` in structured data

The user confirmed that the draft represents Marksyte's real service, Spanish terminology is acceptable, and Worldwide is acceptable as a business scope. These confirmations do not create visible-page evidence or replace named review ownership.

## Publication gate

- Fact-check status: blocked
- Publication status: blocked
- Publication approver: Not assigned
- Drafting authorized: Review-only fallback draft exists. Page editing is not authorized
- Page edit authorized: No
