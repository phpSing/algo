function canSum(remainTarget, nums, memo = {}) {
  if (remainTarget in memo) return memo[remainTarget];
  if (remainTarget === 0) return true;
  if (remainTarget < 0) return false;
  for (let num of nums) {
    const remain = remainTarget - num;
    if (canSum(remain, nums, memo)) {
      memo[remainTarget] = true;
      return true;
    }
  }
  memo[remainTarget] = false;
  return false;
}

// function canSum(target, numbers) {
//   // create the table
//   let table = Array(target + 1).fill(false);
//   table[0] = true;
//   //   for (t in table) {
//   //   }
//   for (t in table) {
//     if (numbers.findIndex((n) => n == t) !== -1) {
//       table[t] = true;
//     }
//     for (number of numbers) {
//       if (table[t] === true) {
//         const future = Number(t) + number;
//         if (future <= table.length) {
//           table[future] = true;
//         }
//       }
//     }
//   }
//   return table[target];
// }

// 0 1 2 3 4 5 6 7 8 9 10
// T T F F F F F F F F F
console.log(canSum(10, [1, 2, 5]));
// console.log(canSum(300, [7, 14]));
