function initHeaderScroll() {
  const header = document.querySelector<HTMLElement>("[data-site-header]");
  if (!header) return;

  const THRESHOLD = 40;

  const update = () => {
    header.classList.toggle("is-scrolled", window.scrollY > THRESHOLD);
  };

  update();
  window.addEventListener("scroll", update, { passive: true });
}

initHeaderScroll();
