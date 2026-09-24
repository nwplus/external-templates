"use client";

import { type ReactNode, useState } from "react";

/**
 * Wrapper for a sheep illustration + overlay. Desktop reveals the description
 * on hover (`group-hover`); touch devices have no hover, so a tap toggles
 * `data-open` and the overlay reacts to `group-data-[open=true]` instead.
 * It is also the size container the overlay's copy scales against.
 */
export const SheepTapToggle = ({ children }: { children: ReactNode }) => {
  const [open, setOpen] = useState(false);

  return (
    <div
      className="group @container relative w-full cursor-pointer select-none transition-transform duration-300 hover:-translate-y-1"
      data-open={open}
      onClick={() => setOpen((value) => !value)}
    >
      {children}
    </div>
  );
};
