// Complete the jumpingOnClouds function below.
function jumpingOnClouds(clouds) {
  const target = clouds.length - 1;
  const minSteps = (cloudIndex) => {
    // if the clound index is not valid or thundered, we return infinity = never can get to it.
    if (clouds[cloudIndex] === 1 || cloudIndex < 0) return Infinity;
    // if index <= 1, [0, 0], [0] only these cases are possible, they are our base case
    if (cloudIndex <= 2) return 1;
    // return the min steps of prev step and -2 steps plus 1 step to get to current step
    return 1 + Math.min(minSteps(cloudIndex - 2), minSteps(cloudIndex - 1));
  };
  return minSteps(target);
  // time comlexity: O(n), n = clouds.length
  // space comlexity: O(logn), n = clouds.length
}

console.log(jumpingOnClouds([0, 0, 0, 1, 0, 0]));

// Determine the minimum number of jumps it will take to jump from the starting postion to the last cloud.
//  It is always possible to win the game.
// asking for minumum, i will be trying DP solutions
// 1. visualize the example to graph
// rules:
// i can not jump to 1
// only can jump to 0

// tree
// base case
// [0] => MIN(0) => 1

// [0, 0] => MIN(1) => min ( MIN(1-1), MIN(1-2)) = min (MIN(0), MIN(-1)) => min(1, infinity) => 1
// [0, 0, 0] => MIN(2) => min ( MIN(2-1), MIN(2-2)) = min (MIN(1), MIN(0)) => min(1, 1) => 1

// jump to 2
// The player must avoid 1 , The game can be won with a minimum of 1 jumps:
// [0, 1, 0] => min ( MIN(1), MIN(0)) => min ( infinity, 1) => 1
//  0, 1, 2

// final case
// MIN(2) = min(MIN(2-1), MIN(2-2)) whichever is not thundered

// tabulation
