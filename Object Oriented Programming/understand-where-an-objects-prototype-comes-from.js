//DESCRIPTION:
//Use isPrototypeOf to check the prototype of beagle.

//SOLUTION:

function Dog(name) {
  this.name = name;
}

let beagle = new Dog("Snoopy");

Dog.prototype.isPrototypeOf(beagle);