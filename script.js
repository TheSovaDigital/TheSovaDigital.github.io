document.addEventListener("DOMContentLoaded", async () => {

  async function loadPart(id, file){
    const el = document.getElementById(id);
    if(!el) return;

    try{
      const res = await fetch(file, { cache: "no-cache" });
      if(!res.ok) throw new Error(file);
      const html = await res.text();
      el.innerHTML = html;
    }catch(err){
      console.error("Ошибка загрузки:", file, err);
    }
  }

  await loadPart("site-header","header.html");
  await loadPart("site-footer","footer.html");

  const year = document.getElementById("year");
  if(year) year.textContent = new Date().getFullYear();

  /* CTA меню на главной */
  const btn = document.getElementById("ctaBtn");
  const menu = document.getElementById("menu");

  if (btn && menu) {
    btn.addEventListener("click", (e) => {
      e.stopPropagation();
      const isOpen = menu.classList.toggle("show");
      btn.setAttribute("aria-expanded", isOpen ? "true" : "false");
    });

    document.addEventListener("click", (e) => {
      if (!menu.contains(e.target) && e.target !== btn) {
        menu.classList.remove("show");
        btn.setAttribute("aria-expanded", "false");
      }
    });

    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape") {
        menu.classList.remove("show");
        btn.setAttribute("aria-expanded", "false");
      }
    });
  }

  /* Drawer меню */
  const body = document.body;
  const toggle = document.getElementById("menuToggle");
  const closeBtn = document.getElementById("drawerClose");
  const drawer = document.getElementById("siteDrawer");
  const overlay = document.getElementById("drawerOverlay");

  if (toggle && closeBtn && drawer && overlay) {
    function openDrawer(){
      body.classList.add("menu-open");
      toggle.classList.add("active");
      toggle.setAttribute("aria-expanded", "true");
      drawer.classList.add("show");
      overlay.classList.add("show");
      drawer.setAttribute("aria-hidden", "false");
      overlay.setAttribute("aria-hidden", "false");
    }

    function closeDrawer(){
      body.classList.remove("menu-open");
      toggle.classList.remove("active");
      toggle.setAttribute("aria-expanded", "false");
      drawer.classList.remove("show");
      overlay.classList.remove("show");
      drawer.setAttribute("aria-hidden", "true");
      overlay.setAttribute("aria-hidden", "true");
    }

    toggle.addEventListener("click", () => {
      if (drawer.classList.contains("show")) closeDrawer();
      else openDrawer();
    });

    closeBtn.addEventListener("click", closeDrawer);
    overlay.addEventListener("click", closeDrawer);

    drawer.querySelectorAll("a").forEach((link) => {
      link.addEventListener("click", closeDrawer);
    });

    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape" && drawer.classList.contains("show")) {
        closeDrawer();
      }
    });
  }

});
