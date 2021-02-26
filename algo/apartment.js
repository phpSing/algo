function apartmentHunting(blocks, reqs) {
  const blockWithIds = blocks.map((b, index) => {
    const newBlock = {};
    let id = `${index}_`;
    Object.entries(b).forEach(([key, value]) => {
      if (value) id += "1";
      else id += "0";
    });
    newBlock.id = id;
    for (let req of reqs) {
      newBlock[req] = b[req] ? 1 : 0;
    }
    return newBlock;
  });

  const sortedByReq = [];
  for (let req of reqs) {
    const temp = [...blockWithIds];
    temp.sort((a, b) => a[req] - b[req]);
    sortedByReq.push(temp);
  }

  console.log(sortedByReq.length);

  let answerId = "";
  // time O(n^2)
  for (let i = 0; i < blocks.length; i++) {
    for (let j = 1; j < sortedByReq.length; j++) {
      if (sortedByReq[j][i].id === sortedByReq[j - 1][i].id) {
        if (j === sortedByReq.length - 1) answerId = sortedByReq[j][i].id;
        continue;
      }
      break;
    }
  }

  console.log(answerId);

  console.log(sortedByReq);
  // trying to give id to each block, like an adress
}

// // Do not edit the line below.
// exports.apartmentHunting = apartmentHunting;

console.log(
  apartmentHunting(
    [
      { gym: false, school: true, store: false },
      { gym: true, school: false, store: false },
      { gym: true, school: true, store: false },
      { gym: false, school: true, store: false },
      { gym: false, school: true, store: true },
    ],
    ["gym", "school", "store"]
  )
);
