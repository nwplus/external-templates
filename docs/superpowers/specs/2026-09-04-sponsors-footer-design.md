# Sponsors and Footer sections: design

Date: 2026-09-04
Branch: `eric/hackcamp2026-sponsors-footer` off `hackcamp2026_dev`
Source of truth: Figma file "HackCamp 2026", node 13030-2062 (view-only; four desktop screenshots in the untracked `screenshots/` folder)

## Goal

Replace the 2025 combined sponsor-footer section with the 2026 design: a night-sky bookshelf scene for sponsors, followed by a footer with socials, newsletter, a bed scene, the land acknowledgement, the team gallery, and the copyright. Reuse the existing data and form logic. Ship the layout now with placeholder artwork at final file paths so the real exports can be dropped in without code changes.

## Non-goals

- Mobile-specific frames from Figma (none supplied yet; a sensible stacked layout is designed below and adjusted when frames arrive).
- Animated or interactive artwork beyond hover states.
- Any other section of the page.
- The campfire ambient audio from 2025. It is removed.

## Approach

Two new sections with their own component folders. The old `sponsor-footer` section and components are deleted. Reusable logic moves over unchanged: the Firestore sponsor subscription and tier grouping, the newsletter form and its status messages, and the team marquee.

Alternatives considered: restyling the existing files in place (rejected: one file for two scenes, 2025 leftovers), and keeping the wrapper while replacing internals (rejected: same boundaries problem, no upside).

## File plan

Create:

- `src/sections/sponsors.tsx`
- `src/sections/footer.tsx`
- `src/components/sponsors/string-lights.tsx`
- `src/components/sponsors/shelf.tsx`
- `src/components/sponsors/chalkboard-card.tsx`
- `src/components/sponsors/picture-frame.tsx`
- `src/components/footer/contact.tsx` (moved from `sponsor-footer/contact.tsx`, restyled, audio removed)
- `src/components/footer/team-gallery.tsx` (moved from `sponsor-footer/team-gallery.tsx`, restyled)
- `src/components/footer/social/*.tsx` (moved unchanged)
- `src/components/footer/bed-scene.tsx`
- `src/components/footer/cloud-border.tsx`
- `public/assets/sponsors/*.svg` and `public/assets/footer/*.svg` placeholder artwork (see manifest)

Move:

- `public/assets/sponsor-footer/profiles/*` to `public/assets/footer/profiles/*`, with the paths in `src/constants/team-members.ts` updated.

Delete:

- `src/sections/sponsor-footer.tsx`
- `src/components/sponsor-footer/sponsor-blurbs.tsx`
- `src/hooks/use-autoplay-audio.tsx` (only used by the old contact component)
- `public/assets/sponsor-footer/background.svg`, `background-mobile.png`, `blurbs-background.svg`, `campfire-sound.mp3`

Edit:

- `src/app/page.tsx`: replace `<SponsorFooter />` with `<Sponsors />` then `<Footer />`.
- `src/app/globals.css`: add the theme tokens below.
- `src/app/layout.tsx`: expose `--font-display` and `--font-body` variables.

## Sponsors section

Container: full width, `id="sponsors"`, vertical gradient from `--color-night-top` to `--color-night-bottom`, cream text.

Vertical order:

1. `StringLights` top variant: full-width decorative strand with hanging lamps.
2. Title "Sponsors" in the display font, centered.
3. Description paragraph, centered, max width about 60ch. Copy from the design: "nwPlus is always looking for new ventures, opportunities, and connections. If you are interested in working with us, joining us or speaking at one of our events, feel free to reach out to us at sponsorship@nwplus.io." The email is a `mailto:` link.
4. Shelves, described below.
5. `StringLights` bottom variant.

### Shelf layout rule

Sponsors come from Firestore as today. Split them into those with a non-empty `blurb` and those without.

