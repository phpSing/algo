// /**
//  * @param {number[]} nums
//  * @return {number[][]}
//  */
var permute = (nums) => {
  // if only one element, return it into answer
  if (nums.length <= 1) return [nums];
  // if only 2 elements, return the only 2 mirrors
  if (nums.length === 2)
    return [
      [nums[0], nums[1]],
      [nums[1], nums[0]],
    ];
  let table = [];
  for (let i = 0; i < nums.length; i++) {
    // shift out an element in the queue
    const num = nums.shift();
    // get right hand side childrent permute
    table = [...table, ...permute(nums).map((p) => [num, ...p])]; // add the shifted element in front of all possible options after it
    nums.push(num); // add it back for future use.
  }
  return table;
};
console.log(permute([0, 1, 2, 3]));

// 0 1 2 3
// 0 => [[0, 1,2,3] ,[0, 1,3,2],[0, 2,1,3], [0, 2,3,1],[0, 3, 1, 2], [0, 3,2,1]]
//     1 2 3 => [[1,2,3] ,[1,3,2],[2,1,3], [2,3,1],[3, 1, 2], [3,2,1]]
//     1 => [1,2,3] [1,3,2]
//         [2,3] [3,2]
//     2 => [2,1,3], [2,3,1]
//         [1,3] [3,1]
//     3 => [3, 1, 2], [3,2,1]
//         [1,2] [2,1]
// 1 => [[1,0,2,3],[1,0,3,2],[1,2,0,3], [1,2,3,0],[1,3,0,2], [1,3,2,0]]
//     0 2 3 => [[0,2,3],[0,3,2],[2,0,3], [2,3,0],[3,0,2], [3,2,0]]
//     0 => [0,2,3],[0,3,2]
//         [2,3] [3,2]
//     2 => [2,0,3], [2,3,0]
//         [0,3] [3,0]
//     3 => [3,0,2], [3,2,0]
//         [0,2] [2,0]
// 2 => [[2,0,1,3],[2,0,3,1], [2,1,0,3], [2,1,3,0],[2,3,0,1], [2,3,1,0]]
//     0 1 3 => [[0,1,3],[0,3,1], [1,0,3], [1,3,0],[3,0,1], [3,1,0]]
//     0 => [0,1,3],[0,3,1]
//         [1,3] [3,1]
//     1 =>  [1,0,3], [1,3,0]
//         [0,3] [3,0]
//     3 =>  [3,0,1], [3,1,0]
//         [0,1] [1,0]
// 3 => =[[3,0,1,2] ,[3,0,2,1],[3,1,0,2], [3,1,2,0],[3,2,0,1] [3,2,1,0]]
//     0 1 2 => [[0,1,2] ,[0,2,1],[1,0,2], [1,2,0],[2,0,1] [2,1,0]]
//     0 => [0,1,2] ,[0,2,1]
//         [1,2] [2,1]
//     1 =>  [1,0,2], [1,2,0]
//         [0,2] [2,0]
//     2 =>   [2,0,1] [2,1,0]
//         [0,1] [1,0]

// happy new year, wish a great 2021 with good health and happiness for everyone

// API changes/difference across different enviroment,
// e.g. API version 1 deployed on DEV, front end integration done
// then some changes happen to the API, new version only deployed to SIT/CIT server
// but DEV server are not synced well, more time++ for Regression test bug fixes later on
// but for further development/fix on front end,
// we should only rely on DEV server as the source of the truth,
// but we can not, only can do with blind guessing or mocking by ourself.

// Raise the quality of each of the PR raised.
// => raise less PR but more certainty to solve the defect

// Be more careful with all PRs and fixes, do more test and compare with ember code as much as possible
// before raise PR.
