// const promise1 = new  Promise((resolve, reject) => {
//     setTimeout(()=>{
//      resolve()
//      console.log("hey rushii");
//     },1000)
// }).then(()=>{
//     console.log("promise 1 cosumned");
// })

// new Promise((resolve, reject) => {
//     setTimeout(()=>{
//         console.log("hey what are u doing");
//         resolve()
//     },1000)
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

// const getAllUser = async() =>{
//     try{
//         const response = await fetch('https://jsonplaceholder.typicode.com/users')

//         const data =  await response.json()
//         console.log(data);

//     }catch(err){
//         console.log(err);
//     }
// }
// getAllUser()

// fetch('https://jsonplaceholder.typicode.com/users')
//     .then((response)=>{
//         return response.json()
//     })
//     .then((data) => {
//         console.log(data);
//     })
//     .catch((error) =>{
//         console.log(error);
//     })

// const fun = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve({
//       name: "rushi",
//       email: "rushi@gmail.com",
//       age: 23,
//     });
//   });
// })
//   .then((user) => {
//     console.log(user);
//     return user;
//   })
//   .then((user) => {
//     console.log(user.age);
//   })
//   .catch((err) => {
//     console.error(err.message);
//   })
//   .finally(() => {
//     console.log("finally");
//   });

// const getUserDetails = async () => {
//   try {
//     const response = await fetch("https://jsonplaceholder.typcode.com/users");
//     const data = await response.json();
//     console.log(data);
//   } catch (error) {
//     console.log(error.TypeError);
//   }
// };
// getUserDetails();

const errorPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    let error = false;

    if (!error) {
      resolve({
        username: "rushi",
        email: "hey@gmail.com",
      });
    } else {
      reject(new Error ("Something went wrong"));
    }
  }, 1000);
});

const callfunction = async () => {
  try {
    const data = await errorPromise;
    console.log(data);
  } catch (error) {
    console.log(error.message);
  } finally {
    console.log("executed");
  }
};

callfunction()