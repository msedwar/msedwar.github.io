const navTmpl = '<div class="nav-bar-wrapper js-navbar animated fadeIn">\n' +
    '                <div class="nav-bar">\n' +
    '                    <a href="index.html" class="animated bounceInLeft"  data-trigger="hover" data-toggle="tooltip" data-placement="bottom" title="Home"><i class="fas fa-home"></i></a>\n' +
    '                    <a href="projects.html" class="animated bounceInLeft">Projects <span class="nav-bar-projects-pill js-navbar-projects">0</span></a>\n' +
    '                    <a href="about.html" class="animated bounceInLeft">About Me</a>\n' +
    '                    <a href="awards.html" class="animated bounceInLeft">Awards</a>\n' +
    // '                    <a href="index.html">More...</a>\n' +
    '                    <a href="https://www.linkedin.com/in/matthew-edwards" target="_blank" style="float:right;" class="animated bounceInRight" data-trigger="hover" data-toggle="tooltip" data-placement="bottom" title="LinkedIn"><i class="fab fa-linkedin"></i></a>\n' +
    '                    <a href="https://gitlab.eecs.umich.edu/msedwar" target="_blank" style="float:right;" class="animated bounceInRight" data-trigger="hover" data-toggle="tooltip" data-placement="bottom" title="GitLab"><i class="fab fa-gitlab"></i></a>\n' +
    '                    <a href="https://github.com/msedwar" target="_blank" style="float:right;" class="animated bounceInRight" data-trigger="hover" data-toggle="tooltip" data-placement="bottom" title="GitHub"><i class="fab fa-github"></i></a>\n' +
    '                </div>\n' +
    '            </div>';
const footerTmpl =
    '<div class="halftone-divider"></div>\n' +
    '<div class="footer">\n' +
    '    <div class="footer-container">\n' +
    '        <div class="footer-copyright">&copy; Copyright 2017-2019 by Matthew Edwards, All Rights Reserved</div>\n' +
    '        <br />\n' +
    '        Third-party trademarks are the property of their respective third-party owners. Presence of a third-party trademark does not mean that I have any relationship with that third-party or that the third-party endorses me or my services.\n' +
    '    </div>\n' +
    '</div>';

const breakdownTmpl = '<div class="breakdown animated fadeInUp"></div>';
const breakdownLabelContainerTmpl = '<div class="breakdown-label-container"></div>';
const breakdownBarTmpl = '<div class="progress"></div>';

const LANG_COLOR = {
    "Java": "#e9a823",
    "Javascript": "#f1e05a",
    "C++": "#3572A5",
    "C": "#f34b7d",
    "C#": "#178600",
    "Python": "#654fa5",
    "Shell": "#89e051",
    "Other": "#555555"
};

const githubTmpl = '<a href="https://github.com/msedwar/msedwar.github.io" target="_blank" aria-label="View source on Github" class="no-print github-corner animated fadeIn">\n' +
    '            <svg width="75" height="75" viewBox="0 0 250 250" style="fill:#151513; color:#fff; position: fixed; top: 0; border: 0; right: 0; z-index: 1000"\n' +
    '                 aria-hidden="true">\n' +
    '                <path d="M0,0 L115,115 L130,115 L142,142 L250,250 L250,0 Z"></path>\n' +
    '                <path d="M128.3,109.0 C113.8,99.7 119.0,89.6 119.0,89.6 C122.0,82.7 120.5,78.6 120.5,78.6 C119.2,72.0 123.4,76.3 123.4,76.3 C127.3,80.9 125.5,87.3 125.5,87.3 C122.9,97.6 130.6,101.9 134.4,103.2"\n' +
    '                      fill="currentColor" style="transform-origin: 130px 106px;" class="octo-arm"></path>\n' +
    '                <path d="M115.0,115.0 C114.9,115.1 118.7,116.5 119.8,115.4 L133.7,101.6 C136.9,99.2 139.9,98.4 142.2,98.6 C133.8,88.0 127.5,74.4 143.8,58.0 C148.5,53.4 154.0,51.2 159.7,51.0 C160.3,49.4 163.2,43.6 171.4,40.1 C171.4,40.1 176.1,42.5 178.8,56.2 C183.1,58.6 187.2,61.8 190.9,65.4 C194.5,69.0 197.7,73.2 200.1,77.6 C213.8,80.2 216.3,84.9 216.3,84.9 C212.7,93.1 206.9,96.0 205.4,96.6 C205.1,102.4 203.0,107.8 198.3,112.5 C181.9,128.9 168.3,122.5 157.7,114.1 C157.9,116.9 156.7,120.9 152.7,124.9 L141.0,136.5 C139.8,137.7 141.6,141.9 141.8,141.8 Z"\n' +
    '                      fill="currentColor" class="octo-body"></path>\n' +
    '            </svg>\n' +
    '        </a>\n' +
    '        <style>\n' +
    '            .github-corner:hover .octo-arm {\n' +
    '                animation: octocat-wave 560ms ease-in-out\n' +
    '            }\n' +
    '\n' +
    '            .github-corner.ot-hover .octo-arm {\n' +
    '                animation: octocat-wave 560ms ease-in-out\n' +
    '            }\n' +
    '\n' +
    '            @keyframes octocat-wave {\n' +
    '                0%,\n' +
    '                100% {\n' +
    '                    transform: rotate(0)\n' +
    '                }\n' +
    '                20%,\n' +
    '                60% {\n' +
    '                    transform: rotate(-25deg)\n' +
    '                }\n' +
    '                40%,\n' +
    '                80% {\n' +
    '                    transform: rotate(10deg)\n' +
    '                }\n' +
    '            }\n' +
    '\n' +
    '            @media (max-width: 500px) {\n' +
    '                .github-corner:hover .octo-arm {\n' +
    '                    animation: none\n' +
    '                }\n' +
    '\n' +
    '                .github-corner .octo-arm {\n' +
    '                    animation: octocat-wave 560ms ease-in-out\n' +
    '                }\n' +
    '            }\n' +
    '        </style>';

