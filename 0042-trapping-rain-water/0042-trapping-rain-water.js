/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function (height) {
    let maxLeft = 0
    let maxRight = 0
    let count = 0
    let left = 0
    let right = height.length - 1
    while (left < right) {
        maxLeft = Math.max(maxLeft, height[left])
        maxRight = Math.max(maxRight, height[right])
        if (maxLeft > maxRight) {
            count += Math.min(maxLeft, maxRight) - height[right]
            right--
        } else {
            count += Math.min(maxLeft, maxRight) - height[left]
            left++

        }
    }
    return count
};