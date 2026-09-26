# CUNY Library Services — Design System

The design system for the **CUNY Office of Library Services (OLS)**, the central office that runs shared library systems, licences, and infrastructure for the City University of New York's 26 colleges and 31 libraries.

---

## 1. Context

### What OLS Is
OLS is a central administrative office, not a campus library. Its audiences are, in rough order of volume:

1. **CUNY library staff** — catalogers, acquisitions and e-resources staff, systems librarians. They read documentation, FAQs, and service notices, and work daily in Alma and Primo VE.
2. **Campus faculty, students, and staff** — they encounter OLS mainly through OneSearch and centrally licensed databases.
3. **Vendors and external partners** — Ex Libris/Clarivate, GOBI, EBSCO. Support cases and configuration requests.

### Products and Surfaces Represented Here
| Surface | What it is | Kit |
|---|---|---|
| **OLS public website** | Service overview, hero search, "For librarians" section. Lives under `cuny.edu/about/administration/offices/library-services/`. | `ui_kits/ols_website/` |
| **Technical Services knowledge base** | Staff-facing FAQ. Runs on Springshare LibAnswers at `cuny-ols.libanswers.com`. | `ui_kits/knowledge_base/` |
| **CUNY OneSearch** | Discovery layer. Ex Libris **Primo VE**, one view per campus (`01CUNY_HC:CUNY_HC` etc.), backed by **Alma** with a Network Zone plus per-campus institution zones. | `ui_kits/onesearch/` |

Adjacent systems OLS staff work in, which shape the vocabulary and the data patterns in these kits: Alma, Primo VE, CDI, Alma Analytics, Academic Works (repository), CLICS (intercampus borrowing), the Clarivate support portal.

### Sources Given to Me
**Supplied by the user (in `uploads/`, copied to `assets/logos/`):**
- `CUNY Library Services RGB.png` / `.pdf` — the primary lockup
- `CUNY Library Services CMYK.png` / `.pdf`
- `CUNY Library Services PANTONE.pdf`
- `CUNY Library Services BLACK.png` / `.pdf`
- `CUNY Library Services WHITE.png` / `.pdf`

**Also supplied by the user — and the authoritative source for all colour and type in this system:**
- `Colors - The City University of New York.pdf` — CUNY Office of Communications & Marketing, University Identity > Colors. Full primary / secondary / neutral / accent palettes with PMS, CMYK, RGB and hex breakdowns, the published accessible-combination set, and the do's and don'ts.
- `Typography - The City University of New York.pdf` — CUNY Office of Communications & Marketing, University Identity > Typography.
- `Alma help documentation series.pdf` and `OLS Systems overview document.pdf` — two real OLS handouts, US Letter portrait. Rebuilt as the two entries in `templates/`; their structure, copy, and link targets are the source for those templates.
- `Handbook_-_FAQ.docx` — **LibAnswers FAQ Handbook**, CUNY OLS Systems. The authoritative editorial style guide for the public knowledge base. Transcribed to `guidelines/kb-style-guide.md`. Scoped to LibAnswers entries; the parts it states as applying to "all documentation" are reflected in Content fundamentals.

Every colour token in `tokens/colors.css` is a hex value copied from that colour PDF. **Colours are not sampled from the logo files and not derived.** The guideline is explicit: *"Eyeball or guess at a specific color"* is a don't.

**One conflict worth knowing about.** The supplied OLS lockup files were built to an older CUNY Blue — pixel-sampling the RGB PNG gives **#1D3A83**, and the PANTONE PDF names its two spot colours `PANTONE 286 C` and `PANTONE Cool Gray 9 C`. The current University standard for PMS 286 C is **#0033A1**, and Cool Gray 9 C is **#76777A** (Pewter). This system uses the current standard. The logo assets are shipped as supplied because they are the only approved OLS lockup, but **they will look slightly off against brand-blue UI**. Worth requesting an updated lockup from Communications & Marketing.

