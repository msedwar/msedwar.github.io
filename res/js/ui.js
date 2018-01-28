const navTmpl = '<div class="nav-bar-wrapper js-navbar">\n' +
    '                <div class="nav-bar">\n' +
    '                    <a href="index.html">Home</a>\n' +
    '                    <a href="projects.html">Projects <span class="nav-bar-projects-pill js-navbar-projects">0</span></a>\n' +
    '                    <a href="about.html">About</a>\n' +
    '                    <a href="https://www.linkedin.com/in/matthew-edwards" target="_blank" style="float:right;">LinkedIn</a>\n' +
    '                </div>\n' +
    '            </div>';

function addNav() {
    $(navTmpl).appendTo('.halftone');
}

$(function () {
    addNav();
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
    $('.js-navbar-projects').html(getTotalProjects());
});
