const flatten = (object) => {
  let flattened = {};
  Object.assign(
    flattened,
    ...Object.keys(object).map((k) => {
      return typeof object[k] === "object"
        ? flatten(object[k])
        : {
            [k]: object[k],
          };
    })
  );
  return flattened;
};

console.log(
  flatten({
    a: "1",
    b: {
      c: 2,
      e: {
        f: "fff",
      },
    },
  })
);

// [1,2,[3,4, [5,6]]]
function flatArray(array) {
  let answer = [];
  for (let element of array) {
    if (Array.isArray(element)) {
      // we flat it
      const flattened = flatArray(element);
      answer = [...answer, ...flattened];
    } else {
      answer.push(element);
    }
  }
  return answer;
}

console.log(flatArray([1, 2, [3, 4, [5, 6]]]));
console.log(flatArray([1, [2, [3, 4, [5]]]]));

// => [1,2,3,4,5,6]

function animate(elem, milliseconds, pixels) {
  // how we move it
  let startTime = null;
  let frames = Math.floor(milliseconds / 60);
  console.log(frames, "frames");
  const animateIt = (timestamp) => {
    if (startTime === null) {
      // means we didnt start yet
      startTime = timestamp;
    }
    console.log(timestamp, "timestamp");

    const diff = timestamp - startTime;
    if (diff >= milliseconds) return;
    console.log(diff, "diff");

    elem.style.transform = "translateX" + "(" + +"px)";
    console.log(diff, "diff");

    requestAnimationFrame(animateIt);
  };
  requestAnimationFrame(animateIt);
}
