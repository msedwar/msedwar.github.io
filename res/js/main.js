const projectCardTmpl =
    "<div class=\"project-card {{availability}}\">\n" +
    "{{note}}" +
    "    <div class=\"project-title\">{{title}}</div>\n" +
    "    <div class=\"project-date\">{{date}}</div>\n" +
    "    <p class=\"project-description\">{{description}}</p>\n" +
    "    <div class=\"project-tags\">Tags:&nbsp;{{tags}}</div>\n" +
    "    <div class=\"project-btn-group btn-group\">\n" +
    "        {{buttons}}\n" +
    "    </div>\n" +
    "</div>\n";

const projectCardNoteTmpl = "<div class=\"project-note-padding\"></div><div class=\"project-note\">~ {{note}} ~</div>";
const projectCardBtnTmpl = "<a href=\"{{link}}\" target=\"_blank\" class=\"btn btn-sm project-btn\">{{name}}</a>\n";
const projectCardTagTmpl = "<a href=\"{{link}}\" target=\"_blank\" class=\"project-tag\">{{tag}}</a>";

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
            $projectCard.hide();
            $projectCard.appendTo(container);
            $projectCard.slideDown(400);
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

function addSeeMore(container, text, link) {
    if (link === undefined) {
        link = "";
    }
    $("<a href=\"projects.html" + link + "\" class=\"project-see-more btn btn-sm project-btn\">" + text + "</a>").appendTo(container);
}

function getTotalProjects() {
    return PROJECTS.length;
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
        .replace("{{date}}", project.category + " | " + project.date)
        .replace("{{description}}", project.description)
        .replace("{{buttons}}", getButtonsHtml(project.buttons))
        .replace("{{tags}}", getTagsHtml(project.tags));
    return card;
}

function getNoteHtml(note) {
    if (!note) {
        return "";
    }

    return projectCardNoteTmpl
        .replace("{{note}}", note);
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

function getTagsHtml(tags) {
    if (!tags) {
        return "";
    }

    var tagHtml = "";
    for (var i = 0; i < tags.length; ++i) {
        tagHtml += projectCardTagTmpl
            .replace("{{link}}", "projects.html?tag=" + tags[i])
            .replace("{{tag}}", tags[i]);
        if (i + 1 < tags.length) {
            tagHtml += ", ";
        }
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
