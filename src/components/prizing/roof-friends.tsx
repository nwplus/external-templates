"use client";

import { play, prefersLessMotion } from "@/components/sponsors/ornament-art";

import { type CSSProperties, type KeyboardEvent, useId, useRef } from "react";

/**
 * Points in the art's own units (the 1897 × 2651 canvas). Every transform
 * below is measured against the canvas rather than the element's own box
 * (`transform-box: view-box`) so a pivot stays put while the parts around it
 * move, and so the two halves of an arm turn about the same shoulder.
 */
type Point = { x: number; y: number };

/** Where each friend's feet meet the roof, and how tall it stands. */
const DEER = { feet: { x: 1318.2, y: 1698.7 }, height: 175 };
const BEAR = { feet: { x: 1163.5, y: 1745 }, height: 62 };
const SHOULDER_RIGHT: Point = { x: 1337, y: 1622 };
const SHOULDER_LEFT: Point = { x: 1299, y: 1622 };

const pivot = (p: Point): CSSProperties => ({
  transformBox: "view-box",
  transformOrigin: `${p.x}px ${p.y}px`,
});

/** Crouch, spring up with a stretch, land with a squash, settle. */
const hop = (lift: number): Keyframe[] => [
  { transform: "translateY(0) scale(1, 1)" },
  { transform: "translateY(0) scale(1.06, 0.92)", offset: 0.18 },
  { transform: `translateY(${-lift}px) scale(0.96, 1.06)`, offset: 0.5 },
  {
    transform: `translateY(${-lift * 0.85}px) scale(0.98, 1.03)`,
    offset: 0.62,
  },
  {
    transform: "translateY(0) scale(1.07, 0.9)",
    offset: 0.82,
    easing: "ease-out",
  },
  { transform: "translateY(0) scale(0.99, 1.02)", offset: 0.92 },
  { transform: "translateY(0) scale(1, 1)" },
];

/** Three swings out from the side and back; `out` is signed so the arms mirror. */
const wave = (out: number): Keyframe[] => [
  { transform: "rotate(0deg)" },
  { transform: `rotate(${out}deg)`, offset: 1 / 6 },
  { transform: `rotate(${out / 4}deg)`, offset: 2 / 6 },
  { transform: `rotate(${out}deg)`, offset: 3 / 6 },
  { transform: `rotate(${out / 4}deg)`, offset: 4 / 6 },
  { transform: `rotate(${out}deg)`, offset: 5 / 6 },
  { transform: "rotate(0deg)" },
];

/** A rock from side to side, three times each way, for a friend with no free arm. */
const tilt: Keyframe[] = [
  { transform: "rotate(0deg)" },
  { transform: "rotate(8deg)", offset: 1 / 7 },
  { transform: "rotate(-8deg)", offset: 2 / 7 },
  { transform: "rotate(8deg)", offset: 3 / 7 },
  { transform: "rotate(-8deg)", offset: 4 / 7 },
  { transform: "rotate(8deg)", offset: 5 / 7 },
  { transform: "rotate(-8deg)", offset: 6 / 7 },
  { transform: "rotate(0deg)" },
];

const HOP = { duration: 600, easing: "ease-in-out" };
const WAVE = { duration: 900, easing: "ease-in-out" };

/** Lets a keyboard user press the friend like a button. */
const onKey = (act: () => void) => (e: KeyboardEvent<SVGGElement>) => {
  if (e.key !== "Enter" && e.key !== " ") return;
  e.preventDefault();
  act();
};

/**
 * Chrome's own stylesheet rings any focused SVG element, mouse click or
 * not, so the ring is switched off and brought back only for keyboard focus.
 */
const FRIEND =
  "pointer-events-auto cursor-pointer outline-none focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-solid focus-visible:outline-star";

