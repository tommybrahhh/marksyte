# Marksyte Data Integration Pivot Plan

Last updated: 2026-08-03  
Status: Pivot implemented locally; remediation and external preview review pending  
Purpose: Persistent project context and execution plan for work distributed across multiple Codex chats

## Read this first

This document is the source of truth for the Marksyte positioning pivot. Every Codex chat working on the pivot should read this file before changing the website.

The existing project must remain recoverable. Do not delete legacy sales, marketing, Travel Retail, Duty Free, buyer-negotiation, pricing, portfolio, activation, case-study, blog, or supporting asset content without first preserving it according to the archive procedure in this document.

When a phase is completed:

1. Update its status in this document.
2. Record the files changed.
3. Record decisions or deviations in the decision log.
4. Note validation performed and any remaining risks.
5. Leave unrelated user changes untouched.

## 1. Pivot objective

Reposition Marksyte from:

> Commercial strategy for Travel Retail and Duty Free sales teams.

To:

> Data standardization, mapping, integration, reconciliation, management and analysis for operators, suppliers, retailers, distributors and other organizations working with fragmented data.

The intended value is not merely database construction or dashboard production. Marksyte should occupy this territory:

> We make disconnected data usable across company and system boundaries.

Recommended working proposition:

> Marksyte standardizes, maps, integrates and reconciles fragmented data so organizations can operate and analyze from a dependable version of reality.

Supporting promise:

> From disconnected files and databases to controlled, documented and reusable data flows.

### Terminology

- Prefer **data reconciliation** in English.
- Use **data conciliation** only as a secondary synonym if strategically useful.
- Use **conciliacion de datos** in Spanish.
- Prefer **standardization**, **mapping**, **integration**, **reconciliation**, **data operations**, **data quality**, **master data**, **exception management**, and **analysis**.
- Avoid presenting Marksyte as a large enterprise engineering integrator unless delivery capabilities support that claim.

## 2. Strategic guardrails

These constraints are non-negotiable unless the owner explicitly changes them:

1. Preserve the historical proposition and assets before editing or moving them.
2. Do not rebuild the entire site or introduce a new framework merely for this pivot.
3. Keep the current static HTML, CSS and JavaScript foundation during the initial migration.
4. Do not delete or archive the entire blog wholesale.
5. Preserve useful blog URLs and search intent wherever possible.
6. Reframe blog content as neutral expertise, not repeated sales copy.
7. Let the homepage and services convert; let the blog earn visibility and demonstrate understanding.
8. Do not force a data angle into an article where it is not credible.
9. Do not make quantitative claims that cannot be substantiated.
10. Maintain English and Spanish quality and reciprocal SEO metadata.
11. Do not redirect unrelated legacy URLs to the homepage.
12. Keep the archive excluded from deployment but available in Git.

## 3. Current project baseline

The project is a bilingual static website with no framework, CMS, backend, build step or database.

Audited public HTML inventory:

| Area | Pages | Approximate HTML size | Pivot impact |
|---|---:|---:|---|
| Blog | 74 | 1.61 MB | Very high |
| Case studies | 18 | 619 KB | High |
| Services | 8 | 89 KB | Complete reframing |
| Homepage and about | 4 | 60 KB | Complete reframing |
| Legal | 6 | 26 KB | Minor edits |
| Total | 110 | 2.4 MB | High content impact |

Other baseline details:

- `sitemap.xml` contains 110 URL entries.
- `styles.css` contains approximately 3,944 lines and is largely reusable.
- `app.js` contains approximately 419 lines and extensive old bilingual commercial copy.
- The shared asset library contains approximately 43 files / 7.3 MB.
- Existing assets include company logos, blog illustrations, an Excel portfolio model and a buyer sell-in deck.
- Analytics, cookie consent, email-draft contact behavior and Calendly integration can remain with copy and event adjustments.

### Current impact assessment

| Dimension | Impact |
|---|---:|
| Brand positioning | 10/10 |
| Homepage content | 10/10 |
| Services | 10/10 |
| Blog/content library | 9/10 |
| SEO and URLs | 9/10 |
| Case studies | 8/10 |
| Visual system | 4/10 |
| JavaScript | 4/10 |
| Analytics/contact flow | 3/10 |
| Legal/privacy | 2/10 |
| Hosting/deployment | 1/10 |

## 4. Audience and problem definition

### Target organizations

- Operators
- Suppliers
- Retailers
- Distributors
- Multi-site businesses
- Organizations exchanging recurring information with external partners
- Teams operating across incompatible business systems or databases

### Target stakeholders

- Operations leaders
- Data and analytics teams
- Finance teams
- Supply chain and planning teams
- Commercial operations teams
- IT and transformation teams
- Business owners responsible for recurring reporting or partner data exchange

### Target problems

- Different files or systems report different totals.
- Product, supplier, customer or location identifiers do not match.
- Teams manually combine spreadsheets each week or month.
- External partners provide incompatible schemas and naming conventions.
- Definitions differ by market, business unit or system.
- Reports cannot be traced reliably to their sources.
- Duplicate records and missing identifiers break reporting.
- Exceptions are discovered too late or resolved through email.
- Transformations live in undocumented spreadsheets or individual knowledge.
- Data exists but is not ready for reporting, automation or AI.
- Organizations cannot establish a dependable version of reality across parties.

## 5. Site roles and tone

| Site area | Primary role | Tone |
|---|---|---|
| Homepage | Explain the proposition and qualify demand | Clear, concise, outcome-led |
| Service pages | Explain what clients can buy | Direct, practical, specific |
| Case studies | Demonstrate methods and problem-solving | Evidence-led, transparent |
| Blog | Earn search visibility and demonstrate expertise | Neutral, analytical, useful |
| About | Establish credibility and delivery model | Precise, grounded, human |

