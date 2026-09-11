# Phase 1 indexation decision report

Date: 2026-09-01

Repository: C:\Users\roman\Documents\marksyte

Branch: codex/seo-ai-indexation

## Scope and conclusion

Phase 0 was confirmed complete before this review. The proof directory is outside the repository, its Git index entries are removed, and both ignore files contain the explicit edge-profile-proof-check/ exclusion.

Commit 4838172 intentionally changed exactly 18 service and case-study routes from index, follow to noindex, follow. The same commit added the dated retirement implementation record that classifies those 18 routes as a confirmed retired commercial cluster. The affected pages remain directly accessible, self-canonical, paired with reciprocal hreflang, omitted from the sitemap, and isolated from indexable internal content.

No affected route meets the safe restoration threshold in this phase. The current noindex treatment is retained for all 18 routes. No page, sitemap, robots, redirect, or vercel configuration change was required. This is a decision and verification phase, not a blanket restoration.

## Phase 0 confirmation

- Active branch: codex/seo-ai-indexation
- edge-profile-proof-check tracked entries: 0
- edge-profile-proof-check source directory: absent from the repository
- Quarantine directory: C:\Users\roman\Documents\marksyte-phase0-quarantine-2026-09-01\edge-profile-proof-check
- .gitignore explicit rule: present
- .vercelignore explicit rule: present
- Phase 0 quarantine contents preserved: 272 files and 16,072,846 bytes

## Initial repository state

- Initial branch: main
- Initial HEAD: e1b4d75 spanish-landing
- Initial status: clean and aligned with origin/main
- Initial tracked-file count: 685
- Recent commits inspected: e1b4d75, 3893196, 4838172, 9246dc0, ce42ff6
- Current noindex HTML count before Phase 1 changes: 18
- robots.txt allows crawling for all user agents and points to https://www.marksyte.com/sitemap.xml
- sitemap.xml contained 164 unique URLs
- vercel.json existed with outputDirectory . and 11 existing redirect rules; it was not changed

The baseline .gitignore contained .vercel, .env*, preview-*.png, outputs/, tmp/, and work/. The baseline .vercelignore also excluded .archive/, Markdown files, docs/, and the unpublished case-study draft. Phase 0 added edge-profile-proof-check/ to both files.

## GSC evidence

Source directory:

C:\Users\roman\Downloads\marksyte.com-Performance-on-Search-2026-08-26

All seven supplied CSV files were read and aggregated:

| Export | Rows | Clicks | Impressions | Notes |
| --- | ---: | ---: | ---: | --- |
| Páginas.csv | 79 | 4 | 578 | Page export total |
| Gráfico.csv | 9 | 4 | 536 | Daily chart export |
| Dispositivos.csv | 3 | 4 | 536 | Device breakdown |
| Países.csv | 63 | 4 | 536 | Country breakdown |
| Consultas.csv | 68 | 0 visible | 266 | Visible query rows only |
| Filtros.csv | 2 | — | — | Web; 18 ago 2026-26 ago 2026 |
| Aparición en búsquedas.csv | 0 | — | — | Empty data export |

The GSC limitations are material:

- The data covers only 18–26 August 2026
- 26 August may be incomplete
- The page export totals 578 impressions
- Chart, device, and country exports total 536 impressions
- The query export shows zero clicks in visible rows despite 4 total clicks elsewhere
- The query export must not be interpreted as proof that all queries had zero clicks

The five currently noindex URLs that appeared in the page export are explicitly flagged below:

| URL | Clicks | Impressions | Average position |
| --- | ---: | ---: | ---: |
| /es/servicios/estrategia-portfolio-travel-retail/ | 0 | 18 | 52.61 |
| /es/casos-de-estudio/estrategia-distribucion-travel-retail/ | 0 | 3 | 13.33 |
| /es/servicios/rgm-pricing/ | 0 | 2 | 55 |
| /es/servicios/activacion-travel-retail/ | 0 | 1 | 2 |
| /es/servicios/negociacion-compradores/ | 0 | 1 | 28 |

