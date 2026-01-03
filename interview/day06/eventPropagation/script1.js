// Question--> what is event delegation

// document.querySelector(".products").addEventListener("click", (event) => {
//     console.log(event)
// })

document.querySelector(".products").addEventListener("click", (event) => {
    const span = event.target.closest("span");

    if (span && event.currentTarget.contains(span)) {
        window.location.href += "/" + span.className;
    }
});
