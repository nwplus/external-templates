/* Generated from the Figma mobile "Fireworks / Illustration" layer (node
   16201:40056, frame "fireworks hero mobile") by exporting it as SVG. It is
   clipped to the 402px phone frame, as the hero is. Re-export rather than
   hand-editing paths.

   "Repeat group 5" (the pale burst on the right edge) exports empty, as on
   desktop: its source petal is a stroked line, patched in from node
   16201:40068.

   Same motion as the desktop art (fireworks-art.tsx, hero.css): each trail
   and burst carries its launch step as `--i`; a trail is revealed from the
   launch end through a mask, and its burst (`--t: 1`) fades in once the trail
   arrives. Rings that share a centre go off together. */
import type { CSSProperties } from "react";

export const FireworksArtMobile = ({ className }: { className?: string }) => (
  <svg
    viewBox="0 0 402 308"
    fill="none"
    aria-hidden="true"
    className={className}
  >
    <g opacity="0.8">
      <g className="firework-trail" style={{ "--i": 6 } as CSSProperties}>
        <mask
          id="fwm-trail-0"
          maskUnits="userSpaceOnUse"
          x="-60"
          y="-20"
          width="520"
          height="340"
        >
          <path
            className="firework-trail-reveal"
            d="M196.238 181.193V307.924"
            stroke="#fff"
            strokeWidth="10"
            pathLength={1}
          />
        </mask>
        <path
          d="M196.238 181.193V307.924"
          stroke="#FE7D1A"
          strokeDasharray="0.05 3.5"
          strokeLinecap="round"
          mask="url(#fwm-trail-0)"
        />
      </g>
      <g className="firework-trail" style={{ "--i": 4 } as CSSProperties}>
        <mask
          id="fwm-trail-1"
          maskUnits="userSpaceOnUse"
          x="-60"
          y="-20"
          width="520"
          height="340"
        >
          <path
            className="firework-trail-reveal"
            d="M102.812 218.327C136.841 241.226 149.833 261.728 166.767 306.155"
            stroke="#fff"
            strokeWidth="10"
            pathLength={1}
          />
        </mask>
        <path
          d="M102.812 218.327C136.841 241.226 149.833 261.728 166.767 306.155"
          stroke="white"
          strokeDasharray="0.05 3.5"
          strokeLinecap="round"
          mask="url(#fwm-trail-1)"
        />
      </g>
      <g className="firework-trail" style={{ "--i": 3 } as CSSProperties}>
        <mask
          id="fwm-trail-2"
          maskUnits="userSpaceOnUse"
          x="-60"
          y="-20"
          width="520"
          height="340"
        >
          <path
            className="firework-trail-reveal"
            d="M44.752 171.466C83.3607 175.297 113.422 190.033 142.011 226.284"
            stroke="#fff"
            strokeWidth="10"
            pathLength={1}
          />
        </mask>
        <path
          d="M44.752 171.466C83.3607 175.297 113.422 190.033 142.011 226.284"
          stroke="#3F1EF7"
          strokeWidth="1.5"
          strokeDasharray="0.05 3.5"
          strokeLinecap="round"
          mask="url(#fwm-trail-2)"
        />
      </g>
      <g className="firework-trail" style={{ "--i": 1 } as CSSProperties}>
        <mask
          id="fwm-trail-3"
          maskUnits="userSpaceOnUse"
          x="-60"
          y="-20"
          width="520"
          height="340"
        >
          <path
            className="firework-trail-reveal"
            d="M280.75 198.75C259.75 222 239.684 250.074 222.75 294.5"
            stroke="#fff"
            strokeWidth="10"
            pathLength={1}
          />
        </mask>
        <path
          d="M280.75 198.75C259.75 222 239.684 250.074 222.75 294.5"
          stroke="#FB3737"
          strokeDasharray="0.05 3.5"
          strokeLinecap="round"
          mask="url(#fwm-trail-3)"
        />
      </g>
      <g className="firework-trail" style={{ "--i": 12 } as CSSProperties}>
        <mask
          id="fwm-trail-4"
          maskUnits="userSpaceOnUse"
          x="-60"
          y="-20"
          width="520"
          height="340"
        >
          <path
            className="firework-trail-reveal"
            d="M375.43 173.529C339.473 180.308 294.085 215.899 273.749 257.75"
            stroke="#fff"
            strokeWidth="10"
            pathLength={1}
          />
        </mask>
        <path
          d="M375.43 173.529C339.473 180.308 294.085 215.899 273.749 257.75"
          stroke="#FBF865"
          strokeDasharray="0.05 3.5"
          strokeLinecap="round"
          mask="url(#fwm-trail-4)"
        />
      </g>
      <g className="firework-trail" style={{ "--i": 13 } as CSSProperties}>
        <mask
          id="fwm-trail-5"
          maskUnits="userSpaceOnUse"
          x="-60"
          y="-20"
          width="520"
          height="340"
        >
          <path
            className="firework-trail-reveal"
            d="M101.928 152.604C133.168 160.267 169.419 216.854 176.493 259.589"
            stroke="#fff"
            strokeWidth="10"
            pathLength={1}
          />
        </mask>
        <path
          d="M101.928 152.604C133.168 160.267 169.419 216.854 176.493 259.589"
          stroke="#FBD218"
          strokeDasharray="0.05 3.5"
          strokeLinecap="round"
          mask="url(#fwm-trail-5)"
        />
      </g>
      <g className="firework-trail" style={{ "--i": 12 } as CSSProperties}>
        <mask
          id="fwm-trail-6"
          maskUnits="userSpaceOnUse"
          x="-60"
          y="-20"
          width="520"
          height="340"
        >
          <path
            className="firework-trail-reveal"
            d="M67.7402 95.4287C91.0233 95.4287 124.916 116.059 147.315 147.595"
            stroke="#fff"
            strokeWidth="10"
            pathLength={1}
          />
        </mask>
        <path
          d="M67.7402 95.4287C91.0233 95.4287 124.916 116.059 147.315 147.595"
          stroke="#54F43F"
          strokeWidth="1.5"
          strokeDasharray="0.05 3.5"
          strokeLinecap="round"
          mask="url(#fwm-trail-6)"
        />
      </g>
      <g className="firework-trail" style={{ "--i": 10 } as CSSProperties}>
        <mask
          id="fwm-trail-7"
          maskUnits="userSpaceOnUse"
          x="-60"
          y="-20"
          width="520"
          height="340"
        >
          <path
            className="firework-trail-reveal"
            d="M316.75 108.5C274.25 128.75 222.175 215.675 216.87 258.705"
            stroke="#fff"
            strokeWidth="10"
            pathLength={1}
          />
        </mask>
        <path
          d="M316.75 108.5C274.25 128.75 222.175 215.675 216.87 258.705"
          stroke="white"
          strokeWidth="1.5"
          strokeDasharray="0.05 3.5"
          strokeLinecap="round"
          mask="url(#fwm-trail-7)"
        />
      </g>
      <g className="firework-trail" style={{ "--i": 14 } as CSSProperties}>
        <mask
          id="fwm-trail-8"
          maskUnits="userSpaceOnUse"
          x="-60"
          y="-20"
          width="520"
          height="340"
        >
          <path
            className="firework-trail-reveal"
            d="M251.352 77.4502C226.3 116.943 219.521 150.836 216.869 194.75"
            stroke="#fff"
            strokeWidth="10"
            pathLength={1}
          />
        </mask>
        <path
          d="M251.352 77.4502C226.3 116.943 219.521 150.836 216.869 194.75"
          stroke="#E42EF5"
          strokeWidth="1.5"
          strokeDasharray="0.05 3.5"
          strokeLinecap="round"
          mask="url(#fwm-trail-8)"
        />
      </g>
      <g className="firework-trail" style={{ "--i": 0 } as CSSProperties}>
        <mask
          id="fwm-trail-9"
          maskUnits="userSpaceOnUse"
          x="-60"
          y="-20"
          width="520"
          height="340"
        >
          <path
            className="firework-trail-reveal"
            d="M390.5 115.75C357.25 128 332.75 142.5 306.75 170.75"
            stroke="#fff"
            strokeWidth="10"
            pathLength={1}
          />
        </mask>
        <path
          d="M390.5 115.75C357.25 128 332.75 142.5 306.75 170.75"
          stroke="#FFE7AC"
          strokeWidth="1.5"
          strokeDasharray="0.05 3.5"
          strokeLinecap="round"
          mask="url(#fwm-trail-9)"
        />
      </g>
      <g
        className="firework-burst"
        style={{ "--i": 0, "--t": 1 } as CSSProperties}
      >
        <g filter="url(#fwm-42)">
          <g id="fwm-12">
            <path
              d="M421.312 24.756L420.06 78.69"
              stroke="#FFF7B0"
              strokeWidth="2.5"
            />
          </g>
          <use
            href="#fwm-12"
            transform="translate(192.207 -268.894) rotate(45)"
          />
          <use
            href="#fwm-12"
            transform="translate(518.254 -323.12) rotate(90)"
          />
          <use
            href="#fwm-12"
            transform="translate(787.148 -130.914) rotate(135)"
          />
          <use
            href="#fwm-12"
            transform="translate(841.374 195.134) rotate(-180)"
          />
          <use
            href="#fwm-12"
            transform="translate(649.167 464.028) rotate(-135)"
          />
          <use
            href="#fwm-12"
            transform="translate(323.12 518.254) rotate(-90)"
          />
          <use
            href="#fwm-12"
            transform="translate(54.2261 326.047) rotate(-45)"
          />
        </g>
      </g>
      <g
        className="firework-burst"
        style={{ "--i": 7, "--t": 0 } as CSSProperties}
      >
        <g filter="url(#fwm-43)">
          <g id="fwm-14">
            <path
              d="M155.47 23.9713C155.158 23.9904 154.846 24.0096 154.534 24.0287C154.513 24.5329 154.494 25.0369 154.478 25.5408C154.333 30.0759 154.399 34.5981 154.675 39.1073C154.952 43.6166 155.438 48.1129 156.136 52.5964C156.213 53.0946 156.293 53.5926 156.376 54.0904C156.688 54.0713 157 54.0522 157.312 54.0331C157.333 53.5289 157.352 53.0248 157.368 52.5209C157.513 47.9858 157.447 43.4637 157.171 38.9544C156.894 34.4452 156.407 29.9488 155.71 25.4653C155.633 24.9672 155.553 24.4692 155.47 23.9713Z"
              fill="#F7EE6F"
            />
          </g>
          <use
            href="#fwm-14"
            transform="translate(96.6501 -89.1363) rotate(45)"
          />
          <use
            href="#fwm-14"
            transform="translate(228.021 -83.8232) rotate(90)"
          />
          <use
            href="#fwm-14"
            transform="translate(317.157 12.8268) rotate(135)"
          />
          <use
            href="#fwm-14"
            transform="translate(311.844 144.198) rotate(-180)"
          />
          <use
            href="#fwm-14"
            transform="translate(215.194 233.334) rotate(-135)"
          />
          <use
            href="#fwm-14"
            transform="translate(83.8232 228.021) rotate(-90)"
          />
          <use
            href="#fwm-14"
            transform="translate(-5.31306 131.371) rotate(-45)"
          />
        </g>
      </g>
      <g
        className="firework-burst"
        style={{ "--i": 14, "--t": 1 } as CSSProperties}
      >
        <g filter="url(#fwm-44)">
          <g id="fwm-17">
            <path
              d="M250.491 39.038C250.256 39.123 250.021 39.208 249.786 39.2931C249.896 39.7183 250.007 40.1429 250.12 40.5668C251.141 44.3816 252.321 48.139 253.659 51.839C254.997 55.539 256.494 59.1816 258.149 62.7668C258.333 63.1652 258.519 63.5628 258.707 63.9598C258.942 63.8747 259.177 63.7897 259.412 63.7047C259.303 63.2794 259.191 62.8548 259.078 62.431C258.057 58.6162 256.878 54.8588 255.54 51.1588C254.201 47.4588 252.705 43.8162 251.049 40.2309C250.865 39.8326 250.679 39.4349 250.491 39.038Z"
              fill="#FA5DBB"
            />
          </g>
          <use
            href="#fwm-17"
            transform="translate(126.027 -164.257) rotate(45)"
          />
          <use
            href="#fwm-17"
            transform="translate(331.288 -191.29) rotate(90)"
          />
          <use
            href="#fwm-17"
            transform="translate(495.546 -65.2636) rotate(135)"
          />
          <use
            href="#fwm-17"
            transform="translate(522.579 139.998) rotate(-180)"
          />
          <use
            href="#fwm-17"
            transform="translate(396.552 304.255) rotate(-135)"
          />
          <use
            href="#fwm-17"
            transform="translate(191.29 331.288) rotate(-90)"
          />
          <use
            href="#fwm-17"
            transform="translate(27.033 205.262) rotate(-45)"
          />
        </g>
      </g>
      <g
        className="firework-burst"
        style={{ "--i": 6, "--t": 1 } as CSSProperties}
      >
        <g filter="url(#fwm-45)">
          <g id="fwm-20">
            <path
              d="M225.569 134.481C225.393 134.544 225.217 134.608 225.04 134.672C225.159 135.094 225.28 135.515 225.402 135.935C226.503 139.722 227.722 143.465 229.06 147.165C230.398 150.865 231.855 154.522 233.431 158.135C233.607 158.537 233.783 158.938 233.961 159.339C234.138 159.275 234.314 159.211 234.49 159.147C234.371 158.725 234.25 158.304 234.128 157.884C233.028 154.098 231.809 150.354 230.47 146.654C229.132 142.954 227.675 139.297 226.099 135.684C225.924 135.282 225.747 134.881 225.569 134.481Z"
              fill="#FF5E19"
            />
          </g>
          <use
            href="#fwm-20"
            transform="translate(186.218 -118.752) rotate(45)"
          />
          <use
            href="#fwm-20"
            transform="translate(401.865 -71.0457) rotate(90)"
          />
          <use
            href="#fwm-20"
            transform="translate(520.617 115.173) rotate(135)"
          />
          <use
            href="#fwm-20"
            transform="translate(472.911 330.819) rotate(-180)"
          />
          <use
            href="#fwm-20"
            transform="translate(286.692 449.571) rotate(-135)"
          />
          <use
            href="#fwm-20"
            transform="translate(71.0457 401.865) rotate(-90)"
          />
          <use
            href="#fwm-20"
            transform="translate(-47.7061 215.646) rotate(-45)"
          />
        </g>
      </g>
      <g
        className="firework-burst"
        style={{ "--i": 14, "--t": 1 } as CSSProperties}
      >
        <g filter="url(#fwm-46)">
          <g id="fwm-23">
            <path
              d="M258.574 1.98612C258.262 2.00221 257.949 2.0183 257.637 2.03439C257.626 2.823 257.617 3.61148 257.611 4.39982C257.554 11.4949 257.708 18.5791 258.073 25.6525C258.438 32.7258 259.013 39.7883 259.799 46.8399C259.886 47.6234 259.976 48.4068 260.069 49.1901C260.381 49.174 260.693 49.1579 261.005 49.1418C261.017 48.3532 261.025 47.5647 261.032 46.7763C261.088 39.6813 260.934 32.5971 260.57 25.5237C260.205 18.4504 259.629 11.3879 258.843 4.33626C258.756 3.55274 258.666 2.76936 258.574 1.98612Z"
              fill="#FC3B7B"
            />
          </g>
          <use
            href="#fwm-23"
            transform="translate(125.724 -162.753) rotate(45)"
          />
          <use
            href="#fwm-23"
            transform="translate(329.708 -188.936) rotate(90)"
          />
          <use
            href="#fwm-23"
            transform="translate(492.461 -63.2119) rotate(135)"
          />
          <use
            href="#fwm-23"
            transform="translate(518.644 140.772) rotate(-180)"
          />
          <use
            href="#fwm-23"
            transform="translate(392.92 303.525) rotate(-135)"
          />
          <use
            href="#fwm-23"
            transform="translate(188.936 329.708) rotate(-90)"
          />
          <use
            href="#fwm-23"
            transform="translate(26.1832 203.984) rotate(-45)"
          />
        </g>
      </g>
      <g
        className="firework-burst"
        style={{ "--i": 13, "--t": 1 } as CSSProperties}
      >
        <g filter="url(#fwm-47)">
          <circle
            cx="76.5809"
            cy="136.983"
            r="28.1512"
            stroke="#FFFB00"
            strokeWidth="5"
            strokeDasharray="1.5 10"
          />
        </g>
      </g>
      <g
        className="firework-burst"
        style={{ "--i": 5, "--t": 0 } as CSSProperties}
      >
        <g filter="url(#fwm-48)">
          <circle
            cx="198.151"
            cy="45.1512"
            r="28.1512"
            stroke="#FF8800"
            strokeWidth="5"
            strokeDasharray="1.5 10"
          />
        </g>
      </g>
      <g
        className="firework-burst"
        style={{ "--i": 12, "--t": 1 } as CSSProperties}
      >
        <g filter="url(#fwm-49)">
          <circle
            cx="43.659"
            cy="57.16"
            r="21.9012"
            stroke="#00FF1A"
            strokeWidth="17.5"
            strokeDasharray="1.5 11.5"
          />
        </g>
      </g>
      <g
        className="firework-burst"
        style={{ "--i": 12, "--t": 1 } as CSSProperties}
      >
        <g filter="url(#fwm-50)">
          <circle
            cx="43.3648"
            cy="56.8647"
            r="34.3609"
            transform="rotate(-14.0995 43.3648 56.8647)"
            stroke="#FF8800"
            strokeWidth="25"
            strokeDasharray="1.5 20"
          />
        </g>
      </g>
      <g
        className="firework-burst"
        style={{ "--i": 4, "--t": 1 } as CSSProperties}
      >
        <g filter="url(#fwm-51)">
          <circle
            cx="143.778"
            cy="183.551"
            r="16.3623"
            stroke="#0073FF"
            strokeWidth="5"
            strokeDasharray="1.5 9"
          />
        </g>
      </g>
      <g
        className="firework-burst"
        style={{ "--i": 11, "--t": 0 } as CSSProperties}
      >
        <g filter="url(#fwm-52)">
          <circle
            cx="3.86226"
            cy="115.862"
            r="13.8623"
            stroke="#00EEFF"
            strokeWidth="10"
            strokeDasharray="1 9"
          />
        </g>
      </g>
      <g
        className="firework-burst"
        style={{ "--i": 3, "--t": 1 } as CSSProperties}
      >
        <g filter="url(#fwm-53)">
          <circle
            cx="43.8679"
            cy="170.288"
            r="17.5514"
            stroke="#0073FF"
            strokeWidth="15"
            strokeDasharray="1 7.5"
          />
        </g>
      </g>
      <g
        className="firework-burst"
        style={{ "--i": 10, "--t": 1 } as CSSProperties}
      >
        <g filter="url(#fwm-54)">
          <circle
            cx="337.382"
            cy="92.4526"
            r="16.3726"
            transform="rotate(-21.3159 337.382 92.4526)"
            stroke="#0073FF"
            strokeWidth="15"
            strokeDasharray="1.5 12.5"
          />
        </g>
      </g>
      <g
        className="firework-burst"
        style={{ "--i": 2, "--t": 0 } as CSSProperties}
      >
        <g filter="url(#fwm-55)">
          <circle
            cx="135.527"
            cy="158.793"
            r="52.4607"
            stroke="#FDFDF2"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeDasharray="0 6"
          />
        </g>
      </g>
      <g
        className="firework-burst"
        style={{ "--i": 10, "--t": 1 } as CSSProperties}
      >
        <g filter="url(#fwm-56)">
          <circle
            cx="336.5"
            cy="93"
            r="41.5"
            stroke="#FDFDF2"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeDasharray="0 6"
          />
        </g>
      </g>
      <g
        className="firework-burst"
        style={{ "--i": 9, "--t": 0 } as CSSProperties}
      >
        <g filter="url(#fwm-57)">
          <circle
            cx="186.807"
            cy="127.552"
            r="43.0295"
            stroke="#4226F7"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeDasharray="0 7.5"
          />
        </g>
      </g>
      <g
        className="firework-burst"
        style={{ "--i": 1, "--t": 1 } as CSSProperties}
      >
        <g filter="url(#fwm-58)">
          <ellipse
            cx="307.349"
            cy="164.098"
            rx="29.1776"
            ry="29.4723"
            stroke="#5EF726"
            strokeWidth="3"
            strokeLinecap="round"
            strokeDasharray="0 7.5"
          />
        </g>
      </g>
      <g
        className="firework-burst"
        style={{ "--i": 0, "--t": 1 } as CSSProperties}
      >
        <g filter="url(#fwm-59)">
          <circle
            cx="420.25"
            cy="97.2499"
            r="27.25"
            transform="rotate(22.5837 420.25 97.2499)"
            stroke="#F72629"
            strokeWidth="3"
            strokeLinecap="round"
            strokeDasharray="0 20"
          />
        </g>
      </g>
      <g
        className="firework-burst"
        style={{ "--i": 3, "--t": 1 } as CSSProperties}
      >
        <g filter="url(#fwm-60)">
          <ellipse
            cx="43.8663"
            cy="170.583"
            rx="21.5148"
            ry="21.8095"
            stroke="#B826F7"
            strokeWidth="3"
            strokeLinecap="round"
            strokeDasharray="0 7.5"
          />
        </g>
      </g>
      <g
        className="firework-burst"
        style={{ "--i": 10, "--t": 1 } as CSSProperties}
      >
        <g filter="url(#fwm-61)">
          <circle
            cx="337.677"
            cy="92.1588"
            r="10.0206"
            stroke="#00D5FF"
            strokeWidth="2"
            strokeLinecap="round"
            strokeDasharray="0 7.5"
          />
        </g>
      </g>
      <g
        className="firework-burst"
        style={{ "--i": 6, "--t": 1 } as CSSProperties}
      >
        <g filter="url(#fwm-62)">
          <circle
            cx="238.091"
            cy="165.867"
            r="15.3256"
            stroke="#FF0004"
            strokeWidth="2"
            strokeLinecap="round"
            strokeDasharray="0 10"
          />
        </g>
      </g>
      <g
        className="firework-burst"
        style={{ "--i": 8, "--t": 0 } as CSSProperties}
      >
        <g filter="url(#fwm-63)">
          <circle
            cx="2.46067"
            cy="92.9607"
            r="52.4607"
            stroke="#F201EE"
            strokeWidth="2"
            strokeLinecap="round"
            strokeDasharray="0 6"
          />
        </g>
      </g>
    </g>
    <defs>
      <filter
        id="fwm-42"
        x="347.223"
        y="24.0951"
        width="146.929"
        height="146.936"
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
          baseFrequency="0.019999999552965164 0.019999999552965164"
          numOctaves="3"
          seed="2177"
        />
        <feDisplacementMap
          in="shape"
          scale="1.2999999523162842"
          xChannelSelector="R"
          yChannelSelector="G"
          result="displacedImage"
          width="100%"
          height="100%"
        />
        <feMerge result="effect1_texture_15868_12425">
          <feMergeNode in="displacedImage" />
        </feMerge>
      </filter>
      <filter
        id="fwm-43"
        x="107.164"
        y="23.3212"
        width="97.5148"
        height="97.5349"
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
          baseFrequency="0.019999999552965164 0.019999999552965164"
          numOctaves="3"
          seed="2177"
        />
        <feDisplacementMap
          in="shape"
          scale="1.2999999523162842"
          xChannelSelector="R"
          yChannelSelector="G"
          result="displacedImage"
          width="100%"
          height="100%"
        />
        <feMerge result="effect1_texture_15868_12425">
          <feMergeNode in="displacedImage" />
        </feMerge>
      </filter>
      <filter
        id="fwm-44"
        x="218.655"
        y="27.3642"
        width="85.2687"
        height="85.2692"
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
          baseFrequency="0.019999999552965164 0.019999999552965164"
          numOctaves="3"
          seed="2177"
        />
        <feDisplacementMap
          in="shape"
          scale="1.2999999523162842"
          xChannelSelector="R"
          yChannelSelector="G"
          result="displacedImage"
          width="100%"
          height="100%"
        />
        <feMerge result="effect1_texture_15868_12425">
          <feMergeNode in="displacedImage" />
        </feMerge>
      </filter>
      <filter
        id="fwm-45"
        x="193.821"
        y="122.775"
        width="85.2687"
        height="85.2697"
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
          baseFrequency="0.019999999552965164 0.019999999552965164"
          numOctaves="3"
          seed="2177"
        />
        <feDisplacementMap
          in="shape"
          scale="1.2999999523162842"
          xChannelSelector="R"
          yChannelSelector="G"
          result="displacedImage"
          width="100%"
          height="100%"
        />
        <feMerge result="effect1_texture_15868_12425">
          <feMergeNode in="displacedImage" />
        </feMerge>
      </filter>
      <filter
        id="fwm-46"
        x="190.286"
        y="1.33633"
        width="138.073"
        height="138.086"
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
          baseFrequency="0.019999999552965164 0.019999999552965164"
          numOctaves="3"
          seed="2177"
        />
        <feDisplacementMap
          in="shape"
          scale="1.2999999523162842"
          xChannelSelector="R"
          yChannelSelector="G"
          result="displacedImage"
          width="100%"
          height="100%"
        />
        <feMerge result="effect1_texture_15868_12425">
          <feMergeNode in="displacedImage" />
        </feMerge>
      </filter>
      <filter
        id="fwm-47"
        x="45.8747"
        y="106.277"
        width="61.4127"
        height="61.4127"
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
          baseFrequency="0.02460629865527153 0.02460629865527153"
          numOctaves="3"
          seed="2139"
        />
        <feDisplacementMap
          in="shape"
          scale="0.10999999940395355"
          xChannelSelector="R"
          yChannelSelector="G"
          result="displacedImage"
          width="100%"
          height="100%"
        />
        <feMerge result="effect1_texture_15868_12425">
          <feMergeNode in="displacedImage" />
        </feMerge>
      </filter>
      <filter
        id="fwm-48"
        x="167.445"
        y="14.445"
        width="61.4127"
        height="61.4122"
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
          baseFrequency="0.02460629865527153 0.02460629865527153"
          numOctaves="3"
          seed="2139"
        />
        <feDisplacementMap
          in="shape"
          scale="0.10999999940395355"
          xChannelSelector="R"
          yChannelSelector="G"
          result="displacedImage"
          width="100%"
          height="100%"
        />
        <feMerge result="effect1_texture_15868_12425">
          <feMergeNode in="displacedImage" />
        </feMerge>
      </filter>
      <filter
        id="fwm-49"
        x="12.9528"
        y="26.4538"
        width="61.4127"
        height="61.4127"
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
          baseFrequency="0.02460629865527153 0.02460629865527153"
          numOctaves="3"
          seed="2139"
        />
        <feDisplacementMap
          in="shape"
          scale="0.10999999940395355"
          xChannelSelector="R"
          yChannelSelector="G"
          result="displacedImage"
          width="100%"
          height="100%"
        />
        <feMerge result="effect1_texture_15868_12425">
          <feMergeNode in="displacedImage" />
        </feMerge>
      </filter>
      <filter
        id="fwm-50"
        x="-3.56281"
        y="9.93768"
        width="93.8541"
        height="93.8537"
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
          baseFrequency="0.02460629865527153 0.02460629865527153"
          numOctaves="3"
          seed="2139"
        />
        <feDisplacementMap
          in="shape"
          scale="0.10999999940395355"
          xChannelSelector="R"
          yChannelSelector="G"
          result="displacedImage"
          width="100%"
          height="100%"
        />
        <feMerge result="effect1_texture_15868_12425">
          <feMergeNode in="displacedImage" />
        </feMerge>
      </filter>
      <filter
        id="fwm-51"
        x="124.861"
        y="164.633"
        width="37.8346"
        height="37.8346"
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
          baseFrequency="0.02460629865527153 0.02460629865527153"
          numOctaves="3"
          seed="2139"
        />
        <feDisplacementMap
          in="shape"
          scale="0.10999999940395355"
          xChannelSelector="R"
          yChannelSelector="G"
          result="displacedImage"
          width="100%"
          height="100%"
        />
        <feMerge result="effect1_texture_15868_12425">
          <feMergeNode in="displacedImage" />
        </feMerge>
      </filter>
      <filter
        id="fwm-52"
        x="-15.055"
        y="96.945"
        width="37.8346"
        height="37.8346"
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
          baseFrequency="0.02460629865527153 0.02460629865527153"
          numOctaves="3"
          seed="2139"
        />
        <feDisplacementMap
          in="shape"
          scale="0.10999999940395355"
          xChannelSelector="R"
          yChannelSelector="G"
          result="displacedImage"
          width="100%"
          height="100%"
        />
        <feMerge result="effect1_texture_15868_12425">
          <feMergeNode in="displacedImage" />
        </feMerge>
      </filter>
      <filter
        id="fwm-53"
        x="18.7614"
        y="145.181"
        width="50.2135"
        height="50.2125"
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
          baseFrequency="0.02460629865527153 0.02460629865527153"
          numOctaves="3"
          seed="2139"
        />
        <feDisplacementMap
          in="shape"
          scale="0.10999999940395355"
          xChannelSelector="R"
          yChannelSelector="G"
          result="displacedImage"
          width="100%"
          height="100%"
        />
        <feMerge result="effect1_texture_15868_12425">
          <feMergeNode in="displacedImage" />
        </feMerge>
      </filter>
      <filter
        id="fwm-54"
        x="313.004"
        y="68.0737"
        width="48.7578"
        height="48.7583"
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
          baseFrequency="0.066666670143604279 0.066666670143604279"
          numOctaves="3"
          seed="2139"
        />
        <feDisplacementMap
          in="shape"
          scale="1"
          xChannelSelector="R"
          yChannelSelector="G"
          result="displacedImage"
          width="100%"
          height="100%"
        />
        <feMerge result="effect1_texture_15868_12425">
          <feMergeNode in="displacedImage" />
        </feMerge>
      </filter>
      <filter
        id="fwm-55"
        x="82.2614"
        y="105.527"
        width="106.532"
        height="106.531"
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
          baseFrequency="0.02460629865527153 0.02460629865527153"
          numOctaves="3"
          seed="2139"
        />
        <feDisplacementMap
          in="shape"
          scale="0.10999999940395355"
          xChannelSelector="R"
          yChannelSelector="G"
          result="displacedImage"
          width="100%"
          height="100%"
        />
        <feMerge result="effect1_texture_15868_12425">
          <feMergeNode in="displacedImage" />
        </feMerge>
      </filter>
      <filter
        id="fwm-56"
        x="294.195"
        y="50.695"
        width="84.61"
        height="84.61"
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
          baseFrequency="0.02460629865527153 0.02460629865527153"
          numOctaves="3"
          seed="2139"
        />
        <feDisplacementMap
          in="shape"
          scale="0.10999999940395355"
          xChannelSelector="R"
          yChannelSelector="G"
          result="displacedImage"
          width="100%"
          height="100%"
        />
        <feMerge result="effect1_texture_15868_12425">
          <feMergeNode in="displacedImage" />
        </feMerge>
      </filter>
      <filter
        id="fwm-57"
        x="142.472"
        y="83.2179"
        width="88.6686"
        height="88.6691"
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
          baseFrequency="0.02460629865527153 0.02460629865527153"
          numOctaves="3"
          seed="2139"
        />
        <feDisplacementMap
          in="shape"
          scale="0.10999999940395355"
          xChannelSelector="R"
          yChannelSelector="G"
          result="displacedImage"
          width="100%"
          height="100%"
        />
        <feMerge result="effect1_texture_15868_12425">
          <feMergeNode in="displacedImage" />
        </feMerge>
      </filter>
      <filter
        id="fwm-58"
        x="276.617"
        y="133.071"
        width="61.4655"
        height="62.0543"
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
          baseFrequency="0.02460629865527153 0.02460629865527153"
          numOctaves="3"
          seed="2139"
        />
        <feDisplacementMap
          in="shape"
          scale="0.10999999940395355"
          xChannelSelector="R"
          yChannelSelector="G"
          result="displacedImage"
          width="100%"
          height="100%"
        />
        <feMerge result="effect1_texture_15868_12425">
          <feMergeNode in="displacedImage" />
        </feMerge>
      </filter>
      <filter
        id="fwm-59"
        x="393.504"
        y="70.5026"
        width="53.4948"
        height="53.4948"
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
          baseFrequency="0.02460629865527153 0.02460629865527153"
          numOctaves="3"
          seed="2139"
        />
        <feDisplacementMap
          in="shape"
          scale="0.10999999940395355"
          xChannelSelector="R"
          yChannelSelector="G"
          result="displacedImage"
          width="100%"
          height="100%"
        />
        <feMerge result="effect1_texture_15868_12425">
          <feMergeNode in="displacedImage" />
        </feMerge>
      </filter>
      <filter
        id="fwm-60"
        x="20.7966"
        y="147.218"
        width="46.1393"
        height="46.7291"
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
          baseFrequency="0.02460629865527153 0.02460629865527153"
          numOctaves="3"
          seed="2139"
        />
        <feDisplacementMap
          in="shape"
          scale="0.10999999940395355"
          xChannelSelector="R"
          yChannelSelector="G"
          result="displacedImage"
          width="100%"
          height="100%"
        />
        <feMerge result="effect1_texture_15868_12425">
          <feMergeNode in="displacedImage" />
        </feMerge>
      </filter>
      <filter
        id="fwm-61"
        x="326.601"
        y="81.0832"
        width="22.151"
        height="22.1515"
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
          baseFrequency="0.02460629865527153 0.02460629865527153"
          numOctaves="3"
          seed="2139"
        />
        <feDisplacementMap
          in="shape"
          scale="0.10999999940395355"
          xChannelSelector="R"
          yChannelSelector="G"
          result="displacedImage"
          width="100%"
          height="100%"
        />
        <feMerge result="effect1_texture_15868_12425">
          <feMergeNode in="displacedImage" />
        </feMerge>
      </filter>
      <filter
        id="fwm-62"
        x="221.711"
        y="149.486"
        width="32.7604"
        height="32.7614"
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
          baseFrequency="0.02460629865527153 0.02460629865527153"
          numOctaves="3"
          seed="2139"
        />
        <feDisplacementMap
          in="shape"
          scale="0.10999999940395355"
          xChannelSelector="R"
          yChannelSelector="G"
          result="displacedImage"
          width="100%"
          height="100%"
        />
        <feMerge result="effect1_texture_15868_12425">
          <feMergeNode in="displacedImage" />
        </feMerge>
      </filter>
      <filter
        id="fwm-63"
        x="-51.055"
        y="39.445"
        width="107.032"
        height="107.031"
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
          baseFrequency="0.02460629865527153 0.02460629865527153"
          numOctaves="3"
          seed="2139"
        />
        <feDisplacementMap
          in="shape"
          scale="0.10999999940395355"
          xChannelSelector="R"
          yChannelSelector="G"
          result="displacedImage"
          width="100%"
          height="100%"
        />
        <feMerge result="effect1_texture_15868_12425">
          <feMergeNode in="displacedImage" />
        </feMerge>
      </filter>
    </defs>
  </svg>
);
