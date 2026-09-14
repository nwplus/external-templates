import { type StarContent, StarOverlay } from "./star-overlay";

/**
 * `idPrefix` namespaces the inline SVG's gradient/filter ids: the desktop and
 * mobile trees both render this, and duplicate ids resolve to the hidden copy.
 */
export const StarLeft = ({
  value,
  label,
  idPrefix = "star-left",
}: StarContent & { idPrefix?: string }) => (
  <div className="relative w-full">
    <svg
      className="block w-full h-auto"
      width="576"
      height="683"
      viewBox="0 0 576 683"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g
        className="animate-twinkle"
        filter={`url(#${idPrefix}-filter0_f_5247_12914)`}
      >
        <g filter={`url(#${idPrefix}-filter1_d_5247_12914)`}>
          <path
            d="M305.729 276.252L305.905 277.226L448.115 310.093L325.987 402.421L325.178 403.032L325.445 404.012L360.263 532.294L209.006 465.304L208.523 465.09L208.013 465.226L45.927 508.556L112.402 354.325L112.733 353.557L112.255 352.871L31.9634 237.487L200.064 269.764L201.049 269.953L201.599 269.112L282.226 145.85L305.729 276.252Z"
            stroke="#B73A72"
            strokeOpacity="0.2"
            strokeWidth="3"
            shapeRendering="crispEdges"
          />
        </g>
        <path
          d="M310.191 294.622L282.498 145.979L229.9 374.887L310.191 294.622Z"
          fill={`url(#${idPrefix}-paint0_radial_5247_12914)`}
        />
        <path
          d="M321.491 406.883L441.415 315.229L213.901 371.056L321.491 406.883Z"
          fill={`url(#${idPrefix}-paint1_radial_5247_12914)`}
        />
        <path
          d="M218.781 468.541L356.052 531.093L199.313 356.534L218.781 468.541Z"
          fill={`url(#${idPrefix}-paint2_radial_5247_12914)`}
        />
        <path
          d="M108.683 363.001L46.4401 500.731L220.346 343.372L108.683 363.001Z"
          fill={`url(#${idPrefix}-paint3_radial_5247_12914)`}
        />
        <path
          d="M185.595 268.073L37.7046 238.629L230.065 372.656L185.595 268.073Z"
          fill={`url(#${idPrefix}-paint4_radial_5247_12914)`}
        />
      </g>
      <path
        d="M303.064 195.392L299.939 303.049L406.15 352.475L294.398 404.962L300.597 512.339L192.517 434.333L57.6932 441.445L135.596 331.062L91.1447 226.02L218.561 279.612L303.064 195.392Z"
        fill={`url(#${idPrefix}-paint5_radial_5247_12914)`}
      />
      <path
        d="M298.441 303.003L298.412 303.992L402.607 352.48L293.76 403.603L292.843 404.034L292.902 405.047L298.918 509.278L193.392 433.115L192.964 432.806L192.437 432.834L60.7031 439.782L136.82 331.93L137.301 331.248L136.975 330.478L93.961 228.831L217.983 280.995L218.909 281.385L219.62 280.676L301.457 199.113L298.441 303.003Z"
        stroke="#B73A72"
        strokeOpacity="0.2"
        strokeWidth="3"
      />
      <path
        d="M299.216 317.948L301.983 198.477L224.073 366.875L299.216 317.948Z"
        fill="#FFDD87"
      />
      <path
        d="M289.691 406.602L397.333 355.354L212.325 361.295L289.691 406.602Z"
        fill="#FFDD87"
      />
      <path
        d="M200.242 437.473L296.211 508.303L203.409 347.678L200.242 437.473Z"
        fill="#FFDD87"
      />
      <path
        d="M132.276 337.849L61.7412 434.164L221.813 340.942L132.276 337.849Z"
        fill="#FFDD87"
      />
      <path
        d="M207.192 277.031L97.6252 230.064L224.565 365.177L207.192 277.031Z"
        fill="#FFDD87"
      />
      <g filter={`url(#${idPrefix}-filter2_d_5247_12914)`}>
        <path
          d="M278.611 241.126C281.046 238.851 285.01 240.725 284.809 244.057L280.613 313.712C280.524 315.187 281.321 316.574 282.638 317.239L352.623 352.559C355.422 353.971 355.304 358.013 352.428 359.252L276.167 392.082C274.782 392.678 273.901 394.06 273.941 395.57L275.832 466.664C275.915 469.772 272.362 471.581 269.9 469.684L197.103 413.568C196.437 413.055 195.616 412.785 194.777 412.802L101.474 414.688C98.3934 414.75 96.5947 411.224 98.4519 408.764L154.184 334.93C154.954 333.91 155.142 332.562 154.68 331.368L127.532 261.242C126.336 258.151 129.491 255.172 132.501 256.552L217.182 295.392C218.541 296.015 220.139 295.757 221.23 294.737L278.611 241.126Z"
          fill={`url(#${idPrefix}-paint6_radial_5247_12914)`}
        />
        <path
          d="M279.634 242.224C281.08 240.874 283.432 241.987 283.313 243.965L279.117 313.62C278.992 315.693 280.113 317.644 281.966 318.579L351.95 353.899C353.611 354.738 353.542 357.138 351.834 357.873L275.574 390.703C273.626 391.541 272.386 393.484 272.443 395.608L274.334 466.702C274.383 468.547 272.274 469.62 270.813 468.494L198.015 412.379C197.079 411.657 195.925 411.277 194.744 411.301L101.442 413.187C99.6133 413.224 98.5454 411.131 99.6474 409.671L155.38 335.837C156.463 334.402 156.727 332.506 156.077 330.827L128.929 260.701C128.219 258.866 130.093 257.098 131.879 257.917L216.56 296.757C218.471 297.633 220.719 297.269 222.253 295.836L279.634 242.224Z"
          stroke="#FFDD87"
          strokeWidth="3"
        />
      </g>
      <defs>
        <filter
          id={`${idPrefix}-filter0_f_5247_12914`}
          x="-51.3713"
          y="61.8762"
          width="582.953"
          height="553.064"
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
            result="effect1_foregroundBlur_5247_12914"
          />
        </filter>
        <filter
          id={`${idPrefix}-filter1_d_5247_12914`}
          x="25.6761"
          y="141.876"
          width="428.858"
          height="398.97"
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
            result="effect1_dropShadow_5247_12914"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow_5247_12914"
            result="shape"
          />
        </filter>
        <filter
          id={`${idPrefix}-filter2_d_5247_12914`}
          x="94.7469"
          y="240.125"
          width="262.861"
          height="236.238"
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
            result="effect1_dropShadow_5247_12914"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow_5247_12914"
            result="shape"
          />
        </filter>
        <radialGradient
          id={`${idPrefix}-paint0_radial_5247_12914`}
          cx="0"
          cy="0"
          r="1"
          gradientTransform="matrix(-26.2991 114.454 29.3646 6.78676 285.564 267.22)"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0.769231" stopColor="#FACB6B" />
          <stop offset="1" stopColor="#F06B33" />
        </radialGradient>
        <radialGradient
          id={`${idPrefix}-paint1_radial_5247_12914`}
          cx="0"
          cy="0"
          r="1"
          gradientTransform="matrix(-113.757 27.9134 7.16151 29.3562 334.82 372.499)"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0.769231" stopColor="#FACB6B" />
          <stop offset="1" stopColor="#F06B33" />
        </radialGradient>
        <radialGradient
          id={`${idPrefix}-paint2_radial_5247_12914`}
          cx="0"
          cy="0"
          r="1"
          gradientTransform="matrix(-78.3698 -87.2797 -22.3926 20.2242 255.29 464.038)"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0.769231" stopColor="#FACB6B" />
          <stop offset="1" stopColor="#F06B33" />
        </radialGradient>
        <radialGradient
          id={`${idPrefix}-paint3_radial_5247_12914`}
          cx="0"
          cy="0"
          r="1"
          gradientTransform="matrix(86.9531 -78.6794 -20.1861 -22.4392 113.207 399.612)"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0.769231" stopColor="#FACB6B" />
          <stop offset="1" stopColor="#F06B33" />
        </radialGradient>
        <radialGradient
          id={`${idPrefix}-paint4_radial_5247_12914`}
          cx="0"
          cy="0"
          r="1"
          gradientTransform="matrix(96.18 67.0136 17.1931 -24.8203 151.078 280.823)"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0.769231" stopColor="#FACB6B" />
          <stop offset="1" stopColor="#F06B33" />
        </radialGradient>
        <radialGradient
          id={`${idPrefix}-paint5_radial_5247_12914`}
          cx="0"
          cy="0"
          r="1"
          gradientTransform="matrix(-68.5699 148.21 -153.67 -71.5115 225.448 339.392)"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#FF983F" />
          <stop offset="1" stopColor="#F97B47" />
        </radialGradient>
        <radialGradient
          id={`${idPrefix}-paint6_radial_5247_12914`}
          cx="0"
          cy="0"
          r="1"
          gradientTransform="matrix(-55.3859 110.385 -114.623 -57.8482 223.232 341.794)"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0.254808" stopColor="#F8C440" />
          <stop offset="0.774038" stopColor="#F97B47" />
        </radialGradient>
      </defs>
    </svg>
    <StarOverlay value={value} label={label} className="left-[40%] top-[52%]" />
  </div>
);
