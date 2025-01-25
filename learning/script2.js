// let h2 = document.querySelector("h2");
// console.dir(h2.innerText);
// h2.innerText= h2.innerText + " From Aryan";
// console.dir(h2.innerText);

// let divs = document.querySelectorAll(".box");
// let i = 1;
// for(div of divs){
//     div.innerText = `i am box ${i}`;
//     console.log(div.innerText);
//     i++;
// }

// let btn1 = document.querySelector(".btn1");

// btn1.onclick = () => {
//     console.log("Button 1 clicked");
//     let x =10;
//     x++;
//     console.log(x);
// };

// divs.forEach((div) => {
//     div.onmouseover = () => {
//         console.log("Mouse over");
//     };
//     div.onclick = () => {
//         console.log("Clicked");
//     };
// });

// let btn1 = document.querySelector(".btn1");
// btn1.addEventListener("click", (e) => {
//     console.log("Button 1 clicked");
//     console.log(e);
//     console.log(e.type);
//     console.log(e.target);
// });

// let btn1 = document.querySelector(".btn1");

// let currMode = "light";
// btn1.addEventListener("click", (e) => {
//     console.log("you are trying to change the mode");
//     if(currMode === "light"){
//         currMode = "dark";
//         document.querySelector("body").style.backgroundColor = "black";
//     }
//     else{
//         currMode = "light";
//         document.querySelector("body").style.backgroundColor = "white";
//     }

//     console.log(currMode);
// });