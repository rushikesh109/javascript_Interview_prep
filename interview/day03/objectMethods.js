const user = {
    name: "Rushi",
    age: 23,
    profession: "student"
}

const personalInfo = {
    userId: 1,
    email: "admin@gmail.com",
    role: "Admin"
}

 //---------------------READING_OBJECT_DATA---------------------------

console.log(Object.keys(user)); 
// ->o/p = [ 'name', 'age', 'profession' ] 
 //return objects keys only,
console.log(Object.values(user)); 
// -->o/p = [ 'Rushi', 23, 'student' ]
 //return object values only,
console.log(Object.entries(user)); 
//-->o/p = [ [ 'name', 'Rushi' ], [ 'age', 23 ], [ 'profession', 'student' ] ]
//return object key and value both..


 //---------------------Creating / copying objects (IMMUTABILITY 🔥)---------------------------

const copying = Object.assign({}, user); //shallow copy of the object
console.log(copying);

const merged = Object.assign( {},user, {city: "Pune"})
console.log(merged);

//Spread operated to concate the object/array/string
const copy = { ...user, ...personalInfo };
console.log(copy);


// -------------------------------Checking properties safely-------------------
console.log(Object.hasOwn(user, "name")); //--> return true/false







//------------------------------------Controlling object mutability (IMPORTANT)-------------------------------

const obj = { a: 1 }
Object.freeze(obj)

obj.a = 2;
console.log(obj);


const objs = { a: 1 }

Object.seal(obj);

obj.a = 2;
obj.b = 3;

console.log(objs);


// ---------------------------------------Prototype-related methods (advanced but important)-----------------------

const users = {}

Object.defineProperty(user, "name", {
  value: "Rushi",
  writable: false,
  enumerable: true,
});


console.log(Object.getOwnPropertyDescriptor(user, "name"));


///“JavaScript Object methods provide utilities to inspect, copy, control mutability, and manage prototypes of objects.”///////