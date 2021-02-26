function cd(x, y) {
  for (let i = Math.min(x, y); i > 0; i--) {
    if (x % i === 0 && y % i === 0) return i;
  }
}
function cdRecursion(x, y, count = null) {
  const _count = count || Math.min(x, y);
  if (x % _count === 0 && y % _count === 0) return _count;
  return cdRecursion(x, y, _count - 1);
}

console.log(cd(20, 15));
console.log(cdRecursion(88, 16));

// base case
// 0, 0, => 0
// 0, 1 => 0
// 1, 0 => 0
// 1, 1 => 1