**Not supplied, and therefore absent:**
- No SVG or EPS logo — the mark is raster PNG plus print PDF only.
- No OLS website code, Figma file, or screenshots.
- No Primo VE or LibAnswers theme files.
- No icon set, illustration library, photography, or slide template.

**What that means for the UI kits:** they are *brand-consistent constructions*, not pixel recreations. Each kit's README says so explicitly. Information architecture follows the real products; visual treatment is derived from CUNY brand rules.

---

## 2. Content Fundamentals

The register is **plain institutional prose written by librarians for librarians**. It reads like good documentation, not like marketing.

Two levels of authority below. **Verified** items come from a supplied OLS document or from published CUNY/OLS copy, and are quoted. **Inferred** items are my extrapolation and should be treated as provisional.

### Verified — OLS *LibAnswers FAQ Handbook*
Supplied as `Handbook_-_FAQ.docx`. Full transcription in [`guidelines/kb-style-guide.md`](guidelines/kb-style-guide.md). It is scoped to LibAnswers KB entries, but three parts are stated as applying to "all documentation" and are treated as general here.

- **Vendor and product names are standardised.** Alma (not ALMA) · EBSCO (not Ebsco) · EZproxy (not Ezproxy or EZProxy) · Ex Libris (not ExLibris), **ExL** after first reference · GOBI (not Gobi) · ILLiad (not Illiad or ILLIAD) · Library of Congress or **LC** after first reference (not LOC or LoC) · MARC 21 (not MARC21) · MMS ID (not MMSID) · Primo VE (not PRIMO VE) · ProQuest (not Proquest) · XML (not xml). DLC is the OCLC symbol for the Library of Congress.
- **Interface references have a fixed grammar.** Non-actionable areas go in "quotation marks"; actionable controls go in **bold**; click paths use right-pointing angled brackets: *In **Discovery** > "Views Configuration": **Configure Views**, click on the **…** (ellipsis) next to the view name and select **Edit**.*
- **Link text is descriptive, never "Click here."** The handbook's example: *"Fill out the staff account request form"* rather than *"Click here"* — for screen reader users and for context about the destination.
- **Structure with short paragraphs, bullet lists, and proper heading styles**, explicitly for readability and accessibility.
- **Never use blank lines between sections.** The handbook's reason: they cause screen readers to announce "blank". Spacing belongs to the styles, not to empty paragraphs.
- **Consistent font size and colour throughout.** Do not restyle individual passages.

### Verified — Published CUNY and OLS Copy
- **Second person for the reader, first-person plural for the office.** *"You can use CUNY OneSearch to search across the CUNY catalog and most of our electronic resources."* (guides.cuny.edu/libraries/faq) · *"We collect and provide open access to faculty articles, student dissertations, OER materials, reports and other research from all CUNY campuses."* (cuny.edu Library Services). Never "I".
- **Declarative and unhedged.** *"OneSearch lets you search in one place for books, articles, DVDs, and more."* No "empowers", "unlocks", "seamlessly".
- **Name the exception.** OLS copy is unusually careful about edge cases, because staff get burned by them: *"There are a few exceptions—some libraries have licenses to databases that only allow use for their own students; these are a small exception, though, and not the rule."* (guides.cuny.edu/libraries/faq). Footnote real exceptions rather than smoothing them away.
- **The few real numbers.** 26 colleges, 31 libraries, *"26 Colleges. One University."* No invented statistics.
- **AP Stylebook is the authority** for grammar and punctuation across CUNY campus writing, per the CCNY style guide, with Strunk & White as a secondary reference.

### Inferred — Provisional, Not From a Supplied Source
These are my extrapolations from how technical-services documentation generally works plus the systems vocabulary in this project. **No OLS document confirms any of them.** An OLS editorial style guide would settle them.

