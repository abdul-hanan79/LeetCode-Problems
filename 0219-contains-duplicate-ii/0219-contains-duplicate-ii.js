/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var containsNearbyDuplicate = function (nums, k) {
    let map = new Map()

    for (let i = 0; i < nums.length; i++) {
        if (map.has(nums[i])) {
            if (Math.abs(map.get(nums[i]) - i) <= k) {
                return true
            }
        }
        
        map.set(nums[i], i)
    }
    return false
};


// input: nums=[1,2,3,1], k=3
// output: true/false
// problem statement: prlbem asked to see the if the array containts duplicate in such a way that , nums[i]==nums[j] and abs(i-j)<=k, its mean I need to focus on K.
//  constraints: k<=0, nums[i] can be negative and positive
// pattern map, 
// break down problem:
// 1. initialize the map
// 2. save the number agains map, if containts then check that index of current and saved number is abs(i-j)<=k,

// edge cases: