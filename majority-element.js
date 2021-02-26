// Given an array nums of size n, return the majority element.

// The majority element is the element that appears more than ⌊n / 2⌋ times.
//  You may assume that the majority element always exists in the array.
/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function (nums) {
  if (nums.length <= 2) return nums[0];
  // brute force
  const hashmap = new Map();
  let limit = nums.length / 2;
  for (num of nums) {
    if (hashmap.has(num)) {
      if (hashmap.get(num) > limit || hashmap.get(num) + 1 > limit) {
        return num;
      }
      hashmap.set(num, hashmap.get(num) + 1);
    } else {
      hashmap.set(num, 1);
    }
  }
  return 0;
};
console.log(majorityElement([3, 2, 3]));
// Example 1:

// Input: nums = [3,2,3]
// Output: 3
// Example 2:

// Input: nums = [2,2,1,1,1,2,2]
// Output: 2
