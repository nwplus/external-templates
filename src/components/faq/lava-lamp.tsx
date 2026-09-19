"use client";

import { cn } from "@/lib/utils";

import { motion, useReducedMotion } from "framer-motion";
import { useId, useState } from "react";

/** The lamp's glass, from the Figma export (lava-lamp.svg). */
const LAVA =
  "M135.68 160H167.68C167.68 160 197.68 272 187.68 272C177.68 272 125.68 272 114.68 272C103.68 272 135.68 160 135.68 160Z";

/** A warming bulb: a couple of stutters before it holds, off in a blink. */
const FLICKER_ON = [0, 1, 0.3, 1, 0.55, 1];
const FLICKER_TIMES = [0, 0.15, 0.3, 0.5, 0.7, 1];

/**
 * The lava lamp. Clicking it switches it off and on: the glow fades, the
 * glass goes dark, and switching back on flickers the way a warming bulb
 * does. The artwork is inline so the glow and the glass can change on their
 * own; ids are namespaced because the desktop wall and the phone shelf both
 * render a lamp, and a duplicate id would resolve to the hidden copy.
 */
export const LavaLamp = ({ className }: { className?: string }) => {
  const id = `lamp-${useId().replace(/[^a-zA-Z0-9_-]/g, "")}`;
  const [lit, setLit] = useState(true);
  const reduceMotion = useReducedMotion();

  const light = lit ? (reduceMotion ? 1 : FLICKER_ON) : 0;
  const shade = lit
    ? reduceMotion
      ? 0
      : FLICKER_ON.map((v) => 0.65 * (1 - v))
    : 0.65;
  const transition =
    lit && !reduceMotion
      ? { duration: 0.6, times: FLICKER_TIMES }
      : { duration: 0.25 };

  return (
    <div className={cn("pointer-events-none", className)}>
      {/* The warm light the lamp throws on the wall, breathing while it is on. */}
      <motion.div
        aria-hidden="true"
        className="absolute inset-[-30%]"
        initial={false}
        animate={{ opacity: light }}
        transition={transition}
      >
        <div className="size-full rounded-full bg-[radial-gradient(closest-side,rgba(250,203,107,0.7),rgba(250,203,107,0))] blur-xl motion-safe:animate-glow" />
      </motion.div>

      <svg
        aria-hidden="true"
        className="relative block h-auto w-full"
        width="302"
        height="381"
        viewBox="0 0 302 381"
        fill="none"
      >
        <motion.g
          filter={`url(#${id}-glow)`}
          initial={false}
          animate={{ opacity: light }}
          transition={transition}
        >
          <ellipse
            cx="151"
            cy="190.5"
            rx="81"
            ry="120.5"
            fill="#FACB6B"
            fillOpacity="0.58"
          />
        </motion.g>
        <path
          d="M142.68 114H160.68L167.68 160H135.68L142.68 114Z"
          fill="#DFDADA"
        />
        <path
          d="M136.378 326H165.378L187.378 380H114.378L136.378 326Z"
          fill="#DFDADA"
        />
        <path
          d="M136.378 326H165.378L187.378 272H114.378L136.378 326Z"
          fill="#DFDADA"
        />
        <g clipPath={`url(#${id}-glass)`}>
          <g transform="matrix(0.000328735 0.073 -0.0504108 0.000227011 151.049 216)">
            <rect
              width="769.493"
              height="772.11"
              fill={`url(#${id}-lava)`}
              shapeRendering="crispEdges"
            />
            <rect
              width="769.493"
              height="772.11"
              fill={`url(#${id}-lava)`}
              shapeRendering="crispEdges"
              transform="scale(1 -1)"
            />
            <rect
              width="769.493"
              height="772.11"
              fill={`url(#${id}-lava)`}
              shapeRendering="crispEdges"
              transform="scale(-1 1)"
            />
            <rect
              width="769.493"
              height="772.11"
              fill={`url(#${id}-lava)`}
              shapeRendering="crispEdges"
              transform="scale(-1)"
            />
          </g>
        </g>
        <path
          d="M168.656 196.679C162.468 192.167 159.373 197.807 158.445 201.191C157.517 204.575 166.49 209.463 169.275 207.583C172.06 205.703 174.845 201.191 168.656 196.679Z"
          fill={`url(#${id}-blob1)`}
        />
        <path
          d="M152.363 190.049C152.731 198.256 146.438 204.006 139.109 204C134.966 203.41 131.378 201.128 131.378 197.024C131.378 192.921 132.482 186.766 132.482 186.766C134.508 183.876 135.973 182.455 140.95 181.431C147.77 180.026 151.994 181.841 152.363 190.049Z"
          fill={`url(#${id}-blob2)`}
        />
        <path
          d="M167.378 160H136.378C136.621 164.303 140.421 170.884 145.813 173.887C151.204 176.889 152.552 176.514 157.269 173.887C161.987 171.259 166.41 164.851 167.378 160Z"
          fill={`url(#${id}-blob3)`}
        />
        <path
          d="M144.994 243.392C139.378 250.446 142.943 266.013 139.378 272H167.107C164.526 266.22 167.107 253.581 162.895 244.567C158.683 235.554 157.981 235.946 162.895 228.5C167.809 221.054 170.629 211.116 160.789 202.635C154.644 198.472 151.543 199.837 146.047 202.635C137.451 211.577 139.027 221.446 144.994 227.324C150.961 233.203 150.61 236.338 144.994 243.392Z"
          fill={`url(#${id}-blob4)`}
        />
        {/* The glass with the light off. */}
        <motion.path
          d={LAVA}
          fill="#1b1326"
          initial={false}
          animate={{ opacity: shade }}
          transition={transition}
        />
        <defs>
          <filter
            id={`${id}-glow`}
            x="0"
            y="0"
            width="302"
            height="381"
            filterUnits="userSpaceOnUse"
            colorInterpolationFilters="sRGB"
          >
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="BackgroundImageFix"
              result="shape"
            />
            <feGaussianBlur stdDeviation="35" />
          </filter>
          <clipPath id={`${id}-glass`}>
            <path d={LAVA} />
          </clipPath>
          <linearGradient
            id={`${id}-lava`}
            x1="0"
            y1="0"
            x2="500"
            y2="500"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#60AC3B" />
            <stop offset="1" stopColor="#8BEDE4" />
          </linearGradient>
          <radialGradient
            id={`${id}-blob1`}
            cx="0"
            cy="0"
            r="1"
            gradientTransform="matrix(-2.6325 10.6138 -11.4302 -0.460847 165.398 197.386)"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#B73A72" />
            <stop offset="1" stopColor="#EDB42C" />
          </radialGradient>
          <radialGradient
            id={`${id}-blob2`}
            cx="0"
            cy="0"
            r="1"
            gradientTransform="matrix(-3.94875 18.7782 -17.1453 -0.815344 141.908 185.222)"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#B73A72" />
            <stop offset="1" stopColor="#EDB42C" />
          </radialGradient>
          <radialGradient
            id={`${id}-blob3`}
            cx="0"
            cy="0"
            r="1"
            gradientTransform="matrix(-5.82911 13.0631 -25.3098 -0.567196 151.922 162.937)"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#B73A72" />
            <stop offset="1" stopColor="#EDB42C" />
          </radialGradient>
          <radialGradient
            id={`${id}-blob4`}
            cx="0"
            cy="0"
            r="1"
            gradientTransform="matrix(-5.265 58.784 -22.8605 -2.55238 153.418 213.216)"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#B73A72" />
            <stop offset="1" stopColor="#EDB42C" />
          </radialGradient>
        </defs>
      </svg>

      {/* Only the lamp itself switches it, not the light around it. */}
      <button
        type="button"
        aria-label="Lava lamp"
        aria-pressed={lit}
        onClick={() => setLit((on) => !on)}
        className="pointer-events-auto absolute top-[29.9%] left-[37.7%] h-[70.1%] w-[25.2%] cursor-pointer rounded-md focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-star"
      />
    </div>
  );
};
