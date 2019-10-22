module.exports = function (key, val, options) {
    if (!options.data.root) {
        options.data.root = {}
    }
    options.data.root[key] = val;
};
