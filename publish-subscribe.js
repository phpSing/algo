var event = {
  peopleList: [],
  listen: function (key, fn) {
    if (!this.peopleList[key]) {
      //如果没有订阅过此类消息，创建一个缓存列表
      this.peopleList[key] = [];
    }
    this.peopleList[key].push(fn);
  },
  trigger: function () {
    let key = Array.prototype.shift.call(arguments);
    let fns = this.peopleList[key];
    if (!fns || fns.length == 0) {
      //没有订阅 则返回
      return false;
    }
    for (var i = 0, fn; (fn = fns[i++]); ) {
      fn.apply(this, arguments);
    }
  },
};

var installEvent = function (obj) {
  for (var i in event) {
    obj[i] = event[i];
  }
};

let yourMsg = {};
installEvent(yourMsg);
yourMsg.listen("marrgie", function (name) {
  console.log(`${name}想知道你结婚`);
});
yourMsg.listen("unemployment", function (name) {
  console.log(`${name}想知道你失业`);
});

yourMsg.trigger("marrgie", "张三");
yourMsg.trigger("unemployment", "李四");

// 发布-订阅的优势很明显，做到了时间上的解耦和对象之间的解耦，
// 从架构上看，MVC，MVVM都少不了发布-订阅的参与，我们常用的Vue也是基于发布-订阅的，
// 最近会抽时间写下vue的源码实现，同样的node中的EventEmitter也是发布订阅的，之前也手写过它的实现。
// 发布-订阅同时也是有缺点存在的，创建订阅者本身要消耗一定的时间和内存，
// 而且当你订阅一个消息以后，可能此消息最后都未发生，但是这个订阅者会始终存在于内存中。
// 如果程序中大量使用发布-订阅的话，也会使得程序跟踪bug变得困难。
function Dep() {
  this.subs = [];
}
Dep.prototype.addSub = function (sub) {
  this.subs.push(sub);
};
Dep.prototype.notify = function () {
  this.subs.forEach((sub) => sub.update());
};
function Watcher(fn) {
  this.fn = fn;
}
Watcher.prototype.update = function () {
  this.fn();
};

var dep = new Dep();
dep.addSub(
  new Watcher(function () {
    console.log("okokok");
  })
);
dep.notify();
