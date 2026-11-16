import { SceneLayer } from "@/components/ui/scene-layer";
import { RECAP_MOBILE } from "@/constants/recap";

import "./recap.css";

/**
 * Phone recap: the same wall of polaroids, edge to edge, no garage frame to
 * open. The photos drift a little so the wall doesn't read as one flat image.
 */
const PHOTOS = [
  { box: RECAP_MOBILE.photo1, src: "mobile-photo-1" },
  { box: RECAP_MOBILE.photo2, src: "mobile-photo-2" },
  { box: RECAP_MOBILE.photo3, src: "mobile-photo-3" },
  { box: RECAP_MOBILE.photo4, src: "mobile-photo-4" },
  { box: RECAP_MOBILE.photo5, src: "mobile-photo-5" },
  { box: RECAP_MOBILE.photo6, src: "mobile-photo-6" },
  { box: RECAP_MOBILE.photo7, src: "mobile-photo-7" },
  { box: RECAP_MOBILE.photo8, src: "mobile-photo-8" },
  { box: RECAP_MOBILE.photo9, src: "mobile-photo-9" },
];

export const RecapSceneMobile = () => (
  <div className="@container relative aspect-[407/874] w-full overflow-hidden bg-[#0b101c]">
    <SceneLayer src="/assets/recap/mobile-door.webp" box={RECAP_MOBILE.door} priority />

    {PHOTOS.map((photo, index) => (
      <SceneLayer
        key={photo.src}
        src={`/assets/recap/${photo.src}.webp`}
        box={photo.box}
        className="recap-mobile-photo"
        style={{ animationDelay: `${index * 0.35}s` }}
      />
    ))}

    <SceneLayer
      src="/assets/recap/mobile-lights.webp"
      box={RECAP_MOBILE.lights}
      fit="contain"
    />

    <h2 className="absolute inset-x-0 top-[3.09%] text-center font-display text-[7.37cqw] leading-none text-white">
      Recap
    </h2>
  </div>
);
