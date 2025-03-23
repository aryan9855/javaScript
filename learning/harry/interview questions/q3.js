//3. The Mirror Mirror:
//Imagine you have a string, and you need to create a new 
// string that is a mirror image of the original. Write a
//  function that appends the reversed version of the original 
// string to itself.

let str = "Aryan";
let revStr = "";
let i = str.length-1;
while(i>=0){
    revStr+=str[i];
    i--;
}
console.log(revStr);


