const swiper = new Swiper(".teamSwiper", {
  slidesPerView: 4,
  spaceBetween: 40,

  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },

  breakpoints: {
    0: {
      slidesPerView: 1,
      spaceBetween: 20,
    },

    768: {
      slidesPerView: 3,
      spaceBetween: 30,
    },

    1024: {
      slidesPerView: 4,
      spaceBetween: 40,
    },
  },
});
