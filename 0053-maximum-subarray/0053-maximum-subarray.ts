function maxSubArray(nums: number[]): number {
    let currSum: number = 0
    let maxSum = -Infinity

    for (let num of nums) {
        currSum += num
        maxSum = Math.max(currSum, maxSum)
        if (currSum < 0) currSum = 0
    }
    return maxSum
};