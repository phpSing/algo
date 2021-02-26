/**
 * @param {number[]} nums
 * @return {number}
 */
/**
 * @param {number[]} nums
 * @return {number}
 */
/**
 * @param {number[]} nums
 * @return {number}
 */
var firstMissingPositive = function (nums) {
  nums.sort((a, b) => a - b);
  if (nums.length < 1) return 1;
  const table = Array(nums.length).fill(1);
  if (nums[0] < 1) table[0] = 1;
  if (nums[0] === 1) table[0] = table[0] + 1;
  for (let i = 0; i < table.length; i++) {
    if (nums[i] < 0) continue;
    if (i > 0 && nums[i] > table[i - 1]) {
      if (nums[i] - table[i - 1] >= 1) {
        table[i] = table[i - 1];
      }
    }
    if (i > 0 && nums[i] === table[i - 1]) {
      // add one
      table[i] = table[i - 1] + 1;
    }
    if (i > 0 && nums[i] < table[i - 1]) {
      table[i] = table[i - 1];
    }
  }
  return table.pop();
};

console.log(firstMissingPositive([1, 1]));
