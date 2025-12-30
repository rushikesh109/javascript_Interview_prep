//map transforms,
//filter selects, 
// reduce accumulates

const array = [2,4,6,7]

const newArray = array.map(n => n * 2)

console.log(newArray);
// Map is higher order function used to transform the value is can written new array with same size 

const newFilter = array.filter(n => n % 2 === 0)

console.log(newFilter);
// filter is used to filter out the value with a codition is given and return the filterd value


const newReduce =  array.reduce((a ,b) => {
    return a + b
}, 0)


console.log(newReduce);
//Takes an array → reduces it into a single value (number, object, array, anything)
