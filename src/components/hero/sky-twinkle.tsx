/**
 * The hero sky's twinkle. The sparkles that stayed in the flattened
 * background can't move, so each gets a soft bloom laid over it that swells
 * and fades on its own timing; a few glint instead, dark most of the cycle
 * and flaring briefly, so the sky sparkles rather than breathes. Around them
 * a sprinkle of pinprick stars twinkles faintly, kept dim enough that the
 * painted sparkles stay the ones you notice. Everything is placed in
 * percentages of the 1687x1154 art, like the drifting stars, and only
 * opacity and scale move.
 *
 * Timings come from the index rather than Math.random() so the server and
 * the browser agree on every one.
 */
const ART = { width: 1687, height: 1154 };

/** A repeatable 0-1 value for star `i`; `salt` gives each property its own. */
const noise = (i: number, salt: number) =>
  ((i * 7919 + salt * 104729) % 997) / 997;

/** The sparkles still baked into the art: centre and bounding box, in art px. */
const SPARKLES = [
  { x: 1410, y: 645, w: 85, h: 66 },
  { x: 711, y: 1111, w: 50, h: 48 },
  { x: 1333, y: 115, w: 61, h: 65 },
  { x: 828, y: 930, w: 58, h: 59 },
  { x: 1047, y: 830, w: 35, h: 35 },
  { x: 93, y: 160, w: 50, h: 30 },
  { x: 282, y: 394, w: 39, h: 55 },
  { x: 1317, y: 964, w: 48, h: 40 },
  { x: 1257, y: 438, w: 42, h: 42 },
  { x: 1517, y: 853, w: 34, h: 23 },
  { x: 1018, y: 1029, w: 29, h: 28 },
  { x: 41, y: 545, w: 19, h: 20 },
] as const;

/** Which of the sparkles flare briefly instead of breathing. */
const GLINTS = new Set([2, 5, 8, 11]);

/**
 * Pinprick stars, scattered by the golden-ratio sequence so they spread
 * evenly without a grid showing, and kept below the top 12% where the cloud
 * scallops sit.
 */
const PINPRICKS = Array.from({ length: 40 }, (_, i) => ({
  left: ((i * 0.618034 + 0.13) % 1) * 100,
  top: 12 + ((i * 0.754878 + 0.37) % 1) * 84,
  size: 0.15 + noise(i, 1) * 0.15,
}));

const pct = (value: number) => `${value.toFixed(2)}%`;

export const SkyTwinkle = () => (
  <>
    {SPARKLES.map(({ x, y, w, h }, i) => {
      const size = Math.max(w, h) * 2.3;
      const glint = GLINTS.has(i);
      return (
        <span
          key={`${x},${y}`}
          aria-hidden
          className={`${glint ? "hero-glint" : "hero-bloom"} pointer-events-none absolute aspect-square rounded-full`}
          style={{
            left: pct(((x - size / 2) / ART.width) * 100),
            top: pct(((y - size / 2) / ART.height) * 100),
            width: pct((size / ART.width) * 100),
            animationDuration: `${(glint ? 4 : 2.5) + noise(i, 2) * 1.5}s`,
            animationDelay: `-${(noise(i, 3) * 5).toFixed(2)}s`,
          }}
        />
      );
    })}
    {PINPRICKS.map(({ left, top, size }, i) => (
      <span
        key={i}
        aria-hidden
        className="hero-pinprick pointer-events-none absolute aspect-square rounded-full"
        style={{
          left: pct(left),
          top: pct(top),
          width: pct(size),
          animationDuration: `${2.5 + noise(i, 4) * 3}s`,
          animationDelay: `-${(noise(i, 5) * 6).toFixed(2)}s`,
        }}
      />
    ))}
  </>
);
