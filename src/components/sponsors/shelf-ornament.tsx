import type { Decoration } from "@/lib/shelves";

import { BookRow } from "./book-row";
import { PottedPlant } from "./potted-plant";
import { SheepPlush } from "./sheep-plush";

/** The ornament standing at a spot on a shelf, filling its width. */
export const ShelfOrnament = ({ kind }: { kind: Decoration }) => {
  if (kind === "sheep") return <SheepPlush />;
  if (kind === "plant") return <PottedPlant />;
  return <BookRow kind={kind} />;
};
