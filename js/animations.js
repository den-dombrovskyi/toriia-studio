export function initAnimations() {
  const { gsap, ScrollTrigger } = window;

  if (!gsap || !ScrollTrigger) {
    console.warn("GSAP или ScrollTrigger не загружены");
    return;
  }

  gsap.registerPlugin(ScrollTrigger);


// Появление фотографии
gsap.from(".about__image-wrapper", {
  opacity: 0,
  scale: 0.94,
  duration: 1,
  ease: "power2.out",
  scrollTrigger: {
    trigger: ".about__image-wrapper",
    start: "top 85%",
    once: true,
  },
});

// Появление текстового блока
gsap.from(".about__content > *:not(.about__services)", {
  opacity: 0,
  y: 25,
  duration: 0.7,
  stagger: 0.15,
  ease: "power2.out",
  scrollTrigger: {
    trigger: ".about__content",
    start: "top 85%",
    once: true,
  },
});

// Последовательное появление услуг
gsap.from(".about__list li", {
  opacity: 0,
  x: -20,
  duration: 0.6,
  stagger: 0.12,
  ease: "power2.out",
  scrollTrigger: {
    trigger: ".about__services",
    start: "top 85%",
    once: true,
  },
});

// Появление фотографий топ-мастера
gsap.from(".top-master-gallery__item", {
  opacity: 0,
  scale: 0.94,
  duration: 0.8,
  stagger: 0.2,
  ease: "power2.out",
  scrollTrigger: {
    trigger: ".top-master-gallery",
    start: "top 85%",
    once: true,
  },
});

// Появление имени мастера
gsap.from("#top-master .master__name", {
  opacity: 0,
  y: 25,
  duration: 0.7,
  ease: "power2.out",
  scrollTrigger: {
    trigger: ".master__name",
    start: "top 85%",
    once: true,
  },
});

// Последовательное появление текста мастера
gsap.from("#top-master .master__content > p", {
  opacity: 0,
  y: 25,
  duration: 0.7,
  stagger: 0.18,
  ease: "power2.out",
  scrollTrigger: {
    trigger: ".master__content",
    start: "top 85%",
    once: true,
  },
});

// Появление фотографий мастера Вики
gsap.from("#master .master-gallery__item", {
  opacity: 0,
  scale: 0.94,
  duration: 0.8,
  stagger: 0.2,
  ease: "power2.out",
  scrollTrigger: {
    trigger: "#master .master-gallery",
    start: "top 85%",
    once: true,
  },
});

// Появление имени Вики
gsap.from("#master .master__name", {
  opacity: 0,
  y: 25,
  duration: 0.7,
  ease: "power2.out",
  scrollTrigger: {
    trigger: "#master .master__name",
    start: "top 85%",
    once: true,
  },
});

// Последовательное появление текста Вики
gsap.from("#master .master__content > p", {
  opacity: 0,
  y: 25,
  duration: 0.7,
  stagger: 0.18,
  ease: "power2.out",
  scrollTrigger: {
    trigger: "#master .master__content",
    start: "top 85%",
    once: true,
  },
});

// Появление карточек прайса Топ Майстер
gsap.utils.toArray("#price-top .price-card").forEach((card) => {
  gsap.from(card, {
    opacity: 0,
    y: 35,
    duration: 0.8,
    ease: "power2.out",
    scrollTrigger: {
      trigger: card,
      start: "top 85%",
      once: true,
    },
  });
});

// Появление фотографий в прайсе Топ Майстер
gsap.utils.toArray("#price-top .price-card__image-wrapper").forEach((image) => {
  gsap.from(image, {
    opacity: 0,
    scale: 0.94,
    duration: 0.9,
    ease: "power2.out",
    scrollTrigger: {
      trigger: image,
      start: "top 85%",
      once: true,
    },
  });
});

// Появление карточек прайса Майстер
gsap.utils.toArray("#price-master .price-card").forEach((card) => {
  gsap.from(card, {
    opacity: 0,
    y: 35,
    duration: 0.8,
    ease: "power2.out",
    scrollTrigger: {
      trigger: card,
      start: "top 85%",
      once: true,
    },
  });
});

// Появление фотографий в прайсе Майстер
gsap.utils
  .toArray("#price-master .price-card__image-wrapper")
  .forEach((image) => {
    gsap.from(image, {
      opacity: 0,
      scale: 0.94,
      duration: 0.9,
      ease: "power2.out",
      scrollTrigger: {
        trigger: image,
        start: "top 85%",
        once: true,
      },
    });
  });

// Появление карточки прайса Брови
gsap.from("#price-brows .price-card", {
  opacity: 0,
  y: 35,
  duration: 0.8,
  ease: "power2.out",
  scrollTrigger: {
    trigger: "#price-brows .price-card",
    start: "top 85%",
    once: true,
  },
});

// Появление фотографии в прайсе Брови
gsap.from("#price-brows .price-card__image-wrapper", {
  opacity: 0,
  scale: 0.94,
  duration: 0.9,
  ease: "power2.out",
  scrollTrigger: {
    trigger: "#price-brows .price-card__image-wrapper",
    start: "top 85%",
    once: true,
  },
});

// Появление фотографий секции Брови
gsap.from("#brows .brows-gallery__item", {
  opacity: 0,
  scale: 0.94,
  duration: 0.8,
  stagger: 0.2,
  ease: "power2.out",
  scrollTrigger: {
    trigger: "#brows .brows-gallery",
    start: "top 85%",
    once: true,
  },
});

// Появление заголовка секции Брови
gsap.from("#brows .brows__name", {
  opacity: 0,
  y: 25,
  duration: 0.7,
  ease: "power2.out",
  scrollTrigger: {
    trigger: "#brows .brows__name",
    start: "top 85%",
    once: true,
  },
});

// Последовательное появление текстовых абзацев секции Брови
gsap.from("#brows .brows__content > p", {
  opacity: 0,
  y: 25,
  duration: 0.7,
  stagger: 0.18,
  ease: "power2.out",
  scrollTrigger: {
    trigger: "#brows .brows__content",
    start: "top 85%",
    once: true,
  },
});

// Последовательное появление списка услуг секции Брови
gsap.from("#brows .brows__list li", {
  opacity: 0,
  x: -20,
  duration: 0.6,
  stagger: 0.15,
  ease: "power2.out",
  scrollTrigger: {
    trigger: "#brows .brows__list",
    start: "top 85%",
    once: true,
  },
});

// Появление карточки контактов
gsap.from("#contacts .contacts__card", {
  opacity: 0,
  y: 35,
  duration: 0.8,
  ease: "power2.out",
  scrollTrigger: {
    trigger: "#contacts .contacts__card",
    start: "top 85%",
    once: true,
  },
});

// Появление заголовка и подзаголовка контактов
gsap.from("#contacts .contacts__title, #contacts .contacts__subtitle", {
  opacity: 0,
  y: 20,
  duration: 0.7,
  stagger: 0.2,
  ease: "power2.out",
  scrollTrigger: {
    trigger: "#contacts .contacts__title",
    start: "top 85%",
    once: true,
  },
});

// Последовательное появление контактных ссылок
gsap.from("#contacts .contacts__row", {
  opacity: 0,
  y: 25,
  duration: 0.7,
  stagger: 0.15,
  ease: "power2.out",
  scrollTrigger: {
    trigger: "#contacts .contacts__list-wrapper",
    start: "top 85%",
    once: true,
  },
});

// Появление карточки адреса
gsap.from("#address .address__card", {
  opacity: 0,
  y: 35,
  duration: 0.8,
  ease: "power2.out",
  scrollTrigger: {
    trigger: "#address .address__card",
    start: "top 85%",
    once: true,
  },
});

// Появление заголовка, подзаголовка и адреса
gsap.from(
  "#address .address__title, #address .address__subtitle, #address .address__row",
  {
    opacity: 0,
    y: 20,
    duration: 0.7,
    stagger: 0.2,
    ease: "power2.out",
    scrollTrigger: {
      trigger: "#address .address__title",
      start: "top 85%",
      once: true,
    },
  },
);

// Появление карты Google Maps
gsap.from("#address .address__map-wrapper", {
  opacity: 0,
  y: 30,
  duration: 0.9,
  ease: "power2.out",
  scrollTrigger: {
    trigger: "#address .address__map-wrapper",
    start: "top 85%",
    once: true,
  },
});
};
