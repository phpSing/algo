/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function (nums, k) {
  nums.sort((a, b) => a - b); // make sure it is sorted
  const result = [];
  const table = Array(nums.length).fill(0);
  // what we did here is to count each number
  // and mark the count on a new table
  for (let i = 0; i < table.length; i++) {
    if (i === 0) {
      table[0] = 1;
      continue; // first element 1 count
    }
    if (nums[i] === nums[i - 1]) {
      // current one is same as prev
      // add 1
      table[i] = table[i - 1] + 1;
    } else {
      table[i] = 1;
    }
  }
  // once we have the counting/freq table
  // we remove the numbers with the max freq
  while (k > 0) {
    // get the max
    const max = Math.max(...table);
    // get the max index
    const maxIndex = table.indexOf(max);
    // get the integer with the max freq using this index
    result.push(nums[maxIndex]);
    // table remove the most freq integer counting, we look for the next one.
    table.splice(maxIndex - max + 1, maxIndex + 1);
    nums = nums.filter((n) => n !== nums[maxIndex]);
    k -= 1; // we found one, removed one, so k minus one, means how many left to find.
  }
  return result;
};

// problem asking for MAX
// looks like a DP problem
// 1. visual example

// K = 1
// 1
// 1

// K = 2
// 1, 1, 1, 2, 2, 3 => [1]

// K = 1
// 2, 2, 3 => [2]

// K = 0
// 3 => []

console.log(
  topKFrequent(
    [
      3,
      2,
      3,
      1,
      2,
      4,
      5,
      5,
      6,
      7,
      7,
      8,
      2,
      3,
      1,
      1,
      1,
      10,
      11,
      5,
      6,
      2,
      4,
      7,
      8,
      5,
      6,
    ],
    10
  )
);
