/**
 * @param {string} s
 * @param {string[]} words
 * @return {boolean}
 */
var isPrefixString = function (s, words) {
    let string = ""
    for (let word of words) {
        string += word
        if (s == string) {
            return true
        } else if (string.length > s.length) {

            return false
        }
    }
    return false
};