/**
 * @param {number[]} nums
 * @return {number[]}
 */
var runningSum = function (nums) {
    let prefixSum = []
    prefixSum[0] = nums[0]
    for (let i = 1; i < nums.length; i++) { // O(n)
        prefixSum[i] = prefixSum[i - 1] + nums[i]
    }
    return prefixSum
};

// Problem: statement asked me to find the sum of array, but not the total sum, 
//  in this way, create the new array, [sum of 0 element, sum of 0 of 1 element ......]
// input:[1,2,3,4]
// output:[1,3,6,10] 
// process: [1+0, 1+2 =3, 3+3=6,6+4=10 ]
// pattern: prefix sum

// Breaking the problem into mini steps:
// 1. initilize the new array
// 2. set the prefixSum[0]=array[0]
// 2. run the loop 