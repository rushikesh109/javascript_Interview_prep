setTimeout(()=>{
    console.log("Runs once after 3 second");
},3000)

//with argument
setTimeout((name, age)=>{
    console.log(`${name}'s age is ${age}`);
},1000,"rushi",24)

const timeOutId = setTimeout(()=>{
    console.log("this will not run");
},3000)

clearTimeout(timeOutId)

// Recursive setTimeout (preferred for intervals)
function repeatTask() {
  console.log("Task running");
  
  setTimeout(repeatTask, 1000); // Calls itself after 1 second
}

// repeatTask();

// setInterval - Executes REPEATEDLY at fixed intervals:

// Basic usage
setInterval(() => {
  console.log("Runs every 2 seconds");
}, 2000);

// With arguments
setInterval((message) => {
  console.log(message);
}, 1000, "Tick");

// Storing interval ID
const intervalId = setInterval(() => {
  console.log("Repeating...");
}, 1000);

// Stopping interval
setTimeout(() => {
  clearInterval(intervalId);
  console.log("Interval stopped");
}, 5000);

// Counter example
let count = 0;
const counterId = setInterval(() => {
  count++;
  console.log("Count:", count);
  
  if (count === 5) {
    clearInterval(counterId);
    console.log("Counter stopped");
  }
}, 1000);



//problem with setInterval

// setInterval doesn't wait for function to complete
setInterval(() => {
  // If this takes longer than 2 seconds, intervals pile up!
  heavyOperation(); // Takes 3 seconds
}, 2000);

// Better approach - recursive setTimeout
function scheduleNext() {
  heavyOperation(); // Takes 3 seconds
  
  setTimeout(scheduleNext, 2000); // Waits 2 seconds AFTER completion
}

scheduleNext();


// Clearing setTimeout
const timeout = setTimeout(() => {
  console.log("Won't run");
}, 5000);

clearTimeout(timeout);

// Clearing setInterval
const interval = setInterval(() => {
  console.log("Repeating");
}, 1000);

setTimeout(() => {
  clearInterval(interval);
}, 10000);