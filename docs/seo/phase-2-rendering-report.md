# Phase 2 Rendering Report

Date: 2026-09-01

## Scope and prerequisites

Phase 0 and Phase 1 were complete before this work began.

- Branch: `codex/seo-ai-indexation`
- Phase 0 quarantine remains outside the repository at `C:\Users\roman\Documents\marksyte-phase0-quarantine-2026-09-01\edge-profile-proof-check`
- The quarantined browser-profile directory is no longer tracked
- Phase 1 decision: keep the 18 retired commercial routes `noindex, follow`, with their existing self-canonicals, hreflang, sitemap exclusion, and no new redirects
- No Phase 1 indexation decision was changed during Phase 2

This phase addressed initial HTML rendering only. No deployment, external-system contact, Phase 3 workflow, new page, AI-specific markup, robots directive, redirect, sitemap URL, canonical, or page metadata change was made.

## Pages and scripts audited

The audit covered 182 HTML routes outside `.archive`, including the eight representative routes requested for validation:

- `/`
- `/es/`
- `/services/data-reconciliation/`
- `/es/servicios/conciliacion-datos/`
- `/blog/retail-data-integration-pos-erp/`
- `/es/blog/por-que-falla-mapeo-sku-internacional/`
- `/study-cases/energy-drinks/`
- `/es/casos-de-estudio/alcohol-espana/`

The eight JavaScript files outside `.archive` were classified as follows:

- `analytics.js`: consent UI and analytics loading; no core page content
- root `app.js`: form enhancement and stale selectors not present in the current home HTML; the current home content is already in initial HTML
- `deliverable-preview.js`: interaction-only deliverable preview behavior
- `service-brand-carousel.js`: decorative brand-carousel behavior
- `study-cases/brand-relevance-distribution/app.js`: reveal/progress enhancement over existing HTML
- `study-cases/energy-drinks/app.js`: reveal/progress enhancement over existing HTML
- `study-cases/travel-retail-distribution-strategy/app.js`: reveal/progress enhancement over existing HTML
- `es/casos-de-estudio/alcohol-espana/app.js`: important KPI, chart, segment, and playbook content generated into empty HTML containers

The Spanish alcohol case was the only indexable page where important content was materially unavailable in initial HTML. Its data is embedded in the existing `app.js`; no API, fetch, canvas-only data source, or external data source was identified.

## Files changed

- `es/casos-de-estudio/alcohol-espana/index.html`
  - Added semantic initial HTML for KPIs, findings, chart summaries, tables, age comparisons, segment territories, and the strategic playbook
  - Preserved the existing title, description, robots, canonical, hreflang, JSON-LD, and internal routing
  - Added dedicated enhancement children without changing the existing chart data
- `es/casos-de-estudio/alcohol-espana/app.js`
  - Changed renders to target `.js-enhanced-content` children
  - Preserved the existing arrays, numeric values, labels, visual markup, reveal behavior, and interactions
  - Leaves `.initial-content` fallbacks in the DOM and marks a host as enhanced only after its visual content is rendered
- `es/casos-de-estudio/alcohol-espana/styles.css`
  - Added semantic table and fallback styles
  - Visually hides the retained fallback only after successful enhancement, while keeping it available to assistive technology
  - Added mobile overflow protection for the no-JavaScript table fallback
- `docs/seo/phase-2-rendering-report.md`
  - This report

Phase 0 and Phase 1 files remain present as expected: `.gitignore`, `.vercelignore`, the staged removal of the quarantined directory from Git tracking, and the untracked Phase 1 report. No unrelated repository directory was moved or changed.

## Initial HTML result

The raw local HTTP response for the alcohol case now contains a non-empty `.initial-content` fallback for all ten critical data hosts:

`kpi-strip`, `slope-chart`, `youth-change-chart`, `age-multiples`, `integrated-reading`, `social-age-bars`, `opportunity-ranking`, `segment-matrix`, `territory-cards`, and `strategic-playbook`

The initial HTML includes the exact existing values needed to understand the case, including:

- Never alcohol: `31,3%` to `33,9%`
- Social consumption: `47,0%` to `43,9%`
- Habitual consumption: `34,7%` to `29,7%`
- Young never-alcohol change: `+6,7 pp`
- Young social-alcohol change: `-7,6 pp`
- Young physical-activity level in 2025: `77,8%`
- High-income social consumption: `55,5%`
- Higher-education social consumption: `55,4%`

The fallback uses headings, captions, table headers with scopes, written findings, lists, and accessible labels. The chart tables are concise and contain the meaningful values represented by the visual charts rather than hidden SEO-only prose.

## JavaScript-enabled result

The browser rendered the existing visual treatment after the change:

