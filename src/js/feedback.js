import { initializeSwiper } from './swiper-custom.js';

const feedbackSwiper = initializeSwiper(
  'feedback-swiper',
  {
    breakpoints: {
      0: {
        enabled: true,
        direction: 'horizontal',
        slidesPerView: 1,
        spaceBetween: 36,
        loop: true,
        centeredSlides: true,
      },
      1200: {
        enabled: true,
        direction: 'vertical',
        slidesPerView: 3,
        spaceBetween: 16,
        loop: true,
        centeredSlides: false,
      },
    },
  },
  'data-swiper-feedback-button-next',
  'data-swiper-feedback-button-prev'
);
