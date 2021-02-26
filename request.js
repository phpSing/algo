// function request(urls, maxNumber, callback)
// 要求编写函数实现，根据urls数组内的url地址进行并发网络请求，最大并发数maxNumber,
// 当所有请求完毕后调用callback函数(已知请求网络的方法可以使用fetch api)
const fetch = require("node-fetch");

function request(urls, maxNumber, callback) {
  if (urls.length === 0) {
    callback();
    return;
  }
  console.log("urls", urls);
  let poll = urls.splice(0, maxNumber);
  Promise.all(
    poll.map((url) => {
      return fetch(url);
    })
  ).then((values) => {
    request([...urls], maxNumber, callback);
    console.log(values);
  });
}

request(
  [
    "https://www.baidu.com",
    "https://www.baidu.com",
    "https://www.baidu.com",
    "https://www.baidu.com",
    "https://www.baidu.com",
    "https://www.baidu.com",
    "https://www.baidu.com",
    "https://www.baidu.com",
    "https://www.baidu.com",
    "https://www.baidu.com",
  ],
  3,
  () => {
    console.log("finished all calls");
  }
);
