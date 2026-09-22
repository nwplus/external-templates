"use client";

import { type ReactNode, useState } from "react";

/**
 * Wrapper for a sheep illustration + overlay. Desktop reveals the description
 * on hover (`group-hover`); touch devices have no hover, so a tap toggles
 * `data-open` and the overlay reacts to `group-data-[open=true]` instead.
 * It is a container so SheepBleat's bubble can size itself to the sheep.
 */
export const SheepTapToggle = ({ children }: { children: ReactNode }) => {
  const [open, setOpen] = useState(false);

  return (
    <div
      className="group relative w-full @container"
      data-open={open}
      onClick={() => setOpen((value) => !value)}
    >
      {children}
    </div>
  );
};
