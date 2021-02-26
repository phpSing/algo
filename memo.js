let memoize = function (func) {
  let cache = {};
  return function (key) {
    // console.log(cache);
    console.log("key", key);
    console.log("cache", cache);
    if (!cache[key]) {
      cache[key] = func.apply(this, arguments);
    }
    return cache[key];
  };
};

let add = memoize(function (a, b) {
  return a + b;
});

console.log(add(1, 2));
console.log(add(1, 3));
console.log(add(1, 4));
console.log(add(1, 6));
// console.log(add(1, 2));
