import { Fragment } from "react";

/**
 * Renders a copy string with `**text**` runs in bold, so constants can mark
 * the odd sentence to stand out without holding JSX.
 */
export const withEmphasis = (text: string) =>
  text.split(/\*\*(.+?)\*\*/g).map((part, i) =>
    // The split leaves the bold runs at the odd indexes.
    i % 2 === 1 ? (
      <strong key={i} className="font-bold">
        {part}
      </strong>
    ) : (
      <Fragment key={i}>{part}</Fragment>
    )
  );
