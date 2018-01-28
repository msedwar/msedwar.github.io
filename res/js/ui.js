const navTmpl = '<div class="nav-bar-wrapper js-navbar">\n' +
    '                <div class="nav-bar">\n' +
    '                    <a href="index.html">Home</a>\n' +
    '                    <a href="projects.html">Projects <span class="nav-bar-projects-pill js-navbar-projects">0</span></a>\n' +
    '                    <a href="about.html">About</a>\n' +
    '                    <a href="awards.html">Awards</a>\n' +
    // '                    <a href="index.html">More...</a>\n' +
    '                    <a href="https://www.linkedin.com/in/matthew-edwards" target="_blank" style="float:right;">LinkedIn</a>\n' +
    '                </div>\n' +
    '            </div>';

const breakdownTmpl = '<div class="breakdown"></div>';
const breakdownLabelContainerTmpl = '<div class="breakdown-label-container"></div>';
const breakdownBarTmpl = '<div class="progress"></div>';

const LANG_COLOR = {
    "Java": "#e9a823",
    "Javascript": "#f1e05a",
    "C++": "#3572A5",
    "C": "#f34b7d",
    "Python": "#654fa5",
    "Shell": "#89e051",
    "Other": "#555555"
};

function addNav() {
    $(navTmpl).appendTo('.halftone');
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
