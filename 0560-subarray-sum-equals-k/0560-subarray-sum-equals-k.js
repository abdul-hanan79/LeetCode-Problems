/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var subarraySum = function (nums, k) {
    let prefixSum = 0;
    let map = { 0: 1 }
    let count = 0
    for (let num of nums) {
        prefixSum += num
        if (map[prefixSum - k]) {
            count += map[prefixSum - k]
        }
        map[prefixSum] = (map[prefixSum] || 0) + 1
    }
    return count
};