function merge(leftarr, rightarr) {
  // compare each element of 2 sorted arrays and merge them
  let result = [];
  while (leftarr.length > 0 && rightarr.length > 0) {
    if (leftarr[0] < rightarr[0]) {
      result.push(leftarr.shift());
    } else {
      result.push(rightarr.shift());
    }
  }
  return result.concat(leftarr).concat(rightarr);
}

function mergeSort(bigarr) {
  if (bigarr.length === 1) return bigarr;
  // find middle point
  const middle = Math.floor(bigarr.length / 2);
  const left = bigarr.slice(0, middle);
  const right = bigarr.slice(middle);
  console.log(left, right);
  console.log("\n");
  // concact
  return merge(mergeSort(left), mergeSort(right));
}

console.log(mergeSort([5, 54, 93, 34, 8, 2, 88, 37, 7, 3, 6, 2, 35]));
