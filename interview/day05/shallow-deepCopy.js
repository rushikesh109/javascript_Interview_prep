const user = {
  name: "Rushi",
  address: {
    city: "Pune"
  }
};

// const shallowCopy = {...user}
// console.log(shallowCopy);

// shallowCopy.address.city = "Mumbai"

// console.log(user.address.city);
// console.log(shallowCopy);


// const deepCopy = structuredClone(user);
// console.log(deepCopy);
// const c2 = deepCopy.address.city = "Mumbai"
// console.log(c2);
// console.log(deepCopy);


// function deepCopy(obj) {
//   if (obj === null || typeof obj !== "object") return obj;

//   const result = Array.isArray(obj) ? [] : {};

//   for (let key in obj) {
//     result[key] = deepCopy(obj[key]);
//   }

//   return result;
// }


// console.log(deepCopy(user));
// console.log(deepCopy(user).address.city = "delhi")
// console.log(deepCopy(user));



const userData = {
    userId: 2,
    name: "Rushi",
    age: 23,
    address: {
        city: "Pune"
    }
}
console.log(userData);

const deepCopy = structuredClone(userData)

console.log(deepCopy);

console.log(userData === deepCopy);

console.log(deepCopy.address.city = "delhi");


console.log(deepCopy);
console.log(userData);