- All ten critical hosts retained their fallback and received enhanced content
- Three enhanced KPI cards rendered
- One enhanced slope-chart SVG rendered
- Seven enhanced playbook cards rendered
- The existing visual styles and scroll-reveal behavior remained active
- Desktop screenshot inspection showed the original hero, KPI cards, and charts in place
- Mobile screenshot inspection at a 390px viewport showed the existing responsive hero layout
- Mobile measurement: `scrollWidth` 375 and `clientWidth` 375; no horizontal overflow
- Browser console errors and warnings for the local alcohol-case check: none

The retained fallback is clipped to a one-pixel accessible region after enhancement; the visual enhancement is marked `aria-hidden` to avoid duplicate visible and assistive-technology output. The fallback remains present in the DOM and is the visible content when JavaScript does not run.

## Representative-route validation

Raw HTTP checks returned `200` for all eight representative routes. Each had a title, meta description, canonical, language attribute, exactly one H1, substantive main text, local internal links, and at least one JSON-LD block. The alcohol case had no empty critical container in its raw response.

| Route | Lang | H1 count | Main text characters | JSON-LD blocks |
| --- | --- | ---: | ---: | ---: |
| `/` | `en` | 1 | 6,398 | 1 |
| `/es/` | `es` | 1 | 7,941 | 1 |
| `/services/data-reconciliation/` | `en` | 1 | 3,085 | 1 |
| `/es/servicios/conciliacion-datos/` | `es` | 1 | 3,317 | 1 |
| `/blog/retail-data-integration-pos-erp/` | `en` | 1 | 9,937 | 2 |
| `/es/blog/por-que-falla-mapeo-sku-internacional/` | `es` | 1 | 13,569 | 2 |
| `/study-cases/energy-drinks/` | `en` | 1 | 28,330 | 1 |
| `/es/casos-de-estudio/alcohol-espana/` | `es` | 1 | 10,346 | 1 |

## Validation commands and results

- `node --check` across all eight JavaScript files outside `.archive`: passed, 0 failures
- Local HTTP server bound to `127.0.0.1:8765`: passed
- Raw `Invoke-WebRequest` checks for all eight representative routes: passed, 8 responses at HTTP 200
- Raw fallback check for all ten alcohol-case critical hosts: passed, all had initial fallback text
- Exact-value presence check against the raw alcohol-case response: passed
- Browser DOM check after JavaScript: passed, all ten hosts enhanced and all fallbacks retained
- Browser console check using error and warning levels: passed, empty result
- Browser responsive check at 390px: passed, no horizontal overflow
- Local internal-link check across 182 HTML files: passed, 2,920 local anchors checked and 0 broken
- JSON-LD parse check across 182 HTML files: passed, 285 blocks and 0 parse errors
- `git diff --check`: passed
- `git diff --cached --check`: passed
- Metadata drift check: passed, no diff in title, description, robots, canonical, hreflang, JSON-LD, sitemap, or redirect files
- `git ls-files -- edge-profile-proof-check`: 0 tracked entries
- `.gitignore` rule check: passed for `edge-profile-proof-check/`
- `.vercelignore` rule check: passed for `edge-profile-proof-check/`

## Security and test limitations

- No secret values or browser-profile file contents were inspected or printed
- The quarantine was preserved outside the repository; the Phase 0 report records only category-level path signals and aggregate size/count information
- Browser validation used the local HTTP server and the in-app browser DOM, screenshots, viewport measurements, and console logs
- The browser security policy rejected a `view-source:` navigation, so JavaScript-disabled behavior was verified from the raw HTTP response and source-level fallback checks rather than a browser toggle
- No production crawler, Google rendering service, Search Console, deployment target, analytics account, or external API was used
- Existing external font references remain unchanged; no external integration was introduced
- The validation does not prove Google’s production rendering behavior or future ranking/indexation outcomes

## Unresolved risks

- Other pages use decorative or interaction scripts whose content could become SEO-significant if those scripts are expanded later; they were not changed because the current source contains the important content in HTML
- The alcohol case’s embedded data is duplicated between the initial HTML and `app.js`; future data edits must update both representations or adopt a shared build-time source
- The raw fallback table is accessible and responsive through an overflow wrapper, but a dedicated browser-native JavaScript-disabled screenshot was unavailable under the local browser policy
- The site still has the pre-existing external font dependency and consent/analytics behavior; this phase did not change either

## Phase 3 recommendation

Stop after Phase 2 and review the rendering baseline before beginning Phase 3. Any future AI workflow or structured-data expansion should be separately scoped and must preserve the Phase 1 noindex decisions and the Phase 2 initial-HTML requirement.
