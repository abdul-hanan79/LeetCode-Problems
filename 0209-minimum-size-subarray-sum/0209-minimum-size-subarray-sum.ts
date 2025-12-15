function minSubArrayLen(target: number, nums: number[]): number {
    let left:number = 0;
    let sum:number = 0;
    let minLen:number = Infinity;

    for (let right = 0; right < nums.length; right++) {
        sum += nums[right]
        while (sum >= target) {
            minLen = Math.min(minLen, right - left + 1)
            sum -= nums[left]
            left++
        }
    }
    return minLen == Infinity ? 0 : minLen
};