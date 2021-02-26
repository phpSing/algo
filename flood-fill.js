// Input:
// image = [[1,1,1],[1,1,0],[1,0,1]]
// sr = 1, sc = 1, newColor = 2
// Output: [[2,2,2],[2,2,0],[2,0,1]]
// Explanation:
// From the center of the image (with position (sr, sc) = (1, 1)), all pixels connected
// by a path of the same color as the starting pixel are colored with the new color.
// Note the bottom corner is not colored 2, because it is not 4-directionally connected
// to the starting pixel.
/**
 * @param {number[][]} image
 * @param {number} sr
 * @param {number} sc
 * @param {number} newColor
 * @return {number[][]}
 */
var floodFill = function (image, row, col, newColor) {
  const rowLimit = image.length - 1;
  const colLimit = image[0].length - 1;
  const stack = [[row, col]];
  const filled = {};
  const fill = ([r, c]) => {
    image[r][c] = newColor;
    filled[`${r},${c}`] = true;
  };
  const getRelative = ([r, c], direction) => {
    const originColor = image[r][c];
    if (direction === "up") {
      r -= 1;
    }
    if (direction === "down") {
      r += 1;
    }
    if (direction === "left") {
      c -= 1;
    }
    if (direction === "right") {
      c += 1;
    }
    if (r < 0 || r > rowLimit || c < 0 || c > colLimit) return null;
    const relativeColor = image[r][c];
    return relativeColor !== undefined &&
      relativeColor === originColor &&
      !filled[`${r},${c}`]
      ? [r, c]
      : null;
  };
  while (stack.length > 0) {
    const [r, c] = stack.shift();
    const up = getRelative([r, c], "up");
    const down = getRelative([r, c], "down");
    const left = getRelative([r, c], "left");
    const right = getRelative([r, c], "right");
    if (up !== null) {
      stack.push(up);
    }
    if (down !== null) {
      stack.push(down);
    }
    if (left !== null) {
      stack.push(left);
    }
    if (right !== null) {
      stack.push(right);
    }
    fill([r, c]);
  }
  return image;
};

console.log(
  floodFill(
    [
      [1, 1, 1],
      [1, 1, 0],
      [1, 0, 1],
    ],
    1,
    1,
    2
  )
);
