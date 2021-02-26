// Complete the repeatedString function below.
function repeatedString(s, n) {
  if (n < s.length) {
    return s.slice(0, n).match(/a/g).length;
  }
  const baseCount = s.match(/a/g).length;
  const numberOfBases = Math.floor(n / s.length);
  let total = numberOfBases * baseCount;
  const reminder = n % s.length;
  if (reminder > 0) {
    const reminderCount = s.slice(0, reminder).match(/a/g).length;
    total += reminderCount;
  }
  return total;
}

console.log(repeatedString("aaaa", 8000000));
// need to know how many a's in a string
