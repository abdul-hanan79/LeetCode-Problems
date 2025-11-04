/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function (n) {
    let memo = {}
    const countSteps = (n, memo = {}) => {
        if (n <= 1) {
            return 1
        };
        if (memo[n]) {
            return memo[n]
        }
        memo[n] = countSteps(n - 1, memo) + countSteps(n - 2, memo)
        return memo[n]
    }
    return countSteps(n, memo)

};