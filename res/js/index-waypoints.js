var waypoint0 = false;
$('.js-waypoint-0').waypoint(function() {
    if (waypoint0) {
        return;
    }
    waypoint0 = true;
    $('.js-profile-img').removeClass('fadeOut').addClass('fadeInUp');
}, {
    offset: '50%'
});

var waypoint1 = false;
$('.js-waypoint-1').waypoint(function() {
    if (waypoint1) {
        return;
    }
    waypoint1 = true;
    $('.js-toc').removeClass('fadeOut').addClass('fadeInUp');
}, {
    offset: '80%'
});

var waypoint2 = false;
$('.js-waypoint-2').waypoint(function() {
    if (waypoint2) {
        return;
    }
    waypoint2 = true;
    addLanguageBreakdown($('.js-language-breakdown'));
    $('.js-personal-projects').find('.js-project-card').each(function() {
        $(this).removeClass('fadeOut').addClass('bounceInUp');
    });
}, {
    offset: '15%'
});

var waypoint3 = false;
$('.js-waypoint-3').waypoint(function() {
    if (waypoint3) {
        return;
    }
    waypoint3 = true;
    $('.js-shuffle-btn').removeClass('fadeOut').addClass('fadeInUp');
    $('.js-school-projects').find('.js-project-card').each(function() {
        $(this).removeClass('fadeOut').addClass('bounceInUp');
    });
    }, {
    offset: '0%'
});

var waypoint4 = false;
$('.js-waypoint-4').waypoint(function() {
    if (waypoint4) {
        return;
    }
    waypoint4 = true;
    $('.js-contact-link-container').children('a').each(function() {
        $(this).removeClass('fadeOut').addClass('fadeInUp');
    });
    setTimeout(function() {
        $('.js-contact-link-container').find('i.js-logo').each(function() {
            $(this).removeClass('logo-color-mute');
        });
    }, 1000);
}, {
    offset: '25%'
});

var waypointCloud = false;
$('.js-waypoint-cloud').waypoint(function() {
    if (waypointCloud) {
        return;
    }
    waypointCloud = true;
    $('.js-waypoint-cloud').find('i.js-logo').each(function() {
        $(this).removeClass('logo-color-mute');
    });
}, {
    offset: '25%'
});

var waypointTools = false;
$('.js-waypoint-tools').waypoint(function() {
    if (waypointTools) {
        return;
    }
    waypointTools = true;
    $('.js-waypoint-tools').find('i.js-logo').each(function() {
        $(this).removeClass('logo-color-mute');
    });
}, {
    offset: '25%'
});

var waypointLanguages = false;
$('.js-waypoint-languages').waypoint(function() {
    if (waypointLanguages) {
        return;
    }
    waypointLanguages = true;
    $('.js-waypoint-languages').find('i.js-logo').each(function() {
        $(this).removeClass('logo-color-mute');
    });
}, {
    offset: '25%'
});

var waypointOs = false;
$('.js-waypoint-os').waypoint(function() {
    if (waypointOs) {
        return;
    }
    waypointOs = true;
    $('.js-waypoint-os').find('i.js-logo').each(function() {
        $(this).removeClass('logo-color-mute');
    });
}, {
    offset: '25%'
});