The reader should infer expertise from the quality of the analysis. Blog articles should not repeatedly tell readers that Marksyte can help.

## 6. Preservation and archive policy

### Archive location

Create a versioned, hidden folder:

```text
.archive/
  commercial-positioning-2026-08-03/
    manifest.md
    root-pages/
    services/
    case-studies/
    retired-content/
    sales-assets/
    root-snapshots/
```

### Archive requirements

- Add `.archive/` to `.vercelignore` so archived material is never deployed.
- Keep `.archive/` under Git unless the owner explicitly requests otherwise.
- Preserve the original relative path of every archived item in `manifest.md`.
- Record whether an item was copied, moved, rewritten, redirected or retired.
- Record its intended replacement, if any.
- Snapshot root files before editing: `index.html`, `es/index.html`, `about/index.html`, `es/about/index.html`, `app.js`, `styles.css`, `sitemap.xml`, `vercel.json`, and `README.md`.
- Preserve old service pages and sales-specific deliverables before replacing them.
- Do not archive shared CSS, analytics, legal structure or generic brand assets unless taking a snapshot.
- Check all active references before moving an asset.

### Archive manifest fields

| Field | Meaning |
|---|---|
| Original path | Location before the pivot |
| Language | EN or ES |
| Content type | Home, service, case, blog, asset, metadata |
| Legacy proposition | Short description of old purpose |
| Action | Snapshot, move, rewrite, retain, retire |
| New path | Replacement path if applicable |
| SEO treatment | Preserve, 301, 410, pending |
| Notes | Dependencies and restoration information |

## 7. Homepage plan

Reuse the existing visual structure while replacing commercial positioning.

### Proposed structure

1. **Hero**
   - Working message: "Make fragmented operational data work as one system."
   - Explain that Marksyte connects data across operators, suppliers, retailers and systems.
2. **Audience line**
   - Clarify the types of organizations and data environments served.
3. **Problem section**
   - Incompatible files, inconsistent definitions, mismatched identifiers, conflicting totals and manual consolidation.
4. **Data-flow visual**
   - `Receive -> Standardize -> Map -> Integrate -> Reconcile -> Analyze`
5. **Services**
   - Four new service cards defined below.
6. **Method**
   - `Discover -> Define -> Build -> Validate -> Operate`
7. **Credibility**
   - Sector experience, analytical depth, practical delivery and transparent methods.
8. **Contact**
   - Ask about data sources, systems, frequency, mismatches, current manual process and required output.

### Proof policy

Current EUR opportunity claims are tied to the old sales proposition. Replace them only with defensible proof.

Until quantitative operational proof is available, use qualitative evidence such as:

- Experience across suppliers, brands, retailers and operators
- Work across complex multi-market information
- Hands-on analysis and workflow design
- Documented, transparent and tool-independent methods

Company logos may remain only if their presentation does not imply unsupported data-integration engagements.

### Primary files

- `index.html`
- `es/index.html`
- `app.js`
- `styles.css`

## 8. Service architecture

### Service 1: Data audit and standardization

Possible URL paths:

- `/services/data-standardization/`
- `/es/servicios/estandarizacion-datos/`

Scope:

- Source and field inventory
- Data profiling
- Canonical definitions
- Taxonomy normalization
- Identifier cleanup
- Duplicate and completeness checks
- Data-quality rules
- Ownership and documentation

### Service 2: Data mapping and integration

Possible URL paths:

- `/services/data-mapping-integration/`
- `/es/servicios/mapeo-integracion-datos/`

Scope:

- Source-to-target mapping
- Schema alignment
- File, API and database integration
- Transformation logic
- Reference-data alignment
- Refresh workflows
- Integration documentation

### Service 3: Data reconciliation and controls

Possible URL paths:

- `/services/data-reconciliation/`
- `/es/servicios/conciliacion-datos/`

Scope:

- Record matching
- Transaction and total reconciliation
- Tolerance rules
- Duplicate detection
- Exception queues
- Root-cause analysis
- Control reporting
- Audit trails

### Service 4: Managed data operations and analysis

Possible URL paths:

- `/services/managed-data-analysis/`
- `/es/servicios/gestion-analisis-datos/`

Scope:

- Recurring consolidation
- Data-quality monitoring
- Exception management
- Reporting datasets
- Database and model maintenance
- Analytical models
- Workflow automation
- Continuous improvement

### Required service-page structure

Every service page should include:

1. The problem
2. Best-fit situations
3. Typical inputs
4. Process and working method
5. Deliverables
6. Controls, ownership and documentation
7. Tools and system boundaries
8. Related case study or neutral article
9. Clear service CTA

The current eight service pages are tied to portfolio, pricing, activation and negotiation. Preserve them in the archive, then adapt their layouts for the new services.

## 9. About-page plan

Move credibility away from buyer decisions and sales strategy toward:

- Understanding the business meaning behind data
- Working across internal and external stakeholders
- Translating inconsistent information into explicit rules
- Combining analytical thinking with practical implementation
- Producing transparent, documented and maintainable outputs
- Remaining independent from a particular software vendor
- Connecting business users, data structures and operating processes

Describe the delivery model accurately. Do not imply enterprise-scale software engineering if the actual offer is senior consulting, analysis, integration design and hands-on implementation support.

Primary files:

- `about/index.html`
- `es/about/index.html`

## 10. Blog strategy

### Purpose

The blog exists primarily to:

- Earn relevant Google visibility
- Provide genuinely useful analysis
- Demonstrate subject-matter and data reasoning
- Build topical authority
- Create natural paths to related services

It should not read like a collection of service landing pages.

