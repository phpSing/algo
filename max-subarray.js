// Given an integer array nums, find the contiguous subarray (containing at least one number)
// which has the largest sum and return its sum.

// Follow up: If you have figured out the O(n) solution,
// try coding another solution using the divide and conquer approach, which is more subtle.

/**
 * @param {number[]} nums
 * @return {number}
 */

var maxSubArray = function (nums) {
  const table = Array(nums.length).fill(-Infinity);
  for (let i = 0; i < table.length; i++) {
    if (i === 0) {
      table[i] = nums[i];
      continue;
    }
    const prevMaxSum = table[i - 1];
    table[i] = Math.max(nums[i], nums[i] + prevMaxSum);
  }
  console.log(table);
  return Math.max(...table);
};
// find each max for previous index  as the end of the subarray, and plus self,
//  u get current index max subarray sum
console.log(maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4]));
// [-2, 1, -3]
// max([-2], [1], [-3], max([-2,1]), max([1,-3]), [-2,1,-3])
//
// Example 1:

// Input: nums = [-2,1,-3,4,-1,2,1,-5,4]
// Output: 6
// Explanation: [4,-1,2,1] has the largest sum = 6.
// Example 2:

// Input: nums = [1]
// Output: 1
// Example 3:

// Input: nums = [0]
// Output: 0
// Example 4:

// Input: nums = [-1]
// Output: -1
// Example 5:

// Input: nums = [-2147483647]
// Output: -2147483647
