/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function (nums, k) {
    k = k % nums.length
    let rotateNums = [...nums.slice(nums.length - k), ...nums.slice(0, nums.length - k)]
    nums.length = 0
    nums.push(...rotateNums)
};