### Neutral editorial standard

Articles should be:

- Objective and informed
- Analytical rather than promotional
- Useful to operators, suppliers, retailers, data teams and decision-makers
- Grounded in sources and operational reality
- Neutral about particular software vendors
- Clear about assumptions and data limitations
- Specific about definitions and measurement when relevant

### Standard article structure

1. Search-led question or market development
2. What is happening
3. Why it is happening
4. Operational implications
5. Data requirements or measurement considerations
6. Risks, limitations and unresolved questions
7. Sources and methodology
8. Small related-capability reference

### Service mentions

Remove repetitive sections titled "How Marksyte can help" or their Spanish equivalents.

Prefer a restrained closing component:

> **Related capability**  
> Marksyte supports multi-source data standardization and reconciliation for recurring operational reporting.  
> Explore data reconciliation.

Use one relevant service reference near the end. Do not add hard contact CTAs to every article.

### Article treatment classifications

| Action | Meaning |
|---|---|
| Keep | Already sufficiently neutral and compatible |
| Light reframe | Remove promotional language and adjust implications/conclusion |
| Deep reframe | Preserve topic and URL but rebuild the analytical angle |
| Archive | Fundamentally incompatible or no longer valuable |

### Reframing rules

- Preserve the principal search topic.
- Preserve established URLs whenever possible.
- Preserve factual content, citations and publication information.
- Replace sales-leader and buyer-negotiation framing.
- Replace "commercial opportunities" with neutral headings such as "operational implications," "data implications," or "questions for organizations" where appropriate.
- Add data-source, definition, interoperability, governance or measurement analysis only where credible.
- Do not distort the original subject merely to mention integration.
- Update metadata only when it is inaccurate, excessively promotional or mismatched with search intent.
- Maintain reciprocal English/Spanish relationships.

### Proposed blog categories

- Data quality and reconciliation
- Integration and interoperability
- Forecasting and planning
- Markets and operations
- Supplier and retailer data
- AI and automation
- Sustainability data
- Travel and mobility data

Travel Retail and FMCG may remain as sectors of experience; they should no longer define the entire company.

### Initial priority content

Start with articles and cases closest to the new proposition:

- AI integration in FMCG
- AI trade and workflow execution
- Product carbon footprint as product data
- AI inventory planning
- Scheduled airline capacity versus realized demand
- Passenger growth versus sales results
- Fuel and demand forecasting
- EES operations and passenger-flow information
- Agentic AI and structured product data

Expected treatment:

- `ai-integration-fmcg`: retain with light-to-medium reframing.
- `ai-flows-fmcg`: deep reframe away from sales execution and toward controlled data hand-offs.
- Product carbon footprint article: retain and strengthen interoperability/data-governance angle.
- AI inventory article: retain and strengthen source integration, model inputs and exception management.
- Scheduled seats article: retain and strengthen reconciliation of schedule, operated-flight and passenger data.
- Zurich article: deep reframe around denominator control and joining operational and sales datasets.
- Fuel forecasting article: reframe around scenario refresh, lagged indicators and multi-source planning.
- EES case: reframe around operating signals, time-series integration and cross-stakeholder information.

### Blog content matrix

Create and maintain a content matrix with these fields:

| Field | Description |
|---|---|
| EN URL | Existing English path |
| ES URL | Existing Spanish path |
| Primary query/topic | Search intent to preserve |
| Current audience | Who the article addresses now |
| Commercial intensity | Low, medium, high |
| Data relevance | Low, medium, high |
| Search value | Known or estimated |
| Treatment | Keep, light reframe, deep reframe, archive |
| Related service | Closest genuine capability |
| Metadata change | Yes/no and rationale |
| Internal-link changes | Required additions/removals |
| Status | Not started, drafting, review, complete |

Do not decide article treatment from filenames alone. Read each article.

## 11. Case-study strategy

Case studies should demonstrate methods more explicitly than the blog.

Recommended structure:

1. Situation
2. Data sources
3. Inconsistency or structural problem
4. Mapping and transformation logic
5. Reconciliation controls
6. Analytical output
7. Operational outcome
8. Limitations and next step

Classify existing cases as:

- Data/integration case
- Operational analysis case
- Legacy commercial case

Create at least one flagship example around:

> Reconciling product, sales, inventory and location data across supplier and retailer files.

Synthetic data is acceptable if clearly labeled. Existing portfolio-model concepts may be adapted into a data-quality or mapping demonstration after the original asset is archived.

## 12. SEO migration policy

SEO risk is one of the highest risks in the pivot.

Rules:

- Review current traffic, impressions and backlinks before retiring established URLs when data is available.
- Preserve useful blog URLs and their primary search intent.
- Add new service URLs deliberately.
- Use a 301 only when the replacement is genuinely equivalent.
- Do not redirect unrelated pages to the homepage.
- Keep high-value legacy articles accessible during transition if appropriate, even if removed from primary navigation.
- Use 410 only for deliberately retired material with no replacement.
- Remove archived or retired pages from `sitemap.xml`.
- Update titles, descriptions, canonical URLs, Open Graph data, Twitter metadata and JSON-LD.
- Maintain reciprocal `hreflang` across valid EN/ES pairs.
- Update internal links in retained articles.
- Validate redirects and canonical destinations before production release.

Service redirect decisions require individual judgment. Similar use of data does not make two services equivalent.

Primary files:

- `sitemap.xml`
- `vercel.json`
- `robots.txt`
- All active HTML metadata

## 13. Analytics and conversion

Keep the current consent and analytics foundation.

Track or verify:

- Service-page visits
- Related-capability clicks from articles
- Contact-form starts
- Contact-form submissions/email-draft openings
- Calendly clicks
- Case-study engagement
- Language selection

