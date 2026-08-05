# Marksyte Post-Pivot Audit Fixes

Created: 2026-08-03  
Status: Open  
Purpose: Actionable remediation checklist following the completed data-integration pivot audit

## Instructions for future Codex chats

Before changing the project:

1. Read `DATA_INTEGRATION_PIVOT_PLAN.md` completely.
2. Read this document completely.
3. Preserve `.archive/commercial-positioning-2026-08-03/` and all historical content.
4. Do not delete, redirect, noindex or retire a legacy URL without applying the SEO rules in the pivot plan.
5. Do not make a production deployment unless the user explicitly requests it.
6. Work on the requested remediation group only unless another change is required for correctness.
7. Update this checklist and the pivot plan before finishing.
8. Leave unrelated user changes untouched.

Suggested prompt for a new chat:

> Read `DATA_INTEGRATION_PIVOT_PLAN.md` and `POST_PIVOT_AUDIT_FIXES.md` completely. Work on remediation group [number/name]. Preserve the historical archive and existing URLs. Implement the fixes, validate them, and update both documents with the result. Do not deploy to production.

## Audit conclusion

The core pivot is successful. The active homepage, service architecture, visual language, case-study direction and mobile layout communicate the data-standardization, integration and reconciliation proposition clearly.

The transition should not be considered fully complete until the release blockers below are resolved or explicitly accepted as deferred decisions.

Audit baseline:

- 120 active HTML pages inspected.
- 102 URLs currently included in `sitemap.xml`.
- 18 legacy service/case pages remain public and indexable but are omitted from the sitemap.
- 43 blog article files retain an explicit promotional Marksyte section.
- 36 wrong-locale internal links were found across 7 new or rebuilt Spanish pages.
- 2 broken in-page fragment links were found.
- Core HTML structure, metadata and JSON-LD passed parsing checks.
- No duplicate titles or canonical URLs were detected.
- All local page and asset targets exist.
- Sampled key pages passed 375px horizontal-overflow checks.
- The homepage rendered without browser console errors.

## Remediation group 1: Protect the pivot in version control

Priority: P1 / release blocker  
Status: Open

### Problem

The pivot currently exists only in the working tree:

- `.archive/` is untracked.
- `DATA_INTEGRATION_PIVOT_PLAN.md` is untracked.
- `BLOG_CONTENT_MATRIX.md` is untracked.
- `CASE_STUDY_MATRIX.md` is untracked.
- `SEO_ROUTE_MIGRATION_MATRIX.md` is untracked.
- The eight new service directories are untracked.
- The bilingual flagship reconciliation case directories are untracked.
- Existing pivot files are modified but uncommitted.
- Current `HEAD` still predates the transition.

This means a cleanup, branch change or accidental discard could remove the recovery archive and new files.

### Required work

- Review `git status` and the complete diff.
- Confirm `.archive/` contains no browser profiles, secrets, credentials, analytics exports or unintended large files.
- Confirm `.vercelignore` excludes `.archive/`.
- Stage the intended pivot files only.
- Create a deliberate pivot commit if the user authorizes committing.
- Do not push unless the user explicitly requests it.

### Acceptance criteria

- Every intended pivot and archive file is tracked by Git.
- No secrets, temporary files, browser data or unrelated user files are committed.
- The working tree contains no unexplained pivot changes.
- The archive remains excluded from deployment.

### Completion record

- Files reviewed:
- Commit created:
- Commit hash:
- Validation:
- Remaining issues:

## Remediation group 2: Repair Spanish locale navigation

Priority: P1 / release blocker  
Status: Complete

### Problem

Thirty-six internal links across seven Spanish pages resolve to English routes. The most common errors are excessive `../` segments in links to the homepage, services anchor, About and contact anchor.

Affected pages:

- `es/servicios/estandarizacion-datos/index.html`
- `es/servicios/mapeo-integracion-datos/index.html`
- `es/servicios/conciliacion-datos/index.html`
- `es/servicios/gestion-analisis-datos/index.html`
- `es/blog/index.html`
- `es/casos-de-estudio/index.html`
- `es/casos-de-estudio/conciliacion-datos-fmcg/index.html`

Examples:

- From `/es/servicios/conciliacion-datos/`, `../../../about/` resolves to `/about/` instead of `/es/about/`.
- From `/es/blog/`, `../../` resolves to `/` instead of `/es/`.
- From `/es/casos-de-estudio/`, `../../#contact` resolves to `/#contact` instead of `/es/#contact`.
- The Spanish standardization service links to the English carbon-data article even though a Spanish counterpart exists.

### Required work

