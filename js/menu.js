export function initMenu() {
  const drawer = document.getElementById("menu-drawer");
  const openBtn = document.getElementById("drawer-open");
  const overlay = document.getElementById("drawer-overlay");

  if (!drawer || !openBtn) return;

  // Открытие и закрытие меню
  openBtn.addEventListener("click", () => {
    drawer.classList.toggle("is-open");
    openBtn.classList.toggle("is-active");

    document.body.classList.toggle(
      "no-scroll",
      drawer.classList.contains("is-open"),
    );
  });

  // Закрытие меню
  const closeMenu = () => {
    drawer.classList.remove("is-open");
    openBtn.classList.remove("is-active");
    document.body.classList.remove("no-scroll");
  };

  // Закрытие по клику на затемнение
  if (overlay) {
    overlay.addEventListener("click", closeMenu);
  }

  // Раскрытие подменю
  const dropdownBtns = document.querySelectorAll(".drawer-dropdown__btn");

  dropdownBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
      btn.parentElement.classList.toggle("is-open");
    });
  });

  // Закрытие меню после перехода по ссылке
  const drawerLinks = document.querySelectorAll(".drawer-link");

  drawerLinks.forEach((link) => {
    link.addEventListener("click", closeMenu);
  });
}