Update contact prompts to ask for:

- Organization and role
- Source systems or files
- Data frequency
- Current manual process
- Main mismatch, quality problem or bottleneck
- Required output or business decision

## 14. Implementation phases and tracker

Only mark a phase complete after its deliverables and validation are finished.

### Phase 1: Freeze and archive

Status: Complete  
Estimated effort: 0.5-1 day

Tasks:

- Create `.archive/commercial-positioning-2026-08-03/`.
- Snapshot root and shared files.
- Preserve old services and sales assets.
- Create the archive manifest.
- Add `.archive/` to `.vercelignore`.
- Verify the archive is excluded from deployment.
- Verify all active references before moving anything.

Completion record:

- Files changed: `.archive/commercial-positioning-2026-08-03/manifest.md`, `.archive/commercial-positioning-2026-08-03/root-snapshots/`, `.archive/commercial-positioning-2026-08-03/services/`, `.archive/commercial-positioning-2026-08-03/sales-assets/`, `.vercelignore`, `DATA_INTEGRATION_PIVOT_PLAN.md`.
- Validation: Confirmed 31 archived files exist; compared archive copies against active originals; verified the four English and four Spanish legacy service pages and all portfolio/buyer deliverables remain available at their active paths; verified `.archive/` is excluded by `.vercelignore`; checked active references before any move (no files were moved or deleted).
- Open issues: Individual service replacement routes, redirects, sitemap treatment and whether legacy pages remain publicly accessible are deferred to later phases. No files were archived from `case-studies/` or `blog/` because neither area was edited in Phase 1.

### Phase 2: Finalize positioning and information architecture

Status: Complete  
Estimated effort: 0.5-1 day

Tasks:

- Approve the main proposition.
- Confirm target audiences and use cases.
- Confirm four service names and scopes.
- Confirm proof claims.
- Confirm English and Spanish terminology.
- Confirm route structure.

Completion record:

- Decisions:
  - Primary English homepage message: “Make fragmented operational data work as one system.”
  - Core English proposition: “Marksyte standardizes, maps, integrates and reconciles fragmented data so organizations can operate and analyze from a dependable version of reality.”
  - Supporting promise: “From disconnected files and databases to controlled, documented and reusable data flows.”
  - Primary Spanish homepage message: “Haz que los datos operativos fragmentados funcionen como un solo sistema.”
  - Core Spanish proposition: “Marksyte estandariza, mapea, integra y concilia datos fragmentados para que las organizaciones puedan operar y analizar a partir de una versión fiable de la realidad.” Visible Spanish copy will use the accented term “conciliación de datos”; the URL slug remains accent-free.
  - Target organizations: operators, suppliers, retailers, distributors, multi-site businesses, organizations exchanging recurring information with external partners, and teams working across incompatible systems or databases.
  - Priority stakeholders: operations, data and analytics, finance, supply chain and planning, commercial operations, IT and transformation teams, and business owners responsible for recurring reporting or partner data exchange.
  - Primary use cases: multi-source recurring reporting, partner data exchange, master-data and identifier alignment, reconciliation and exception controls, and preparing data for reporting, automation or AI.
  - Service 1: “Data audit and standardization” at `/services/data-standardization/` and `/es/servicios/estandarizacion-datos/`.
  - Service 2: “Data mapping and integration” at `/services/data-mapping-integration/` and `/es/servicios/mapeo-integracion-datos/`.
  - Service 3: “Data reconciliation and controls” at `/services/data-reconciliation/` and `/es/servicios/conciliacion-datos/`.
  - Service 4: “Managed data operations and analysis” at `/services/managed-data-analysis/` and `/es/servicios/gestion-analisis-datos/`. This label is preferred over “data management” because it signals recurring operational ownership plus analysis without implying a generic software product.
  - Service scopes are the scope lists already defined in Section 8; they will be presented as senior consulting, analysis, integration design and hands-on implementation support, not enterprise-scale software engineering.
  - Proof policy: use qualitative evidence only until substantiated operational evidence is available—experience across suppliers, brands, retailers and operators; complex multi-market information; hands-on analysis and workflow design; and documented, transparent, tool-independent methods. Remove unsupported EUR opportunity claims.
  - Company logos may remain only as neutral sector-experience evidence and must not imply that Marksyte delivered data-integration work for every named company.
  - English terminology: standardization, mapping, integration, reconciliation, data operations, data quality, master data, exception management and analysis. Use “data conciliation” only as a secondary synonym, if needed.
  - Spanish terminology: estandarización, mapeo, integración, conciliación de datos, operaciones de datos, calidad de datos, datos maestros, gestión de excepciones y análisis.
  - Information architecture: homepage explains and qualifies demand; service pages convert; about establishes delivery credibility; case studies demonstrate methods; blog remains neutral, analytical and search-oriented.
  - Legacy commercial service and article URLs remain unchanged during the build. They may become unlisted after equivalent replacement content exists, but any redirect, 410 or retirement decision requires the Phase 9 SEO review. No unrelated legacy URL will redirect to the homepage.
- Files changed: `DATA_INTEGRATION_PIVOT_PLAN.md`.
- Validation: Read the complete pivot plan; confirmed the four selected English and Spanish route slugs do not currently exist; confirmed they do not collide with the existing legacy service paths; confirmed current legacy routes remain available and archived copies remain recoverable from Phase 1; confirmed no page, asset, sitemap or redirect files were changed in Phase 2.
- Open issues: Search Console/analytics traffic and backlink data availability; individual legacy service/article redirect or retirement treatment; final page-level metadata and copy validation during Phases 3–9.

### Phase 3: Reframe homepage and about pages

Status: Complete  
Estimated effort: 2-2.5 days

