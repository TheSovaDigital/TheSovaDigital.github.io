})();

(() => {
  document.addEventListener("click", (e) => {
    const dd = document.querySelector(".dropdown-details");
    if (!dd) return;
    if (!dd.contains(e.target)) dd.removeAttribute("open");
  const btn = document.getElementById("ctaBtn");
  const menu = document.getElementById("ctaMenu");
  if (!btn || !menu) return;

  const close = () => {
    menu.classList.remove("is-open");
    btn.setAttribute("aria-expanded", "false");
  };

  const open = () => {
    menu.classList.add("is-open");
    btn.setAttribute("aria-expanded", "true");
  };

  btn.addEventListener("click", (e) => {
    e.stopPropagation();
    if (menu.classList.contains("is-open")) close();
    else open();
  });

  // закрытие по клику вне
  document.addEventListener("click", () => close());

  // закрытие по Esc
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") close();
  });

  // не закрывать при клике внутри меню
  menu.addEventListener("click", (e) => e.stopPropagation());
})();
