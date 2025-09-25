const Comet = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    width="252"
    height="226"
    viewBox="0 0 252 226"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <g filter="url(#filter0_d_2_2)">
      <path
        d="M222.995 189.831C223.619 190.203 224.166 190.657 224.61 191.175L225 191.499L224.901 191.542C225.473 192.329 225.821 193.239 225.869 194.216C226.024 197.374 222.996 200.035 219.105 200.161C216.243 200.254 213.712 198.947 212.513 196.992L212.5 196.999L26 26L222.995 189.831Z"
        fill="url(#paint0_linear_2_2)"
        shapeRendering="crispEdges"
      />
    </g>
  </svg>
);

export const CometDefs = () => (
  <svg>
    <defs>
      <filter
        id="filter0_d_2_2"
        x="0.299999"
        y="0.299999"
        width="251.275"
        height="225.566"
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
        <feOffset />
        <feGaussianBlur stdDeviation="12.85" />
        <feComposite in2="hardAlpha" operator="out" />
        <feColorMatrix
          type="matrix"
          values="0 0 0 0 0.902376 0 0 0 0 0.647167 0 0 0 0 0.340917 0 0 0 0.5 0"
        />
        <feBlend
          mode="normal"
          in2="BackgroundImageFix"
          result="effect1_dropShadow_2_2"
        />
        <feBlend
          mode="normal"
          in="SourceGraphic"
          in2="effect1_dropShadow_2_2"
          result="shape"
        />
      </filter>
      <linearGradient
        id="paint0_linear_2_2"
        x1="72.735"
        y1="65.8951"
        x2="163.6"
        y2="223.091"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#FFF0DD" stopOpacity="0" />
        <stop offset="1" stopColor="#EBC798" />
      </linearGradient>
    </defs>
  </svg>
);

export default Comet;
