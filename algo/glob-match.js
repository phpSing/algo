function isMatch(s, p) {
  s = " " + s;
  p = " " + p;
  const answer = Array(s.length);
  for (let i = 0; i < answer.length; i++) {
    answer[i] = Array(p.length).fill(false);
  }
  answer[0][0] = true;
  for (let i = 0; i < s.length; i++) {
    for (let j = 0; j < p.length; j++) {
      // if equal, or p is ?
      if (i === 0 && j === 0) continue;
      if (s[i] === p[j] || p[j] === "?") {
        // same result as previous
        answer[i][j] = answer[i - 1] ? answer[i - 1][j - 1] : false;
        continue;
      }
      if (p[j] === "*") {
        answer[i][j] = answer[i - 1]
          ? answer[i - 1][j] || answer[i][j - 1]
          : answer[i][j - 1];
        continue;
      }
      if (s[i] !== p[j]) {
        answer[i][j] = false;
        continue;
      }
    }
  }
  return answer[s.length - 1][p.length - 1];
}
// Do not edit the line below.
// exports.isMatch = isMatch;

// {"pattern": "a*e?g", "fileName": "abcdefg"}
//    ''  a  *   e   ?   g
// ''  T  F  F   F   F   F
// a   F  T  T   F   F   F
// b   F  F  T   F   F   F
// c   F  F  T   F   F   F
// d   F  F  T   F   F   F
// e   F  F  T   T   F   F
// f   F  F  T   F   T   F
// g   F  F  T   F   F   T

//     ''   c    *   a    *   b
// ''  T    F    F   F    F   F

// a   F    F    F   F    F   F

// a   F    F    F   F    F   F

// b   F    F    F   F    F   F

// console.log(isMatch("abcdefg", "abc??efg"));
// console.log(isMatch("aa", "*"));
console.log(isMatch("aab", "c*a*b"));

//     ''  *
// ''  T   T
// a   F   T
// a   F   T
// console.log(isMatch("abcdefg", "*************"));

// char after the * will be the tester char when we hit *
// top - bototm
// time m * n
// space m * n

// abcdefg
// a*e?g

// if (f[f.length-1] === p[p.length-1]) return true

// if (f[f.length - 1] === p[p.length - 1]) {
//     return isMatch(abcdef, a*e?)
// }
// if (p[p.length-1] === '?') {
//     return isMatch(abcde, a*e)
// }

// if (p[p.length-1] === '*') {
//     // get our future mather = p[p.length - 2]
//     // idx = f.indexOf(p[p.length - 2]) f.substr(0, idx + 1)
//         return isMatch(a, a)
// }
// abcdef
// a*e?