These impressions demonstrate historical search visibility, not current business approval to restore organic targeting. The route decision remains governed by the later documented retirement intent.

## Commit and route-migration findings

Commit 4838172 was committed on 2026-08-17 with the message SEO improvements. For every affected route, the parent commit had:

    index, follow, max-image-preview:large

The current version has:

    noindex, follow, max-image-preview:large

The commit added docs/seo/travel-retail-retirement-technical-implementation.md, which records:

- 18 Travel Retail commercial routes retired from organic targeting
- 18 pages given noindex, follow
- 0 URLs deleted
- 0 redirects created
- all 18 routes retained at their existing URLs
- self-canonicals and valid hreflang relationships preserved
- all 18 routes omitted from sitemap.xml

The 10 affected case-study pages also contain visible historical or earlier-analysis context. The eight affected service pages remain coherent Travel Retail data and decision-support pages, but the implementation record explicitly places them outside the current FMCG data-operations commercial architecture.

Earlier planning files from 2026-08-03 and 2026-08-05 described retaining some legacy routes as indexable pending evidence. Those plans predate the 2026-08-17 implementation record and are treated as superseded for this Phase 1 decision. Any reversal of the retirement policy requires an explicit business decision.

## 18-route indexation decision matrix

In the Canonical column, self means the exact https://www.marksyte.com URL in the URL column. Internal-link counts include anchor links from affected pages; the indexable inlink count is the relevant crawlability measure for this decision.

