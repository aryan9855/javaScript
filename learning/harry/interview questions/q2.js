//2. The Double Trouble:
//    You are tasked with writing a function that doubles each element
//  in an array. However, there's a catch: if the array contains 
// consecutive duplicate elements, only double one of them.

let arr = [1, 2, 3, 4, 4, 5, 6, 7, 7, 8, 9];
let newArr = [];
let i=0;
while(i<arr.length){
if(arr[i]!=arr[i+1]){
        newArr.push(arr[i]*2);
        i++;
    }
    else{
        newArr.push(arr[i]*2);
        i++;
    }
}

console.log(newArr);




 