- Keep ordinary navigation on Spanish pages within `/es/`.
- Use English routes only for the explicit EN language switch or genuinely English-only content.
- Correct header, breadcrumb, contextual, CTA and related-reading links.
- Review footer links while editing, even where they currently resolve correctly.
- Preserve the intentional link from the Spanish case index to the English-only EES case unless a Spanish counterpart is created.
- Point the Spanish standardization service to:
  - `/es/blog/huella-carbono-dato-producto-travel-retail/`
- Verify every repaired link through URL resolution, not only filesystem existence.

### Acceptance criteria

- Spanish logo/home links resolve to `/es/`.
- Spanish Services links resolve to `/es/#services`.
- Spanish About links resolve to `/es/about/`.
- Spanish Contact links resolve to `/es/#contact`.
- Spanish Blog links resolve to `/es/blog/`.
- Spanish Case studies links resolve to `/es/casos-de-estudio/`.
- Spanish related-reading links use Spanish counterparts where one exists.
- Only language switches and documented language exceptions lead to English routes.
- Browser navigation from each affected page confirms the correct locale.
- No local target or fragment is broken.

### Completion record

- Files changed: 7 affected Spanish pages listed above.
- Wrong-locale links before: 36
- Wrong-locale links after: 0 in the affected pages.
- Browser checks: URL-resolution audit passed for all seven pages; local targets and fragments resolved. No production or preview deployment performed.
- Remaining language exceptions: Spanish case index retains the intentional link to the English-only EES case; explicit EN language switches remain English.

## Remediation group 3: Decide the public treatment of legacy commercial pages

Priority: P1 / release decision  
Status: Complete — retain and reframe in place

### Problem

Eighteen legacy pages are excluded from the sitemap but remain publicly reachable with `index, follow` and self-referencing canonical URLs. Search engines can continue showing the old Travel Retail sales, negotiation, activation, pricing, portfolio and category proposition.

The affected group consists of:

- 8 legacy service pages: 4 English and 4 Spanish.
- 10 legacy case-study pages: 5 English and 5 Spanish.

Their source is already preserved under `.archive/commercial-positioning-2026-08-03/`.

### Required decision process

For each route or bilingual pair, select one treatment:

1. **Retain and index**
   - Use when the content still supports the business and search intent.
   - Consider reframing or adding a legacy-context note.
   - Include in the sitemap if it remains an intentional indexed page.
2. **Retain temporarily but unlist**
   - Use only as a documented transition state.
   - Understand that omission from the sitemap does not remove it from Google.
3. **Reframe at the same URL**
   - Use when search intent and the new proposition can genuinely coexist.
4. **301 redirect**
   - Use only when a genuinely equivalent replacement exists.
   - Do not redirect unrelated pages to the homepage.
5. **Noindex temporarily**
   - Use cautiously when a page must remain reachable but should leave search results.
   - Review canonical and internal-link treatment at the same time.
6. **410 retirement**
   - Use only for deliberately retired material with no valid replacement.

### Evidence required

- Search Console impressions and clicks, if available.
- Analytics landing-page activity, if available.
- Backlink evidence.
- Search intent and replacement equivalence.
- Current relevance to the data proposition.

### Affected legacy services

- `/services/travel-retail-portfolio-strategy/`
- `/services/rgm-pricing/`
- `/services/travel-retail-activation/`
- `/services/buyer-negotiation/`
- `/es/servicios/estrategia-portfolio-travel-retail/`
- `/es/servicios/rgm-pricing/`
- `/es/servicios/activacion-travel-retail/`
- `/es/servicios/negociacion-compradores/`

### Affected legacy case-study pairs

- Travel Retail distribution strategy
- Border Duty Free commercial strategy
- Brand relevance and distribution
- Energy drinks category opportunity
- Protein RTD market-entry/category case

See `SEO_ROUTE_MIGRATION_MATRIX.md` and `CASE_STUDY_MATRIX.md` for exact bilingual paths.

### Acceptance criteria

- Every legacy route has an explicit, evidence-backed treatment.
- Sitemap, robots directives, canonical URLs, redirects and internal links agree with that treatment.
- No unrelated redirect points to the homepage.
- Every redirect destination is a genuine semantic replacement.
- The archive continues to preserve the original content.
- The route matrix records final decisions and validation.

### Completion record

- Evidence reviewed: Owner decision to preserve existing indexed, working URLs; no retirement or redirect requested.
- Routes retained: All 18 legacy service and case-study routes.
- Routes reframed: All 18 routes; SEO titles, descriptions, H1s and service hero framing now make data and operational signals primary while preserving the original topics as secondary context.
- Redirects added: None.
- Routes noindexed: None.
- Routes retired: None.
- Sitemap changes: None; legacy routes remain indexable and reachable but stay outside the sitemap pending future evidence-based review.
- Validation: All 18 routes retain `index, follow`, self-canonical metadata, existing URLs and no direct redirect source. Sitemap and `vercel.json` checks passed.

