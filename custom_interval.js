// 组件具体输入如下：

// 查询执行方法
// 轮询间隔
// 超时时长
// 最多轮询次数 组件输出：
// 返回一个promise对象
// 查询方法执行无异常，则轮询结束，返回查询结果 解答：
// const customInterval = (callback, interval, timeout, maxtimes) => {
//   let errorFlag = false;
//   let runtimes = 0;
//   const handleException = (error) => {
//     errorFlag = true;
//     console.log(error);
//   };
//   let timecount = Date().time();
//   const promisedCallback = new Promise((resolve, reject) => {
//     resolve("result");
//   }).then((payload) => {
//     console.log(payload);
//   }, handleException);
//   const mainInterval = setInterval(() => {
//     promisedCallback();
//     runtimes += 1;
//     if (runtimes > maxtimes) {
//       clearInterval(mainInterval);
//     }
//   }, interval);
// };

// 共有60块砖，60人搬，男搬5，女搬3，两个小孩搬1块，
// 一次搬完，需要小孩、男人、女人各多少人，有几种组合方案？ 解答：
let male, child, female;
function getCombo(job = 60) {
  // 5*male + .5*child + 3*female = 60
  const maxMale = 60 / 5;
  const maxFemale = 60 / 3;
  for (let i = 0; i < maxMale; i++) {
    const element = array[i];
  }
}
