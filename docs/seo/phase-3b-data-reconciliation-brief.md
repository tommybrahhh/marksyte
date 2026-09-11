# Phase 3B Data Reconciliation Content Brief

Status: partially unblocked. Page-level GSC metrics are verified. Query-to-page association and final technical approval remain open

This is a planning brief for the existing service page. It does not authorize a page edit, a metadata change, a new URL, or publication.

## Target URL

- URL: `/services/data-reconciliation/`
- Existing page or separately approved new page: Existing indexable service page
- Primary language: English
- Equivalent language URL, if planned: `/es/servicios/conciliacion-datos/`

## Primary business problem

- Problem the reader is trying to solve: Two or more sources report different records, transactions, or totals, and the team cannot explain which difference is caused by identifiers, timing, scope, status, currency, duplication, or an earlier transformation
- Business consequence of leaving it unresolved: Reporting, finance, partner reviews, and recurring controls remain hard to explain, while exceptions can stay in scattered email or be resolved without retained evidence
- Marksyte service or capability that is relevant: Data reconciliation and controls, including record matching, total reconciliation, tolerance rules, exception management, and control documentation

The problem statement is grounded in the current English service page. The business consequences are a working interpretation of the page's visible problem and exception language. A Marksyte reviewer must confirm that this describes a real priority for the intended buyer before any copy is drafted.

## Search intent

- Primary intent: Commercial service
- Secondary intent, if any: Problem diagnosis and evidence seeking
- Reader decision or action after the page: Decide whether a recurring reconciliation problem is specific enough to discuss with Marksyte and what inputs, rules, owners, and evidence would be needed to review it
- Why the existing page serves this intent or needs improvement: The page already describes the problem, matching and comparison steps, typical outputs, system boundaries, and a contact action. The brief should test whether the page makes the operational decision clear enough for a search visitor. No content change is approved in this phase

Working intent hypothesis: the reader is not looking for a generic definition of reconciliation. They are evaluating help with a recurring mismatch between sources and need to understand the shape of the work before contacting a provider. This remains an inference until a complete GSC query export and human review are available.

## Target audience

- Role: Operations, finance, commercial, data, supply-chain, or reporting owner responsible for a recurring comparison or control
- Industry or operating context: FMCG and other multi-source operating environments with retailer, distributor, supplier, ERP, or internal reporting data
- Knowledge level: Practiced business user who understands the source data but may not have a documented reconciliation model
- Country or market: Not established from the available evidence
- Language: English for the pilot. Spanish is a planned equivalent, not a publication commitment

Role, industry, and knowledge level are working audience hypotheses based on the existing service, case-study, and related blog content. The country or market remains deliberately open because the workbook provides a country breakdown but no country filter or page-level country association for the pilot.

## Primary query

- Query: No page-specific primary GSC query can be verified because `Consultas.csv` has no page dimension
- Source and date range: `C:\Users\roman\Downloads\marksyte.com-Performance-on-Search-2026-09-06.xlsx`, `Páginas`, Web search, `Últimos 3 meses`, with daily data from 2026-06-05 to 2026-09-04
- Impressions: 231 for `/services/data-reconciliation/`
- Clicks: 1 for `/services/data-reconciliation/`
- CTR: 0.43% for `/services/data-reconciliation/`
- Average position: 81.07 for `/services/data-reconciliation/`
- Filters and limitations: `Filtros` records Web search and `Últimos 3 meses` only. It does not explicitly record the Search Console property, country filter, or device filter. The page row is verified. The query export contains 222 visible site-level rows, 0 visible clicks, and 1230 impressions, but no page association. The search-appearance sheet has no data rows. The page sheet has 24 clicks and 3318 impressions, while the chart, device, and country sheets have 21 clicks and 2968 impressions. These totals do not reconcile across dimensions. Treat the period as a current directional baseline

Site-level query direction for later review includes `data reconciliation` with 93 impressions and position 88.66, `reconcile data` with 25 impressions and position 70.28, and `database reconciliation` with 17 impressions and position 82.41. These are not measured queries for this page and must not be used as page-level evidence.

## Related queries

- Query: `data reconciliation` | 0 clicks | 93 impressions | 0% CTR | position 88.66 | Site-level only
- Query: `reconcile data` | 0 clicks | 25 impressions | 0% CTR | position 70.28 | Site-level only
- Query: `database reconciliation` | 0 clicks | 17 impressions | 0% CTR | position 82.41 | Site-level only
- Query: `exception handling in reconciliation` | 0 clicks | 15 impressions | 0% CTR | position 50.2 | Site-level only

These rows are directional site-level evidence. The export does not map them to `/services/data-reconciliation/`. Do not present them as pilot-page queries or use them to claim page-specific demand.

## Required first-party Marksyte evidence