## Remediation group 4: Complete the neutral blog reframing

Priority: P1 for proposition consistency; may be delivered in batches  
Status: Complete — remaining promotional sections reframed

### Problem

The rebuilt blog indexes are neutral and search-oriented, but 43 individual article files still contain explicit promotional sections such as:

- `How Marksyte can help`
- `Cómo puede ayudar Marksyte`

Several are featured on the active blog indexes and included in the sitemap. This causes visitors to move from a neutral index back into the old promotional editorial model.

The issue is broader than exact section titles. All remaining articles should be reviewed for:

- Sales-leader framing
- Buyer and negotiation language
- Repeated commercial opportunity sections
- Direct service pitches
- Hard contact CTAs
- Old suggested-reading labels
- Artificially forced data framing

### Required work

- Use `BLOG_CONTENT_MATRIX.md` as the inventory.
- Update the matrix with a clear status for every pair.
- Reframe the remaining High-fit pairs first:
  - Zurich passenger growth versus sales performance
  - More seats versus passengers
  - Agentic AI and structured information
  - Any other High-fit pair still marked pending
- Then review Medium- and Low-fit pairs without forcing a data angle.
- Preserve established URLs, primary search intent, citations and factual content.
- Replace promotional sections with neutral operational, data or measurement implications where credible.
- Use one restrained related-capability reference near the end when genuinely relevant.
- Do not add a hard contact CTA to every article.
- Preserve EN/ES semantic equivalence.
- Check date-sensitive claims and sources before rewriting conclusions.

### Standard article structure

1. Search-led question or market development
2. What is happening
3. Why it is happening
4. Operational implications
5. Data requirements or measurement considerations
6. Risks, limitations and unresolved questions
7. Sources and methodology
8. Optional restrained related-capability reference

### Acceptance criteria

- Every article pair has a recorded final treatment and status.
- No active article retains an unreviewed `How Marksyte can help` equivalent.
- Articles remain useful without reading like service landing pages.
- Search topics and URLs remain stable unless a documented SEO decision requires otherwise.
- Service references are contextual and restrained.
- No unsupported or artificial data angle is introduced.
- EN/ES versions communicate equivalent meaning.
- Sources, FAQs, citations, canonicals and `hreflang` remain valid.

### Completion record

- Article pairs reviewed: 36 matrix pairs; 27 pairs contained the remaining promotional sections.
- Article pairs reframed: 27 pairs / 54 files.
- Article pairs retained unchanged: 9 pairs without a remaining promotional section; existing neutral or independent editorial treatment preserved.
- Article pairs archived/retired: None.
- Explicit promotional sections before: 54 files in the current working-tree inventory; the audit baseline recorded 43.
- Explicit promotional sections after: 0 promotional headings or opening sales pitches in blog articles.
- Source-freshness issues: Date-sensitive claims remain flagged for a later source review; no source or primary search topic was changed in this batch.
- Validation: Existing URLs, anchors, local links and EN/ES pair relationships preserved; all remaining `#marksyte` TOC labels now match their neutral section headings.

## Remediation group 5: Update legal descriptions

Priority: P2  
Status: Complete

### Problem

The legal notices still describe the old business:

- `legal/index.html`: “growth consulting services”
- `es/aviso-legal/index.html`: “servicios de consultoría de crecimiento”

The English legal navigation also uses the old label “Offers.”

### Required work

- Update the business-description paragraph in both languages.
- Keep the wording factual and appropriately broad.
- Do not introduce claims or contractual promises not supported elsewhere.
- Replace “Offers” with “Services” on English legal/privacy/cookie navigation if consistent with the active site.
- Review the privacy description only for terminology consistency; do not alter legal meaning unnecessarily.

Suggested neutral description:

> Marksyte publishes information about data standardization, mapping, integration, reconciliation, managed data operations and analysis, together with practical articles and illustrative case studies.

Spanish working equivalent:

> Marksyte publica información sobre servicios de estandarización, mapeo, integración, conciliación, gestión operativa y análisis de datos, junto con artículos prácticos y casos ilustrativos.

Legal wording should receive owner review before production release.

### Acceptance criteria

- English and Spanish legal descriptions reflect the active proposition.
- Legal navigation uses current site terminology.
- Privacy and cookie behavior remain unchanged unless an actual legal requirement is identified.
- Legal routes, canonicals and language links still resolve.

