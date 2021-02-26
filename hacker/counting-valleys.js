/*
 * Complete the 'countingValleys' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts following parameters:
 *  1. INTEGER steps
 *  2. STRING path
 */

function countingValleys(steps, path) {
  // Write your code here
  // we map U and D to 1 and -1 means step up +1 and down -1
  const numberedPath = path.split("").map((char) => (char === "U" ? 1 : -1));
  // count as our final result of how manay valleys
  let count = 0;
  // initial stage of our sea level
  let isUnderSea = numberedPath[0] < 0;
  // calculate the amplitude at each path
  for (let i = 0; i < steps; i++) {
    // start from 2nd index above
    if (i > 0) {
      const prevAmplitude = numberedPath[i - 1];
      const amplitude = (numberedPath[i] = numberedPath[i] + prevAmplitude);
      // if current amp hit negative, and prev amp is 0, means we now under sea level
      if (amplitude < 0 && prevAmplitude === 0) {
        // so we make the under sea level flag true
        isUnderSea = true;
      }
      // if then our amptitude hit positive or equal to sea level,
      // we make under sea level false means we now above sea level
      if (amplitude >= 0 && prevAmplitude < 0) {
        if (isUnderSea) {
          // if currently we are under sea level, we hit a valley!
          count += 1;
          isUnderSea = false; // we back to sea leave again.
        }
      }
    }
  }
  return count;
  // time complexity: O(2n) n = steps, we visit every step twice the total steps
  // space complexity: O(n) we used n times of const
}
console.log(countingValleys(8, "UDDDUDUU"));

// the valley is negative numbers, between 2 positive >= 0 numbers, we count 1
// 0 <= sea start,seaStartAfter < 0, seaEndBefore < 0 sea end >= 0, we count 1

//    _/\      _
//       \    /
//        \/\/

// Function Description

// Complete the countingValleys function in the editor below.

// countingValleys has the following parameter(s):

// int steps: the number of steps on the hike
// string path: a string describing the path
// Returns

// int: the number of valleys traversed
// Input Format

// The first line contains an integer , the number of steps in the hike.
// The second line contains a single string , of  characters that describe the path.
