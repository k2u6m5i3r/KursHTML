//here will by JavaScript code ...

let swiperImg = new Swiper('.image-slider', {
    // slidesPerView: 1,
    // spaceBetween: 30,
    // loop: true,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    // navigation: {
    //     nextEl: ".swiper-button-next",
    //     prevEl: ".swiper-button-prev",
    // },
    nested: true,
});
let swiperDescription = new Swiper('.text-slider', {

});

swiperImg.controller.control = swiperDescription;
swiperDescription.controller.control = swiperImg;