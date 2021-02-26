// Sort the odd
// You will be given an array of numbers. You have to sort the odd numbers in
// ascending order while leaving the even numbers at their original positions.
// [7, 1]  =>  [1, 7]
// [5, 8, 6, 3, 4]  =>  [3, 8, 6, 5, 4]
// [9, 8, 7, 6, 5, 4, 3, 2, 1, 0]  =>  [1, 8, 3, 6, 5, 4, 7, 2, 9, 0]
var sortOdd = (nums) => {
  if (nums.length < 1) return [];
  // const left = [];
  // const right = [];
  // const start = nums[0];
  // for (let i = 1; i < nums.length; i++) {
  //   if (nums[i] < start && nums[i] % 2 !== 0 && start % 2 !== 0) {
  //     left.push(nums[i]);
  //   }
  //   if (nums[i] > start && nums[i] % 2 !== 0 && start % 2 !== 0) {
  //     right.push(nums[i]);
  //   }
  // }
  // return [...sortOdd(left), start, ...sortOdd(right)];
  for (let i = 0; i < nums.length - 1; i++) {
    const left = nums[i];
    for (let j = i + 1; j < nums.length; j++) {
      const right = nums[j];
      if (left % 2 !== 0 && right % 2 !== 0) {
        // both odd
        //   swap position if left is bigger
        if (left > right) {
          const temp = left;
          nums[i] = right;
          nums[j] = temp;
        }
      }
    }
  }
  return nums;
};

console.log(sortOdd([9, 8, 7, 6, 5, 4, 3, 2, 1, 0]));
