let array = [87, 22, 89, 3, 75, 34, 88, 2, 33, 21, 45, 1, 2];

function quicksort(array) {
  if (array.length <= 1) {
    return array;
  }
  const initial = array[0];
  const left = [];
  const right = [];
  for (let i = 1; i < array.length; i++) {
    const element = array[i];
    if (element > initial) {
      right.push(element);
    } else {
      left.push(element);
    }
  }
  return [...quicksort(left), initial, ...quicksort(right)];
}

console.log(quicksort(array));
