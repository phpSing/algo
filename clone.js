const clone = (obj, memo = new Map()) => {
  if (memo.has(obj)) {
    return memo.get(obj);
  }
  if (typeof obj === "object") {
    let cloneObj = {};
    Object.keys(obj).forEach((k) => {
      cloneObj[k] = clone(obj[k]);
    });
    memo.set(obj, cloneObj);
  }
  return obj;
};

console.log(clone({ a: "dsds" }));
