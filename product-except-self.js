/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function (nums) {
  const length = nums.length;
  const answer = Array(length).fill(1);
  const leftp = Array(length).fill(1); // to store all product to the left of i
  const rightp = Array(length).fill(1); // to store all profuct to the right of i
  // so we loop through i, just product the left and right to the i
  for (let i = 1; i < leftp.length; i++) {
    leftp[i] = nums[i - 1] * leftp[i - 1];
  }
  for (let j = rightp.length - 2; j >= 0; j--) {
    rightp[j] = nums[j + 1] * rightp[j + 1];
  }
  for (let i = 0; i < nums.length; i++) {
    answer[i] = leftp[i] * rightp[i];
  }
  return answer;
};

// 1, 2, 3, 4
// 1, 1, 2, 6  => accumulated product from left side excluding current i
//
// [10, 2, 5, 10];

console.log(productExceptSelf([1, 2, 3, 4]));