- Existing public page or repository source:
  - `services/data-reconciliation/index.html`, lines 5 to 19
  - `es/servicios/conciliacion-datos/index.html`, lines 5 to 19
  - `study-cases/data-reconciliation-fmcg/index.html`, lines 5 to 24
  - `es/casos-de-estudio/conciliacion-datos-fmcg/index.html`, lines 5 to 24
  - `blog/fmcg-data-reconciliation-operating-model/index.html`, especially the control stages and related-resource sections
  - `blog/how-to-reconcile-retailer-sell-out-data-with-erp/index.html`, especially the source, process, exception, and related-resource sections
  - `blog/data-validation-retailer-distributor-files/index.html`, especially the validation checks and failure handling sections
- Approved delivery method, template, or process evidence: The service page visibly describes matching logic, a reconciliation view, an exception queue, and control documentation. The case study describes a source register, mapping table, control totals, exception queue, decision view, and operating notes. These are public first-party descriptions, not proof of a client delivery or outcome
- Approved client or project evidence, if any: None identified for this brief. The related reconciliation case is explicitly a synthetic composite and must not be presented as a client result
- Exact facts the page may use: The current page describes record matching, reconciliation of transactions and totals, tolerance rules, duplicate handling, unmatched rows, comparison of periods and balances, classified exceptions, owners, evidence, audit trails, and control documentation. It states that controls can use structured spreadsheets, reporting models, database queries, or existing workflow tools
- Evidence owner: Marksyte service owner or designated subject-matter reviewer. No person is assigned in the repository
- Evidence review status: In review. Public page evidence is traceable. The user confirmed that the draft represents Marksyte's current service. Named reviewer ownership, claims about delivery, and any outcome claim are not recorded

## External sources

No external source is required for this planning brief. The brief does not add definitions, statistics, standards, client outcomes, or market claims that need outside evidence.

If a future draft explains identifiers such as GTIN or GLN, or makes a claim about accounting, retail, or data-control standards, add the original publisher and the exact supported claim to this section and to the claim ledger before drafting.

## Claims requiring verification

The full ledger is in [`phase-3b-data-reconciliation-claim-ledger.md`](phase-3b-data-reconciliation-claim-ledger.md). The main publication blockers are:

| Claim | Type | Source or Marksyte evidence | Reviewer | Status | Notes |
| --- | --- | --- | --- | --- | --- |
| The page should target a commercial service intent rather than a generic definition intent | Inference | Existing service page and page purpose | Marksyte service owner | In review | Confirm whether the site-level query direction is sufficient or obtain a query-plus-page export |
| Marksyte can support the listed matching, comparison, exception, and documentation work | Fact | `services/data-reconciliation/index.html`, lines 12 to 19 | Marksyte service owner | In review | Public capability description. Confirm current scope before reuse |
| The service reduces close time, eliminates errors, guarantees audit readiness, or produces a quantified return | Fact or outcome claim | No approved first-party evidence found | Marksyte service owner | Blocked | Do not publish without a specific approved source and wording |
| The existing `areaServed: Worldwide` structured-data field is an approved visible claim | Fact | Service JSON-LD at line 7 and user confirmation of Worldwide business scope | Marksyte reviewer | Blocked | Business scope is approved, but the field is not visibly stated on the page. This brief makes no schema change |

## Proposed title and H1

- Proposed page title: Keep the current subject-led title for the pilot review: `Data reconciliation and controls | Marksyte`
- Proposed H1: Keep the current problem-led H1 for the pilot review: `Turn conflicting numbers into a controlled exception process`
- Search intent served: Commercial service with a problem-diagnosis entry point
- Difference between title and H1, if any: The title names the service. The H1 describes the reader's operational problem. This distinction is already present and should be retained unless recovered GSC evidence shows a clear mismatch
- Human review notes: The user confirmed that the draft accurately represents Marksyte's current service. Do not change the title or H1 in Phase 3B. A later wording decision still needs a named Marksyte reviewer and page-specific query evidence if the decision is to be GSC-led

## Proposed page structure

- Main answer: State what data reconciliation and controls do for a team that cannot explain a mismatch between records, transactions, or totals
- Section: Show the difference between matching records, reconciling totals, and explaining exceptions
- Section: Describe the inputs and rules that must be defined, including keys, periods, tolerances, duplicate logic, and unmatched rows
- Section: Describe the visible outputs, including a reconciliation view, exception queue, control documentation, owners, and evidence
- Evidence or example section: Use the existing synthetic FMCG case only as an explicitly labelled method example. Do not claim a client, logo, or commercial result
- Practical next step: Invite the reader to bring one recurring mismatch and its source files or control question for review
- Sections removed because they add no original value: Generic keyword definitions, unsupported benchmarks, unverified automation claims, generic AI sections, and a second page targeting only a word-order variation

This is an outline for review. It is not draft page copy.

## Internal links

These are proposed review destinations only. No page links are being edited.

