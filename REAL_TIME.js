setTimeout(() => {
  console.log("a"); // mac2_1
}, 10);

var p = new Promise((resolve) => {
  console.log("b"); // mac1_1
  resolve();
});

p.then(() => {
  console.log("c"); //  mic1_1
});

p.then(() => {
  console.log("d"); // mic1_2
});

console.log("e"); // mac1_2

// b, e, c, d, a

function Foo() {
  Foo.a = function () {
    console.log(1);
  };
  this.a = function () {
    console.log(2);
  };
}
Foo.prototype.a = function () {
  console.log(3);
};
Foo.a = function () {
  console.log(4);
};
Foo.a();
let obj = new Foo();
obj.a();
Foo.a();

// 4 2 1

function changeObjProperty(o) {
  o.siteUrl = "http://www.baidu.com";
  o = new Object();
  o.siteUrl = "http://www.google.com";
}
let webSite = new Object();
changeObjProperty(webSite);
console.log(webSite.siteUrl);

// ram_o_siteurl = "http://www.baidu.com";
// ram_o = {
//   siteUrl: ram_o_siteurl,
// };
// ram_o2_siteurl = "http://www.google.com";
// ram_o_2 = {
//   siteUrl: ram_o2_siteurl,
// };

// o = ram_o_2;

// 利用html css 编写样式，div垂直body居中、div内的text垂直居中，div高度等于body宽度的一半（第一题就难住我了，充分暴露了我css功底极差的问题，跪，但终究还是写了点）

// 第二题判断if([] == false) {} , if({} == false) {} , if([]) {} 不会，跪 （最后一面小哥给我讲下，人不错，good）
// 利用宏任务，微任务的知识点判断程序输出（easy ok)
// bind函数实现(ok)
// trottle函数实现（ok， 可以用任务队列也可以只维护一个function， 我用的队列）
// 给定一个不含重复数字的数组arr,指定个数n,目标和sum,判断是否含有由n个不同数字相加得到sum的情况（ok, leetcode 40 变种， 数字不得重复使用）
