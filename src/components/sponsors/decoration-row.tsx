import type { Decoration } from "@/lib/shelves";

import { ShelfOrnament } from "./shelf-ornament";

/**
 * Where each decoration stands on the narrow layout's decoration-only shelf,
 * as a share of that shelf. The three pieces overlap the way they do in the
 * mobile frame, and the plant leans past the right end, so they are placed
 * rather than spaced out.
 */
const PLACEMENT: Record<Decoration, { left: number; width: number }> = {
  "books-left": { left: 6.4, width: 42.3 },
  "books-right": { left: 6.4, width: 42.3 },
  sheep: { left: 43.6, width: 25 },
  plant: { left: 63.8, width: 37.5 },
};

/** The tallest piece, as a share of the shelf's width, so the row reserves
 * the height its absolutely placed children need. */
const ROW_HEIGHT = 48.9;

/** The decorations lined up along a shelf of their own, narrow layout only. */
const DecorationRow = ({ items }: { items: Decoration[] }) => (
  <div className="relative w-full" style={{ paddingBottom: `${ROW_HEIGHT}%` }}>
    {items.map((kind) => {
      const { left, width } = PLACEMENT[kind];
      return (
        <div
          key={kind}
          style={{ left: `${left}%`, width: `${width}%` }}
          className="absolute bottom-0"
        >
          <ShelfOrnament kind={kind} />
        </div>
      );
    })}
  </div>
);

export default DecorationRow;
