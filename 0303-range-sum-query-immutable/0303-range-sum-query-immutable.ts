class NumArray {
    private nums: number[]
    constructor(nums: number[]) {
        this.nums = nums
    }
    sumRange(left: number, right: number): number {
        return this.nums.slice(left, right + 1).reduce((acc, cumm) => acc + cumm, 0)
    }
}

/**
 * Your NumArray object will be instantiated and called as such:
 * var obj = new NumArray(nums)
 * var param_1 = obj.sumRange(left,right)
 */