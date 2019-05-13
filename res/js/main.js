const projectCardContainerTmpl =
    '<div class="container project-container">\n' +
    '    <div class="row project-container-row">\n' +
    '    </div>\n' +
    '</div>';
const projectCardTmpl =
    '<div class="col-md project-card-container"><div class="project-card {{availability}} animated bounceInUp">\n' +
    '{{note}}' +
    '    <div class="project-header">\n' +
    '        <div class="project-title">{{title}}</div>\n' +
    '        <div class="project-date">{{date}}</div>\n' +
    '    </div>\n' +
    '    <div class="project-description">' +
    '        <div>{{description}}</div>' +
    '    </div>\n' +
    '    <div class="project-footer">\n' +
    '       <div class="project-btn-group btn-group">\n' +
    '           {{buttons}}\n' +
    '       </div>\n' +
    '       <div class="project-tags"><div class="project-pill">{{pill}}</div>Tags:&nbsp;{{tags}}</div>\n' +
    '    </div>\n' +
    '</div></div>\n';

const projectCardNoteTmpl = '<div class="project-note">~ {{note}} ~</div>';
const projectCardBtnTmpl = '<a href="{{link}}" target="_blank" class="btn btn-sm project-btn">{{name}}</a>\n';
const projectCardTagTmpl = '<a href="{{link}}" target="_blank" class="project-tag">{{tag}}</a>';
const projectCardPillTmpl = '<a href="projects.html?tag={{tag}}" class="project-language-pill{{class}}" style="background-color:{{color}};">{{language}}</a>';
const projectSeeMoreTmpl = '<div class="row project-see-more-container"><a href="projects.html{{link}}" class="project-see-more btn project-see-more-btn">{{text}}&nbsp;&nbsp;<i class="fas fa-chevron-right"></i></a></div>';

function buildProjectContainer(container) {
    var $projectContainer = $(projectCardContainerTmpl);
    $projectContainer.appendTo(container);
    return $projectContainer.children(".project-container-row");
}

function loadAllProjects(container, limit, seemore) {
    if (limit === undefined) {
        limit = 10;
    }
    if (seemore === undefined) {
        seemore = true;
    }
    loadProjectsExceptCategory(container, "", limit, seemore);
}

function loadProjectsByTag(container, tag, limit, seemore) {
    if (limit === undefined) {
        limit = 10;
    }
    if (seemore === undefined) {
        seemore = true;
    }
    var loaded = 0;
    for (var i = 0; i < PROJECTS.length; ++i) {
        if (PROJECTS[i].tags.includes(tag)) {
            var $projectCard = $(getCardHtml(PROJECTS[i]));
            $projectCard.appendTo(container);
            ++loaded;

            if (limit > 0 && loaded >= limit) {
                break;
            }
        }
    }

    if (seemore) {
        addSeeMore(container, "See more projects tagged with \"" + tag + "\"", "?tag=" + tag);
    }
}

function loadProjectsByCategory(container, category, limit, seemore) {
    if (limit === undefined) {
        limit = 10;
    }
    if (seemore === undefined) {
        seemore = true;
    }
    var loaded = 0;
    for (var i = 0; i < PROJECTS.length; ++i) {
        if (PROJECTS[i].category === category) {
            var $projectCard = $(getCardHtml(PROJECTS[i]));
            $projectCard.appendTo(container);
            ++loaded;

            if (limit > 0 && loaded >= limit) {
                break;
            }
        }
    }

    if (seemore) {
        addSeeMore(container, "See more " + category + " projects", "?category=" + category);
    }
}

function loadProjectsExceptCategory(container, category, limit, seemore) {
    if (limit === undefined) {
        limit = 10;
    }
    if (seemore === undefined) {
        seemore = true;
    }
    var loaded = 0;
    for (var i = 0; i < PROJECTS.length; ++i) {
        if (PROJECTS[i].category !== category) {
            var $projectCard = $(getCardHtml(PROJECTS[i]));
            $projectCard.appendTo(container);
            ++loaded;

            if (limit > 0 && loaded >= limit) {
                break;
            }
        }
    }

    if (seemore) {
        addSeeMore(container, "See more projects");
    }
}

function loadProjectsExceptCategoryRandom(container, category, limit, seemore) {
    if (limit === undefined) {
        limit = 10;
    }
    if (seemore === undefined) {
        seemore = true;
    }
    var loaded = 0;
    var shuffledProjects = $.extend(true, [], PROJECTS);
    // Shuffle projects
    for (var i = 0; i < shuffledProjects.length; ++i) {
        var randomIndex = Math.floor(Math.random() * shuffledProjects.length);
        var temp = shuffledProjects[i];
        shuffledProjects[i] = shuffledProjects[randomIndex];
        shuffledProjects[randomIndex] = temp;
    }

    for (var i = 0; i < shuffledProjects.length; ++i) {
        if (shuffledProjects[i].category !== category) {
            var $projectCard = $(getCardHtml(shuffledProjects[i]));
            $projectCard.appendTo(container);
            ++loaded;

            if (limit > 0 && loaded >= limit) {
                break;
            }
        }
    }

    if (seemore) {
        addSeeMore(container, "See more projects");
    }
}

