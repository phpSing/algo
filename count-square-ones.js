// Given a m * n matrix of ones and zeros, return how many square submatrices have all ones.

/**
 * @param {number[][]} matrix
 * @return {number}
 */
var countSquares = function (matrix) {
  let rows = matrix.length;
  let cols = matrix[0].length;
  let table = Array(rows)
    .fill([])
    .map((a) => {
      return Array(cols).fill(0);
    });
  let count = 0;
  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < cols; c++) {
      // self
      table[r][c] += matrix[r][c];
      if (table[r][c] !== 0) {
        table[r][c] += Math.min(
          c >= 1 && table[r][c - 1],
          r >= 1 && c >= 1 && table[r - 1][c - 1],
          r >= 1 && table[r - 1][c]
        );
      }
      count += table[r][c];
    }
  }
  console.log(table);
  return count;
  //   answer[i][j] = presum[i + 1][j + 1];
};

console.log(
  countSquares([
    [0, 0, 0],
    [0, 1, 0],
    [0, 1, 0],
    [1, 1, 1],
    [1, 1, 0],
  ])
);

// Example 1:

// Input: matrix =
// [
//   [0,1,1,1],
//   [1,1,1,1],
//   [0,1,1,1]
// ]
// Output: 15
// Explanation:
// There are 10 squares of side 1.
// There are 4 squares of side 2.
// There is  1 square of side 3.
// Total number of squares = 10 + 4 + 1 = 15.

// Example 2:

// Input: matrix =
// [
//   [1,0,1],
//   [1,1,0],
//   [1,1,0]
// ]
// Output: 7
// Explanation:
// There are 6 squares of side 1.
// There is 1 square of side 2.
// Total number of squares = 6 + 1 = 7.
