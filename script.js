(() => {
  const y = document.getElementById("year");
  if (y) y.textContent = String(new Date().getFullYear());

  const dd = document.querySelector(".dropdown-details");
  if (!dd) return;

  document.addEventListener("click", (e) => {
    if (!dd.contains(e.target)) dd.removeAttribute("open");
  });

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") dd.removeAttribute("open");
  });
})();
