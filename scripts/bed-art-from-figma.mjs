#!/usr/bin/env node
/**
 * Turns Figma's SVG export of the footer bed ("bed w/o backboard", node
 * 13877:1746, exported with layer names as ids) into
 * src/components/footer/bed-art.tsx, the inline SVG the bed scene animates.
 *
 *   node scripts/bed-art-from-figma.mjs path/to/export.svg
 *
 * It tags the parts bed-scene.tsx and globals.css reach for — the sleeper
 * (`data-part="nugget"`), the phone in the bear's hand (`data-part="phone"`)
 * and the two layers of light the phone throws (wrapped in `.screen-glow`) —
 * drops the layer-name ids nothing refers to, and rewrites the attributes as
 * JSX. No dependencies: the export is a flat tag soup with no text nodes.
 */
import { readFileSync, writeFileSync } from "node:fs";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const input = process.argv[2];
if (!input) {
  console.error("usage: node scripts/bed-art-from-figma.mjs <export.svg>");
  process.exit(1);
}
const out = resolve(
  dirname(fileURLToPath(import.meta.url)),
  "../src/components/footer/bed-art.tsx"
);

const source = readFileSync(input, "utf8");

/** Figma layer name → what the bed scene needs on it. */
const PARTS = { nugget: "nugget", phone: "phone" };
/** Layers of phone light, dimmed while the phone is out. */
const GLOWS = new Set(["Vector 3856", "phone light"]);

// Ids that something points at (masks, filters, gradients) stay; the rest are
// layer names Figma added and would only clash in the page.
const referenced = new Set(
  [...source.matchAll(/url\(#([^)]+)\)|href="#([^"]+)"/g)].map(
    (m) => m[1] ?? m[2]
  )
);

const camel = (name) => name.replace(/-([a-z])/g, (_, c) => c.toUpperCase());

const jsxStyle = (css) =>
  `{{ ${css
    .split(";")
    .filter(Boolean)
    .map((rule) => {
      const [key, value] = rule.split(":").map((s) => s.trim());
      return `${camel(key)}: ${JSON.stringify(value)}`;
    })
    .join(", ")} }}`;

const jsxAttributes = (raw) => {
  const attrs = [...raw.matchAll(/([\w:-]+)="([^"]*)"/g)].map(([, k, v]) => [
    k,
    v,
  ]);
  const kept = [];
  for (const [key, value] of attrs) {
    if (key === "id" && !referenced.has(value)) continue;
    if (key === "xmlns" || key === "xmlns:xlink") continue;
    if (key === "style") kept.push(`style=${jsxStyle(value)}`);
    else if (key === "xlink:href") kept.push(`xlinkHref="${value}"`);
    else if (key === "class") kept.push(`className="${value}"`);
    else if (key.startsWith("data-") || key.startsWith("aria-"))
      kept.push(`${key}="${value}"`);
    else kept.push(`${camel(key)}="${value}"`);
  }
  return kept;
};

const root = source.match(/<svg([^>]*)>/);
const size = Object.fromEntries(
  [...root[1].matchAll(/(width|height|viewBox)="([^"]*)"/g)].map(([, k, v]) => [
    k,
    v,
  ])
);

let body = "";
let depth = 0;
const closeExtra = []; // depths at which a wrapper <g> has to be closed too
const seen = new Set();
const tag = /<(\/?)([a-zA-Z][\w:-]*)([^>]*?)(\/?)>/g;
tag.lastIndex = source.indexOf(">", source.indexOf("<svg")) + 1;
let text = tag.lastIndex;
for (let m; (m = tag.exec(source)); ) {
  const [, closing, name, rawAttrs, selfClosing] = m;
  body += source.slice(text, m.index).replace(/\s+/g, " ");
  text = tag.lastIndex;
  if (name === "svg") continue;
  if (closing) {
    body += `</${name}>`;
    if (name === "g") {
      depth -= 1;
      if (closeExtra.at(-1) === depth) {
        closeExtra.pop();
        body += "</g>";
      }
    }
    continue;
  }
  const id = rawAttrs.match(/\bid="([^"]*)"/)?.[1];
  const attrs = jsxAttributes(rawAttrs);
  if (name === "g" && id && PARTS[id]) {
    attrs.unshift(`data-part="${PARTS[id]}"`);
    seen.add(id);
  }
  if (name === "g" && id && GLOWS.has(id)) {
    body += `<g className="screen-glow">`;
    closeExtra.push(depth);
    seen.add(id);
  }
  body += `<${name}${attrs.length ? " " + attrs.join(" ") : ""}${selfClosing ? " />" : ">"}`;
  if (name === "g" && !selfClosing) depth += 1;
}

const missing = [...Object.keys(PARTS), ...GLOWS].filter((p) => !seen.has(p));
if (missing.length) {
  console.error(`missing layers in the export: ${missing.join(", ")}`);
  process.exit(1);
}

writeFileSync(
  out,
  `/**
 * The bed with the two mascots in it (Figma "bed w/o backboard", node
 * 13877:1746), inline so the bed scene can move parts of it: \`nugget\` is the
 * sleeper on the right, \`phone\` the phone in the bear's hand and
 * \`.screen-glow\` the light it throws. Generated from the Figma export by
 * scripts/bed-art-from-figma.mjs, then formatted. Do not hand-edit the paths;
 * export the node again (SVG, layer names as ids) and re-run the script.
 */
export const BedArt = ({ className }: { className?: string }) => (
  <svg
    className={className}
    width="${size.width}"
    height="${size.height}"
    viewBox="${size.viewBox}"
    fill="none"
    aria-hidden="true"
  >
    ${body.trim()}
  </svg>
);
`
);
console.log(
  `wrote ${out} (${size.width}x${size.height}, parts: ${[...seen].join(", ")})`
);