| URL | English or Spanish | Page type | Current robots directive | Current canonical | In sitemap | Internal-link status | GSC impressions | GSC clicks | GSC average position | Historical data available | Business purpose inferred from page content | Closest equivalent URL | Recommended action | Confidence | Approval required | Rationale |
| --- | --- | --- | --- | --- | --- | --- | ---: | ---: | ---: | --- | --- | --- | --- | --- | --- | --- |
| /services/buyer-negotiation/ | English | Service | noindex, follow | self | No | 0 indexable / 6 noindex | — | — | — | Repo history only | Legacy Travel Retail buyer-decision support; current site focus is FMCG data operations | /es/servicios/negociacion-compradores/ | Keep noindex, follow; retain access and self-canonical; omit sitemap; no redirect | High | No for preserving current decision | Explicitly included in confirmed 18-route retirement; no indexable inlinks |
| /services/rgm-pricing/ | English | Service | noindex, follow | self | No | 0 indexable / 6 noindex | — | — | — | Repo history only | Legacy Travel Retail pricing and margin support; outside current FMCG service architecture | /es/servicios/rgm-pricing/ | Keep noindex, follow; retain access and self-canonical; omit sitemap; no redirect | High | No for preserving current decision | Explicitly included in confirmed 18-route retirement; no indexable inlinks |
| /services/travel-retail-activation/ | English | Service | noindex, follow | self | No | 0 indexable / 6 noindex | — | — | — | Repo history only | Legacy Travel Retail activation planning and execution measurement | /es/servicios/activacion-travel-retail/ | Keep noindex, follow; retain access and self-canonical; omit sitemap; no redirect | High | No for preserving current decision | Explicitly included in confirmed 18-route retirement; no indexable inlinks |
| /services/travel-retail-portfolio-strategy/ | English | Service | noindex, follow | self | No | 0 indexable / 6 noindex | — | — | — | Repo history only | Legacy Travel Retail portfolio and assortment strategy | /es/servicios/estrategia-portfolio-travel-retail/ | Keep noindex, follow; retain access and self-canonical; omit sitemap; no redirect | High | No for preserving current decision | Explicitly included in confirmed 18-route retirement; no indexable inlinks |
| /es/servicios/negociacion-compradores/ | Spanish | Service | noindex, follow | self | No | 0 indexable / 6 noindex | 1 | 0 | 28 | GSC page row; 18–26 Aug 2026 | Legacy Travel Retail buyer-decision support; current site focus is FMCG data operations | /services/buyer-negotiation/ | Keep noindex, follow; retain access and self-canonical; omit sitemap; no redirect | High | No for preserving current decision | GSC visibility is recorded, but documented retirement and zero clicks do not support restoration |
| /es/servicios/rgm-pricing/ | Spanish | Service | noindex, follow | self | No | 0 indexable / 6 noindex | 2 | 0 | 55 | GSC page row; 18–26 Aug 2026 | Legacy Travel Retail pricing and margin support; outside current FMCG service architecture | /services/rgm-pricing/ | Keep noindex, follow; retain access and self-canonical; omit sitemap; no redirect | High | No for preserving current decision | GSC visibility is recorded, but documented retirement and zero clicks do not support restoration |
| /es/servicios/activacion-travel-retail/ | Spanish | Service | noindex, follow | self | No | 0 indexable / 6 noindex | 1 | 0 | 2 | GSC page row; 18–26 Aug 2026 | Legacy Travel Retail activation planning and execution measurement | /services/travel-retail-activation/ | Keep noindex, follow; retain access and self-canonical; omit sitemap; no redirect | High | No for preserving current decision | A strong historical position alone does not override the explicit retirement decision |
| /es/servicios/estrategia-portfolio-travel-retail/ | Spanish | Service | noindex, follow | self | No | 0 indexable / 6 noindex | 18 | 0 | 52.61 | GSC page row; 18–26 Aug 2026 | Legacy Travel Retail portfolio and assortment strategy | /services/travel-retail-portfolio-strategy/ | Keep noindex, follow; retain access and self-canonical; omit sitemap; no redirect | High | No for preserving current decision | Highest affected impression volume remains zero-click historical evidence under confirmed retirement |
| /study-cases/border-duty-free-commercial-strategy/ | English | Case study | noindex, follow | self | No | 0 indexable / 12 noindex | — | — | — | Repo history only | Historical border Duty Free commercial analysis; page explicitly says current focus is FMCG data operations | /es/casos-de-estudio/estrategia-comercial-duty-free-fronteras/ | Keep noindex, follow; retain access and self-canonical; omit sitemap; no redirect | High | No for preserving current decision | Visible historical context and no indexable inlinks support continued isolation |
| /study-cases/brand-relevance-distribution/ | English | Case study | noindex, follow | self | No | 0 indexable / 5 noindex | — | — | — | Repo history only | Earlier brand and distribution analysis; page explicitly says current focus is FMCG data operations | /es/casos-de-estudio/relevancia-marca-distribucion/ | Keep noindex, follow; retain access and self-canonical; omit sitemap; no redirect | High | No for preserving current decision | Visible earlier-analysis context and no indexable inlinks support continued isolation |
| /study-cases/energy-drinks/ | English | Case study | noindex, follow | self | No | 0 indexable / 4 noindex | — | — | — | Repo history only | Earlier energy-drinks category opportunity analysis; outside current commercial architecture | /es/casos-de-estudio/bebidas-energeticas/ | Keep noindex, follow; retain access and self-canonical; omit sitemap; no redirect | High | No for preserving current decision | Visible earlier-analysis context and no indexable inlinks support continued isolation |
| /study-cases/protein-rtd/ | English | Case study | noindex, follow | self | No | 0 indexable / 5 noindex | — | — | — | Repo history only | Earlier protein RTD market-entry analysis; outside current commercial architecture | /es/casos-de-estudio/proteina-rtd/ | Keep noindex, follow; retain access and self-canonical; omit sitemap; no redirect | High | No for preserving current decision | Visible earlier-analysis context and no indexable inlinks support continued isolation |
| /study-cases/travel-retail-distribution-strategy/ | English | Case study | noindex, follow | self | No | 0 indexable / 12 noindex | — | — | — | Repo history only | Historical Travel Retail distribution and account strategy; page explicitly says current focus is FMCG data operations | /es/casos-de-estudio/estrategia-distribucion-travel-retail/ | Keep noindex, follow; retain access and self-canonical; omit sitemap; no redirect | High | No for preserving current decision | Visible historical context and no indexable inlinks support continued isolation |
| /es/casos-de-estudio/estrategia-comercial-duty-free-fronteras/ | Spanish | Case study | noindex, follow | self | No | 0 indexable / 12 noindex | — | — | — | Repo history only | Historical border Duty Free commercial analysis; page explicitly says current focus is FMCG data operations | /study-cases/border-duty-free-commercial-strategy/ | Keep noindex, follow; retain access and self-canonical; omit sitemap; no redirect | High | No for preserving current decision | Visible historical context and no indexable inlinks support continued isolation |
| /es/casos-de-estudio/relevancia-marca-distribucion/ | Spanish | Case study | noindex, follow | self | No | 0 indexable / 5 noindex | — | — | — | Repo history only | Earlier brand and distribution analysis; page explicitly says current focus is FMCG data operations | /study-cases/brand-relevance-distribution/ | Keep noindex, follow; retain access and self-canonical; omit sitemap; no redirect | High | No for preserving current decision | Visible earlier-analysis context and no indexable inlinks support continued isolation |
| /es/casos-de-estudio/bebidas-energeticas/ | Spanish | Case study | noindex, follow | self | No | 0 indexable / 4 noindex | — | — | — | Repo history only | Earlier energy-drinks category opportunity analysis; outside current commercial architecture | /study-cases/energy-drinks/ | Keep noindex, follow; retain access and self-canonical; omit sitemap; no redirect | High | No for preserving current decision | Visible earlier-analysis context and no indexable inlinks support continued isolation |
| /es/casos-de-estudio/proteina-rtd/ | Spanish | Case study | noindex, follow | self | No | 0 indexable / 5 noindex | — | — | — | Repo history only | Earlier protein RTD market-entry analysis; outside current commercial architecture | /study-cases/protein-rtd/ | Keep noindex, follow; retain access and self-canonical; omit sitemap; no redirect | High | No for preserving current decision | Visible earlier-analysis context and no indexable inlinks support continued isolation |
| /es/casos-de-estudio/estrategia-distribucion-travel-retail/ | Spanish | Case study | noindex, follow | self | No | 0 indexable / 12 noindex | 3 | 0 | 13.33 | GSC page row; 18–26 Aug 2026 | Historical Travel Retail distribution and account strategy; page explicitly says current focus is FMCG data operations | /study-cases/travel-retail-distribution-strategy/ | Keep noindex, follow; retain access and self-canonical; omit sitemap; no redirect | High | No for preserving current decision | GSC visibility is recorded, but historical context and documented retirement support continued isolation |

