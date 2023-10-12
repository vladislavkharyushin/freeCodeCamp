//DESCRIPTION:
//Use Object.create to make two instances of Animal named duck and beagle.
//The duck variable should be defined.
//The beagle variable should be defined.
//The duck variable should be initialised with Object.create.
//The beagle variable should be initialised with Object.create.
//duck should have a prototype of Animal.
//beagle should have a prototype of Animal.

//SOLUTION:

function Animal() { }

Animal.prototype = {
  constructor: Animal,
  eat: function() {
    console.log("nom nom nom");
  }
};


let duck = Object.create(Animal.prototype);
let beagle = Object.create(Animal.prototype);