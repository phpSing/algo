function solution() {
  let x, y, z;
  for (x = 0; x <= 12; x++) {
    for (y = 0; y <= 20; y++) {
      z = 60 - x - y;
      if (z % 2 == 0) {
        if (5 * x + y * 3 + z / 2 == 60) {
          console.log(x, y, z, "搬砖组合"); // 5 3 52
        }
      }
    }
  }
}
solution();
