/** Run on desktop or mobile in the browser console / preview_evaluate. */
(async () => {
  const wait = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
  const check = (ok, message) => {
    if (!ok) throw new Error(message);
  };
  document
    .querySelector("#testimonials")
    .scrollIntoView({ behavior: "instant" });
  await wait(100);
  if (document.querySelector(".testi-base"))
    document.querySelector(".testi-base").click();
  else document.querySelector('[aria-label="Testimonial 1"]').click();
  await wait(650);
  const active = document.querySelector(".testi-slide[data-active]");
  const lanterns = [...active.querySelectorAll(".testimonial-lantern")];
  check(lanterns.length === 5, "Missing independent lanterns");
  check(
    [...active.querySelectorAll("img")].every(
      (i) => i.complete && i.naturalWidth
    ),
    "Missing cart layer"
  );
  const reduced = matchMedia("(prefers-reduced-motion: reduce)").matches;
  for (const lantern of lanterns) {
    for (const selector of [
      ".lantern-gust",
      ".lantern-swing",
      ".lantern-tassel",
    ]) {
      check(
        getComputedStyle(lantern.querySelector(selector)).animationName ===
          (reduced
            ? "none"
            : selector === ".lantern-gust"
              ? "lantern-gust"
              : "lantern-swing"),
        "Lantern joint animation mismatch"
      );
    }
  }
  if (!reduced && matchMedia("(hover: hover) and (pointer: fine)").matches) {
    const scene = active.closest("[data-lantern-scene]");
    const rect = lanterns[0].getBoundingClientRect();
    const first = new PointerEvent("pointermove", {
      clientX: rect.left,
      clientY: rect.top + rect.height / 2,
    });
    const second = new PointerEvent("pointermove", {
      clientX: rect.right,
      clientY: rect.top + rect.height / 2,
    });
    Object.defineProperty(second, "timeStamp", { value: first.timeStamp + 16 });
    scene.dispatchEvent(first);
    scene.dispatchEvent(second);
    await new Promise((resolve) =>
      requestAnimationFrame(() => requestAnimationFrame(resolve))
    );
    check(
      Math.abs(parseFloat(lanterns[0].style.getPropertyValue("--knock"))) > 0.1,
      "Cursor did not knock lantern"
    );
  }
  return { passed: true, lanterns: 5, reduced };
})();
