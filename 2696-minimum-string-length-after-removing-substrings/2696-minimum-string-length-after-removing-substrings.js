/**
 * @param {string} s
 * @return {number}
 */
var minLength = function (s) {
    let stack = []
    for (let ch of s) {
        if (stack.length && stack[stack.length - 1] == "A" && ch == "B" || stack[stack.length - 1] == "C" && ch == "D") {
            stack.pop()
        } else {
            stack.push(ch)
        }
    }
    return stack.length
};