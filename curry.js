// 柯里化函数
// const curry = function (fn) {
//   return function nest(...args) {
//     // fn.length表示函数的形参个数
//     if (args.length === fn.length) {
//       // 当参数接收的数量达到了函数fn的形参个数，即所有参数已经都接收完毕则进行最终的调用
//       return fn(...args);
//     } else {
//       // 参数还未完全接收完毕，递归返回judge，将新的参数传入
//       return function (arg) {
//         return nest(...args, arg);
//       };
//     }
//   };
// };

// function addNum(a, b, c) {
//   return a + b + c;
// }

// const addCurry = curry(addNum);

// addCurry(1)(2)(3); // 6

//实现函数add
//add(2,3,4).sumOf()
//add(2)(3)(4).sumOf()
//add(2,3)(4).sumOf()

// function add(a, b, c) {
//   return {
//     sumOf: function () {
//       return a + b + c;
//     },
//   };
// }

// console.log(add(2, 3, 4).sumOf());
function sum() {
  let arr = [...arguments];
  let fn = function () {
    let arr2 = [...arguments];
    return sum.apply(null, arr.concat(arr2)); //累积参数
  };
  fn.toString = function () {
    return arr.reduce((v, n) => v + n); // get sum
  };
  fn.sumOf = function () {
    return arr.reduce((v, n) => v + n); // get sum
  };
  return fn;
}

console.log(sum(1)(2, 3)(4, 5, 6)); // f 21
console.log(sum(1)(2, 3)(4, 5, 6).sumOf()); // f 21
