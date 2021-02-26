function howSum(remainTarget, nums, memo = {}) {
  if (remainTarget in memo) {
    return memo[remainTarget];
  }
  if (remainTarget === 0) return [];
  if (remainTarget < 0) return null;
  for (let num of nums) {
    const remain = remainTarget - num;
    const path = howSum(remain, nums, memo);
    if (path) {
      memo[remain] = [num, ...path];
      return memo[remain];
    }
  }
  memo[remainTarget] = null;
  return memo[remainTarget];
}

console.log(howSum(7, [5, 3, 4, 7, 6]));
console.log(howSum(300, [7, 14]));