- **Front-load the answer.** In FAQs, the first sentence answers the question; procedure follows in a numbered list.
- **Say who can do it.** Staff instructions name the required Alma role or scope: *"Requires an Alma account with Cataloger or Catalog Manager role in your institution zone."*
- **Serial numbers in mono.** MMS IDs, barcodes, call numbers, MARC tags, API paths, institution codes and view IDs render in `--font-mono`, never in the sans face.
- **Error strings verbatim.** `ROUTING_ERROR`, `DAILY_THRESHOLD`, HTTP 429 — quoted exactly as the system emits them so staff can match by sight.
- **Body paragraphs of 2–4 sentences**, capped at `--measure-prose` (68ch). Card body copy one or two sentences.
- **Verb-first button labels:** "Place request", "View online", "Open in Alma". Not "Submit", not "Click here". (The "Click here" half of this *is* verified — see above.)
- **No emoji**, in UI or documentation. **No exclamation marks** outside a genuine congratulation. **No rhetorical questions as headings**, no "this, not that" constructions.
- **Dates** as "12 Aug 2026" in UI metadata, "12 August 2026" in prose.

### Heading case — title case
**Headings and titles are title case.** Confirmed against the FAQ Handbook's own headings ("Vendor and Product Name Standardization", "Interface Elements and Navigation Formatting") and set as the rule by OLS.

Applies to: page and section headings (H1–H4), card titles, tab labels, table captions, dialog titles, and the names of specimen cards.

**Stays sentence case**, because these are prose rather than headings:
- Body copy, hints, captions, and lead paragraphs.
- **Alert and toast messages** — "Alma maintenance Sunday 07:00–11:00 ET", "Set exported to Alma (1,204 records)".
- **Empty-state and error messages** — "No results for 'antikythera mechanism'".
- **Verbatim FAQ questions.** A question is quoted as the reader would ask it and is never re-cased: "How do I fix a miscoded 852 first indicator?"
- **Button labels**, which are verb phrases: "Place request", "View online".
- Vendor and product names, which follow the standardised forms regardless of position.

## 3. Visual Foundations

### Colour
CUNY publishes a large palette with strict proportion rules. The rules matter more than the swatch count: *"a little of this palette goes a long way."*

**Primary — roughly 50% of any design.**

| | Name | Hex | PMS |
|---|---|---|---|
| | **CUNY Blue** | `#0033A1` | 286 C |
| | **Taxi** | `#FFB71B` | 1235 C / 122 U |

**CUNY Blue must appear on every design.** Omitting it is an explicit don't. Taxi is a co-primary, not an accent — it carries emphasis (the hero rule and eyebrow, key highlights) and Taxi-on-CUNY-Blue is one of the published AA pairs.

**Secondary — support and visual interest, in moderation.** Indigo `#011D49` (2768 C) · Azure `#1F5CFF` (285 C) · Deep Cyan `#00AFEF` (305 C) · Sky `#A3C9FF` (7451 C) · Lemonade `#FFEE1D` (803 C) · Cream `#FFFCD5` (9141 C).

In this system: **Indigo** is the deep ground (footer, toast, tooltip, dialog scrim) and the heading colour. **Azure** is the focus-ring colour. **Sky** is reversed secondary copy on blue.

**Neutral — warm, not blue-grey.** Pearl `#F7F4EB` (9060 C) · Dove `#D8D7D6` (Cool Gray 1 C) · Slate `#688197` (2165 C) · Pewter `#76777A` (Cool Gray 9 C) · Charcoal `#383838` (Black 7 C) · Ochre `#C89210` (1245 C) · Umber `#896B25` (1265 C).

This is the biggest departure from a generic system: **the neutral family is warm.** `--surface-sunken` is **Pearl**, not a cool grey. Body text is **Charcoal**, borders are **Dove**, muted text is **Pewter**, captions are **Slate**. Nothing in the UI uses a blue-grey.

**Accent — highlights only. Never a primary colour in a design.** Strawberry `#EA0045` · Cranberry `#BF0D3E` · Hot Pink `#E81F75` · Bubble Gum `#FF9CCD` · Blush `#FFDCEE` · Coral `#FF7370` · Salmon `#FFCBCA` · Grape `#510C76` · Lilac `#9A3CB0` · Thistle `#DEC2EB` · Sea Green `#005C5A` · Liberty `#45C2B1` · Mint `#B5EBD8` · Chartreuse `#C2D500`.