- Each blurb sponsor gets its own `Shelf` holding one `ChalkboardCard`, centered. The first such shelf shows the left book stack on the left and the sheep on the right. Subsequent blurb shelves alternate the decoration sides.
- Non-blurb sponsors are ordered by tier (title, platinum, gold, silver, bronze, startup, inkind) and packed into `Shelf` rows of at most three `PictureFrame`s. Each row gets one decoration: the plant on the left for even rows, the right book stack on the right for odd rows.
- If there are no sponsors at all, render the title, description, and both string light strands only. No empty shelves.
- The Figma shows one frame hung above two standing frames. That is treated as a decorative arrangement for exactly three sponsors and is not implemented now. Revisit once the real sponsor count is known.

### Components

`Shelf` props: `children`, `left?: ReactNode`, `right?: ReactNode`. Renders a flex row of children aligned to the bottom, with the optional decorations at either end, all sitting on the plank image `shelf.svg`, which stretches to the row width. Decorations hide below the `md` breakpoint.

`ChalkboardCard` props: `sponsor: SponsorDoc`. A link to `sponsor.link` opening in a new tab. Cream fill `--color-cream-light`, thick `--color-wood` border with a slight inner shadow, logo from `sponsor.imgURL` at the top centered with fixed height, blurb below in the body font. Fixed width about 540px on desktop, full width on mobile. Hover lifts it 4px with a transition.

`PictureFrame` props: `sponsor: SponsorDoc`. Same fill and border treatment, logo only, size by tier:

| Tier | Width on desktop |
|---|---|
| title, platinum | 240px |
| gold | 220px |
| silver | 180px |
| bronze, startup, inkind | 150px |

Height follows a 5:4 ratio. Same link and hover behavior as the card.

`StringLights` props: `variant: "top" | "bottom"`. Renders the matching asset full-width with `pointer-events: none` and `aria-hidden`.

## Footer section

Container: full width, `id="footer"`, same navy, framed by `CloudBorder`. Everything centered.

Vertical order:

1. `Contact`: five social icons in a row, then the three links ("Email Us", "Become a Sponsor", "Code of Conduct") underlined in bold, then the newsletter form. Same hrefs as today. The form is a grey rounded input with the yellow Submit button to its right, not overlapping. Status message below the form as today: subscribed, already subscribed, or error.
2. `BedScene`: the bed illustration, centered, about 70% of the container width on desktop and full width on mobile.
3. Land acknowledgement paragraph. Copy stays "HackCamp 2026" (the Figma says "nwHacks 2026", treated as a leftover).
4. `TeamGallery`: heading "Meet the minds behind HackCamp", then the marquee of square profile tiles with white backgrounds and rounded corners, pause and name reveal on hover as today. The 2025 "Made with love" heading is replaced.
5. Copyright line in muted text.

`CloudBorder` renders three absolutely positioned decorative assets: a left strip, a right strip, and a bottom band, all `pointer-events: none` and `aria-hidden`. The side strips hide on mobile; the bottom band stays.

## Theme tokens

Added to `globals.css` under `@theme inline` and `:root`:

| Token | Value | Use |
|---|---|---|
| `--color-night-top` | `#101737` | sky gradient start |
| `--color-night-bottom` | `#172453` | sky gradient end |
| `--color-cream` | `#fff3d5` | headings and body text on navy |
| `--color-cream-light` | `#fff5e1` | frame and card fill |
| `--color-wood` | `#764928` | frame borders |
| `--color-shelf` | `#d7ad56` | plank fallback color |
| `--color-sun` | `#d9a625` | submit button |
| `--color-sun-ink` | `#5a450f` | submit button text |
| `--color-star` | `#fff186` | accents |
| `--color-cloud` | `#241e47` | footer cloud border fallback |
| `--color-bed` | `#596ed8` | bed scene fallback |
| `--color-muted-cream` | `#adaebd` | copyright and status text |