### Completion record

- Files changed: `legal/index.html`, `es/aviso-legal/index.html`, `privacy/index.html`, `cookies/index.html`
- Wording approved: Working wording applied; owner/legal review remains required before production release.
- Validation: English and Spanish legal routes, language links and local navigation targets checked; privacy and cookie content otherwise unchanged.

## Remediation group 6: Repair broken article fragments

Priority: P2  
Status: Complete

### Problem

Two table-of-contents links point to `#visuals`, but neither target page contains an element with `id="visuals"`.

Affected files:

- `blog/generational-shopping-differences-travel-retail/index.html`
- `es/blog/diferencias-generacionales-compra-travel-retail/index.html`

### Required work

- Either restore a meaningful visuals section with `id="visuals"`, or remove the table-of-contents entry.
- Make the same semantic decision in both languages.
- Run a fragment-target audit across all active HTML pages afterward.

### Acceptance criteria

- Every local fragment link resolves to an existing `id`.
- EN/ES article navigation remains equivalent.
- No unrelated article content is changed.

### Completion record

- Decision: Remove both obsolete `Suggested visuals` / `Propuestas visuales` table-of-contents entries.
- Files changed: `blog/generational-shopping-differences-travel-retail/index.html`; `es/blog/diferencias-generacionales-compra-travel-retail/index.html`
- Missing fragments before: 2
- Missing fragments after: 0
- Validation: Active-site audit checked 144 HTML pages and 1,052 fragment links; all resolved.

## Remediation group 7: Correct project documentation and status

Priority: P2  
Status: Complete

### Problem

`DATA_INTEGRATION_PIVOT_PLAN.md` line 4 still says:

> Status: Approved direction; implementation not yet started

This conflicts with Phases 1–9 being recorded as complete and Phase 10 being in progress.

`README.md` also omits:

- The new value proposition
- The eight new bilingual service routes
- The flagship reconciliation case
- The archive and preservation policy
- The content and SEO matrices
- Current release status
- Updated routes to verify

### Required work

- Update the pivot-plan header to reflect the actual status.
- Keep Phase 10 marked pending until preview review and release decisions are complete.
- Update `README.md` with the current site description and route structure.
- Link to the pivot plan and this audit checklist.
- Document that `.archive/` is retained in Git and excluded from Vercel.
- Preserve the static-site deployment instructions where still accurate.

Suggested plan status until preview/release is complete:

> Status: Pivot implemented locally; remediation and external preview review pending

### Acceptance criteria

- The plan header matches phase status.
- README describes the data-integration proposition.
- New services and flagship case are included in verification routes.
- Archive and handoff documents are discoverable.
- No documentation claims that production deployment is complete unless it actually occurred.

### Completion record

- Files changed: `DATA_INTEGRATION_PIVOT_PLAN.md`, `README.md`
- New status: Pivot implemented locally; remediation and external preview review pending.
- Validation: README now documents the active proposition, service routes, flagship case, archive policy, matrices and current release state.

## Remediation group 8: Remove duplicate text-link arrows

Priority: P3 / polish and accessibility  
Status: Complete

### Problem

CSS adds `->` through `.text-link::after`, while 50 `.text-link` anchors already contain `→` or `&rarr;` in their text.

This can produce visible or accessible labels such as:

> Meet the team → ->

The largest concentrations are the English and Spanish blog indexes.

Relevant CSS:

- `styles.css`, `.text-link::after`

### Required work

Choose one consistent arrow strategy:

- Preferred: keep the CSS-generated arrow and remove literal arrows from `.text-link` contents.
- Alternative: remove the generated arrow and retain semantic text arrows everywhere.

Do not change arrows on `.button.primary` unless deliberately reviewing that component separately.

### Acceptance criteria

- No `.text-link` displays or exposes two arrows.
- Link labels remain understandable without visual decoration.
- Hover behavior remains intact.
- English and Spanish blog cards remain visually aligned.

### Completion record

- Strategy selected: Keep the CSS-generated arrow and remove literal arrows from `.text-link` contents.
- Literal-arrow text links before: 50
- Literal-arrow text links after: 0
- Files changed: Active HTML text links containing literal arrows; CSS unchanged.
- Browser validation: Static HTML audit passed; no production or preview deployment performed.

## Remediation group 9: Clarify analytics event semantics

Priority: P3 / measurement quality  
Status: Complete for approved email-only scope

### Problem

`analytics.js` emits `generate_lead` when:

- A visitor clicks a Calendly link.
- A valid discovery form opens an email draft.

