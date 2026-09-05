# Sponsors and Footer Sections Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Replace the 2025 combined sponsor-footer section with the 2026 bookshelf Sponsors section and bed-scene Footer, using placeholder artwork at final asset paths.

**Architecture:** A pure `buildShelves` function turns the Firestore sponsor list into shelf rows (tested with vitest). Two new sections, `Sponsors` and `Footer`, render those rows and the footer content from small presentational components. All illustrations are `next/image` references to SVG files under `public/assets/sponsors/` and `public/assets/footer/`, generated as labelled placeholders so the real exports can overwrite them with no code change.

**Tech Stack:** Next.js 15.4.7 App Router with `output: "export"`, React 19, TypeScript 5, Tailwind CSS 4 (`@theme inline` tokens in `src/app/globals.css`), shadcn `Button`, `next/image` (unoptimized), Firebase 12 Firestore, animejs 4, pnpm 11.10.0, vitest for unit tests.

Spec: `docs/superpowers/specs/2026-09-04-sponsors-footer-design.md`

## Global Constraints

- Branch `eric/hackcamp2026-sponsors-footer`, off `hackcamp2026_dev`. Never touch `hackcamp2026_placeholder` or create `hackcamp2026_main`.
- Node `>=22`, pnpm `11.10.0` (the `packageManager` field). Use `pnpm`, never `npm` or `yarn`.
- Static export: every `next/image` needs explicit `width` and `height`; images are globally `unoptimized`. No server components with data fetching; sections that use hooks start with `"use client"`.
- Imports follow `.prettierrc` order: third-party, then `@/...`, then relative, groups separated by a blank line. Format only the files you touched before each commit with `pnpm exec prettier --write <paths>`. Never run `pnpm format` (it formats the whole repo and would reformat 22 unrelated files).
- Path alias `@/*` maps to `./src/*`.
- Copy: land acknowledgement and copyright say "HackCamp 2026". Sponsors description is exactly: "nwPlus is always looking for new ventures, opportunities, and connections. If you are interested in working with us, joining us or speaking at one of our events, feel free to reach out to us at sponsorship@nwplus.io."
- `CURRENT_HACKATHON` stays `"HackCamp2025"`.
- Asset paths and boxes are exactly those in the spec's asset manifest.
- Theme token values are exactly those in the spec's theme table, plus `--ink: #363a4e` for text on cream surfaces.
- Commit messages: conventional prefix (`feat:`, `chore:`, `test:`, `docs:`), imperative, ending with the two trailers below.

```
Co-Authored-By: Claude Fable 5.1 <noreply@anthropic.com>
Claude-Session: https://claude.ai/code/session_01UpvHDWskBck57fcXnmy4Jq
```

## File Structure

| Path | Responsibility |
|---|---|
| `vitest.config.mts` | Test runner config with the `@` alias |
| `src/lib/shelves.ts` | Pure layout rule: sponsors in, shelf specs out |
| `src/lib/shelves.test.ts` | Unit tests for the layout rule |
| `src/lib/firestore.ts` | Existing; widen `SponsorDoc.tier` union |
| `scripts/make-placeholder.mjs` | Writes a labelled placeholder SVG at a path and size |
| `public/assets/sponsors/*.svg`, `public/assets/footer/*.svg` | Placeholder artwork at final paths |
| `src/app/globals.css` | New color and font tokens |
| `src/components/sponsors/sponsor-logo.tsx` | Logo image with name fallback on load error |
| `src/components/sponsors/picture-frame.tsx` | Small framed logo sized by tier |
| `src/components/sponsors/chalkboard-card.tsx` | Large framed logo plus blurb |
| `src/components/sponsors/shelf.tsx` | Plank with content row and end decorations |
| `src/components/sponsors/string-lights.tsx` | Decorative strand image |
| `src/sections/sponsors.tsx` | Subscribes to sponsors, renders title, copy, shelves |
| `src/components/footer/social/*.tsx` | Moved icon components, unchanged |
| `src/components/footer/contact.tsx` | Socials, links, newsletter form |
| `src/components/footer/team-gallery.tsx` | Team marquee |
| `src/components/footer/bed-scene.tsx` | Bed illustration |
| `src/components/footer/cloud-border.tsx` | Cloud strips and band |
| `src/sections/footer.tsx` | Footer composition |
| `src/app/page.tsx` | Renders `Sponsors` then `Footer` |
| `src/constants/team-members.ts` | Profile image paths updated |

---

### Task 1: Shelf layout rule with tests

**Files:**
- Create: `vitest.config.mts`
- Create: `src/lib/shelves.ts`
- Create: `src/lib/shelves.test.ts`
- Modify: `src/lib/firestore.ts` (the `SponsorDoc.tier` line)
- Modify: `package.json` (scripts, devDependencies)
- Modify: `.github/workflows/ci.yaml` (lint job run line)

**Interfaces:**
- Consumes: `SponsorDoc` from `@/lib/firestore`.
- Produces: `type Decoration = "books-left" | "books-right" | "sheep" | "plant"`, `type ShelfSpec`, `const TIER_ORDER`, `function buildShelves(sponsors: SponsorDoc[], framesPerShelf?: number): ShelfSpec[]`. Tasks 3 and 4 import these names exactly.

- [ ] **Step 1: Install vitest and add the scripts**

Run:

```bash
pnpm add -D vitest
```

Edit `package.json` scripts to add a `test` entry after `lint`:

```json
    "lint": "next lint",
    "test": "vitest run",
    "format": "prettier --write ."
```

Create `vitest.config.mts`:

```ts
import { fileURLToPath } from "node:url";
import { defineConfig } from "vitest/config";

export default defineConfig({
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
  test: {
    include: ["src/**/*.test.ts"],
  },
});
```

Edit the `run:` line of the `lint` job in `.github/workflows/ci.yaml` so it also runs the tests:

```yaml
      - run: pnpm install --frozen-lockfile && pnpm run lint && pnpm run test
```

- [ ] **Step 2: Widen the sponsor tier type**

