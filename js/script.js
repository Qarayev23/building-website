$(window).on('scroll', function () {
    function scrollTopBtn() {
        const scrollToTop = document.querySelector('.back-to-top')
        const scroll = window.scrollY

        if (scroll > 175) {
            scrollToTop.style.display = "block";
        } else {
            scrollToTop.style.display = "none";
        }

        scrollToTop.onclick = () => {
            window.scrollTo(0, 0)
        }
    }
    scrollTopBtn();

    function fixedHeader() {

        var headerTopBar = $('#top-bar').outerHeight();
        var headerOneTopSpace = $('.header-top').outerHeight();

        console.log(headerTopBar);
        console.log(headerOneTopSpace);
        var headerOneELement = $('.navbar');

        if ($(window).scrollTop() > headerTopBar + headerOneTopSpace) {
            $(headerOneELement).addClass('fixed');
            $('.header-top').css('margin-bottom', headerOneELement.outerHeight());
        } else {
            $(headerOneELement).removeClass('fixed');
            $('.header-top').css('margin-bottom', 0);
        }
    }
    fixedHeader()
    counter();
});

counter()
function counter() {
    var oTop;
    if ($('.counterUp').length !== 0) {
        oTop = $('.counterUp').offset().top - window.innerHeight;
    }

    if ($(window).scrollTop() > oTop) {
        $('.counterUp').each(function () {
            var $this = $(this),
                countTo = $this.attr('data-count');
            $({
                countNum: $this.text()
            }).animate({
                countNum: countTo
            }, {
                duration: 1000,
                easing: 'swing',
                step: function () {
                    $this.text(Math.floor(this.countNum));
                },
                complete: function () {
                    $this.text(this.countNum);
                }
            });
        });
    }
}

function navSearch() {
    $('.nav-search button').on('click', function () {
        $('.search-block').fadeToggle();
    });
}
navSearch();