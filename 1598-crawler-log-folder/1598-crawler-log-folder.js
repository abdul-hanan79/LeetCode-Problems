/**
 * @param {string[]} logs
 * @return {number}
 */
var minOperations = function (logs) {
    let stack = []
    for (let i of logs) {
        if (!i.includes("./")) {
            stack.push("d")
        }
        else if (i == "../" && stack.length) {
            stack.pop()
        }
    }
    return stack.length
};