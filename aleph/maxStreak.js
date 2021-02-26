function maxStreak(m, data) {
  // time O(n*m)
  // space O(1)
  let counter = 0;
  let max = -Infinity;
  const isAllAttend = (dataItem) => {
    return dataItem.every((attendence) => attendence === "Y");
  };
  for (let i = 0; i < data.length; i++) {
    const element = data[i];
    if (isAllAttend(element)) {
      counter += 1;
    } else {
      // reset, mark the max
      max = Math.max(max, counter);
      counter = 0;
    }
  }
  return Math.max(max, counter);
}

console.log(
  maxStreak(2, [
    ["Y", "Y"],
    ["Y", "Y"],
    ["Y", "Y"],
    ["Y", "Y"],
    ["Y", "Y"],
  ])
);
