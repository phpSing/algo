var longestPalindrome = function (s) {
  let max = -Infinity;
  let memo = {};
  let answer = [];
  const isPal = (string) => {
    let i = 0;
    let j = string.length - 1;
    while (i < j) {
      if (string[i] === string[j]) {
        i++;
        j--;
      } else {
        return false;
      }
    }
    return string.length;
  };
  const helper = (remainString) => {
    if (remainString in memo) {
      return;
    }
    const result = isPal(remainString);
    if (result !== false) {
      if (result > max) {
        memo[remainString] = result;
        answer = remainString;
        max = memo[remainString];
      }
      return;
    } else {
      helper(remainString.substr(0, remainString.length - 1));
      helper(remainString.substr(1, remainString.length));
      return;
    }
  };
  helper(s);
  return answer;
};

console.log(longestPalindrome("eeffkdowa"));
console.log(longestPalindrome("jkjkkkjkj"));
console.log(longestPalindrome("babaddtattarrattatddetartrateedredividerb"));

// eeffkdowa
// eeffkdow
// eeffkdo
// effkdo
// eeffkd

// effkdow
//

// effkdowa