Neither action proves that a meeting was booked or an email was sent. Reporting these as generated leads may overstate actual conversions.

### Required decision

Choose an event model that distinguishes intent from completed outcomes.

Possible approach:

- Calendly link click: `contact_intent` or `calendly_open`
- Email-draft opening: `contact_draft_open`
- Direct email click: `contact_email_click`
- Confirmed Calendly booking: `generate_lead`, captured through a supported booking-completion integration if available

Continue sending only privacy-minimal context. Never send form contents to analytics.

### Acceptance criteria

- Event names accurately describe the measured action.
- Reports distinguish intent from completed lead outcomes.
- Analytics remains consent-gated.
- No contact-form contents or personal information are transmitted.
- Existing cookie controls continue to work.

### Completion record

- Event model selected: Valid discovery-form submission emits `contact_draft_open`; direct `mailto:` links continue to emit `contact_email_click`.
- Files changed: `analytics.js`
- Consent validation: Existing consent gate remains in place; events are emitted only when analytics has been loaded after consent.
- Analytics validation: JavaScript syntax passed; only `form_id`, `method` and `page_path` are sent for the email-draft event. Form contents and personal information are not transmitted.
- Scope note: Calendly event semantics were intentionally left unchanged per the approved email-only decision.

## Remediation group 10: Final preview and release review

Priority: P1 after remediation  
Status: Pending completion of preceding release blockers

### Required work

- Run JavaScript syntax checks.
- Parse all active JSON-LD blocks.
- Validate titles, descriptions, H1s, canonicals and `hreflang`.
- Validate every local page, asset and fragment target.
- Validate sitemap XML and every sitemap target.
- Validate `vercel.json`.
- Confirm `.archive/` is not in the deployment output.
- Check English and Spanish navigation behavior.
- Test homepage, blog, service, case, legal and article templates on desktop and mobile.
- Verify contact, email-draft, Calendly and cookie controls without sending personal information.
- Deploy to a preview environment only when authorized.
- Review preview before any production release.

### Minimum browser sample

- `/`
- `/es/`
- `/about/`
- `/es/about/`
- `/blog/`
- `/es/blog/`
- One new EN service
- One new ES service
- New EN flagship case
- New ES flagship case
- One reframed EN article
- One reframed ES article
- English legal/privacy/cookie pages
- Spanish legal/privacy/cookie pages
- Any retained or redirected legacy route

### Acceptance criteria

- No unresolved P1 finding remains.
- No wrong-locale navigation remains.
- No broken local page, asset or fragment link remains.
- Sitemap and indexability decisions are internally consistent.
- Archive content is not deployed.
- No browser console errors appear on representative templates.
- Mobile pages do not overflow horizontally.
- Contact and consent behavior work as documented.
- Preview deployment is reviewed and approved before production.

### Completion record

- Automated checks:
- Browser checks:
- Preview URL:
- Preview reviewed by:
- Remaining accepted risks:
- Production release authorized:

## Recommended execution order

1. Repair Spanish locale navigation.
2. Update legal and project documentation.
3. Repair broken fragments and duplicate arrows.
4. Decide analytics semantics.
5. Continue blog reframing in controlled batches.
6. Obtain SEO evidence and decide legacy route treatment.
7. Review and commit the complete pivot and archive.
8. Run full validation and create an authorized preview deployment.
9. Review preview before production.

Version-control protection is listed seventh only because the content diff should ideally be reviewed after remediation. If there is any risk of losing work, create a temporary preservation commit or branch earlier with explicit user authorization.

## Final completion checklist

- [ ] Historical archive is tracked and recoverable.
- [ ] Spanish locale navigation is correct.
- [ ] Every legacy public route has an explicit SEO treatment.
- [ ] Every blog article pair has a final editorial treatment.
- [ ] No unreviewed promotional blog section remains.
- [ ] Legal descriptions match the active proposition.
- [ ] No broken fragment link remains.
- [ ] Pivot plan and README show the current status.
- [ ] Duplicate text-link arrows are removed.
- [ ] Analytics events distinguish intent from confirmed outcomes.
- [ ] Sitemap, canonical, `hreflang`, robots and redirects agree.
- [ ] Archive content is excluded from deployment.
- [ ] Desktop and mobile QA pass.
- [ ] External preview is reviewed.
- [ ] Production release is explicitly authorized.

## Audit history

### 2026-08-03

- Completed a read-only source and browser audit of the local pivot.
- Confirmed the central data-integration repositioning is coherent and visually functional.
- Identified the release blockers and remediation groups recorded above.
- No implementation files were changed during the audit.
- This checklist was created as the only project change following the audit.
