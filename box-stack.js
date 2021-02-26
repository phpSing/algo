function boxStack(stacks) {
  stacks.sort((a, b) => a[0] - b[0]);
  console.log(stacks);
  const table = stacks.map((s) => s[2]);
  // h(0) = max(h(0), 0)
  // h(1) = max(h(i<1) && Li < L1, Wi < W1)
  for (let i = 1; i < stacks.length; i++) {
    const subproblems = table.filter((t, vindex) => {
      return (
        vindex < i &&
        stacks[vindex][0] < stacks[i][0] &&
        stacks[vindex][1] < stacks[i][1]
      );
    });
    table[i] = table[i] + Math.max(...subproblems, 0);
  }
  return Math.max(...table, 0);
}

console.log(
  boxStack([
    [1, 2, 3],
    [4, 3, 5],
    [6, 4, 3],
    [9, 6, 2],
    [7, 8, 9],
    [9, 9, 1],
    [4, 2, 1],
    [2, 2, 10],
  ])
);
