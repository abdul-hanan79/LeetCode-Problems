/**
 * @param {number[]} nums
 * @return {number}
 */
var pivotIndex = function (nums) {
    let prefixSum = []
    prefixSum[0] = nums[0]

    for (let i = 1; i < nums.length; i++) {
        prefixSum[i] = prefixSum[i - 1] + nums[i]
    }
    let right = prefixSum.length - 1
    for (let j = 0; j < prefixSum.length; j++) {
        if ((j > 0 && prefixSum[right] - prefixSum[j] == prefixSum[j - 1] || (j == 0 && prefixSum[right] - prefixSum[j] == 0))) {
            return j
        }

    }
    return -1
};

// Input: nums=[1,7,3,6,5,6]
// Output: result=3 // return the pivot index 
// Problem: I need to find the left most pivot index, where sum of left side of array is equal to the sum of right side of array
// pattern prefix sum. because I need to know the range 

//  Breaking the problem into steps:
// 1. create the prefix sum of input
// [1,7,3,6,5,6]
// [1,8,11,17,22,28]
// then current index - total sum, if it is equal to the index-1 value, then this is pivot index