function addNav() {
    if ($('.halftone').length) {
        $(navTmpl).appendTo('.halftone');
    } else {
        $(navTmpl).appendTo('.js-landing');
    }
}

function addFooter() {
    $(footerTmpl).appendTo('body');
}

function sortProperties(obj)
{
    var sortable=[];
    for(var key in obj) {
        if(obj.hasOwnProperty(key)) {
            sortable.push([key, obj[key]]);
        }
    }

    sortable.sort(function(a, b)
    {
        return b[1]-a[1];
    });
    return sortable;
}

function addLanguageBreakdown(container) {
    var breakdown = getLanguageBreakdown();
    var sorted = sortProperties(breakdown);
    var $breakdown = $(breakdownTmpl);
    var $breakdownLabelContainer = $(breakdownLabelContainerTmpl);
    var $bar = $(breakdownBarTmpl);
    var percentLeft = 100;
    for (var i = 0; i < sorted.length; ++i) {
        if (sorted[i][0] !== "_total") {
            var percent = Math.round(sorted[i][1] / breakdown._total * 1000);
            percent /= 10;
            percentLeft -= percent;
            if (percentLeft < 0) {
                percent -= -percentLeft;
            }
            var $langBar = $('<div class="progress-bar" style="width:0;'
                + 'background-color:' + (LANG_COLOR.hasOwnProperty(sorted[i][0]) ? LANG_COLOR[sorted[i][0]] : LANG_COLOR["Other"])
                + ';"></div>'
            );
            $langBar.appendTo($bar);
            $langBar.animate({"width": percent + "%"}, 1500, "swing");
            var $langLabel = $('<div class="breakdown-label"><span class="breakdown-label-pill" style="background-color:'
                + (LANG_COLOR.hasOwnProperty(sorted[i][0]) ? LANG_COLOR[sorted[i][0]] : LANG_COLOR["Other"]) + ';"></span>' + sorted[i][0] + '<span class="breakdown-label-percent">' + Math.round(percent * 10) / 10 + '%</span></div>');
            $langLabel.appendTo($breakdownLabelContainer);
        }
    }
    $breakdownLabelContainer.appendTo($breakdown);
    $bar.appendTo($breakdown);
    $breakdown.appendTo(container);
}

function scrollToTop() {
    $("html, body").animate({ scrollTop: 0 }, "slow");
    return false;
}

$(function () {
    addNav();
    addFooter();
    var navbarPos = $('.js-navbar').offset().top;
    $(window).on("scroll", function () {
        if ($(window).scrollTop() >= navbarPos) {
            $('.js-navbar').addClass("sticky");
        } else {
            $('.js-navbar').removeClass("sticky");
        }
    });

    if ($('.js-toc').length) {
        var tocPos = $('.js-toc').offset().top - 82;
        $(window).on("scroll", function () {
            if ($(window).scrollTop() >= tocPos) {
                $('.js-toc').addClass("sticky");
                $('.js-toc-placeholder').addClass("sticky");
            } else {
                $('.js-toc').removeClass("sticky");
                $('.js-toc-placeholder').removeClass("sticky");
            }
        });
        $('.js-toc-placeholder').height($('.js-toc').outerHeight());
        $('<li><a class="nav-link" onclick="scrollToTop()"><i class="fas fa-angle-double-up"></i>&nbsp;&nbsp;Back to Top</a></li>').appendTo($('.js-toc').children('.nav'));
    }

    $('.js-navbar-projects').html(getTotalProjects());
    $(githubTmpl).appendTo($('body'));
    $('[data-toggle="tooltip"]').tooltip();

    setTimeout(function() {
        // Make Octocat wave
        $('.github-corner').addClass('ot-hover');
        setTimeout(function() {
            $('.github-corner').removeClass('ot-hover');
        }, 500);
    }, 750);
});
