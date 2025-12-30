const nums = [ 2, 4, 3, 6, 1];


// Find --> Scans array left → right
// Returns the element itself
// Stops at first match
// If nothing found → undefined

const user = [
    {id: 1, name: "rushi"},
    {id:2, name: "sakshi"},
    {id:3, name:"srush"}
]
const newArray = user.find(n => n.id === 2)

console.log(newArray);


// some()--->
// Checks if at least ONE element passes the condition
// Stops early on first true
// Returns boolean

const hasEven = nums.some(n => n % 2 === 0)

console.log(hasEven);



// every()---> 
// Checks if ALL elements pass the condition
// Stops early on first false
// Returns boolean

const help = nums.every(n => n % 2 === 0)

console.log(help);




// Real world example --> 

const hasAccess = roles.some(role => role === "admin");
const allFilled = fields.every(field => field.value !== "");
const currentUser = users.find(u => u.isActive);
