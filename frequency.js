let str =
  "asdfghjklaqwerthdjffzzeeeeeeeeeeezzfffsahflehaf;lehfl;khae,fpapeeeeekdhwuyezzzuwyayuiopiaia";

const getMostFreq = (inputString) => {
  if (!inputString) return "";
  let book = {};
  inputString.split("").forEach((letter) => {
    if (book[letter]) {
      book[letter] += 1;
    } else {
      book[letter] = 1;
    }
  });
  const result = Object.keys(book).reduce((p, c, i) => {
    return book[c] > book[p] ? c : p;
  });
  console.log(result);
  return result;
};

getMostFreq(str);
