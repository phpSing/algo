let sherlock = {
  surname: "Holmes",
  address: { city: "London" },
};

let john = {
  surname: "Watson",
  address: sherlock.address,
};

john.surname = "Lennon";
john.address.city = "Malibu";

console.log(sherlock.surname); // ? Holmes
console.log(sherlock.address.city); // ? Malibu
console.log(john.surname); // ? Lennon
console.log(john.address.city); // ? Malibu

// part 1
// 内存_holmes = "Holmes";
// 内存_sherlock_address_city = "London";
// 内存_sherlock_address = { city: 内存_sherlock_address_city };
// 内存_sherlock = {
//   surname: 内存_holmes,
//   address: 内存_sherlock_address,
// };
// sherlock = 内存_sherlock;
