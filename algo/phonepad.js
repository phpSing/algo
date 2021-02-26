function phoneNumberMnemonics(phoneNumber) {
  const answer = [];
  const keyHash = [
    ["0"],
    ["1"],
    ["a", "b", "c"],
    ["d", "e", "f"],
    ["g", "h", "i"],
    ["j", "k", "l"],
    ["m", "n", "o"],
    ["p", "q", "r", "s"],
    ["t", "u", "v"],
    ["w", "x", "y", "z"],
  ];
  const helper = (remain, string = "") => {
    if (!remain || remain.length < 1) {
      answer.push(string);
      return;
    }
    const candidates = keyHash[remain[0]];
    for (const candidate of candidates) {
      helper(remain.slice(1), `${string}${candidate}`);
    }
  };
  helper(phoneNumber.split(""));
  return answer;
}

console.log(phoneNumberMnemonics("1905"));
console.log(phoneNumberMnemonics("9"));
console.log(phoneNumberMnemonics("91"));
