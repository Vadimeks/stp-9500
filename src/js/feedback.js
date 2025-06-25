import { initializeSwiper } from './swiper-custom.js';

const feedbackSwiper = initializeSwiper(
  '.feedback-swipe-block',
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
  '.feedback-button.swiper-button-next',
  '.feedback-button.swiper-button-prev'
);
