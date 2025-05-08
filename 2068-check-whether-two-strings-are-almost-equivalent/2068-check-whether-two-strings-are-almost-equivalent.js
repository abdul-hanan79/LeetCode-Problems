/**
 * @param {string} word1
 * @param {string} word2
 * @return {boolean}
 */
var checkAlmostEquivalent = function (word1, word2) {
    const count = new Array(26).fill(0)
    for (let ch of word1) {
        count[ch.charCodeAt(0) - 97]++
    }
    for (let ch of word2) {
        count[ch.charCodeAt(0) - 97]--

    }
    for (let diff of count) {
        if (Math.abs(diff) > 3) {
            return false;
        }
    }

    return true;
};