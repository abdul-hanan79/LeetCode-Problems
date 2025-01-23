/**
 * @param {string} s
 * @return {number}
 */
var minimumMoves = function (s) {
    let moves = 0, index = 0
    while (index < s.length) {
        if (s[index] == "X") {
            moves++
            index += 2
        }
        index++
    }
    return moves
};
