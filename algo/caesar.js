function caesarCipherEncryptor(string, key) {
  const charlist = "abcdefghijklmnopqrstuvwxyz"; // 0 - 25
  key = key % 26;
  string = string.split("");
  for (let i = 0; i < string.length; i++) {
    let shiftedIndex = charlist.indexOf(string[i]) + key;
    if (shiftedIndex > 25) shiftedIndex -= 26;
    string[i] = charlist[shiftedIndex];
  }
  string = string.join("");
  return string;
}

console.log(caesarCipherEncryptor("a", 2));
console.log(caesarCipherEncryptor("z", 1));
console.log(caesarCipherEncryptor("az", 2));
console.log(caesarCipherEncryptor("xyz", 2));

// time O(n) n = length of the string
// space O()