/**
 * The two friends on the roof of the house in the tall-clouds art: a deer in
 * pink pyjamas by the chimney and a bear curled up on the left slope. They
 * are the only vector left of that picture, lifted out of the Figma export
 * so they can move; the rest is the flattened WebP behind them. Drawn on the
 * same 1897 × 2651 canvas in the same box, so they land exactly where the
 * raster used to paint them. Click one and it hops; the deer waves both arms
 * and the bear rocks. Nothing moves when the visitor has asked for less
 * motion.
 *
 * The deer's arm skin sits under the body while its sleeve sits over the
 * pyjama top, so each arm is two groups that turn about one shoulder point,
 * which keeps the picture's stacking intact. The parts carry no filters; the
 * gradients are the export's own, ids namespaced per instance.
 */
export const RoofFriends = () => {
  const id = `roof-${useId().replace(/[^a-zA-Z0-9_-]/g, "")}`;
  const deer = useRef<SVGGElement>(null);
  const bear = useRef<SVGGElement>(null);
  const bearBody = useRef<SVGGElement>(null);

  const onDeer = () => {
    const el = deer.current;
    if (!el || prefersLessMotion()) return;
    play(el, hop(DEER.height * 0.06), HOP);
    for (const part of el.querySelectorAll('[data-part^="deer-arm-right"]'))
      play(part, wave(-25), WAVE);
    for (const part of el.querySelectorAll('[data-part^="deer-arm-left"]'))
      play(part, wave(25), WAVE);
  };

  const onBear = () => {
    if (!bear.current || !bearBody.current || prefersLessMotion()) return;
    play(bear.current, hop(BEAR.height * 0.06), HOP);
    play(bearBody.current, tilt, WAVE);
  };

  return (
    <svg
      viewBox="0 0 1897 2651"
      className="pointer-events-none absolute inset-0 block h-full w-full"
      fill="none"
    >
      <g
        ref={deer}
        role="button"
        tabIndex={0}
        aria-label="Deer in pink pyjamas on the roof"
        className={FRIEND}
        style={pivot(DEER.feet)}
        onClick={onDeer}
        onKeyDown={onKey(onDeer)}
      >
        <g data-part="deer-arm-right-under" style={pivot(SHOULDER_RIGHT)}>
          <path
            d="M1350.51 1647.81C1347.1 1638.2 1336.83 1618.57 1328.73 1619.68C1328.23 1623.16 1332.26 1633.13 1334.98 1642.85C1337.67 1652.49 1339.79 1653.93 1341.31 1656.19C1342.55 1658.31 1343.78 1656.19 1345.81 1655.5C1351.52 1653.59 1354.59 1659.29 1350.51 1647.81Z"
            fill={`url(#${id}-g21)`}
          />
          <path
            d="M1352.42 1655.96C1352.93 1653.98 1351.51 1650.48 1351.51 1650.48C1351.51 1650.48 1348.05 1651.22 1345.96 1652.08C1343.7 1653.02 1340.48 1655.15 1340.48 1655.15C1341.51 1656.89 1340.99 1655.94 1343.17 1658.75C1345.34 1661.56 1345.76 1657.68 1347.93 1657.02C1349.69 1656.49 1352 1657.57 1352.42 1655.96Z"
            fill={`url(#${id}-g22)`}
          />
        </g>
        <g data-part="deer-arm-left-under" style={pivot(SHOULDER_LEFT)}>
          <path
            d="M1286.09 1647.81C1289.5 1638.2 1299.77 1618.57 1307.87 1619.68C1308.37 1623.16 1304.34 1633.13 1301.62 1642.85C1298.93 1652.49 1296.81 1653.93 1295.29 1656.19C1294.05 1658.31 1292.82 1656.19 1290.78 1655.5C1285.08 1653.59 1282.01 1659.29 1286.09 1647.81Z"
            fill={`url(#${id}-g23)`}
          />
          <path
            d="M1284.19 1655.96C1283.67 1653.97 1285.09 1650.47 1285.09 1650.47C1285.09 1650.47 1288.55 1651.22 1290.64 1652.08C1292.9 1653.02 1296.12 1655.16 1296.12 1655.16C1295.09 1656.89 1295.61 1655.94 1293.43 1658.75C1291.26 1661.56 1290.84 1657.68 1288.67 1657.02C1286.91 1656.49 1284.6 1657.57 1284.19 1655.96Z"
            fill={`url(#${id}-g24)`}
          />
        </g>
        <path
          d="M1296.73 1666.07C1296.55 1642.75 1303.48 1626.16 1306.07 1620.79L1329.74 1620.42C1333.71 1630.08 1338.56 1640.27 1338.92 1665.42C1339.2 1685.16 1338.29 1697.13 1331.39 1696.51C1329.62 1696.35 1325.69 1696.43 1324.8 1695.74C1323.03 1694.36 1321.2 1671.95 1321.92 1667.71C1321.92 1667.71 1320.68 1668.7 1318.02 1668.74C1315.37 1668.79 1315.2 1668.3 1314.15 1667.83C1314.79 1671.82 1313.42 1694.23 1309.27 1696.51C1307.98 1697.22 1307.15 1696.51 1305.77 1696.51C1301.7 1696.51 1296.95 1695.22 1296.73 1666.07Z"
          fill={`url(#${id}-g25)`}
        />
        <path
          d="M1337.96 1691.39C1337.96 1687.7 1322.59 1688.04 1322.09 1690.19C1321.06 1694.67 1322.26 1698.44 1323.92 1698.65C1326.03 1698.91 1325.7 1696.91 1327.82 1697.03C1330 1697.14 1329.89 1698.65 1332.07 1698.65C1334.23 1698.65 1337.96 1695.66 1337.96 1691.39Z"
          fill={`url(#${id}-g26)`}
        />
        <path
          d="M1298.6 1691.03C1298.05 1687.9 1307.12 1688.23 1312.99 1689.53C1315.68 1690.12 1314.33 1698.11 1312.66 1698.31C1310.53 1698.56 1310.6 1696.73 1308.46 1696.85C1306.26 1696.96 1307.02 1698.67 1304.81 1698.67C1302.63 1698.67 1299.33 1695.16 1298.6 1691.03Z"
          fill={`url(#${id}-g27)`}
        />
        <path
          d="M1299.72 1563.92C1297.29 1566.06 1300.16 1572.77 1301.56 1574.13L1332.78 1572.22C1332.91 1570.52 1337.12 1565.71 1332.91 1561.62C1330.14 1558.94 1323.03 1560.47 1320.79 1561.62C1318.55 1562.77 1317.76 1562.9 1315.51 1562.9C1313 1562.9 1310.78 1562.52 1309.2 1562.01C1307.62 1561.49 1302.75 1561.24 1299.72 1563.92Z"
          fill="#E773BA"
        />
        <path
          d="M1350.42 1594.85C1350.42 1608.42 1345.34 1616.81 1329.61 1621.23C1321.98 1623.37 1313.83 1623.49 1306.16 1621.54C1289.6 1617.33 1286.03 1608.56 1286.03 1594.85C1286.03 1578.36 1300.44 1564.99 1318.23 1564.99C1336.01 1564.99 1350.42 1578.36 1350.42 1594.85Z"
          fill={`url(#${id}-g28)`}
        />
        <path
          d="M1315.61 1570.21C1315.56 1571 1315.01 1571.74 1313.74 1572.06C1312.59 1572.34 1311.41 1570.85 1311.46 1570.05C1311.5 1569.26 1312.76 1568.59 1313.8 1568.66C1314.84 1568.72 1315.65 1569.41 1315.61 1570.21Z"
          fill="#F7EADF"
        />
        <path
          d="M1319.59 1569.7C1319.54 1570.49 1320 1571.3 1321.23 1571.77C1322.34 1572.19 1323.68 1570.85 1323.72 1570.05C1323.77 1569.26 1322.59 1568.44 1321.55 1568.38C1320.51 1568.32 1319.63 1568.91 1319.59 1569.7Z"
          fill="#F7EADF"
        />
        <path
          d="M1319.98 1573.57C1320.02 1574.36 1319.56 1575.17 1318.33 1575.64C1317.22 1576.06 1315.84 1574.88 1315.79 1574.09C1315.75 1573.29 1316.97 1572.31 1318.01 1572.25C1319.05 1572.19 1319.93 1572.78 1319.98 1573.57Z"
          fill="#F7EADF"
        />
        <path
          d="M1346.47 1524.97C1360.22 1529.8 1343.11 1557.13 1337.99 1571.3C1334.49 1573.29 1327.42 1571.83 1330.34 1564.65C1333.99 1555.67 1323.35 1546.92 1326.2 1540.85C1329.06 1534.78 1336.44 1556.5 1337.13 1547.93C1338.91 1526.12 1341.4 1523.19 1346.47 1524.97Z"
          fill={`url(#${id}-g29)`}
        />
        <path
          d="M1289.19 1524C1275.31 1528.46 1292.03 1556.98 1296.8 1571.28C1300.24 1573.36 1307.35 1572.1 1304.61 1564.84C1301.18 1555.77 1311.75 1546.57 1309.05 1540.42C1306.35 1534.28 1298.43 1555.79 1297.95 1547.2C1296.72 1525.35 1294.29 1522.36 1289.19 1524Z"
          fill={`url(#${id}-g30)`}
        />
        <path
          d="M1286.83 1564.76C1282.02 1575.79 1287.62 1576.12 1289.14 1579.62C1291.14 1584.22 1303.06 1573.85 1299.89 1572.22C1296.73 1570.6 1299.01 1565.28 1286.83 1564.76Z"
          fill={`url(#${id}-g31)`}
        />
        <path
          d="M1349.79 1565.02C1354.16 1576.24 1348.55 1576.33 1346.9 1579.76C1344.72 1584.28 1333.22 1573.41 1336.44 1571.92C1339.66 1570.43 1337.6 1565.02 1349.79 1565.02Z"
          fill={`url(#${id}-g32)`}
        />
        <path
          d="M1297.78 1656.13C1302.54 1622.53 1304.78 1620.63 1304.78 1620.63L1318.78 1622.63L1335.78 1618.63L1338.78 1659.63L1297.78 1656.13Z"
          fill={`url(#${id}-g33)`}
        />
        <g data-part="deer-arm-left-sleeve" style={pivot(SHOULDER_LEFT)}>
          <path
            d="M1300.24 1618.13L1305.78 1619.84L1300.24 1650.13L1283.78 1646.43C1286.46 1627.23 1300.24 1618.13 1300.24 1618.13Z"
            fill={`url(#${id}-g34)`}
          />
        </g>
        <g data-part="deer-arm-right-sleeve" style={pivot(SHOULDER_RIGHT)}>
          <path
            d="M1336.82 1617.13L1331.78 1618.84L1336.82 1649.13L1351.78 1645.43C1349.34 1626.23 1336.82 1617.13 1336.82 1617.13Z"
            fill={`url(#${id}-g35)`}
          />
        </g>
        <path
          d="M1295.93 1689.13C1296.43 1684.63 1293.65 1675.69 1297.93 1655.13L1338.65 1657.19C1340.93 1667.19 1340.93 1689.13 1340.93 1689.13L1322.65 1688.13L1320.43 1669.63L1316.43 1669.13L1313.43 1688.13L1295.93 1689.13Z"
          fill={`url(#${id}-g36)`}
        />
      </g>
      <g
        ref={bear}
        role="button"
        tabIndex={0}
        aria-label="Bear resting on the roof"
        className={FRIEND}
        style={pivot(BEAR.feet)}
        onClick={onBear}
        onKeyDown={onKey(onBear)}
      >
        <g ref={bearBody} style={pivot(BEAR.feet)}>
          <ellipse
            cx="6.18736"
            cy="4.93944"
            rx="6.18736"
            ry="4.93944"
            transform="matrix(0.988633 0.150348 -0.200301 0.979734 1144.51 1734.13)"
            fill="#D2B299"
          />
          <ellipse
            cx="6.18736"
            cy="4.93944"
            rx="6.18736"
            ry="4.93944"
            transform="matrix(0.988633 0.150348 -0.200301 0.979734 1163.3 1734.19)"
            fill="#D2B299"
          />
          <path
            d="M1190.55 1715.46C1190.1 1711.16 1183.09 1705.15 1178.9 1705.32C1178.51 1706.66 1180.99 1710.62 1181.17 1714.6C1181.36 1718.57 1182.78 1721.44 1183.46 1722.37C1184.01 1722.59 1185.27 1722.77 1186.34 1722.57C1189.34 1722.01 1191.04 1720.25 1190.55 1715.46Z"
            fill={`url(#${id}-g87)`}
          />
          <path
            d="M1129.01 1717.27C1129.2 1712.95 1135.87 1706.54 1140.07 1706.46C1140.54 1707.78 1138.29 1711.88 1138.34 1715.86C1138.39 1719.84 1137.13 1722.78 1136.5 1723.76C1135.96 1724 1134.72 1724.26 1133.63 1724.12C1130.6 1723.74 1128.79 1722.08 1129.01 1717.27Z"
            fill={`url(#${id}-g88)`}
          />
          <path
            d="M1135.3 1721.25C1136.22 1707.28 1140.04 1693.81 1142.87 1689.82C1142.87 1689.82 1147.83 1683.82 1154.89 1683.05C1167.73 1681.65 1171.48 1686.71 1171.48 1686.71C1178.09 1693.38 1181.41 1702.9 1183.27 1720.08C1184.74 1733.57 1179.29 1737.94 1174.23 1739.54C1172.24 1740.17 1168.68 1742.01 1160.21 1742.22C1150.39 1742.46 1151.36 1741.73 1145.58 1740.49C1138.42 1738.96 1134.39 1735.08 1135.3 1721.25Z"
            fill="#D2B299"
          />
          <path
            d="M1172.39 1684.71C1170.57 1683.24 1168.94 1684.82 1168.35 1685.79C1169.17 1687.13 1171.13 1689.71 1172.47 1689.34C1174.14 1688.87 1174.66 1686.55 1172.39 1684.71Z"
            fill={`url(#${id}-g89)`}
          />
          <path
            d="M1144.53 1685.6C1146.29 1684.06 1147.98 1685.59 1148.6 1686.54C1147.83 1687.9 1145.96 1690.55 1144.61 1690.23C1142.93 1689.82 1142.33 1687.52 1144.53 1685.6Z"
            fill={`url(#${id}-g90)`}
          />
          <path
            d="M1136.18 1731.26C1133.76 1726.09 1137.77 1704.76 1137.77 1704.76L1158.77 1714.56L1183.28 1704.76C1183.28 1704.76 1187.06 1723.93 1184.54 1731.26L1159.4 1732.69L1158.17 1732.76L1158.17 1732.62L1136.18 1731.26Z"
            fill="#F6F8E5"
          />
          <path
            d="M1139.27 1699.63C1145.73 1701.65 1159.09 1712.04 1159.09 1712.04C1159.09 1712.04 1179.68 1698.55 1181.11 1698.77C1182.25 1698.94 1184.45 1700.93 1185.4 1701.9L1184.19 1705.35L1161.9 1713.76L1159.4 1715.26L1157.74 1715.08L1157.66 1715.26L1156.9 1714.98L1136.4 1707.4L1136.4 1701.9L1139.27 1699.63Z"
            fill="#F0E7B9"
          />
          <path
            d="M1136.4 1721.34L1136.4 1717.41L1158.18 1719.7L1185.31 1715.76L1186.4 1721.34L1158.18 1722.76L1136.4 1721.34Z"
            fill="#F0E7B9"
          />
          <path
            d="M1170.34 1738.07C1177.13 1741.29 1200.2 1718.67 1197.74 1708.42C1195.87 1700.59 1180.18 1688.03 1174.22 1698.07C1166.76 1710.62 1161.86 1734.04 1170.34 1738.07Z"
            fill="#4F2F22"
          />
        </g>
      </g>
      <defs>
        <linearGradient
          id={`${id}-g21`}
          x1="1328.62"
          y1="1644.54"
          x2="1398.64"
          y2="1601.83"
          gradientUnits="userSpaceOnUse"
        >
          {" "}
          <stop stopColor="#D2B299" />{" "}
          <stop offset="0.838809" stopColor="#6C5B4F" />{" "}
        </linearGradient>
        <linearGradient
          id={`${id}-g22`}
          x1="1340.63"
          y1="1658.1"
          x2="1391.69"
          y2="1633.8"
          gradientUnits="userSpaceOnUse"
        >
          {" "}
          <stop stopColor="#7F5739" />{" "}
          <stop offset="1" stopColor="#2A1D13" />{" "}
        </linearGradient>
        <linearGradient
          id={`${id}-g23`}
          x1="1307.94"
          y1="1631.07"
          x2="1268.32"
          y2="1610.89"
          gradientUnits="userSpaceOnUse"
        >
          {" "}
          <stop stopColor="#D2B299" />{" "}
          <stop offset="0.915339" stopColor="#6C5B4F" />{" "}
        </linearGradient>
        <linearGradient
          id={`${id}-g24`}
          x1="1295.95"
          y1="1658.6"
          x2="1247.85"
          y2="1633.79"
          gradientUnits="userSpaceOnUse"
        >
          {" "}
          <stop stopColor="#7F5739" />{" "}
          <stop offset="1" stopColor="#2A1D13" />{" "}
        </linearGradient>
        <linearGradient
          id={`${id}-g25`}
          x1="1317.17"
          y1="1620.62"
          x2="1317.64"
          y2="1913.99"
          gradientUnits="userSpaceOnUse"
        >
          {" "}
          <stop stopColor="#D2B299" />{" "}
          <stop offset="1" stopColor="#6C5B4F" />{" "}
        </linearGradient>
        <linearGradient
          id={`${id}-g26`}
          x1="1329.91"
          y1="1688.59"
          x2="1326.06"
          y2="1721.05"
          gradientUnits="userSpaceOnUse"
        >
          {" "}
          <stop stopColor="#7F5739" />{" "}
          <stop offset="1" stopColor="#2A1D13" />{" "}
        </linearGradient>
        <linearGradient
          id={`${id}-g27`}
          x1="1306.47"
          y1="1688.59"
          x2="1310.39"
          y2="1721.04"
          gradientUnits="userSpaceOnUse"
        >
          {" "}
          <stop stopColor="#7F5739" />{" "}
          <stop offset="1" stopColor="#2A1D13" />{" "}
        </linearGradient>
        <linearGradient
          id={`${id}-g28`}
          x1="1318.23"
          y1="1564.99"
          x2="1318.23"
          y2="1681.27"
          gradientUnits="userSpaceOnUse"
        >
          {" "}
          <stop offset="0.388144" stopColor="#D2B299" />{" "}
          <stop offset="1" stopColor="#6C5B4F" />{" "}
        </linearGradient>
        <linearGradient
          id={`${id}-g29`}
          x1="1399.99"
          y1="1386.67"
          x2="1329.56"
          y2="1578.23"
          gradientUnits="userSpaceOnUse"
        >
          {" "}
          <stop stopColor="#2A1D13" />{" "}
          <stop offset="1" stopColor="#796658" />{" "}
        </linearGradient>
        <linearGradient
          id={`${id}-g30`}
          x1="1238.24"
          y1="1382.07"
          x2="1304.47"
          y2="1578.75"
          gradientUnits="userSpaceOnUse"
        >
          {" "}
          <stop stopColor="#2A1D13" />{" "}
          <stop offset="1" stopColor="#796658" />{" "}
        </linearGradient>
        <linearGradient
          id={`${id}-g31`}
          x1="1289.16"
          y1="1571.66"
          x2="1180.61"
          y2="1540.74"
          gradientUnits="userSpaceOnUse"
        >
          {" "}
          <stop stopColor="#D2B299" />{" "}
          <stop offset="1" stopColor="#6C5B4F" />{" "}
        </linearGradient>
        <linearGradient
          id={`${id}-g32`}
          x1="1343.55"
          y1="1571.5"
          x2="1399.1"
          y2="1530.71"
          gradientUnits="userSpaceOnUse"
        >
          {" "}
          <stop stopColor="#D2B299" />{" "}
          <stop offset="1" stopColor="#6C5B4F" />{" "}
        </linearGradient>
        <linearGradient
          id={`${id}-g33`}
          x1="1318.28"
          y1="1618.63"
          x2="1318.28"
          y2="1659.63"
          gradientUnits="userSpaceOnUse"
        >
          {" "}
          <stop stopColor="#FC8ED1" />{" "}
          <stop offset="1" stopColor="#EE48AE" />{" "}
        </linearGradient>
        <linearGradient
          id={`${id}-g34`}
          x1="1294.78"
          y1="1618.13"
          x2="1294.78"
          y2="1650.13"
          gradientUnits="userSpaceOnUse"
        >
          {" "}
          <stop stopColor="#EA8AC5" />{" "}
          <stop offset="1" stopColor="#CD4598" />{" "}
        </linearGradient>
        <linearGradient
          id={`${id}-g35`}
          x1="1341.78"
          y1="1617.13"
          x2="1341.78"
          y2="1649.13"
          gradientUnits="userSpaceOnUse"
        >
          {" "}
          <stop stopColor="#EA8AC5" />{" "}
          <stop offset="1" stopColor="#C93590" />{" "}
        </linearGradient>
        <linearGradient
          id={`${id}-g36`}
          x1="1317.89"
          y1="1655.13"
          x2="1317.89"
          y2="1689.13"
          gradientUnits="userSpaceOnUse"
        >
          {" "}
          <stop stopColor="#F087C7" />{" "}
          <stop offset="1" stopColor="#8A2764" />{" "}
        </linearGradient>
        <linearGradient
          id={`${id}-g87`}
          x1="1185.37"
          y1="1705.73"
          x2="1186.61"
          y2="1722.33"
          gradientUnits="userSpaceOnUse"
        >
          {" "}
          <stop stopColor="#D2B299" />{" "}
          <stop offset="1" stopColor="#BEA591" />{" "}
        </linearGradient>
        <linearGradient
          id={`${id}-g88`}
          x1="1133.61"
          y1="1707.25"
          x2="1133.36"
          y2="1723.9"
          gradientUnits="userSpaceOnUse"
        >
          {" "}
          <stop stopColor="#D2B299" />{" "}
          <stop offset="1" stopColor="#BEA591" />{" "}
        </linearGradient>
        <linearGradient
          id={`${id}-g89`}
          x1="1168.37"
          y1="1686.8"
          x2="1173.9"
          y2="1686.7"
          gradientUnits="userSpaceOnUse"
        >
          {" "}
          <stop offset="0.165" stopColor="#D2B299" />{" "}
          <stop offset="1" stopColor="#D2B299" />{" "}
        </linearGradient>
        <linearGradient
          id={`${id}-g90`}
          x1="1148.62"
          y1="1687.54"
          x2="1143.09"
          y2="1687.64"
          gradientUnits="userSpaceOnUse"
        >
          {" "}
          <stop offset="0.165" stopColor="#D2B299" />{" "}
          <stop offset="1" stopColor="#D2B299" />{" "}
        </linearGradient>
      </defs>
    </svg>
  );
};