Tasks:

- Rewrite English homepage.
- Rewrite Spanish homepage.
- Repurpose the hero visual.
- Replace proof and problem sections.
- Replace service cards and contact prompts.
- Rewrite English about page.
- Rewrite Spanish about page.
- Update shared content in `app.js`.
- Update metadata and structured data.

Validation:

- Mobile and desktop layout
- English/Spanish parity
- Contact behavior
- No obsolete commercial copy in active core pages

Completion record:

- Files changed: `index.html`, `es/index.html`, `about/index.html`, `es/about/index.html`, `app.js`, `styles.css`, `DATA_INTEGRATION_PIVOT_PLAN.md`. Spanish copy was subsequently refined in `es/index.html` and `es/about/index.html` after a native-language quality review.
- Outcome: Reframed the English and Spanish homepage and about pages around fragmented operational data, data standardization, mapping, integration, reconciliation, managed data operations and analysis. Reused the existing static HTML/CSS foundation and owner-page layout.
- Content changes: Replaced Travel Retail sales messaging, buyer-decision framing, unsupported EUR proof and active logo presentation with a controlled data-flow visual, qualitative proof, audience strip, data problems, four new service cards, five-step delivery method, practical delivery model, and data-focused contact prompts.
- Shared behavior: Replaced obsolete homepage copy in `app.js` while retaining the case-study KPI/territory helpers and the email-draft contact behavior. Updated the email subject and form fields for data challenges.
- Metadata: Updated titles, descriptions, Open Graph/Twitter metadata, JSON-LD and reciprocal EN/ES `hreflang` on both homepages and both about pages.
- Validation: `node --check app.js` passed; local HTTP preview returned 200; desktop DOM and screenshot review passed; 390px mobile DOM and screenshot review passed; English and Spanish DOM content loaded without mojibake; no obsolete commercial terms were found in the four active core pages or shared app copy; new service route slugs were confirmed collision-free. A second Spanish-language review replaced literal phrasing and unnecessary English/Spanish mixing with more idiomatic B2B Spanish, then the Spanish homepage and About page were rendered and reviewed again.
- Open issues: Sitemap, redirects, legacy-page discoverability and page-level SEO decisions remain for Phase 9. Browser preview used a temporary local server and no production deployment was made.

### Phase 4: Create the new service layer

Status: Complete  
Estimated effort: 2-3 days

Tasks:

- Create four English service pages.
- Create four Spanish service pages.
- Add inputs, process, deliverables and controls.
- Add related articles/cases.
- Create or adapt a realistic data example.
- Update service navigation and cross-links.

Validation:

- All routes load
- All internal links resolve
- EN/ES metadata and `hreflang` are reciprocal
- Claims reflect real delivery capability

Completion record:

- Files changed: eight new static service pages at the finalized English and Spanish routes, plus this plan. Existing legacy service pages were not deleted or moved.
- Outcome: Created a bilingual service layer for data standardization, data mapping and integration, data reconciliation, and managed data operations and analysis. Each page includes the problem it addresses, best-fit situations, typical inputs and outputs, process, deliverables, controls, ownership/documentation expectations, system boundaries, related editorial or case-study proof, and a focused CTA.
- Content approach: Reused the existing service-page HTML/CSS shell and kept claims qualitative and defensible. The related article and case-study links provide context without presenting unsupported commercial proof. A new flagship synthetic data example remains deferred to the case-study/content phases.
- Metadata: Added page titles, descriptions, canonical URLs, reciprocal EN/ES `hreflang`, Open Graph/Twitter metadata and `Service` JSON-LD for all eight pages.
- Validation: All eight routes returned HTTP 200 from the local preview server; all required service sections were present; relative content links resolved after correcting the Spanish route-depth and cross-language article links; Spanish copy was reviewed for unnecessary literal English borrowings; `node --check app.js` remained clean.
- Open issues: Sitemap, redirects, legacy-page discoverability and page-level SEO decisions remain for Phase 9. No production deployment was made.

### Phase 5: Build the blog content matrix

Status: Complete  
Estimated effort: 1-2 days

Tasks:

- Inventory all individual EN/ES articles.
- Read and classify every article.
- Preserve search topic and record intended treatment.
- Assign related services only where genuine.
- Identify articles requiring traffic/backlink review.

Deliverable:

- A persistent Markdown, CSV or spreadsheet content matrix in the repository.

Completion record:

- File created: `BLOG_CONTENT_MATRIX.md`.
- Coverage: 36 English/Spanish individual article pairs inventoried and classified. The two blog index pages are excluded because index rebuild work belongs to Phase 7.
- Classification: Each pair has a primary topic, High/Medium/Low pivot fit, intended treatment, Spanish counterpart and a related service only where the connection is genuine.
- Outcome: Identified 12 High-fit pairs for the initial Phase 6 reframe pool, 17 Medium-fit editorial candidates and 7 Low-fit sector-editorial pieces. No article was archived or rewritten in Phase 5.
- Review flags: Date-sensitive claims and all future retirement decisions require source freshness, traffic and backlink review. Existing URLs and search topics remain preserved.
- Validation: Matrix contains 36 rows; every English and Spanish article path referenced by the matrix exists; the repository contains 36 English and 36 Spanish individual article files.

### Phase 6: Reframe priority blog content

Status: Complete  
Estimated effort: 3-6 days for initial batch

Tasks:

- Reframe the first 8-12 priority article pairs.
- Remove promotional service sections.
- Add neutral operational/data implications.
- Add restrained related-capability references.
- Preserve citations and search intent.
- Update metadata only where justified.
- Update internal links.

Validation:

- Articles remain useful without reading as sales pages
- No artificial data framing
- EN/ES versions communicate equivalent meaning
- Sources and claims remain accurate

