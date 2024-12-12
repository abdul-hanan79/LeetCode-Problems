/**
 * @param {number[]} nums
 * @return {number}
 */
var pivotIndex = function (nums) {
    let leftSum = 0;
    let rightSum = 0;
    for (let j = 0; j < nums.length; j++) {
        if (j > 0) {
            rightSum += nums[j]
        }
    }

    console.log("right sum", rightSum)
    for (let i = 0; i < nums.length; i++) {
        if (i > 0) {
            rightSum = rightSum - nums[i]

            leftSum += nums[i - 1]
        }
        if (rightSum == leftSum) {
            return i
        }

    }
    return -1
    // console.log("value", leftSum)
    // console.log("value right", rightSum)
};