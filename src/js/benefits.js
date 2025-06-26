import { initializeSwiper } from './swiper-custom.js';

document.addEventListener('DOMContentLoaded', () => {
  const rstSwiper = initializeSwiper(
    'rst-swiper',
    {
      grabCursor: true,

      // Дадаем опцыі для больш дакладнага абнаўлення Swiper
      // Гэтыя опцыі дапамагаюць Swiper рэагаваць на змены DOM і пераразлічваць памеры
      observer: true, // Назірае за зменамі ўнутры самога Swiper
      observeParents: true, // Назірае за зменамі ў бацькоўскіх элементах Swiper
      observeSlideChildren: true, // Назірае за зменамі ў даччыных элементах слайдаў

      // Калі пасля анімацыі слайд "скача", можна паспрабаваць скінуць transition-duration
      // або паэксперыментаваць з хуткасцю.
      // Непасрэднае заданне transition-duration: 0 у CSS можа зламаць анімацыю.
      // Лепш кіраваць гэтым праз JS, калі ёсць такая неабходнасць.

      // Для перастрахоўкі, выклікаем update() пасля ініцыялізацыі
      on: {
        init: function () {
          this.update();
        },
        // А таксама пры кожным "slideChangeTransitionEnd" - калі анімацыя спынілася
        slideChangeTransitionEnd: function () {
          this.update(); // Прымушаем Swiper пераразлічыць пазіцыі пасля завяршэння пераходу
        },
        // Ці нават пры "transitionEnd", калі слайды візуальна не заканчваюць рух дакладна
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
          // centeredSlidesOffset: -26, // Выдаляем, бо пачатковая пазіцыя ідэальная
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
