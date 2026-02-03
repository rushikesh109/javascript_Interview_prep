// class object{
//     constructor(firstName, lastName, age){
//        this.firstName = firstName
//        this.lastName = lastName
//        this.age = age        
//        }
//         getAge(){
//         console.log(this.age);
//     }
// }

// const userOne = new object("rushi","managrule", 23)
// //new keyword create new  empty object constructor function call cause of new keyword in constructor we declare argument and then we use this key word to use those argument 
// console.log(userOne);
// userOne.getAge()


//INHERITANCE
class Vehicle{
    constructor(type, model, company){
        this.type = type;
        this.model = model;
        this.company = company;
    }

    start(){
        return `${this.model} is a car from ${this.company} and has a type of ${this.type}`
    }
}

class Car extends Vehicle{
    // constructor(brand, price){
    //     this.brand  = brand;
    //     this.price = price
    // }

  selling(brand,price){
    return `the brand of the car is ${brand} and his model is ${this.model} and the company of the car is form ${this.company} and type is ${this.type} and its price is ${price}`
  }
}
// let method1 = new Vehicle()
let method = new Car("suv", "2nd Generation", "india")
// console.log(method.selling("toyoto" ,"💲400000"));
// console.log(method.start());


