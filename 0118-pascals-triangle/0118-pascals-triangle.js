/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function (numRows) {
    let pascalTriangle = []
    for (let i = 0; i < numRows; i++) {

        let row = []
        for (j = 0; j <= i; j++) {
            if (j == 0 || j == i) {
                row.push(1)
            }
            else {
                row.push((pascalTriangle[i - 1][j - 1] || 0) + (pascalTriangle[i - 1][j] || 0))
            }
        }
        pascalTriangle.push(row)

    }
    return pascalTriangle
};