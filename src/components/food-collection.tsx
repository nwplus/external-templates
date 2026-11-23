"use client";

import { cn } from "@/lib/utils";

import {
  createContext,
  type ReactNode,
  useCallback,
  useContext,
  useEffect,
  useLayoutEffect,
  useMemo,
  useRef,
  useState,
} from "react";

export type Food =
  | "steamer-of-baozi"
  | "kwek-kwek"
  | "corn-dog"
  | "laksa"
  | "mango-sticky-rice"
  | "tanghulu"
  | "taiyaki"
  | "strawberry-mini-pancakes";

const FOOD_LABELS: Record<Food, string> = {
  "steamer-of-baozi": "a steamer of baozi",
  "kwek-kwek": "kwek kwek",
  "corn-dog": "Korean fried hotdogs",
  laksa: "laksa",
  "mango-sticky-rice": "mango sticky rice",
  tanghulu: "tanghulu",
  taiyaki: "taiyaki",
  "strawberry-mini-pancakes": "strawberry mini pancakes",
};
const FOODS = Object.keys(FOOD_LABELS) as Food[];

/** The Figma tray ("food tray" in "fireworks hero w filled tray"). */
const TRAY = { width: 157.718, height: 113.128 };
const ASSETS = "/assets/sponsors/interactive";

type Plate = { food: Food; src: string; x: number; y: number; w: number };

/** Each food's art in the filled tray, bottom layer first as in Figma: its
 * export's top-left and width, in tray px. Kwek kwek comes with its dipping
 * sauce, and the taiyaki are a pair. */
const PLATES: Plate[] = [
  {
    food: "steamer-of-baozi",
    src: "steamer-of-baozi.svg",
    x: 4.867,
    y: 3.311,
    w: 52,
  },
  { food: "kwek-kwek", src: "kwek-kwek.svg", x: 109.906, y: 1.873, w: 58 },
  { food: "corn-dog", src: "corn-dog.svg", x: 125.783, y: -2.726, w: 48 },
  { food: "laksa", src: "laksa.svg?v=2", x: 105.535, y: 61.725, w: 46 },
  {
    food: "mango-sticky-rice",
    src: "mango-sticky-rice.svg?v=2",
    x: 29.402,
    y: 61.38,
    w: 61,
  },
  { food: "tanghulu", src: "tanghulu.svg?v=2", x: -10.02, y: 55.497, w: 47 },
  {
    food: "kwek-kwek",
    src: "manongs-sawsawan.svg",
    x: 112.35,
    y: 30.765,
    w: 25,
  },
  { food: "taiyaki", src: "taiyaki.svg?v=2", x: 60.748, y: 0.194, w: 36 },
  { food: "taiyaki", src: "taiyaki.svg?v=2", x: 71.457, y: 4.284, w: 36 },
  {
    food: "strawberry-mini-pancakes",
    src: "strawberry-mini-pancakes.webp",
    x: 62.502,
    y: 27.02,
    w: 43,
  },
];

/** Hot food lets off steam once it's on the tray: where the wisps rise from
 * (the dish's centre, in tray px) and when, so they don't puff in step. */
const STEAM: { food: Food; x: number; y: number; delay: number }[] = [
  { food: "steamer-of-baozi", x: 30.4, y: 24, delay: 0 },
  { food: "laksa", x: 128.4, y: 80, delay: 5 },
  { food: "kwek-kwek", x: 134, y: 24, delay: 10 },
];

const plateStyle = ({ x, y, w }: Plate) => ({
  left: `${(x / TRAY.width) * 100}%`,
  top: `${(y / TRAY.height) * 100}%`,
  width: `${(w / TRAY.width) * 100}%`,
});

/** What's on the tray survives a reload, in this browser only. */
const STORAGE_KEY = "nwhacks2027:tray";

const readStored = (): Food[] => {
  try {
    const stored: unknown = JSON.parse(
      localStorage.getItem(STORAGE_KEY) ?? "[]"
    );
    return Array.isArray(stored)
      ? FOODS.filter((food) => stored.includes(food))
      : [];
  } catch {
    return [];
  }
};

