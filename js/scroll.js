export function initScroll() {
  const scrollTopBtn = document.getElementById("scrollTopBtn");

  if (!scrollTopBtn) return;

  scrollTopBtn.addEventListener("click", (e) => {
    e.preventDefault();

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  });
}
