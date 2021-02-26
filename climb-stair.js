// 70. Climbing Stairs
// You are climbing a staircase. It takes n steps to reach the top.

// Each time you can either climb 1 or 2 steps. In how many distinct ways can you climb to the top?
/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function (n) {
  const table = Array(n + 1).fill(1); // default there are no ways to reach
  for (let i = 1; i < table.length; i++) {
    if (i === 1) {
      // to stair 1, we only have one option
      table[i] = 1;
      continue;
    }
    table[i] = table[i - 1] + table[i - 2];
  }
  return table.pop();
};

console.log(climbStairs(3));

// Example 1:
//     0, 1, 2  3  4   S(2) = 1 + max(S(2-1), S(2-2))
// S   0, 1, 2  3  5
// Input: n = 2
// Output: 2
// Explanation: There are two ways to climb to the top.
// 1. 1 step + 1 step
// 2. 2 steps
// Example 2:

// Input: n = 3
// Output: 3
// Explanation: There are three ways to climb to the top.
// 1. 1 step + 1 step + 1 step
// 2. 1 step + 2 steps
// 3. 2 steps + 1 step
