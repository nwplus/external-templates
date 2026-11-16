/** Run this in the browser console on the desktop site (or preview_evaluate).
 * Exercises real scroll, Figma alignment, reveal geometry, and hit testing.
 */
(async () => {
  const pin = document.querySelector(".recap-pin");
  if (!pin) throw new Error("Use a desktop viewport");
  const settle = () =>
    new Promise((resolve) =>
      requestAnimationFrame(() => requestAnimationFrame(resolve))
    );
  const start = pin.getBoundingClientRect().top + scrollY;
  const span = pin.offsetHeight - innerHeight;
  const check = (ok, message) => {
    if (!ok) throw new Error(message);
  };
  const samples = [];
  for (const progress of [0, 0.3, 0.52, 0.7, 0.95, 1, 0.7, 0, 1]) {
    scrollTo({ top: start + span * progress, behavior: "instant" });
    await settle();
    const frame = document
      .querySelector(".recap-frame")
      .getBoundingClientRect();
    const door = document.querySelector(".recap-slab").getBoundingClientRect();
    const market = document
      .querySelector(".recap-market")
      .getBoundingClientRect();
    check(
      getComputedStyle(document.querySelector(".recap-chrome")).transform ===
        getComputedStyle(document.querySelector(".recap-opening")).transform,
      "Doorway separated from facade"
    );
    check(
      market.left <= 1 &&
        market.top <= 1 &&
        market.right >= innerWidth - 1 &&
        market.bottom >= innerHeight - 1,
      "Market does not cover viewport"
    );
    if (progress === 0)
      check(
        Math.abs((door.left - frame.left) / frame.width - 0.0754) < 0.002,
        "Door is in the wrong coordinate system"
      );
    if (progress === 1) {
      check(
        getComputedStyle(document.querySelector(".recap-market")).clipPath ===
          "inset(0% 0% 0px)",
        "Reveal never fully opens"
      );
      const button = document.querySelector(".testi-base");
      const box = button.getBoundingClientRect();
      const hit = document.elementFromPoint(
        box.left + box.width / 2,
        box.top + box.height / 2
      );
      check(button.contains(hit), "Testimonials are blocked by the garage");
    }
    const scene = document
      .querySelector(".recap-market > div")
      .getBoundingClientRect();
    const t = Math.min(1, Math.max(0, (progress - 0.04) / 0.9));
    const eased = t * t * (3 - 2 * t);
    const scale = scene.width / frame.width;
    check(
      Math.abs(scale - (0.72 + 0.28 * eased)) < 0.002,
      "Testimonials did not grow with the opening"
    );
    const camera = new DOMMatrix(
      getComputedStyle(document.querySelector(".recap-chrome")).transform
    ).a;
    const cameraT = Math.min(1, Math.max(0, (progress - 0.6) / 0.34));
    const cameraEase = cameraT * cameraT * (3 - 2 * cameraT);
    check(
      Math.abs(camera - (1 + 2 * cameraEase)) < 0.01,
      "Camera did not wait until the final third"
    );
    const doorShift = new DOMMatrix(
      getComputedStyle(document.querySelector(".recap-door")).transform
    ).f;
    check(
      Math.abs(doorShift / frame.height + 0.8 * eased) < 0.002,
      "Door is not synchronized with testimonial growth"
    );
    samples.push({ progress, scale });
  }
  check(
    [...document.querySelectorAll(".recap-frame img")].every(
      (img) => img.complete && img.naturalWidth > 0
    ),
    "Missing scene asset"
  );
  const screen = document.querySelector('[data-figma-node="15941:59221"]');
  const board = screen.parentElement.getBoundingClientRect();
  const bounds = screen.getBoundingClientRect();
  check(
    Math.abs((bounds.x - board.x) / board.width - 58 / 703) < 0.001,
    "Video screen x does not match Rectangle 3346"
  );
  check(
    Math.abs((bounds.y - board.y) / board.height - 58 / 482) < 0.001,
    "Video screen y does not match Rectangle 3346"
  );
  check(
    Math.abs(bounds.width / board.width - 587 / 703) < 0.001 &&
      Math.abs(bounds.height / board.height - 365 / 482) < 0.001,
    "Video does not fill Rectangle 3346"
  );
  const art = document
    .querySelector('[data-board-layer="board"]')
    .getBoundingClientRect();
  check(
    Math.abs(art.width / board.width - 743 / 703) < 0.001 &&
      Math.abs(art.height / board.height - 522 / 482) < 0.001,
    "Frame export border was squeezed into layout bounds"
  );
  for (const [name, x, y, w, h, z] of [
    ["board", -20, -20, 743, 522, 0],
    ["mat", 27, 25, 649, 432, 1],
    ["screen", 58, 58, 587, 365, 2],
    ["trim-glow", 36, 31, 636, 420, 4],
    ["trim", 39.5, 34.5, 629, 413, 5],
  ]) {
    const image = document.querySelector(`[data-board-layer="${name}"]`);
    check(
      image.complete && image.naturalWidth === w && image.naturalHeight === h,
      `Missing or wrong PNG: ${name}`
    );
    const rect = image.getBoundingClientRect();
    check(
      Math.abs((rect.x - board.x) / board.width - x / 703) < 0.001 &&
        Math.abs((rect.y - board.y) / board.height - y / 482) < 0.001,
      `Wrong layer position: ${name}`
    );
    check(Number(getComputedStyle(image).zIndex) === z, `Wrong depth: ${name}`);
    if (name.startsWith("trim")) {
      const canvas = document.createElement("canvas");
      canvas.width = w;
      canvas.height = h;
      const ctx = canvas.getContext("2d");
      ctx.drawImage(image, 0, 0);
      check(
        ctx.getImageData(Math.floor(w / 2), Math.floor(h / 2), 1, 1).data[3] ===
          0,
        `Opaque PNG blocks the video: ${name}`
      );
    }
  }
  check(
    getComputedStyle(screen).zIndex === "3",
    "Video is not sandwiched between screen and trim"
  );
  return { passed: true, viewport: [innerWidth, innerHeight], samples };
})();
