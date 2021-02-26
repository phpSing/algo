// Input: nums = [2,7,11,15], target = 9
// Output: [0,1]
// Output: Because nums[0] + nums[1] == 9, we return [0, 1].
var twoSum = (nums, target) => {
  if (!nums || nums.length < 2) {
    return [];
  }
  let result = [];
  function next(remain, branch, combo) {
    console.log("combo", combo);
    console.log("remain", remain);
    if (remain === 0) {
      result = [...combo];
      return;
    }
    if (remain < 0) {
      combo.pop();
    }
    for (let i = branch; i < nums.length; i++) {
      combo.push(i);
      next(remain - nums[i], i + 1, [...combo]);
      combo.pop();
    }
  }
  next(target, 0, []);
  console.log(result);
  return result;
};

twoSum([0, 4, 3, 0], 0);
