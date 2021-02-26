function longestPeak(array) {
  // time O(n) => n = number of integers
  // space O(logn)
  const peaks = [];
  for (let i = 1; i < array.length; i++) {
    // identify a peak
    const left = array[i - 1];
    const current = array[i];
    const right = array[i + 1];
    if (left < current && current > right) {
      // here is the peak, we expand to both sides
      let count = 3;
      let leftIdx = i - 1;
      let rightIdx = i + 1;
      while (leftIdx >= 0) {
        if (array[leftIdx] > array[leftIdx - 1]) {
          count += 1;
          leftIdx -= 1;
        } else {
          break;
        }
      }
      while (rightIdx <= array.length - 1) {
        if (array[rightIdx] > array[rightIdx + 1]) {
          count += 1;
          rightIdx += 1;
        } else {
          break;
        }
      }
      if (count >= 3) peaks.push(count);
    }
  }
  return Math.max(...peaks, 0);
}

// console.log(longestPeak([1, 2, 3, 10, 0]));
// 4 => [1,2,3,10]

console.log(longestPeak([1, 2, 3, 3, 4, 0, 10, 6, 5, -1, -3, 2, 3]));
