function initMobileMenu() {
  const toggle = document.querySelector<HTMLButtonElement>("[data-menu-toggle]");
  const panel = document.querySelector<HTMLElement>("[data-menu-panel]");
  if (!toggle || !panel) return;

  const close = () => {
    panel.classList.add("hidden");
    toggle.setAttribute("aria-expanded", "false");
  };

  toggle.addEventListener("click", () => {
    const isOpen = !panel.classList.contains("hidden");
    panel.classList.toggle("hidden");
    toggle.setAttribute("aria-expanded", String(!isOpen));
  });

  panel.querySelectorAll("a").forEach((link) => link.addEventListener("click", close));
}

initMobileMenu();
