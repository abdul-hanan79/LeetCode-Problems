/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var getLucky = function (s, k) {
    let number = ""
    for (let string of s) {
        // console.log("string", string)
        number += string.charCodeAt(0) - 96
    }
    let result = ""
    while (k) {
        result = number.split("").reduce((acc, cum) => Number(acc) + Number(cum))
        number = String(result)
        k--
    }
    return result

};