function myNew(fn) {
  const newObj = Object.create(fn.prototype);
  result = fn.apply(newObj, [...arguments].slice(1));
  return typeof result === "object" ? result : newObj;
}
function a(name) {
  this.name = name;
}
// console.log(myNew(a));
