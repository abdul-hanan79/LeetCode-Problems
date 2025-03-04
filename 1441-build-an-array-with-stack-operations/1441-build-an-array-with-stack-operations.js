/**
 * @param {number[]} target
 * @param {number} n
 * @return {string[]}
 */
var buildArray = function (target, n) {
    let stack = []
    let ans = []
    for (let i = 1; i <= n; i++) {
        stack.push(i)
        ans.push("Push")
        if (!target.includes(i)) {
            stack.pop()
            ans.push("Pop")
        }
        if (stack.length == target.length) {
            return ans
        }
    }
    return ans
};