/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function (nums) {
    let currSum = 0;
    let maxSum = -Infinity

    for (let num of nums) {
        currSum += num
        maxSum = Math.max(maxSum, currSum)
        if (currSum < 0) currSum = 0
    }
    return maxSum
};