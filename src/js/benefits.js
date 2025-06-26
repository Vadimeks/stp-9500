import { initializeSwiper } from './swiper-custom.js';

document.addEventListener('DOMContentLoaded', () => {
  const rstSwiper = initializeSwiper(
    'rst-swiper',
    {
      grabCursor: true,

      observer: true,
      observeParents: true,
      observeSlideChildren: true,

      on: {
        init: function () {
          this.update();
        },

        slideChangeTransitionEnd: function () {
          this.update();
        },

        transitionEnd: function () {
          this.update();
        },
      },

      breakpoints: {
        0: {
          enabled: true,
          slidesPerView: 'auto',
          centeredSlides: true,
          spaceBetween: 10,
          loop: true,
        },
        1200: {
          enabled: true,
          spaceBetween: 12,
          slidesPerView: 'auto',
          centeredSlides: true,
          loop: true,
        },
      },
    },
    'data-rst-next-btn',
    'data-rst-prev-btn'
  );
});
