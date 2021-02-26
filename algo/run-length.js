function runLengthEncoding(string) {
  // in place = change the characters on the fly = space O(n)
  // time O(n) at least we need to iterate all the chars
  let table = [];
  let counter = string.length > 0 ? 1 : 0;
  if (string.length === 1) return `1${string[0]}`;
  for (let i = 1; i < string.length; i++) {
    const currentChar = string[i];
    const prevChar = string[i - 1];
    if (currentChar === prevChar) {
      if (counter === 9) {
        // need to push
        table.push(counter);
        table.push(prevChar);
        counter = 1;
      } else {
        counter += 1;
      }
    } else if (currentChar !== prevChar) {
      // need to push
      table.push(counter);
      table.push(prevChar);
      counter = 1;
    }
  }
  table.push(counter);
  table.push(string[string.length - 1]);
  return table.join("");
}

console.log(runLengthEncoding(" "));
// subproblem
// unencodedIdx = 0 + 2 (everytime we encode, remove 2 idxs)
// A A A ...A A => 9A A
// 0 1 2 3  8   => 01 2
// 1 2 3 4  9 => table to store numbers of repeats,
// if same as before, add one, if prev total is 9 already start with 1, and encode prev value
// A A A B
// 0 1 2 3
// 1 2 3 1
// if same as before, add one

// base case
// A
// 0
// 1

// A A
// 0 1
// 1 2
// if same as before, add one

// A A A
// 0 1 2
// 1 2 3
// if same as before, add one
