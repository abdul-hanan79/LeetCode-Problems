/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDisappearedNumbers = function (nums) {
    let length=nums.length
    let set = new Set(nums)
    nums = [...set]
    let missingNumbers = []
    for (let i = 1; i <= length; i++) {
        if (!nums.includes(i)) {
            missingNumbers.push(i)
        }
    }
    return missingNumbers
};