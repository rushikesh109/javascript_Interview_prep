const userMap = new Map();

userMap.set("name", "rushi")
userMap.set("age", 23)
userMap.set("id", 1);
userMap.set("role", "Admin")

console.log(userMap);

// console.log(userMap.get("name"));
// console.log(userMap.has("name"));
// console.log(userMap.delete("name"));
// console.log(userMap.has("name"));
// console.log(userMap.size);
// console.log(userMap);
// console.log(userMap.clear());
// console.log(userMap);

for(const [key, value] of userMap){
    console.log(key, value);  
}

// --------------------------SET-------------------------------------

const uniqueNumber = new Set()

uniqueNumber.add(1);
uniqueNumber.add(2);
uniqueNumber.add(3);
uniqueNumber.add(1);

console.log(uniqueNumber);

for(let nums of uniqueNumber){
    console.log(nums);
}

console.log(uniqueNumber.has(1));  // true
console.log(uniqueNumber.delete(1));
console.log(uniqueNumber.size);
console.log(uniqueNumber.clear());



// remove duplicate

const nums = [1, 2, 2, 3, 3, 4];
const unique = [...new Set(nums)];

console.log(unique); // [1, 2, 3, 4]
