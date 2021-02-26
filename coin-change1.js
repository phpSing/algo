/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
// You are given coins of different denominations and a
// total amount of money amount. Write a function to compute the
// fewest number of coins that you need to make up that amount.
// If that amount of money cannot be made up by any combination of the coins, return -1.

// You may assume that you have an infinite number of each kind of coin.

var coinChange = (coins, amount) => {
  const table = Array(amount + 1).fill(amount + 1);
  //   console.log(table);
  table[0] = 0; // table[i] represents the minimum number of coins to make up amount i
  for (let i = 1; i <= amount; i++) {
    for (coin of coins) {
      if (coin > i) {
        continue;
      }
      const prevAmount = i - coin;
      table[i] = Math.min(table[prevAmount] + 1, table[i]);
    }
  }
  console.log(table);
  return table[amount] === amount + 1 ? -1 : table[amount];
};
// console.log(coinChange([186, 419, 83, 408], 6249));
console.log(coinChange([1, 4, 5], 100));
// 5(-1)(-4)(-5);

//  0    1   2      3       4           5       6           7           8               9           10  11
// -1   -1  -1      -1      -1          -1      -1          -1          -1              -1          -1   -1

// Example 1:

// Input: coins = [1,2,5], amount = 11
// Output: 3
// Explanation: 11 = 5 + 5 + 1
// Example 2:

// Input: coins = [2], amount = 3
// Output: -1
// Example 3:

// Input: coins = [1], amount = 0
// Output: 0
// Example 4:

// Input: coins = [1], amount = 1
// Output: 1
// Example 5:

// Input: coins = [1], amount = 2
// Output: 2
