/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
    let indices = new Map()

    for (let i = 0; i < nums.length; i++) {
        const currentNumber = nums[i]
        const targetNumber = target - currentNumber

        if (indices.has(targetNumber)) {
            return [indices.get(targetNumber), i]
        }
        indices.set(currentNumber, i)
    }
};