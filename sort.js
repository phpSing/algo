let source = [87, 22, 89, 3, 75, 34, 88, 2, 33, 21, 45, 1, 2];
// => [1, 2, 2, 3, 21, 22, 33, 34, 45, 75, 87, 88, 89];
// function quickSort(arr) {}
// D & C algorithms are
function quickSort(source) {
  const swap = (array, a, b) => {
    const temp = array[a];
    array[a] = array[b];
    array[b] = temp;
    return array;
  };

  for (let i = 0; i < source.length; i++) {
    for (let j = i + 1; j < source.length; j++) {
      if (source[j] < source[i]) {
        swap(source, i, j);
      }
    }
  }
  return source;
}

console.log(sort(source));
