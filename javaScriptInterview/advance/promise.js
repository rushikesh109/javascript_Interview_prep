// function fetchData() {
//    return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             let dataFetching = true;

//             if (dataFetching === true) {
//                  resolve("Data fetched successfully")
//             } else {
//                  reject("data fetching failed")
//             }
//         }, 2000)
//     })
// }


// fetchData()
//     .then((data)=>{
//         console.log(data);
//     })
//     .catch((error) => {
//         console.log(error);
//     })


//      async function fettch(){
//     try{
//        const data = await fetch('https://jsonplaceholder.typicode.com/todos/1')
//        let response = await data.json()
//       return response;
//      } catch (error) {
//         console.log(error);
//      }
//     }

// setTimeout(async() => {
//   const result = await fettch()
//   console.log(result);
  
// }, 2000);



// function postData(){
//     return new Promise ((resolve , reject) =>{
//         setTimeout(()=>{
//             resolve("fetched post data successfully")
//         },1000)
//     })
// }

// function commentData(){
//     return new Promise((resolve, reject)=>{
//         setTimeout(()=>{
//             resolve("comment data fetched successfully")
//         },3000)
//     })
// }


// async function grabbingData(){
//    try {
//       console.log("fetching all the data")
//     //   const cmtData = await commentData()
//     //   const pstData = await postData();
    
//     const [pstData, cmtData] = await Promise.all([postData(), commentData()])
//       console.log(pstData);
//       console.log(cmtData);

      
//    } catch (error) {
//     console.log("Error happens while fetching data" , error);
    
//    }
// }
// grabbingData()


// real api fetching

async function postData(){
    const res = await fetch('https://jsonplaceholder.typicode.com/posts/1')
    if(!res.ok){
        throw new Error("Failed to fetch data")
    }
   return res.json()
}

function commentData() {
  return new Promise((resolve, reject) => {
    setTimeout(async () => {
      try {
        console.log("comment data fetched");

        const res = await fetch('https://jsonplaceholder.typicode.com/comments/1');

        if (!res.ok) {
          reject(new Error("Failed to fetch comment data"));
          return;
        }

        const data = await res.json();
        resolve(data);

      } catch (error) {
        reject(error);
      }
    }, 2000);
  });
}


async function usersData() {
    try{
      console.log("fetching data");

      const [pstData, cmtData] = await Promise.all([postData(), commentData()])
      console.log(pstData);
      console.log(cmtData);
      
      
      
    }catch(error){
        console.log("fetching data failed", error);
    }
    
}

usersData()