In `src/lib/firestore.ts`, replace the `tier` line of `SponsorDoc`:

```ts
  tier:
    | "title"
    | "platinum"
    | "gold"
    | "silver"
    | "bronze"
    | "startup"
    | "inkind";
```

- [ ] **Step 3: Write the failing tests**

Create `src/lib/shelves.test.ts`:

```ts
import { describe, expect, it } from "vitest";

import type { SponsorDoc } from "@/lib/firestore";
import { buildShelves } from "@/lib/shelves";

const mk = (
  name: string,
  tier: SponsorDoc["tier"],
  blurb = ""
): SponsorDoc => ({
  name,
  tier,
  blurb,
  imgName: `${name}.png`,
  imgURL: `https://example.com/${name}.png`,
  link: `https://${name}.example.com`,
});

describe("buildShelves", () => {
  it("returns no shelves for no sponsors", () => {
    expect(buildShelves([])).toEqual([]);
  });

  it("gives a blurb sponsor its own card shelf with books left and sheep right", () => {
    const shelves = buildShelves([mk("google", "title", "We love hackers")]);
    expect(shelves).toEqual([
      {
        kind: "card",
        sponsor: expect.objectContaining({ name: "google" }),
        left: "books-left",
        right: "sheep",
      },
    ]);
  });

  it("alternates decoration sides on successive card shelves", () => {
    const shelves = buildShelves([
      mk("a", "title", "blurb a"),
      mk("b", "platinum", "blurb b"),
      mk("c", "gold", "blurb c"),
    ]);
    expect(shelves.map((s) => [s.left, s.right])).toEqual([
      ["books-left", "sheep"],
      ["sheep", "books-left"],
      ["books-left", "sheep"],
    ]);
  });

  it("packs non-blurb sponsors into frame shelves of three, alternating plant and books", () => {
    const sponsors = ["a", "b", "c", "d", "e", "f", "g"].map((n) =>
      mk(n, "silver")
    );
    const shelves = buildShelves(sponsors);
    expect(shelves.map((s) => s.kind)).toEqual(["frames", "frames", "frames"]);
    expect(
      shelves.map((s) => (s.kind === "frames" ? s.sponsors.length : 0))
    ).toEqual([3, 3, 1]);
    expect(shelves.map((s) => [s.left, s.right])).toEqual([
      ["plant", undefined],
      [undefined, "books-right"],
      ["plant", undefined],
    ]);
  });

  it("orders non-blurb sponsors by tier regardless of input order", () => {
    const shelves = buildShelves([
      mk("bronze-co", "bronze"),
      mk("gold-co", "gold"),
      mk("inkind-co", "inkind"),
      mk("platinum-co", "platinum"),
    ]);
    const names =
      shelves[0].kind === "frames" ? shelves[0].sponsors.map((s) => s.name) : [];
    expect(names).toEqual(["platinum-co", "gold-co", "bronze-co"]);
  });

  it("treats a whitespace-only blurb as no blurb", () => {
    const shelves = buildShelves([mk("a", "gold", "   ")]);
    expect(shelves[0].kind).toBe("frames");
  });

  it("puts card shelves before frame shelves", () => {
    const shelves = buildShelves([
      mk("frame-co", "gold"),
      mk("card-co", "silver", "has a blurb"),
    ]);
    expect(shelves.map((s) => s.kind)).toEqual(["card", "frames"]);
  });

  it("respects a smaller framesPerShelf for mobile", () => {
    const sponsors = ["a", "b", "c"].map((n) => mk(n, "gold"));
    const shelves = buildShelves(sponsors, 2);
    expect(
      shelves.map((s) => (s.kind === "frames" ? s.sponsors.length : 0))
    ).toEqual([2, 1]);
  });
});
```

- [ ] **Step 4: Run the tests and confirm they fail**

Run: `pnpm test`

Expected: FAIL with `Failed to resolve import "@/lib/shelves"` or `Cannot find module`.

- [ ] **Step 5: Implement the layout rule**

Create `src/lib/shelves.ts`:

```ts
import type { SponsorDoc } from "@/lib/firestore";

export type Decoration = "books-left" | "books-right" | "sheep" | "plant";

export type ShelfSpec =
  | {
      kind: "card";
      sponsor: SponsorDoc;
      left?: Decoration;
      right?: Decoration;
    }
  | {
      kind: "frames";
      sponsors: SponsorDoc[];
      left?: Decoration;
      right?: Decoration;
    };

export const TIER_ORDER = [
  "title",
  "platinum",
  "gold",
  "silver",
  "bronze",
  "startup",
  "inkind",
] as const;

export const FRAMES_PER_SHELF = 3;

const tierRank = (tier: string) => {
  const index = (TIER_ORDER as readonly string[]).indexOf(tier);
  return index === -1 ? TIER_ORDER.length : index;
};

const byTier = (a: SponsorDoc, b: SponsorDoc) =>
  tierRank(a.tier) - tierRank(b.tier);

const hasBlurb = (sponsor: SponsorDoc) =>
  typeof sponsor.blurb === "string" && sponsor.blurb.trim().length > 0;

/**
 * Turns the sponsor list into shelf rows following the design rule:
 * each blurb sponsor gets its own chalkboard shelf (decorations alternate
 * sides), then the remaining sponsors are sorted by tier and packed into
 * shelves of `framesPerShelf` picture frames (plant on even rows, books on
 * odd rows).
 */
