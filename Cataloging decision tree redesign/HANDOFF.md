# Cataloging Decision Tree — Redesign Handoff

Rebuild the existing `index.html` to match `Cataloging Decision Tree.dc.html`. The .dc.html file is a design reference, not a drop-in replacement. The target use is a customized Alma widget, so the page must work well in a narrow window.

## Files
- `Cataloging Decision Tree.dc.html` — the design (layout, styles, behavior).
- `tree-data.js` — all questions and recommendations (`window.TREE_NODES`). Same node shape as the original `nodes` object. **Use this as the source of truth for content.**
- `assets/icons/` — Lucide SVGs used by the page.
- Styling follows the CUNY Library Services design system (CUNY Blue `#0033A1`, Taxi `#FFB71B` rule, Pearl `#F7F4EB` page background, Libre Franklin, Lucide icons).

## Layout
- Thin CUNY Blue header bar with a 3px Taxi bottom border: title "Cataloging Decision Tree" + one-line description. No logo.
- Single main column, max-width 820px.
- Breadcrumb trail above the question (only after the first answer).
- Start screen: five option cards in an auto-fill grid, icon left of title and description. Icons: book, globe, file-text, user, file.
- Question screens: white card with "Step N" eyebrow, question heading, optional hint, full-width answer rows with a number badge and chevron.
- Recommendation screens: card with a blue top accent rule, "Recommendation" eyebrow, title, body. `<div class="key-rule">` blocks render as info alerts.
- Buttons below the card: Back, Start over, and on recommendations "Print these instructions".
- Glossary: collapsed disclosure card below the buttons (starts closed). Hidden on `start` and `rec_digital`.
- Footer: one line — "Need help? Open a ticket with OLS Systems at support@cuny-ols.libanswers.com". No address, no logo.

## Behavior
- Number keys 1–9 choose answers (ignored in inputs, with modifier keys, and on recommendations). No on-screen tip.
- Breadcrumb items are buttons that jump back to that step; last item is `aria-current="step"`.
- Focus moves to the new heading on each step.
- Progress (current node + history) persists in localStorage; if a saved node no longer exists, reset to start.
- Print hides header controls, breadcrumb, buttons, glossary, and footer.

## Accessibility
- Skip link to main content.
- Breadcrumb is `<nav aria-label="Your answers">` with an `<ol>`; separators `aria-hidden`.
- Glossary toggle is a button with `aria-expanded` / `aria-controls`; content is a `<dl>`.
- Visible focus ring on all controls, with `outline: 2px solid transparent` fallback for forced-colors mode.
- Click targets at least 24px (WCAG 2.2).

## Content Changes vs. Original (already applied in tree-data.js)
- `phys_original`: question is now "Should this record be in the Network Zone?"; policy hint removed.
- `rec_original_nz`: title "Create the original record in OCLC and export it to the Network Zone"; added Metadata Editor holdings/item steps.
- `rec_original_iz`: intro paragraph folded into steps; "later meets the criteria" note removed; Metadata Editor holdings/item steps.
- `rec_oclc_connexion`, `rec_oclc_alma`: holdings/item step replaced with explicit Metadata Editor steps.
- `rec_add_item_same_location`, `rec_add_item_diff_location`: Quality of Bibliographic Records notes removed.
- `rec_edit_iz`: rewritten as three numbered steps.
- Edit branch: "It's only in my IZ" now goes directly to `rec_edit_iz`. Nodes `edit_iz_oclc` and `rec_edit_contribute_first` deleted.
- Rule applied: only ask whether a bib belongs in the NZ when a new bib record is being added to Alma.
- External links now include `rel="noopener"`.
