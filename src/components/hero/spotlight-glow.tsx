/**
 * Pulsing glow that follows the house's light beam. Sized to the house box:
 * the wedge starts at the window (~29% / 38%) and fans out to the right, with
 * the blur applied on the outer element so the clipped edges stay soft.
 */
export const SpotlightGlow = () => (
  <div
    aria-hidden
    className="pointer-events-none absolute inset-0 z-20 mix-blend-screen animate-glow blur-2xl"
  >
    <div
      className="absolute inset-0"
      style={{
        clipPath: "polygon(28% 37%, 80% 15%, 80% 57%)",
        background:
          "linear-gradient(to right, rgba(255,218,136,0.95) 29%, rgba(255,218,136,0.45) 58%, transparent 80%)",
      }}
    />
  </div>
);
