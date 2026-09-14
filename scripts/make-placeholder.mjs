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
