let source = [87, 22, 89, 3, 11, 33, 22, 99, 66, 75, 34, 88, 2];

function quick(piece) {
  if (piece.length <= 1) {
    return piece;
  }
  let init = piece[0];
  let right = [];
  let left = [];
  for (let i = 1; i < piece.length; i++) {
    const pivot = piece[i];
    if (init < pivot) {
      right.push(pivot);
    } else {
      left.push(pivot);
    }
  }
  return [...quick(left), init, ...quick(right)];
}

console.log(quick(source));
