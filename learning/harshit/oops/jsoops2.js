function createUser( firstName,lastName,email,age,address){
    const user={};
    user.firstName = firstName;
    user.lastName = lastName;
    user.email = email;
    user.age = age;
    user.address = address;
    user.about = function(){
        return `${this.firstName} is ${this.age} years old`;
    }
    user.is18 = function(){
        return this.age >= 18;
    }
    return user;
}
const user1 = createUser('aryan','singhal','aryan@gmail.com',21,'agra')
console.log(user1);
const is18 = user1.is18();
console.log(is18);   