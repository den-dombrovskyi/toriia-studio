document.addEventListener("DOMContentLoaded", () => {
  const drawer = document.getElementById("menu-drawer");
  const openBtn = document.getElementById("drawer-open");
  const overlay = document.getElementById("drawer-overlay");

  // Переключение меню по клику на бургер/крестик
  openBtn.addEventListener("click", () => {
    drawer.classList.toggle("is-open");
    openBtn.classList.toggle("is-active");
    // Блокируем или возвращаем скролл страницы
    document.body.classList.toggle("no-scroll");
  });

  // Закрытие по клику на оверлей или ссылки
  const closeMenu = () => {
    drawer.classList.remove("is-open");
    openBtn.classList.remove("is-active");
    // Возвращаем скролл страницы
    document.body.classList.remove("no-scroll");
  };

  overlay.addEventListener("click", closeMenu);

  // Логіка розкриття підменю (Майстри / Прайс-лист)
  const dropdownBtns = document.querySelectorAll(".drawer-dropdown__btn");
  dropdownBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
      const parent = btn.parentElement;
      parent.classList.toggle("is-open");
    });
  });

  // Автоматичне закриття меню при кліку на будь-яке посилання
  const drawerLinks = document.querySelectorAll(".drawer-link");
  drawerLinks.forEach((link) => {
    link.addEventListener("click", () => {
      closeMenu();
    });
  });
});

// Плавный переход наверх при клике
document.getElementById("scrollTopBtn").addEventListener("click", function (e) {
  e.preventDefault();
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});
