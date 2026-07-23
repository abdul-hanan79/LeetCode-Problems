/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findMaxAverage = function (nums, k) {
    let sum = 0;
    let maxAverage = 0;

    for (let i = 0; i < k; i++) {
        sum += nums[i]
    }
    maxAverage = sum / k

    for (let j = k; j < nums.length; j++) {
        sum -= nums[j - k]
        sum += nums[j]
        let average = sum / k
        maxAverage = Math.max(maxAverage, average)
    }

    return maxAverage
};

// input: num=[1,12,-5,-6,50,3], k=3
// Output: maxAverage=12.7500
// formula of average= (n1+n2+n3)/k (here k=3 so I sum three number)
// Statement: the problem asked me to see the average of k elements and keep track of max average, and at the end return the max average
// constraints: 
// number can b minus

// Important edge cases


// pattern: sliding window, because window has fixed size k
// breaking the problem into steps:
// 1. first of all find the inital k elements everage
// 2. then start the loop from k, and minus the previus number and add the next number
