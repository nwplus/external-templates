import { LightboxGallery, LightboxTrigger } from "@/components/ui/lightbox";
import { SceneLayer } from "@/components/ui/scene-layer";
import { RECAP_MOBILE } from "@/constants/recap";
import { RECAP_DESKTOP_PHOTOS } from "@/constants/recap-photos";
import { frameStyle } from "@/lib/frame";

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
    <SceneLayer
      src="/assets/recap/mobile-door.webp"
      box={RECAP_MOBILE.door}
      priority
    />

    <LightboxGallery>
      {PHOTOS.map((photo, index) => {
        const full = RECAP_DESKTOP_PHOTOS[[0, 1, 2, 3, 4, 5, 6, 8, 9][index]];
        if ("kind" in full) {
          return (
            <SceneLayer
              key={photo.src}
              src={`/assets/recap/${photo.src}.webp`}
              box={photo.box}
              alt={full.alt}
              className="recap-mobile-photo"
              style={{ animationDelay: `${index * 0.35}s` }}
            />
          );
        }
        return (
          <LightboxTrigger
            key={photo.src}
            photo={{
              src: full.fullSrc,
              rotation: full.rotation,
              alt: `nwHacks recap photo ${index + 1}`,
              caption: `nwHacks recap photo ${index + 1}`,
              width: full.fullWidth,
              height: full.fullHeight,
            }}
            className="recap-photo recap-mobile-photo absolute"
            style={{
              ...frameStyle(photo.box),
              animationDelay: `${index * 0.35}s`,
            }}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={`/assets/recap/${photo.src}.webp`}
              alt={`nwHacks recap photo ${index + 1}`}
              draggable={false}
              className="size-full select-none"
            />
          </LightboxTrigger>
        );
      })}
    </LightboxGallery>

    <SceneLayer
      src="/assets/recap/mobile-lights.webp"
      box={RECAP_MOBILE.lights}
      fit="contain"
    />

    <SceneLayer
      src="/assets/recap/mobile-door-bottom.svg"
      box={RECAP_MOBILE.doorBottom}
    />
    <SceneLayer
      src="/assets/recap/mobile-door-handle.svg"
      box={RECAP_MOBILE.doorHandle}
    />

    <h2 className="absolute inset-x-0 top-[3.09%] text-center font-display text-[7.37cqw] leading-none text-white">
      Recap
    </h2>
  </div>
);