## Routes changed

Only this Phase 1 report was added:

- docs/seo/phase-1-indexation-decision.md

No affected HTML file was changed. No changes were made to sitemap.xml, robots.txt, vercel.json, page content, SEO metadata, redirects, JavaScript rendering, structured data, performance files, or mobile navigation.

The following Phase 0 changes were pre-existing and preserved:

- .gitignore
- .vercelignore
- Git index removal of the quarantined edge-profile-proof-check/ entries

## Routes intentionally left unchanged

All 18 affected routes were intentionally left unchanged because the latest repository decision record explicitly retires them from organic targeting. Their treatment is internally consistent:

- noindex, follow remains on each page
- each page retains a self-referencing canonical
- each page remains absent from sitemap.xml
- each bilingual pair retains three hreflang links
- no indexable HTML page links to any affected route
- no redirect was added
- all pages remain accessible at their existing URLs

The five Spanish URLs with GSC page rows were not restored because the export shows zero clicks, the date window is short, and documented business intent is stronger evidence than impressions alone.

## Routes requiring approval

No approval is required to preserve the current documented retirement treatment.

An explicit business decision is required before changing any affected route to index, follow, adding it to the sitemap, or redirecting it. This applies especially to the five GSC-visible Spanish URLs, including /es/servicios/activacion-travel-retail/ with average position 2.

