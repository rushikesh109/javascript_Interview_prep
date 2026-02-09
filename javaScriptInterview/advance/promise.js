function fetchData() {
   return new Promise((resolve, reject) => {
        setTimeout(() => {
            let dataFetching = true;

            if (dataFetching === true) {
                 resolve("Data fetched successfully")
            } else {
                 reject("data fetching failed")
            }
        }, 2000)
    })
}


fetchData()
    .then((data)=>{
        console.log(data);
    })
    .catch((error) => {
        console.log(error);
    })


     async function fettch(){
    try{
       const data = await fetch('https://jsonplaceholder.typicode.com/todos/1')
       let response = await data.json()
      return response;
     } catch (error) {
        console.log(error);
     }
    }

setTimeout(async() => {
  const result = await fettch()
  console.log(result);
  
}, 2000);