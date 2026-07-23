/**
 * @param {number[]} nums
 * @return {number}
 */
var findMiddleIndex = function (nums) {
    let prefixSum = []
    prefixSum[0] = nums[0]

    for (let i = 1; i < nums.length; i++) {
        prefixSum[i] = prefixSum[i - 1] + nums[i]
    }

    let totalSum = prefixSum.at(-1)

    for (let j = 0; j < prefixSum.length; j++) {

        let leftSum = j == 0 ? 0 : prefixSum[j - 1]
        let rightSum = totalSum - prefixSum[j]

        if (leftSum == rightSum) {
            return j
        }
    }

    return -1


};


// input: nums [2,3,-1,8,4]
// output: number , middle index 
// problem: I need to find the index, where sum of left and right is equal otherwise -1
//  pattern: prefix sum.

// constraints: 
// nums.length > =1
//  nums[i] can be minus


// breaking the problem into steps:
// 1. first get the prefix sum , 
// 2. then match the total sum - nums[i] == nums[i-1] if yes then return the current index otherwise -1