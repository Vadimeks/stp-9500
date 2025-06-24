import Swiper from 'swiper/bundle';
import 'swiper/css/bundle';

const swiper = new Swiper('.mySwiper', {
  direction: 'horizontal',
  slidesPerView: 1,
  spaceBetween: 0,
  loop: false,

  navigation: {
    nextEl: '.join-button.swiper-button-next',
    prevEl: '.join-button.swiper-button-prev',
  },

  breakpoints: {
    0: {
      enabled: true,
      slidesPerView: 1,
      spaceBetween: 35,
      loop: true,
    },

    1200: {
      enabled: false,
      slidesPerView: 3,
      spaceBetween: 153,
      loop: false,
    },
  },
});
