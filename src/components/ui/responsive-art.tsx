import type { CSSProperties } from "react";

type ResponsiveArtProps = {
  /** Path without the width suffix and extension, e.g. `/assets/hero/sparkles`. */
  base: string;
  /** The widths the art was exported at, ascending; files are `${base}-${w}.webp`. */
  widths: readonly number[];
  /** The art's design size, for the aspect ratio before it loads. */
  width: number;
  height: number;
  /** How wide the art is laid out, as a `sizes` expression (e.g. `100vw`). */
  sizes: string;
  /**
   * A media query for art that only exists in one of the phone/desktop
   * trees, e.g. `(min-width: 768px)`. The other tree is `display: none`, but
   * an eager `<img>` inside it is still fetched; with a query the picture
   * resolves to a blank pixel there instead, so nothing is downloaded.
   */
  media?: string;
  alt?: string;
  className?: string;
  style?: CSSProperties;
  /**
   * Above-the-fold art: fetched straight away at high priority. Everything
   * else is fetched lazily.
   */
  priority?: boolean;
  "aria-hidden"?: boolean | "true" | "false";
};

/** The smallest valid image; what a `<picture>` shows when its query fails. */
const BLANK = "data:image/gif;base64,R0lGODlhAQABAAAAACw=";

/**
 * An illustration exported as WebP at several widths, so the browser fetches
 * the one that fits its layout width and pixel density. The heavy pieces of
 * art were Figma SVGs with dozens of blur filters, which every visitor's
 * browser had to rasterise on the main thread; the WebP is that raster, made
 * once. A plain `<img>` because `next/image` cannot emit a `srcset` on a
 * static export.
 */
export const ResponsiveArt = ({
  base,
  widths,
  width,
  height,
  sizes,
  media,
  alt = "",
  className,
  style,
  priority = false,
  ...rest
}: ResponsiveArtProps) => {
  const srcSet = widths.map((w) => `${base}-${w}.webp ${w}w`).join(", ");
  const largest = `${base}-${widths[widths.length - 1]}.webp`;
  const loading = priority ? ("eager" as const) : ("lazy" as const);
  const fetchPriority = priority ? ("high" as const) : undefined;

  if (media) {
    return (
      // `contents`: a <picture> is inline by default, and the strut of that
      // inline box would add a few pixels under art that sits in the flow.
      <picture className="contents">
        <source media={media} srcSet={srcSet} sizes={sizes} />
        <img
          src={BLANK}
          width={width}
          height={height}
          alt={alt}
          decoding="async"
          loading={loading}
          fetchPriority={fetchPriority}
          className={className}
          style={style}
          {...rest}
        />
      </picture>
    );
  }

  return (
    // eslint-disable-next-line @next/next/no-img-element -- static export, see above
    <img
      src={largest}
      srcSet={srcSet}
      sizes={sizes}
      width={width}
      height={height}
      alt={alt}
      decoding="async"
      loading={loading}
      fetchPriority={fetchPriority}
      className={className}
      style={style}
      {...rest}
    />
  );
};
