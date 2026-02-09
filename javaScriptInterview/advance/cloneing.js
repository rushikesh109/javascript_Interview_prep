
//Shallow Clone - Copies only the first level (nested objects are still referenced)
// Deep Clone - Copies all levels (completely independent copy)

//Array==>
// const original = [1,2,3,4]; //no change if array if not nested
// const clone1 = [...original];
// const clone2 = original.slice();
// const clone3 = [].concat(original);
// const clone4 = Array.from(original)
// const clone5 = original.map(x => x)
// clone1.push(5) 
// original.push(5)
// console.log(original); //no change in original array
// console.log(clone1);
// console.log(clone2);
// console.log(clone3);
// console.log(clone4);
// console.log(clone5);


// const nested = [1, 2, [3, 4]];
// const shallowClone = [...nested];
// shallowClone[2][0] = 999;
// console.log(nested);
// console.log(shallowClone) // it changed original array

// //thats why for nested object we use deep clone
// const deepClone1 = JSON.parse(JSON.stringify(nested));
// deepClone1[2][0] = 777;
// console.log(nested)
// console.log(deepClone1);

// Object ==>
//shallow copy
const originalObj= { name: "John", age: 30 }
const spread = {...originalObj};
const assign = Object.assign({}, originalObj)
console.log(originalObj);
// console.log(spread);
spread.name = "rushi"
console.log(spread);
console.log(assign);

//problem with shallow copy (nested object)



const person = {
  name: "Alice",
  address: {
    city: "New York",
    country: "USA"
  }
};

const shallowCopy = {...person}
shallowCopy.address.city = "Los Angeles"

// console.log(shallowCopy); //original changed

//Deep clone for nested object;

const deepClone2 = structuredClone(person);

deepClone2.address.city = "mumbai"
console.log(person);

console.log(deepClone2);



