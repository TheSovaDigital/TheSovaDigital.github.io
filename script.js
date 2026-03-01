(() => {
  // год в футере
  const y = document.getElementById("year");
  if (y) y.textContent = new Date().getFullYear();

  // Закрывать dropdown "Записаться" при клике вне
  const details = document.getElementById("booking");
  if (details) {
    document.addEventListener("click", (e) => {
      if (!details.open) return;
      const within = details.contains(e.target);
      if (!within) details.open = false;
    });

    // Закрывать после клика по пункту меню
    details.addEventListener("click", (e) => {
      const a = e.target.closest("a");
      if (a) details.open = false;
    });
  }
})();
