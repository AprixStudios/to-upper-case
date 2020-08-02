module.exports = function upperCase(string) {
    if (typeof string !== String) {
        throw new TypeError(`Object passed is not a string.`);
    }
    return string.toUpperCase();
};