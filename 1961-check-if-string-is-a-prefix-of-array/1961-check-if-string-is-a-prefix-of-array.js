/**
 * @param {string} s
 * @param {string[]} words
 * @return {boolean}
 */
var isPrefixString = function (s, words) {
    let wordsString = words.join("")
    if (s == wordsString.slice(0, s.length)) {
        return true
    } else {
        return false
    }
};