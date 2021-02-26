// Example 1:

// Input: nums = [10,9,2,5,3,7,101,18]
// Output: 4
// Explanation: The longest increasing subsequence is [2,3,7,101], therefore the length is 4.

/**
 * @param {number[]} nums
 * @return {number}
 */
var lengthOfLIS = function (nums) {
  const table = Array(nums.length).fill(1); // minimum 1 length
  for (let i = 1; i < nums.length; i++) {
    let subproblems = table.filter(
      (t, vindex) => nums[vindex] < nums[i] && vindex < i
    );
    const subMax = Math.max(...subproblems, 0);
    table[i] = 1 + subMax;
  }
  console.log(path);
  return Math.max(...table, 0);
};

console.log(lengthOfLIS([10, 9, 2, 5, 3, 7, 101, 18]));
