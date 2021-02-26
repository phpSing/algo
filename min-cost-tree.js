// // Given an array arr of positive integers, consider all binary trees such that:

// // Each node has either 0 or 2 children;
// // The values of arr correspond to the values of each leaf in an
// // in-order traversal of the tree.  (Recall that a node is a leaf if and only if it has 0 children.)
// // The value of each non-leaf node is equal to the product of the largest leaf value
// // in its left and right subtree respectively.
// // Among all possible binary trees considered, return the smallest
// // possible sum of the values of each non-leaf node.  It is guaranteed this sum fits into a 32-bit integer.
// /**
//  * @param {number[]} arr
//  * @return {number}
//  */
// var mctFromLeafValues = function (arr) {
//   // base case one of the number is zero, the final answer will be 0
//   if (arr.length === 2) return arr[0] * arr[1];
//   const table = arr.map((n) => [n, n]);
//   const isSingleTree = arr.length % 2 === 0;
//   const getMaxOfLeaf = (mergeArray) => {
//     if (mergeArray.length === 2) {
//       return [
//         mergeArray[0][0] * mergeArray[1][0],
//         Math.max(mergeArray[0][1], mergeArray[1][1]),
//       ];
//     }
//     const prehalf = getMaxOfLeaf(mergeArray.slice(0, mergeArray.length / 2));
//     const posthalf = getMaxOfLeaf(mergeArray.slice(mergeArray.length / 2));
//     let sum = prehalf[0] + posthalf[0];
//     if (table.length === mergeArray.length) {
//       // root level
//       sum += prehalf[1] * posthalf[1];
//     }
//     return [
//       // product of 1st element
//       sum,
//       Math.max(prehalf[1], posthalf[1]),
//     ];
//   };
//   if (!isSingleTree) {
//     const first = table[0];
//     const last = table[table.length - 1];
//     const roots = [
//       getMaxOfLeaf(table.slice(1)),
//       getMaxOfLeaf(table.slice(0, table.length - 1)),
//     ];
//     //   console.log(first);
//     //   console.log(roots[0]);
//     //   console.log(last);
//     //   console.log(roots[1]);
//     return Math.min(
//       roots[0][0] + roots[0][1] * first[1],
//       roots[1][0] + roots[1][1] * last[1]
//     );
//   }
//   return getMaxOfLeaf(table)[0];
// };

// //                  [205, 15]  =>
// //      195 [195, 15]             15 [15, 5]
// // 15           13          5           3
// console.log(mctFromLeafValues([15, 13, 5, 3, 15]));
// // Example 1:

// //   0 only one non-leaf = 0 [0, 1]
// //  / \
// // 0   1

//              54,9,102
//     12  12,6       36 36,9         15
// 6,      2,      4,      9,      5,      3,      2;
// // [6, 2, 4, 9, 5, 3, 2];
// // Input: arr = [6,2,4]
// // Output: 32
// // Explanation:
// // There are two possible trees.  The first has non-leaf node sum 36,
// // and the second has non-leaf node sum 32.
