/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
  // get highest price
  if (!prices || prices.length < 1 || prices.length === 1) return 0;
  const table = Array(prices.length).fill(0);
  for (let i = 0; i < table.length; i++) {
    for (let j = i; j < prices.length; j++) {
      if (prices[j] > prices[i]) {
        const profit = prices[j] - prices[i];
        table[i] = profit > table[i] ? profit : table[i];
      }
    }
  }
  table.sort((a, b) => b - a);
  return table[0];
};

console.log(maxProfit([7, 1, 5, 3, 6, 4]));

// Say you have an array for which the ith element is the price of a given stock on day i.

// If you were only permitted to complete at most one transaction
//  (i.e., buy one and sell one share of the stock), design an algorithm to find the maximum profit.

// Note that you cannot sell a stock before you buy one.
// Input: [7,1,5,3,6,4]
// Output: 5
// Explanation: Buy on day 2 (price = 1) and sell on day 5 (price = 6), profit = 6-1 = 5.
//              Not 7-1 = 6, as selling price needs to be larger than buying price.

// profit = sell - buy;

// D   0 1 2 3 4 5 6
// $   0 7 1 5 3 6 4