export function buildShelves(
  sponsors: SponsorDoc[],
  framesPerShelf: number = FRAMES_PER_SHELF
): ShelfSpec[] {
  const cards = sponsors.filter(hasBlurb).sort(byTier);
  const frames = sponsors.filter((s) => !hasBlurb(s)).sort(byTier);

  const cardShelves: ShelfSpec[] = cards.map((sponsor, i) => ({
    kind: "card",
    sponsor,
    left: i % 2 === 0 ? "books-left" : "sheep",
    right: i % 2 === 0 ? "sheep" : "books-left",
  }));

  const frameShelves: ShelfSpec[] = [];
  for (let i = 0; i < frames.length; i += framesPerShelf) {
    const row = frameShelves.length;
    frameShelves.push({
      kind: "frames",
      sponsors: frames.slice(i, i + framesPerShelf),
      left: row % 2 === 0 ? "plant" : undefined,
      right: row % 2 === 1 ? "books-right" : undefined,
    });
  }

  return [...cardShelves, ...frameShelves];
}
```

- [ ] **Step 6: Run the tests and confirm they pass**

Run: `pnpm test`

Expected: `Test Files 1 passed (1)` and `Tests 8 passed (8)`.

- [ ] **Step 7: Lint, format, commit**

Run: `pnpm exec prettier --write $(git diff --name-only --diff-filter=AM HEAD; git ls-files --others --exclude-standard) && pnpm lint`

Expected: lint output shows only the five pre-existing warnings (mlh-badge, ten-years-mobile, image-carousel, learn) and no errors.

```bash
git add vitest.config.ts package.json pnpm-lock.yaml .github/workflows/ci.yaml src/lib/firestore.ts src/lib/shelves.ts src/lib/shelves.test.ts
git commit -m "feat(sponsors): add shelf layout rule with vitest coverage"
```

---

### Task 2: Theme tokens and placeholder artwork

**Files:**
- Modify: `src/app/globals.css` (the `@theme inline` block and `:root` block)
- Create: `scripts/make-placeholder.mjs`
- Create: eleven SVGs under `public/assets/sponsors/` and `public/assets/footer/`

**Interfaces:**
- Produces Tailwind classes used by later tasks: `bg-night-top`, `bg-night-bottom`, `from-night-top`, `to-night-bottom`, `text-cream`, `bg-cream-light`, `border-wood`, `text-wood`, `bg-shelf`, `bg-sun`, `text-sun-ink`, `text-star`, `bg-cloud`, `bg-bed`, `text-muted-cream`, `text-ink`, `font-display`, `font-body`.
- Produces the asset files at the exact manifest paths.

- [ ] **Step 1: Add the tokens**

In `src/app/globals.css`, inside `@theme inline { ... }`, add after the `--font-title` line:

```css
  --font-display: var(--font-poor-story);
  --font-body: var(--font-cygre);
  --color-night-top: var(--night-top);
  --color-night-bottom: var(--night-bottom);
  --color-cream: var(--cream);
  --color-cream-light: var(--cream-light);
  --color-wood: var(--wood);
  --color-shelf: var(--shelf);
  --color-sun: var(--sun);
  --color-sun-ink: var(--sun-ink);
  --color-star: var(--star);
  --color-cloud: var(--cloud);
  --color-bed: var(--bed);
  --color-muted-cream: var(--muted-cream);
  --color-ink: var(--ink);
```

Inside `:root { ... }`, add after the `--title: #ffe4d0;` line:

```css
  --night-top: #101737;
  --night-bottom: #172453;
  --cream: #fff3d5;
  --cream-light: #fff5e1;
  --wood: #764928;
  --shelf: #d7ad56;
  --sun: #d9a625;
  --sun-ink: #5a450f;
  --star: #fff186;
  --cloud: #241e47;
  --bed: #596ed8;
  --muted-cream: #adaebd;
  --ink: #363a4e;
```

The two `--font-*` lines are the single swap point for the real Figma fonts: load the new families in `src/app/layout.tsx` with `next/font` and point these two variables at them.

- [ ] **Step 2: Write the placeholder generator**

Create `scripts/make-placeholder.mjs`:

```js
// Writes a labelled placeholder SVG so layout work can proceed before the
// real artwork is exported from Figma. Overwrite the file with the export.
// Usage: node scripts/make-placeholder.mjs <out.svg> <width> <height> [label] [fill]
import { mkdirSync, writeFileSync } from "node:fs";
import { basename, dirname } from "node:path";

const [out, width, height, labelArg, fillArg] = process.argv.slice(2);

if (!out || !width || !height) {
  console.error(
    "usage: node scripts/make-placeholder.mjs <out.svg> <width> <height> [label] [fill]"
  );
  process.exit(1);
}

const w = Number(width);
const h = Number(height);
const label = labelArg ?? basename(out, ".svg");
const fill = fillArg ?? "rgba(255,243,213,0.12)";
const fontSize = Math.max(14, Math.round(Math.min(w, h) / 8));

const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="${w}" height="${h}" viewBox="0 0 ${w} ${h}">
  <rect x="2" y="2" width="${w - 4}" height="${h - 4}" rx="12" fill="${fill}" stroke="#fff3d5" stroke-width="3" stroke-dasharray="12 10"/>
  <text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" font-family="sans-serif" font-size="${fontSize}" fill="#fff3d5">${label}</text>
</svg>
`;

