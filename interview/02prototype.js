const create = require("prompt-sync");

const obj1 = {
    fname: "Rushi",
    lname: "Mangrule",
    getFullName(){
        return `${this.fname} ${this.lname}`
    }
}

console.log(obj1);


const obj2 = Object.create(obj1) 
//this means as follow it create another object that inheri prop if obj1
// const obj2 = {
//   __proto__ : obj1;
// }
obj2.__proto__.fname = "ru"

console.log(obj2.fname);


class Student{
    constructor(name){
        this.name = name;
    }

    getName(){
        return this.name
    }
}

const s1 = new Student(__proto__)


//difference between __proto__ and prototype is __prtotype in on object and on the base classs there is prototype
//this means object ka __proto__ points towards base class ka prototype 

//always class can inheriate property until ints proto becomes null and object has __proto__ is NULL;


//in javascript everything is  OBJECT


// important ---> __proto__ is the actual object that is used in the lookup chain to resolve methods etc . protoype is the object that is used to build __proto__ when you create an object with new.