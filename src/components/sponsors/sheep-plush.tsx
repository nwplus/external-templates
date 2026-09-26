"use client";

import { type CSSProperties, useId, useRef } from "react";

import { play, prefersLessMotion } from "./ornament-art";

const REST = "perspective(600px) translateY(0) rotateY(0deg) scale(1, 1)";

/** Crouch, spring up with a twirl, land with a squash, settle. */
const hop: Keyframe[] = [
  { transform: REST },
  {
    transform:
      "perspective(600px) translateY(5%) rotateY(0deg) scale(1.1, 0.86)",
    offset: 0.18,
  },
  {
    transform:
      "perspective(600px) translateY(-32%) rotateY(180deg) scale(0.94, 1.1)",
    offset: 0.45,
  },
  {
    transform:
      "perspective(600px) translateY(-30%) rotateY(360deg) scale(0.98, 1.04)",
    offset: 0.62,
  },
  {
    transform:
      "perspective(600px) translateY(0) rotateY(360deg) scale(1.08, 0.9)",
    offset: 0.82,
    easing: "ease-out",
  },
  {
    transform:
      "perspective(600px) translateY(-3%) rotateY(360deg) scale(0.98, 1.02)",
    offset: 0.92,
  },
  { transform: "perspective(600px) translateY(0) rotateY(360deg) scale(1, 1)" },
];

const arm = (lift: number): Keyframe[] => [
  { transform: "rotate(0deg)" },
  { transform: "rotate(0deg)", offset: 0.2 },
  { transform: `rotate(${lift}deg)`, offset: 0.4 },
  { transform: `rotate(${lift}deg)`, offset: 0.7 },
  { transform: "rotate(0deg)", offset: 0.85 },
  { transform: "rotate(0deg)" },
];

const nod: Keyframe[] = [
  { transform: "rotate(0deg)" },
  { transform: "rotate(-8deg)", offset: 0.45 },
  { transform: "rotate(8deg)", offset: 0.62 },
  { transform: "rotate(0deg)", offset: 0.82 },
  { transform: "rotate(0deg)" },
];

const baa: Keyframe[] = [
  { opacity: 0, transform: "translateY(0) scale(0.6)" },
  { opacity: 1, transform: "translateY(-20%) scale(1)", offset: 0.3 },
  { opacity: 1, transform: "translateY(-40%) scale(1)", offset: 0.75 },
  { opacity: 0, transform: "translateY(-70%) scale(1)" },
];

const squish: Keyframe[] = [
  { transform: "scale(1, 1)" },
  { transform: "scale(1.05, 0.93)", offset: 0.35 },
  { transform: "scale(0.98, 1.03)", offset: 0.7 },
  { transform: "scale(1, 1)" },
];

/**
 * The sheep plush. Hovering gives it a squish; clicking makes it crouch and
 * spring up in a twirl with its arms in the air, then land with a squash
 * while a "baa!" floats up clear of its head. With less motion asked for, it only says baa.
 * The artwork is inline so the head and arms move on their own; ids are
 * namespaced because a shelf can hold more than one sheep.
 */
