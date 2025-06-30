import { initializeSwiper } from './swiper-custom.js';

document.addEventListener('DOMContentLoaded', () => {
  initializeSwiper(
    'rst-swiper',
    {
      grabCursor: true,
      observer: true,
      observeParents: true,
      observeSlideChildren: true,
      watchSlidesProgress: true,
      watchSlidesVisibility: true,

      breakpoints: {
        0: {
          enabled: true,
          slidesPerView: 'auto',
          centeredSlides: true,
          centeredSlidesBounds: true,
          spaceBetween: 30,
          loop: true,
        },
        1200: {
          enabled: true,
          slidesPerView: 'auto',
          centeredSlides: true,
          centeredSlidesBounds: true,
          spaceBetween: 120,
          loop: true,
        },
      },
    },
    'data-rst-next-btn',
    'data-rst-prev-btn'
  );
});
