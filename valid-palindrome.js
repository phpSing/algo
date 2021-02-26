// Given a string, determine if it is a palindrome, considering only
// alphanumeric characters and ignoring cases.

// Note: For the purpose of this problem, we define empty string as valid palindrome.

// Example 1:

// Input: "A man, a plan, a canal: Panama"
// Output: true

// Example 2:

// Input: "race a car"
// Output: false

/**
 * @param {string} s
 * @return {boolean}
 */

var isPalindrome = function (s) {
  if (s.length < 2) return true;
  var chars = "abcdefghijklmnopqrstuvwxyz0123456789";
  let result = true;
  s = s
    .split("")
    .filter((char) => chars.indexOf(char.toLowerCase()) !== -1)
    .map((char) => char.toLowerCase());
  if (s.length % 2 !== 0) {
    s.splice(Math.floor(s.length / 2), 1);
  }
  let l = 0;
  let r = s.length - 1;
  while (l < r) {
    const left = s[l];
    const right = s[r];
    if (left !== right) result = false;
    l++;
    r--;
  }
  return result;
};

// console.log(isPalindrome("0P"));
// console.log(isPalindrome("race a car"));
// console.log(isPalindrome("hjkdwes"));
console.log(isPalindrome("A man, a plan, a canal: Panama"));

// raceacar;
// 01234567;
// TTTFFTTT;
// s[0] => s[s.length - 0 - 1]
// s[i] => s[s.length - i - 1]
// compare if equal, we continue, otherwise turn result into false and return!

// amanaplanacanalpanama
