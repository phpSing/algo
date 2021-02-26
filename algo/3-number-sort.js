function threeNumberSort(array, order) {
  // Write your code here.
  const length = array.length;
  for (let orderNumber of order) {
    for (let i = 0; i < length; i++) {
      if (array[i] === orderNumber) {
        array.push(orderNumber);
      }
    }
  }
  return array.slice(length);
  // time O(n^2)
  // space O(1)
}

console.log(threeNumberSort([1, 0, 0, -1, -1, 0, 1, 1], [0, 1, -1]));
// [0, 0, 0, 1, 1, 1, -1, -1];

// Do not edit the line below.
// exports.threeNumberSort = threeNumberSort;

// in place
// time O(n^2)
// space O(1)

//