Completion record:

- Initial batch: Reframed eight bilingual article pairs: AI inventory planning, AI visibility for Chinese travellers, fuel/fares and demand forecasting, Heathrow passenger mix, late booking, Lotte conversational shopping, product carbon footprint data, and scheduled airline seats versus realised airport demand.
- Files changed: the 16 corresponding English and Spanish `index.html` files. Existing URLs, canonical URLs, `hreflang`, citations, FAQs, source notes and search topics were preserved.
- Content changes: Replaced self-promotional “How Marksyte can help” framing with neutral operational implications, added one restrained related-capability reference per article, renamed suggested reading as related reading, and changed CTA language from direct brand promotion to a practical data-challenge prompt.
- Outcome: The articles now explain what information, controls, forecasting or operating model the situation requires, while keeping the underlying sector analysis and evidence intact. Four additional High-fit pairs remain available for a later Phase 6 batch if traffic, freshness or editorial priorities justify it.
- Validation: All 16 routes returned HTTP 200 from local preview; all local content links resolved; all 16 retained source sections, canonical URLs and reciprocal EN/ES metadata; no selected article retained the old promotional section or CTA wording; no production deployment was made.
- Open issues: Source freshness and traffic/backlink evidence still need review for date-sensitive articles. Blog index rebuilding and broader article navigation remain Phase 7 work.

### Phase 7: Rebuild blog indexes

Status: Complete  
Estimated effort: 0.5-1 day

Tasks:

- Replace Travel Retail sales positioning.
- Introduce the new neutral categories.
- Feature the strongest data-related content.
- Preserve access to relevant sector analysis.
- Remove references to archived articles.

Completion record:

- Files changed: `blog/index.html` and `es/blog/index.html`.
- Outcome: Rebuilt both indexes around neutral operational analysis. The first section now features data, demand, product-information, integration and control topics; a second section preserves relevant airport, travel and market context.
- Navigation: Preserved access to all current article routes through the index sections and kept the bilingual switch, legal links and case-study navigation. Corrected the Spanish case-study link to `es/casos-de-estudio/` during validation.
- Metadata: Updated titles, descriptions, Open Graph/Twitter metadata and Blog JSON-LD to reflect operational data and analysis rather than Travel Retail sales leadership.
- Content approach: Phase 6 articles are featured first without turning the blog into a service catalogue. Sector articles remain available without forced data framing, and no archived path is linked.
- Validation: Both index routes returned HTTP 200; all relative index links resolved; no archived references or old sales-leader positioning remained; EN/ES canonical and reciprocal `hreflang` metadata remained present. No production deployment was made.

### Phase 8: Reframe case studies

Status: Complete  
Estimated effort: 1-2 days

Tasks:

- Classify cases.
- Reframe strong data/operational cases.
- Archive legacy commercial cases where appropriate.
- Create at least one flagship reconciliation case.
- Rebuild EN/ES case indexes.

Completion record:

- File created: `CASE_STUDY_MATRIX.md`, classifying the bilingual case-study inventory and intended treatment.
- Archive: Added recoverable copies of five legacy English/Spanish commercial or category case-study pairs under `.archive/commercial-positioning-2026-08-03/case-studies/`. Active originals remain in place; no public URL was deleted.
- Reframed/retained: EES airport operations, AI process integration and AI trade-flow cases remain active and are now featured as operational/data cases. The public-data Spain alcohol case remains available as category context rather than delivery proof.
- New flagship case: Added the bilingual synthetic composite reconciliation case at `/study-cases/data-reconciliation-fmcg/` and `/es/casos-de-estudio/conciliacion-datos-fmcg/`. It covers source definitions, mappings, control totals, exception ownership, operating cadence and system boundaries, and explicitly disclaims client/result attribution.
- Indexes: Rebuilt `study-cases/index.html` and `es/casos-de-estudio/index.html` around operational data, airport flow, AI workflows and reconciliation. Legacy commercial cases are no longer actively featured but remain reachable at their original routes pending Phase 9.
- Metadata: Added/updated canonical, reciprocal EN/ES metadata and CollectionPage/Article JSON-LD for the new index and flagship case pages.
- Validation: All rebuilt indexes, flagship case routes and retained operational case routes returned HTTP 200; case-index and flagship-page local links resolved; all archive manifest targets exist; no archived path or old sales-leader positioning remains in the active case indexes. No production deployment was made.
- Open issues: The EES operational case currently has no Spanish counterpart, so it is featured only in the English index until a translation decision is made. Redirect, retirement and sitemap treatment remain Phase 9 work.

### Phase 9: SEO and route migration

Status: Complete  
Estimated effort: 1-2 days

Tasks:

- Produce a redirect/retirement matrix.
- Implement only defensible redirects.
- Regenerate the sitemap.
- Update canonical and `hreflang` data.
- Update structured data and social metadata.
- Check internal links and archived asset references.

Completion record:

- File created: `SEO_ROUTE_MIGRATION_MATRIX.md`, documenting active, legacy, archived and redirect-treatment decisions route by route.
- Redirects: Retained only known, specific Spanish legacy case-study redirects and the existing `/study-cases/alc-spain` alias. Removed the broad `/es/study-cases/:path*` catch-all because it could discard unknown path-specific intent. Legacy services and legacy commercial cases remain reachable and are intentionally deferred pending traffic, backlink and replacement-equivalence evidence.
- Sitemap: Regenerated `sitemap.xml` with 102 valid URL entries, including 36 English and 36 Spanish blog routes, active bilingual core/service/case/legal routes, and approved English-only or Spanish-only exceptions. Legacy commercial routes and `.archive/` content are excluded.
- Metadata: Audited 120 active HTML pages; canonical and `hreflang` metadata are internally consistent, with no relative `hreflang` targets or canonical mismatches detected. Existing structured data and social metadata were retained/updated with the reframed pages.
- Validation: Sitemap XML parses successfully, every sitemap target exists locally, all active internal links resolve, `vercel.json` parses successfully, and no deployed-page reference to `.archive/` was found. No production deployment was made.
- Open issues: Search Console/analytics and backlink evidence are still needed before deciding whether any deferred legacy route should redirect, return 410, or remain published. The EES case remains English-only until a Spanish counterpart is approved.

