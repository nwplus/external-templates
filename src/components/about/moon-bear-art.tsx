import type { CSSProperties, KeyboardEvent, MouseEvent, Ref } from "react";

/**
 * The crescent and the bear from the "moon bear" illustration, lifted out of
 * the flattened raster so they can move. Everything soft (the moon's glow,
 * the blurred cloud shadows, the loose sparkles) stays in the WebP behind
 * this; these are the crisp paths only, so nothing here needs a filter.
 *
 * In the original art the crescent sits behind the front cloud while the
 * bear sits on top of it. Drawn over the raster, the moon would cover that
 * cloud, so the cloud (with its moonlight) is drawn again here, masked to the
 * crescent, between the two. The mask is the crescent grown by a stroke: the
 * moon's antialiased edge under the cloud is then fully covered, where a
 * mask cut exactly on the edge would leave a faint yellow line along it.
 */

/** The art's design size; the desktop raster is drawn at this viewBox. */
export const MOON_BEAR_VIEWBOX = "0 0 1531 768";

/* --- The fishing rod, in art units ------------------------------------- */

/** Where the bear's paw (viewer's left) holds the rod. */
const PAW = { x: 1112, y: 405 };
const ROD_LENGTH = 260;
/** The rod is drawn pointing up and out in front of the bear (viewer's
 * left), this far off vertical. */
const ROD_ANGLE = -48;
/** The swing: hidden behind the head at rest, cast out over the clouds in
 * front of the bear. Positive turns clockwise, so the cast goes the other way. */
export const ROD_REST_DEG = 70;
export const ROD_CAST_DEG = -15;
/** How far the line drops from the tip. */
export const LINE_LENGTH = 150;
const STAR_SCALE = 0.8;

const rad = (deg: number) => (deg * Math.PI) / 180;
/** A point `along` the rod from the paw, shifted `across` it. */
const onRod = (along: number, across = 0) => ({
  x:
    PAW.x +
    along * Math.sin(rad(ROD_ANGLE)) +
    across * Math.cos(rad(ROD_ANGLE)),
  y:
    PAW.y -
    along * Math.cos(rad(ROD_ANGLE)) +
    across * Math.sin(rad(ROD_ANGLE)),
});
const pt = (p: { x: number; y: number }) =>
  `${p.x.toFixed(1)},${p.y.toFixed(1)}`;

// A thin tapered shaft that starts a little behind the paw.
const shaft = [
  onRod(-14, -3),
  onRod(ROD_LENGTH, -1),
  onRod(ROD_LENGTH, 1),
  onRod(-14, 3),
];
const grip = [onRod(-14, -3.4), onRod(24, -3), onRod(24, 3), onRod(-14, 3.4)];
const reel = onRod(30, -10);
const REEL_R = 7;

// The rod turns about the paw. `transform-box: fill-box` measures the origin
// from the group's own bounding box, so work out where the paw falls in it.
const rodPoints = [...shaft, ...grip];
const rodBox = {
  x: Math.min(...rodPoints.map((p) => p.x), reel.x - REEL_R),
  y: Math.min(...rodPoints.map((p) => p.y), reel.y - REEL_R),
};
export const ROD_ORIGIN = `${(PAW.x - rodBox.x).toFixed(2)}px ${(PAW.y - rodBox.y).toFixed(2)}px`;

/** Where the tip ends up once the rod has swung out and settled. */
const cast = rad(ROD_ANGLE + ROD_CAST_DEG);
const TIP = {
  x: PAW.x + ROD_LENGTH * Math.sin(cast),
  y: PAW.y - ROD_LENGTH * Math.cos(cast),
};

// The star is one of the loose sparkles, drawn where it sits in the art and
// moved under the line's end. It hangs from the notch between its two top
// points (measured off the path: the fill's top edge right under the line),
// sunk a touch into the line so the two read as tied. Its group is scaled,
// so anything that rides with the line has to travel the distance in that
// group's units.
const STAR_KNOT = { x: 1029.6, y: 228.4 };
const KNOT_OVERLAP = 1.2;
const STAR_TRANSFORM = `translate(${(TIP.x - STAR_KNOT.x * STAR_SCALE).toFixed(2)} ${(TIP.y + LINE_LENGTH - KNOT_OVERLAP - STAR_KNOT.y * STAR_SCALE).toFixed(2)}) scale(${STAR_SCALE})`;
export const STAR_RIDE = LINE_LENGTH / STAR_SCALE;

