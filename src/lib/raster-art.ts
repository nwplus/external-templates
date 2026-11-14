/** Every nwHacks 2027 scene is a full-width frame this many design px wide. */
const FRAME_W = 1512;

/**
 * `srcSet` and `sizes` for character art that ships as WebP. The Figma
 * exports lean on SVG filters that some browsers rasterize at low
 * resolution, so the characters are rendered from art/ at 2x and 3x
 * (scripts/rasterize-characters.mjs) and `src` points at the 2x file.
 * Anything else (a plain SVG) gets nothing extra.
 *
 * `designW` is the art's width in design px; the scenes scale with the
 * viewport, so it shows at `designW / 1512` of the viewport's width.
 */
export const rasterArt = (src: string, designW: number) => {
  if (!src.endsWith("@2x.webp")) return {};
  const at3x = src.replace(/@2x\.webp$/, "@3x.webp");
  return {
    srcSet: `${src} ${Math.ceil(designW * 2)}w, ${at3x} ${Math.ceil(designW * 3)}w`,
    sizes: `${((designW / FRAME_W) * 100).toFixed(3)}vw`,
  };
};
