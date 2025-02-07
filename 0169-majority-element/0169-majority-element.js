/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function (nums) {
    let count = 0
    let majorityElement = 0
    for (let i = 0; i < nums.length; i++) {
        if (count == 0) {
            majorityElement = nums[i]
        }
        if (majorityElement == nums[i]) {
            count++
        } else {
            count--
        }
    }
    return majorityElement

};