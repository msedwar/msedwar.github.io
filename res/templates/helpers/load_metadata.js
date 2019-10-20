module.exports = function (metadata, slug, options) {
    if (!options.data.root) {
        options.data.root = {}
    }

    for (const article of metadata) {
        if (article.slug === slug) {
            for (const [key, val] of Object.entries(article)) {
                options.data.root[key] = val;
            }
            break;
        }
    }
};
