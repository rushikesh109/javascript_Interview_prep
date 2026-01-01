// Object literals --> const user = { }  --> this is called literal syntax of object

// It is simple and easy to implement. However, it does not act as a blueprint.
// If we need to create 10 or more objects with the same keys but different values, we must repeat the object structure multiple times, which is not efficient.

// Example -- >

const user = {
    fName: "Rushi",
    lName: "Mangrule",
    getName: function () {
        console.log(`hellow ${this.fName}`);
    },
    getContant: function () {
        contact: 888888;
    },
};

// console.log(user.getContant());

// ----- Older way to create objects using constructor functions -----
// Normal functions use camelCase → first letter is lowercase
// Constructor functions use PascalCase → first letter is capitalized

// function Person(fName, lName, contact) {
//     (this.fName = fName),
//         (this.lName = lName),
//         (this.contact = contact),
//         (this.getName = function () {
//             console.log(this.fName, this.lName);
//         }),
//         (this.getContact = function () {
//             console.log(this.contact);
//         });
// }

// const us = new Person("rushi", "managrule", 8888);

// console.log(us);
// us.getContact();
// us.getName()


// Before ES6, JavaScript commonly used object literals to create individual objects and constructor functions to create multiple objects or simulate base classes.
// With ES6+, JavaScript introduced the class keyword, which provides a cleaner and more familiar syntax for creating constructor functions and handling inheritance.


class userData {
    constructor(fName, lName, contact){
        this.fName = fName,
        this.lName = lName,
        this.contact = contact
    }

    getContact()  {
        console.log(this.contact);
    }

    getFullName() {
        console.log(this.fName, this.lName);
    }
}

const user1 = new userData("rushi", "mangrule", 99999)
user1.getContact()
user1.getFullName()

console.log(user1);
