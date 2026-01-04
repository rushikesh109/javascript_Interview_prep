// console.log(a)


// const user = {
//     name: "rushi",
//     age: 23,
// }
// try {
//     console.log(user.address.city)
// } catch (error) {
//     console.log(error.message)
// }finally{
//     console.log(3+4)
// }

// async function makeAsyncRequest(){
//     try{
//         const url ="https://jsonplaceholder.typicode.com/todos/1"
//         const response = await fetch(url)
//         const data = await response.json()
//         console.log(data);
//         return data
//     }catch(err){
//         console.log(err.message);
//     }
// }

// makeAsyncRequest()

// try {
//   console.log("Try");
//   return;
// } catch (e) {
//   console.log("Catch");
// } finally {
//   console.log("Finally");
// }
// async function getUser(req, res) {
//   try {
//     const user = await User.findById(req.id);
//     res.json(user);
//   } catch (err) {
//     res.status(500).json({ message: err.message });
//   } finally {
//     console.log("Request handled");
//   }
// }
// setTimeout(() => {
//   try {
//     throw new Error("Boom");
//   } catch {}
// }, 100);


class AppError extends Error {
  constructor(message, statusCode) {
    super(message);              // sets error message
    this.statusCode = statusCode;
    this.status = `${statusCode}`.startsWith("4") ? "fail" : "error";
    this.isOperational = true;   // trusted error

    Error.captureStackTrace(this, this.constructor);
  }
}
