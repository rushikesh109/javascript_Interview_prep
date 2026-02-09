// diff normal function and arrow Function

// keyDifference

//this Binding-->
const obj1 = {
    name : "rushi",
    sentence: function(){
      return `hello ${this.name}` //hello rushi
    }  
}

console.log(obj1.sentence());


// arrow function
const obj2  = {
    name: "sham",
    greet: () => {
      return `hello   ${this.name}`
    }
}

console.log(obj2.greet());  //hello undefine


const person = {
    name: "rushi",
    hobbies : ["coding", "reading", "and playing cricket"],

    showHobbies: function(){
        this.hobbies.forEach(function(hobby){
            console.log(`${this.name}'s hobbies are ${hobby}`);
        })
    },

    showHobbies1: function() {
        this.hobbies.forEach((hobby) => {
            console.log(`${this.name}'s hobbies are ${hobby}`);
        })
    }
}
person.showHobbies();
person.showHobbies1();


//NO argument object;

// function add (){
    // return arguments
// } // array is an object under the hood so it retun array in object
// console.log(add([1,2,3,4]));

const add = () => {
    return arguments
} //reference Error
const addd = (...args) => {
    return args
}//return array
// console.log(addd([1,2,3,4,5]));


//Not be used as constructor;

function Person(name){
    this.name = name;
}

const news = new Person("rushi")
console.log(news);

const Info = (name) => {
  this.name = name;
}
// const n = new Info("sham")
// console.log(n); // info is not constructor




greeting("hello")

function greeting (){
    console.log("hello");
    
}



//Closure

function counters(){
    let counter = 1;
    console.log(counter);
    return function inc(){
        counter++
        return counter;
    }
}

const increment = counters();

console.log(increment());
console.log(increment());
console.log(increment());