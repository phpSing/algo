function spiralTraverse(array) {
  // Write your code here.
  // time O(n) => n = all numbers in array
  // space O(n)
  const answer = [];
  let direction = "right";
  let ceil = 0;
  let floor = array.length - 1;
  let left = 0;
  let right = array[0].length - 1;
  let runningRow = 0; // start with first row
  let runningCol = 0; // start with first col
  while (answer.length < array.length * array[0].length) {
    answer.push(array[runningRow][runningCol]);
    // our index move
    if (direction === "right") {
      runningCol += 1;
      if (runningCol > right) {
        runningCol = right;
        direction = "down";
        runningRow += 1;
        ceil += 1;
        continue;
      }
    }
    if (direction === "down") {
      runningRow += 1;
      if (runningRow > floor) {
        runningRow = floor;
        direction = "left";
        runningCol -= 1;
        right -= 1;
        continue;
      }
    }
    if (direction === "left") {
      runningCol -= 1;
      if (runningCol < left) {
        runningCol = left;
        direction = "up";
        runningRow -= 1;
        floor -= 1;
        continue;
      }
    }
    if (direction === "up") {
      runningRow -= 1;
      if (runningRow < ceil) {
        runningRow = ceil;
        direction = "right";
        runningCol += 1;
        left += 1;
        continue;
      }
    }
  }
  return answer;
}

console.log(
  spiralTraverse([
    [1, 2, 3, 4],
    [12, 13, 14, 5],
    [11, 16, 15, 6],
    [10, 9, 8, 7],
  ])
);

// [[1], [2], [3]]
// rows = 3, cols = 1
// [1, 2, 3] => [row:0, col:0], [row:1, col:0], [row:2, col:0]

// [1,2],
// [2,3],
// [3,4]
// rows = 2, cols = 1 = limit
// [1, 2, 3, 4, 3, 2]            !                       !                      !
// => [row:0, col:0], [row:0, col:1], [row:1, col:1], [row:2, col:1], [row:2, col:0], [row:1, col:0],
// =>increaseCol            increaseRow = true      decreaseCol = true        decreaseRow = true
