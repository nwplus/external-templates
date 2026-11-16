import type { CSSProperties } from "react";

import { useCollectFood } from "@/components/food-collection";

import { Art, boxStyle, shiftStyle } from "./faq-art";
import { bobStyle, FishArt, grassStyle } from "./faq-fish";
import { DEER, GIANT_TANK, LONG_TANK, NUGGET } from "./faq-layout";

const LONG_ORIGIN = { x: LONG_TANK.x, y: LONG_TANK.y };
const LONG_BOX = { x: 0, y: 0, w: LONG_TANK.w, h: LONG_TANK.h };

/**
 * The long tank of orange fish: top right in the idle scene, under the
 * questions once a tank is picked, and out of the way while an answer is
 * open. All three fish sway at the quick "special" tempo; the middle one
 * blows bubbles on a loop and is the (not yet wired) easter egg.
 */
export const LongTank = ({ hidden }: { hidden: boolean }) => {
  const collectFood = useCollectFood();
  const { blowerBubbles } = LONG_TANK;
  return (
    <div
      className="faq-move pointer-events-none absolute"
      style={{ ...boxStyle(LONG_TANK), ...shiftStyle(LONG_TANK.shift) }}
    >
      <div
        className="faq-long-fade relative size-full"
        data-faq-hidden={hidden || undefined}
      >
        <Art layer={{ ...LONG_BOX, src: LONG_TANK.back }} />
        <Art
          layer={{ ...LONG_BOX, src: LONG_TANK.seagrass }}
          wrap={(img) => (
            <div
              className="faq-grass size-full"
              style={grassStyle(41, LONG_TANK.grassRoot)}
            >
              {img}
            </div>
          )}
        />
        <Art layer={{ ...LONG_BOX, src: LONG_TANK.front }} />

        {LONG_TANK.fish.map((fish, i) => (
          <FishArt
            key={fish.src}
            fish={fish}
            origin={LONG_ORIGIN}
            seed={50 + i}
            sway="special"
            accent={false}
          />
        ))}
        <FishArt
          fish={LONG_TANK.blower}
          origin={LONG_ORIGIN}
          seed={53}
          sway="special"
          accent={false}
          className="faq-easter-egg"
          onActivate={() => collectFood("taiyaki")}
          ariaLabel="Collect taiyaki"
        />
        <svg
          aria-hidden="true"
          className="absolute overflow-visible"
          style={boxStyle(blowerBubbles, LONG_ORIGIN)}
          viewBox={`0 0 ${blowerBubbles.w} ${blowerBubbles.h}`}
          fill={blowerBubbles.fill}
        >
          {blowerBubbles.bubbles.map(({ cx, cy, r }, i) => (
            <circle
              key={i}
              cx={cx}
              cy={cy}
              r={r}
              className={`faq-blow-${i + 1}`}
            />
          ))}
        </svg>
      </div>
    </div>
  );
};

/** The giant tank of pink fish, bottom right in the idle scene only. */
export const GiantTank = ({ hidden }: { hidden: boolean }) => (
  <div
    className="faq-idle-only pointer-events-none absolute inset-0"
    data-faq-hidden={hidden || undefined}
  >
    <Art layer={GIANT_TANK.water} />
    {GIANT_TANK.fish.map((fish, i) => (
      <FishArt key={fish.src} fish={fish} seed={60 + i} />
    ))}
    <Art
      layer={GIANT_TANK.bubbles}
      wrap={(img) => (
        <div className="faq-bob size-full" style={bobStyle(64)}>
          {img}
        </div>
      )}
    />
    <Art layer={GIANT_TANK.sparkle} />
    <Art
      layer={GIANT_TANK.seagrass}
      wrap={(img) => (
        <div className="faq-grass size-full" style={grassStyle(65, "50% 96%")}>
          {img}
        </div>
      )}
    />
    {GIANT_TANK.front.map((layer) => (
      <Art key={layer.src} layer={layer} />
    ))}
  </div>
);

/** How far each of Nugget's fish tips over mid-hop. */
const HOP_TILT = [-9, 11, 8];

/**
 * The cool teen deer and tennis player Nugget with a box of fish, idle
 * scene only. Now and then one of the fish hops out of the box (the
 * scheduler's "hop" accent).
 */
export const Characters = ({ hidden }: { hidden: boolean }) => (
  <div
    className="faq-idle-only pointer-events-none absolute inset-0"
    data-faq-hidden={hidden || undefined}
  >
    {NUGGET.back.map((layer) => (
      <Art key={layer.src} layer={layer} />
    ))}
    {NUGGET.fish.map((layer, i) => (
      <Art
        key={layer.src}
        layer={layer}
        wrap={(img) => (
          <div
            className="faq-accent flex size-full items-center justify-center"
            data-accent="hop"
            style={{ "--hop-rot": `${HOP_TILT[i]}deg` } as CSSProperties}
          >
            {img}
          </div>
        )}
      />
    ))}
    {NUGGET.front.map((layer) => (
      <Art key={layer.src} layer={layer} />
    ))}
    {DEER.map((layer) => (
      <Art key={`${layer.src}-${layer.x}`} layer={layer} />
    ))}
  </div>
);
