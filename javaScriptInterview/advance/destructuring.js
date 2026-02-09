// // Basic
// const person = { name: "Alice", age: 25, city: "NYC" };
// const { name, age } = person;
// console.log(name); // "Alice"
// console.log(age);  // 25

// // Renaming variables
// const { name: personName, age: personAge } = person;
// console.log(personName); // "Alice"
// console.log(personAge);  // 25

// // Default values
// const { country = "USA" } = person;
// console.log(country); // "USA"

// // Rest operator
// const { ...details } = person;
// console.log(name);    // "Alice"
// console.log(details); // {age: 25, city: "NYC"}

// Nested objects
const user = {
  id: 1,
  info: {
    name: "Bob",
    address: {
      city: "London",
      zip: "12345"
    }
  }
};

const { info: { name, address: { city } } } = user;
console.log(name); // "Bob"
console.log(city); // "London"

// Function parameters
function greet({ name, age }) {
  console.log(`Hello ${name}, you are ${age} years old`);
}
greet({ name: "Charlie", age: 30 }); // Hello Charlie, you are 30 years old

// With default values
function introduce({ name = "Guest", age = 18 } = {}) {
  console.log(`${name} is ${age}`);
}
introduce({ name: "Dave" }); // Dave is 18
introduce();                 // Guest is 18