### Phase 10: Analytics, QA and release

Status: In progress — analytics, conversion and QA complete; preview deployment pending  
Estimated effort: 1 day

Tasks:

- Update conversion labels and prompts.
- Verify analytics and consent.
- Test desktop and mobile.
- Check every active route and language pair.
- Verify `.archive` is not deployed.
- Deploy to preview.
- Review before production deployment.

Completion record:

- Analytics: Added consent-gated GA4 conversion events in `analytics.js` for Calendly lead clicks, contact email clicks, contact-section intent and valid discovery-form submissions. Events send page path, method, form ID or CTA label only; form contents are not sent.
- Conversion paths: Preserved the existing bilingual Calendly, email and discovery-form routes and verified the homepage prompts remain aligned with the data proposition.
- Consent: Added analytics coverage to all 120 active HTML pages. Existing accept/reject behavior and cookie-settings access remain in place; analytics does not load before consent.
- QA: `analytics.js` and `app.js` passed syntax checks. English and Spanish homepages were checked locally, the cookie-settings route exposed preferences, all active pages had analytics coverage, and the Spanish homepage passed a 375px responsive overflow check. `.archive/` remains excluded by `.vercelignore`.
- Release handoff: A local preview server returned HTTP 200 and was used for route checks. No external preview deployment was made because the Vercel CLI/deployment authorization was not available in this workspace. Preview review and any production release remain pending.

## 15. Release strategy

Recommended initial release:

- Archive completed
- New bilingual homepage
- New bilingual about pages
- Four bilingual services
- Reframed bilingual blog indexes
- Four to six priority article pairs
- At least one flagship data case
- Updated sitemap, metadata and redirects

Continue reframing the rest of the blog after the core proposition is live.

Estimated effort:

| Workstream | Estimate |
|---|---:|
| Archive and inventory | 0.5-1 day |
| Positioning | 0.5-1 day |
| Homepage and about | 2-2.5 days |
| Services | 2-3 days |
| Initial blog reframing | 3-6 days |
| Case studies | 1-2 days |
| SEO, analytics and QA | 2-3 days |
| Initial pivot total | 11-18 focused working days |

A lean release may be possible in approximately 6-8 focused days, with remaining blog reframing performed incrementally.

## 16. Cross-chat handoff protocol

At the beginning of every new Codex chat, provide this instruction:

> Read `DATA_INTEGRATION_PIVOT_PLAN.md` completely before making changes. Work only on Phase [number/name]. Preserve all historical content according to the archive policy. Update the plan's phase status, completion record and decision log before finishing. Do not begin another phase unless required to safely complete the assigned one.

At the end of every chat, the working agent should report:

- Phase worked on
- Outcome
- Files changed
- Validation completed
- Archive items created or moved
- SEO/route decisions
- Open questions
- Recommended next phase

### Suggested chat breakdown

1. Archive and preservation
2. Positioning and page architecture
3. English homepage/about
4. Spanish homepage/about
5. English services
6. Spanish services
7. Blog inventory and content matrix
8. Priority English article reframing
9. Priority Spanish article reframing
10. Case studies
11. SEO, redirects and sitemap
12. Full QA and release preparation

## 17. Decision log

Record decisions here chronologically.

### 2026-08-02

- Decision: Pivot Marksyte away from a sales/marketing-led commercial strategy proposition.
- Decision: New direction centers on data rework, standardization, mapping, integration, reconciliation, database management and analysis.
- Decision: Relevant audiences include operators, suppliers and retailers, not only Travel Retail sales leaders.
- Decision: Preserve the old proposition and related material in a hidden archive to allow a future return.
- Decision: Avoid rebuilding the entire technical project during the pivot.

### 2026-08-03

