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

// лёгкий 3D tilt для хижины
(() => {
  const target = document.getElementById("parallaxTarget");
  if (!target) return;

  const prefersReduce = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  if (prefersReduce) return;

  const isTouch = window.matchMedia && window.matchMedia("(hover: none)").matches;

  const clamp = (v, min, max) => Math.max(min, Math.min(max, v));

  // desktop: наклон по мыши
  if (!isTouch) {
    const onMove = (e) => {
      const r = target.getBoundingClientRect();
      const px = (e.clientX - r.left) / r.width;
      const py = (e.clientY - r.top) / r.height;

      const ry = clamp((px - 0.5) * 10, -6, 6);
      const rx = clamp((0.5 - py) * 10, -6, 6);

      target.style.setProperty("--rx", rx.toFixed(2) + "deg");
      target.style.setProperty("--ry", ry.toFixed(2) + "deg");
    };

    const onLeave = () => {
      target.style.setProperty("--rx", "0deg");
      target.style.setProperty("--ry", "0deg");
    };

    target.addEventListener("mousemove", onMove);
    target.addEventListener("mouseleave", onLeave);
    return;
  }

  // mobile: очень мягкий tilt по deviceorientation (если браузер разрешит)
  const enableDeviceTilt = async () => {
    try {
      if (typeof DeviceOrientationEvent !== "undefined" &&
          typeof DeviceOrientationEvent.requestPermission === "function") {
        // iOS: нужно разрешение по жесту — но мы не навязываем, просто пробуем тихо
        // если будет ошибка — ничего страшного, останется анимация "дыхания"
        return;
      }

      window.addEventListener("deviceorientation", (ev) => {
        const beta = ev.beta ?? 0;  // наклон вперед/назад
        const gamma = ev.gamma ?? 0; // наклон влево/вправо

        const rx = clamp((beta - 10) / 25 * 6, -5, 5);
        const ry = clamp(gamma / 25 * 6, -5, 5);

        target.style.setProperty("--rx", rx.toFixed(2) + "deg");
        target.style.setProperty("--ry", ry.toFixed(2) + "deg");
      }, { passive: true });
    } catch {
      // ничего не делаем
    }
  };

  enableDeviceTilt();
})();
