// Example 1:

// Input: s = "eceba", k = 2
// Output: 3
// Explanation: The substring is "ece" with length 3.
// Example 2:

// Input: s = "aa", k = 1
// Output: 2
// Explanation: The substring is "aa" with length 2.

// Constraints:

// 1 <= s.length <= 5 * 104
// 0 <= k <= 50

// Given a string s and an integer k, return the length of the
// longest substring of s that contains at most k distinct characters.

function longestSub(string, k) {
  if (!string) return 0;
  let max = -Infinity;
  const helper = (remainString, visited = {}) => {
    if (remainString in visited) {
      return;
    }
    visited[remainString] = true;
    const diffChars = getNumberOfDiffChars(remainString);
    if (diffChars <= k) {
      max = Math.max(max, remainString.length);
    } else if (diffChars > k) {
      helper(remainString.substr(0, remainString.length - 1), visited);
      helper(remainString.substr(1), visited);
    }
  };
  helper(string);
  return max;
}

const getNumberOfDiffChars = (s) => {
  const array = s.split("");
  const set = new Set(array);
  return Array.from(set).length;
};

// console.log(longestSub("aa")); // 2 aa
console.log(longestSub("eceba", 2)); // 3 ece
console.log(longestSub("ecebaffefff", 2)); // 3 ece
console.log(longestSub("aaaaaaa", 2)); // 3 ece
console.log(longestSub("aaacbbbb", 2)); // 3 ece
// eceba

// eceb + a
// e + ceba

// chars < K ? 1 + ceba.length
// chars = K  char in chars ? 1 + ceba.length :ceba.length
// chars > K  max of helper(chars.substr(0, chars.length - 1)) helper(chars.substr(1, chars.length))
