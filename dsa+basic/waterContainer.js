const s =[1,1];

// function maxArea(s){
//     let maxWater = 0;
//     let left = 0;
//     let right = s.length -  1;

//     while(left < right){
//         const width = right - left;
//         const minHeight = Math.min(s[left] , s[right]);
//         const area = width * minHeight;

//         maxWater = Math.max(maxWater, area);

//         if(s[left] < s[right]){
//             left++;
//         }else{
//             right--;
//         }
//     }
//     return maxWater
// }


// console.log(maxArea(s));



//In this maxWater container problem i use two pointer apporach for a optimal soluntion where the left pointer at 0th index of s and right pointer is s.length - 1 means last index of s to calculate maxWater we need the maxArea and area cal by length * width . so thats why we first cal width and width cal by right -left we got width after that i get rid of the min stick that why we cal using math.min left and right after that we cal area = minHeigth * width 
//  compaire maxWater using math.max (maxwater, area)  
//  and we got the maxWater after that we move both pointer that if the s[left] < s[right] then we go forward else we go backward and at last return the maxWater


// function maxWaterr (s){
//     let maxWater = 0;
//     let left =0;
//     let right = s.length - 1;

//     while(left <  right){

//         const width = right- left;
//         const minWater = Math.min(s[left], s[right]);
//         const area = width * minWater;

//         maxWater = Math.max(maxWater, area );

//         if(s[left] < s[right]){
//             left++;
//         }else{
//             right--;
//         }
//     }
//     return maxWater;
// }

// console.log(maxWaterr(s));

// console.log(4)
// async function addition(){
//     console.log("a");
//     const substraction = await Promise.resolve()
//     console.log(3-5);
// }

// addition()
// console.log(5*3);


// function addition(a, b){
//     const addition = a + b;
//     return addition;
// }

// console.log(addition(3,4))

// class user{
//     constructor(name, age){
//         this.name = name;
//         this.age = age;
//     }
// sayhi(){
//     console.log(`Hello my name is ${this.name} & my age is ${this.age}`);
// }
// }

// const newUser = new user("rushi", 22);
// newUser.sayhi()

// function greet(city){
//     console.log(this.name, city);
// }

// const user = {name: "rushi"};

// const greetRushi = greet.bind(user)
// greetRushi("pune")


// const a = [1,2,3,1];

// function duplicate(a){
//     let unique = [];

//     for(let i = 0; i < a.length; i++){
//         if(!unique.includes(a[i])){
//             unique.push(a[i])
//         }
//     }
// console.log(unique);

// }

// duplicate(a)

const str = "programming";
let result = "";
let seen = Array(26).fill(false);

for (let i = 0; i < str.length; i++) {
    let index = str.charCodeAt(i) - 97;

    if (!seen[index]) {
        seen[index] = true;
        result += str[i];
    }
}

console.log(result); // progamin


