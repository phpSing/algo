// Alice and Bob take turns playing a game, with Alice starting first.

// Initially, there is a number N on the chalkboard.  On each player's turn,
// that player makes a move consisting of:

// Choosing any x with 0 < x < N and N % x == 0.
// Replacing the number N on the chalkboard with N - x.
// Also, if a player cannot make a move, they lose the game.
//  N = 8
//  0       1       2       3       4       5       6       7       8
//  F       T
// Return True if and only if Alice wins the game, assuming both players play optimally.

// Input: 2
// Output: true
// Explanation: Alice chooses 1, and Bob has no more moves.

// Input: 3
// Output: false
// Explanation: Alice chooses 1, Bob chooses 1, and Alice has no more moves.
/**
 * @param {number} N
 * @return {boolean}
 */
var divisorGame = function (N) {
  return N % 2 === 0;
  //   const table = Array(N + 1).fill(false);
  //   table[0] = false;
  //   table[1] = true;
  //   // generate candidates based on condition
  //   const candidates = [];
  //   for (let i = 1; i < N; i++) {
  //     if (N % i === 0) {
  //       candidates.push(i);
  //     }
  //   }
  //   for (let j = 0; j < table.length; j++) {
  //     if (table[j] === true) {
  //       for (candidate of candidates) {
  //         if (j + candidate <= N) {
  //           table[j + candidate] = true;
  //         }
  //       }
  //     }
  //   }
  //   console.log(table);
  //   return table[N];
  //   // T o(n^2)
  //   // O o(n^2)
};

console.log(divisorGame(8));
