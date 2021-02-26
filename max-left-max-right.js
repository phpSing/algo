var maxlr = (arr) => {
  const maxv = Math.max(...arr);
  return Math.max(
    Math.abs(maxv - arr[0]),
    Math.abs(maxv - arr[arr.length - 1])
  );
};

// 1 ,2

// console.log(maxlr(1));
console.log(maxlr([1, 2]));
// console.log(maxlr(2, 3, 5));
console.log(maxlr([2, 3, 5, 7]));
