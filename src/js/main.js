// use swiper slider to mail slider

import Swiper, { Navigation, Pagination } from 'swiper';
import imageSlider from './modules/imageSlider';


const swiper = new Swiper('.swiper', {
    modules: [Navigation, Pagination],
    slidesPerView: 4,
    rewind: true,
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    pagination: {
        el: '.cards_pagination',
        type: 'bullets',
        clickable: true,
    },
    breakpoints: {
        1420: {
            slidesPerView: 4
        },
        1024: {
            slidesPerView: 3
        },
        768: {
            slidesPerView: 2
        },
        320: {
            slidesPerView: 1
        }
    }

});

swiper.init();
imageSlider();