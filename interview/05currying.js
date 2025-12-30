//currying is basically means we can only write one argument with one function or series of function that can take only one argument

function addition(a){
    return function(b){
        return function(c){
            return a+b+c;
        }
    }
}

// const add = addition(c)
// console.log(add);

const log = env => level => message =>
  console.log(`[${env}] [${level}] ${message}`);


const areaReact = (l) => (b) => {
    return l * b;
}

console.log(areaReact(2)(4));


const hasRole = (role) => (user) => (user.role);

const isAdmin = hasRole("Admin")

