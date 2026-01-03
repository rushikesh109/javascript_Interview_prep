
//Event Bubbling --->
// budding means event goes from bottom to up
//Event capturing/tacling ---->
// capturing means event goes form top to bottom {capture: true}

//event that are not bubble
//- focus, blur
// const div = document.querySelector("div")
// const form = document.querySelector("form")
// const button = document.querySelector("button")


// div.addEventListener("click" , function(e){
//     e.stopPropagation()
//   alert("div clicked")
// } )

// form.addEventListener("click", function(e){
//      e.stopPropagation()
//     alert("form clicked")
// })

// button.addEventListener("click", (e) => {
//      e.stopPropagation()
//     alert("button clicked")
// })


// question--> event.target vs this.target vs event.currentTarget

// div.addEventListener("click", func);
// button.addEventListener("click", func);
// form.addEventListener("click", func);


// function func(event){
//     alert("current target = " + event.currentTarget.tagName +
// ", target = " + event.target.tagName +
// ", this = " + this.tagName
//     )
// }


// Question --> What is event delegation?
// --> event delegation means where we add EventListener to the parent element instead of adding them in  decendent element


