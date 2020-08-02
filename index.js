module.exports = function upperCase(string) {
    if (typeof string !== "string") {
        throw new TypeError(`Object passed is not a string.`);
    }
    return string.toUpperCase();
};