/* ----------------------------------------------------------------------- */

const MOON =
  "M1276.6 279.737C1274.14 316.65 1244.66 385.199 1200.93 418.377C1145.01 467.593 1029.82 473.354 1017.16 473.354C967.08 473.355 1047.37 508.525 1066.09 516.802C1178.88 566.66 1329.35 536.955 1384.83 411.45C1418.99 334.158 1414.31 259.563 1390.45 192.877C1370.95 155.877 1346.79 132.327 1306.57 110.631C1269.66 90.7242 1206.76 86.9476 1200.93 91.3769C1202.43 91.3783 1294.08 169.201 1276.6 279.737Z";

const FRONT_CLOUD =
  "M1374.5 349.108C1380.43 315.725 1447.5 302.108 1447.5 302.108C1447.5 302.108 1428 241.108 1496.5 228.108C1565 215.108 1593.5 272.108 1593.5 272.108L1574.5 356.108C1574.5 356.108 1633.65 641.299 1515 656.608C1469.72 662.45 1357.5 628.608 1357.5 628.608C1357.5 628.608 1306.91 677.018 1258.5 676.608C1212.6 676.219 1161.5 647.608 1161.5 647.608C1161.5 647.608 1103.41 686.475 1057.5 683.108C1022.09 680.51 996 647.608 996 647.608C996 647.608 944.5 703.608 898.5 683.108C852.5 662.608 880 628.608 880 628.608C880 628.608 823 625.608 822 581.608C821 537.608 886 560.108 886 560.108C886 560.108 865.5 532.108 921.5 507.608C977.5 483.108 1009.5 534.608 1009.5 534.608C1009.5 534.608 997 505.608 1070.5 499.608C1144 493.608 1177 549.108 1177 549.108C1177 549.108 1189 516.108 1252.5 493.608C1316 471.108 1336 499.608 1336 499.608C1336 499.608 1320.71 453.581 1336 432.108C1353.25 407.881 1410 414.108 1410 414.108C1410 414.108 1369.44 377.585 1374.5 349.108Z";

const PYJAMA_BODY =
  "M1173.67 358.14C1189.52 358.473 1214.95 348.479 1214.95 348.479C1214.95 348.479 1245.33 376.125 1237.4 433.081C1235.64 441.595 1231.46 463.724 1229.48 471.717C1229.48 471.717 1190.51 452.731 1168.72 449.067C1146.93 445.403 1111.6 449.067 1111.6 449.067C1111.6 438.076 1119.85 424.42 1122.17 417.758C1122.17 363.801 1146.93 344.816 1146.93 344.816C1146.93 344.816 1157.83 357.807 1173.67 358.14Z";

const NIGHTCAP =
  "M1218.01 247.658V234.951L1223.41 210.839L1258.85 226.805C1258.85 226.805 1246.36 195.525 1234.89 190.637C1223.41 185.75 1162.99 189.334 1158.27 196.177C1153.54 203.019 1143.42 241.142 1143.42 241.142C1143.42 241.142 1155.57 243.423 1170.42 247.658C1185.27 251.894 1218.01 247.658 1218.01 247.658Z";

const STAR =
  "M1043.69 223.604L1030.59 228.222C1029.62 228.565 1028.54 228.343 1027.78 227.645L1016.39 217.156C1014.61 215.522 1011.74 216.766 1011.72 219.179L1011.56 237.873C1011.55 238.851 1011.03 239.752 1010.19 240.247L1000.94 245.687C998.647 247.039 999.383 250.536 1002.03 250.849L1017.23 252.641C1018.21 252.757 1019.06 253.384 1019.45 254.289L1025.68 268.515C1026.79 271.051 1030.52 270.587 1030.97 267.857L1032.68 257.593C1032.88 256.385 1033.85 255.45 1035.07 255.291L1053.98 252.822C1056.48 252.497 1057.29 249.296 1055.26 247.815L1044.36 239.863C1043.32 239.11 1042.94 237.75 1043.42 236.567L1047.2 227.276C1048.1 225.054 1045.96 222.806 1043.69 223.604Z";

