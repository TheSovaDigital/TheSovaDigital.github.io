// script.js

// год в футере
(() => {
  const y = document.getElementById("year");
  if (y) y.textContent = new Date().getFullYear();
})();

// закрытие dropdown по клику вне
(() => {
  document.addEventListener("click", (e) => {
    const dd = document.querySelector(".dropdown-details");
    if (!dd) return;
    if (!dd.contains(e.target)) dd.removeAttribute("open");
  });
})();

// лёгкий 3D tilt для хижины (очень мягко)
(() => {
  const target = document.getElementById("parallaxTarget");
  if (!target) return;

  const prefersReduce = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  if (prefersReduce) return;

  const isTouch = window.matchMedia && window.matchMedia("(hover: none)").matches;
  const clamp = (v, min, max) => Math.max(min, Math.min(max, v));

  if (!isTouch) {
    target.addEventListener("mousemove", (e) => {
      const r = target.getBoundingClientRect();
      const px = (e.clientX - r.left) / r.width;
      const py = (e.clientY - r.top) / r.height;

      const ry = clamp((px - 0.5) * 10, -6, 6);
      const rx = clamp((0.5 - py) * 10, -6, 6);

      target.style.setProperty("--rx", rx.toFixed(2) + "deg");
      target.style.setProperty("--ry", ry.toFixed(2) + "deg");
    });

    target.addEventListener("mouseleave", () => {
      target.style.setProperty("--rx", "0deg");
      target.style.setProperty("--ry", "0deg");
    });
  }
})();
