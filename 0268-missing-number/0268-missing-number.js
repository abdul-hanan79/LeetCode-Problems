/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function (nums) {
    let n = nums.length
    // let sum = (n * (n + 1)) / 2
    let sum = 0
    let numsSum = 0;
    for (let i = 0; i <= n; i++) {
        sum ^= i
    }
    for (let j = 0; j < n; j++) {
        numsSum ^= nums[j]
    }
    return sum ^ numsSum

};