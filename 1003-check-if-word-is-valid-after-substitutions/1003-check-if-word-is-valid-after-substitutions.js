/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
    while (s.length) {
        if (s.indexOf("abc") == -1) break
        s = s.replaceAll("abc", "")
    }
    return !s.length
};