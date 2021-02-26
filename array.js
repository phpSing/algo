let a = [1, 2, 3, 4, 4, 4, 4, 2, 3, -3, -1, -4, -2, -4];

function reproduceSumOfZero(arr) {
  let noRepeatArr = [...new Set(arr)];
  let temp = [];
  for (let i = 0; i < noRepeatArr.length - 1; i++) {
    const first = noRepeatArr[i];
    for (let j = i + 1; j < noRepeatArr.length; j++) {
      const second = noRepeatArr[j];
      if (first + second === 0) {
        temp = [...temp, [first, second]]; // assign it
        noRepeatArr.splice(i, 1);
        i -= 1;
        j -= 1;
        noRepeatArr.splice(j, 1);
        break;
      }
    }
  }
  console.log(temp);
  return temp;
}

reproduceSumOfZero(a);