- Decision: Blog content should be reframed into a neutral editorial proposition rather than functioning as repeated service promotion.
- Decision: The blog's main purpose is Google visibility, useful analysis and expertise signaling.
- Decision: Services may be mentioned quietly and contextually, normally once near the end of an article.
- Decision: Preserve established article URLs and search intent wherever possible.
- Decision: Archive only blog content that cannot credibly support the new positioning or has insufficient ongoing value.
- Decision: Phase 1 archive uses copies, retaining active legacy files in place until route-by-route migration and SEO decisions are made.
- Decision: Legacy service pages and portfolio/buyer deliverables are preserved under `.archive/commercial-positioning-2026-08-03/`; shared CSS, analytics, legal structure and generic brand assets remain active and are only captured through the required root snapshots.
- Decision: Phase 2 adopts a capability-led bilingual architecture: data standardization, data mapping and integration, data reconciliation and controls, and managed data operations and analysis.
- Decision: The initial pivot will use broad operational-data language for operators, suppliers, retailers, distributors and multi-site businesses; Travel Retail and FMCG remain sectors of experience rather than the company category.
- Decision: The fourth service label is “Managed data operations and analysis” / “Gestión y análisis de datos”, chosen to describe recurring operational support and analysis without implying a generic product or enterprise engineering practice.
- Decision: New service routes will use `/services/data-standardization/`, `/services/data-mapping-integration/`, `/services/data-reconciliation/`, `/services/managed-data-analysis/` and the reciprocal Spanish `/es/servicios/estandarizacion-datos/`, `/es/servicios/mapeo-integracion-datos/`, `/es/servicios/conciliacion-datos/`, `/es/servicios/gestion-analisis-datos/`.
- Decision: Qualitative proof replaces unsupported quantitative opportunity claims; company logos are permitted only when presented as neutral sector experience and not as proof of a specific data-integration engagement.
- Decision: English will prefer “data reconciliation” and Spanish will use “conciliación de datos”; route slugs remain ASCII-safe and accent-free.
- Decision: Legacy commercial URLs remain stable during implementation. Their future navigation, redirect, 410 or retirement treatment will be decided individually during the SEO migration phase using available traffic and backlink evidence.
- Decision: Phase 3 replaces active homepage/about proof with qualitative, defensible evidence and removes the active logo rail; the homepage now uses a neutral audience strip so logos do not imply unsupported data-integration engagements.
- Decision: The homepage hero visual is repurposed as a controlled data flow showing standardization, mapping/integration and reconciliation, while the method section uses Discover → Define → Build → Validate → Operate.
- Decision: Contact prompts now ask for organization and role, sources or systems, data frequency, current mismatch or bottleneck, and required output or decision.
- Decision: Spanish copy should be written natively for a Spanish-speaking B2B audience rather than translated line by line. Prefer “informes”, “socios”, “minoristas”, “procesos” and “conjuntos de datos” where they read more naturally than English borrowings, while retaining established technical terms such as “API”, “datos maestros” and “conciliación de datos”.
- Decision: Phase 4 service pages use the existing static service-page shell and finalized bilingual routes. Each page separates inputs, process, outputs, controls and system boundaries so prospects can assess fit without implying a productized platform or unsupported outcome.
- Decision: Related articles and case studies are used as contextual proof. A realistic flagship data example is deferred until the later case-study/content phase so it can be grounded in an appropriate synthetic or approved example.
- Review: Phase 1–4 consistency check completed. All 31 archive manifest targets exist, `.archive/` remains excluded from deployment, all eight new service routes are reachable, active Phase 1–4 content links resolve, and legacy service URLs remain unchanged as intentionally deferred SEO work.
- Decision: Phase 5 uses a bilingual article-pair matrix rather than separate English and Spanish inventories, so search topics, treatment and service relationships can be reviewed together without assuming that a translation is automatically equivalent.
- Decision: No article is archived based on positioning fit alone. Phase 6 will reframe the strongest data-adjacent pairs, while Phase 9 will use traffic, backlink and replacement-equivalence evidence for URL retirement decisions.
- Decision: Phase 6 begins with eight bilingual pairs rather than rewriting all 12 High-fit pairs at once. This keeps the first batch coherent around forecasting, operational signals, product information and controls; the remaining four High-fit pairs remain candidates for a subsequent batch.
- Decision: Priority articles retain their sector-specific search intent. The pivot is expressed through the operational implications and capability references, not by replacing every Travel Retail term with generic data language.
- Decision: Case studies are now separated into operational/data evidence, public-data context and legacy commercial strategy. Only the first two groups are actively featured during the pivot.
- Decision: The flagship reconciliation case is explicitly synthetic and composite. It demonstrates a credible delivery method without inventing a client, logo, revenue result or confidential dataset.
- Decision: Legacy case URLs remain active after archive copies are created. Their eventual redirect, retirement or continued publication treatment will be decided with traffic and backlink evidence in Phase 9.
- Decision: Phase 9 keeps legacy service and commercial case URLs reachable but removes them from the sitemap until traffic, backlink and replacement-equivalence evidence supports a route-specific action.
- Decision: Phase 9 removes the broad `/es/study-cases/:path*` redirect and retains only specific, defensible redirects whose destination equivalence is known.
- Decision: The sitemap contains active core, blog, service, operational case and legal routes; archived material and deferred legacy commercial routes are excluded. The English-only EES case and Spanish-only public-data alcohol case remain explicit language exceptions rather than invented hreflang pairs.
- Review: Phase 9 route and SEO validation completed. Sitemap XML is valid with 102 entries; all sitemap targets and active internal links resolve; 120 active HTML pages passed canonical/hreflang audit; `vercel.json` parses successfully; and no production deployment was made.
- Decision: Phase 10 conversion measurement is consent-gated and intentionally privacy-minimal: GA4 receives conversion method and page/CTA context, never discovery-form contents.
- Review: Phase 10 analytics, consent and local responsive QA completed across 120 active pages. External preview deployment remains a release handoff because Vercel tooling/authorization was unavailable in the workspace.

## 18. Open decisions

These choices remain for later implementation or SEO validation:

- Availability of Search Console or analytics data for URL-retirement decisions
- Page-level validation of historical proof claims before publication
- Individual legacy service/article redirect, retirement and sitemap treatment after reviewing traffic, backlinks and replacement equivalence
- Exact division of advisory, integration-design and hands-on implementation work on each service page
- Vercel preview deployment access and the review decision before production release

## 19. Definition of completion

The pivot is complete when:

- Historical commercial material is recoverable from the archive.
- The active homepage and about pages consistently communicate the data proposition.
- Four bilingual services are live and accurately scoped.
- The blog indexes are neutral and search-oriented.
- Every legacy article has a recorded treatment decision.
- Priority articles have been reframed without losing their search purpose.
- Active case studies support data, integration or operational analysis credibility.
- Sitemap, canonical URLs, `hreflang`, redirects and metadata are correct.
- No archived content or broken asset path is deployed.
- Desktop, mobile, contact, analytics and language behavior have been verified.
- This document contains up-to-date status and decisions for future chats.
