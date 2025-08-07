//  @tracking
//! Re-Solved Times: 1

/**
 * @param {number[]} prices
 * @return {number}
 */

//* 1
////var maxProfit = function (prices) {
////  let minPrice = Infinity;
////  let maxProfit = 0;
////
////  for (let i = 0; i < prices.length; i++) {
////    if (prices[i] < minPrice) {
////      minPrice = prices[i];
////    }
////
////    let profit = prices[i] - minPrice;
////    if (profit > maxProfit) {
////      maxProfit = profit;
////    }
////  }
////
////  return maxProfit;
////};

//* 2

console.log(maxProfit([7, 1, 5, 3, 6, 4])); // 5
//TODO Explanation: Buy on day 2 (price = 1) and sell on day 5 (price = 6), profit = 6-1 = 5.
//TODO Note that buying on day 2 and selling on day 1 is not allowed because you must buy before you sell.

// console.log(maxProfit([7, 6, 4, 3, 1])); // 0
//TODO Explanation: In this case, no transactions are done and the max profit = 0.
