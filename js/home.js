// Код для ініціалізації слайдера відгуків з автогортанням та зупинкою при наведенні
const reviewsSlider = new Swiper(".reviews-block__slider", {
  slidesPerView: 1,
  spaceBetween: 30,
  grabCursor: true,
  loop: true,

  autoplay: {
    delay: 4000, // Слайд гортається кожні 4 секунди
    disableOnInteraction: false, // Автогортання не ламається після ручного кліку
    pauseOnMouseEnter: true, // МАГІЯ ТУТ: зупиняє гортання, коли мишка НАВЕДЕНА на слайдер
  },

  pagination: {
    el: ".reviews-block__pagination",
    clickable: true,
  },
});
