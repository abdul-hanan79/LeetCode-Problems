/**
 * @param {string} s
 * @return {string}
 */
var makeGood = function (s) {
    let stack = []
    for (let i of s) {
        if (stack.length && (stack[stack.length - 1].toUpperCase() == i || stack[stack.length - 1].toLowerCase() == i) && stack[stack.length - 1] != i) {
            stack.pop()
            continue
        }
        stack.push(i)
    }
    return stack.join("")
};