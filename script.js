// script.js

(() => {
  const y = document.getElementById("year");
  if (y) y.textContent = new Date().getFullYear();
})();

(() => {
  document.addEventListener("click", (e) => {
    const dd = document.querySelector(".dropdown-details");
    if (!dd) return;
    if (!dd.contains(e.target)) dd.removeAttribute("open");
  });
})();
