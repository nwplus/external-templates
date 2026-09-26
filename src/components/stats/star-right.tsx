import { type StarContent, StarOverlay } from "./star-overlay";

/**
 * `idPrefix` namespaces the inline SVG's gradient/filter ids: the desktop and
 * mobile trees both render this, and duplicate ids resolve to the hidden copy.
 *
 * The soft glow behind the star is its own SVG on its own layer: the twinkle
 * fades that layer's opacity on the compositor, so the 40px blur is
 * rasterised once instead of on every frame of the animation.
 */
export const StarRight = ({
  value,
  label,
  idPrefix = "star-right",
}: StarContent & { idPrefix?: string }) => (
  <div className="relative w-full">
    <div
      aria-hidden="true"
      className="absolute inset-0 will-change-[opacity] motion-safe:animate-twinkle [animation-delay:-2s]"
    >
      <svg
        className="block w-full h-auto"
        width="641"
        height="640"
        viewBox="0 0 641 640"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g filter={`url(#${idPrefix}-filter0_f_5247_12858)`}>
          <g filter={`url(#${idPrefix}-filter1_d_5247_12858)`}>
            <path
              d="M380.389 213.147L380.945 213.96L531.646 185.968L452.94 323.786L452.43 324.68L453.086 325.478L540.594 432.113L366.767 431.66L366.247 431.658L365.839 431.978L228.005 540.172L227.092 367.007L227.088 366.162L226.359 365.724L100.5 290.137L275.924 250.831L276.898 250.612L277.067 249.631L302.824 99.7336L380.389 213.147Z"
              stroke="#B73A72"
              strokeOpacity="0.2"
              strokeWidth="3"
              shapeRendering="crispEdges"
            />
          </g>
          <path
            d="M392.338 228.649L303.181 99.9252L348.851 337.661L392.338 228.649Z"
            fill={`url(#${idPrefix}-paint0_radial_5247_12858)`}
          />
          <path
            d="M450.423 329.853L527.25 193.659L331.849 340.683L450.423 329.853Z"
            fill={`url(#${idPrefix}-paint1_radial_5247_12858)`}
          />
          <path
            d="M377.544 430.613L535.913 432.681L311.708 333.036L377.544 430.613Z"
            fill={`url(#${idPrefix}-paint2_radial_5247_12858)`}
          />
          <path
            d="M227.238 376.726L225.282 532.457L326.408 311.897L227.238 376.726Z"
            fill={`url(#${idPrefix}-paint3_radial_5247_12858)`}
          />
          <path
            d="M261.309 255.282L106.648 288.849L348.075 335.487L261.309 255.282Z"
            fill={`url(#${idPrefix}-paint4_radial_5247_12858)`}
          />
        </g>
        <defs>
          <filter
            id={`${idPrefix}-filter0_f_5247_12858`}
            x="16.5208"
            y="15.833"
            width="607.246"
            height="607.418"
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
              result="effect1_foregroundBlur_5247_12858"
            />
          </filter>
          <filter
            id={`${idPrefix}-filter1_d_5247_12858`}
            x="93.5682"
            y="95.833"
            width="453.151"
            height="453.323"
            filterUnits="userSpaceOnUse"
            colorInterpolationFilters="sRGB"
          >
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feColorMatrix
              in="SourceAlpha"
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
              result="hardAlpha"
            />
            <feOffset dy="2.95256" />
            <feGaussianBlur stdDeviation="1.47628" />
            <feComposite in2="hardAlpha" operator="out" />
            <feColorMatrix
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
            />
            <feBlend
              mode="normal"
              in2="BackgroundImageFix"
              result="effect1_dropShadow_5247_12858"
            />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="effect1_dropShadow_5247_12858"
              result="shape"
            />
          </filter>
          <radialGradient
            id={`${idPrefix}-paint0_radial_5247_12858`}
            cx="0"
            cy="0"
            r="1"
            gradientTransform="matrix(22.8348 118.868 31.1045 -5.77766 357.12 213.016)"
            gradientUnits="userSpaceOnUse"
          >
            <stop offset="0.769231" stopColor="#FACB6B" />
            <stop offset="1" stopColor="#F06B33" />
          </radialGradient>
          <radialGradient
            id={`${idPrefix}-paint1_radial_5247_12858`}
            cx="0"
            cy="0"
            r="1"
            gradientTransform="matrix(-97.7006 73.5119 19.236 24.7202 448.785 291.891)"
            gradientUnits="userSpaceOnUse"
          >
            <stop offset="0.769231" stopColor="#FACB6B" />
            <stop offset="1" stopColor="#F06B33" />
          </radialGradient>
          <radialGradient
            id={`${idPrefix}-paint2_radial_5247_12858`}
            cx="0"
            cy="0"
            r="1"
            gradientTransform="matrix(-112.103 -49.8225 -13.0372 28.3643 410.774 411.223)"
            gradientUnits="userSpaceOnUse"
          >
            <stop offset="0.769231" stopColor="#FACB6B" />
            <stop offset="1" stopColor="#F06B33" />
          </radialGradient>
          <radialGradient
            id={`${idPrefix}-paint3_radial_5247_12858`}
            cx="0"
            cy="0"
            r="1"
            gradientTransform="matrix(50.5631 -110.28 -28.8572 -12.7935 246.988 409.384)"
            gradientUnits="userSpaceOnUse"
          >
            <stop offset="0.769231" stopColor="#FACB6B" />
            <stop offset="1" stopColor="#F06B33" />
          </radialGradient>
          <radialGradient
            id={`${idPrefix}-paint4_radial_5247_12858`}
            cx="0"
            cy="0"
            r="1"
            gradientTransform="matrix(120.714 23.3193 6.10201 -30.543 233.464 281.625)"
            gradientUnits="userSpaceOnUse"
          >
            <stop offset="0.769231" stopColor="#FACB6B" />
            <stop offset="1" stopColor="#F06B33" />
          </radialGradient>
        </defs>
      </svg>
    </div>

    <svg
      className="relative block w-full h-auto"
      width="641"
      height="640"
      viewBox="0 0 641 640"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M345.441 137.827L389.923 239.764L512.919 239.764L429.573 337.387L482.816 435.01L345.441 409.121L220.106 474.383L245.676 337.387L157.011 258.576L302.049 253.248L345.441 137.827Z"
        fill={`url(#${idPrefix}-paint5_radial_5247_12858)`}
      />
      <path
        d="M388.548 240.364L388.941 241.264L509.666 241.264L428.432 336.413L427.761 337.199L428.256 338.105L479.984 432.95L345.719 407.648L345.209 407.551L344.749 407.791L222.145 471.63L247.151 337.662L247.306 336.829L246.672 336.267L160.8 259.938L302.104 254.748L303.101 254.711L303.453 253.776L345.544 141.814L388.548 240.364Z"
        stroke="#B73A72"
        strokeOpacity="0.2"
        strokeWidth="3"
      />
      <path
        d="M395.803 253.999L345.771 141.18L345.771 332.38L395.803 253.999Z"
        fill="#FFDD87"
      />
      <path
        d="M425.809 340.966L505.785 246.288L332.115 332.273L425.809 340.966Z"
        fill="#FFDD87"
      />
      <path
        d="M354.185 408.697L476.857 433.147L317.616 323.428L354.185 408.697Z"
        fill="#FFDD87"
      />
      <path
        d="M245.502 345.171L220.752 465.821L332.183 309.133L245.502 345.171Z"
        fill="#FFDD87"
      />
      <path
        d="M290.08 255.781L164.972 259.538L345.493 330.579L290.08 255.781Z"
        fill="#FFDD87"
      />
      <g filter={`url(#${idPrefix}-filter2_d_5247_12858)`}>
        <path
          d="M342.484 190.748C343.751 187.686 348.097 187.71 349.324 190.784L376.248 258.221C376.792 259.583 378.091 260.493 379.557 260.539L462.252 263.124C465.402 263.222 466.984 266.966 464.86 269.295L406.489 333.318C405.457 334.45 405.231 336.102 405.921 337.468L439.187 403.308C440.591 406.085 438.133 409.248 435.092 408.577L340.574 387.71C339.767 387.531 338.923 387.629 338.177 387.988L249.68 430.518C246.905 431.852 243.815 429.407 244.478 426.403L265.102 332.885C265.381 331.621 264.976 330.303 264.036 329.413L207.035 275.493C204.618 273.207 206.228 269.14 209.557 269.122L307.83 268.59C309.318 268.582 310.656 267.682 311.225 266.307L342.484 190.748Z"
          fill={`url(#${idPrefix}-paint6_radial_5247_12858)`}
        />
        <path
          d="M343.871 191.319C344.623 189.503 347.202 189.517 347.931 191.342L374.854 258.778C375.618 260.693 377.446 261.973 379.509 262.038L462.204 264.623C464.073 264.681 465.012 266.904 463.751 268.286L405.38 332.308C403.928 333.901 403.611 336.224 404.582 338.145L437.848 403.985C438.681 405.633 437.222 407.511 435.417 407.113L340.899 386.245C339.764 385.994 338.577 386.132 337.529 386.636L249.031 429.167C247.384 429.958 245.55 428.507 245.943 426.724L266.567 333.206C266.959 331.428 266.39 329.575 265.068 328.324L208.067 274.404C206.632 273.047 207.588 270.633 209.564 270.622L307.837 270.089C309.929 270.078 311.812 268.813 312.612 266.879L343.871 191.319Z"
          stroke="#FFDD87"
          strokeWidth="3"
        />
      </g>
      <defs>
        <filter
          id={`${idPrefix}-filter2_d_5247_12858`}
          x="202.922"
          y="188.465"
          width="265.861"
          height="248.332"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dy="2.95256" />
          <feGaussianBlur stdDeviation="1.47628" />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
          />
          <feBlend
            mode="normal"
            in2="BackgroundImageFix"
            result="effect1_dropShadow_5247_12858"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow_5247_12858"
            result="shape"
          />
        </filter>
        <radialGradient
          id={`${idPrefix}-paint5_radial_5247_12858`}
          cx="0"
          cy="0"
          r="1"
          gradientUnits="userSpaceOnUse"
          gradientTransform="translate(334.965 306.105) rotate(90) scale(168.278 177.954)"
        >
          <stop stopColor="#FF983F" />
          <stop offset="1" stopColor="#F97B47" />
        </radialGradient>
        <radialGradient
          id={`${idPrefix}-paint6_radial_5247_12858`}
          cx="0"
          cy="0"
          r="1"
          gradientTransform="matrix(-4.11226 127.208 -134.723 -4.21119 333.914 309.312)"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0.254808" stopColor="#F8C440" />
          <stop offset="0.774038" stopColor="#F97B47" />
        </radialGradient>
      </defs>
    </svg>
    <StarOverlay value={value} label={label} className="left-[52%] top-[50%]" />
  </div>
);
