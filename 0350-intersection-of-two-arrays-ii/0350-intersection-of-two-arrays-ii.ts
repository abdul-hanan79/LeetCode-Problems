function intersect(nums1: number[], nums2: number[]): number[] {
    let newArray = []
    for (let i of nums1) {
        if (nums2.includes(i)) {
            newArray.push(i)
            nums2.splice(nums2.indexOf(i), 1)

        }
    }
    return newArray

};