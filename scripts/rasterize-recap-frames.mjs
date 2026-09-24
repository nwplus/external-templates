// re-renders the recap frame webps from the old figma svgs (deleted in 7b382527)
// w/ the texture scaled down, figma exported it way bigger than the design. needs chrome
// usage: node scripts/rasterize-recap-frames.mjs [textureScale=0.5] [name...]
import { execFileSync } from "node:child_process";
import {
  existsSync,
  mkdirSync,
  mkdtempSync,
  rmSync,
  writeFileSync,
} from "node:fs";
import { createRequire } from "node:module";
import { tmpdir } from "node:os";
import { join, resolve } from "node:path";
import { pathToFileURL } from "node:url";

const SOURCE_COMMIT = "7b382527^";
const RECAP_DIR = resolve("public/assets/recap");
const CHROME =
  process.env.CHROME_PATH ??
  "C:/Program Files/Google/Chrome/Application/chrome.exe";

const TEXTURED = [
  "brown-photo-frame",
  "calendar",
  "clock",
  "dark-brown-frame",
  "green-frame",
  "hanging-frame",
  "light",
  "mirror",
  "purple-frame",
  "purple-frame-gem-inner",
  "purple-frame-gem-outer",
  "red-frame",
];

const [scaleArg, ...nameArgs] = process.argv.slice(2);
const TEXTURE_SCALE = Number(scaleArg ?? 0.5);
const names = nameArgs.length ? nameArgs : TEXTURED;

if (!(TEXTURE_SCALE > 0)) {
  console.error(
    "usage: node scripts/rasterize-recap-frames.mjs [textureScale=0.5] [name...]"
  );
  process.exit(1);
}
if (!existsSync(CHROME)) {
  console.error(`Chrome not found at ${CHROME} (set CHROME_PATH)`);
  process.exit(1);
}

// sharp only comes in through next and pnpm hides it from the root, so grab next's copy
const require = createRequire(import.meta.url);
const sharp = require(
  require.resolve("sharp", {
    paths: [resolve(require.resolve("next/package.json"), "..")],
  })
);

const scalePatterns = (svg) =>
  svg.replace(/patternTransform="matrix\(([^)]*)\)"/g, (_, args) => {
    const scaled = args
      .trim()
      .split(/[\s,]+/)
      .map((n) => +(Number(n) * TEXTURE_SCALE).toFixed(4));
    return `patternTransform="matrix(${scaled.join(" ")})"`;
  });

sharp.cache(false);
const tmp = mkdtempSync(join(tmpdir(), "recap-frames-"));
const profile = join(tmp, "chrome");
mkdirSync(profile);

try {
  for (const name of names) {
    const out = join(RECAP_DIR, `${name}.webp`);
    const { width, height } = await sharp(out).metadata();

    const svg = execFileSync(
      "git",
      ["show", `${SOURCE_COMMIT}:public/assets/recap/${name}.svg`],
      { encoding: "utf8", maxBuffer: 64 * 1024 * 1024 }
    );
    if (!svg.includes("<pattern")) {
      console.warn(`skip ${name}: no pattern texture`);
      continue;
    }

    const svgPath = join(tmp, `${name}.svg`);
    const htmlPath = join(tmp, `${name}.html`);
    const pngPath = join(tmp, `${name}.png`);
    writeFileSync(svgPath, scalePatterns(svg));
    writeFileSync(
      htmlPath,
      `<html><body style="margin:0;background:transparent"><img src="${name}.svg" style="width:${width}px;height:${height}px;display:block"></body></html>`
    );

    execFileSync(
      CHROME,
      [
        "--headless=new",
        "--disable-gpu",
        "--hide-scrollbars",
        `--user-data-dir=${profile}`,
        "--default-background-color=00000000",
        "--force-device-scale-factor=1",
        `--window-size=${width},${height}`,
        `--screenshot=${pngPath}`,
        pathToFileURL(htmlPath).href,
      ],
      { stdio: "ignore" }
    );

    // toFile() fails on windows bc sharp still has `out` open from metadata()
    const webp = await sharp(pngPath)
      .extract({ left: 0, top: 0, width, height })
      .webp({ quality: 85, alphaQuality: 90 })
      .toBuffer();
    writeFileSync(out, webp);
    console.log(`wrote ${out} (${width}x${height}, texture x${TEXTURE_SCALE})`);
  }
} finally {
  rmSync(tmp, { recursive: true, force: true });
}
