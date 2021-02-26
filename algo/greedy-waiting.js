// {"queries": [3, 2, 1, 2, 6]}

function minimumWaitingTime(queries) {
  // Write your code here.
  queries.sort((a, b) => a - b);
  queries.pop();
  for (let i = 0; i < queries.length; i++) {
    queries[i] += queries[i - 1] || 0;
  }
  return queries.reduce((a, b) => a + b, 0);
}

console.log(minimumWaitingTime([3, 2, 1, 2, 6]));
