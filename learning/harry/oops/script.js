class Animal {
  constructor(name) {
    this.name = name;
    console.log("object is created");
  }
  eats() {
    console.log("Animal eats food");
  }
  jumps() {
    console.log("Animal jumps");
  }
}


class Lion extends Animal{

}
let a = new Animal("Bunny"); 
console.log(a);
a.jumps();

let l = new Lion("King");
console.log(l);

