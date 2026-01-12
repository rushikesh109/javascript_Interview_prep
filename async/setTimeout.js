//javascript run code top to bottom
console.log("hey");
console.log("my name");
console.log('is rushi');
console.log("what about");
console.log("you?");


//javascript async function using setTimeout()
console.log("hey");
console.log("my name");
console.log('is rushi');
setTimeout(() => {
    console.log("this is async function in js setTimeout()");
},5000);
console.log("what about");
console.log("you?");