## Verification results

- Current HTML routes checked outside .archive/: 182
- Indexable routes: 164
- Noindex routes: 18
- Unexpected noindex routes: 0
- Affected routes missing noindex: 0
- Affected route canonical mismatches: 0
- JSON-LD blocks parsed: 285
- JSON-LD parse errors: 0
- Sitemap URLs: 164
- Sitemap duplicates: 0
- Sitemap URLs with a non-https://www.marksyte.com/ domain: 0
- Sitemap URLs pointing to noindex pages: 0
- Sitemap URLs without a matching local HTML route: 0
- Intended indexable routes missing from sitemap: 0
- Affected hreflang reciprocity errors: 0
- Internal anchors checked: 3,038
- Broken local anchors: 0
- Indexable inlinks to affected routes: 0
- JavaScript files syntax-checked: 8
- JavaScript syntax failures: 0
- git diff --check: passed
- git diff --cached --check: passed
- Deployment: not performed
- External systems contacted: none

## Security and evidence limitations

No external systems were contacted. GSC analysis used only the supplied local exports. No secret values were printed or copied.

Route-purpose analysis used current page titles, descriptions, headings, visible retirement context, repository documentation, and commit history. No backlink export, analytics landing-page export, or live deployment inspection was available.

The GSC exports are too short and internally scoped to establish durable demand. The query export is visibly incomplete for click attribution, so its zero visible clicks cannot be generalized.

## Unresolved risks

- The Phase 1 changes are not committed yet
- Older planning documents describe a different earlier treatment for some legacy routes and should be reconciled with the later retirement record in a future governance pass
- Existing Git history still contains the retired page files
- Existing deployed artifacts were not inspected
- A future business decision to reactivate a retired route will require coordinated robots, sitemap, internal-link, hreflang, and redirect review

## Exact commands and tests run

Repository and history:

    git branch --show-current
    git status --short --branch
    git log -5 --oneline --decorate
    git ls-files
    git show -s --format=fuller 4838172
    git show --format= --name-status --no-renames 4838172
    git show 4838172^:<affected route>

Configuration and route inspection:

    rg -n -i --glob '*.html' 'noindex|nofollow|index,\s*follow' .
    Get-Content sitemap.xml
    Get-Content robots.txt
    Get-Content vercel.json
    rg -n -i --glob '*.md' --glob '*.csv' '<affected route slugs>' .

GSC analysis:

    Import-Csv for Gráfico.csv, Páginas.csv, Consultas.csv, Dispositivos.csv, Países.csv, Filtros.csv, and Aparición en búsquedas.csv
    Aggregation of clicks, impressions, positions, row counts, and affected-page matches

Validation:

    git check-ignore -v --no-index -- edge-profile-proof-check/
    git diff --name-only
    git diff --cached --name-only
    git status --porcelain=v1 --untracked-files=all
    git diff --check
    git diff --cached --check
    node --check for each of 8 current JavaScript files
    Local HTML anchor resolution across 3,038 internal anchors
    JSON parsing for 285 application/ld+json blocks
    Sitemap uniqueness, domain, local-route, and noindex cross-checks
    Affected-route canonical and reciprocal hreflang cross-checks

## Phase 2 readiness

Phase 2 is safe to begin only for work that does not assume the 18 retired routes should be restored. The indexation baseline is internally consistent and the affected routes have no unresolved technical validation failures.

Phase 2 must not reactivate or redirect any of the 18 routes without the explicit business approval described above. No Phase 2 work was started in this task.