function loadProjectByTitle(container, title) {
    for (var i = 0; i < PROJECTS.length; ++i) {
        if (PROJECTS[i].title === title) {
            var $projectCard = $(getCardHtml(PROJECTS[i]));
            $projectCard.appendTo(container);
            return;
        }
    }
}

function addSeeMore(container, text, link) {
    if (link === undefined) {
        link = "";
    }
    $(projectSeeMoreTmpl
        .replace("{{link}}", link)
        .replace("{{text}}", text)
    ).appendTo($(container).parent());
}

function getTotalProjects() {
    return PROJECTS.length;
}

function getProjectsWithCategory(category) {
    var projects = 0;
    for (var i = 0; i < PROJECTS.length; ++i) {
        if (PROJECTS[i].category === category) {
            ++projects;
        }
    }
    return projects;
}

function getProjectsWithTag(tag) {
    var projects = 0;
    for (var i = 0; i < PROJECTS.length; ++i) {
        if (PROJECTS[i].tags.includes(tag)) {
            ++projects;
        }
    }
    return projects;
}

function getLanguageBreakdown() {
    var languages = {};
    var total = 0;
    for (var i = 0; i < PROJECTS.length; ++i) {
        var lang = PROJECTS[i].language;
        if (lang !== undefined) {
            languages[lang] = 1 + (languages[lang] || 0);
            ++total;
        }
    }
    languages._total = total;
    return languages;
}

function getCardHtml(project) {
    var availability = "";
    switch (project.source) {
        case AVAILABLE:
            availability = "project-src-available";
            break;
        case UNAVAILABLE:
            availability = "project-src-unavailable";
            break;
        case WITHHELD:
            availability = "project-src-withheld";
            break;
        case SCHOOL:
            availability = "project-src-school";
            break;
        default:
            availability = "";
            break;
    }

    var card = projectCardTmpl
        .replace("{{availability}}", availability)
        .replace("{{title}}", project.title)
        .replace("{{note}}", getNoteHtml(project.note))
        .replace("{{date}}",
            "<a href=\"projects.html?category=" +
            project.category + "\">" +
            project.category +
            "</a> | " +
            project.date
        )
        .replace("{{pill}}", getPillHtml(project.language))
        .replace("{{description}}", project.description)
        .replace("{{buttons}}", getButtonsHtml(project.buttons))
        .replace("{{tags}}", getTagsHtml(project.language, project.tags));
    return card;
}

function getNoteHtml(note) {
    if (!note) {
        return "";
    }

    return projectCardNoteTmpl
        .replace("{{note}}", note);
}

function getPillHtml(language) {
    if (!language) {
        return "";
    }

    return projectCardPillTmpl
        .replace("{{tag}}", language === "C#" ? "C-Sharp" : language)
        .replace("{{language}}", language)
        .replace("{{class}}", language === "Javascript" || language === "Shell" ? " project-language-pill-dark": "")
        .replace("{{color}}", LANG_COLOR[language]);
}

function getButtonsHtml(buttons) {
    if (!buttons) {
        return "";
    }

    var btnHtml = "";
    for (var i = 0; i < buttons.length; ++i) {
        btnHtml += projectCardBtnTmpl
            .replace("{{name}}", buttons[i].name)
            .replace("{{link}}", buttons[i].link);
    }
    return btnHtml;
}

function getTagsHtml(language, tags) {
    if (!tags) {
        return "";
    }

    var tagHtml = "";
    for (var i = 0; i < tags.length; ++i) {
        if (tags[i] === language || (tags[i] === "C-Sharp" && language === "C#")) {
            continue;
        }
        if (i > 0) {
            tagHtml += ", ";
        }
        tagHtml += projectCardTagTmpl
            .replace("{{link}}", "projects.html?tag=" + tags[i])
            .replace("{{tag}}", tags[i]);
    }
    return tagHtml;
}

function parse_query_string(query) {
    var vars = query.split("&");
    var query_string = {};
    for (var i = 0; i < vars.length; i++) {
        var pair = vars[i].split("=");
        // If first entry with this name
        if (typeof query_string[pair[0]] === "undefined") {
            query_string[pair[0]] = decodeURIComponent(pair[1]);
        // If second entry with this name
        } else if (typeof query_string[pair[0]] === "string") {
            var arr = [query_string[pair[0]], decodeURIComponent(pair[1])];
            query_string[pair[0]] = arr;
        // If third or later entry with this name
        } else {
            query_string[pair[0]].push(decodeURIComponent(pair[1]));
        }
    }
    return query_string;
}
