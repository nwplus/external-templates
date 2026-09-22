/**
 * Pulsing glow that follows the house's light beam. Sized to the house box:
 * the wedge starts at the window (~29% / 38%) and fans out to the right, with
 * the blur applied on the outer element so the clipped edges stay soft.
 *
 * The outer element only covers the beam's own corner of the house box
 * (20–88% across, 5–67% down) rather than the whole box: the blur is not
 * clipped by it, so the glow looks the same, but the layer the compositor
 * blurs and blends every frame is a quarter of the size. The wedge and the
 * gradient stops below are the design's house-box percentages mapped into
 * that smaller box.
 */
export const SpotlightGlow = () => (
  <div
    aria-hidden
    className="pointer-events-none absolute left-[20%] top-[5%] z-20 h-[62%] w-[68%] mix-blend-screen blur-2xl motion-safe:animate-glow"
  >
    <div
      className="absolute inset-0"
      style={{
        clipPath: "polygon(11.765% 51.613%, 88.235% 16.129%, 88.235% 83.871%)",
        background:
          "linear-gradient(to right, rgba(255,218,136,0.95) 13.235%, rgba(255,218,136,0.45) 55.882%, transparent 88.235%)",
      }}
    />
  </div>
);
