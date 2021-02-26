let dwarves = 7;
let continents = "7";
let worldWonders = 3 + 4;

console.log(Object.is(dwarves, continents)); // ? false
console.log(Object.is(continents, worldWonders)); // ? false
console.log(Object.is(worldWonders, dwarves)); // ? true
