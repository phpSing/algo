// Given a m * n matrix mat and an integer K, return a matrix answer
// where each answer[i][j] is the sum of all elements mat[r][c]
// for i - K <= r <= i + K, j - K <= c <= j + K, and (r, c) is a valid position in the matrix.

/**
 * @param {number[][]} mat
 * @param {number} K
 * @return {number[][]}
 */
var matrixBlockSum = function (mat, K) {
  // i - K <= r <= i + K,
  // j - K <= c <= j + K,
  const rowMax = mat.length;
  const colMax = mat[0].length;
  let presum = Array(rowMax + 1)
    .fill([])
    .map(() => Array(colMax + 1).fill(0));
  let answer = Array(rowMax)
    .fill([])
    .map((a) => {
      return Array(colMax).fill(0);
    });
  for (let i = 0; i < rowMax; i++) {
    for (let j = 0; j < colMax; j++) {
      presum[i + 1][j + 1] =
        mat[i][j] + presum[i + 1][j] + presum[i][j + 1] - presum[i][j];
    }
  }
  console.log(presum);
  for (let i = 0; i < rowMax; i++) {
    for (let j = 0; j < colMax; j++) {
      [r1, c1] = [Math.max(0, i - K), Math.max(0, j - K)];
      [r2, c2] = [Math.min(rowMax - 1, i + K), Math.min(colMax - 1, j + K)];
      answer[i][j] =
        presum[r2 + 1][c2 + 1] -
        presum[r1][c2 + 1] -
        presum[r2 + 1][c1] +
        presum[r1][c1];
    }
  }
  return answer;
};
//          K = 1
//                  #0       #1       #2
//          #0       1,      2,      3

//          #1       4,      5,      6

//          #2       7,      8,      9

//                  #0       #1       #2
//          #0       12,      21,      16

//          #1       27,      45,      33

//          #2       0,      0,      0

//   BFS

//   stack[mat[0][0]] => itself top left right bottom, tl, tr, bl, br if valid, sum it, insert into answer[0][0], put them also into
//   the stack
//   0- 1 <= r <= 0+ 1, => -1, 0, 1
//   1- 1 <= c <= 1+ 1, => 0, 1, 2 [0, 0] [0,1] [0,2] [1, 0], [1,1] [1,2]
// answer[0][1] =  [0, 0] [0,1] [0,2] [1, 0], [1,1] [1,2]
//                 1 + 2 + 3 + 4 + 5 + 6
console.log(
  matrixBlockSum(
    [
      [1, 2, 3],
      [4, 5, 6],
      [7, 8, 9],
    ],
    1
  )
);
// Example 1:

// Input: mat = [[1,2,3],[4,5,6],[7,8,9]], K = 1
// Output: [[12,21,16],[27,45,33],[24,39,28]]
// Example 2:

// Input: mat = [[1,2,3],[4,5,6],[7,8,9]], K = 2
// Output: [[45,45,45],[45,45,45],[45,45,45]]
