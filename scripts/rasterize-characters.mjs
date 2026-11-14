// renders the nwHacks 2027 character art (art/<section>/<name>.svg) to
// public/assets/<section>/<name>@2x.webp and @3x.webp. the figma exports lean
// on svg filters (drop/inner shadows, noise) that some browsers rasterize at
// low res, so the characters looked pixelated as <img> svgs. needs chrome
// usage: node scripts/rasterize-characters.mjs [section/name...]
import { execFileSync } from "node:child_process";
import {
  existsSync,
  mkdirSync,
  mkdtempSync,
  readdirSync,
  readFileSync,
  rmSync,
  writeFileSync,
} from "node:fs";
import { createRequire } from "node:module";
import { tmpdir } from "node:os";
import { join, resolve } from "node:path";
import { pathToFileURL } from "node:url";

const ART_DIR = resolve("art");
const ASSETS_DIR = resolve("public/assets");
const SCALES = [2, 3];
const CHROME =
  process.env.CHROME_PATH ??
  [
    "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome",
    "C:/Program Files/Google/Chrome/Application/chrome.exe",
    "/usr/bin/google-chrome",
  ].find((path) => existsSync(path));

if (!CHROME || !existsSync(CHROME)) {
  console.error("Chrome not found (set CHROME_PATH)");
  process.exit(1);
}

// sharp only comes in through next and pnpm hides it from the root, so grab next's copy
const require = createRequire(import.meta.url);
const sharp = require(
  require.resolve("sharp", {
    paths: [resolve(require.resolve("next/package.json"), "..")],
  })
);

const all = readdirSync(ART_DIR, { withFileTypes: true })
  .filter((dir) => dir.isDirectory())
  .flatMap((dir) =>
    readdirSync(join(ART_DIR, dir.name))
      .filter((file) => file.endsWith(".svg"))
      .map((file) => `${dir.name}/${file.slice(0, -4)}`)
  );
const args = process.argv.slice(2);
const names = args.length ? args : all;
const unknown = names.filter((name) => !all.includes(name));
if (unknown.length) {
  console.error(`not in art/: ${unknown.join(", ")}`);
  process.exit(1);
}

/** The svg's own size in design px, from its root width/height. */
const sizeOf = (svg) => {
  const root = svg.match(/<svg\b[^>]*>/)?.[0] ?? "";
  const w = Number(root.match(/\bwidth="([\d.]+)"/)?.[1]);
  const h = Number(root.match(/\bheight="([\d.]+)"/)?.[1]);
  if (!(w > 0 && h > 0)) throw new Error("svg has no width/height");
  return { w, h };
};

sharp.cache(false);
const tmp = mkdtempSync(join(tmpdir(), "characters-"));
const profile = join(tmp, "chrome");
mkdirSync(profile);

try {
  for (const name of names) {
    const svgPath = join(ART_DIR, `${name}.svg`);
    const { w, h } = sizeOf(readFileSync(svgPath, "utf8"));
    mkdirSync(join(ASSETS_DIR, name, ".."), { recursive: true });

    for (const scale of SCALES) {
      // whole device px, so the art fills the webp edge to edge
      const width = Math.ceil(w * scale);
      const height = Math.ceil(h * scale);
      const htmlPath = join(tmp, "page.html");
      const pngPath = join(tmp, "shot.png");
      writeFileSync(
        htmlPath,
        `<html><body style="margin:0;background:transparent"><img src="${pathToFileURL(svgPath).href}" style="width:${width / scale}px;height:${height / scale}px;display:block"></body></html>`
      );

      execFileSync(
        CHROME,
        [
          "--headless=new",
          "--disable-gpu",
          "--hide-scrollbars",
          "--allow-file-access-from-files",
          `--user-data-dir=${profile}`,
          "--default-background-color=00000000",
          `--force-device-scale-factor=${scale}`,
          `--window-size=${Math.max(Math.ceil(w), 64)},${Math.max(Math.ceil(h), 64)}`,
          `--screenshot=${pngPath}`,
          pathToFileURL(htmlPath).href,
        ],
        { stdio: "ignore" }
      );

      const out = join(ASSETS_DIR, `${name}@${scale}x.webp`);
      const webp = await sharp(pngPath)
        .extract({ left: 0, top: 0, width, height })
        .webp({ quality: 90, alphaQuality: 100, effort: 6 })
        .toBuffer();
      writeFileSync(out, webp);
      console.log(
        `wrote ${out} (${width}x${height}, ${(webp.length / 1024).toFixed(0)} KB)`
      );
    }
  }
} finally {
  rmSync(tmp, { recursive: true, force: true });
}
