// year
(() => {
  const y = document.getElementById("year");
  if (y) y.textContent = new Date().getFullYear();
})();

// dropdown UX: закрывать меню после клика по пункту + клик снаружи
(() => {
  const details = document.getElementById("booking");
  if (!details) return;

  const close = () => { details.open = false; };

  details.addEventListener("click", (e) => {
    const a = e.target.closest("a");
    if (a) close();
  });

  document.addEventListener("click", (e) => {
    if (!details.open) return;
    if (!e.target.closest("#booking")) close();
  });

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") close();
  });
})();
