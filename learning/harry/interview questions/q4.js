//The Password Validator:
// You are building a password validation feature. 
// Create a function that checks if a given password 
// meets the following criteria: at least 8 characters
// long, contains both uppercase and lowercase letters,
//  and includes at least one digit.

let input = "Aasmas!q1q"; 
let upperCase = /[A-Z]/;
let lowerCase = /[a-z]/;
let numbers = /[0-9]/;
let special = /[!@#$%^&*]/;
let flag = 0;
if(input.length<8){
    console.log("Password is too short!");
    flag = 1;
}
if(!upperCase.test(input)){
    console.log("Password must contain at least one uppercase letter!");
    flag = 1;
}   
if(!lowerCase.test(input)){
    console.log("Password must contain at least one lowercase letter!");
    flag = 1;
}
if(!numbers.test(input)){
    console.log("Password must contain at least one number!");
    flag = 1;
}
if(!special.test(input)){
    console.log("Password must contain at least one special character!");
    flag = 1;
}
if(flag==0){
    console.log("Password is strong!");
}