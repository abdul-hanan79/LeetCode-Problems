/**
 * @param {string} s
 * @return {string}
 */
var clearDigits = function (s) {
    let stack = []
    for (let i = 0; i < s.length; i++) {
        let char = s.charAt(i)
        if (parseInt(char)>=0) {
            stack.pop()
        } else {
            stack.push(char)
        }
    }

    return stack.join("")
};