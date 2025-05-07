/**
 * @param {string} s
 * @return {boolean}
 */
var areNumbersAscending = function (s) {
    let tokens = s.split(" ")
    let lastDigit = 0;
    for (let token of tokens) {
        if (!isNaN(Number(token)) && Number(token) <= lastDigit) {
            return false
        } else if (!isNaN(Number(token))) {
            lastDigit = Number(token)
        }
    }
    return true

};