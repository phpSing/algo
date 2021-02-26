function largestRange(array) {
  // Write your code here.
  array = quickSort(array);
  console.log(array);
  let max = [array[0], array[0]];
  let range = [array[0], array[0]];
  for (let i = 0; i < array.length; i++) {
    if (array[i] + 1 === array[i + 1] || array[i] === array[i + 1]) {
      // move end range +1
      range[1] = array[i + 1];
    } else {
      // shut down the range
      if (range[1] - range[0] > max[1] - max[0]) {
        max = range;
      }
      range = [array[i + 1] || -1, array[i + 1] || -1];
    }
  }
  return max;
}

const quickSort = (array) => {
  if (array.length <= 1) return array;
  const pivot = array[0];
  const left = [];
  const right = [];
  for (let i = 1; i < array.length; i++) {
    const element = array[i];
    if (element > pivot) {
      right.push(element);
    } else {
      left.push(element);
    }
  }
  return [...quickSort(left), pivot, ...quickSort(right)];
};

console.log(
  largestRange([
    0,
    -5,
    9,
    19,
    -1,
    18,
    17,
    2,
    -4,
    -3,
    10,
    3,
    12,
    5,
    16,
    4,
    11,
    7,
    -6,
    -7,
    6,
    15,
    12,
    12,
    2,
    1,
    6,
    13,
    14,
    -2,
  ])
);
// Do not edit the line below.
// exports.largestRange = largestRange;
