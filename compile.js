function fn(a) {
  console.log(a);
  var a = 123;
  console.log(a);
  function a() {}
  console.log(a);
  var b = function () {};
  console.log(b);
  function d() {}
  console.log(d);
}
fn(1);
// 1、创建 AO 对象
// AO = {}

// 2、找形参和变量声明，将形参和变量名作为 AO 对象的属性名，值为 undefined
// AO = {
// 	a: undefined,
// 	b: undefined,
// }

// 3、将形参与实参值统一
// AO = {
// 	a: 1,
// 	b: undefined
// }

// 4、在函数体中找函数声明，将函数名添加到 AO 对象的属性中，值为函数体。
// AO = {
// 	a: function a() {},
// 	b: undefined,
// 	d: function d() {}
// }
// 预编译完成后得到的 AO 对象

// function fn(a) {
//   console.log(a); // function a() {}
//   var a = 123;
//   console.log(a); // 123 这时的 AO 对象变成
//   AO = {
//     a: 123,
//     b: undefined,
//     d: function d() {},
//   };
//   function a() {}
//   console.log(a); // 123
//   var b = function () {}; // 这时的 AO 对象变成
//   AO = {
//     a: 123,
//     b: function () {},
//     d: function d() {},
//   };
//   console.log(b); // function() {}
//   function d() {}
//   console.log(d); // function d() {}
// }

// 结合 内存空间
// 结合 event loop

// GO
console.log(a);
var a = 123;
function a() {}
console.log(a);

// 第一步：创建 GO( Global Object ) 对象
// GO = {}

// 第二步：找变量声明
// GO = {
// 	a: undefined,
// }

// 第三步：找函数声明
// GO = {
// 	a: function a() {},
// }

// 预编译完成后得到的 GO 对象

// 函数运行结果：
// console.log(a);          // function a() {}
// var a = 123;
// function a() {}
// console.log(a);          // 123
var a = { n: 1 };
var b = a;
a.x = a = { n: 2 };
console.log(a);
console.log(b);
