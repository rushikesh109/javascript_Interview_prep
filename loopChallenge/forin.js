//stop when population of berlin is found;

let cityPopulation ={
    "london" : 3,
    "mumbai":1,
    "berlin":2,
}
let cityNames = {};

for (const key in cityPopulation) {
    if(key === "berlin"){
        break;
    }
    cityNames[key] = cityPopulation[key];
}
// console.log(cityNames)

//skip when city population is below 3m;
let largeCity = {}
for (const city in cityPopulation) {
    if(cityPopulation[city] >=  3){
        continue
    }
   largeCity[city] = cityPopulation[city]
}

console.log(largeCity);
