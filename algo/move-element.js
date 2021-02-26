function moveElementToEnd(array, toMove) {
  let length = array.length;
  for (let i = 0; i < length; i++) {
    if (array[i] === toMove) {
      array.push(array[i]);
      array.splice(i, 1);
      i -= 1;
      length -= 1;
    }
  }
  return array;
}

console.log(moveElementToEnd([2, 1, 2, 2, 2, 3, 4, 2], 2));
