let teaCollections = ["early", "grey", "green", "tea", "chai", "oolang tea"];

let availableTeas = [];

teaCollections.forEach((tea) => {
  if (tea === "chai") {
    return;
  }
  availableTeas.push(tea);
});

//  console.log(availableTeas);

let city = ["berlin", "tokyo", "sydney", "paris"];

let traveledCities = [];

city.forEach((town) => {
  if (town === "sydney") {
    return;
  }
  traveledCities.push(town);
});

// console.log(traveledCities);


let num = [2,5,7,9];

let doubledNumber = [];
for(let i =0; i< num.length; i++){
    if(num[i] === 7){
        continue
    }
    doubledNumber.push(num[i] * 2)
}
// console.log(doubledNumber);



// console.log(abc(num));


let teaCollection = ["early", "grey", "green", "tea", "chai", "oolang tea"];
let shortTeas = []
for(let tea of teaCollection){
    if(tea.length >= 10){
        break;
    }
    shortTeas.push(tea)
}

 console.log(shortTeas);