| Destination URL | Link purpose | Anchor text | Existing or proposed | Checked |
| --- | --- | --- | --- | --- |
| `/services/data-standardization/` | Move from reconciliation to source profiling, definitions, and data-quality rules | Data audit and standardization | Existing destination, proposed contextual link | Yes, local file exists |
| `/services/data-mapping-integration/` | Explain mapping and source-to-target structure work that may precede reconciliation | Data mapping and integration | Existing destination, proposed contextual link | Yes, local file exists |
| `/services/managed-data-analysis/` | Offer a related recurring operating model when the team needs ongoing analysis | Managed data operations and analysis | Existing destination, proposed contextual link | Yes, local file exists |
| `/study-cases/data-reconciliation-fmcg/` | Provide a clearly labelled synthetic method example | Illustrative FMCG data reconciliation case | Existing destination, proposed contextual link | Yes, local file exists and is indexable |
| `/blog/how-to-reconcile-retailer-sell-out-data-with-erp/` | Support a deeper practical explanation of source alignment and exceptions | Reconcile retailer sell-out data with ERP data | Existing destination, proposed contextual link | Yes, local file exists and has an English equivalent |
| `/blog/fmcg-data-reconciliation-operating-model/` | Support roles, control stages, exception lifecycle, and sign-off concepts | FMCG data reconciliation operating model | Existing destination, proposed contextual link | Yes, local file exists and has a Spanish equivalent |

No retired Travel Retail route is proposed.

## English and Spanish equivalent

- English URL: `/services/data-reconciliation/`
- English status: Existing, indexable, initial HTML reviewed, content update not approved
- Spanish URL: `/es/servicios/conciliacion-datos/`
- Spanish status: Existing, indexable, initial HTML reviewed, localization review still required
- Localization reviewer: Not assigned
- Terms requiring local adaptation: `data reconciliation`, `controls`, `matching logic`, `tolerances`, `exception queue`, `audit trail`, `source register`, `sell-out`, `ERP`, and the distinction between records, transactions, totals, and balances
- Differences in examples, units, dates, or audience: Keep the factual problem and service scope equivalent. Review whether Spanish readers use `conciliación`, `relación de registros`, `correspondencias`, or another term for each context. Do not add a market, client, unit, date, or outcome example without evidence
- Hreflang relationship checked: Yes. The English page links to the Spanish page and the Spanish page links back. Both declare `en`, `es`, and `x-default` in the head. No hreflang change is proposed

The Spanish page is not a mechanical copy. It already contains localized headings and service language. A fluent reviewer must approve terminology before any future update to either page.

## Human reviewer

- Name: User approval provided in task. Name not recorded
- Role or expertise: Marksyte service owner with experience in data reconciliation, commercial data operations, and the intended buyer problem
- Review scope: Confirm the reader problem, service scope, audience, GSC interpretation, public evidence, Spanish terminology, metadata direction, structured-data concern, and publication decision
- Review comments: User confirmed that the draft represents the real Marksyte service, Spanish terminology is acceptable, and Worldwide service scope is acceptable. A named reviewer and final publication approval are still required. The reviewer must resolve the blocked claims and confirm whether any public delivery evidence exists
- Review date: 2026-09-06, user confirmation in task. Named reviewer not recorded

## Fact-check status

- Status: blocked
- Unverified claims remaining: Page-specific query intent, audience geography, business consequence wording, approved delivery examples, outcome claims, and the visible support for `areaServed: Worldwide`
- Source gaps: `Consultas.csv` has no page dimension. No approved client evidence or named subject-matter reviewer is recorded
- Final fact-checker: Not assigned
- Date checked: 2026-09-06, repository review only

## Metadata and structured-data review

- Meta description: Current description is `Match records, reconcile totals, define tolerances and turn data exceptions into visible, traceable root-cause work.` It accurately reflects the visible service scope. No edit proposed
- Canonical checked: Yes. Self-canonical is `https://www.marksyte.com/services/data-reconciliation/`
- Robots decision unchanged: Yes. Current directive is `index, follow, max-image-preview:large`
- Sitemap decision unchanged: Yes. The pilot URL and its Spanish equivalent are present in `sitemap.xml`
- Redirect decision unchanged: Yes. No redirect is proposed or changed
- Structured-data type, if any: Existing `Service` JSON-LD
- Structured data matches visible page: Partial pending technical review. The user approved Worldwide as the business scope, but `areaServed: Worldwide` is not visibly stated on the page. It remains a technical publication blocker under the workflow rules. No structured-data change is made
- Initial HTML contains the important answer: Yes. The title, H1, lead, problem, matching and comparison logic, deliverables, system boundaries, CTA, and internal links are present in the raw HTML
- One H1 and heading structure checked: Yes. The English pilot has one H1 and a visible section hierarchy. The Spanish equivalent also has one H1 and corresponding sections

## Publication status

- Status: blocked
- Publication approver: Not assigned
- Approval date: Not applicable
- Existing URL updated or new URL separately approved: Existing URL only. No update approved in this phase
- No automatic publication used: Yes

## Date reviewed

- Brief created: 2026-09-06
- Last reviewed: 2026-09-06
- Next review: After page-specific query evidence and named reviewer ownership are resolved, or the fallback editorial path is explicitly accepted

## Final decision

- Proceed to Phase 3B: No. The page baseline is recovered, but query-to-page evidence remains unresolved
- Hold: Yes
- Reason: The page metrics are verified, but the query export is site-level only. A named reviewer is not recorded, and the structured-data field is not visibly supported. The existing draft may remain in fallback editorial review, but page implementation and publication require the remaining gates
