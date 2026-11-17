/** Run in the browser console / preview_evaluate at either layout. */
(async () => {
  const wait = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
  const check = (ok, message) => {
    if (!ok) throw new Error(message);
  };
  const select = (element) => {
    const range = document.createRange();
    range.selectNodeContents(element);
    getSelection().removeAllRanges();
    getSelection().addRange(range);
    check(
      getSelection().toString() === element.textContent,
      "Artwork text cannot be selected"
    );
    check(
      getComputedStyle(element).userSelect === "text",
      "Selection disabled"
    );
    check(
      getComputedStyle(element).color === "rgba(0, 0, 0, 0)",
      "Overlay changed visible artwork"
    );
  };
  const stats = [...document.querySelectorAll("#stats .artwork-label")];
  check(stats.length === 0, "Neon signs should not have selectable overlays");
  check(
    ![...document.querySelectorAll(".artwork-label")].some((e) =>
      e.textContent.includes("Visitor")
    ),
    "Booklet overlays should be removed"
  );
  getSelection().removeAllRanges();
  document
    .querySelector("#testimonials")
    .scrollIntoView({ behavior: "instant" });
  await wait(100);
  const base = document.querySelector(".testi-base");
  if (base) {
    const name = [...base.querySelectorAll(".artwork-label")].find((e) =>
      e.textContent.startsWith("Pascale")
    );
    select(name);
    name.click();
    await wait(50);
    check(
      !document.querySelector("[data-selected]"),
      "Selecting name opened cart"
    );
    getSelection().removeAllRanges();
    name.click();
    await wait(650);
    check(
      document.querySelector("[data-selected]"),
      "Normal cart click stopped working"
    );
  }
  const names = [];
  for (let i = 1; i <= 3; i++) {
    document.querySelector(`[aria-label="Testimonial ${i}"]`).click();
    await wait(650);
    const labels = [
      ...document.querySelectorAll(".testi-slide[data-active] .artwork-label"),
    ];
    check(
      labels.some((e) => /Pascale|Vaibhav|Qazi/.test(e.textContent)),
      "Missing stall name"
    );
    labels.forEach(select);
    names.push(
      labels.find((e) => /Pascale|Vaibhav|Qazi/.test(e.textContent)).textContent
    );
    getSelection().removeAllRanges();
  }
  return { passed: true, statsLabels: stats.length, names };
})();
