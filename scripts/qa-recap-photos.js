/** Run in a desktop or mobile page's browser console / preview_evaluate. */
(async () => {
  const wait = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
  const check = (ok, message) => {
    if (!ok) throw new Error(message);
  };
  const pin = document.querySelector(".recap-pin");
  const section = document.querySelector("#recap");
  scrollTo({
    top: (pin ?? section).getBoundingClientRect().top + scrollY,
    behavior: "instant",
  });
  await wait(150);
  const buttons = [...section.querySelectorAll(".recap-photo")];
  check(buttons.length === (pin ? 10 : 9), "Missing individual photo triggers");
  for (const button of buttons) {
    const image = button.querySelector("img");
    check(image.complete && image.naturalWidth > 0, "Missing recap photo");
    check(
      getComputedStyle(button).pointerEvents === "auto",
      "Photo cannot be clicked"
    );
    button.focus({ preventScroll: true });
    button.click();
    await wait(250);
    const dialog = document.querySelector("[role=dialog]");
    check(
      dialog && dialog.getAttribute("aria-modal") === "true",
      "Photo lightbox did not open"
    );
    check(
      dialog.parentElement === document.body,
      "Lightbox is trapped inside clipped garage"
    );
    const full = dialog.querySelector("img");
    await full.decode();
    check(full.alt === image.alt, "Wrong photo opened");
    const style = getComputedStyle(full);
    const ratio =
      (parseFloat(style.width) - 8) / (parseFloat(style.height) - 8);
    check(
      Math.abs(ratio - full.naturalWidth / full.naturalHeight) < 0.03,
      "Photo is stretched or compressed"
    );
    check(
      getComputedStyle(dialog.querySelector("figcaption")).transform === "none",
      "Caption is tilted with the photo"
    );
    check(
      document.documentElement.style.overflow === "hidden",
      "Background scroll is not locked"
    );
    document.dispatchEvent(
      new KeyboardEvent("keydown", { key: "Escape", bubbles: true })
    );
    await wait(900);
    await new Promise((resolve) =>
      requestAnimationFrame(() => requestAnimationFrame(resolve))
    );
    check(
      !document.querySelector("[role=dialog]"),
      "Escape did not close lightbox"
    );
    check(document.activeElement === button, "Focus did not return to photo");
  }
  return {
    passed: true,
    layout: pin ? "desktop" : "mobile",
    photos: buttons.length,
  };
})();