mkdirSync(dirname(out), { recursive: true });
writeFileSync(out, svg);
console.log(`wrote ${out} (${w}x${h})`);
```

- [ ] **Step 3: Generate the eleven placeholders**

Run:

```bash
node scripts/make-placeholder.mjs public/assets/sponsors/string-lights-top.svg 1440 420
node scripts/make-placeholder.mjs public/assets/sponsors/string-lights-bottom.svg 1200 300
node scripts/make-placeholder.mjs public/assets/sponsors/shelf.svg 1110 60 shelf "#d7ad56"
node scripts/make-placeholder.mjs public/assets/sponsors/books-left.svg 230 260
node scripts/make-placeholder.mjs public/assets/sponsors/books-right.svg 230 240
node scripts/make-placeholder.mjs public/assets/sponsors/sheep.svg 200 200
node scripts/make-placeholder.mjs public/assets/sponsors/plant.svg 330 330
node scripts/make-placeholder.mjs public/assets/footer/cloud-left.svg 220 1400
node scripts/make-placeholder.mjs public/assets/footer/cloud-right.svg 220 1400
node scripts/make-placeholder.mjs public/assets/footer/cloud-bottom.svg 1440 260
node scripts/make-placeholder.mjs public/assets/footer/bed.svg 1000 820
```

Expected: eleven `wrote ...` lines.

- [ ] **Step 4: Verify the build still passes**

Run: `pnpm build:staging`

Expected: ends with `✓ Exporting (3/3)` and no errors. Firestore connection warnings during the build are expected without a `.env` and can be ignored.

- [ ] **Step 5: Commit**

```bash
git add src/app/globals.css scripts/make-placeholder.mjs public/assets/sponsors public/assets/footer
git commit -m "chore(theme): add 2026 sponsors and footer tokens and placeholder artwork"
```

---

### Task 3: Sponsors components

**Files:**
- Create: `src/components/sponsors/sponsor-logo.tsx`
- Create: `src/components/sponsors/picture-frame.tsx`
- Create: `src/components/sponsors/chalkboard-card.tsx`
- Create: `src/components/sponsors/shelf.tsx`
- Create: `src/components/sponsors/string-lights.tsx`

**Interfaces:**
- Consumes: `SponsorDoc` from `@/lib/firestore`, `Decoration` from `@/lib/shelves`, `cn` from `@/lib/utils`, tokens from Task 2.
- Produces default exports `SponsorLogo({ sponsor, className? })`, `PictureFrame({ sponsor })`, `ChalkboardCard({ sponsor })`, `Shelf({ left?, right?, children })`, `StringLights({ variant })`, plus the named export `frameClass` from `picture-frame.tsx`.

- [ ] **Step 1: Sponsor logo with fallback**

Create `src/components/sponsors/sponsor-logo.tsx`:

```tsx
"use client";

import type { SponsorDoc } from "@/lib/firestore";
import { cn } from "@/lib/utils";

import Image from "next/image";
import { useState } from "react";

const SponsorLogo = ({
  sponsor,
  className,
}: {
  sponsor: SponsorDoc;
  className?: string;
}) => {
  const [failed, setFailed] = useState(false);

  if (failed || !sponsor.imgURL) {
    return (
      <span
        className={cn(
          "flex items-center justify-center text-center font-body font-semibold text-wood",
          className
        )}
      >
        {sponsor.name}
      </span>
    );
  }

  return (
    <Image
      src={sponsor.imgURL}
      alt={sponsor.name}
      width={400}
      height={300}
      className={cn("object-contain", className)}
      onError={() => setFailed(true)}
    />
  );
};

export default SponsorLogo;
```

- [ ] **Step 2: Picture frame**

Create `src/components/sponsors/picture-frame.tsx`:

```tsx
import type { SponsorDoc } from "@/lib/firestore";

import SponsorLogo from "./sponsor-logo";

export const frameClass =
  "block rounded-sm border-[10px] border-wood bg-cream-light shadow-[inset_0_0_14px_rgba(0,0,0,0.25)] transition-transform duration-200 hover:-translate-y-1";

const TIER_WIDTH: Record<SponsorDoc["tier"], number> = {
  title: 240,
  platinum: 240,
  gold: 220,
  silver: 180,
  bronze: 150,
  startup: 150,
  inkind: 150,
};

const PictureFrame = ({ sponsor }: { sponsor: SponsorDoc }) => {
  const width = TIER_WIDTH[sponsor.tier] ?? 150;
  const frame = (
    <div
      className={frameClass}
      style={{ width: `min(${width}px, 40vw)`, aspectRatio: "5 / 4" }}
    >
      <SponsorLogo sponsor={sponsor} className="h-full w-full p-3" />
    </div>
  );

  if (!sponsor.link) return frame;

  return (
    <a
      href={sponsor.link}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={sponsor.name}
    >
      {frame}
    </a>
  );
};

export default PictureFrame;
```

- [ ] **Step 3: Chalkboard card**

Create `src/components/sponsors/chalkboard-card.tsx`:

```tsx
import type { SponsorDoc } from "@/lib/firestore";
import { cn } from "@/lib/utils";

import { frameClass } from "./picture-frame";
import SponsorLogo from "./sponsor-logo";

const ChalkboardCard = ({ sponsor }: { sponsor: SponsorDoc }) => {
  const card = (
    <div
      className={cn(
        frameClass,
        "flex w-full max-w-[540px] flex-col items-center gap-4 p-6 text-center md:p-8"
      )}
    >
      <SponsorLogo sponsor={sponsor} className="h-16 w-auto max-w-[70%] md:h-20" />
      <p className="font-body text-sm leading-relaxed text-ink md:text-base">
        {sponsor.blurb}
      </p>
    </div>
  );

  if (!sponsor.link) return card;

  return (
    <a
      href={sponsor.link}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={sponsor.name}
      className="flex w-full justify-center"
    >
      {card}
    </a>
  );
};

export default ChalkboardCard;
```

- [ ] **Step 4: Shelf**

Create `src/components/sponsors/shelf.tsx`:

```tsx
import type { Decoration } from "@/lib/shelves";

import Image from "next/image";
import type { ReactNode } from "react";

const DECORATIONS: Record<
  Decoration,
  { src: string; width: number; height: number; className: string }
> = {
  "books-left": {
    src: "/assets/sponsors/books-left.svg",
    width: 230,
    height: 260,
    className: "w-[16vw] max-w-[230px]",
  },
  "books-right": {
    src: "/assets/sponsors/books-right.svg",
    width: 230,
    height: 240,
    className: "w-[16vw] max-w-[230px]",
  },
  sheep: {
    src: "/assets/sponsors/sheep.svg",
    width: 200,
    height: 200,
    className: "w-[14vw] max-w-[200px]",
  },
  plant: {
    src: "/assets/sponsors/plant.svg",
    width: 330,
    height: 330,
    className: "w-[22vw] max-w-[330px]",
  },
};

const DecorationImage = ({ kind }: { kind: Decoration }) => {
  const d = DECORATIONS[kind];
  return (
    <Image
      src={d.src}
      alt=""
      aria-hidden
      width={d.width}
      height={d.height}
      className={`hidden h-auto shrink-0 md:block ${d.className}`}
    />
  );
};

