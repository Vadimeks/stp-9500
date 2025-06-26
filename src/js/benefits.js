import Swiper from 'swiper';
import 'swiper/css';
import { Navigation } from 'swiper/modules';
import 'swiper/css/navigation';

document.addEventListener("DOMContentLoaded", () => {
    const benefitsSwiper = new Swiper('[data-rst-swiper]', {
        slidesPerView: 3,
        grabCursor: true,
        centeredSlides: true,
        modules: [Navigation],
        spaceBetween: 10,
        loop: true,
        navigation: {
            nextEl: '[data-rst-next-btn]',
            prevEl: '[data-rst-prev-btn]',
        },
        breakpoints: {
            1200: {
                spaceBetween: 12,
            },
        },
    });
});