//here will by JavaScript code ...

let swiperImg = new Swiper('.image-slider', {

    pagination: {
        el: ".swiper-pagination",
        clickable: true,
        type:'bullets',
    },
    nested: true,
});
let swiperDescription = new Swiper('.text-slider', {
});

swiperImg.controller.control = swiperDescription;
swiperDescription.controller.control = swiperImg;