export const SheepPlush = () => {
  const id = `sheep-${useId().replace(/[^a-zA-Z0-9_-]/g, "")}`;
  const body = useRef<HTMLSpanElement>(null);
  const bubble = useRef<HTMLSpanElement>(null);

  const onClick = () => {
    if (bubble.current)
      play(bubble.current, baa, { duration: 1400, easing: "ease-out" });
    const sheep = body.current;
    if (!sheep || prefersLessMotion()) return;
    const part = (name: string) => sheep.querySelector(`[data-part="${name}"]`);
    play(sheep, hop, { duration: 1100, easing: "ease-in-out" });
    const head = part("head");
    const right = part("arm-right");
    const left = part("arm-left");
    if (head) play(head, nod, { duration: 1100, easing: "ease-in-out" });
    if (right) play(right, arm(-55), { duration: 1100, easing: "ease-in-out" });
    if (left) play(left, arm(55), { duration: 1100, easing: "ease-in-out" });
  };

  const onPointerEnter = () => {
    if (body.current && !prefersLessMotion())
      play(body.current, squish, { duration: 450, easing: "ease-out" });
  };

  return (
    <button
      type="button"
      aria-label="Sheep plush"
      onClick={onClick}
      onPointerEnter={onPointerEnter}
      className="relative block w-full cursor-pointer rounded-[30%] @container focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-star"
    >
      <span ref={body} className="block origin-bottom">
        <svg
          aria-hidden="true"
          className="block h-auto w-full"
          width="231"
          height="238"
          viewBox="0 0 231 238"
          fill="none"
        >
          <g>
            <g>
              <mask
                id={`${id}-mask0_13622_596`}
                maskUnits="userSpaceOnUse"
                x="32"
                y="58"
                width="174"
                height="172"
                style={{ maskType: "alpha" }}
              >
                <path
                  d="M33.0684 165.196C33.0684 197.598 41.0608 226.509 118.63 229.494C198.68 232.575 205.205 180.074 205.205 160.046C201.324 111.772 200.142 55.4647 115.452 58.8769C27.4992 62.4205 33.0684 117.436 33.0684 165.196Z"
                  fill={`url(#${id}-paint0_radial_13622_596)`}
                />
              </mask>
              <g mask={`url(#${id}-mask0_13622_596)`}>
                <g filter={`url(#${id}-filter0_g_13622_596)`}>
                  <path
                    d="M33.0684 165.196C33.0684 197.598 41.0608 226.509 118.63 229.494C198.68 232.575 205.205 180.074 205.205 160.046C201.324 111.772 200.142 55.4647 115.452 58.8769C27.4992 62.4205 33.0684 117.436 33.0684 165.196Z"
                    fill={`url(#${id}-paint1_radial_13622_596)`}
                  />
                </g>
                <g style={{ mixBlendMode: "multiply" }}>
                  <path
                    d="M122.676 102.418C67.1874 115.784 56.8571 76.0909 64.4503 53.8145H87.2358L134.32 74.0658L122.676 102.418Z"
                    fill="#D9D9D9"
                  />
                </g>
                <g style={{ mixBlendMode: "plus-darker" }}>
                  <path
                    d="M39.138 188.486C177.865 280.629 214.818 102.418 160.646 59.8901L177.865 47.7393L251.783 93.3047L192.542 313.032L-6.93578 249.746L39.138 188.486Z"
                    fill="#D9D9D9"
                  />
                </g>
              </g>
            </g>
            <g>
              <path
                d="M179.321 189.779L173.903 175.699C163.677 178.772 156.177 188.833 156.177 200.771C156.177 215.151 167.057 226.809 180.479 226.81C193.9 226.81 204.78 215.152 204.78 200.771C204.78 188.026 196.232 177.42 184.943 175.174L179.321 189.779Z"
                fill="#575757"
              />
              <path
                d="M58.1022 189.779L63.5211 175.699C73.7478 178.772 81.2476 188.833 81.2477 200.771C81.2477 215.152 70.3673 226.809 56.9459 226.81C43.5245 226.81 32.6442 215.152 32.6442 200.771C32.6443 188.026 41.1924 177.42 52.4811 175.174L58.1022 189.779Z"
                fill="#575757"
              />
            </g>
            <g
              data-part="head"
              style={{ transformBox: "fill-box", transformOrigin: "49% 100%" }}
            >
              <g>
                <path
                  d="M216.763 90.7487C204.208 84.6733 173.729 53.4526 160.06 38.6016L142.34 19.8691C149.596 18.6878 171.097 18.3503 199.044 26.4508C233.977 36.5765 232.458 98.343 216.763 90.7487Z"
                  fill="#575757"
                />
                <path
                  d="M27.5566 95.9922C39.6353 89.0162 67.7527 55.6534 80.3015 39.844L96.6067 19.8677C89.283 19.2194 67.8154 20.4526 40.5346 30.572C6.43361 43.2213 12.4582 104.712 27.5566 95.9922Z"
                  fill="#575757"
                />
              </g>
              <g>
                <path
                  d="M68.2501 65.0874C68.2501 89.7921 90.6891 100.244 119.057 100.244C144.458 100.244 168.431 94.4706 169.44 71.2635C170.842 39.0308 149.991 0 119.057 0C90.2692 0 68.2501 40.4525 68.2501 65.0874Z"
                  fill={`url(#${id}-paint2_linear_13622_596)`}
                />
                <g>
                  <path
                    d="M86.3353 80.8042C88.5068 78.1337 91.4579 75.2727 87.4727 73.273M145.474 73.9161C142.065 74.9959 140.996 79.5236 145.268 82.9257"
                    stroke="#3C3C3C"
                    strokeWidth="4.05026"
                    strokeLinecap="round"
                  />
                  <g>
                    <g>
                      <path
                        d="M85.6358 35.3481C85.6358 42.0588 90.0782 47.4989 99.3054 47.4989C108.533 47.4989 113.481 42.0588 113.481 35.3481C113.481 28.6374 108.533 21.2642 99.3054 21.2642C90.0782 21.2642 85.6358 28.6374 85.6358 35.3481Z"
                        fill="#D9D9D9"
                      />
                    </g>
                    <g>
                      <path
                        d="M118.544 35.3481C118.544 42.0588 123.999 47.4989 133.226 47.4989C142.454 47.4989 147.402 42.0588 147.402 35.3481C147.402 28.6374 142.454 21.2642 133.226 21.2642C123.999 21.2642 118.544 28.6374 118.544 35.3481Z"
                        fill="#D9D9D9"
                      />
                      <ellipse
                        cx="6.0754"
                        cy="6.58168"
                        rx="6.0754"
                        ry="6.58168"
                        transform="matrix(-0.990416 -0.138119 -0.138119 0.990416 137.401 28.2412)"
                        fill="black"
                      />
                      <ellipse
                        cx="6.0754"
                        cy="6.58168"
                        rx="6.0754"
                        ry="6.58168"
                        transform="matrix(-0.975165 -0.22148 -0.22148 0.975165 105.324 28.6118)"
                        fill="black"
                      />
                    </g>
                  </g>
                </g>
              </g>
            </g>
            <g>
              <path
                d="M211.195 124.068C200.427 103.723 180.231 84.5505 171.037 98.0537C161.843 111.558 173.038 118.087 183.806 138.433C194.575 158.778 198.684 170.155 210.033 171.732C210.118 171.744 210.203 171.754 210.287 171.764L213.747 157.403L219.434 168.555C225.289 160.501 219.374 139.521 211.195 124.068Z"
                fill="#575757"
                data-part="arm-right"
                style={{ transformBox: "fill-box", transformOrigin: "8% 8%" }}
              />
              <path
                d="M17.4872 128.921C29.5081 109.29 50.8644 91.419 59.1949 105.472C67.5252 119.525 55.9444 125.34 43.9237 144.972C31.903 164.603 27.0896 175.701 15.6645 176.564C13.8396 176.702 12.2722 176.55 10.9401 176.149L8.38876 161.614L4.8088 167.662C3.60587 157.691 9.88114 141.343 17.4872 128.921Z"
                fill="#575757"
                data-part="arm-left"
                style={{ transformBox: "fill-box", transformOrigin: "93% 7%" }}
              />
            </g>
          </g>
          <defs>
            <filter
              id={`${id}-filter0_g_13622_596`}
              x="25.6063"
              y="51.3373"
              width="186.99"
              height="185.678"
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
              <feTurbulence
                type="fractalNoise"
                baseFrequency="0.051706273108720779 0.051706273108720779"
                numOctaves="3"
                seed="2481"
              />
              <feDisplacementMap
                in="shape"
                scale="14.783466339111328"
                xChannelSelector="R"
                yChannelSelector="G"
                result="displacedImage"
                width="100%"
                height="100%"
              />
              <feMerge result="effect1_texture_13622_596">
                <feMergeNode in="displacedImage" />
              </feMerge>
            </filter>
            <radialGradient
              id={`${id}-paint0_radial_13622_596`}
              cx="0"
              cy="0"
              r="1"
              gradientUnits="userSpaceOnUse"
              gradientTransform="translate(97.7262 161.653) rotate(60.1712) scale(129.559 147.816)"
            >
              <stop offset="0.370628" stopColor="#EEF8FF" />
              <stop offset="1" stopColor="#8F9599" />
            </radialGradient>
            <radialGradient
              id={`${id}-paint1_radial_13622_596`}
              cx="0"
              cy="0"
              r="1"
              gradientUnits="userSpaceOnUse"
              gradientTransform="translate(97.7262 161.653) rotate(60.1712) scale(129.559 147.816)"
            >
              <stop offset="0.370628" stopColor="#EEF8FF" />
              <stop offset="1" stopColor="#8F9599" />
            </radialGradient>
            <linearGradient
              id={`${id}-paint2_linear_13622_596`}
              x1="119.066"
              y1="105.307"
              x2="118.878"
              y2="3.05398e-06"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#575757" />
              <stop offset="1" stopColor="#7B7A7D" />
            </linearGradient>
          </defs>
        </svg>
      </span>
      <span className="pointer-events-none absolute -top-[52%] left-1/2 block -translate-x-1/2">
        <span
          ref={bubble}
          aria-hidden="true"
          className="block rounded-full bg-cream-light px-[10cqw] py-[3cqw] font-display text-[13cqw] leading-none whitespace-nowrap text-ink opacity-0 shadow-[0_0.5cqw_2cqw_rgba(0,0,0,0.3)]"
          style={{ transformOrigin: "50% 100%" } as CSSProperties}
        >
          baa!
        </span>
      </span>
    </button>
  );
};
