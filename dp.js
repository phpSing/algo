var read = readline().split(" ");
var x = parseInt(read[0]);
var y = parseInt(read[1]);
var n = parseInt(read[2]);

function sumBigNumber(a, b) {
  var res = "",
    temp = 0;
  a = a.split("");
  b = b.split("");
  while (a.length || b.length || temp) {
    temp += ~~a.pop() + ~~b.pop();
    res = (temp % 10) + res;
    temp = temp > 9;
  }
  return res.replace(/^0+/, "");
}

function create2DArray(x, y, defaultPath = 0) {
  let xCors = new Array(x);
  for (let i = 0; i <= x; i++) {
    // create a yCors
    let yCors = new Array(y);
    for (let j = 0; j <= y; j++) {
      yCors[j] = defaultPath;
    }
    xCors[i] = yCors;
  }
  return xCors;
}

// now we have 2d array creation
function totalPath(x, y, boss) {
  // n means lines of blockers to avoid
  let cache = create2DArray(x, y);
  // walk x direction only
  for (let i = 0; i < x; i++) {
    // y always 0
    cache[i][0] = 1;
  }
  // walk y only
  for (let j = 0; j < y; j++) {
    // x always 0
    cache[0][j] = 1;
  }

  for (let k = 1; k <= n; k++) {
    let [xn, yn] = readline().split(" ");
    cache[xn][yn] = -1;
  }
  // both x + y
  for (let i = 1; i <= x; i++) {
    for (let j = 1; j <= y; j++) {
      cache[i][j] =
        cache[i][j] === -1
          ? 0
          : sumBigNumber(
              cache[i - 1][j].toString(),
              cache[i][j - 1].toString()
            );
    }
  }
  return cache[x][y];
}

console.log(totalPath(x, y, n));
