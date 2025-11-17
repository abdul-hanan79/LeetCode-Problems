/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function (nums) {
    nums.sort((a, b) => a - b)
    console.log("nujms", nums)
    let res = []
    for (let i = 0; i < nums.length; i++) {
        if (i > 0 && nums[i] === nums[i - 1]) {
            continue;
        }
        let j = i + 1
        let k = nums.length - 1

        while (j < k) {
            let ans = nums[i] + nums[j] + nums[k]
            if (ans > 0) {
                k--
            } else if (ans < 0) {
                j++
            } else {
                res.push([nums[i], nums[j], nums[k]])
                j++
                while (nums[j] === nums[j - 1] && j < k) {
                    j++
                }
            }
        }
    }
    return res
};

// 1. sorting
// 2. hashmap for searchng.