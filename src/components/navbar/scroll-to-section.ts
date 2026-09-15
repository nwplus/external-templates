/** Smooth-scrolls to the section wrapper with the given id (see NAV_LINKS). */
export function scrollToSection(id: string) {
  const section = document.getElementById(id);
  // no client rects means it's display: none, so jump to the mobile version instead
  const target = section?.getClientRects().length
    ? section
    : (document.getElementById(`${id}-mobile`) ?? section);
  target?.scrollIntoView({ behavior: "smooth" });
}
