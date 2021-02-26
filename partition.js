const getPartitions = (n, m) => {
  if (n === 0) return 1;
  if (m === 0 || n < 0) return 0;
  return getPartitions(n, m - 1) + getPartitions(n - m, m);
};

// n, (m = n), m - 1 + n - m, m;
console.log(getPartitions(9, 4));
