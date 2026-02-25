(() => {
  // Year
  const y = document.getElementById("year");
  if (y) y.textContent = String(new Date().getFullYear());

  // Optional: close dropdown when clicking outside (for <details>)
  const dd = document.querySelector(".dropdown-details");
  if (!dd) return;

  document.addEventListener("click", (e) => {
    const clickedInside = dd.contains(e.target);
    if (!clickedInside) dd.removeAttribute("open");
  });

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") dd.removeAttribute("open");
  });
})();
