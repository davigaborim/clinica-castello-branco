function initCarousels() {
  const carousels = document.querySelectorAll<HTMLElement>("[data-carousel]");

  carousels.forEach((carousel) => {
    const track = carousel.querySelector<HTMLElement>("[data-carousel-track]");
    const prev = carousel.querySelector<HTMLButtonElement>("[data-carousel-prev]");
    const next = carousel.querySelector<HTMLButtonElement>("[data-carousel-next]");
    if (!track) return;

    const scrollByCard = (direction: 1 | -1) => {
      const card = track.querySelector<HTMLElement>("[data-carousel-item]");
      const distance = card ? card.getBoundingClientRect().width + 24 : track.clientWidth * 0.8;
      track.scrollBy({ left: distance * direction, behavior: "smooth" });
    };

    prev?.addEventListener("click", () => scrollByCard(-1));
    next?.addEventListener("click", () => scrollByCard(1));
  });
}

initCarousels();
