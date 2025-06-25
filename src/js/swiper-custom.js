import Swiper from 'swiper/bundle';
import 'swiper/css/bundle';

/**
 * Initializes a Swiper instance for a given HTML element.
 *
 * @param {string} selector - The CSS selector for the Swiper container (e.g., '.mySwiper' or '[data-swiper="my-slider"]').
 * @param {object} [options={}] - Custom Swiper options to override or extend the default ones.
 * @param {string} [nextElSelector=''] - The CSS selector for the 'Next' navigation button.
 * @param {string} [prevElSelector=''] - The CSS selector for the 'Previous' navigation button.
 * @returns {Swiper} The initialized Swiper instance.
 */
export function initializeSwiper(
  selector,
  options = {},
  nextElSelector = '',
  prevElSelector = ''
) {
  const swiperContainer = document.querySelector(`[data-swiper="${selector}"]`);

  if (!swiperContainer) {
    console.warn(`Swiper container with data-swiper="${selector}" not found.`);
    return null;
  }

  const nextButton = swiperContainer.parentElement.querySelector(
    `[${nextElSelector}]`
  );
  const prevButton = swiperContainer.parentElement.querySelector(
    `[${prevElSelector}]`
  );

  const defaultOptions = {
    direction: 'horizontal',
    slidesPerView: 1,
    spaceBetween: 0,
    loop: false,

    navigation: {},

    breakpoints: {
      0: {
        enabled: true,
        slidesPerView: 1,
        spaceBetween: 35,
        loop: true,
        centeredSlides: true,
      },
      1200: {
        enabled: false,
        slidesPerView: 2,
        spaceBetween: 152,
        loop: false,
      },
    },
  };

  const mergedOptions = { ...defaultOptions, ...options };

  if (nextButton || prevButton) {
    mergedOptions.navigation = {
      nextEl: nextButton,
      prevEl: prevButton,
    };
  } else {
    delete mergedOptions.navigation;
  }

  return new Swiper(swiperContainer, mergedOptions);
}
