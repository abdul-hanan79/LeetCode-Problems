/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var containsNearbyDuplicate = function (nums, k) {
    for (let i = 0; i < nums.length; i++) {
        for (let j = i + 1; (j < nums.length && j <= i+k); j++) {
            if (nums[i] == nums[j] && Math.abs(i - j) <= k) {
                return true
            }
        }
    }
    return false
};



// ts

// function containsNearbyDuplicate(nums: number[], k: number): boolean {
//     const seen = {}
//     for (let i = 0; i < nums.length; i++) {
//         const val = nums[i]
//         if (seen.hasOwnProperty(val) && i - seen[val] <= k) {
//             return true
//         }
//         seen[val] = i
//     }
//     return false
// };
