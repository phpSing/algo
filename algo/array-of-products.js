// function arrayOfProducts(array) {
//   const answer = Array(array.length).fill(0);
//   for (let i = 0; i < array.length; i++) {
//     answer[i] = array.filter((f, _i) => _i !== i).reduce((a, b) => a * b);
//   }
//   return answer;
// time O(n^2)
// space O(n)
// }
function arrayOfProducts(array) {
  const answer = new Array(array.length).fill(1);
  const leftP = new Array(array.length).fill(1);
  const rightP = new Array(array.length).fill(1);
  let leftRunningProduct = 1;
  for (let i = 0; i < array.length; i++) {
    leftP[i] = leftRunningProduct;
    leftRunningProduct *= array[i];
  }
  let rightRunningProduct = 1;
  for (let i = array.length - 1; i >= 0; i--) {
    rightP[i] = rightRunningProduct;
    rightRunningProduct *= array[i];
  }
  for (let i = 0; i < answer.length; i++) {
    answer[i] = leftP[i] * rightP[i];
  }
  console.log(leftP);
  console.log(rightP);
  return answer;
  // time O(n)
  // space O(3n) => n
}

// 1, 2, 3, 4
console.log(arrayOfProducts([2, 3, 4, 5]));

// [3, 4, 5, 1]
// [60  20 5,  1]
// [1, 2, 3, 4, ]
// [1, 2, 6, 24]

// brute force
// loop through all elements, if same as current index, do not product.
// time O(n^2)
// space O(n)
