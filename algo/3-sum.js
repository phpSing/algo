function threeNumberSum(array, targetSum) {
  const answer = [];
  if (array.length < 3) return [];
  array.sort((a, b) => a - b);
  for (let i = 0; i < array.length; i++) {
    const remaining = targetSum - array[i];
    let left = i + 1;
    let right = array.length - 1;
    // two sum
    while (left < right) {
      if (array[left] + array[right] === remaining) {
        // we found a combo
        answer.push([array[i], array[left], array[right]]);
        left++;
        right--;
      } else if (array[left] + array[right] > remaining) {
        // we need some smaller number
        // right index --
        right--;
      } else {
        left++;
      }
    }
  }
  return answer;
}

console.log(threeNumberSum([12, 3, 1, 2, -6, 5, -8, 6], 0));

// 3 numbers
// base case
// [1] => [] // less than 3 numbers

// [1, 2, 3], 6
// loop
// i = 0, value = 1
// 6 - 1 = 5 remaining to sum up
// left = 1, value = 2
// right = 2, value 3
// two pointer sum, two sum problem
// if remaining === 0; push them into answer
// time O n * n => n^2
// space n , worst 3n => n
