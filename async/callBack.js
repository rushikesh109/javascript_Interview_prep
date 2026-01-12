// CALLBACK -- > callback means one function that passed as an argument in another function and it will be executed after some operation has been completed
// ONE LINE ---> calling a function inside another function after some operation

// function one(two){
//     two();
//     console.log("Function one is called");
// }

// function two(){
//     console.log("Function two is called");
// }

// one(two); //passing function two as an argument to function one.

//with arrow function
let stock = {
    fruits: ["strawberry", "banana", "mango", "grapes"],
    liquid: ["water", "ice"],
    holder: ["cone", "cup", "stick"],
    toppings: ["chocolate", "peanuts"],
};

let order = (fruit_name, call_production) => {
    setTimeout(() => {
        console.log(`${stock.fruits[fruit_name]} is selected`);

        call_production(); //callback function
    }, 2000);
};

//started the callback hell here CALLBACK MAKES RELATIONSHIP LIKE PARENT CHILDEREN, GRAND CHILDREN, GRAND GRAND CHILDREN AND SO ON....... but THIS IS NOT A GOOD PRACTICE TO WRITE CODE LIKE THIS. and the promise and async await is used to avoid callback hell.
let production = () => {
    setTimeout(() => {
        console.log("production is started");

        setTimeout(() => {
            console.log("the fruits has been chopped");

            setTimeout(() => {
                console.log(`${stock.liquid[0]} and ${stock.liquid[1]} is added`);

                setTimeout(() => {
                    console.log("machine has started");

                    setTimeout(() => {
                        console.log(`the container ${stock.holder[0]} is selected`);

                        setTimeout(() => {
                            console.log(`${stock.toppings[0]} topping is selected`);

                            setTimeout(() => {
                                console.log("ice-cream is ready to serve");

                                setTimeout(() => {
                                    console.log("ice cream is served");
                                }, 1000)
                            }, 2000);
                        }, 3000);
                    }, 2000);
                }, 1000);
            }, 1000);
        }, 2000);
    }, 0o00);
};

order(0, production); //passing production function as an argument to order function
