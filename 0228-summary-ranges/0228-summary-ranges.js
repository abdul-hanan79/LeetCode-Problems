/**
 * @param {number[]} nums
 * @return {string[]}
 */
var summaryRanges = function (nums) {
    if (!nums.length) {
        return []
    }

    let startRange = nums[0]
    let endRange = nums[0]
    let sortedArray = []
    for (let i = 1; i < nums.length; i++) {
        if (nums[i] - nums[i - 1] == 1) {
            endRange = nums[i]
        } else {
            sortedArray.push(startRange == endRange ? `${startRange}` : `${startRange}->${endRange}`)
            startRange = nums[i]
            endRange = nums[i]
        }
    }
    sortedArray.push(startRange == endRange ? `${startRange}` : `${startRange}->${endRange}`)
    return sortedArray
};