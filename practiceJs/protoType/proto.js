const computer = {
    cpu: "8RAM"
}

const lenovo = {
    screen: "HD",
    // __proto__:computer,
}

// console.log(lenovo, computer.__proto__);

Object.setPrototypeOf(lenovo, computer)
console.log(`lenovo's prototype is now computer:`, Object.getPrototypeOf(lenovo));

console.log(lenovo.hasOwnProperty('screen'))
