// Given a non-empty string s and a dictionary wordDict
// containing a list of non-empty words, determine if s can be
// segmented into a space-separated sequence of one or more dictionary words.

// Note:

// The same word in the dictionary may be reused multiple times in the segmentation.
// You may assume the dictionary does not contain duplicate words.
/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {boolean}
 */
var wordBreak = function (s, wordDict, memo = {}) {
  if (s in memo) {
    return memo[s];
  }
  if (s === "") return true;
  for (word of wordDict) {
    if (s.indexOf(word) === 0) {
      // if it is from start index
      const remain = s.replace(word, "");
      //   const result = wordBreak(remain, wordDict);
      memo[remain] = wordBreak(remain, wordDict, memo);
      if (!memo[remain]) {
        continue;
      } else {
        return memo[remain];
      }
    }
  }
  return false;
};

console.log(wordBreak("cars", ["car", "ca", "rs"]));

// Example 1:
// Input: s = "leetcode", wordDict = ["leet", "code"]
// Output: true
// Explanation: Return true because "leetcode" can be segmented as "leet code".
// Example 2:
// Input: s = "applepenapple", wordDict = ["apple", "pen"]
// Output: true
// Explanation: Return true because "applepenapple" can be segmented as "apple pen apple".
//              Note that you are allowed to reuse a dictionary word.
// Example 3:
// Input: s = "catsandog", wordDict = ["cats", "dog", "sand", "and", "cat"]
// Output: false
//             m
//         leetcode
//     (lee)                        (leet)                  (code)      n
//     tcode                          code
// (lee) (leet) (code)
// false  false false
