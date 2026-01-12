const { set } = require("mongoose");

let stocks = {
    fruits: ["strawberry", "banana", "mango", "grapes"],
    liquid: ["water", "ice"],
    holder: ["cone", "cup", "stick"],
    toppings: ["chocolate", "peanuts"],
};

let is_shop_open = true;

let order = (time, work) => {

    return new Promise((resolve, reject) => {
        if (is_shop_open) {

            setTimeout(() => {
                resolve(work())
            }, time)
        } else {
            setTimeout(() => {
                reject(console.log("SORRRY"));

                console.log("shop is closed");
            })

        }
    })
}

// here we are calling all the functions using promise chaining
order(2000, () => console.log(`${stocks.fruits[0]} was selected `))
    .then(() => {
        return order(0o00, () => console.log("the fruit was chopped"))
    })
    .then(() => {
        return order(1000, () => console.log(`${stocks.liquid[0]} and ${stocks.liquid[1]} was added`))
    })
    .then(() => {
        return order(1000, () => console.log("machine was started")
        )
    })
    .then(() => {
        return order(2000, () => console.log(`${stocks.holder[0]} was selected`)
        )
    })
    .then(() => {
        return order(3000, () => {
            console.log(`${stocks.toppings[0]} was added`);
        })
    })
    .then(() => {
        return order(2000, () => {
            console.log("ice-cream was served");
        })
    })

    .catch(() => {
        console.log("customer lefts");
    })
    .finally(() => {
        console.log("Day ended, shop is closed");
    })