const Shelf = ({
  left,
  right,
  children,
}: {
  left?: Decoration;
  right?: Decoration;
  children: ReactNode;
}) => {
  return (
    <div className="mx-auto w-full max-w-[1110px] px-4">
      <div className="flex items-end justify-center gap-6 md:gap-10">
        {left && <DecorationImage kind={left} />}
        <div className="flex flex-wrap items-end justify-center gap-6 md:gap-10">
          {children}
        </div>
        {right && <DecorationImage kind={right} />}
      </div>
      <Image
        src="/assets/sponsors/shelf.svg"
        alt=""
        aria-hidden
        width={1110}
        height={60}
        className="-mt-1 h-auto w-full"
      />
    </div>
  );
};

export default Shelf;
```

- [ ] **Step 5: String lights**

Create `src/components/sponsors/string-lights.tsx`:

```tsx
import Image from "next/image";

const ASSETS = {
  top: {
    src: "/assets/sponsors/string-lights-top.svg",
    width: 1440,
    height: 420,
  },
  bottom: {
    src: "/assets/sponsors/string-lights-bottom.svg",
    width: 1200,
    height: 300,
  },
} as const;

const StringLights = ({ variant }: { variant: "top" | "bottom" }) => {
  const asset = ASSETS[variant];
  return (
    <div aria-hidden className="pointer-events-none flex w-full justify-center">
      <Image
        src={asset.src}
        alt=""
        width={asset.width}
        height={asset.height}
        className="h-auto w-full"
      />
    </div>
  );
};

export default StringLights;
```

- [ ] **Step 6: Type-check, lint, format, commit**

Run: `pnpm exec prettier --write $(git diff --name-only --diff-filter=AM HEAD; git ls-files --others --exclude-standard) && pnpm lint && npx tsc --noEmit`

Expected: no errors. Warnings are limited to the five pre-existing ones.

```bash
git add src/components/sponsors
git commit -m "feat(sponsors): add frame, card, shelf, and string light components"
```

---

### Task 4: Sponsors section wired into the page

**Files:**
- Create: `src/sections/sponsors.tsx`
- Modify: `src/app/page.tsx`

**Interfaces:**
- Consumes: `buildShelves` from `@/lib/shelves`, `subscribeToSponsorsByHackathon` and `CURRENT_HACKATHON` from `@/lib/firestore`, `useMobile` from `@/hooks/use-mobile`, the Task 3 components.
- Produces: default export `Sponsors` section.

- [ ] **Step 1: Write the section**

Create `src/sections/sponsors.tsx`:

```tsx
"use client";

import ChalkboardCard from "@/components/sponsors/chalkboard-card";
import PictureFrame from "@/components/sponsors/picture-frame";
import Shelf from "@/components/sponsors/shelf";
import StringLights from "@/components/sponsors/string-lights";
import { useMobile } from "@/hooks/use-mobile";
import {
  CURRENT_HACKATHON,
  type SponsorDoc,
  subscribeToSponsorsByHackathon,
} from "@/lib/firestore";
import { buildShelves } from "@/lib/shelves";

import { useEffect, useState } from "react";

const Sponsors = () => {
  const [sponsors, setSponsors] = useState<SponsorDoc[]>([]);
  const { isMobile } = useMobile();

  useEffect(() => {
    const unsubscribe = subscribeToSponsorsByHackathon(
      CURRENT_HACKATHON,
      setSponsors
    );
    return () => unsubscribe();
  }, []);

  const shelves = buildShelves(sponsors, isMobile ? 2 : 3);

  return (
    <section
      id="sponsors"
      className="relative w-full overflow-hidden bg-linear-to-b from-night-top to-night-bottom text-cream"
    >
      <StringLights variant="top" />

      <div className="mx-auto flex max-w-5xl flex-col items-center gap-6 px-6 text-center">
        <h2 className="font-display text-4xl md:text-6xl">Sponsors</h2>
        <p className="max-w-[60ch] font-body text-base md:text-xl">
          nwPlus is always looking for new ventures, opportunities, and
          connections. If you are interested in working with us, joining us or
          speaking at one of our events, feel free to reach out to us at{" "}
          <a href="mailto:sponsorship@nwplus.io" className="underline">
            sponsorship@nwplus.io
          </a>
          .
        </p>
      </div>

      {shelves.length > 0 && (
        <div className="mt-12 flex flex-col gap-16 md:mt-16 md:gap-24">
          {shelves.map((shelf, i) =>
            shelf.kind === "card" ? (
              <Shelf key={i} left={shelf.left} right={shelf.right}>
                <ChalkboardCard sponsor={shelf.sponsor} />
              </Shelf>
            ) : (
              <Shelf key={i} left={shelf.left} right={shelf.right}>
                {shelf.sponsors.map((sponsor) => (
                  <PictureFrame key={sponsor.name} sponsor={sponsor} />
                ))}
              </Shelf>
            )
          )}
        </div>
      )}

      <StringLights variant="bottom" />
    </section>
  );
};

export default Sponsors;
```

- [ ] **Step 2: Render it on the page**

In `src/app/page.tsx`, add the import in alphabetical position:

```tsx
import Sponsors from "@/sections/sponsors";
```

and change the last two lines of the JSX so the new section renders above the old one for now:

```tsx
      <Faq />
      <Sponsors />
      <SponsorFooter />
    </div>
