// Given a string s and a string t, check if s is subsequence of t.

// A subsequence of a string is a new string which
// is formed from the original string by deleting some
// (can be none) of the characters without disturbing the relative positions
//  of the remaining characters. (ie, "ace" is a subsequence of "abcde" while "aec" is not).

// Follow up:
// If there are lots of incoming S, say S1, S2, ... , Sk where k >= 1B,
//  and you want to check one by one to see if T has its subsequence.
// In this scenario, how would you change your code?

// Credits:
// Special thanks to @pbrother for adding this problem and creating all test cases.

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isSubsequence = function (s, t) {
  if (s === "") return true;
  if (s !== "" && t === "") return false;
  if (s[s.length - 1] === t[t.length - 1]) {
    return isSubsequence(s.slice(0, -1), t.slice(0, -1));
  }
  return isSubsequence(s, t.slice(0, -1));
};

console.log(isSubsequence("axc", "ahbgdc"));

// ahbgdc => aahbgd F => aahbg F => aahb T => aah F => aa T => a
// abc => ab F => ab F => ab T => a F => a T => "" if s empty return true

// ahbgdc T => ahbgd F => ahbg F => ahb F => ah F => a F => "" if t empty and s not empty return false
// axc T => ax F => ax F => ax F => ax F => ax F

// Example 1:

// Input: s = "abc", t = "ahbgdc"
// Output: true
// Example 2:

// Input: s = "axc", t = "ahbgdc"
// Output: false
