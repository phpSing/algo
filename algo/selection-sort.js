function selectionSort(array) {
  let unsortedStart = 0;
  while (unsortedStart < array.length - 1) {
    for (let i = array.length - 1; i > unsortedStart; i--) {
      const last = array[i];
      const prev = array[i - 1];
      if (last < prev) {
        swap(array, i - 1, i);
      }
    }
    unsortedStart += 1;
  }
  return array;
}

const swap = (array, leftIdx, rightIdx) => {
  const temp = array[leftIdx];
  array[leftIdx] = array[rightIdx];
  array[rightIdx] = temp;
};

console.log(selectionSort([8, 5, 2, 9, 5, 6, 3]));
