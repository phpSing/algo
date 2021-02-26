// Complete the sockMerchant function below.
function sockMerchant(n, socks) {
  socks.sort((a, b) => a - b);
  let total = 0;
  for (let i = 0; i < n; i++) {
    if (i > 0 && socks[i] === socks[i - 1]) {
      // i need to increase count
      total += 1;
      i += 1; // skip next one as I do not want to compare current element again.
    }
  }
  return total;
  // time complexity O(n)
  // space complexity O(1)
}

console.log(sockMerchant(9, [10, 20, 20, 10, 10, 30, 50, 10, 20]));
// Complete the sockMerchant function in the editor below.
// It must return an integer representing the number of matching pairs of socks that are available.
// sockMerchant has the following parameter(s):

// n: the number of socks in the pile
// ar: the colors of each sock

// Return the total number of matching pairs of socks that Alex can sell.