```

- [ ] **Step 3: Check it renders with real data**

Run: `pnpm dev`

Open http://localhost:3000/#sponsors. Expected: the placeholder string lights, the "Sponsors" title and copy, and shelves showing the HackCamp2025 sponsors from Firestore as framed logos on plank placeholders. Resize below 768px and confirm decorations disappear and shelves hold at most two frames. Stop the server.

- [ ] **Step 4: Lint, format, commit**

Run: `pnpm exec prettier --write $(git diff --name-only --diff-filter=AM HEAD; git ls-files --others --exclude-standard) && pnpm lint`

```bash
git add src/sections/sponsors.tsx src/app/page.tsx
git commit -m "feat(sponsors): add bookshelf sponsors section"
```

---

### Task 5: Footer components

**Files:**
- Move: `src/components/sponsor-footer/social/*.tsx` to `src/components/footer/social/*.tsx`
- Move and modify: `src/components/sponsor-footer/contact.tsx` to `src/components/footer/contact.tsx`
- Move and modify: `src/components/sponsor-footer/team-gallery.tsx` to `src/components/footer/team-gallery.tsx`
- Create: `src/components/footer/bed-scene.tsx`
- Create: `src/components/footer/cloud-border.tsx`

**Interfaces:**
- Consumes: `Button` from `@/components/ui/button`, `teamMembers` from `@/constants/team-members`, animejs.
- Produces default exports `Contact`, `TeamGallery`, `BedScene`, `CloudBorder`.

- [ ] **Step 1: Move the social icons**

```bash
mkdir -p src/components/footer
git mv src/components/sponsor-footer/social src/components/footer/social
```

- [ ] **Step 2: Move and rewrite Contact**

```bash
git mv src/components/sponsor-footer/contact.tsx src/components/footer/contact.tsx
```

Replace the whole content of `src/components/footer/contact.tsx` with:

```tsx
"use client";

import { Button } from "@/components/ui/button";

import { useState } from "react";

import Facebook from "./social/facebook";
import Instagram from "./social/instagram";
import Linkedin from "./social/linkedin";
import Medium from "./social/medium";
import Youtube from "./social/youtube";

const SOCIALS = [
  { href: "https://www.instagram.com/nwplusubc", label: "Instagram", Icon: Instagram },
  { href: "https://www.linkedin.com/company/nwplus", label: "LinkedIn", Icon: Linkedin },
  { href: "https://www.youtube.com/c/nwPlusUBC", label: "YouTube", Icon: Youtube },
  { href: "https://medium.com/nwplusubc", label: "Medium", Icon: Medium },
  { href: "https://www.facebook.com/nwplusubc", label: "Facebook", Icon: Facebook },
];

const LINKS = [
  { href: "mailto:info@nwplus.io", label: "Email Us" },
  {
    href: "mailto:sponsorship@nwplus.io?subject=Sponsorship%20Inquiry",
    label: "Become a Sponsor",
  },
  {
    href: "https://github.com/MLH/mlh-policies/blob/main/code-of-conduct.md",
    label: "Code of Conduct",
  },
];

const Contact = () => {
  const [inputMessage, setInputMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const email = (form.elements.namedItem("email") as HTMLInputElement).value;
    setInputMessage("");

    try {
      const response = await fetch(
        "https://us-central1-nwplus-ubc.cloudfunctions.net/addToMailingList",
        { method: "POST", body: JSON.stringify({ email }) }
      );
      if (response.ok) {
        setInputMessage(`${email} is now subscribed!`);
        form.reset();
      } else if (response.status === 409) {
        setInputMessage(`${email} is already subscribed!`);
      } else {
        setInputMessage("Something went wrong, please try again later.");
      }
    } catch {
      setInputMessage("Something went wrong, please try again later.");
    }
  };

  return (
    <div className="flex w-full flex-col items-center gap-6 md:gap-8">
      <div className="flex items-center gap-6 md:gap-10">
        {SOCIALS.map(({ href, label, Icon }) => (
          <a
            key={href}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={label}
            className="transition-opacity hover:opacity-80"
          >
            <Icon className="size-8 md:size-12" />
          </a>
        ))}
      </div>

      <div className="flex flex-wrap justify-center gap-x-8 gap-y-2 font-body text-base font-bold underline md:text-2xl">
        {LINKS.map(({ href, label }) => (
          <a key={href} href={href} target="_blank" rel="noopener noreferrer">
            {label}
          </a>
        ))}
      </div>

      <form
        className="flex w-full max-w-xl flex-col items-stretch gap-3 md:flex-row md:items-center"
        onSubmit={handleSubmit}
      >
        <input
          type="email"
          name="email"
          required
          placeholder="Sign up for our newsletter!"
          className="grow rounded-full bg-[#bab9c5] px-5 py-3 font-body text-ink placeholder:text-ink/70 focus:outline-none focus-visible:ring-2 focus-visible:ring-sun"
        />
        <Button
          type="submit"
          className="rounded-md bg-sun px-6 py-3 font-body text-sun-ink hover:bg-sun/90"
        >
          Submit
        </Button>
      </form>

      {inputMessage && (
        <p className="font-body text-sm text-muted-cream">{inputMessage}</p>
      )}
    </div>
  );
};

export default Contact;
```

- [ ] **Step 3: Move and restyle TeamGallery**

```bash
git mv src/components/sponsor-footer/team-gallery.tsx src/components/footer/team-gallery.tsx
```

Replace the whole content of `src/components/footer/team-gallery.tsx` with:

```tsx
"use client";

import { teamMembers } from "@/constants/team-members";

import { animate as anime, JSAnimation } from "animejs";
import Image from "next/image";
import { useEffect, useState } from "react";

type Member = (typeof teamMembers)[number];

const TeamGallery = () => {
  const [animator, setAnimator] = useState<JSAnimation>();
  const [selectedProfile, setSelectedProfile] = useState<Member | null>(null);

  useEffect(() => {
    setAnimator(
      anime("#anim-profiles", {
        easing: "linear",
        loop: true,
        translateX: [-(40 * teamMembers.length), 0],
        duration: 1500 * teamMembers.length,
        autoplay: true,
      })
    );
  }, []);

  return (
    <div className="flex w-full flex-col items-center gap-4">
      <h2 className="font-display text-2xl text-cream md:text-4xl">
        Meet the minds behind HackCamp
      </h2>

      <div className="w-full overflow-x-hidden whitespace-nowrap">
        {/* Profiles are duplicated so the marquee loops seamlessly. */}
        <div
          className="flex gap-6 py-4 will-change-transform"
          id="anim-profiles"
        >
          {[...teamMembers, ...teamMembers].map((profile, i) => (
            <a
              href={profile.social}
              key={i}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block size-16 shrink-0 rounded-md bg-white transition-transform duration-100 ease-in-out hover:scale-110 md:size-20"
              onMouseEnter={() => {
                setSelectedProfile(profile);
                animator?.pause();
              }}
              onMouseLeave={() => {
                setSelectedProfile(null);
                animator?.play();
              }}
            >
              <Image
                src={profile.img}
                alt={profile.name}
                width={100}
                height={100}
                className="size-full rounded-md object-cover"
              />
            </a>
          ))}
        </div>
      </div>

      {/* Hidden on mobile because there is no hover state there. */}
      <p className="hidden h-6 font-body md:block">
        {selectedProfile && (
          <>
            <b className="mr-2">{selectedProfile.name}</b>
            <span className="mr-2">{selectedProfile.emoji}</span>
            {selectedProfile.title}
          </>
        )}
      </p>
    </div>
  );
};