const reducedMotion = () =>
  window.matchMedia("(prefers-reduced-motion: reduce)").matches;

type Collection = {
  /** Put `food` on the tray. `origin` is what was clicked: the food flies
   * from there into its compartment. */
  collect: (food: Food, origin: Element) => void;
  /** Enter a sparkle (see `EggSparkle`) into the glint rotation. */
  registerSparkle: (el: HTMLElement, food: Food) => () => void;
};

const FoodCollectionContext = createContext<Collection>({
  collect: () => {},
  registerSparkle: () => () => {},
});

export function useCollectFood() {
  return useContext(FoodCollectionContext).collect;
}

export function useRegisterSparkle() {
  return useContext(FoodCollectionContext).registerSparkle;
}

const listFoods = (foods: readonly Food[]) =>
  foods.map((food) => FOOD_LABELS[food]).join(", ");

type Flight = { id: number; food: Food; from: DOMRect };

const platesOf = (food: Food) => PLATES.filter((plate) => plate.food === food);

/** Ease in and out of the arc, so the food leaves gently and settles. */
const easeInOut = (t: number) =>
  t < 0.5 ? 4 * t * t * t : 1 - (-2 * t + 2) ** 3 / 2;
/** A spring past 1 and back, for the pop off the egg. */
const easeOutBack = (t: number) => 1 + 2.7 * (t - 1) ** 3 + 1.7 * (t - 1) ** 2;

/** How much bigger than its tray size the food is while it's off the tray. */
const FLIGHT_SCALE = 2.2;
/** The share of the trip spent popping up off the egg before it flies. */
const POP = 0.2;
/** A flying plate is laid out at its biggest (the pop's spring overshoots
 * FLIGHT_SCALE by about a tenth) and only ever scaled down from there, so
 * it's drawn crisp at every size. Scaling up from tray size would stretch
 * a small raster. */
const LAYOUT_SCALE = FLIGHT_SCALE * 1.12;

/** One food's trip from the egg to the tray: each of its plates pops up off
 * the egg, then arcs down into its compartment, and the tray takes the
 * landing. The trip is steered frame by frame toward where the plate sits
 * in the tray right now, so it lands true even while the tray is still
 * sliding in. */
const FoodFlight = ({
  flight,
  tray,
  onLand,
}: {
  flight: Flight;
  tray: HTMLElement;
  onLand: (flight: Flight) => void;
}) => {
  const plates = platesOf(flight.food);
  const refs = useRef<(HTMLImageElement | null)[]>([]);

  useLayoutEffect(() => {
    const from = {
      x: flight.from.left + flight.from.width / 2,
      y: flight.from.top + flight.from.height / 2,
    };
    const first = tray.getBoundingClientRect();
    const distance = Math.hypot(
      from.x - (first.left + first.width / 2),
      from.y - (first.top + first.height / 2)
    );
    const duration = Math.min(1700, 1050 + distance * 0.45);
    const plates = platesOf(flight.food);
    let start: number | null = null;
    let frame = 0;

    const step = (now: number) => {
      start ??= now;
      const progress = Math.min((now - start) / duration, 1);
      const rect = tray.getBoundingClientRect();
      const unit = rect.width / TRAY.width;
      refs.current.forEach((img, i) => {
        if (!img) return;
        const plate = plates[i];
        const width = plate.w * unit;
        const height = img.naturalWidth
          ? (width * img.naturalHeight) / img.naturalWidth
          : width;
        // Where the plate's centre sits in the tray, this frame.
        const to = {
          x: rect.left + plate.x * unit + width / 2,
          y: rect.top + plate.y * unit + height / 2,
        };
        let x: number, y: number, scale: number, rotate: number;
        if (progress < POP) {
          // Up off the egg with a little spring.
          const t = progress / POP;
          x = from.x;
          y = from.y - 24 * easeInOut(t);
          scale = FLIGHT_SCALE * easeOutBack(t);
          rotate = -18 * t;
        } else {
          // A quadratic arc whose top clears both ends by a share of the trip.
          const t = easeInOut((progress - POP) / (1 - POP));
          const popped = { x: from.x, y: from.y - 24 };
          const peak = {
            x: (popped.x + to.x) / 2,
            y: Math.min(popped.y, to.y) - Math.max(60, distance * 0.25),
          };
          x = (1 - t) ** 2 * popped.x + 2 * (1 - t) * t * peak.x + t * t * to.x;
          y = (1 - t) ** 2 * popped.y + 2 * (1 - t) * t * peak.y + t * t * to.y;
          scale = FLIGHT_SCALE - (FLIGHT_SCALE - 1) * t;
          rotate = -18 * (1 - t);
        }
        const big = {
          width: width * LAYOUT_SCALE,
          height: height * LAYOUT_SCALE,
        };
        img.style.width = `${big.width}px`;
        img.style.transform = `translate(${x - big.width / 2}px, ${y - big.height / 2}px) scale(${scale / LAYOUT_SCALE}) rotate(${rotate}deg)`;
      });
      if (progress < 1) frame = requestAnimationFrame(step);
      else onLand(flight);
    };
    frame = requestAnimationFrame(step);
    return () => cancelAnimationFrame(frame);
  }, [flight, tray, onLand]);

  return (
    <div className="food-flight" aria-hidden="true">
      {plates.map((plate, i) => (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          key={`${plate.src}-${plate.x}`}
          ref={(el) => {
            refs.current[i] = el;
          }}
          src={`${ASSETS}/${plate.src}`}
          alt=""
          className="collected-food"
          // Hidden until the first frame places it on the egg.
          style={{ transform: "scale(0)" }}
        />
      ))}
    </div>
  );
};

