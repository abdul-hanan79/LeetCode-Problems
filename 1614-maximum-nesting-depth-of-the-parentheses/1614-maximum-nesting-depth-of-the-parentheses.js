/**
 * @param {string} s
 * @return {number}
 */
var maxDepth = function (s) {
    let depth = 0;
    let maxDepth = 0;
    for (let ch of s) {
        if (ch == "(") {
            depth++
        } else if (ch == ")") {
            depth--
        }
        maxDepth = Math.max(maxDepth, depth)
    }
    return maxDepth
};