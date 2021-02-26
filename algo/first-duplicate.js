function firstDuplicateValue(array) {
  // brute force, time O(n), space O(n) => best case logn logn
  const visits = {};
  for (let i = 0; i < array.length; i++) {
    if (array[i] in visits && visits[array[i]] === 1) {
      return array[i];
    }
    visits[array[i]] = array[i] in visits ? visits[array[i]] + 1 : 1;
  }
  return -1;
}

console.log(firstDuplicateValue([2, 1, 5, 2, 3, 3, 4]));

// to find first duplicate and return the index
// average case: time O(logn)
