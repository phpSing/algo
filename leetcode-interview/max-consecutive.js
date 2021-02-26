function maxCon(array) {
  // maxlength
  let maxLength = 1;
  let counter = 1;
  array.sort((a, b) => a - b);
  for (let i = 1; i < array.length; i++) {
    if (array[i] - array[i - 1] <= 1) {
      counter += 1;
    } else {
      maxLength = Math.max(counter, maxLength);
      counter = 1;
    }
  }
  return Math.max(maxLength, counter);
}

console.log(
  maxCon([
    5,
    2,
    99,
    3,
    4,
    1,
    6,
    7,
    8,
    98,
    97,
    96,
    95,
    94,
    93,
    92,
    91,
    90,
    89,
    88,
    100,
  ])
); // 5,  1,2,3,4,5
