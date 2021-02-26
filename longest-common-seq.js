// Given two strings text1 and text2, return the length of their longest common subsequence.

// A subsequence of a string is a new string generated
// from the original string with some characters(can be none)
// deleted without changing the relative order of the remaining characters.
// (eg, "ace" is a subsequence of "abcde" while "aec" is not). A common subsequence of
// two strings is a subsequence that is common to both strings.

// If there is no common subsequence, return 0.

/**
 * @param {string} text1
 * @param {string} text2
 * @return {number}
 */
var longestCommonSubsequence = function (text1, text2) {
  const n = text1.length;
  const m = text2.length;
  const memo = {};
  const lcs = (P, Q, n, m) => {
    console.log(memo);
    if (`${n},${m}` in memo) {
      return memo[`${n},${m}`];
    }
    let result = 0;
    // last char same, we keep compare the front-part
    if (n === 0 || m === 0) {
      memo[`${n},${m}`] = result;
      return result;
    }
    if (P[n - 1] === Q[m - 1]) {
      result = 1 + lcs(P, Q, n - 1, m - 1);
      memo[`${n},${m}`] = result;
      return result;
    } else if (P[n - 1] !== Q[m - 1]) {
      // if last char different, we separate 2 cases, n-1 diff or m-1 diff
      // and get the max one
      result = Math.max(lcs(P, Q, n - 1, m), lcs(P, Q, n, m - 1));
      memo[`${n},${m}`] = result;
      return result;
    }
  };
  return lcs(text1, text2, n, m);
};

console.log(longestCommonSubsequence("oxcpqrsvwf", "shmtulqrypy"));

// Input: text1 = "abcde", text2 = "ace"
// Output: 3
// Explanation: The longest common subsequence is "ace" and its length is 3.

// Input: text1 = "abc", text2 = "def"
// Output: 0
// Explanation: There is no such common subsequence, so the result is 0.

// Input: text1 = "abc", text2 = "abc"
// Output: 3
// Explanation: The longest common subsequence is "abc" and its length is 3.

// abcde

//  a

// bcde => 1 bc

// b

// cde => 2 c

// c

// de => 3 ''

// [a, b, c]
