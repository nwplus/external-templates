import { type StarContent, StarOverlay } from "./star-overlay";

/**
 * `idPrefix` namespaces the inline SVG's gradient/filter ids: the desktop and
 * mobile trees both render this, and duplicate ids resolve to the hidden copy.
 *
 * The soft glow behind the star is its own SVG on its own layer: the twinkle
 * fades that layer's opacity on the compositor, so the 40px blur is
 * rasterised once instead of on every frame of the animation.
 */
export const StarCenter = ({
  value,
  label,
  idPrefix = "star-center",
}: StarContent & { idPrefix?: string }) => (
  <div className="relative w-full">
    <div
      aria-hidden="true"
      className="absolute inset-0 will-change-[opacity] motion-safe:animate-twinkle [animation-delay:-1s]"
    >
      <svg
        className="block w-full h-auto"
        width="554"
        height="586"
        viewBox="0 0 554 586"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g filter={`url(#${idPrefix}-filter0_f_5247_12885)`}>
          <path
            d="M340.479 389.033L458.25 415.041L290.131 316.795L340.479 389.033Z"
            fill={`url(#${idPrefix}-paint0_radial_5247_12885)`}
          />
          <path
            d="M231.114 352.895L264.958 501.621L270.101 250.859L231.114 352.895Z"
            fill={`url(#${idPrefix}-paint1_radial_5247_12885)`}
          />
          <path
            d="M177.864 296.844L84.1257 394.251L274.391 283.38L177.864 296.844Z"
            fill={`url(#${idPrefix}-paint2_radial_5247_12885)`}
          />
          <path
            d="M222.903 201.046L103.849 181.786L277.259 270.301L222.903 201.046Z"
            fill={`url(#${idPrefix}-paint3_radial_5247_12885)`}
          />
          <path
            d="M334.195 197.875L293.149 84.1518L300.24 279.168L334.195 197.875Z"
            fill={`url(#${idPrefix}-paint4_radial_5247_12885)`}
          />
          <path
            d="M382.66 302.786L468.925 199.196L301.393 298.448L382.66 302.786Z"
            fill={`url(#${idPrefix}-paint5_radial_5247_12885)`}
          />
        </g>
        <defs>
          <filter
            id={`${idPrefix}-filter0_f_5247_12885`}
            x="4.12573"
            y="4.15186"
            width="544.799"
            height="577.469"
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
            <feGaussianBlur
              stdDeviation="40"
              result="effect1_foregroundBlur_5247_12885"
            />
          </filter>
          <radialGradient
            id={`${idPrefix}-paint0_radial_5247_12885`}
            cx="0"
            cy="0"
            r="1"
            gradientTransform="matrix(-84.0598 -49.1233 -9.28515 15.9816 364.905 381.9)"
            gradientUnits="userSpaceOnUse"
          >
            <stop offset="0.581731" stopColor="#FACB6B" />
            <stop offset="1" stopColor="#F06B33" />
          </radialGradient>
          <radialGradient
            id={`${idPrefix}-paint1_radial_5247_12885`}
            cx="0"
            cy="0"
            r="1"
            gradientTransform="matrix(2.57125 -125.381 -18.439 -0.380346 249.09 375.86)"
            gradientUnits="userSpaceOnUse"
          >
            <stop offset="0.668269" stopColor="#FACB6B" />
            <stop offset="1" stopColor="#F06B33" />
          </radialGradient>
          <radialGradient
            id={`${idPrefix}-paint2_radial_5247_12885`}
            cx="0"
            cy="0"
            r="1"
            gradientTransform="matrix(95.1329 -55.4357 -9.26536 -15.9931 169.993 322.823)"
            gradientUnits="userSpaceOnUse"
          >
            <stop offset="0.668269" stopColor="#FACB6B" />
            <stop offset="1" stopColor="#F06B33" />
          </radialGradient>
          <radialGradient
            id={`${idPrefix}-paint3_radial_5247_12885`}
            cx="0"
            cy="0"
            r="1"
            gradientTransform="matrix(86.705 44.2579 8.3655 -16.4845 198.92 209.559)"
            gradientUnits="userSpaceOnUse"
          >
            <stop offset="0.581731" stopColor="#FACB6B" />
            <stop offset="1" stopColor="#F06B33" />
          </radialGradient>
          <radialGradient
            id={`${idPrefix}-paint4_radial_5247_12885`}
            cx="0"
            cy="0"
            r="1"
            gradientTransform="matrix(3.54529 97.5079 18.4307 -0.674035 315.125 180.986)"
            gradientUnits="userSpaceOnUse"
          >
            <stop offset="0.581731" stopColor="#FACB6B" />
            <stop offset="1" stopColor="#F06B33" />
          </radialGradient>
          <radialGradient
            id={`${idPrefix}-paint5_radial_5247_12885`}
            cx="0"
            cy="0"
            r="1"
            gradientTransform="matrix(-83.7658 49.6258 9.38013 15.9257 394.542 264.748)"
            gradientUnits="userSpaceOnUse"
          >
            <stop offset="0.9999" stopColor="#FACB6B" />
            <stop offset="1" stopColor="#F06B33" />
          </radialGradient>
        </defs>
      </svg>
    </div>

    <svg
      className="relative block w-full h-auto"
      width="554"
      height="586"
      viewBox="0 0 554 586"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M286.046 112.657L323.42 218.172L437.254 211.693L361.392 298.607L427.627 393.106L331.868 375.439L266.791 475.485L238.827 352.245L115.583 376.45L196.458 289.803L125.21 195.036L249.59 218.843L286.046 112.657Z"
        fill={`url(#${idPrefix}-paint6_radial_5247_12885)`}
      />
      <path
        d="M332.842 375.057L423.696 392.321L284.936 311.232L332.842 375.057Z"
        fill="#FFDD87"
      />
      <path
        d="M236.225 341.028L264.159 463.781L268.403 256.81L236.225 341.028Z"
        fill="#FFDD87"
      />
      <path
        d="M192.275 294.765L114.907 375.162L271.946 283.652L192.275 294.765Z"
        fill="#FFDD87"
      />
      <path
        d="M229.449 215.697L131.186 199.8L274.313 272.858L229.449 215.697Z"
        fill="#FFDD87"
      />
      <path
        d="M321.305 213.08L287.428 119.216L293.28 280.176L321.305 213.08Z"
        fill="#FFDD87"
      />
      <path
        d="M361.307 299.67L432.507 214.17L294.232 296.089L361.307 299.67Z"
        fill="#FFDD87"
      />
      <path
        d="M285.512 181.984C286.356 180.139 289.038 180.335 289.606 182.283L306.922 241.673C307.604 244.012 309.821 245.563 312.252 245.4L382.937 240.666C384.899 240.535 386.028 242.856 384.712 244.317L336.822 297.507C335.207 299.301 335.043 301.973 336.426 303.953L378.13 363.617C379.282 365.265 377.791 367.464 375.834 367.002L316.615 353.018C314.563 352.533 312.422 353.338 311.198 355.055L268.104 415.498C266.994 417.055 264.56 416.54 264.176 414.666L248.799 339.71C248.24 336.986 245.636 335.186 242.892 335.627L164.527 348.203C162.389 348.546 161.103 345.908 162.69 344.435L215.196 295.696C217.065 293.961 217.396 291.124 215.977 289.004L174.31 226.759C173.181 225.073 174.754 222.89 176.71 223.429L252.235 244.244C254.689 244.921 257.271 243.717 258.33 241.402L285.512 181.984Z"
        fill={`url(#${idPrefix}-paint7_radial_5247_12885)`}
        stroke="#FFDD87"
        strokeWidth="3"
      />
      <defs>
        <radialGradient
          id={`${idPrefix}-paint6_radial_5247_12885`}
          cx="0"
          cy="0"
          r="1"
          gradientTransform="matrix(-9.62744 181.414 -156.022 -8.32831 276.419 294.071)"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#FF983F" />
          <stop offset="1" stopColor="#F97B47" />
        </radialGradient>
        <radialGradient
          id={`${idPrefix}-paint7_radial_5247_12885`}
          cx="0"
          cy="0"
          r="1"
          gradientTransform="matrix(-8.61202 125.688 -116.179 -8.007 273.182 297.588)"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0.254808" stopColor="#F8C440" />
          <stop offset="0.774038" stopColor="#F97B47" />
        </radialGradient>
      </defs>
    </svg>
    <StarOverlay value={value} label={label} className="left-[51%] top-[51%]" />
  </div>
);
