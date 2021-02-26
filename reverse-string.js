// Write a function that reverses a string. The input string is given as an array of characters char[].

// Do not allocate extra space for another array,
// you must do this by modifying the input array in-place with O(1) extra memory.

// You may assume all the characters consist of printable ascii characters.
/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
var reverseString = function (s) {
  let i = 0,
    j = s.length - 1;
  while (i < j) {
    const temp = s[j];
    s[j] = s[i];
    s[i] = temp;
    i++;
    j--;
  }
};
// Example 1:

// Input: ["h","e","l","l","o"]
// Output: ["o","l","l","e","h"]
// Example 2:

// Input: ["H","a","n","n","a","h"]
// Output: ["h","a","n","n","a","H"]
