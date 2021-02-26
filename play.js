// function generateParenthesis(n) {
//   // 3 () means we MUST use each ( or ) by 3 times in total
//   // [3, 3]
//   let [open, close] = [n, n]; // our total times for ( )
//   const answer = [];
//   // what can we do each step? and reduce them 1 by 1 ?
//   // + ( 3-1
//   // + ) 3-1
//   const helper = ([open, close], paren = "") => {
//     if (open === 0 && close === 0) {
//       answer.push(paren);
//       return;
//     }
//     if (open < close && close > 0) {
//       // we can only add close tag if open tag is less
//       helper([open, close - 1], paren + ")");
//     }
//     if (open > 0) {
//       helper([open - 1, close], paren + "(");
//     }
//   };
//   helper([open, close], "");
//   return answer;
// }

// console.log(generateParenthesis(3));

// class Play {
//   withWho() {
//     console.log("with who");
//   }
// }

// const Player = new Play();

// Player.withWho();

// Array.prototype.myFilter = function (iterator) {
//   console.log(this);
//   let currentIdx = 0;
//   const length = this.length;
//   while (currentIdx < length) {
//     if (iterator(this[currentIdx], currentIdx)) {
//       this.push(this[currentIdx]);
//     }
//     currentIdx++;
//   }
//   return this.slice(length);
// };

// console.log(
//   [1, 2, 3, 4, 5, 6].myFilter((number, index) => {
//     return number > 3;
//   })
// );

// var a = [1, 2, 3, 4];
// for (let item of a) {
//   console.log(item);
// }

// f代表需要计算的表达式，digit代表小数位数
// Math.formatFloat = function (f, digit) {
//   // Math.pow(指数，幂指数)
//   var m = Math.pow(10, digit);
//   console.log(m);
//   // Math.round（） 四舍五入
//   return Math.round(f * m) / m;
// };
// // console.log(Math.formatFloat(0.3 * 8, 1)); // 2.4
// console.log(Math.formatFloat(0.35 * 8, 2)); // 2.8
// var a = "a";
// var b = new String("a");
// var c = "a";
// console.log(a === b);
// console.log(a === c);
// console.log(a.__proto__);
// console.log(b.__proto__);
// console.log(typeof a);
// console.log(typeof b);
// console.log(b.__proto__ === String.prototype);
// console.log(Object.getPrototypeOf(b) === String.prototype);

// console.log(String.__proto__);

// var a = {};
// Object.defineProperty(a, "name", {
//   set: (callback) => {
//     console.log(this, callback, "set");
//   },
// });

// a.name = "name";

// var n = 2;
// var m = 2;
// var mn = new Number(2);
// console.log(n === m);
// console.log(n.__proto__ === mn.__proto__ && mn.__proto__ === Number.prototype);

// Function.prototype.mybind = function (newScope) {
//   const otherArgs = [...arguments].slice(1);
//   const self = this;
//   newScope.fn = self;
//   console.log(otherArgs);
//   return function () {
//     return newScope.fn(otherArgs);
//   };
// };

// function test() {
//   console.log(this.name);
//   return this.name;
// }

// const binded = test.mybind({
//   name: "tim new name!!!",
// });

// console.log(binded());

function a() {
  this.__proto__.counter = this.__proto__.counter
    ? this.__proto__.counter + 1
    : 1;
  console.log(this.__proto__.counter);
}

console.log(a());
console.log(a());
console.log(a());
console.log(a());
console.log(a());
console.log(a());
console.log(a());
console.log(a());
