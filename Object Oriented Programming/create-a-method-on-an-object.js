//DESCRIPTION:
//Using the dog object, give it a method called sayLegs. The method should return the sentence This dog has 4 legs.

//SOLUTION:

let dog = {
  name: "Spot",
  numLegs: 4,
  sayLegs: function() {
  return "This dog has " + dog.numLegs + " legs."
}
};

dog.sayLegs();