//DESCRIPTION:
//Add a numLegs property to the prototype of Dog

//SOLUTION:

function Dog(name) {
  this.name = name;
}

Dog.prototype.numLegs = 4;


let beagle = new Dog("Snoopy");