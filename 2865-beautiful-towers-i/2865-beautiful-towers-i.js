/**
 * @param {number[]} heights
 * @return {number}
 */
var maximumSumOfHeights = function (heights) {
    let maxSum = 0;
    for (let i = 0; i < heights.length; i++) {
        let height = heights[i]
        let sum = height
        for (let j = i; j >= 1; j--) {
            height = Math.min(height, heights[j - 1])
            sum += height
        }
        height = heights[i]
        for (let k = i; k < heights.length - 1; k++) {
            height = Math.min(height, heights[k + 1])
            sum += height
        }
        maxSum = Math.max(maxSum, sum)
    }
    return maxSum

};