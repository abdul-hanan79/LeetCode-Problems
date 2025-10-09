function findMaxConsecutiveOnes(nums: number[]): number {
    let max: number = 0, curr: number = 0
    for (let num of nums) {
        if (num == 1) {
            curr += 1
            max = Math.max(max, curr)
        } else {
            curr = 0
        }
    }
    return max

};