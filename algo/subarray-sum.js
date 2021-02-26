function subsum(array, target) {
  let left = 0;
  let right = 0;
  let sum = 0;
  while (left <= right && left < array.length && right < array.length) {
    sum += array[right];
    if (sum === target) return [left + 1, right + 1];
    if (sum < target) {
      right++;
      continue;
    }
    if (sum > target) {
      sum -= array[left];
      sum -= array[right];
      left++;
    }
  }
  return -1;
}

console.log(subsum([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 15));
console.log(subsum([1, 2, 3, 7, 5], 12));
