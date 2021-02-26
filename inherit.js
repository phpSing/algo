let animalNum = 0;
function Animal(name) {
  animalNum++;
  this.name = name;
}
Animal.prototype.getName = function () {
  return this.name;
};
// 实现inherit
function inherit(Fn, Obj) {
  function Cat() {
    Fn.apply(this, arguments);
  }
  Cat.prototype = {
    ...Fn.prototype,
    ...Obj,
  };
  return Cat;
}

const Cat = inherit(Animal, {
  say: function () {
    console.log(`NO${animalNum}:${this.getName()}`);
  },
});
const cat1 = new Cat("小花");
cat1.say(); // NO1:小花
