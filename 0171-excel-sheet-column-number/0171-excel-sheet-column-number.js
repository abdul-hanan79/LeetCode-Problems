/**
 * @param {string} columnTitle
 * @return {number}
 */
var titleToNumber = function (columnTitle) {
    let count = 0

    for (let i = 0; i < columnTitle.length; i++) {
        let currentVal = columnTitle.charCodeAt(i) - 64
        count = count * 26 + currentVal
    }
    return count



};