**Status is expressed with published colours only** — no invented semantic hues:

| Status | Mark | Text | Tint |
|---|---|---|---|
Success | Sea Green `#005C5A` | Sea Green | Mint `#B5EBD8` |
Warning | Ochre `#C89210` | Umber `#896B25` | Cream `#FFFCD5` |
Danger | Cranberry `#BF0D3E` | Cranberry | Salmon `#FFCBCA` |
Info | CUNY Blue `#0033A1` | CUNY Blue | `--blue-50` |

Warning splits mark from text on purpose: Ochre does not reach AA on white at body size, so **Umber carries warning text and Ochre carries the icon or rule**.

**Accessibility.** CUNY publishes an AA-compliant combination set (see the two "Accessible pairs" cards). Any text/background pairing outside it needs checking against WCAG 2.1 AA before use.

**Working scales.** `--blue-*` and `--gray-*` exist so hover, disabled, and hairline states are possible. Published colours sit at named steps — `--blue-700` **is** CUNY Blue, `--blue-900` **is** Indigo, `--blue-500` **is** Azure, `--blue-300` **is** Sky, `--gray-900` **is** Charcoal, `--gray-600` **is** Pewter, `--gray-300` **is** Dove, `--gray-50` **is** Pearl. Unnamed steps are interpolations for UI state only and are marked as such in `tokens/colors.css`. **Never present an unnamed step as a CUNY colour.**

**Colour proportion in practice:** roughly 70% white and Pearl, 20% CUNY Blue and Indigo (the two full-bleed bands plus every control), 10% everything else. Accents appear as single elements, never as areas.

### Typography
CUNY's typography guideline is short and unambiguous:

> Our sans serif typeface is **Trade Gothic Next** and should be used whenever possible, with special emphasis on the **Bold and regular** weights. All weights are available for use when appropriate. In instances when Trade Gothic Next is not available, **Arial** can be substituted. For Web usage, **Libre Franklin** by Google Fonts is the preferred typeface.

- **Web: Libre Franklin.** Loaded from Google Fonts at 300–800 plus italic. This is CUNY's stated preference for web, not a substitution.
- **Arial** is the sanctioned fallback and sits in the stack accordingly.
- **Print and signage: Trade Gothic Next LT Pro**, set in the layout application. It is a licensed Linotype face with no web files available to this project, so **no token references it** — naming an absent family in a CSS stack only produces a broken reference. If OLS later obtains web licences, add the `@font-face` and put it ahead of Libre Franklin in `--font-sans`.
- **Emphasis on Bold and Regular**, per the guideline. Medium and Semibold appear only in UI chrome (labels, buttons, table heads) where 700 would be too heavy at 12–14px.
- **Headings are title case** — see Content fundamentals.
- **CUNY specifies no condensed web face.** `--font-condensed` is retained as an alias that resolves to Libre Franklin, so no component needs changing; display type is the sans at **800** with -0.02em tracking. **Do not introduce a condensed face.**
- **IBM Plex Mono** for identifiers and code is an addition, chosen for digit disambiguation in MMS IDs and barcodes — see Intentional additions.
- **Display type appears once per page**, at 60px/800.
- Body is 16px at 1.65 line-height. Nothing below 14px carries meaning; 11–12px is for eyebrows and table heads only.
- Headings are sentence case, `text-wrap: balance`. Prose is `text-wrap: pretty`.

