/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function (strs) {
    if (!strs.length) {
        return ""
    }
    let base = strs[0]
    const rest = strs.slice(1); // <-- compute once
    for (let i = 0; i < base.length; i++) {
        for (let word of rest) {
            if (i === word.length || word[i] != base[i]) {
                return base.slice(0, i)
            }
        }
    }
    return base
};