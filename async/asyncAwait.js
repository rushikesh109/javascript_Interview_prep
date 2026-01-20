let stocks = {
    fruits: ["strawberry", "banana", "mango", "grapes"],
    liquid: ["water", "ice"],
    holder: ["cone", "cup", "stick"],
    toppings: ["chocolate", "peanuts"],
};

let is_shop_open = false;



//promise template;
//let order = (time,work) =>{
// return new Promise((resolve, reject) => {
//     if (is_shop_open) {
//         setTimeout(() => {
//             resolve(work());
//         }, time);
//     } else {
//         reject(console.log("shop is closed"));
//     }           
// })

//async function template
// async function order(){
//     try{
//         await abc;
//     }
//     catch(error){}
//     finally{}
// }

function time(ms) {
    return new Promise((resolve, reject) => {
        if (is_shop_open) {
            setTimeout(resolve, ms);
        } else {
            reject(console.log("shop is closed"));
        }
    })
}

async function kitchen(){
    try{
        await time(2000);
        console.log(`${stocks.fruits[0]} was selected `);

        await time(0);
        console.log("the fruit was chopped");

        await time(1000);
        console.log(`${stocks.liquid[0]} and ${stocks.liquid[1]} was added`);

        await time(1000);
        console.log("machine was started");

        await time(2000);
        console.log(`${stocks.holder[0]} was selected`);

        await time(3000);
        console.log(`${stocks.toppings[0]} was added`);

        await time(2000);
        console.log("ice-cream was served");
    }
    catch(error){
        console.log("customer left",error);
    }
    finally{
        console.log("day ended, shop is closed");
    }
}

kitchen();