/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function (nums1, m, nums2, n) {
    while (nums1.length > m) {
        nums1.pop()
    }
    for (let i = 0; i < n; i++) {
        console.log("i", i)
        nums1.push(nums2[i])
    }

    nums1.sort((a,b)=>a-b)
};