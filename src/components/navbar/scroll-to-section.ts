/** Smooth-scrolls to the section wrapper with the given id (see NAV_LINKS). */
export function scrollToSection(id: string) {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
}
