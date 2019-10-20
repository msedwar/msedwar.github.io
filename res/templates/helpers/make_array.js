module.exports = function () {
    let arr = [];
    // Copy everything except options.
    for (let i = 0; i < arguments.length - 1; ++i) {
        arr.push(arguments[i])
    }
    return arr;
};
