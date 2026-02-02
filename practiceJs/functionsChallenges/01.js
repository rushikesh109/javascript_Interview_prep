function makeTea(typeOfTea){
   return `Making ${typeOfTea}`
}

// console.log(makeTea("greenTea"));


function orderTea(teaType){
    const confirmOrder = () => {
       return  `Order confirmed for chai`
    }
   return confirmOrder()
}

// console.log(orderTea());

//Implicite arrow
const price = 23;
const quantity = 2;
// const calculatedTotal = (price, quantity) => {
//     let totalCost = price * quantity;
//     console.log(totalCost);
// }

//Explicite arrow
const calculatedTotal = (price, quantity) => price * quantity;
// console.log(calculatedTotal(price,quantity))


  
//Higher-order-function // First class function
//function take another function as parameter called hof
function makeTea(typeOfTea){
return `maketea: ${typeOfTea}`
}
function processTeaOrder(fn){
    return fn('earl grey')
}

// console.log(processTeaOrder(makeTea))

function sayHello(){
    return `hello `
}

function greeting(fn, name){
    console.log(fn() + name);
}

// greeting(sayHello, "rushi")


//closure function
//A closure is a function that "closes over" its surrounding state (the lexical environment). 
// This means that a closure can remember and access variables from its outer scope even after that scope has finished executing.
function createTeaMaker(name){
    return function(teaType){
        return `making ${teaType} for ${name}`
    }
}

const teaMaker = createTeaMaker("Rushikesh")
console.log(teaMaker("green tea"));
 

//real example for API request builder;

function createApiClient(baseUrl){
     return async function(endPoint){
      try{
         const response = await fetch(`${baseUrl}/${endPoint}`)
         if(!response.ok){
            throw new Error(`Http error! status: ${response.status}`)
         }
         return await response.json()
      }catch(err){
        console.error(err.message);
      }
    }
}

const githubApi = createApiClient("https://api.github.com")
const userApi = createApiClient("https://api.myapp.com/users")

githubApi("repos")
    .then(data => console.log("GitHub:", data))
    .catch(err => console.error("GitHub error:", err));
userApi("profile")
    .then(data => console.log("User:", data))
    .catch(err => console.error("User error:", err));

//Explanation --> When createApiClient executes, its execution context is created.
// When it returns, that execution context is destroyed, but the variable baseUrl remains alive because the anonymous function keeps a reference to its lexical environment.
// Later, when the anonymous function executes, it accesses baseUrl through that reference.