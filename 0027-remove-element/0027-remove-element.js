/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function (nums, val) {
    let index = 0
    let i = 0
    let length = nums.length
    while (i < nums.length) {
        if (nums[index] == val) {
            console.log("matched", nums[index])
            console.log("index", index)
            nums.push(nums[index])
            nums.splice(index, 1)
            console.log("nums", nums)
            length--
        } else {
            index++
        }
        i++
    }
    return length
};