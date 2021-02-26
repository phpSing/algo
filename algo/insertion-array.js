function insertionSort(array) {
  for (let i = 1; i < array.length; i++) {
    const current = array[i];
    const prev = array[i - 1];
    if (current < prev) {
      swap(array, i, i - 1); // means we swap i in front of i - 1
      for (let j = i - 1; j >= 0; j--) {
        if (array[j] < array[j - 1]) {
          swap(array, j, j - 1);
        }
      }
    }
  }
  return array;
}

const swap = (array, currentIdx, destIdx) => {
  const temp = array[destIdx];
  array[destIdx] = array[currentIdx];
  array[currentIdx] = temp;
};

console.log(insertionSort([8, 5, 2, 9, 5, 6, 3]));
