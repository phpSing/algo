/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var rotate = function (matrix) {
  const mirror = matrix.map((m) => [...m]);
  const length = mirror.length;
  for (let i = 0; i < length; i++) {
    // get moving elements
    console.log(mirror);
    let moving = mirror[i].filter((m, idx) => idx !== i);
    console.log(moving);
    for (let j = 0; j < length; j++) {
      if (i === j) continue;
      matrix[j][i] = moving.shift();
    }
    console.log(matrix);
  }
  matrix.forEach((m) => m.reverse());
  return matrix;
};
// Input: matrix = [
//   [1, 2, 3], => 2, 3 => 1,0 2,0
//   [4, 5, 6], => 4, 6 => 0,1 2,1
//   [7, 8, 9], => 7, 8 => 0,2 1,2
// ];
// Output: [
//   [7, 4, 1],
//   [8, 5, 2],
//   [9, 6, 3],
// ];
console.log(
  rotate([
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
  ])
);

// // 1, 2, 3 => take out last 2 digits
// // 4, 5, 6 => append to each array by order
// // 7, 8, 9

// index = 0
//     // 1, => take out last 2 digits
//     // 2, 4, 5, 6 => append to each array by order
//     // 3, 7, 8, 9
//     index, 0 remain 1
//     index, 1 => 1.unshift
//     index, 2 => 2.unshift

// index = 1
//     // 4, 1, =>
//     // 2, 5  => take out last 2 digits, unshift to other rows by order
//     // 6, 3, 7, 8, 9

//     index, 0 => 0.unshift
//     index, 1 remain 5
//     index, 2 => 2.unshift

// index = 2
//     // 7, 4, 1, =>w
//     // 8, 2, 5  => take out last 2 digits, unshift to other rows by order
//     // 6, 3, 9
//     index, 0 => 0.unshift
//     index, 1 => 1.unshift
//     index, 2 remain 9
