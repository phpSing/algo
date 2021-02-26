function levenshteinDistance(str1, str2) {
  str1 = " " + str1;
  str2 = " " + str2;
  let answer = Array(str1.length);
  for (let row = 0; row < str1.length; row++) {
    answer[row] = new Array(str2.length).fill(0);
  }
  for (let row = 0; row < str1.length; row++) {
    for (let col = 0; col < str2.length; col++) {
      // if one of them is empty string
      if (row === 0 && col === 0) {
        answer[row][col] = 0;
      } else if (row === 0) {
        answer[row][col] = 1 + answer[row][col - 1];
      } else if (col === 0) {
        answer[row][col] = 1 + answer[row - 1][col];
      } else if (str1[row] !== str2[col]) {
        answer[row][col] =
          1 +
          Math.min(
            answer[row - 1][col],
            answer[row][col - 1],
            answer[row - 1][col - 1],
            Infinity
          );
      } else if (str1[row] === str2[col]) {
        answer[row][col] = answer[row - 1][col - 1];
      }
    }
  }
  return answer[answer.length - 1][answer[0].length - 1];
}

// Do not edit the line below.
// exports.levenshteinDistance = levenshteinDistance;

console.log(levenshteinDistance("abc", "yabd"));

//       ''   y     a     b     d
// ''    0    1     2     3     4

// a     1    1     1     2     3

// b     2    2     2     1     2

// c     3    3     3     2     2
