function initReveal() {
  const targets = document.querySelectorAll<HTMLElement>("[data-reveal]");
  if (!targets.length) return;

  const observer = new IntersectionObserver(
    (entries) => {
      for (const entry of entries) {
        if (entry.isIntersecting) {
          const el = entry.target as HTMLElement;
          const delay = el.dataset.revealDelay;
          if (delay) el.style.transitionDelay = `${delay}ms`;
          el.classList.add("is-visible");
          observer.unobserve(el);
        }
      }
    },
    { threshold: 0.15, rootMargin: "0px 0px -60px 0px" }
  );

  for (const el of targets) observer.observe(el);
}

// Modulos <script> do Astro sao carregados com type="module" (equivalente a
// `defer`), entao o DOM ja esta pronto quando este codigo roda -- nao ha
// necessidade de esperar DOMContentLoaded. `astro:page-load` so dispara com
// View Transitions ativas, o que este site nao usa.
initReveal();
