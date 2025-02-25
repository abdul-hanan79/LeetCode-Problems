/**
 * @param {number[]} g
 * @param {number[]} s
 * @return {number}
 */
var findContentChildren = function (g, s) {
    g.sort((a, b) => b - a)
    s.sort((a, b) => b - a)
    let contentChild = 0;
    for (let i = 0; i < g.length; i++) {
        for (let j = 0; j < s.length; j++) {
            if (s[j] >= g[i]) {
                s[j] -= g[i]
                contentChild++
                break
            }
        }
    }
    return contentChild
};