/** Wisps of steam that curl up off a hot dish now and then. */
const Steam = ({ x, y, delay }: { x: number; y: number; delay: number }) => (
  <span
    className="tray-steam"
    aria-hidden="true"
    style={
      {
        left: `${(x / TRAY.width) * 100}%`,
        top: `${(y / TRAY.height) * 100}%`,
        "--steam-delay": `${delay}s`,
      } as React.CSSProperties
    }
  >
    {[
      "M6 39c-4-5 4-8 0-13s4-8 0-13 3-7 0-11",
      "M6 39c4-5-4-8 0-13s-4-8 0-13-3-7 0-11",
    ].map((d) => (
      <svg key={d} className="tray-wisp" viewBox="0 0 12 40">
        <path d={d} />
      </svg>
    ))}
  </span>
);

/**
 * The tray in the bottom-left corner of the screen, which fills up as the
 * visitor finds the easter eggs around the page. Sections call
 * `useCollectFood()` and hand it the food their egg gives (and the element
 * that was clicked, which the food flies from).
 *
 * It also runs the eggs' glints: every few seconds one sparkle on screen,
 * on an egg whose food is still missing, twinkles.
 */
export function FoodCollection({ children }: { children: ReactNode }) {
  const [foods, setFoods] = useState<Food[]>([]);
  // The food that just landed, for the screen reader.
  const [landed, setLanded] = useState<Food | null>(null);
  // A food that landed without flying in (keyboard, reduced motion): it
  // drops into place instead.
  const [popped, setPopped] = useState<Food | null>(null);
  const [flights, setFlights] = useState<Flight[]>([]);
  const [tray, setTray] = useState<HTMLDivElement | null>(null);
  const flightId = useRef(0);

  // Storage only exists in the browser, so the stored tray is read after the
  // first render (which matches the static export: an empty tray).
  useEffect(() => {
    const stored = readStored();
    if (stored.length) setFoods(stored);
  }, []);

  // Fetch the food art up front, so a plate has its size from the first
  // frame of its flight.
  useEffect(() => {
    for (const { src } of PLATES) new Image().src = `${ASSETS}/${src}`;
  }, []);

  const collect = useCallback(
    (food: Food, origin: Element) => {
      if (foods.includes(food)) return;
      const next = [...foods, food];
      setFoods(next);
      try {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(next));
      } catch {
        // Private mode or blocked storage: the tray won't survive a reload.
      }
      const from = origin.getBoundingClientRect();
      // Food found before the tray has slid in (the hero's gate, right
      // away) calls the tray in now rather than flying off screen.
      for (const animation of tray?.getAnimations() ?? []) {
        if (
          animation instanceof CSSAnimation &&
          animation.animationName === "tray-slide-in" &&
          Number(animation.currentTime) < 1000
        ) {
          animation.currentTime = 1000;
        }
      }
      if (from.width > 0 && !reducedMotion()) {
        setFlights((current) => [
          ...current,
          { id: ++flightId.current, food, from },
        ]);
      } else {
        setLanded(food);
        setPopped(food);
      }
    },
    [foods, tray]
  );

  const land = useCallback(
    (flight: Flight) => {
      setFlights((current) => current.filter(({ id }) => id !== flight.id));
      setLanded(flight.food);
      // The tray dips under the food and springs back.
      tray?.animate(
        [
          { transform: "scale(1, 1)" },
          { transform: "scale(1.025, 0.96)", offset: 0.3 },
          { transform: "scale(0.995, 1.01)", offset: 0.65 },
          { transform: "scale(1, 1)" },
        ],
        { duration: 420, easing: "ease-out" }
      );
    },
    [tray]
  );

  // The glints: one sparkle at a time, on screen, for a food not yet found.
  const sparkles = useRef(new Map<HTMLElement, Food>());
  const foodsNow = useRef(foods);
  useEffect(() => {
    foodsNow.current = foods;
  }, [foods]);
  const registerSparkle = useCallback((el: HTMLElement, food: Food) => {
    sparkles.current.set(el, food);
    return () => {
      sparkles.current.delete(el);
    };
  }, []);
  useEffect(() => {
    if (reducedMotion()) return;
    let timer: ReturnType<typeof setTimeout>;
    const glint = () => {
      const onScreen = [...sparkles.current].filter(([el, food]) => {
        if (foodsNow.current.includes(food)) return false;
        const r = el.getBoundingClientRect();
        return (
          r.width > 0 &&
          r.bottom > 0 &&
          r.top < window.innerHeight &&
          r.right > 0 &&
          r.left < window.innerWidth
        );
      });
      if (onScreen.length && !document.hidden) {
        const [el] = onScreen[Math.floor(Math.random() * onScreen.length)];
        el.removeAttribute("data-on");
        void el.offsetWidth; // restart the twinkle if it's the same one
        el.setAttribute("data-on", "");
      }
      timer = setTimeout(glint, 3800 + Math.random() * 2800);
    };
    timer = setTimeout(glint, 2500);
    return () => clearTimeout(timer);
  }, []);

  const flying = new Set(flights.map(({ food }) => food));
  const context = useMemo(
    () => ({ collect, registerSparkle }),
    [collect, registerSparkle]
  );

  return (
    <FoodCollectionContext.Provider value={context}>
      {children}
      <div
        ref={setTray}
        className="food-collection"
        role="img"
        aria-label={
          foods.length
            ? `Food tray with ${listFoods(foods)}`
            : "Empty food tray"
        }
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={`${ASSETS}/tray.svg`} alt="" className="food-tray" />
        {PLATES.filter(({ food }) => foods.includes(food)).map((plate) => (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            key={`${plate.src}-${plate.x}`}
            src={`${ASSETS}/${plate.src}`}
            alt=""
            className={cn(
              "collected-food",
              flying.has(plate.food) && "invisible"
            )}
            data-landed={plate.food === popped ? "" : undefined}
            style={plateStyle(plate)}
          />
        ))}
        {STEAM.filter(
          ({ food }) => foods.includes(food) && !flying.has(food)
        ).map((steam) => (
          <Steam key={steam.food} {...steam} />
        ))}
      </div>
      {tray &&
        flights.map((flight) => (
          <FoodFlight
            key={flight.id}
            flight={flight}
            tray={tray}
            onLand={land}
          />
        ))}
      <span className="sr-only" role="status">
        {landed ? `Collected ${FOOD_LABELS[landed]}!` : ""}
      </span>
    </FoodCollectionContext.Provider>
  );
}
