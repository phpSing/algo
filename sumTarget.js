/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function (candidates, target) {
  let result = [];
  // sort it first
  candidates.sort((a, b) => a - b);
  for (let i = 0; i < candidates.length - 2; i++) {
    // loop 2 sides
    let leftIndex = i + 1;
    let rightIndex = candidates.length - 1;
    while (leftIndex < rightIndex) {
      const sum =
        candidates[i] + candidates[leftIndex] + candidates[rightIndex];
      if (sum === target) {
        result.push([
          candidates[i],
          candidates[leftIndex],
          candidates[rightIndex],
        ]);
        break;
      }
      if (sum > target) {
        rightIndex -= 1;
      }
      if (sum < target) {
        leftIndex += 1;
      }
    }
  }
  return result;
};

// console.log(combinationSum([10, 1, 2, 7, 6, 1, 5], 8));

/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum2 = function (candidates, target) {
  const result = [];
  candidates.sort((b, a) => b - a);
  const helper = (remaining, start, currentPath) => {
    if (remaining < 0) return;
    if (remaining === 0) {
      result.push(currentPath.slice());
      return;
    }

    for (let i = start; i < candidates.length; i++) {
      // 如果当前数字和之前一样，跳过
      if (i > start && candidates[i] === candidates[i - 1]) continue;
      currentPath.push(candidates[i]); // 把当前节点，排到路径里 暂时相信从他这往后能找到更多路径消到0
      helper(remaining - candidates[i], i + 1, currentPath.slice());
      // 从当前路径把剩余任务交过去，如果还有剩余值，开始往后再一个个试，
      // 当前路径已经到0的就存到result退出，其他情况退出递归
      currentPath.pop();
    }
  };

  helper(target, 0, []);
  console.log(result);
  return result;
};
console.log("====================================");
console.log("====================================");
console.log("====================================");
console.log("====================================");
console.log("====================================");
console.log("====================================");
console.log("====================================");
console.log("====================================");
console.log("====================================");
console.log("====================================");
console.log("====================================");
console.log("====================================");
console.log("====================================");
console.log("====================================");
console.log("====================================");
console.log("====================================");
console.log("====================================");
console.log("====================================");
console.log("====================================");
console.log("====================================");
combinationSum2([1, 2, 3, 3, 4, 4, 5, 5, 6, 7, 9], 10);
