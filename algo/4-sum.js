function fourNumberSum(array, targetSum) {
  array.sort((a, b) => b - a);
  const answer = [];
  for (let first = 0; first < array.length; first++) {
    const remain = targetSum - array[first];
    for (let second = first + 1; second < array.length - 2; second++) {
      const secondRemain = remain - array[second];
      let left = second + 1;
      let right = array.length - 1;
      while (left < right) {
        console.log(first, second, left, right);
        const sum = array[left] + array[right];
        if (sum === secondRemain) {
          answer.push([array[first], array[second], array[left], array[right]]);
          left++;
          right--;
          continue;
        }
        if (sum > secondRemain) {
          // means
          left++;
          continue;
        }
        if (sum < secondRemain) {
          right--;
          continue;
        }
      }
    }
  }
  return answer;
}

console.log(fourNumberSum([1, 2, 3, 4, 5, 6, 7], 10));
// time O(n) => n = number of integers we can use
// space O(logn) => n = number of integers we can use

// [1, 5, 9, 2, 3, 8]
// 19
// 5, 2, 3, 8

//                         16 // 7, 6, 4, -1, 1, 2
//     (-7)               (-6)
// 9 // 6, 4, -1, 1, 2    10 // 7, 4, -1, 1, 2
