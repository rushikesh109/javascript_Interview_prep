// // Basic
// Basic
const numbers = [1, 2, 3, 4, 5];
const [first, second] = numbers;
console.log(first);  // 1
console.log(second); // 2

// Skip elements
const [a, , c] = numbers;
console.log(a); // 1
console.log(c); // 3

// Rest operator
const [x, y, ...rest] = numbers;
console.log(x);    // 1
console.log(y);    // 2
console.log(rest); // [3, 4, 5]

// Default values
const [p, q, r = 10] = [1, 2];
console.log(r); // 10

// Swapping variables
let var1 = 5;
let var2 = 10;
[var1, var2] = [var2, var1];
console.log(var1); // 10
console.log(var2); // 5

// Nested arrays
const nested = [1, [2, 3], 4];
const [one, [two, three], four] = nested;
console.log(two); // 2

// Function return values
function getCoordinates() {
  return [10, 20];
}
const [lat, lng] = getCoordinates();
console.log(lat); // 10
console.log(lng); // 20


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