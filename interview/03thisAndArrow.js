// // const getCart = {
// //     buyerName: "Rushi",
// //     item: "apple",
// //     price: 18,
    
// //     checkOutMessage: function(){
// //             return (`thank you ${this.buyerName}, for purshacing ${this.item} from our store`)
// //     }
// // }
// // // checkOutMessage()

// // console.log(getCart.checkOutMessage());

// // //here this refer to the current context of the object...

// // ///ARROW;
// // //explicite arrow
// // const addition = (n1, n2) => {
// //     return n1+n2
// // }

// // console.log(addition(2,3));
 

// // //implicite Arrow means in one line we dont need to add return keyword to return the value;

// // const sub = (n3, n5) => (n3-n5)
// // console.log(sub(3,4));


// function addtwo(){
//     let username = "rushi";

//     getmessage: () => {
//         console.log(this.username);
        
//     }
// }

// addtwo()


// //this example is lexical scope this example

// const obj = {
//   name: "Alice",
//   greet: function () {
//     const inner = () => {
//       console.log(this.name);
//     };
//     inner();
//   }
// };

// obj.greet(); // "Alice"


// function user(){
//     userName: "rushi";
//     console.log(this.userName); 
// }

// user()


// const user = {
//     userName: "Rushi"
// }

// console.log(user(this.userName));
