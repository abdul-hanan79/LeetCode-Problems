/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function (nums) {
    const values = new Set(nums)

    for (let value = 0; value <= nums.length + 1; value++) {
        if (!values.has(value)) {
            return value
        }
    }
    
};