var swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    loop: true,
    speed: 500,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
        hideOnClick: true,
        hiddenClass: 'my-button-hidden'
    },
    autoplay: {
        delay: 4000,
        disableOnInteraction: false,
    },
    on: {
        init: function () {
            setTimeout(() => {
                document.querySelector(".swiper-slide-active .slide-title").classList.add("animate__slideInLeft")
                document.querySelector(".swiper-slide-active .slide-sub-title").classList.add("animate__slideInRight")
                document.querySelector(".swiper-slide-active .button-holder").classList.add("animate__slideInLeft")
                document.querySelector(".slide-title-box").classList.add("animate__fadeInDownBig")
            }, 1);

            setTimeout(() => {
                document.querySelector(".swiper-slide-active .slide-title").classList.remove("animate__slideInLeft")
                document.querySelector(".swiper-slide-active .slide-sub-title").classList.remove("animate__slideInRight")
                document.querySelector(".swiper-slide-active .button-holder").classList.remove("animate__slideInLeft")
                document.querySelector(".slide-title-box").classList.remove("animate__fadeInDownBig")
            }, 1000);
        },
    },
});

swiper.on('slideChange', function () {
    setTimeout(() => {
        document.querySelector(".swiper-slide-active .slide-title").classList.add("animate__slideInLeft")
        document.querySelector(".swiper-slide-active .slide-sub-title").classList.add("animate__slideInRight")
        document.querySelector(".swiper-slide-active .button-holder").classList.add("animate__slideInLeft")
        document.querySelector(".slide-title-box").classList.add("animate__fadeInDownBig")
    }, 1);

    setTimeout(() => {
        document.querySelector(".swiper-slide-active .slide-title").classList.remove("animate__slideInLeft")
        document.querySelector(".swiper-slide-active .slide-sub-title").classList.remove("animate__slideInRight")
        document.querySelector(".swiper-slide-active .button-holder").classList.remove("animate__slideInLeft")
        document.querySelector(".slide-title-box").classList.remove("animate__fadeInDownBig")
    }, 1000);
});

swiper.el.onmouseover = function () {
    swiper.navigation.$nextEl.removeClass('swiper-button-hide');
    swiper.navigation.$prevEl.removeClass('swiper-button-hide');
}
swiper.el.onmouseout = function () {
    swiper.navigation.$nextEl.addClass('swiper-button-hide');
    swiper.navigation.$prevEl.addClass('swiper-button-hide');
}

var swiper2 = new Swiper(".mySwiper2", {
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
});