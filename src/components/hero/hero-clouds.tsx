import {
  type PartingCloud,
  PartingClouds,
} from "@/components/ui/parting-clouds";

/** The two Figma cloud banks ("left clouds", "right clouds"), one layer per
 * cloud, stacked as in Figma (the right bank under the left), in the 1512 x
 * 1422 hero. They start gathered over the countdown. Some end in a square
 * cut where Figma's frame clipped them (left-1, left-3 and left-4 on the
 * left, right-1 on the right), so `from` never pulls that cut into view. */
const CLOUDS: PartingCloud[] = [
  { name: "right-1", x: 1315, y: 1167, w: 844, h: 250, from: -620 },
  { name: "right-2", x: 1026, y: 1142, w: 770, h: 245, from: -520 },
  { name: "right-3", x: 1204, y: 897, w: 411, h: 212, from: -380 },
  { name: "left-1", x: -372, y: 1079, w: 990, h: 269, from: 340 },
  { name: "left-2", x: -415, y: 793, w: 770, h: 244, from: 260 },
  { name: "left-3", x: -650, y: 1162, w: 844, h: 250, from: 560 },
  { name: "left-4", x: -1401, y: 996, w: 1925, h: 271, from: 620 },
].map(({ name, ...cloud }) => ({
  src: `/assets/hero/cloud-${name}.svg`,
  ...cloud,
}));

export const HeroClouds = () => (
  <PartingClouds clouds={CLOUDS} width={1512} height={1422} />
);
