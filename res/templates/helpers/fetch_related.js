function getRelated(metadata, tags, date) {
    let related = [];
    for (const article of metadata) {
        let totalTags = 0;
        let dateDiff = Math.abs(Date.parse(date) - Date.parse(article.date));
        if (tags) {
            for (const tag of tags) {
                if (article.tags.indexOf(tag) > -1) {
                    totalTags += 1;
                }
            }
        }

        if (!tags || totalTags > 0 || dateDiff <= 7 * 24 * 3600000) {
            related.push(Object.assign({
                totalTags: totalTags,
                dateDiff: dateDiff
            }, article));
        }
    }

    related.sort(function(a, b) {
        if (a.totalTags !== b.totalTags) {
            return a.totalTags < b.totalTags ? -1 : 1;
        } else if (a.dateDiff !== b.dateDiff) {
            return a.dateDiff < b.dateDiff ? -1 : 1;
        }
        return 0;
    });

    if (tags) {
        related.shift();
    }
    return related;
}

module.exports = function (index, metadata, tags, date) {
    if (!date) {
        date = Date.now()
    }
    let related = getRelated(metadata, tags, date);

    if (index === -1) {
        return related;
    }

    if (index >= related.length) {
        return null;
    }

    return {
        slug: related[index].slug,
        title: related[index].title,
        description: related[index].description,
        date: related[index].date,
        thumbnail: related[index].thumbnail
    };
};
