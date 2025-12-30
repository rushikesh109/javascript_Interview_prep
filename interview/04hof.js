const number = [1, 2, 3].map(n => n * 2);
console.log(number);


function greeting(fn) {
    fn();
}

function welcomeMessage() {
    console.log("hello rushikesh");
}

// greeting(welcomeMessage)


setTimeout(() => { welcomeMessage() }, 1000)


const asyncHandler = (fn) => {
    return async (req, res, next) => {
        try {
            await fn(req, res, next);
        } catch (error) {
            console.error("Error occured: ", error)
        }
    }
}
