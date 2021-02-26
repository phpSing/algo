// function smallestDifference(arrayOne, arrayTwo) {
//   // time O(n^2)
//   // space O(2)
//   let [answer1, answer2] = Array(2).fill(0);
//   let min = Infinity;
//   for (num of arrayOne) {
//     for (num2 of arrayTwo) {
//       const diff = Math.abs(num - num2);
//       if (diff < min) {
//         min = diff;
//         [answer1, answer2] = [num, num2];
//       }
//     }
//   }
//   return [answer1, answer2];
// }
function smallestDifference(arrayOne, arrayTwo) {
  // time O(n^2)
  // space O(2)
  let [answer1, answer2] = Array(2).fill(0);
  let min = Infinity;
  for (num of arrayOne) {
    for (num2 of arrayTwo) {
      const diff = Math.abs(num - num2);
      if (diff < min) {
        min = diff;
        [answer1, answer2] = [num, num2];
      }
    }
  }
  return [answer1, answer2];
}

console.log(smallestDifference([-1, 5, 10, 20, 28, 3], [26, 134, 135, 15, 17]));
