/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {

    let minimumPrice = prices[0]
    let maxProfit = 0

    for (let i = 1; i < prices.length; i++) {
        const price = prices[i]
        minimumPrice = Math.min(minimumPrice, price)
        const profit = price - minimumPrice
        maxProfit = Math.max(maxProfit, profit)
    }
    return maxProfit

};


// I need to maximize the profit, to achieve this I have the first buy the on the smallest day and less on the largest day that comes after the smallest. 

// Questions: How I select the smallest day? 
// Profit= next largest day - smnallest day
// [7,1,5,3,6,4]
// 7 is not smallest
// 1 is smallest it selected as a buy stock day
// 5 not largest
// 3 not largest
// 6 it is the largest stock day, so 6-1 =5 (this one is the profit)
//  if profit is in minu then return 0