export default TeamGallery;
```

- [ ] **Step 4: Bed scene and cloud border**

Create `src/components/footer/bed-scene.tsx`:

```tsx
import Image from "next/image";

const BedScene = () => {
  return (
    <div aria-hidden className="pointer-events-none mx-auto w-full md:w-[70%]">
      <Image
        src="/assets/footer/bed.svg"
        alt=""
        width={1000}
        height={820}
        className="h-auto w-full"
      />
    </div>
  );
};

export default BedScene;
```

Create `src/components/footer/cloud-border.tsx`:

```tsx
import Image from "next/image";

const CloudBorder = () => {
  return (
    <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
      <Image
        src="/assets/footer/cloud-left.svg"
        alt=""
        width={220}
        height={1400}
        className="absolute left-0 top-0 hidden h-full w-auto md:block"
      />
      <Image
        src="/assets/footer/cloud-right.svg"
        alt=""
        width={220}
        height={1400}
        className="absolute right-0 top-0 hidden h-full w-auto md:block"
      />
      <Image
        src="/assets/footer/cloud-bottom.svg"
        alt=""
        width={1440}
        height={260}
        className="absolute bottom-0 left-0 h-auto w-full"
      />
    </div>
  );
};

export default CloudBorder;
```

- [ ] **Step 5: Type-check, lint, format, commit**

Run: `pnpm exec prettier --write $(git diff --name-only --diff-filter=AM HEAD; git ls-files --others --exclude-standard) && pnpm lint && npx tsc --noEmit`

Expected: no errors. The old `src/sections/sponsor-footer.tsx` still compiles because it imports from `sponsor-footer/sponsor-blurbs`, which has not moved; its imports of `contact` and `team-gallery` will fail, so update those two import lines in `src/sections/sponsor-footer.tsx` to the new paths for this intermediate commit:

```tsx
import Contact from "@/components/footer/contact";
import TeamGallery from "@/components/footer/team-gallery";
```

```bash
git add src/components/footer src/components/sponsor-footer src/sections/sponsor-footer.tsx
git commit -m "feat(footer): add restyled contact, team gallery, bed scene, and cloud border"
```

---

### Task 6: Footer section, page wiring, and cleanup

**Files:**
- Create: `src/sections/footer.tsx`
- Modify: `src/app/page.tsx`
- Modify: `src/constants/team-members.ts` (image paths)
- Move: `public/assets/sponsor-footer/profiles` to `public/assets/footer/profiles`
- Delete: `src/sections/sponsor-footer.tsx`, `src/components/sponsor-footer/sponsor-blurbs.tsx`, `src/hooks/use-autoplay-audio.tsx`, `public/assets/sponsor-footer/background.svg`, `public/assets/sponsor-footer/background-mobile.png`, `public/assets/sponsor-footer/blurbs-background.svg`, `public/assets/sponsor-footer/campfire-sound.mp3`

**Interfaces:**
- Consumes: Task 5 components.
- Produces: default export `Footer` section. After this task `src/components/sponsor-footer/` and `public/assets/sponsor-footer/` no longer exist.

- [ ] **Step 1: Write the footer section**

Create `src/sections/footer.tsx`:

```tsx
import BedScene from "@/components/footer/bed-scene";
import CloudBorder from "@/components/footer/cloud-border";
import Contact from "@/components/footer/contact";
import TeamGallery from "@/components/footer/team-gallery";

const Footer = () => {
  return (
    <footer
      id="footer"
      className="relative w-full overflow-hidden bg-night-bottom text-cream"
    >
      <CloudBorder />
      <div className="relative z-10 mx-auto flex max-w-6xl flex-col items-center gap-10 px-6 pb-24 pt-16 md:gap-14">
        <Contact />
        <BedScene />
        <p className="max-w-[80ch] text-center font-body text-xs md:text-base">
          HackCamp 2026 will be taking place on xʷməθkʷəy̓əm (Musqueam) and
          səlilwətaɬ (Tsleil-Waututh) territory. As we build tomorrow&apos;s
          tech community, we recognize our responsibility to understand and
          respect Indigenous histories. To learn more, visit{" "}
          <a
            href="https://guides.library.ubc.ca/xwi7xwaresearchguide"
            target="_blank"
            rel="noopener noreferrer"
            className="underline"
          >
            xwi7xwa&apos;s Research Guide
          </a>
          .
        </p>
        <TeamGallery />
        <p className="font-body text-sm text-muted-cream">
          Copyright © HackCamp 2026
        </p>
      </div>
    </footer>
  );
};

export default Footer;
```

- [ ] **Step 2: Wire the page and remove the old section**

In `src/app/page.tsx`, replace the `SponsorFooter` import with:

```tsx
import Footer from "@/sections/footer";
```

(keep imports alphabetical: `Faq`, `Footer`, `Hero`, `Learn`, `Recap`, `Sponsors`, `StatsTestimonials`, `TenYears`), and change the end of the JSX to:

```tsx
      <Faq />
      <Sponsors />
      <Footer />
    </div>
