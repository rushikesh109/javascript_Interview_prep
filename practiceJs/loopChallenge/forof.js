// stop when num === 4

let num = [1,2,3,4,5];
let smallNumber = [];

for (const element of num) {
    if(element === 4){
        break
    }
    smallNumber.push(element)
}
console.log(smallNumber);


//skip herbal tea;
let teas = ["green tea", "chai", "herbal tea", "black tea"]
let preferredTeas = [];

for (const tee of teas) {
    if(tee === "herbal tea"){
        continue
    }
    preferredTeas.push(tee)
}
console.log(preferredTeas);
