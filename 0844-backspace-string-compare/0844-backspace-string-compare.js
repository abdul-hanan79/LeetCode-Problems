/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var backspaceCompare = function (s, t) {
    let sStack = []
    let tStack = []
    let i = 0;
    while (i < s.length || i < t.length) {
        if (i < s.length) {
            let ch = s.charAt(i)
            if (ch != "#") {
                sStack.push(ch)
            } else if (sStack.length && ch == "#") {
                sStack.pop()
            }
        }
        if (i < t.length) {
            let char = t.charAt(i)
            if (char != "#") {
                tStack.push(char)
            } else if (tStack.length && char == "#") {
                tStack.pop()
            }
        }

        i++
    }

    return sStack.join("") == tStack.join("")
};