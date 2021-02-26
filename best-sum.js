function bestSum(remainTarget, numbers) {
  if (remainTarget === 0) return [];
  if (remainTarget < 0) return null;

  let shortest = null;
  for (let num of numbers) {
    const reminder = remainTarget - num;
    const result = bestSum(reminder, numbers);
    if (result !== null) {
      const combo = [...result, num];
      if (shortest === null || shortest.length > combo.length) {
        shortest = combo;
      }
    }
  }
  return shortest;
}

console.log(bestSum(7, [5, 3, 4, 7, 6]));
console.log(bestSum(100, [1, 2, 5, 25]));
