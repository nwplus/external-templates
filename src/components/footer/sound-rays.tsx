import { cn } from "@/lib/utils";

/**
 * Three sound rays that fan out from the top left of the bear's phone, so it
 * reads as playing something (and so as clickable). Figma node 5269:2358,
 * the ids shortened. Each ray is a soft blurred glow with a grainy copy on
 * top. The rays blink on and off, one just behind the other: the timing
 * lives in nugget-run.css.
 *
 * The rays meet at about (58, 50) of the 84 x 73 box: place the element with
 * its top/left on the point they should come from, and `translate` moves it
 * so that meeting point lands there.
 */
export const SoundRays = ({ className }: { className?: string }) => (
  <svg
    className={cn("sound-rays block", className)}
    width="84"
    height="73"
    viewBox="0 0 84 73"
    fill="none"
    aria-hidden="true"
  >
    <g className="sound-ray" style={{ "--ray": 0 } as React.CSSProperties}>
      <g filter="url(#sound-ray-blur-0)">
        <path
          d="M17.2003 50.7641L22.9312 39.2938L52.5613 54.9788L17.2003 50.7641Z"
          fill="url(#sound-ray-glow-0)"
        />
      </g>
      <g filter="url(#sound-ray-grain-0)">
        <path
          d="M17.2003 50.7641L22.9312 39.2938L52.5613 54.9788L17.2003 50.7641Z"
          fill="url(#sound-ray-fill-0)"
        />
      </g>
    </g>
    <g className="sound-ray" style={{ "--ray": 1 } as React.CSSProperties}>
      <g filter="url(#sound-ray-blur-1)">
        <path
          d="M55.1392 49.2L25.1392 23.7454L36.7642 17.2L55.1392 49.2Z"
          fill="url(#sound-ray-glow-1)"
        />
      </g>
      <g filter="url(#sound-ray-grain-1)">
        <path
          d="M55.1392 49.2L25.1392 23.7454L36.7642 17.2L55.1392 49.2Z"
          fill="url(#sound-ray-fill-1)"
        />
      </g>
    </g>
    <g className="sound-ray" style={{ "--ray": 2 } as React.CSSProperties}>
      <g filter="url(#sound-ray-blur-2)">
        <path
          d="M53.1392 23.2L61.1392 48.2L66.1392 28.7L53.1392 23.2Z"
          fill="url(#sound-ray-glow-2)"
        />
      </g>
      <g filter="url(#sound-ray-grain-2)">
        <path
          d="M53.1392 23.2L61.1392 48.2L66.1392 28.7L53.1392 23.2Z"
          fill="url(#sound-ray-fill-2)"
        />
      </g>
    </g>
    <defs>
      <filter
        id="sound-ray-blur-0"
        x="0.00019455"
        y="22.0938"
        width="69.7613"
        height="50.0849"
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
        <feGaussianBlur stdDeviation="8.6" />
      </filter>
      <filter
        id="sound-ray-grain-0"
        x="15.2278"
        y="37.3215"
        width="39.306"
        height="19.6296"
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
          baseFrequency="0.10140210390090942 0.10140210390090942"
          numOctaves="3"
          seed="2227"
        />
        <feDisplacementMap
          in="shape"
          scale="3.9446914196014404"
          xChannelSelector="R"
          yChannelSelector="G"
          result="displacedImage"
          width="100%"
          height="100%"
        />
        <feMerge>
          <feMergeNode in="displacedImage" />
        </feMerge>
      </filter>
      <filter
        id="sound-ray-blur-1"
        x="7.93916"
        y="-4.95911e-05"
        width="64.4"
        height="66.4"
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
        <feGaussianBlur stdDeviation="8.6" />
      </filter>
      <filter
        id="sound-ray-grain-1"
        x="23.1668"
        y="15.2276"
        width="33.9447"
        height="35.9447"
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
          baseFrequency="0.10140210390090942 0.10140210390090942"
          numOctaves="3"
          seed="2227"
        />
        <feDisplacementMap
          in="shape"
          scale="3.9446914196014404"
          xChannelSelector="R"
          yChannelSelector="G"
          result="displacedImage"
          width="100%"
          height="100%"
        />
        <feMerge>
          <feMergeNode in="displacedImage" />
        </feMerge>
      </filter>
      <filter
        id="sound-ray-blur-2"
        x="35.9392"
        y="5.99995"
        width="47.4"
        height="59.4"
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
        <feGaussianBlur stdDeviation="8.6" />
      </filter>
      <filter
        id="sound-ray-grain-2"
        x="51.1668"
        y="21.2276"
        width="16.9447"
        height="28.9447"
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
          baseFrequency="0.10140210390090942 0.10140210390090942"
          numOctaves="3"
          seed="2227"
        />
        <feDisplacementMap
          in="shape"
          scale="3.9446914196014404"
          xChannelSelector="R"
          yChannelSelector="G"
          result="displacedImage"
          width="100%"
          height="100%"
        />
        <feMerge>
          <feMergeNode in="displacedImage" />
        </feMerge>
      </filter>
      <radialGradient
        id="sound-ray-glow-0"
        cx="0"
        cy="0"
        r="1"
        gradientUnits="userSpaceOnUse"
        gradientTransform="translate(34.9789 47.0894) rotate(0.971916) scale(17.7137 7.59005)"
      >
        <stop stopColor="#F8C440" />
        <stop offset="1" stopColor="#F8C440" stopOpacity="0" />
      </radialGradient>
      <linearGradient
        id="sound-ray-fill-0"
        x1="83.3903"
        y1="65.2619"
        x2="-7.2428"
        y2="33.6963"
        gradientUnits="userSpaceOnUse"
      >
        <stop offset="0.254808" stopColor="#F8C440" />
        <stop offset="1" stopColor="#F97B47" />
      </linearGradient>
      <radialGradient
        id="sound-ray-glow-1"
        cx="0"
        cy="0"
        r="1"
        gradientUnits="userSpaceOnUse"
        gradientTransform="translate(40.1392 33.2) scale(15 16)"
      >
        <stop stopColor="#F8C440" />
        <stop offset="1" stopColor="#F8C440" stopOpacity="0" />
      </radialGradient>
      <linearGradient
        id="sound-ray-fill-1"
        x1="81.3892"
        y1="69.7714"
        x2="-2.70327"
        y2="58.6452"
        gradientUnits="userSpaceOnUse"
      >
        <stop offset="0.254808" stopColor="#F8C440" />
        <stop offset="1" stopColor="#F97B47" />
      </linearGradient>
      <radialGradient
        id="sound-ray-glow-2"
        cx="0"
        cy="0"
        r="1"
        gradientUnits="userSpaceOnUse"
        gradientTransform="translate(59.6392 35.7) scale(6.5 12.5)"
      >
        <stop stopColor="#F8C440" />
        <stop offset="1" stopColor="#F8C440" stopOpacity="0" />
      </radialGradient>
      <linearGradient
        id="sound-ray-fill-2"
        x1="77.5142"
        y1="64.2714"
        x2="40.6348"
        y2="61.5649"
        gradientUnits="userSpaceOnUse"
      >
        <stop offset="0.254808" stopColor="#F8C440" />
        <stop offset="1" stopColor="#F97B47" />
      </linearGradient>
    </defs>
  </svg>
);
