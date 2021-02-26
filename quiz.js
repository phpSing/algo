const { number } = require("prop-types");

const person = { name: "Lydia" };

function sayHi(age) {
  return `${this.name} is ${age}`;
}

console.log(sayHi.call(person, 21)); // `Lydia is 21`
console.log(sayHi.bind(person, 21)); // sayHi

sayhi = undefined;
ram_person_name = "Lydia";
ram_person = {
  name: ram_person_name,
};
ram_sayhi = (age) => {
  return `${this.name} is ${age}`;
};

GO = {
  sayhi: ram_sayhi,
  person: ram_person,
  AO: {
    this: ram_person,
    age: 21,
    return: `Lydia is 21`,
  },
};

// 2
let person = { name: "Lydia" };
const members = [person];
person = null;

console.log(members);

ram_person_name = "Lydia";
ram_person = null;
ram_members = [(0: ram_person)];

person = ram_person;
members = ram_members;

// 3
const groceries = ["🍅", "🍇", "🧀"];

let favoriteItem = groceries.find((item) => item === "🍇");
favoriteItem = "🥑";

const indexOfLeastFavorite = groceries.indexOf("🧀");
groceries[indexOfLeastFavorite] = "🍕";

console.log(groceries);

ram_apple = "🍅";
ram_grape = "🍇";
ram_cheese = "🧀";
ram_pizza = "🍕";
ram_groceries = [ram_apple, ram_grape, ram_pizza];
ram_favoriteitem = "🥑";
ram_index = 2;

groceries = ram_groceries;
favoriteItem = ram_favoriteitem;
index = ram_index;

// 4
const person = { name: "Lydia", age: 21 };
const changeAge = (x = { ...person }) => (x.age += 1);
const changeAgeAndName = (x = { ...person }) => {
  x.age += 1;
  x.name = "Sarah";
};

changeAge(person);
changeAgeAndName();

console.log(person);

ram_person_name = "Lydia";
ram_person_age = 22;
ram_person = {
  name: ram_person_name,
  age: ram_person_age,
};
person = ram_person;

ram_change_age = (x = { ...person }) => (x.age += 1);
changeAge = ram_change_age;

ram_change_age_name = (x = { ...person }) => {
  x.age += 1;
  x.name = "Sarah";
};
changeAgeAndName = ram_change_age_name;
ram_x_name = "Sarah";
ram_x_age = 22;
ram_x = {
  name: ram_x_name,
  age: ram_x_age,
};
x = ram_x;

person = {
  name: "Lydia",
  age: 22,
};

// 5
var a = { a: { aa: 1 } };
var b = { ...a };
b.a.x = "xxxx";
console.log(a);

ram_a_a_aa = 1;
ram_a_a_x = "xxxx";
ram_a_a = {
  aa: ram_a_a_aa,
  x: ram_a_a_x,
};
ram_a = {
  a: ram_a_a,
};

ram_b = {
  a: ram_a_a,
};

// {
//     a: {
//         aa: 1,
//         x: 'xxxx',
//       }
//   };

//   6
async function* range(start, end) {
  for (let i = start; i <= end; i++) {
    yield Promise.resolve(i);
  }
}

(async () => {
  const gen = range(1, 3);
  for await (const item of gen) {
    console.log(item);
  }
})();

GO = {
    range: (start, end) => {
        for (let i = start; i <= end; i++) {
          yield Promise.resolve(i);
        }
      }
}
AO = {
    gen: [1,2,3]
}

// 7
const randomValue = 21;

function getInfo() {
  console.log(typeof randomValue);
  const randomValue = "Lydia Hallie";
}

getInfo();

ram_get_info = () => {
    console.log(typeof randomValue); // reference error
    const randomValue = "Lydia Hallie";
}
getInfo = ram_get_info

ram_ramdom = 21
randomValue = ram_ramdom

ram_inner_randomValue = "Lydia Hallie"
inner_randomValue = ram_inner_randomValue
