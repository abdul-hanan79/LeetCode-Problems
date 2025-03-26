/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function (s) {
    let frequency = {}
    for (let char of s) {
        if (frequency[char]) {
            frequency[char] += 1
        } else {
            frequency[char] = 1
        }
    }
    for (let i = 0; i < s.length; i++) {
        let char = s[i]
        if (frequency[char] == 1) {
            return i
        }
    }
    return -1

};