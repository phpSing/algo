var longestValidParentheses = function (s) {
  let longest = 0;
  let stack = [-1];
  // （）一对是2个index长度，默认第一个记号放在 -1，
  // 这样加两个长度正好到1 ，有0，1两个元素可以去判断

  for (let i = 0; i < s.length; i++) {
    // 遍历整个string 判定 () 符
    console.log(stack);
    let char = s[i];
    // "()))()()()()"
    if (char === "(") {
      // 如果遇到了(开始符号, 把他的index记录进去，继续判断下一个符号
      // 我们只记录开始符号，所以这样只要遇到结束符号，就可以消消乐
      stack.push(i);
      continue;
    }
    //  如果不是开始符号，就像消消乐一样，把之前记录的开始符号作为一对，消除
    // 比如第一对就是括号，那么消消乐之后 队列里面还是只有一开始默认的 -1

    stack.pop();
    if (!stack.length) stack.push(i);
    // 如果继续遇到结束符号，把默认index都删掉了，队列空了，那就要用当前的i保持一个index，
    // 表示我们遍历到这个位置了，从这里开始算起
    else longest = Math.max(i - stack[stack.length - 1], longest);
    // 如果删掉了队列没有空，那么把最长长度更新一下，说明一组消消乐成功，比如0开始，1结束符号
    // 就用1 减去 -1 那么我们目前检索到的最长的连续括号组就是 2
    // 换句话说就是算我们最长能多少消消乐连击，然后用最后一次连击的index减去最接近的没有被消消乐的开始符号index
  }

  return longest;
};

console.log(longestValidParentheses("(((((((()()()((((()()()()"));
