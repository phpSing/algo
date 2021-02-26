/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function (n) {
  const result = [];
  let [open, close] = [n, n];
  const helper = ([open, close], paren = "") => {
    if (open === 0 && close === 0) {
      result.push(paren);
      return;
    }
    if (open > 0) {
      helper([open - 1, close], paren + "(");
    }
    if (open < close && close > 0) {
      helper([open, close - 1], paren + ")");
    }
  };
  helper([open, close]);
  return result;
};

console.log(generateParenthesis(3));

//                         n=3
//   (open > 0)             3, 3   (open < close && open > 0)

//                     2,3
//                     (

//              1,3      2,2
//             ((       ()
//         0,3    1,2
//         (((    (()
