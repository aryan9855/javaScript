//6. The Vowel Counter:
//    You need to create a function that counts the number 
// of vowels in a given string. Consider both uppercase and
//  lowercase vowels.

let vowels  = /[aeiouAEIOU]/
let str = "Aryiian";
let count = 0;
for(let char of str){
    if(vowels.test(char)){
       count++;
    }
}
console.log(count);