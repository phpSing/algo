// /*
// Given a string with alpha-numeric characters and parentheses, return a string with balanced parentheses by removing the fewest characters possible. You cannot add anything to the string.

// balance("()") -> "()"
// balance("a(b)c)") -> "a(b)c"
// balance("ab)") -> "ab"
// balance(")(") -> ""
// balance("(((((") -> ""
// balance("(()()(") -> "()()"
// balance(")((()))(") -> "((()))"
// */

// function balance(text) {
//   // time O(n^2)
//   // space O(n^2)
//   if (!text) return "";

//   const queue = [text];
//   const OPEN = "(";
//   const CLOSE = ")";
//   // BFS
//   // we try all possibilities
//   var isValidParenString = function (str) {
//     let parenCount = 0;
//     for (let i = 0; i < str.length; i++) {
//       if (str[i] === CLOSE) {
//         parenCount--;
//         if (parenCount < 0) return false;
//       }
//       if (str[i] === OPEN) {
//         parenCount++;
//       }
//     }
//     return parenCount === 0;
//   };

//   while (queue.length > 0) {
//     const candidate = queue.shift();
//     if (isValidParenString(candidate)) {
//       return candidate;
//     }
//     for (let i = 0; i < candidate.length; i++) {
//       if (candidate[i] === CLOSE || candidate[i] === OPEN) {
//         const newCandidate = candidate.substr(0, i) + candidate.substr(i + 1);
//         // test if remove current paren works!
//         if (!queue.includes(newCandidate)) queue.push(newCandidate);
//       }
//       if (candidate[i] === OPEN) {
//         while (candidate[i + 1] === OPEN) {
//           i++;
//         }
//       } else {
//         while (candidate[i + 1] === CLOSE) {
//           i++;
//         }
//       }
//     }
//   }
//   // let right = answer.length - 1;
//   // while (answer[right] === OPEN) {
//   //   // time O(n)
//   //   answer.pop();
//   //   right--;
//   // }
//   // return answer.join("");
// }

// console.log(balance("a(b)c)"));
// console.log(balance("()())()"));
// console.log(balance("ab)"));
// console.log(balance(")((()))("));
// console.log(balance("((((("));
// console.log(balance("(()()("));
// console.log(balance(")("));
// console.log([1, 2, 3].map(parseInt));
// // [] => what status of our open close

// // [a, (,b, ), c, )]

// // a(b)c)

// // "a(b)c"

// /**
//  * @param {number} numRows
//  * @return {number[][]}
//  */
// var generate = function (numRows) {
//   if (numRows < 1) return [];
//   const answer = [[1]];
//   for (let row = 2; row <= numRows; row++) {
//     console.log(row);
//     const rowitems = [1];
//     // linear
//     for (let col = 0; col < row - 2 && row > 2; col++) {
//       console.log(col);
//       const sum = answer[row - 2][col] + (answer[row - 2][col + 1] || 0);
//       rowitems.push(sum);
//     }
//     rowitems.push(1);
//     answer.push(rowitems);
//   }
//   return answer;
// };

// console.log(generate(5));

// // [
// //      [1],
// //     [1,1],
// //    [1,2,1],
// //   [1,3,3,1],
// //  [1,4,6,4,1]
// // ]
/*
 * input: a(1)(2)(3)...(n)
 * output: 1+2+3+n
 */

// function Curry(num) {
//   console.log(num);
//   return function (args) {
//     console.log(args);
//     return Curry(num + args);
//   };
// }
