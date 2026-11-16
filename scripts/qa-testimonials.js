/** Run in a desktop page's browser console or preview_evaluate. */
(async () => {
  const wait = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
  const check = (ok, message) => {
    if (!ok) throw new Error(message);
  };
  document
    .querySelector("#testimonials")
    .scrollIntoView({ behavior: "instant" });
  await wait(100);
  document.querySelectorAll(".testi-base")[1].click();
  await wait(600);
  const results = [];
  for (const [label, sign] of [
    ["Previous testimonial", 1],
    ["Next testimonial", -1],
  ]) {
    document.querySelector(`[aria-label="${label}"]`).click();
    await wait(30);
    const outgoing = document.querySelector(".testi-slide[data-leaving]");
    check(outgoing, "Outgoing testimonial disappeared immediately");
    const animation = outgoing.getAnimations()[0];
    animation.pause();
    animation.currentTime = 0;
    const cart = outgoing.querySelector(".testi-cart");
    const bubble = outgoing.querySelector(".testi-card:not(svg)");
    const tail = outgoing.querySelector("svg");
    const start = [cart, bubble, tail].map(
      (el) => el.getBoundingClientRect().left
    );
    animation.currentTime = 275;
    const delta = [cart, bubble, tail].map(
      (el, i) => el.getBoundingClientRect().left - start[i]
    );
    check(
      Math.abs(delta[0] - delta[1]) < 1 && Math.abs(delta[0] - delta[2]) < 1,
      "Bubble or tail detached from moving cart"
    );
    await wait(600);
    check(
      outgoing.hasAttribute("data-leaving") &&
        getComputedStyle(outgoing).opacity === "1",
      "Timer hid a still-visible outgoing slide"
    );
    animation.currentTime = 549;
    const scene = outgoing.parentElement.getBoundingClientRect();
    for (const el of [cart, bubble, tail]) {
      const box = el.getBoundingClientRect();
      check(
        sign === 1 ? box.left >= scene.right : box.right <= scene.left,
        "Content disappears before clearing the viewport"
      );
    }
    animation.finish();
    await wait(50);
    check(
      !outgoing.hasAttribute("data-leaving"),
      "Outgoing slide was not cleaned up after animationend"
    );
    results.push({ direction: label, cartAndBubbleClearViewport: true });
  }
  return { passed: true, results };
})();
