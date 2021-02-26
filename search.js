// You are given an integer array nums sorted in ascending order, and an integer target.

// Suppose that nums is rotated at some pivot unknown to you beforehand (i.e., [0,1,2,4,5,6,7] might become [4,5,6,7,0,1,2]).

// If target is found in the array return its index, otherwise, return -1.
// Input: nums = [4,5,6,7,0,1,2], target = 3
let nums = [4, 5, 6, 7, 0, 1, 2];

const search = (nums, target) => {
  let pos = -1;
  // const sortasc = (nums) => {
  //   if (nums.length <= 1) return nums;
  //   let tester = nums[0];
  //   const left = [];
  //   const right = [];
  //   for (let i = 1; i < nums.length; i++) {
  //     const element = nums[i];
  //     if (element > tester) {
  //       right.push(element);
  //     } else {
  //       left.push(element);
  //     }
  //   }
  //   return [...sortasc(left), tester, ...sortasc(right)];
  // };
  // const sorted = sortasc(nums);
  // console.log(sorted);
  for (let i = 0; i < nums.length; i++) {
    const element = nums[i];
    if (element === target) {
      pos = i;
      break;
    }
  }
  return pos;
};

console.log(search(nums, 7));
