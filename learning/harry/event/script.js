document.querySelector(".state").addEventListener("click", (e) => {
    e.stopPropagation()
    alert("You have clicked on state")
})

document.querySelector(".india").addEventListener("click", (e) => {
    alert("You have clicked on india")
})

document.querySelector(".earth").addEventListener("click", (e) => {
    alert("You have clicked on earth")
}) 


setInterval(() => {
    document.querySelector(".state").style.backgroundColor = "red"
}, 3000);
