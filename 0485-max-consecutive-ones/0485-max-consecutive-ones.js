/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxConsecutiveOnes = function (nums) {
    let max = 0
    let curr = 0
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


// Planning:
// 1. create the variable maxConsectiveOnes, set as zero
// 2. start the loop, 
// 3. increment currConsectiveOnes in the variable if 1 is present, and check with maxConsectiveOnes, if 0 present then reset the curr