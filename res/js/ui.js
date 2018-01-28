$(function () {
    var navbarPos = $('.js-navbar').offset().top;
    $(window).on("scroll", function () {
        if ($(window).scrollTop() >= navbarPos) {
            $('.js-navbar').addClass("sticky");
            $('body').addClass("sticky")
        } else {
            $('.js-navbar').removeClass("sticky");
            $('body').removeClass("sticky");
        }
    });
});
