function dp(x, y, memo = {}) {
  if (`${x},${y}` in memo) {
    return memo[`${x},${y}`];
  }
  if (`${y}${x}` in memo) {
    return memo[`${y},${x}`];
  }
  if (x === 0 || y === 0) return 0;
  if (x === 1 || y === 1) return 1;
  memo[`${x},${y}`] = memo[`${y},${x}`] =
    dp(x - 1, y, memo) + dp(x, y - 1, memo);
  return memo[`${x},${y}`];
}

console.log(dp(18, 18));
