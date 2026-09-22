/**
 * Smooth-scrolls to the section wrapper with the given id (see NAV_LINKS).
 * A section that tucks its top edge under the one above it can mark where
 * its own content starts with a `[data-scroll-anchor]` element; that is
 * what lands at the top of the viewport then, instead of the hidden edge.
 */
export function scrollToSection(id: string) {
  const section = document.getElementById(id);
  // no client rects means it's display: none, so jump to the mobile version instead
  const target = section?.getClientRects().length
    ? section
    : (document.getElementById(`${id}-mobile`) ?? section);
  if (!target) return;
  const anchor = target.querySelector("[data-scroll-anchor]") ?? target;
  anchor.scrollIntoView({ block: "start", behavior: "smooth" });
}
