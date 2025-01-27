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


// const student = {
//     fullName: "Aryan",
//     age: 21,
//     printage: function(){
//         console.log("age = ",this.age);
//     },
// };

// class car{
//     start(){
//         console.log("start");
//     }
//     stop(){
//         console.log("stop");
//     }
// }

// let x = new car();
// let y = new car();


// function hello1(){
//     console.log("Hello1");
// }
// setTimeout(hello1, 5000);
// function hello2(){
//     console.log("Hello2");
// }
// setTimeout(hello2, 2000);




// setTimeout(() => {
//     console.log("Five");
// }, 1000);
// setTimeout(() => {
//     console.log("Four");
// }, 2000);
// setTimeout(() => {
//     console.log("Three");
// }, 3000);
// setTimeout(() => {
//     console.log("Two");
// }, 4000);
// setTimeout(() => {
//     console.log("one");
// }, 5000);
// setTimeout(() => {
//     console.log("Hello!");
// }, 6000);


// const URL = "https://cat-fact.herokuapp.com/facts";

// const getFacts = async () => {
//     console.log("Getting facts .....");
//     let response = await fetch(URL);
//     console.log(response);
//     let data = await response.json();
//     console.log(data[0].text);
// };