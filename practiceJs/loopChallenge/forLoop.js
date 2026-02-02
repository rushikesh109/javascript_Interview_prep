//before chai
// let teaTypes = ["green tea", "black tea", "chai", "oolang tea"];

// let selectedtea = [];

// for (let i = 0; i < teaTypes.length; i++) {
//     if (teaTypes[i] === "chai") {
//         break;
//     }else{    
//         selectedtea.push(teaTypes[i])
//     }
// }
// console.log(selectedtea);



// skip paris
let city = ["london", "new york", "paris", "berlin"]
let visitedCity = []

for(let i = 0; i<city.length; i++){
    if(city[i] === "paris"){
        continue
    }
    visitedCity.push(city[i])
}
console.log(visitedCity);