```

- [ ] **Step 3: Move the profile photos and update paths**

```bash
git mv public/assets/sponsor-footer/profiles public/assets/footer/profiles
sed -i '' 's#/assets/sponsor-footer/profiles/#/assets/footer/profiles/#g' src/constants/team-members.ts
grep -c "/assets/footer/profiles/" src/constants/team-members.ts
```

Expected: the grep prints `52`.

- [ ] **Step 4: Delete the 2025 files**

```bash
git rm src/sections/sponsor-footer.tsx src/components/sponsor-footer/sponsor-blurbs.tsx src/hooks/use-autoplay-audio.tsx
git rm public/assets/sponsor-footer/background.svg public/assets/sponsor-footer/background-mobile.png public/assets/sponsor-footer/blurbs-background.svg public/assets/sponsor-footer/campfire-sound.mp3
ls src/components/sponsor-footer public/assets/sponsor-footer 2>&1
```

Expected: both `ls` targets report `No such file or directory`. Also remove the now-unused `.bg-footer-radial` utility from `src/app/globals.css` (the block from `.bg-footer-radial {` to its closing `}`).

- [ ] **Step 5: Type-check, lint, format, test, build**

Run: `pnpm exec prettier --write $(git diff --name-only --diff-filter=AM HEAD; git ls-files --others --exclude-standard) && pnpm lint && npx tsc --noEmit && pnpm test && pnpm build:staging`

Expected: no errors, 8 tests pass, build ends with `✓ Exporting (3/3)`. If `tsc` reports a stale import of `sponsor-footer` anywhere, fix that import; nothing outside this task should reference the old folder.

- [ ] **Step 6: Commit**

```bash
git add -A src public/assets/footer
git commit -m "feat(footer): add 2026 footer section and remove 2025 sponsor-footer"
```

---

### Task 7: Visual verification and pull request

**Files:**
- None created in the repo. Screenshots go to the session scratchpad.

- [ ] **Step 1: Start the dev server**

Run in the background: `pnpm dev`

Expected: `Ready in ...` and http://localhost:3000 responds.

- [ ] **Step 2: Capture desktop and mobile screenshots**

Run (adjust `SCRATCH` to the session scratchpad path):

```bash
SCRATCH=/private/tmp/claude-501/-Users-ericzuo-Documents-GitHub-external-templates/153c20bd-57b6-4c99-b4cd-5cf9b09d162b/scratchpad
CHROME="/Applications/Google Chrome.app/Contents/MacOS/Google Chrome"
"$CHROME" --headless=new --disable-gpu --hide-scrollbars --window-size=1440,14000 --virtual-time-budget=8000 --screenshot="$SCRATCH/desktop-full.png" http://localhost:3000/
"$CHROME" --headless=new --disable-gpu --hide-scrollbars --window-size=390,22000 --virtual-time-budget=8000 --screenshot="$SCRATCH/mobile-full.png" http://localhost:3000/
```

Then crop the bottom of each with the project's sharp build so the sponsors and footer are readable:

```bash
SHARP="$PWD/$(ls -d node_modules/.pnpm/sharp@*/node_modules/sharp | head -1)"
node -e '
const sharp = require(process.argv[1]);
(async () => {
  for (const [name, w] of [["desktop", 1440], ["mobile", 390]]) {
    const src = `${process.argv[2]}/${name}-full.png`;
    const meta = await sharp(src).metadata();
    const h = Math.min(meta.height, name === "desktop" ? 4200 : 5200);
    await sharp(src).extract({ left: 0, top: meta.height - h, width: w, height: h }).toFile(`${process.argv[2]}/${name}-bottom.png`);
    console.log(name, meta.width, meta.height, "-> cropped", h);
  }
})();' "$SHARP" "$SCRATCH"
```

- [ ] **Step 3: Compare with the Figma screenshots**

Read `$SCRATCH/desktop-bottom.png` and `$SCRATCH/mobile-bottom.png` and compare against `screenshots/*.png`. Check, in order: section order matches, title and copy present, shelves show frames sitting on planks with decorations at the ends on desktop and none on mobile, socials row and three links present, newsletter input and yellow button, bed placeholder, acknowledgement, team marquee tiles, copyright. Fix any layout problem found, re-run Step 2, and commit the fix with `fix(sponsors):` or `fix(footer):`.

- [ ] **Step 4: Stop the dev server and run the full checks**

Run: `pnpm lint && pnpm test && pnpm build:staging`

Expected: no errors, 8 tests pass, export succeeds.

- [ ] **Step 5: Push and open the pull request**

```bash
git push -u origin eric/hackcamp2026-sponsors-footer
gh pr create --base hackcamp2026_dev --title "feat: HackCamp 2026 sponsors and footer sections" --body-file - <<'EOF'
## Description

Replaces the 2025 sponsor-footer section with the 2026 design: a night-sky bookshelf Sponsors section and a bed-scene Footer. Sponsor data still comes from Firestore; the newsletter form and team marquee are carried over and restyled.

All illustrations are labelled placeholder SVGs at their final paths under `public/assets/sponsors/` and `public/assets/footer/`. The export list for the design team is the asset manifest in `docs/superpowers/specs/2026-09-04-sponsors-footer-design.md`. Overwriting those files completes the swap with no code changes.

Also adds vitest with tests for the shelf layout rule, and a placeholder generator script for other sections to reuse.

## Other considerations

- `CURRENT_HACKATHON` stays `HackCamp2025` until launch.
- Fonts map to the existing Poor Story and Cygre until the Figma families are known; swap point is the two `--font-*` lines in `globals.css`.
- No mobile Figma frames yet; mobile layout is a stacked adaptation.

🤖 Generated with [Claude Code](https://claude.com/claude-code)

https://claude.ai/code/session_01UpvHDWskBck57fcXnmy4Jq
EOF
```

Expected: a PR URL, and within a few minutes a Firebase preview link comment from the hosting PR workflow.
