# Marksyte AI-Assisted Content Workflow

Status: Phase 3A review document

This workflow helps Marksyte use AI for research support and drafting without handing publication decisions to a model. It applies to existing indexable pages and to any future page that receives separate approval. It does not create a runtime AI feature and it does not authorize a new URL.

The source of truth is the reviewed evidence. AI can organize that evidence, find gaps, and propose language. A Marksyte reviewer owns the final claim, page, language, metadata, and publication decision.

## Guardrails before research

- Confirm Phase 0, Phase 1, and Phase 2 reports are complete
- Keep the 18 Phase 1 retired routes `noindex, follow`
- Keep robots, canonicals, sitemap URLs, redirects, and hreflang decisions unchanged unless a separate approval explicitly covers them
- Use an existing URL for a pilot unless a new page has separate approval
- Do not add API keys, environment variables, runtime AI services, `llms.txt`, or special AI markup
- Do not publish content that exists only after JavaScript runs
- Do not publish hidden text or claims that do not appear visibly on the page

If a step needs a new URL, a new indexation decision, a redirect, a structured-data change, or a claim that cannot be verified, pause the workflow and record the decision needed.

## 1. Select a query and topic from GSC

Start with the supplied Search Console exports or a new approved export. Record the date range, property, search type, country and device filters, and export limitations before reading the numbers.

Use page, query, device, country, and date views together. Group queries by the page that received impressions. Look for a real problem that matches Marksyte’s current FMCG data-operations offer. Give more weight to repeated signals and business fit than to one short-lived position.

Exclude retired or `noindex` routes from pilot selection unless the business has approved a new indexation decision. Do not treat a visible query export as complete when the export omits rows or does not reconcile with the page total.

For every candidate, record:

- Query or query cluster
- Impressions, clicks, CTR, and average position
- Date range and filters
- Existing page that received the signal
- Business problem suggested by the query
- Evidence that Marksyte can support the answer
- Reason to improve an existing page instead of creating another page

The output of this step is a short ranked list, not a content calendar.

## 2. Classify search intent

Classify the query before choosing the page format. Use one primary intent and note any secondary intent.

- Problem diagnosis: the reader wants to understand why a data or reporting problem occurs
- How-to: the reader wants a method, calculation, checklist, or sequence
- Commercial service: the reader wants help with a defined operational problem
- Comparison or evaluation: the reader is deciding between methods, tools, or approaches
- Evidence seeking: the reader wants a definition, number, source, or example

Write one sentence that completes this statement: “The reader should be able to decide or do ___ after reading this page.” If the sentence is vague, the brief is not ready.

Check whether the existing page already serves the intent. Improve the existing page when the intent matches. Do not create separate pages for minor keyword variations or split one useful answer into thin variants.

## 3. Collect sources

Build a source list before asking AI to draft. Separate first-party evidence from external evidence.

First-party Marksyte evidence can include:

- Current service pages and existing case studies
- Verified internal delivery methods, templates, or process documents
- Approved client evidence that can be published
- Repository content that is already public and still accurate
- GSC data and the exact export range used

External sources should be authoritative and specific to the claim. Prefer primary research, official statistics, standards, regulators, academic work, and original company disclosures. Record the title, publisher, URL, publication date, access date, and the exact claim the source supports.

Do not use a source just because it contains the target keyword. A source must support the statement Marksyte plans to make.

## 4. Use AI for research support and drafting

Give the model the approved brief, source list, claim ledger, audience, language, and known constraints. Ask it to:

- Group the source material by question
- Separate facts, inferences, and recommendations
- Identify unsupported or ambiguous claims
- Propose an outline that follows the reader’s problem
- Draft only from the supplied evidence
- Mark every statement that needs human or source verification
- Suggest useful internal links that already exist

Do not ask the model to fill missing evidence from general knowledge. Do not let it invent statistics, client outcomes, frameworks, quotes, sources, search intent, or Marksyte capabilities. Keep the prompt and output as working material. The output is a draft, not a source of truth.

## 5. Review with a Marksyte expert

A person who understands the relevant service or client problem must review the brief and draft. The reviewer checks:

- The problem is real and specific
- The proposed answer matches Marksyte’s actual work
- The recommendation does not overstate certainty or capability
- First-party evidence is approved for public use
- The page gives the reader a useful decision or next step
- The language sounds like Marksyte and avoids generic business wording
- The proposed internal links point to relevant live pages

The reviewer records a name, date, status, and comments. A model cannot satisfy this gate.

## 6. Fact check every claim

Maintain a claim ledger during review. Each factual statement needs one of these labels:

- First-party Marksyte evidence
- External source
- Clearly marked inference
- Opinion or recommendation

Verify numbers, dates, definitions, named entities, service descriptions, client references, and comparisons. Check the original source rather than relying on a model summary. Remove a claim when no reviewer can verify it. Qualify an inference so the page does not present it as a fact.

