/**
 * @param {string} s
 * @return {string}
 */
var removeOuterParentheses = function (s) {
    let counter = 0;
    let answer = ""
    for (let paranthese of s) {
        if (paranthese == "(") {
            counter++;
        }
        if (counter >= 2) {
            answer += paranthese
        }
        if (paranthese == ")") {
            counter--

        }
    }
    return answer
};