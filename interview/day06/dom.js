const codeBlock = document.querySelector("code");
const button = document.getElementById("myButton");

button.addEventListener("click", () => {
    alert("Hey there!");
    codeBlock.innerHTML = "console.log('Button was clicked!')";
});


//query selector - first element

/*
slectors 
-tag name
- id #,
- class .
*/

const element = document.querySelectorAll(".block");
element.forEach(e => {
    console.log(e.innerHTML);
})


const ele = document.querySelector("#root")
ele.innerText = "Rushi"

// querySelector select the first thing that come up first;
//querySlector select all the thing that name of id same as provided 