document.addEventListener("DOMContentLoaded", () => {

  const btn = document.getElementById("ctaBtn");
  const menu = document.getElementById("menu");

  if (!btn || !menu) return;

  const close = () => {
    menu.classList.remove("show");
    btn.setAttribute("aria-expanded", "false");
  };

  const toggle = (e) => {
    e.stopPropagation();
    const isOpen = menu.classList.toggle("show");
    btn.setAttribute("aria-expanded", isOpen);
  };

  btn.addEventListener("click", toggle);

  document.addEventListener("click", (e) => {
    if (!menu.contains(e.target) && e.target !== btn) {
      close();
    }
  });

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") close();
  });

});
