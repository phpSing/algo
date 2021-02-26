// function animate(elem, milliseconds, pixels) {
//   // how we move it
//   let startTime = null;
//   const animateIt = (timestamp) => {
//     if (startTime === null) {
//       // means we didnt start yet
//       startTime = timestamp;
//     }

//     const diff = timestamp - startTime;
//     if (diff >= milliseconds) return;
//     elem.style.transform =
//       "translateX" + "(" + Math.min(0.1 * diff, pixels) + "px)";
//     requestAnimationFrame(animateIt);
//   };
//   requestAnimationFrame(animateIt);
// }

// animate(document.querySelector("#container"), 5000, 200);

// Write an algorithm to show the output given a string with the following format where we repeat the values inside the parenthesis with the number after it.

// {abc}3 = abcabcabc

// {c{ab}2}4 = cababcababcababcabab

// {{c}2{b}1{d}2}2 = ccbddccbdd

// base
// {a}1 => a

// {a}5 => 5 {} for loop n

// {a{c}2}2

// {}1

// upper stack
// repeatString
// take last digit
// take out paren
// loop adding string return it

// linear

// open close

// currentstring  * times
// times 2
// string cc
// cc => getRepeatString
// times 1
// string b
// b => getRepeatString
// times 2
// string d
// dd => getRepeatString
// [o, close, ]
// open we continue

// time O(n*9) 1-9
// space O(n)

// function repeat(string) {
//   if (!string) return "";
//   const queue = [];
//   const OPEN = "{";
//   const CLOSE = "}";
//   let currentString = "";
//   let times = 0;
//   let temp = ""; // the string for current repeat pattern
//   let numberReg = /[1-9]/;
//   for (let i = 0; i < string.length - 1; i++) {
//     console.log(string[i]);
//     if (numberReg.test(string[i])) continue;
//     if (string[i] === OPEN) {
//       // if it is open tag, means we start a new section
//       // we need to reset the temp string and times
//       currentString += temp;
//       temp = "";
//       times = 0;
//       queue.push(string[i]);
//       continue;
//     } else if (string[i] === CLOSE) {
//       queue.pop();
//       times = string[i + 1];
//       console.log(temp);
//       currentString += helper(temp, times); // transform it with repeats
//       temp = "";
//       times = 0;
//       continue;
//     } else {
//       temp += string[i];
//     }
//   }
//   console.log(queue);
//   return helper(currentString, string[string.length - 1]); // #todo
// }

// function repeat(string) {
//   const levels = [[]];
//   const OPEN = "{";
//   const CLOSE = "}";
//   let numberReg = /[1-9]/;
//   let currentLevel = 0; // mapping to the index
//   let levelTemp = "";
//   for (let i = 0; i < string.length; i++) {
//     if (numberReg.test(string[i])) {
//       continue;
//     } else if (string[i] === OPEN) {
//       // means we get into another level
//       if (levelTemp) {
//         levels[currentLevel].push(levelTemp);
//         levelTemp = "";
//       }
//       currentLevel += 1;
//       if (!levels[currentLevel]) {
//         levels.push([]);
//       }
//     } else if (string[i] === CLOSE) {
//       // means we exiting a level
//       // collecting all string generated and put together
//       const levelString = helper(levelTemp, string[i + 1]);
//       levels[currentLevel].push(levelString);
//       levels[currentLevel].push(
//         levels[currentLevel + 1] ? levels[currentLevel + 1].join("") : ""
//       );
//       levelTemp = "";
//       currentLevel -= 1;
//       console.log(currentLevel);
//     } else {
//       levelTemp += string[i];
//     }
//   }
//   console.log(levels);
//   return levels.length > 2
//     ? helper(levels[1].join(""), string[string.length - 1])
//     : levels[1].join("");
// }

// const helper = (s, t) => {
//   let output = "";
//   for (let i = 0; i < t; i++) {
//     output += s;
//   }
//   return output;
// };

// console.log(repeat("{abc}3"));
// console.log(repeat("{{ab}2}4"));
// console.log(repeat("{c{ab}2}4"));
// console.log(repeat("{a{c}2{d}2}2"));
// console.log(repeat("{a{cee}2{d}3}5"));
// console.log(repeat("{a{v}8{d}1}5"));
// console.log(repeat("{a{v}8{d}1{e}3}5"));

// class UserName {
//   constructor(props) {
//     super(props); // call base class constructures
//     var image = document.createElement("img");
//     image.src = "https://semantic-ui.com/images/avatar2/large/kristy.png";
//     image.classList.add("image");

//     var container = document.createElement("div");
//     container.classList.add("container");

//     var name = document.createElement("p");
//     name.classList.add("name");
//     name.innerText = "User Name";

//     var email = document.createElement("p");
//     email.classList.add("email");
//     email.innerText = "yourmail@some-email.com";

//     var button = document.createElement("button");
//     button.classList.add("button");
//     button.innerText = "Follow";

//     container.append(name, email, button);
//     this.append(image, container);
//   }
// }

// window.customElements.define("user-name", UserName);
// console.log(-3 % 7);

const singleEmployeeAPI = `http://api.additivasia.io/api/v1/assignment/employees/`;
// [
//   "CEO",
//   {
//     "direct-subordinates": ["Samad Pitt", "Leanna Hogg"],
//   },
// ];
// start a new queue for this person we searched
let queue = ["John Hartman"];
let subordinates = [];
let temp = [];
// unpack the person to find subordinates
while (queue.length > 0) {
  // keep unpack if there are more subordinates
  const person = queue.shift();
  let searchedPerson = await fetch(`${singleEmployeeAPI}${person}`);
  searchedPerson = await searchedPerson.json();
  console.log("searchedPerson"), searchedPerson;
  temp = searchedPerson[1] ? searchedPerson[1]["direct-subordinates"] : [];
  subordinates = subordinates.concat(temp);
  queue = queue.concat(temp);
}

console.log(subordinates);
