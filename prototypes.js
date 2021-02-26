let human = {
  teeth: 32,
};

let gwen = {
  __proto__: human,
  age: 19,
};

console.log(human.age); // ? undefined
console.log(gwen.age); // ? 19

console.log(human.teeth); // ? 32
console.log(gwen.teeth); // ? 32

console.log(human.tail); // ? undefined
console.log(gwen.tail); // ? undefined

// ram_human_teeth = 32;
// ram_human = {
//   teeth: ram_human_teeth,
// };

// ram_gwen_age = 19;
// ram_gwen = {
//   __proto__: ram_human, // find proto up and up until find it
//   age: ram_gwen_age,
// };

// human = ram_human;
// gwen = ram_gwen;

var A = function () {};
A.prototype.n = 1;
var b = new A();
A.prototype = {
  n: 2,
  m: 3,
};
var c = new A();

console.log(b.n);
console.log(b.m);
console.log(c.n);
console.log(c.m);

// ram_A_proto_n = 1
// ram_A_proto = {
//     n: ram_A_proto_n
// }

// ram_A_proto_2_n = 2
// ram_A_proto_2_m = 3
// ram_A_proto_2 = {
//     n: ram_A_proto_2_n,
//     m: ram_A_proto_2_m
// }

// ram_A = function () {
//     this.prototype: ram_A_proto_2
// }

// ram_b = function () {
//     this.prototype: ram_A_proto
// }

// ram_c = function () {
//     this.prototype: ram_A_proto_2
// }
// {
//     A: ram_A
//     b: ram_b
//     c: ram_c
// }

// 1
// undefined
// 2
// 3
