console.log(1);
setTimeout(function () {
  console.log(2);
}, 0);
new Promise(function (resolve) {
  console.log(3);
  resolve(Date.now());
}).then(function () {
  console.log(4);
});
console.log(5);
setTimeout(function () {
  new Promise(function (resolve) {
    console.log(6);
    resolve(Date.now());
  }).then(function () {
    console.log(7);
  });
}, 0);

// 执行步骤如下：

// 执行 log(1)，输出 1；
// 遇到 setTimeout，将回调的代码 log(2)添加到宏任务中等待执行；
// 执行 console.log(3)，将 then 中的 log(4)添加到微任务中；
// 执行 log(5)，输出 5；
// 遇到 setTimeout，将回调的代码 log(6, 7)添加到宏任务中；
// 宏任务的一个任务执行完毕，查看微任务队列中是否存在任务，存在一个微任务 log(4)（在步骤 3 中添加的），执行输出 4；
// 取出下一个宏任务 log(2)执行，输出 2；
// 宏任务的一个任务执行完毕，查看微任务队列中是否存在任务，不存在；
// 取出下一个宏任务执行，执行 log(6)，将 then 中的 log(7)添加到微任务中；
// 宏任务执行完毕，存在一个微任务 log(7)（在步骤 9 中添加的），执行输出 7；
// 因此，最终的输出顺序为：
// 1, 3, 5, 4, 2, 6, 7;

console.log("start");
mac1 - 1;
setTimeout(() => {
  console.log("timer1");
  mac2 - 1;
  Promise.resolve().then(function () {
    console.log("promise1");
    mic2 - 1;
  });
}, 0);
setTimeout(() => {
  console.log("timer2");
  mac2 - 2;
  Promise.resolve().then(function () {
    console.log("promise2");
    mic2 - 2;
  });
}, 0);
Promise.resolve().then(function () {
  console.log("promise3");
  mic1 - 1;
});
console.log("end");

// start
// end
// promise3
// timer1
// timer2
// promise1
// promise2

let bar;

setTimeout(() => {
  console.log("setTimeout");
  mac2 - 1;
}, 0);

setImmediate(() => {
  console.log("setImmediate");
  mac2 - 2;
});
function someAsyncApiCall(callback) {
  process.nextTick(callback);
  mac2 - 3;
}

someAsyncApiCall(() => {
  console.log("bar", bar); // 1
});
// next tick = pending callbacks will execute after current mac loop
bar = 1;

// timers: 执行setTimeout和setInterval中到期的callback。
// pending callback: 上一轮循环中少数的callback会放在这一阶段执行。
// idle, prepare: 仅在内部使用。
// poll: 最重要的阶段，执行pending callback，在适当的情况下回阻塞在这个阶段。
// check: 执行setImmediate(setImmediate()是将事件插入到事件队列尾部，主线程和事件队列的函数执行完成之后立即执行setImmediate指定的回调函数)的callback。
// close callbacks: 执行close事件的callback，例如socket.on('close'[,fn])或者http.server.on('close, fn)。

console.log("script start");
mac1 - 1;

async function async1() {
  await async2();
  console.log("async1 end");
  mic1 - 1;
}
async function async2() {
  console.log("async2 end");
  mac1 - 2;
}
async1();

setTimeout(function () {
  console.log("setTimeout");
  mac2 - 1;
}, 0);

new Promise((resolve) => {
  console.log("Promise");
  mac1 - 3;
  resolve();
})
  .then(function () {
    console.log("promise1");
    mic1 - 2;
  })
  .then(function () {
    console.log("promise2");
    mic1 - 3;
  });

console.log("script end");
mac1 - 4;

// script start
// async2 end

async function async1() {
  console.log("async1 start");
  await async2();
  console.log("async1 end"); // mic1-1
}
async function async2() {
  console.log("async2");
}
console.log("script start");
setTimeout(function () {
  console.log("setTimeout"); // mac2-1
}, 0);
async1();
new Promise(function (resolve) {
  console.log("promise1");
  resolve();
}).then(function () {
  console.log("promise2"); // mic1-2
});
console.log("script end");

// script start
// async1 start
// async2
// promise1
// script end
// async1 end
// promise2
// setTimeout
