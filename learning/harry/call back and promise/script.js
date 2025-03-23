// const callback = (arg) => {
//     console.log(arg);

// }


// const loadScript = (src, useCallback) => {
//     let sc = document.createElement("script");
//     sc.src = src;
//     sc.onload = callback("Aryan");
//     document.head.append(sc);

// }

// loadScript("https://cdnjs.cloudflare.com/ajax/libs/prism/9000.0.1/prism.min.js",callback);



//promise

console.log("Promise");
let prom1 = new Promise((resolve, reject) => {
    setTimeout(() => {
console.log("Yes i am done");
resolve("Promise is resolved");
    } ,3000);
})
prom1.then((a) => {
  console.log(a);
})




