/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersection = function (nums1, nums2) {
    let intersectionArray = []
    let array1 = nums1.length < nums2.length ? nums1 : nums2
    let array2 = nums1.length > nums2.length ? nums1 : nums2
    for (let i = 0; i < array1.length; i++) {
        if (array2.includes(array1[i]) && !intersectionArray.includes(array1[i])) {
            intersectionArray.push(array1[i])
        }
    }
    return intersectionArray

};