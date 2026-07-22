/**
 * @param {string} s
 * @return {string}
 */
var removeDuplicates = function (s) {
    let stack = []
    for (let ch of s) {
        if (stack.at(-1) == ch) {
            stack.pop()
        }
        else {
            stack.push(ch)
        }
    }
    return stack.join("")
};


// Break down problem:
// 1. I'll start loop on s, 
// push first element in the stack, if stack length greater than 0, then see that what was the last element, if it same as current, then remove that, othwerise just push. the elemnt, 
// 2. at the end just return the final stadk