// var multiply = function (s1, s2) {
//   if (s1 === "0" || s2 === "0") return "0";
//   let m = s1.length,
//     n = s2.length;
//   let mp = Array(m + n - 1).fill(0);
//   for (let i = 0; i < m; i++) {
//     for (let j = 0; j < n; j++) {
//       console.log(i, j);
//       console.log(+s1[m - 1 - i], +s2[n - 1 - j]);
//       mp[i + j] += +s1[m - 1 - i] * +s2[n - 1 - j];
//     }
//   }
//   for (let i = 0; i < mp.length - 1; i++) {
//     mp[i + 1] += Math.floor(mp[i] / 10);
//     mp[i] %= 10;
//   }
//   return mp.reverse().join("");
// };

// console.log(multiply("4567", "123"));

let multiply = function (num1, num2) {
  //判断输入是不是数字
  if (isNaN(num1) || isNaN(num2)) return "";
  let len1 = num1.length,
    len2 = num2.length;
  let ans = [];

  //这里倒过来遍历很妙,不需要处理进位了
  for (let i = len1 - 1; i >= 0; i--) {
    for (let j = len2 - 1; j >= 0; j--) {
      let forwardpos = i + j,
        currentpos = i + j + 1;
      let mul = num1[i] * num2[j] + (ans[currentpos] || 0);
      ans[forwardpos] = Math.floor(mul / 10) + (ans[forwardpos] || 0); // 10进位 放到前一个位置
      ans[currentpos] = mul % 10;
    }
  }

  //去掉前置0
  let result = ans.join("").replace(/^0+/, "");

  //不要转成数字判断，否则可能会超精度！
  return !result ? "0" : result;
};

console.log(multiply("123", "45"));
