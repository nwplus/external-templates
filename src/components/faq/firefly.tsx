const Firefly = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    width="55"
    height="56"
    viewBox="0 0 65 66"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <g filter="url(#filter0_d_4_6)">
      <ellipse
        cx="7.04801"
        cy="5.7246"
        rx="7.04801"
        ry="5.7246"
        transform="matrix(-0.520391 0.853928 -0.862513 -0.506036 41.2104 29.7939)"
        fill="url(#paint0_radial_4_6)"
      />
    </g>
  </svg>
);

export const FireflyDefs = () => (
  <svg>
    <defs>
      <filter
        id="filter0_d_4_6"
        x="0.75407"
        y="0.534676"
        width="63.7022"
        height="64.7618"
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
          values="0 0 0 0 0.902376 0 0 0 0 0.647167 0 0 0 0 0.340917 0 0 0 1 0"
        />
        <feBlend
          mode="normal"
          in2="BackgroundImageFix"
          result="effect1_dropShadow_4_6"
        />
        <feBlend
          mode="normal"
          in="SourceGraphic"
          in2="effect1_dropShadow_4_6"
          result="shape"
        />
      </filter>
      <radialGradient
        id="paint0_radial_4_6"
        cx="0"
        cy="0"
        r="1"
        gradientUnits="userSpaceOnUse"
        gradientTransform="translate(7.04801 5.7246) rotate(90) scale(5.7246 7.04801)"
      >
        <stop stopColor="#FFF0DD" />
        <stop offset="1" stopColor="#EBC798" />
      </radialGradient>
    </defs>
  </svg>
);

export default Firefly;
