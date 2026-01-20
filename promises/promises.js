// const promise1 = new  Promise((resolve, reject) => {
//     setTimeout(()=>{
//      console.log("hey rushii");
//      resolve()
//     },100)
// })

const { get } = require("mongoose");

// promise1.then(()=>{
//     console.log("promise1 cosumned");
// })

// new Promise((resolve, reject) => {
//     setTimeout(()=>{
//         console.log("hey what are u doing");
//         resolve()
//     },100)
// }).then(()=>{
//     console.log("promise 2 consumed");
// })

// const promiseThree = new Promise(function(resolve, reject){
//     setTimeout(function(){
//       resolve({
//         name: "Rushi",
//         email: "test@gmail.com"
//       })
//     },1000)
// })

// promiseThree.then(function(user){
//     console.log(user);

// })

// const promiseFive = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     let error = false;

//     if (!error) {
//       resolve({
//         username: "rushikesh",
//         pass: 123,
//       });
//     } else {
//       reject("Error: Something went wrong");
//     }
//   }, 1000);
// });

// promiseFive
//   .then((user) => {
//     console.log(user);
//     return user.username;
//   })
//   .then((username) => {
//     console.log(username);
//   })
//   .catch((err) => {
//     console.error(err);
//   })
//   .finally(() => {
//     console.log("Finally executed");
//   });

// const promiseSix = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     let error = true;

//     if (!error) {
//       resolve({
//         username: "ram",
//         email: "ram@gmail.com",
//       });
//     } else {
//       reject("Error: something went wrong");
//     }
//   }, 1000);
// });


// const asyncawait = async() => {
//   try {
//      const hey =  await promiseSix;
//      console.log(hey);
//   } catch (error) {
//     console.log(error , error.meassage);
//   }finally{
//     console.log("executed");
//   }
// }



// asyncawait()

const getAllUser = async() =>{
    try{
        const response = await fetch('https://jsonplaceholder.typicode.com/users')

        const data =  await response.json()
        console.log(data);
        
    }catch(err){
        console.log(err);
    }
}
getAllUser()

fetch('https://jsonplaceholder.typicode.com/users')
    .then((response)=>{
        return response.json()
    })
    .then((data) => {
        console.log(data);
    })
    .catch((error) =>{
        console.log(error);
    })