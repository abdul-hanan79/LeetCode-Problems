/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
    let profit = 0
    let cheapestPrice = prices[0]
    for (let index in prices) {
        if (index > 0) {
            if (prices[index] < cheapestPrice) {
                cheapestPrice = prices[index]
            }
            if (prices[index] - cheapestPrice > profit) {
                profit = prices[index] - cheapestPrice
            }
        }
    }
    return profit
};