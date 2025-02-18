/**
 * @param {number[]} nums
 * @return {number}
 */
var thirdMax = function (nums) {
    let number = new Set(nums)
    let sortedNums = [...number].sort((a, b) => a - b)
    let maximumNumber = sortedNums.length < 3 ? sortedNums[sortedNums.length - 1] : sortedNums[sortedNums.length - 3]
    return maximumNumber
};