const PYJAMA_STRIPES = [
  "M1152.13 349.703L1149.82 347.704C1145.75 354.81 1133.64 369.353 1131.66 388.338C1131.31 391.736 1130.34 411.321 1130.34 421.646L1116.8 448.292L1120.11 448.292L1132.98 421.646C1132.98 418.871 1132.72 407.79 1134.3 389.671C1135.89 371.552 1147.73 355.365 1152.13 349.703Z",
  "M1157.75 353.367L1155.43 351.702C1151.36 358.808 1142.56 371.352 1140.58 390.337C1140.22 393.735 1138.15 418.205 1138.92 423.312L1127.04 449.957L1129.68 449.958L1141.24 423.312C1141.24 420.537 1141.63 408.456 1143.22 390.337C1144.8 372.218 1153.34 359.029 1157.75 353.367Z",
  "M1163.69 356.031L1161.38 355.365C1157.31 362.471 1152.46 370.685 1150.48 389.67C1150.13 393.068 1148.06 417.538 1148.83 422.645L1136.94 449.29L1139.59 449.291L1151.14 422.645C1151.14 419.87 1151.54 407.789 1153.12 389.67C1154.71 371.551 1159.29 361.694 1163.69 356.031Z",
  "M1169.3 357.365L1166.99 357.033C1162.92 364.139 1160.39 372.018 1158.41 391.004C1158.05 394.401 1155.99 418.871 1156.76 423.978L1144.87 450.623L1147.51 450.624L1159.07 423.978C1159.07 421.203 1159.46 409.123 1161.05 391.004C1162.63 372.884 1164.9 363.027 1169.3 357.365Z",
  "M1174.59 358.031L1172.28 358.03C1168.2 365.136 1168.31 372.018 1166.33 391.003C1165.98 394.401 1163.91 418.871 1164.68 423.978L1152.79 450.623L1155.43 450.624L1166.99 423.978C1166.99 421.202 1167.39 409.122 1168.97 391.003C1170.56 372.884 1170.18 363.693 1174.59 358.031Z",
  "M1181.52 357.697L1178.55 357.697C1174.48 364.803 1176.24 372.017 1174.26 391.002C1173.9 394.4 1171.83 418.87 1172.6 423.977L1160.72 450.622L1163.36 450.623L1174.91 423.977C1174.91 421.201 1175.31 409.121 1176.9 391.002C1178.48 372.883 1177.12 363.359 1181.52 357.697Z",
  "M1187.13 356.365L1184.16 357.031C1181.52 364.692 1184.82 372.017 1182.84 391.002C1182.49 394.4 1180.42 418.87 1181.19 423.977L1169.3 450.622L1171.94 450.623L1183.5 423.977C1183.5 421.202 1183.9 409.121 1185.48 391.002C1187.07 372.883 1185.48 365.358 1187.13 356.365Z",
  "M1191.43 355.7L1189.45 356.032C1188.46 365.025 1191.43 370.686 1189.45 389.671C1189.09 393.069 1187.35 420.076 1188.12 425.183L1178.08 451.342L1180.21 452.057L1191.43 425.183C1191.43 422.408 1189.84 407.79 1191.43 389.671C1193.01 371.552 1190.11 364.692 1191.43 355.7Z",
  "M1223.79 410.653C1225.37 387.471 1215.86 360.359 1210.91 349.701L1208.27 350.701C1215.86 363.69 1221.8 388.73 1221.8 407.656C1221.8 418.647 1215.64 454.841 1212.89 464.611L1215.53 465.277C1217.62 456.728 1222.2 433.835 1223.79 410.653Z",
  "M1216.02 408.655C1217.6 385.473 1209.92 362.36 1204.96 351.702L1202.65 352.369C1210.25 365.358 1214.03 386.732 1214.03 405.658C1214.03 416.649 1207.87 452.843 1205.12 462.613L1207.76 463.279C1209.85 454.73 1214.43 431.837 1216.02 408.655Z",
  "M1208.09 407.989C1209.68 384.807 1204.31 364.025 1199.35 353.367L1196.38 354.366C1203.98 367.356 1206.11 386.066 1206.11 404.992C1206.11 415.983 1199.95 452.177 1197.2 461.947L1199.84 462.612C1201.93 454.063 1206.51 431.17 1208.09 407.989Z",
  "M1199.02 407.351C1200.6 384.17 1199.35 365.692 1194.4 355.033L1192.42 355.699C1198.84 370.5 1196.36 388.425 1196.36 407.351C1196.36 418.343 1194.4 440.638 1188.7 454.606L1191.9 455.988C1193.99 447.44 1197.43 430.533 1199.02 407.351Z",
  "M1231.86 414.65C1233.45 391.469 1223.94 364.357 1218.98 353.698L1216.34 354.698C1223.94 367.688 1229.88 392.728 1229.88 411.653C1229.88 422.645 1223.72 458.839 1220.97 468.609L1223.61 469.274C1225.7 460.725 1230.28 437.832 1231.86 414.65Z",
];

