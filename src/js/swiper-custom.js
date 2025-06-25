import Swiper from 'swiper/bundle';
import 'swiper/css/bundle';

/**
 * Initializes a Swiper instance for a given HTML element.
 *
 * @param {string} selector - The CSS selector for the Swiper container (e.g., '.mySwiper').
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
  // Define the default configuration for Swiper.
  // These options will apply unless explicitly overridden by the 'options' parameter
  // or by breakpoint-specific settings.
  const defaultOptions = {
    direction: 'horizontal', // Default direction is horizontal
    slidesPerView: 1, // Default number of slides visible at once
    spaceBetween: 0, // Default space between slides
    loop: false, // Default loop mode is off

    // Default navigation elements. These will be overridden if specific selectors are provided.
    navigation: {
      nextEl: nextElSelector,
      prevEl: prevElSelector,
    },

    // Breakpoint-specific configurations.
    // Swiper will apply these settings when the viewport width matches.
    breakpoints: {
      // Configuration for mobile and smaller screens (0px to 1199px)
      0: {
        enabled: true, // Swiper is active on these screens
        slidesPerView: 1, // Show one slide
        spaceBetween: 35, // 35px space between slides
        loop: true, // Loop mode is enabled for mobile
      },
      // Configuration for desktop screens (1200px and wider)
      1200: {
        enabled: false, // Swiper is disabled on desktop, allowing CSS to control layout
        slidesPerView: 2, // (These don't apply when enabled: false, but keep for clarity/future use)
        spaceBetween: 152, // (These don't apply when enabled: false)
        loop: false, // Loop mode is disabled for desktop
      },
    },
  };

  // Merge default options with any custom options provided.
  // Custom options will override default ones if there are conflicts.
  const mergedOptions = { ...defaultOptions, ...options };

  // If navigation selectors are provided, ensure they are correctly set in the merged options.
  // This handles cases where only one of nextElSelector or prevElSelector might be provided.
  if (nextElSelector || prevElSelector) {
    mergedOptions.navigation = {
      nextEl: nextElSelector || defaultOptions.navigation.nextEl,
      prevEl: prevElSelector || defaultOptions.navigation.prevEl,
    };
  } else {
    // If no navigation selectors are provided, remove the navigation object
    // to prevent Swiper from looking for non-existent buttons.
    delete mergedOptions.navigation;
  }

  // Initialize and return the Swiper instance.
  return new Swiper(selector, mergedOptions);
}
