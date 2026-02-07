// primitive_DataTypes ---> String, Number, bigint, undefined, Symbol Boolean --> //actula value copied , only reassign
//reference_dataTypes ---> Object, arrays, functions ,dates --> copy ref/pointer
//example-->
let a = 10;
let b = a;
// console.log(b); 10
b=20;
// console.log(b); 20


let object1 = {
    name :"rushi"
}
let object4 = {
    ...object1,
    age: 23,
}

console.log(object4);

let object2 = object1;
object2.name = "SAME"
console.log(object1.name)
console.log(object2.name);




// Q What are var, let, and const? What are their differences?
// var --> bugfull, can be hoisted and return undefine function scoped and also reassignable;
//let and const --> are also hoisted but remain in temporial dead zone and give the error as reference error;
//and function is always is hoisted and the arrow function are not hoisted ;

const adsd = addition()
console.log(adsd);

function addition(){
    return add() + multiply()
}
function add(){
    return 5;
}
function multiply(){
    return 10
}

//example of function scoped 

// VAR - function scoped
function testVar() {
  if (true) {
    var name = "John";
  }
  console.log(name); // "John" (accessible outside block!)
}

// LET/CONST - block scoped
function testLet() {
  if (true) {
    let name = "Jane";
    const age = 25;
  }
  console.log(name); // ReferenceError
  console.log(age);  // ReferenceError
}   