const CAP_STRIPES = [
  "M1203.22 228.847V248.462L1200.28 249.651V228.847L1214.57 203.337L1231.58 202.265L1246.45 212.271L1257.73 224.092L1231.93 204.766L1219.18 203.337L1203.22 228.847Z",
  "M1194.68 248.76V229.145L1208.9 206.196L1223.78 200.318L1244.33 206.196L1255.31 219.061L1244.33 203.338L1223.78 200.318L1202.17 207.268L1191.73 229.145V249.949L1194.68 248.76Z",
  "M1151.07 242.815L1147.24 241.626L1152.84 220.823L1161.78 198.691L1180.21 188.428L1215.28 180.109V182.967L1189.06 188.428L1164.26 200.121L1156.08 220.823L1151.07 242.815Z",
  "M1159.03 244.598L1155.2 243.409L1160.8 222.605L1169.93 201.207L1195.08 190.211L1218.82 188.011L1195.08 192.973L1173.46 202.396L1164.04 222.605L1159.03 244.598Z",
  "M1166.69 245.787L1162.86 244.598L1168.46 223.794L1177.59 202.396L1200.75 195.118L1232.28 188.328L1225.91 190.829L1203.23 196.19L1181.13 203.585L1171.7 223.794L1166.69 245.787Z",
  "M1174.35 248.166L1170.52 246.977L1176.12 226.173L1185.25 204.775L1209.41 197.643L1230.16 192.617H1242.2H1243.26L1225.55 195.265L1211.77 199.426L1188.78 205.964L1179.36 226.173L1174.35 248.166Z",
  "M1182.6 249.354L1178.77 248.165L1184.37 227.361L1193.5 205.963L1217.66 198.83L1250.95 194.967L1243.59 196.453L1220.02 200.614L1197.04 207.152L1187.61 227.361L1182.6 249.354Z",
  "M1208.82 248.165H1211.47V229.441L1221.49 206.854L1228.03 209.769L1258.32 226.469L1248.58 219.775L1225.91 205.071H1220.31L1208.82 229.441V248.165Z",
];

const BUTTON =
  "pointer-events-auto cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-star";

type MoonBearArtProps = {
  ref?: Ref<SVGSVGElement>;
  /** Namespaces the gradient and mask ids; the art is drawn more than once. */
  idPrefix: string;
  /** The desktop art, or a crop of it for the phone frame. */
  viewBox?: string;
  /**
   * The copy that flies around the page: no cloud sliver (a scrap of cloud
   * would fly with it), and hidden from assistive tech as the original's
   * stand-in. Nothing is clickable without a handler, so it passes none.
   */
  flying?: boolean;
  onMoon?: () => void;
  onBear?: () => void;
  className?: string;
  style?: CSSProperties;
};

