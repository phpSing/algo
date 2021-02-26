// elephant-walk  =>  e6t-w2k
function stringTo4(string) {
  // running length
  const stringArray = string.split("");
  const validLetter = /^[a-zA-Z]/;
  let start = -1;
  let end = -1;
  stringArray.push(" ");
  for (let i = 0; i < stringArray.length; i++) {
    if (!validLetter.test(stringArray[i])) {
      if (end - start >= 4 && start >= 0 && end >= 0) {
        const length = end - start - 1;
        const range = [start + 1, length];
        stringArray.splice(range[0], range[1], length);
        i -= length - 1;
      }
      start = -1;
      end = -1;
    } else {
      start = start === -1 ? i : start;
      end = i;
    }
  }
  stringArray.pop();
  return stringArray.join("");
}

console.log(stringTo4("elephant-rides are really fun!"));
console.log(stringTo4(";l;ve;"));
console.log(stringTo4("elephant-ries are relly fun!"));
console.log(stringTo4("elhant-rides are relly fun! oowdm;w djieif"));

//            elephant-
//         -1 01234567
//                      calculate prev word length,
// and 8 minus -2 is 6, we got the number to replace = 6
// we find replace range, array splice(start+1, number, number=6),
// after replace,
//            e6t-
//         -1 012345678 end -= (wordlength + 1 )
