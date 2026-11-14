/* Generated from the Figma "Fireworks / Illustration" layer (node 15941:71555)
   by exporting it as SVG and running it through SVGO. Re-export rather than
   hand-editing paths.

   The pale burst on the right edge ("Repeat group 5") is patched in from its
   own export: in the full export its source petal falls outside the frame,
   so it comes out empty.

   Figma's export drops the trails' round caps (without them each 0.1px dash
   is invisible), so they are added back here.

   Trails are re-aimed so each one ends on its burst's centre (Figma's stop
   short or wide). Each trail and burst carries its launch step as `--i`. A
   trail is revealed from the ground up through a mask (so its dots stay
   put), and its burst (`--t: 1`) fades in on the spot once the trail has
   arrived. Bursts without a trail fade in on their step; see hero.css. */
import type { CSSProperties } from "react";

export const FireworksArt = ({ className }: { className?: string }) => (
  <svg
    viewBox="0 0 933 616"
    fill="none"
    aria-hidden="true"
    className={className}
  >
    <g opacity=".8">
      <g className="firework-trail" style={{ "--i": 8 } as CSSProperties}>
        <mask
          id="fw-trail-0"
          maskUnits="userSpaceOnUse"
          x="0"
          y="0"
          width="933"
          height="616"
        >
          <path
            className="firework-trail-reveal"
            d="M498.00 90.00C496.86 265.28 495.73 440.56 494.59 615.85"
            stroke="#fff"
            strokeWidth="10"
            pathLength={1}
          />
        </mask>
        <path
          stroke="#FE7D1A"
          strokeDasharray="0.1 7"
          strokeWidth="2"
          d="M498.00 90.00C496.86 265.28 495.73 440.56 494.59 615.85"
          strokeLinecap="round"
          mask="url(#fw-trail-0)"
        />
      </g>
      <g className="firework-trail" style={{ "--i": 10 } as CSSProperties}>
        <mask
          id="fw-trail-1"
          maskUnits="userSpaceOnUse"
          x="0"
          y="0"
          width="933"
          height="616"
        >
          <path
            className="firework-trail-reveal"
            d="M373.00 318.00C433.22 414.32 442.95 480.83 435.64 612.31"
            stroke="#fff"
            strokeWidth="10"
            pathLength={1}
          />
        </mask>
        <path
          stroke="#fff"
          strokeDasharray="0.1 7"
          strokeWidth="2"
          d="M373.00 318.00C433.22 414.32 442.95 480.83 435.64 612.31"
          strokeLinecap="round"
          mask="url(#fw-trail-1)"
        />
      </g>
      <g className="firework-trail" style={{ "--i": 5 } as CSSProperties}>
        <mask
          id="fw-trail-2"
          maskUnits="userSpaceOnUse"
          x="0"
          y="0"
          width="933"
          height="616"
        >
          <path
            className="firework-trail-reveal"
            d="M190.00 341.00C268.00 349.05 328.64 379.08 386.13 452.57"
            stroke="#fff"
            strokeWidth="10"
            pathLength={1}
          />
        </mask>
        <path
          stroke="#3F1EF7"
          strokeDasharray="0.1 7"
          strokeWidth="3"
          d="M190.00 341.00C268.00 349.05 328.64 379.08 386.13 452.57"
          strokeLinecap="round"
          mask="url(#fw-trail-2)"
        />
      </g>
      <g className="firework-trail" style={{ "--i": 6 } as CSSProperties}>
        <mask
          id="fw-trail-3"
          maskUnits="userSpaceOnUse"
          x="0"
          y="0"
          width="933"
          height="616"
        >
          <path
            className="firework-trail-reveal"
            d="M577.00 331.00C555.29 400.35 540.22 478.97 547.61 589.00"
            stroke="#fff"
            strokeWidth="10"
            pathLength={1}
          />
        </mask>
        <path
          stroke="#FB3737"
          strokeDasharray="0.1 7"
          strokeWidth="2"
          d="M577.00 331.00C555.29 400.35 540.22 478.97 547.61 589.00"
          strokeLinecap="round"
          mask="url(#fw-trail-3)"
        />
      </g>
      <g className="firework-trail" style={{ "--i": 9 } as CSSProperties}>
        <mask
          id="fw-trail-4"
          maskUnits="userSpaceOnUse"
          x="0"
          y="0"
          width="933"
          height="616"
        >
          <path
            className="firework-trail-reveal"
            d="M717.00 328.00C675.50 364.42 643.88 445.52 649.61 515.50"
            stroke="#fff"
            strokeWidth="10"
            pathLength={1}
          />
        </mask>
        <path
          stroke="#FBF865"
          strokeDasharray="0.1 7"
          strokeWidth="2"
          d="M717.00 328.00C675.50 364.42 643.88 445.52 649.61 515.50"
          strokeLinecap="round"
          mask="url(#fw-trail-4)"
        />
      </g>
      <g className="firework-trail" style={{ "--i": 3 } as CSSProperties}>
        <mask
          id="fw-trail-5"
          maskUnits="userSpaceOnUse"
          x="0"
          y="0"
          width="933"
          height="616"
        >
          <path
            className="firework-trail-reveal"
            d="M255.00 274.00C332.00 286.80 430.12 417.07 455.09 519.18"
            stroke="#fff"
            strokeWidth="10"
            pathLength={1}
          />
        </mask>
        <path
          stroke="#FBD218"
          strokeDasharray="0.1 7"
          strokeWidth="2"
          d="M255.00 274.00C332.00 286.80 430.12 417.07 455.09 519.18"
          strokeLinecap="round"
          mask="url(#fw-trail-5)"
        />
      </g>
      <g className="firework-trail" style={{ "--i": 0 } as CSSProperties}>
        <mask
          id="fw-trail-6"
          maskUnits="userSpaceOnUse"
          x="0"
          y="0"
          width="933"
          height="616"
        >
          <path
            className="firework-trail-reveal"
            d="M189.00 114.00C255.82 123.21 344.93 195.82 396.74 295.19"
            stroke="#fff"
            strokeWidth="10"
            pathLength={1}
          />
        </mask>
        <path
          stroke="#54F43F"
          strokeDasharray="0.1 7"
          strokeWidth="3"
          d="M189.00 114.00C255.82 123.21 344.93 195.82 396.74 295.19"
          strokeLinecap="round"
          mask="url(#fw-trail-6)"
        />
      </g>
      <g className="firework-trail" style={{ "--i": 4 } as CSSProperties}>
        <mask
          id="fw-trail-7"
          maskUnits="userSpaceOnUse"
          x="0"
          y="0"
          width="933"
          height="616"
        >
          <path
            className="firework-trail-reveal"
            d="M776.00 185.00C677.67 227.25 551.70 420.13 535.85 517.41"
            stroke="#fff"
            strokeWidth="10"
            pathLength={1}
          />
        </mask>
        <path
          stroke="#fff"
          strokeDasharray="0.1 7"
          strokeWidth="3"
          d="M776.00 185.00C677.67 227.25 551.70 420.13 535.85 517.41"
          strokeLinecap="round"
          mask="url(#fw-trail-7)"
        />
      </g>
      <g className="firework-trail" style={{ "--i": 2 } as CSSProperties}>
        <mask
          id="fw-trail-8"
          maskUnits="userSpaceOnUse"
          x="0"
          y="0"
          width="933"
          height="616"
        >
          <path
            className="firework-trail-reveal"
            d="M623.00 141.00C564.75 223.18 546.41 295.33 535.85 389.50"
            stroke="#fff"
            strokeWidth="10"
            pathLength={1}
          />
        </mask>
        <path
          stroke="#E42EF5"
          strokeDasharray="0.1 7"
          strokeWidth="3"
          d="M623.00 141.00C564.75 223.18 546.41 295.33 535.85 389.50"
          strokeLinecap="round"
          mask="url(#fw-trail-8)"
        />
      </g>
      <g className="firework-trail" style={{ "--i": 1 } as CSSProperties}>
        <mask
          id="fw-trail-9"
          maskUnits="userSpaceOnUse"
          x="0"
          y="0"
          width="933"
          height="616"
        >
          <path
            className="firework-trail-reveal"
            d="M943.00 195.00C852.95 227.28 786.47 265.85 715.61 341.50"
            stroke="#fff"
            strokeWidth="10"
            pathLength={1}
          />
        </mask>
        <path
          stroke="#FFE7AC"
          strokeDasharray="0.1 7"
          strokeWidth="3"
          d="M943.00 195.00C852.95 227.28 786.47 265.85 715.61 341.50"
          strokeLinecap="round"
          mask="url(#fw-trail-9)"
        />
      </g>
      <g
        className="firework-burst"
        style={{ "--i": 1, "--t": 1 } as CSSProperties}
      >
        <g transform="translate(797.853 49.505)">
          <g filter="url(#fw-rg5f)">
            <path
              id="fw-rg5p"
              d="M147.818 1.34353C147.193 1.32902 146.568 1.31451 145.943 1.3C145.798 3.09539 145.657 4.8909 145.521 6.68654C144.302 22.8472 143.505 39.0177 143.129 55.198C142.753 71.3783 142.799 87.5684 143.267 103.768C143.319 105.568 143.376 107.368 143.438 109.169C144.063 109.183 144.688 109.198 145.313 109.212C145.459 107.417 145.599 105.621 145.735 103.826C146.954 87.6649 147.752 71.4944 148.127 55.3141C148.503 39.1338 148.457 22.9437 147.989 6.74385C147.937 4.94387 147.88 3.14376 147.818 1.34353Z"
              fill="#FFF7B0"
            />
            <use
              href="#fw-rg5p"
              transform="translate(146.559 -59.9356) rotate(45)"
            />
            <use
              href="#fw-rg5p"
              transform="translate(292.572 1.31626) rotate(90)"
            />
            <use
              href="#fw-rg5p"
              transform="translate(352.508 147.875) rotate(135)"
            />
            <use
              href="#fw-rg5p"
              transform="translate(291.256 293.889) rotate(-180)"
            />
            <use
              href="#fw-rg5p"
              transform="translate(144.697 353.824) rotate(-135)"
            />
            <use
              href="#fw-rg5p"
              transform="translate(-1.31625 292.572) rotate(-90)"
            />
            <use
              href="#fw-rg5p"
              transform="translate(-61.2519 146.014) rotate(-45)"
            />
          </g>
        </g>
      </g>
      <g
        className="firework-burst"
        style={{ "--i": 11, "--t": 0 } as CSSProperties}
      >
        <g filter="url(#fw-c)">
          <path
            id="fw-d"
            fill="#F7EE6F"
            d="m413.045 47.943-1.871.114a291 291 0 0 0 3.684 60.124l1.871-.115q.064-1.512.112-3.024.435-13.605-.394-27.133a292 292 0 0 0-3.402-29.966"
          />
          <use href="#fw-d" transform="rotate(45 413.951 144.198)" />
          <use href="#fw-d" transform="rotate(90 413.952 144.198)" />
          <use href="#fw-d" transform="rotate(135 413.952 144.198)" />
          <use href="#fw-d" transform="rotate(-180 413.952 144.197)" />
          <use href="#fw-d" transform="rotate(-135 413.951 144.198)" />
          <use href="#fw-d" transform="rotate(-90 413.952 144.197)" />
          <use href="#fw-d" transform="rotate(-45 413.951 144.197)" />
        </g>
      </g>
      <g
        className="firework-burst"
        style={{ "--i": 2, "--t": 1 } as CSSProperties}
      >
        <g filter="url(#fw-e)">
          <path
            id="fw-f"
            fill="#FA5DBB"
            d="m603.09 78.077-1.411.51q.328 1.276.669 2.547a276 276 0 0 0 17.173 46.786l1.411-.51q-.329-1.276-.669-2.548a276 276 0 0 0-7.076-22.544 276 276 0 0 0-10.097-24.242"
          />
          <use href="#fw-f" transform="rotate(45 624.689 139.999)" />
          <use href="#fw-f" transform="rotate(90 624.688 139.999)" />
          <use href="#fw-f" transform="rotate(135 624.687 139.998)" />
          <use href="#fw-f" transform="rotate(-180 624.69 139.998)" />
          <use href="#fw-f" transform="rotate(-135 624.688 139.999)" />
          <use href="#fw-f" transform="rotate(-90 624.688 139.999)" />
          <use href="#fw-f" transform="rotate(-45 624.688 139.999)" />
        </g>
      </g>
      <g
        className="firework-burst"
        style={{ "--i": 6, "--t": 1 } as CSSProperties}
      >
        <g filter="url(#fw-g)">
          <path
            id="fw-h"
            fill="#FF5E19"
            d="m553.246 268.962-1.058.382q.357 1.266.724 2.527a368 368 0 0 0 7.315 22.459 368 368 0 0 0 9.803 24.348l1.058-.383q-.358-1.266-.725-2.527a367 367 0 0 0-16.058-44.4 344 344 0 0 0-1.059-2.406"
          />
          <use href="#fw-h" transform="rotate(45 575.02 330.82)" />
          <use href="#fw-h" transform="rotate(90 575.02 330.82)" />
          <use href="#fw-h" transform="rotate(135 575.022 330.82)" />
          <use href="#fw-h" transform="rotate(-180 575.02 330.82)" />
          <use href="#fw-h" transform="rotate(-135 575.02 330.82)" />
          <use href="#fw-h" transform="rotate(-90 575.02 330.82)" />
          <use href="#fw-h" transform="rotate(-45 575.02 330.82)" />
        </g>
      </g>
      <g
        className="firework-burst"
        style={{ "--i": 2, "--t": 1 } as CSSProperties}
      >
        <g filter="url(#fw-i)">
          <path
            id="fw-j"
            fill="#FC3B7B"
            d="m619.257 3.973-1.873.097a715 715 0 0 0 .871 47.236 715 715 0 0 0 3.992 47.075l1.872-.097q.035-2.366.054-4.73a714 714 0 0 0-4.916-89.58"
          />
          <use href="#fw-j" transform="rotate(45 620.751 140.773)" />
          <use href="#fw-j" transform="rotate(90 620.752 140.774)" />
          <use href="#fw-j" transform="rotate(135 620.751 140.773)" />
          <use href="#fw-j" transform="rotate(-180 620.75 140.773)" />
          <use href="#fw-j" transform="rotate(-135 620.751 140.773)" />
          <use href="#fw-j" transform="rotate(-90 620.752 140.773)" />
          <use href="#fw-j" transform="rotate(-45 620.751 140.773)" />
        </g>
      </g>
      <g
        className="firework-burst"
        style={{ "--i": 3, "--t": 1 } as CSSProperties}
      >
        <g filter="url(#fw-k)">
          <circle
            cx="255.273"
            cy="273.967"
            r="56.302"
            stroke="#FFFB00"
            strokeDasharray="3 20"
            strokeWidth="10"
          />
        </g>
      </g>
      <g
        className="firework-burst"
        style={{ "--i": 8, "--t": 1 } as CSSProperties}
      >
        <g filter="url(#fw-l)">
          <circle
            cx="498.412"
            cy="90.302"
            r="56.302"
            stroke="#F80"
            strokeDasharray="3 20"
            strokeWidth="10"
          />
        </g>
      </g>
      <g
        className="firework-burst"
        style={{ "--i": 0, "--t": 1 } as CSSProperties}
      >
        <g filter="url(#fw-m)">
          <circle
            cx="189.427"
            cy="114.32"
            r="43.802"
            stroke="#00FF1A"
            strokeDasharray="3 23"
            strokeWidth="35"
          />
        </g>
      </g>
      <g
        className="firework-burst"
        style={{ "--i": 0, "--t": 1 } as CSSProperties}
      >
        <g filter="url(#fw-n)">
          <circle
            cx="188.839"
            cy="113.73"
            r="68.722"
            stroke="#F80"
            strokeDasharray="3 40"
            strokeWidth="50"
            transform="rotate(-14.1 188.839 113.73)"
          />
        </g>
      </g>
      <g
        className="firework-burst"
        style={{ "--i": 14, "--t": 0 } as CSSProperties}
      >
        <g filter="url(#fw-o)">
          <circle
            cx="389.666"
            cy="367.101"
            r="32.724"
            stroke="#0073FF"
            strokeDasharray="3 18"
            strokeWidth="10"
          />
        </g>
      </g>
      <g
        className="firework-burst"
        style={{ "--i": 13, "--t": 0 } as CSSProperties}
      >
        <g filter="url(#fw-p)">
          <circle
            cx="109.834"
            cy="231.725"
            r="27.724"
            stroke="#0EF"
            strokeDasharray="2 18"
            strokeWidth="20"
          />
        </g>
      </g>
      <g
        className="firework-burst"
        style={{ "--i": 5, "--t": 1 } as CSSProperties}
      >
        <g filter="url(#fw-q)">
          <circle
            cx="189.845"
            cy="340.576"
            r="35.103"
            stroke="#0073FF"
            strokeDasharray="2 15"
            strokeWidth="30"
          />
        </g>
      </g>
      <g
        className="firework-burst"
        style={{ "--i": 4, "--t": 1 } as CSSProperties}
      >
        <g filter="url(#fw-r)">
          <circle
            cx="776.876"
            cy="184.906"
            r="32.745"
            stroke="#0073FF"
            strokeDasharray="3 25"
            strokeWidth="30"
            transform="rotate(-21.316 776.876 184.906)"
          />
        </g>
      </g>
      <g
        className="firework-burst"
        style={{ "--i": 10, "--t": 1 } as CSSProperties}
      >
        <g filter="url(#fw-s)">
          <circle
            cx="373.162"
            cy="317.586"
            r="104.921"
            stroke="#FDFDF2"
            strokeDasharray="0.01 12"
            strokeLinecap="round"
            strokeWidth="3"
          />
        </g>
      </g>
      <g
        className="firework-burst"
        style={{ "--i": 4, "--t": 1 } as CSSProperties}
      >
        <g filter="url(#fw-t)">
          <circle
            cx="775.109"
            cy="186"
            r="83"
            stroke="#FDFDF2"
            strokeDasharray="0.01 12"
            strokeLinecap="round"
            strokeWidth="3"
          />
        </g>
      </g>
      <g
        className="firework-burst"
        style={{ "--i": 12, "--t": 0 } as CSSProperties}
      >
        <g filter="url(#fw-u)">
          <circle
            cx="475.725"
            cy="255.105"
            r="86.059"
            stroke="#4226F7"
            strokeDasharray="0.01 15"
            strokeLinecap="round"
            strokeWidth="5"
          />
        </g>
      </g>
      <g
        className="firework-burst"
        style={{ "--i": 9, "--t": 1 } as CSSProperties}
      >
        <g filter="url(#fw-v)">
          <ellipse
            cx="716.808"
            cy="328.198"
            stroke="#5EF726"
            strokeDasharray="0.01 15"
            strokeLinecap="round"
            strokeWidth="6"
            rx="58.355"
            ry="58.945"
          />
        </g>
      </g>
      <g
        className="firework-burst"
        style={{ "--i": 1, "--t": 1 } as CSSProperties}
      >
        <g filter="url(#fw-w)">
          <circle
            cx="942.61"
            cy="194.5"
            r="54.5"
            stroke="#F72629"
            strokeDasharray="0.01 40"
            strokeLinecap="round"
            strokeWidth="6"
            transform="rotate(22.584 942.61 194.5)"
          />
        </g>
      </g>
      <g
        className="firework-burst"
        style={{ "--i": 5, "--t": 1 } as CSSProperties}
      >
        <g filter="url(#fw-x)">
          <ellipse
            cx="189.844"
            cy="341.166"
            stroke="#B826F7"
            strokeDasharray="0.01 15"
            strokeLinecap="round"
            strokeWidth="6"
            rx="43.029"
            ry="43.619"
          />
        </g>
      </g>
      <g
        className="firework-burst"
        style={{ "--i": 4, "--t": 1 } as CSSProperties}
      >
        <g filter="url(#fw-y)">
          <circle
            cx="777.465"
            cy="184.318"
            r="20.041"
            stroke="#00D5FF"
            strokeDasharray="0.01 15"
            strokeLinecap="round"
            strokeWidth="4"
          />
        </g>
      </g>
      <g
        className="firework-burst"
        style={{ "--i": 6, "--t": 1 } as CSSProperties}
      >
        <g filter="url(#fw-z)">
          <circle
            cx="578.29"
            cy="331.734"
            r="30.651"
            stroke="#FF0004"
            strokeDasharray="0.01 20"
            strokeLinecap="round"
            strokeWidth="4"
          />
        </g>
      </g>
      <g
        className="firework-burst"
        style={{ "--i": 7, "--t": 0 } as CSSProperties}
      >
        <g filter="url(#fw-A)">
          <circle
            cx="107.031"
            cy="185.921"
            r="104.921"
            stroke="#F201EE"
            strokeDasharray="0.01 12"
            strokeLinecap="round"
            strokeWidth="4"
          />
        </g>
      </g>
    </g>
    <defs>
      <filter
        id="fw-c"
        width="195.03"
        height="195.07"
        x="316.436"
        y="46.643"
        colorInterpolationFilters="sRGB"
        filterUnits="userSpaceOnUse"
      >
        <feFlood floodOpacity="0" result="BackgroundImageFix" />
        <feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
        <feTurbulence
          baseFrequency="0.0099999997764825821 0.0099999997764825821"
          numOctaves="3"
          seed="2177"
          type="fractalNoise"
        />
        <feDisplacementMap
          width="100%"
          height="100%"
          in="shape"
          result="displacedImage"
          scale="2.6"
          xChannelSelector="R"
          yChannelSelector="G"
        />
        <feMerge result="effect1_texture_15868_12425">
          <feMergeNode in="displacedImage" />
        </feMerge>
      </filter>
      <filter
        id="fw-e"
        width="170.539"
        height="170.538"
        x="539.419"
        y="54.729"
        colorInterpolationFilters="sRGB"
        filterUnits="userSpaceOnUse"
      >
        <feFlood floodOpacity="0" result="BackgroundImageFix" />
        <feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
        <feTurbulence
          baseFrequency="0.0099999997764825821 0.0099999997764825821"
          numOctaves="3"
          seed="2177"
          type="fractalNoise"
        />
        <feDisplacementMap
          width="100%"
          height="100%"
          in="shape"
          result="displacedImage"
          scale="2.6"
          xChannelSelector="R"
          yChannelSelector="G"
        />
        <feMerge result="effect1_texture_15868_12425">
          <feMergeNode in="displacedImage" />
        </feMerge>
      </filter>
      <filter
        id="fw-g"
        width="170.539"
        height="170.538"
        x="489.751"
        y="245.551"
        colorInterpolationFilters="sRGB"
        filterUnits="userSpaceOnUse"
      >
        <feFlood floodOpacity="0" result="BackgroundImageFix" />
        <feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
        <feTurbulence
          baseFrequency="0.0099999997764825821 0.0099999997764825821"
          numOctaves="3"
          seed="2177"
          type="fractalNoise"
        />
        <feDisplacementMap
          width="100%"
          height="100%"
          in="shape"
          result="displacedImage"
          scale="2.6"
          xChannelSelector="R"
          yChannelSelector="G"
        />
        <feMerge result="effect1_texture_15868_12425">
          <feMergeNode in="displacedImage" />
        </feMerge>
      </filter>
      <filter
        id="fw-i"
        width="276.147"
        height="276.173"
        x="482.679"
        y="2.673"
        colorInterpolationFilters="sRGB"
        filterUnits="userSpaceOnUse"
      >
        <feFlood floodOpacity="0" result="BackgroundImageFix" />
        <feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
        <feTurbulence
          baseFrequency="0.0099999997764825821 0.0099999997764825821"
          numOctaves="3"
          seed="2177"
          type="fractalNoise"
        />
        <feDisplacementMap
          width="100%"
          height="100%"
          in="shape"
          result="displacedImage"
          scale="2.6"
          xChannelSelector="R"
          yChannelSelector="G"
        />
        <feMerge result="effect1_texture_15868_12425">
          <feMergeNode in="displacedImage" />
        </feMerge>
      </filter>
      <filter
        id="fw-k"
        width="122.825"
        height="122.824"
        x="193.861"
        y="212.555"
        colorInterpolationFilters="sRGB"
        filterUnits="userSpaceOnUse"
      >
        <feFlood floodOpacity="0" result="BackgroundImageFix" />
        <feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
        <feTurbulence
          baseFrequency="0.012303149327635765 0.012303149327635765"
          numOctaves="3"
          seed="2139"
          type="fractalNoise"
        />
        <feDisplacementMap
          width="100%"
          height="100%"
          in="shape"
          result="displacedImage"
          scale=".22"
          xChannelSelector="R"
          yChannelSelector="G"
        />
        <feMerge result="effect1_texture_15868_12425">
          <feMergeNode in="displacedImage" />
        </feMerge>
      </filter>
      <filter
        id="fw-l"
        width="122.825"
        height="122.824"
        x="436.999"
        y="28.89"
        colorInterpolationFilters="sRGB"
        filterUnits="userSpaceOnUse"
      >
        <feFlood floodOpacity="0" result="BackgroundImageFix" />
        <feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
        <feTurbulence
          baseFrequency="0.012303149327635765 0.012303149327635765"
          numOctaves="3"
          seed="2139"
          type="fractalNoise"
        />
        <feDisplacementMap
          width="100%"
          height="100%"
          in="shape"
          result="displacedImage"
          scale=".22"
          xChannelSelector="R"
          yChannelSelector="G"
        />
        <feMerge result="effect1_texture_15868_12425">
          <feMergeNode in="displacedImage" />
        </feMerge>
      </filter>
      <filter
        id="fw-m"
        width="122.825"
        height="122.824"
        x="128.015"
        y="52.908"
        colorInterpolationFilters="sRGB"
        filterUnits="userSpaceOnUse"
      >
        <feFlood floodOpacity="0" result="BackgroundImageFix" />
        <feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
        <feTurbulence
          baseFrequency="0.012303149327635765 0.012303149327635765"
          numOctaves="3"
          seed="2139"
          type="fractalNoise"
        />
        <feDisplacementMap
          width="100%"
          height="100%"
          in="shape"
          result="displacedImage"
          scale=".22"
          xChannelSelector="R"
          yChannelSelector="G"
        />
        <feMerge result="effect1_texture_15868_12425">
          <feMergeNode in="displacedImage" />
        </feMerge>
      </filter>
      <filter
        id="fw-n"
        width="187.708"
        height="187.708"
        x="94.986"
        y="19.876"
        colorInterpolationFilters="sRGB"
        filterUnits="userSpaceOnUse"
      >
        <feFlood floodOpacity="0" result="BackgroundImageFix" />
        <feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
        <feTurbulence
          baseFrequency="0.012303149327635765 0.012303149327635765"
          numOctaves="3"
          seed="2139"
          type="fractalNoise"
        />
        <feDisplacementMap
          width="100%"
          height="100%"
          in="shape"
          result="displacedImage"
          scale=".22"
          xChannelSelector="R"
          yChannelSelector="G"
        />
        <feMerge result="effect1_texture_15868_12425">
          <feMergeNode in="displacedImage" />
        </feMerge>
      </filter>
      <filter
        id="fw-o"
        width="75.669"
        height="75.669"
        x="351.831"
        y="329.267"
        colorInterpolationFilters="sRGB"
        filterUnits="userSpaceOnUse"
      >
        <feFlood floodOpacity="0" result="BackgroundImageFix" />
        <feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
        <feTurbulence
          baseFrequency="0.012303149327635765 0.012303149327635765"
          numOctaves="3"
          seed="2139"
          type="fractalNoise"
        />
        <feDisplacementMap
          width="100%"
          height="100%"
          in="shape"
          result="displacedImage"
          scale=".22"
          xChannelSelector="R"
          yChannelSelector="G"
        />
        <feMerge result="effect1_texture_15868_12425">
          <feMergeNode in="displacedImage" />
        </feMerge>
      </filter>
      <filter
        id="fw-p"
        width="75.669"
        height="75.669"
        x="71.999"
        y="193.89"
        colorInterpolationFilters="sRGB"
        filterUnits="userSpaceOnUse"
      >
        <feFlood floodOpacity="0" result="BackgroundImageFix" />
        <feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
        <feTurbulence
          baseFrequency="0.012303149327635765 0.012303149327635765"
          numOctaves="3"
          seed="2139"
          type="fractalNoise"
        />
        <feDisplacementMap
          width="100%"
          height="100%"
          in="shape"
          result="displacedImage"
          scale=".22"
          xChannelSelector="R"
          yChannelSelector="G"
        />
        <feMerge result="effect1_texture_15868_12425">
          <feMergeNode in="displacedImage" />
        </feMerge>
      </filter>
      <filter
        id="fw-q"
        width="100.425"
        height="100.426"
        x="139.632"
        y="290.363"
        colorInterpolationFilters="sRGB"
        filterUnits="userSpaceOnUse"
      >
        <feFlood floodOpacity="0" result="BackgroundImageFix" />
        <feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
        <feTurbulence
          baseFrequency="0.012303149327635765 0.012303149327635765"
          numOctaves="3"
          seed="2139"
          type="fractalNoise"
        />
        <feDisplacementMap
          width="100%"
          height="100%"
          in="shape"
          result="displacedImage"
          scale=".22"
          xChannelSelector="R"
          yChannelSelector="G"
        />
        <feMerge result="effect1_texture_15868_12425">
          <feMergeNode in="displacedImage" />
        </feMerge>
      </filter>
      <filter
        id="fw-r"
        width="97.516"
        height="97.516"
        x="728.117"
        y="136.148"
        colorInterpolationFilters="sRGB"
        filterUnits="userSpaceOnUse"
      >
        <feFlood floodOpacity="0" result="BackgroundImageFix" />
        <feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
        <feTurbulence
          baseFrequency="0.033333335071802139 0.033333335071802139"
          numOctaves="3"
          seed="2139"
          type="fractalNoise"
        />
        <feDisplacementMap
          width="100%"
          height="100%"
          in="shape"
          result="displacedImage"
          scale="2"
          xChannelSelector="R"
          yChannelSelector="G"
        />
        <feMerge result="effect1_texture_15868_12425">
          <feMergeNode in="displacedImage" />
        </feMerge>
      </filter>
      <filter
        id="fw-s"
        width="213.062"
        height="213.063"
        x="266.63"
        y="211.055"
        colorInterpolationFilters="sRGB"
        filterUnits="userSpaceOnUse"
      >
        <feFlood floodOpacity="0" result="BackgroundImageFix" />
        <feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
        <feTurbulence
          baseFrequency="0.012303149327635765 0.012303149327635765"
          numOctaves="3"
          seed="2139"
          type="fractalNoise"
        />
        <feDisplacementMap
          width="100%"
          height="100%"
          in="shape"
          result="displacedImage"
          scale=".22"
          xChannelSelector="R"
          yChannelSelector="G"
        />
        <feMerge result="effect1_texture_15868_12425">
          <feMergeNode in="displacedImage" />
        </feMerge>
      </filter>
      <filter
        id="fw-t"
        width="169.22"
        height="169.22"
        x="690.499"
        y="101.39"
        colorInterpolationFilters="sRGB"
        filterUnits="userSpaceOnUse"
      >
        <feFlood floodOpacity="0" result="BackgroundImageFix" />
        <feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
        <feTurbulence
          baseFrequency="0.012303149327635765 0.012303149327635765"
          numOctaves="3"
          seed="2139"
          type="fractalNoise"
        />
        <feDisplacementMap
          width="100%"
          height="100%"
          in="shape"
          result="displacedImage"
          scale=".22"
          xChannelSelector="R"
          yChannelSelector="G"
        />
        <feMerge result="effect1_texture_15868_12425">
          <feMergeNode in="displacedImage" />
        </feMerge>
      </filter>
      <filter
        id="fw-u"
        width="177.339"
        height="177.338"
        x="387.056"
        y="166.436"
        colorInterpolationFilters="sRGB"
        filterUnits="userSpaceOnUse"
      >
        <feFlood floodOpacity="0" result="BackgroundImageFix" />
        <feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
        <feTurbulence
          baseFrequency="0.012303149327635765 0.012303149327635765"
          numOctaves="3"
          seed="2139"
          type="fractalNoise"
        />
        <feDisplacementMap
          width="100%"
          height="100%"
          in="shape"
          result="displacedImage"
          scale=".22"
          xChannelSelector="R"
          yChannelSelector="G"
        />
        <feMerge result="effect1_texture_15868_12425">
          <feMergeNode in="displacedImage" />
        </feMerge>
      </filter>
      <filter
        id="fw-v"
        width="122.931"
        height="124.109"
        x="655.343"
        y="266.143"
        colorInterpolationFilters="sRGB"
        filterUnits="userSpaceOnUse"
      >
        <feFlood floodOpacity="0" result="BackgroundImageFix" />
        <feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
        <feTurbulence
          baseFrequency="0.012303149327635765 0.012303149327635765"
          numOctaves="3"
          seed="2139"
          type="fractalNoise"
        />
        <feDisplacementMap
          width="100%"
          height="100%"
          in="shape"
          result="displacedImage"
          scale=".22"
          xChannelSelector="R"
          yChannelSelector="G"
        />
        <feMerge result="effect1_texture_15868_12425">
          <feMergeNode in="displacedImage" />
        </feMerge>
      </filter>
      <filter
        id="fw-w"
        width="106.99"
        height="106.989"
        x="889.115"
        y="141.006"
        colorInterpolationFilters="sRGB"
        filterUnits="userSpaceOnUse"
      >
        <feFlood floodOpacity="0" result="BackgroundImageFix" />
        <feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
        <feTurbulence
          baseFrequency="0.012303149327635765 0.012303149327635765"
          numOctaves="3"
          seed="2139"
          type="fractalNoise"
        />
        <feDisplacementMap
          width="100%"
          height="100%"
          in="shape"
          result="displacedImage"
          scale=".22"
          xChannelSelector="R"
          yChannelSelector="G"
        />
        <feMerge result="effect1_texture_15868_12425">
          <feMergeNode in="displacedImage" />
        </feMerge>
      </filter>
      <filter
        id="fw-x"
        width="92.279"
        height="93.458"
        x="143.704"
        y="294.437"
        colorInterpolationFilters="sRGB"
        filterUnits="userSpaceOnUse"
      >
        <feFlood floodOpacity="0" result="BackgroundImageFix" />
        <feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
        <feTurbulence
          baseFrequency="0.012303149327635765 0.012303149327635765"
          numOctaves="3"
          seed="2139"
          type="fractalNoise"
        />
        <feDisplacementMap
          width="100%"
          height="100%"
          in="shape"
          result="displacedImage"
          scale=".22"
          xChannelSelector="R"
          yChannelSelector="G"
        />
        <feMerge result="effect1_texture_15868_12425">
          <feMergeNode in="displacedImage" />
        </feMerge>
      </filter>
      <filter
        id="fw-y"
        width="44.302"
        height="44.303"
        x="755.314"
        y="162.167"
        colorInterpolationFilters="sRGB"
        filterUnits="userSpaceOnUse"
      >
        <feFlood floodOpacity="0" result="BackgroundImageFix" />
        <feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
        <feTurbulence
          baseFrequency="0.012303149327635765 0.012303149327635765"
          numOctaves="3"
          seed="2139"
          type="fractalNoise"
        />
        <feDisplacementMap
          width="100%"
          height="100%"
          in="shape"
          result="displacedImage"
          scale=".22"
          xChannelSelector="R"
          yChannelSelector="G"
        />
        <feMerge result="effect1_texture_15868_12425">
          <feMergeNode in="displacedImage" />
        </feMerge>
      </filter>
      <filter
        id="fw-z"
        width="65.523"
        height="65.522"
        x="545.529"
        y="298.973"
        colorInterpolationFilters="sRGB"
        filterUnits="userSpaceOnUse"
      >
        <feFlood floodOpacity="0" result="BackgroundImageFix" />
        <feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
        <feTurbulence
          baseFrequency="0.012303149327635765 0.012303149327635765"
          numOctaves="3"
          seed="2139"
          type="fractalNoise"
        />
        <feDisplacementMap
          width="100%"
          height="100%"
          in="shape"
          result="displacedImage"
          scale=".22"
          xChannelSelector="R"
          yChannelSelector="G"
        />
        <feMerge result="effect1_texture_15868_12425">
          <feMergeNode in="displacedImage" />
        </feMerge>
      </filter>
      <filter
        id="fw-A"
        width="214.062"
        height="214.063"
        x="-.001"
        y="78.89"
        colorInterpolationFilters="sRGB"
        filterUnits="userSpaceOnUse"
      >
        <feFlood floodOpacity="0" result="BackgroundImageFix" />
        <feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
        <feTurbulence
          baseFrequency="0.012303149327635765 0.012303149327635765"
          numOctaves="3"
          seed="2139"
          type="fractalNoise"
        />
        <feDisplacementMap
          width="100%"
          height="100%"
          in="shape"
          result="displacedImage"
          scale=".22"
          xChannelSelector="R"
          yChannelSelector="G"
        />
        <feMerge result="effect1_texture_15868_12425">
          <feMergeNode in="displacedImage" />
        </feMerge>
      </filter>
      <filter
        id="fw-rg5f"
        x="-1.3"
        y="0"
        width="293.856"
        height="293.872"
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
          baseFrequency="0.0099999997764825821 0.0099999997764825821"
          numOctaves="3"
          seed="2177"
        />
        <feDisplacementMap
          in="shape"
          scale="2.5999999046325684"
          xChannelSelector="R"
          yChannelSelector="G"
          result="displacedImage"
          width="100%"
          height="100%"
        />
        <feMerge result="effect1_texture_0_4">
          <feMergeNode in="displacedImage" />
        </feMerge>
      </filter>
    </defs>
  </svg>
);
