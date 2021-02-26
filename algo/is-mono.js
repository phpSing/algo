function isMonotonic(array) {
  if (!array || array.lengh <= 1) return true;
  return isTrendingDown(array) || isTrendingUp(array);
}

const isTrendingUp = (array) => {
  for (let i = 1; i < array.length; i++) {
    if (array[i] < array[i - 1]) {
      return false;
    }
  }
  return true;
};
const isTrendingDown = (array) => {
  for (let i = 1; i < array.length; i++) {
    if (array[i] > array[i - 1]) {
      return false;
    }
  }
  return true;
};
console.log(isMonotonic([-1, -5, -10, -1100, -1100, -1101, -1102, -9001]));

// #1 means it is either trending up
// or trending down.

let a = {};
let fn = function () {
  console.log(this);
};
console.log(fn.bind());
console.log(fn.bind().bind(a));
console.log(fn.bind().bind(a)());