The fact-check status is `not started`, `in review`, `passed`, or `blocked`. `Blocked` means publication stops.

## 7. Localize English and Spanish

Treat the English and Spanish versions as equivalent answers for the same audience, not as mechanical copies. A native or fully fluent reviewer checks each version.

Localization must preserve:

- The factual meaning and level of certainty
- The actual Marksyte service and business context
- The reader’s terminology and search intent
- Examples, units, dates, and cultural references
- The visible links and the corresponding language route

Do not publish both languages when one is a literal translation with awkward terminology or missing local context. Do not create a language URL only to capture another keyword variation. Record whether each language is ready, in review, or not planned.

## 8. Review metadata and structured data

Before approval, compare the proposed metadata with the visible page.

- The title describes the page and does not promise more than the content provides
- The H1 states the page’s main subject once
- The meta description accurately summarizes the visible answer
- The canonical points to the intended existing URL
- Hreflang links are used only for real language equivalents
- Internal links help the reader reach the next relevant page
- Structured data uses a suitable type and matches visible content
- No schema field contains a claim that the page does not visibly support

Do not add schema to manufacture eligibility. Do not change robots, canonicals, sitemap URLs, redirects, or noindex decisions as part of a copy review.

## 9. Review the initial HTML

Inspect the raw HTTP response before relying on the browser view. The important answer, definitions, tables, findings, and links must exist in initial HTML. JavaScript may enhance a visible section, but it must not be the only place where the useful content exists.

Check with JavaScript disabled or with an equivalent raw-source inspection:

- The main answer remains readable
- Important numbers and claims remain present
- There is one H1 and a clear heading structure
- Internal links remain crawlable
- Critical containers are not empty
- Tables and lists have semantic HTML where appropriate
- The page does not contain hidden SEO-only text

Run the browser check after the raw check. Confirm the enhancement does not duplicate visible content, remove the fallback, break the layout, or add console errors.

## 10. Approve publication

Publication requires a completed brief, a reviewed claim ledger, a human reviewer, fact-check status `passed`, language status for every planned version, metadata review, structured-data review, and initial-HTML review.

The publication approver confirms that:

- The page provides original user value
- The page answers a real search intent
- Every factual claim has evidence or is clearly marked as an inference or recommendation
- The page is not a keyword-variant duplicate
- The page is not a translation without real localization
- The page is not JavaScript-only
- The page does not change the Phase 1 indexation decisions

Publication status is `draft`, `human review`, `blocked`, `approved`, or `published`. `Published` is never set by the model or by an automated script.

## 11. Measure in Search Console

Record a baseline before publication or page update. After publication, compare the same page and language over a defined window, normally 28 days first and 56 days when volume is low.

Measure:

- Impressions and clicks
- CTR and average position
- Query groups and their intent
- Country and device differences when the sample supports them
- Indexed status and canonical selection when relevant
- Engagement or qualified lead evidence available to Marksyte

Keep the date range and filters with the result. Do not call a page successful or unsuccessful from a few impressions, one position, or a short incomplete export. Record what changed on the page so the measurement has a clear cause.

## Publication rules

- AI output is a draft, not final authority
- Every factual claim needs a source or Marksyte evidence
- Do not create pages only to target keyword variations
- Do not publish duplicate English and Spanish content without real localization
- Do not publish content that exists only in JavaScript
- Do not mark up content that is not visible on the page
- Do not publish a page unless it provides original user value

## What this workflow must not do

- No mass-generated landing pages
- No crawlable chat-session URLs
- No automatic publication
- No hidden AI-only text
- No unsupported claims
- No special Google AI files or markup

## Phase 3A pilot recommendations

Use the existing GSC findings and the Phase 1 decision to keep the pilot on current indexable FMCG data-operations routes. Do not use the 18 retired Travel Retail routes as pilots.

### Pilot 1

Target URL: `/services/data-reconciliation/`

Reason: This is an existing indexable commercial page tied directly to Marksyte’s current data-reconciliation offer. It should test whether a page can answer the operational problem clearly while supporting a commercial next step.

### Pilot 2

Target URL: `/blog/how-to-calculate-retail-market-share-sell-out/`

Reason: This existing article can test a practical calculation intent. The workflow must verify the formula, define the data inputs, and connect the explanation to Marksyte’s first-party reconciliation work.

### Pilot 3

Target URL: `/blog/why-sku-mapping-fails-international/`

Reason: This existing article can test a diagnosis intent that matches Marksyte’s SKU, EAN, and cross-market data problems. Every cause and example must be tied to reviewed evidence.

The three pilot recommendations do not authorize page edits, article rewrites, publication, metadata changes, or new URLs. Phase 3B should begin with one reviewed brief and claim ledger.
