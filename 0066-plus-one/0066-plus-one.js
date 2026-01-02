/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function (digits) {
    let digitsString = digits.join("")
    let increment = BigInt(digitsString) + 1n
    const incrementDigits = increment
        .toString()
        .split('')
        .map(Number);
    return incrementDigits

};