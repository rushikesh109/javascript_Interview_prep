//simple call back
function greet(name, callback){
    console.log(name + " how are you");
    callback()
}

function sayHello(){
    console.log("how are you doing")
}

// greet("rushi", sayHello)


//Inline call back
// greet("sakshi", function(){
//     console.log("See you later");
// })


//async call back
// console.log("hello");

// setTimeout(()=>{
//    console.log("nice to meet you");
// },2000)

// console.log("rushi");

//real world

function fetchUser(userId, callback){
    setTimeout(()=>{
         const user = {
            id: userId,
            name: " alice"
         }
         callback(user)
    },2000)
}

fetchUser("1", function(user){
    console.log("user:" , user);
    
})


//callback hell


//error handling in call back
function fetchData(callback) {
  setTimeout(() => {
    const error = Math.random() > 0.5 ? "Error occurred" : null;
    const data = error ? null : { name: "Data" };
    
    callback(error, data);
  }, 1000);
}

fetchData(function(error, data) {
  if (error) {
    console.log("Error:", error);
  } else {
    console.log("Success:", data);
  }
});


