Function.prototype.MyCall = function (context) {
  const args = [...arguments].slice(1);
  context.fn = this;
  const result = context.fn(...args);
  delete context.fn;
  return result;
};
Function.prototype.MyApply = function (context) {
  const args = arguments[1] || [];
  context.fn = this;
  const result = context.fn(...args);
  delete context.fn;
  return result;
};
Function.prototype.MyBind = function (context) {
  const args = [...arguments].slice(1);
  return function () {
    context.MyApply(context, args);
  };
};

const { type } = require("os");

function _bind(newContext) {
  // get arguments
  let self = this; // assign the target object to self.
  console.log("newContext", newContext);
  console.log("self", self);

  const args = [...arguments].slice(1); // dont want the first one
  return function () {
    const combinedArgs = [...args, ...arguments]; // put binded args with new args
    self.apply(newContext, combinedArgs);
  };
}

function typeName() {
  console.log(this.name);
}
Function.prototype._bind = _bind;

const _typeName = typeName._bind({ name: "time name" });
_typeName();