export const MoonBearArt = ({
  ref,
  idPrefix: id,
  viewBox = MOON_BEAR_VIEWBOX,
  flying = false,
  onMoon,
  onBear,
  className,
  style,
}: MoonBearArtProps) => {
  const press = (act: () => void) => (event: KeyboardEvent) => {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      act();
    }
  };
  // Focus is left to the keyboard: Chrome shows the focus ring on an SVG
  // element clicked with the mouse, which a native button would not.
  const noFocus = (event: MouseEvent) => event.preventDefault();
  const button = (label: string, act?: () => void) =>
    act
      ? {
          role: "button",
          tabIndex: 0,
          "aria-label": label,
          className: BUTTON,
          onClick: act,
          onKeyDown: press(act),
          onMouseDown: noFocus,
        }
      : {};

  return (
    <svg
      ref={ref}
      viewBox={viewBox}
      fill="none"
      className={className}
      style={style}
      aria-hidden={flying ? "true" : undefined}
    >
      <defs>
        <mask
          id={`${id}-under-cloud`}
          maskUnits="userSpaceOnUse"
          x="959"
          y="78"
          width="468"
          height="496"
        >
          <path d={MOON} fill="#fff" stroke="#fff" strokeWidth="3" />
        </mask>
        <radialGradient
          id={`${id}-moon`}
          cx="0"
          cy="0"
          r="1"
          gradientTransform="matrix(-243.541 -49.2937 -31.0932 150.781 1295.73 329.695)"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#FFE6B3" />
          <stop offset="1" stopColor="#FACB6B" />
        </radialGradient>
        <linearGradient
          id={`${id}-cloud`}
          x1="1207.74"
          y1="226.18"
          x2="1207.65"
          y2="737.453"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#252B50" />
          <stop offset="1" stopColor="#3A458C" />
        </linearGradient>
        <radialGradient
          id={`${id}-moonlight`}
          cx="0"
          cy="0"
          r="1"
          gradientUnits="userSpaceOnUse"
          gradientTransform="translate(1134.5 213.608) rotate(89.3489) scale(463.119)"
        >
          <stop stopColor="#FFDA88" stopOpacity="0.5" />
          <stop offset="1" stopColor="#FFE8BD" stopOpacity="0" />
        </radialGradient>
        <linearGradient
          id={`${id}-foot-right`}
          x1="1197.99"
          y1="452.701"
          x2="1171.58"
          y2="492.091"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#C2997A" />
          <stop offset="1" stopColor="#A98469" />
        </linearGradient>
        <linearGradient
          id={`${id}-foot-left`}
          x1="1143.85"
          y1="432.188"
          x2="1123.03"
          y2="469.668"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#C2997A" />
          <stop offset="1" stopColor="#A98469" />
        </linearGradient>
        <linearGradient
          id={`${id}-arm-left`}
          x1="1127.27"
          y1="340.746"
          x2="1129.5"
          y2="422.242"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#CEA98C" />
          <stop offset="1" stopColor="#A98469" />
        </linearGradient>
        <linearGradient
          id={`${id}-arm-right`}
          x1="1235.74"
          y1="338.678"
          x2="1248.37"
          y2="420.304"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#CEA98C" />
          <stop offset="1" stopColor="#A98469" />
        </linearGradient>
        <linearGradient
          id={`${id}-body`}
          x1="1185.62"
          y1="334.954"
          x2="1182.8"
          y2="475.128"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#D6B499" />
          <stop offset="1" stopColor="#C39B7C" />
        </linearGradient>
        <linearGradient
          id={`${id}-pyjama`}
          x1="1175.16"
          y1="344.816"
          x2="1175.16"
          y2="471.717"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#232F56" />
          <stop offset="1" stopColor="#1A2445" />
        </linearGradient>
        <radialGradient
          id={`${id}-star`}
          cx="0"
          cy="0"
          r="1"
          gradientUnits="userSpaceOnUse"
          gradientTransform="translate(1027.96 241.507) rotate(-47.3633) scale(29.2873 31.2788)"
        >
          <stop stopColor="#FFE5AF" />
          <stop offset="1" stopColor="#FACB6B" />
        </radialGradient>
      </defs>

      <path
        data-part="moon"
        d={MOON}
        fill={`url(#${id}-moon)`}
        {...button("Moon", onMoon)}
      />

      {/* The front cloud, only where it laps over the crescent. */}
      {!flying && (
        <g mask={`url(#${id}-under-cloud)`}>
          <path d={FRONT_CLOUD} fill={`url(#${id}-cloud)`} />
          <mask
            id={`${id}-cloud-shape`}
            style={{ maskType: "alpha" }}
            maskUnits="userSpaceOnUse"
            x="821"
            y="226"
            width="773"
            height="462"
          >
            <path d={FRONT_CLOUD} fill={`url(#${id}-cloud)`} />
          </mask>
          <g mask={`url(#${id}-cloud-shape)`}>
            <circle
              cx="1134.5"
              cy="213.608"
              r="531.5"
              fill={`url(#${id}-moonlight)`}
            />
          </g>
        </g>
      )}

      {/* The rod, behind the bear so the paw appears to hold it. */}
      <g
        data-part="rod"
        className="moon-bear-rod"
        style={{ transformOrigin: ROD_ORIGIN }}
      >
        <polygon points={shaft.map(pt).join(" ")} fill="#8A5634" />
        <polygon points={grip.map(pt).join(" ")} fill="#4F2F22" />
        <circle cx={reel.x} cy={reel.y} r={REEL_R} fill="#3B2418" />
        <circle cx={reel.x} cy={reel.y} r={3} fill="#D9A076" />
      </g>

      <g data-part="bear" {...button("Bear", onBear)}>
        <path
          d="M1200.78 487.473C1221.55 479.37 1236.45 423.723 1236.45 423.723C1236.45 423.723 1182.67 439.42 1175.01 444.249C1167.35 449.079 1159.13 483.851 1159.13 483.851C1159.13 483.851 1180.02 495.576 1200.78 487.473Z"
          fill={`url(#${id}-foot-right)`}
        />
        <path
          d="M1117.86 459.77C1109.54 438.937 1126.48 411.882 1126.48 411.882C1126.48 411.882 1157.35 436.491 1159.36 441.829C1161.37 447.167 1142.6 482.436 1142.6 482.436C1142.6 482.436 1126.17 480.604 1117.86 459.77Z"
          fill={`url(#${id}-foot-left)`}
        />
        <path
          d="M1104.47 386.528C1107.4 365.899 1136.23 338.465 1152.43 340.182C1153.57 346.756 1142.83 365.281 1141.02 384.412C1139.21 403.542 1132.91 417.046 1129.98 421.407C1127.79 422.323 1122.89 422.914 1118.79 421.713C1107.34 418.356 1101.2 409.504 1104.47 386.528Z"
          fill={`url(#${id}-arm-left)`}
        />
        <path
          d="M1262.81 379.269C1255.9 359.086 1227.43 339.964 1214.49 341.966C1214.47 348.801 1217.96 366.477 1223.39 385.371C1228.82 404.264 1232.82 415.06 1241.96 420.446C1244.47 420.943 1249.83 420.585 1254 418.582C1265.65 412.984 1270.5 401.749 1262.81 379.269Z"
          fill={`url(#${id}-arm-right)`}
        />
        <path
          d="M1236.53 423.236C1252.16 401.334 1223.87 345.296 1217.02 335.587L1154.51 334.331C1144.04 351.574 1125.87 362.132 1124.98 407.298C1124.98 407.298 1122.58 441.588 1165.43 446.176C1208.28 450.764 1220.9 445.137 1236.53 423.236Z"
          fill={`url(#${id}-body)`}
        />
        <ellipse
          cx="29.8984"
          cy="33.0432"
          rx="29.8984"
          ry="33.0432"
          transform="matrix(-0.999798 -0.0200899 -0.0197436 0.999805 1203.16 357.55)"
          fill="#EBC9B0"
        />
        <path
          d="M1147.92 343.816L1143.63 341.151C1143.63 341.151 1097.07 359.47 1100.37 406.434L1123.16 409.431L1147.92 343.816Z"
          fill="#1A2445"
        />
        <path d={PYJAMA_BODY} fill={`url(#${id}-pyjama)`} />
        <mask
          id={`${id}-pyjama-shape`}
          style={{ maskType: "alpha" }}
          maskUnits="userSpaceOnUse"
          x="1111"
          y="344"
          width="128"
          height="128"
        >
          <path d={PYJAMA_BODY} fill={`url(#${id}-pyjama)`} />
        </mask>
        <g mask={`url(#${id}-pyjama-shape)`}>
          {PYJAMA_STRIPES.map((d) => (
            <path key={d.slice(0, 16)} d={d} fill="#3E508B" />
          ))}
        </g>
        <path
          d="M1232.78 414.093L1269.43 393.11C1261.83 354.807 1226.18 343.483 1226.18 343.483L1213.96 348.479L1232.78 414.093Z"
          fill="#29396F"
        />
        <path
          d="M1122.49 236.083C1109.98 246.877 1122.33 261.524 1122.33 261.524L1149.32 240.414C1149.32 240.414 1135 225.288 1122.49 236.083Z"
          fill="#C39B7D"
        />
        <path
          d="M1126.77 241.65C1118.56 249.161 1127.11 258.82 1127.11 258.82L1144.87 244.087C1144.87 244.087 1134.99 234.14 1126.77 241.65Z"
          fill="#EBC9B0"
        />
        <path
          d="M1115.17 288.675C1115.17 322.248 1128.1 349.465 1185.22 349.465C1249.7 349.465 1257.12 322.248 1257.12 288.675C1257.12 255.101 1225.92 227.884 1185.22 227.884C1144.52 227.884 1115.17 255.101 1115.17 288.675Z"
          fill="#CFA687"
        />
        <ellipse
          cx="23.7736"
          cy="13.107"
          rx="23.7736"
          ry="13.107"
          transform="matrix(-0.999828 -0.0185513 -0.0182315 0.999834 1196.56 294.69)"
          fill="#EBC9B0"
        />
        <path
          d="M1169.53 306.481C1173.01 306.455 1175.96 304.121 1174.21 302.068C1173.41 301.472 1170.68 300.73 1169.56 300.673C1168.5 300.618 1166.08 301.133 1165.09 301.899C1162.15 304.177 1166.05 306.507 1169.53 306.481Z"
          fill="#4F2F22"
          stroke="#4F2F22"
          strokeWidth="1.1299"
          strokeLinecap="round"
        />
        <path
          d="M1169.55 306.192V311.478M1169.55 311.478C1168.35 312.359 1165.31 314.121 1162.04 313.46M1169.55 311.478C1170.31 312.138 1173.5 314.451 1176.45 313.46"
          stroke="#4F2F22"
          strokeWidth="1.1299"
          strokeLinecap="round"
        />
        <path
          d="M1198.16 289.193C1197.42 289.294 1196.78 289.79 1196.36 290.554C1195.93 291.319 1195.73 292.335 1195.88 293.421C1196.02 294.507 1196.48 295.434 1197.09 296.059C1197.7 296.683 1198.45 296.991 1199.19 296.891C1199.93 296.79 1200.57 296.293 1200.99 295.529C1201.42 294.765 1201.62 293.748 1201.47 292.663C1201.33 291.577 1200.87 290.649 1200.26 290.025C1199.65 289.401 1198.9 289.093 1198.16 289.193Z"
          fill="#4F2F22"
          stroke="#4F2F22"
          strokeWidth="0.564949"
        />
        <path
          d="M1146.05 288.231C1146.79 288.331 1147.43 288.828 1147.85 289.592C1148.28 290.357 1148.48 291.373 1148.33 292.459C1148.19 293.545 1147.73 294.472 1147.12 295.096C1146.51 295.72 1145.76 296.029 1145.02 295.928C1144.28 295.828 1143.64 295.331 1143.22 294.567C1142.79 293.803 1142.59 292.786 1142.74 291.7C1142.88 290.615 1143.34 289.687 1143.95 289.063C1144.56 288.439 1145.31 288.13 1146.05 288.231Z"
          fill="#4F2F22"
          stroke="#4F2F22"
          strokeWidth="0.564949"
        />
        <path
          d="M1239 234.15C1251.5 244.944 1239.16 259.591 1239.16 259.591L1212.17 238.481C1212.17 238.481 1226.49 223.355 1239 234.15Z"
          fill="#D9A076"
        />
        <path
          d="M1234.72 239.715C1242.93 247.226 1234.38 256.885 1234.38 256.885L1216.61 242.151C1216.61 242.151 1226.5 232.204 1234.72 239.715Z"
          fill="#EBC9B0"
        />
        <path d={NIGHTCAP} fill="#232F56" />
        <mask
          id={`${id}-cap-shape`}
          style={{ maskType: "alpha" }}
          maskUnits="userSpaceOnUse"
          x="1143"
          y="188"
          width="116"
          height="62"
        >
          <path d={NIGHTCAP} fill="#232F56" />
        </mask>
        <g mask={`url(#${id}-cap-shape)`}>
          {CAP_STRIPES.map((d) => (
            <path key={d.slice(0, 16)} d={d} fill="#3E508B" />
          ))}
        </g>
      </g>

      {/* The line drops from the rod's tip once it has settled, with the
          star riding down on the end of it. */}
      <rect
        data-part="line"
        className="moon-bear-line"
        x={TIP.x - 0.6}
        y={TIP.y}
        width="1.2"
        height={LINE_LENGTH}
        fill="#EDE6D6"
      />
      <g transform={STAR_TRANSFORM}>
        <g data-part="hook-star" className="moon-bear-hook-star">
          <path d={STAR} fill={`url(#${id}-star)`} />
        </g>
      </g>
    </svg>
  );
};
