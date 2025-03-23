//5. The Sum Selector:
//You are working on a function that should 
// sum all numbers in an array until it encounters 
// a negative number. Write a function that performs
// this summation.

let arr=[1,2,3,-1,4,5,-1,2,5];
let sum=0;
let i=0;
while(i<arr.length){
    if(arr[i]<0){
        break;
    }
    else{
    sum += arr[i];
    i++;
    }
}
console.log(sum);