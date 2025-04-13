 function personInfo(){
    console.log(`Name is ${this.firstName} and age is ${this.Age}`);
 }

 const person1 = {
    firstName: "John",
    Age: 30,
    about:personInfo
 }

 const person2 = {
    firstName: "Raj",
    Age: 10,
    about:personInfo
 }

 const person3 = {
    firstName: "rick",
    Age: 20,
    about:personInfo
 }
 person2.about();

 