/**
 * @param {string} s
 * @return {boolean}
 */
var areOccurrencesEqual = function (s) {
    let frequency = {}
    for (var j of s.split("")) {
        if (j in frequency) {
            frequency[j] += 1
        }
        else {
            frequency[j] = 1
        }
    }
    let frequencyArray = Object.keys(frequency)
    let frequencyValue = frequency[frequencyArray[0]]
    return frequencyArray.every((item) => frequency[item] == frequencyValue)

};