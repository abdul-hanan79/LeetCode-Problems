/**
 * @param {string} word
 * @param {character} ch
 * @return {string}
 */
var reversePrefix = function (word, ch) {
    let stack = []
    let words = word.split("")
    console.log("words", words)
    for (let i of word) {
        console.log("i", i)
        if (i != ch) {
            stack.push(i)
            words.shift()
        } else if (i == ch) {
            stack.push(i)
            words.shift()
            return stack.reverse().join("") + words.join("")
        }
    }
    return word
};