Fonts: `--font-display` for the "Sponsors" title and the team heading, `--font-body` for everything else. Both initially map to the existing Poor Story and Cygre variables in `layout.tsx`. The real families are read from Figma's properties panel and swapped there in one place.

## Data

`subscribeToSponsorsByHackathon(CURRENT_HACKATHON, setSponsors)` and `groupSponsorsByTier` from `src/lib/firestore.ts`, unchanged. `CURRENT_HACKATHON` stays `HackCamp2025` during development and is flipped to `HackCamp2026` at launch. Sponsor logos are the Firestore `imgURL` values.

## Responsive behavior

- Above 768px: as designed. Shelves hold up to three frames, decorations shown, side clouds shown.
- Below 768px: shelves hold up to two frames, decorations hidden, chalkboard cards full width, contact links wrap, the newsletter input and button stack vertically at full width, bed scales to full width, side clouds hidden.
- All artwork uses `next/image` with explicit width and height and `unoptimized` output, matching the static export config.

## Errors and edge cases

- Firestore error or empty result: the empty state above. No crash, no spinner.
- Newsletter request failure: the existing error message. Duplicate email: the existing 409 handling.
- Sponsor without `link`: render the frame without an anchor.
- Sponsor logo that fails to load: the frame stays, showing the sponsor name in the body font as fallback.

## Asset manifest

Placeholder SVGs are generated at these exact paths, each a translucent shape with a dashed outline and the file name printed in the middle. Replacing the file with the real export completes the swap. Sizes are the intended design box in CSS pixels at a 1440px viewport.

| Path | Content | Approx. box |
|---|---|---|
| `public/assets/sponsors/string-lights-top.svg` | Strand of bulbs with three hanging lamps and stars, spanning the section | 1440 x 420 |
| `public/assets/sponsors/string-lights-bottom.svg` | Strand of bulbs with two lamps and stars | 1200 x 300 |
| `public/assets/sponsors/shelf.svg` | Wooden plank with beveled ends and grain | 1110 x 60 |
| `public/assets/sponsors/books-left.svg` | Three books: "Goodnight Nugget", "NWPLUS YEARBOOK", "The HackCampers" | 230 x 260 |
| `public/assets/sponsors/books-right.svg` | Three books: "Sleepy Sheep", "Nugget and Pals", "Starry Night" | 230 x 240 |
| `public/assets/sponsors/sheep.svg` | Plush sheep sitting | 200 x 200 |
| `public/assets/sponsors/plant.svg` | Vase with leaves and flowers | 330 x 330 |
| `public/assets/footer/cloud-left.svg` | Dark cloud strip with stars, swirls, and comets, left edge | 220 x 1400 |
| `public/assets/footer/cloud-right.svg` | Same, right edge | 220 x 1400 |
| `public/assets/footer/cloud-bottom.svg` | Cloud band along the bottom | 1440 x 260 |
| `public/assets/footer/bed.svg` | Bed with headboard, pillows, blanket, bedposts with lamps, glowing stars, the bear with a phone and the otter | 1000 x 820 |

The frames, cards, plank fallback, and buttons are CSS, so they need no export. The five social icons already exist as SVG components. Team profile photos already exist and move to `public/assets/footer/profiles/`.

## Verification

1. `pnpm lint` and `pnpm build:staging` pass.
2. Dev server screenshots at 1440px and 390px widths via headless Chrome, compared side by side with the Figma screenshots for structure, spacing, and color.
3. Manual check that sponsor links open, the newsletter form posts and shows a message, and the team marquee pauses on hover.
4. Pull request into `hackcamp2026_dev` for a preview URL.

## Open items

- Font family names from Figma (heading, body, footer). Swap in `layout.tsx` when known.
- Mobile frames, if any exist in Figma.
- The hung-frame arrangement for exactly three sponsors, once the sponsor count is known.
- Real artwork exports from the design team, per the manifest.
- Flip `CURRENT_HACKATHON` to `HackCamp2026` at launch.