### Backgrounds and Imagery
- **Flat colour only.** White, Pearl (`--surface-sunken`, #F7F4EB), `--surface-brand-subtle` (#F2F7FF), solid CUNY Blue, and Indigo.
- **No gradients.** None. Not in headers, not in buttons, not behind hero type.
- **No textures, patterns, grain, noise, or hand-drawn illustration.** The brand has no illustration language, and one was not invented.
- **No photography supplied.** Where a photo would go, the kits use flat blue or a Pearl panel. If OLS provides photography, expect it to be documentary rather than styled — real reading rooms, real students — and keep it colour-neutral. Do not apply blue duotone or overlay tints; the brand does not do that.
- **Full-bleed colour bands** are the one structural device: two per page maximum (hero and footer). Everything else is contained to `--container-wide`.

### Layout
- `--container-wide` 1280px, `--container-content` 1080px, `--container-prose` 760px.
- Gutters `--gutter-page-lg` 40px on desktop, `--gutter-page` 24px below.
- Section rhythm is `--space-16` (64px) vertical padding; card grids use `--space-5` (20px) gaps.
- Everything sits on a **4px grid**.
- **Fixed elements:** the site header is static (not sticky); sidebars and action rails are `position: sticky` at `top: var(--space-6)`. Toasts are fixed bottom-left at 24px inset. Dialogs are fixed overlays anchored 64px from the top, not vertically centred.

### Corners, Borders, Shadows

**Write borders as longhand, never as the shorthand.** Use `border-top-width / -style / -color` rather than `border-top: 3px solid var(--token)`. If a custom property fails to resolve — a consuming page whose stylesheet path is wrong, a token renamed — the shorthand is dropped whole and `border-style` reverts to `none`, so the border **disappears silently**. Longhand loses only the colour and the rule still draws. Colours degrade quietly; borders do not. Every component and template in this system follows this. Literal colours (`transparent`, `rgba(...)`) may stay in the shorthand.

- **Radii are tight:** 2px badges, 3px tags, 4px controls, 6px cards, 8px maximum, and `--radius-pill` for switches and status dots only. The logo is hard-edged; consumer-soft rounding is off-brand.
- **Cards** are a 1px `--border-subtle` on white at 6px radius with **no shadow**. Interactive cards get `--shadow-xs` at rest and `--shadow-md` on hover. The `accent` variant adds a **4px rule on the top edge** — CUNY Blue by default, Taxi with `accent="taxi"`. A coloured *left* border is explicitly not a pattern here.
- **Shadows are cool-grey and low-spread**, four steps only. Borders do most of the separation work; elevation is reserved for things that genuinely float (dialog, toast, hovered card).
- No inner shadows anywhere. No `--shadow-inset-top` in production use (it exists in the token file for form experiments and is currently unused).

### Motion
- **Short, flat, functional.** 80 / 120 / 180 / 260ms, all on `--ease-standard` `cubic-bezier(.2,0,.2,1)`.
- Only **colour, opacity, and small position** properties animate. Nothing scales, lifts, springs, or bounces.
- The **only looping animation in the system** is `Spinner` (700ms linear).
- No scroll-triggered reveals, no parallax, no entrance staggers.

### Interaction States
| State | Treatment |
|---|---|
| **Link hover** | Colour `--text-link` → `--text-link-hover`; underline thickens 1px → 2px. Never removed. |
| **Button hover** | Fill darkens one step (CUNY Blue → `--blue-800`). No shadow, no lift. |
| **Button press** | Darkens a second step (Indigo). **No scale, no inset shadow.** |
| **Row / list hover** | Background tints to `--surface-hover` (#F2F1EC) over 80ms. |
| **Secondary hover** | Fills with `--surface-brand-subtle`; border stays blue. |
| **Focus** | 1px Azure (`--border-focus`) border plus a 3px translucent ring. On coloured grounds, `--focus-ring-inverse`. **Never suppressed.** |
| **Disabled** | `--control-disabled-bg` fill, `--control-disabled-fg` text, `cursor: not-allowed`. No opacity fade. |
| **Selected** | Solid CUNY Blue fill with white text (tags, pagination, checkboxes). |

### Transparency and Blur
Used in exactly two places: the dialog scrim (`--surface-overlay`, Indigo at 60%) and the focus ring. **No frosted glass, no backdrop-filter, no translucent headers or cards.** Reversed footer links use Sky rather than white-at-opacity.

### Protection
Text over colour uses **solid colour blocks**, never protection gradients or translucent capsules. On CUNY Blue, permitted text colours are **white**, **Sky** (secondary copy) and **Taxi** (emphasis) — all three are published AA pairings. Links reverse to Sky.

---

## 4. Iconography

**No icon set was supplied by OLS** — no icon font, no SVG sprite, no PNG icons anywhere in the provided materials.

**Substitution in force: [Lucide](https://lucide.dev) 1.41.0 (ISC licence).** It is the closest neutral match to the plain, unstyled web furniture CUNY sites use: 24px grid, 2px stroke, round caps, outline-only, no fills, no duotone. **Flagged for the user.** If OLS adopts a set, drop its SVGs into `assets/icons/` under the same names and nothing else moves.

The 38 glyphs the kits use are **vendored into `assets/icons/`**, so the system works offline. Each page sets the directory once before rendering:

```js
window.OLS_ICON_BASE = "../../assets/icons";
```

Anything not vendored falls back to a pinned jsDelivr copy of `lucide-static@1.41.0`. Pre-v1 Lucide names (`check-circle`, `alert-triangle`, `alert-octagon`, `help-circle`) are aliased in `Icon.jsx`, so both spellings resolve.

### How Icons Are Used
- Via the `Icon` component, which loads the glyph as a **CSS mask** and fills it with `currentColor`. Colour therefore comes from the surrounding text, never from the icon itself.
- **Sizes:** 14px inline in prose, 16px dense UI and small buttons, 20px default, 24px result-row type markers, 32px empty states.
- **Always paired with a label** except in `IconButton`, where `label` is a required prop feeding both `aria-label` and `title`.
- **Decorative by default** (`aria-hidden`) — an icon becomes announced only when you pass `label`.
- Icons never carry meaning alone. Availability is a `Badge` with words; the dot and glyph are reinforcement.

### Vocabulary in Use Across the Kits
`search`, `book`, `tablet`, `file-text`, `video`, `newspaper`, `file` (resource types) · `chevron-down/right/left`, `chevrons-up-down`, `arrow-right`, `arrow-left` (navigation and sort) · `filter`, `sliders-horizontal`, `rotate-ccw` (refinement) · `check`, `minus`, `x` (controls) · `info`, `circle-check`, `triangle-alert`, `octagon-alert` (status) · `bookmark`, `quote`, `mail`, `download`, `external-link` (record actions) · `user`, `log-in` (account) · `message-square`, `circle-help` (help) · `hash`, `settings`, `plus`, `thumbs-up`, `thumbs-down`, `search-x`.

### Not Used
- **No emoji**, in any surface.
- **No unicode characters as icons** — no ▸, ★, ✓, ⚠ standing in for a glyph. The one exception is the elision `…` in `Pagination` and truncated breadcrumbs, which is punctuation, not an icon.
- **No hand-drawn or hand-authored SVG.** Where a diagram or illustration would go, the kits leave a flat panel.
- **No logo-derived iconography.** The CUNY block mark is never cropped, extracted, or used as a favicon-style glyph.

---

## Accessibility

Target is **WCAG 2.1 AA**. Every value below was measured against the shipped tokens, not estimated.

### Contrast — text

| Token | Ratio on white | Level |
|---|---|---|
`--text-heading` (Indigo) | 16.49 | AAA |
`--text-body` (Charcoal) | 11.73 | AAA |
`--text-link` (CUNY Blue) | 10.56 | AAA |
`--text-muted` | 8.45 | AAA |
`--text-success` (Sea Green) | 7.84 | AAA |
`--text-subtle` | 6.29 | AA |
`--text-danger` (Cranberry) | 6.28 | AA |
`--text-warning` (Umber) | 5.01 | AA |

Reversed: white on CUNY Blue 10.56, white on Indigo 16.49, Sky on CUNY Blue 6.21, `--blue-200` on Indigo 11.76.

**Two published CUNY colours are not usable as body text.** Pewter (#76777A) measures 4.48:1 and Slate (#688197) 4.06:1 — both short of the 4.5:1 AA threshold. They remain in the palette for rules, marks, and display-size type, but `--text-muted` and `--text-subtle` point at darker working steps instead. **Do not set 13–16px copy in Pewter or Slate.**

### Contrast — non-text (WCAG 1.4.11)

| Token | Ratio | Use |
|---|---|---|
`--border-focus` (Azure) | 5.21 | Focus ring |
`--border-control` | 3.40 | Every focusable control's edge |
`--border-strong` | 3.40 | Checkbox and radio outlines |
`--border-default` (Dove) | 1.44 | Decorative hairline only |
`--rule-hairline` | 1.26 | Decorative only |
`--rule-accent` (Taxi) | 1.74 | Decorative only |

The bottom three are **below 3:1 and must never form the boundary of an interactive control** — that is what `--border-control` exists for. Taxi is a brand accent; it can carry emphasis but never meaning on its own.

### Keyboard and focus
- **Focus is never suppressed.** Where a native outline is removed for styling, a `2px solid transparent` outline replaces it so **Windows High Contrast Mode** still paints an indicator — a box-shadow ring alone is stripped in forced-colors mode.
- `Checkbox`, `Radio`, and `Switch` hide the native input for styling, so each mirrors focus onto its visible proxy. Without this the control is operable but the focus position is invisible.
- `Tag` renders a real `<button>` when given `onClick`, with `aria-pressed`. A clickable `<span>` is not keyboard reachable.
- `DataTable` sortable headers are buttons inside `<th scope="col">`, with `aria-sort` on the header.
- `Dialog` traps Tab within the panel, focuses the first control on open, closes on Escape, and returns focus to the element that opened it.

### Motion
`prefers-reduced-motion: reduce` collapses all durations to 1ms and caps animation iterations at 1. Durations go to 1ms rather than 0 so `transitionend` handlers still fire. The system has no parallax, auto-play, or scroll-triggered motion, so nothing else needs suppressing.

### Content and semantics
- Colour never carries meaning alone. Availability is a `Badge` with words; the dot and glyph reinforce.
- Icons are `aria-hidden` unless given `label`; `IconButton` requires `label`.
- `Field` binds label, hint, and error; errors set `aria-invalid` and replace the hint rather than adding to it.
- Identifiers render in mono partly for digit disambiguation — `0`/`O` and `1`/`l` in MMS IDs and barcodes.
- Body text is 16px at 1.65 line-height, capped at 68ch.

### Known gaps
- **`Tabs` does not own its panels**, so `aria-controls` must be wired by the consumer. Documented in `Tabs.prompt.md`.
- **Disabled controls measure 2.55:1.** WCAG exempts disabled elements, and the value is intentionally low so disabled reads as disabled — but do not rely on a disabled control to convey information.
- **No automated axe or screen-reader pass has been run.** Everything above is measured contrast plus code review. A real audit with NVDA or VoiceOver has not happened.

---

## 5. Index

### Root
| File | What it is |
|---|---|
`styles.css` | Global entry point. `@import` lines only — link this one file. |
`readme.md` | This document. |
`SKILL.md` | Agent Skills front-matter so this folder works as a Claude Code skill. |
`thumbnail.html` | Homepage tile for the design system. |

### `tokens/` — custom properties
`fonts.css` (Libre Franklin + IBM Plex Mono imports, family tokens) · `colors.css` (full published CUNY palette by name, working scales, semantic aliases) · `typography.css` (sizes, weights, leading, tracking, composed `--type-*` roles, measures) · `spacing.css` (4px scale, radii, border widths, containers) · `elevation.css` (four shadows, focus rings) · `motion.css` (durations, easings) · `base.css` (element resets, link styling).

### `assets/`
**`logos/`** — `ols-logo-rgb.png` · `ols-logo-black.png` · `ols-logo-white.png` · `ols-logo-cmyk.png` · `print/` (RGB, PANTONE, CMYK, BLACK, WHITE PDFs).

**`icons/`** — 38 vendored Lucide SVGs.

### `components/` — 22 components
| Group | Components |
|---|---|
`brand/` | `Logo` |
`core/` | `Button`, `IconButton`, `Icon`, `Card`, `Badge`, `Tag` |
`forms/` | `Field`, `Input`, `Textarea`, `Select`, `Checkbox`, `Radio`, `Switch`, `SearchBar` |
`feedback/` | `Alert`, `Toast`, `Tooltip`, `Spinner`, `EmptyState`, `Dialog` |
`navigation/` | `SiteHeader`, `SiteFooter`, `Tabs`, `Breadcrumb`, `Pagination`, `Accordion` |
`data/` | `DataTable` |

Each has a sibling `.d.ts` (props contract) and `.prompt.md` (what & when, usage example, variants). Each directory has one `@dsCard` HTML showing its states.

### `templates/`
Starting points other projects can pick from the template picker. Both are rebuilt from real OLS handouts the user supplied.

| Template | What it is |
|---|---|
`getting-started-guide/` | **Getting Started Guide** — one printable Letter sheet per Alma functional area: shared Basics, standing resources, then area-specific links. Two sheets shipped (Acquisitions, Cataloging). |
`systems-one-pager/` | **Systems One-Pager** — single Letter sheet introducing a team: roster with responsibility lines, queue-first contact panel, standing resources. |

Each folder carries its own README, a `ds-base.js` that links this system's stylesheet and bundle, and a copy of the paged-document shell.

### `ui_kits/`
| Kit | Screens |
|---|---|
`ols_website/` | Home page — `Hero`, `ServiceGrid`, `LibrarianPanel` |
`knowledge_base/` | FAQ list + answer detail — `FaqList`, `FaqAnswer` |
`onesearch/` | Faceted results + record detail + request flow — `FacetRail`, `ResultList`, `RecordDetail` |

Each kit has its own README stating what is real and what is constructed.

### `guidelines/`
`kb-style-guide.md` — full transcription of the OLS LibAnswers FAQ Handbook, marked scoped vs generalisable.

**Specimen cards**
Colours (primary, secondary, neutral, warm accents, cool accents, accessible pairs ×2, status mapping, do/don’t, text aliases, surfaces, reversed-on-blue) · Type (family, display, headings, body, utility, mono, weights) · Spacing (scale, in use, radii, borders, elevation, focus ring) · Brand (logo clear space, logo misuse, motion, interaction states).

---

## 6. Intentional Additions

Things in this system that the supplied sources do not define. Each is here because a working UI needs it; each is a candidate for correction once OLS supplies the real thing.

| Addition | Why |
|---|---|
**IBM Plex Mono** | CUNY specifies no mono face, but MMS IDs, barcodes, call numbers, and MARC tags are unreadable in a proportional face. |
**Lucide icons** | No icon set supplied. Neutral 2px-stroke outline set matching CUNY's plain web furniture. |
**Interpolated scale steps** | `--blue-600/800/950`, `--gray-800/700/500/400/200/150/100` and the `--red-700`/`--green-700` shades are not published CUNY colours. They exist because hover, disabled, and hairline states need values between the published ones. Marked in `tokens/colors.css`. |
**Status role mapping** | The mapping of Sea Green→success, Ochre/Umber→warning, Cranberry→danger is mine; the colours are CUNY's. The guideline assigns no semantic roles. |
**Splitting warning mark from warning text** | Ochre fails AA on white at body size. Umber carries the text. |
**`SiteHeader` / `SiteFooter`** | Not primitives in the usual sense, but every kit needs identical page furniture, and it is the main place the logo appears. |
**`SearchBar`** | Search is the single most important control on every OLS surface; it earns a component rather than an `Input` composition. |
**`Checkbox count` prop** | Facet tallies are a core Primo VE pattern and needed a first-class treatment. |
**`Badge tone="taxi"` / `Card accent="taxi"`** | Taxi is a co-primary, so the system needs a sanctioned way to deploy it. Highlights only. |
**`DataTable mono` column flag** | Identifier columns must be mono; making it a column flag stops it being forgotten. |
