// 746. Min Cost Climbing Stairs
// On a staircase, the i-th step has some non-negative cost cost[i] assigned (0 indexed).

// Once you pay the cost, you can either climb one or two steps.
//  You need to find minimum cost to reach the top of the floor,
//  and you can either start from the step with index 0, or the step with index 1.
/**
 * @param {number[]} cost
 * @return {number}
 */
var minCostClimbingStairs = function (cost) {
  const table = Array(cost.length + 1).fill(0);
  console.log(table);
  for (let i = 0; i < table.length; i++) {
    if (i <= 1) {
      table[i] = 0; // 1st 2nd step is free of cost to get to it
      continue;
    }
    // the min cost to step i is the min cost get to i-1 and i-2 plus the cost of using them
    table[i] = Math.min(cost[i - 1] + table[i - 1], cost[i - 2] + table[i - 2]);
  }
  console.log(table);
  return table.pop();
};
console.log(minCostClimbingStairs([10, 15, 20]));
//         10               15                   20                      0
// min(0) = cost[0]                                           min(i) = min(min(n-1), min(n-2))

// 0   1   2   3
// 0   0   10 => min((cost[2-1] + table[2-1]), (cost[2-2] + table[2-2])) = 10
// Example 1:
// Input: cost = [10, 15, 20]
// Output: 15
// Explanation: Cheapest is start on cost[1], pay that cost and go to the top.
// Example 2:
// Input: cost = [1, 100, 1, 1, 1, 100, 1, 1, 100, 1]
// Output: 6
// Explanation: Cheapest is start on cost[0], and only step on 1s, skipping cost[3].
