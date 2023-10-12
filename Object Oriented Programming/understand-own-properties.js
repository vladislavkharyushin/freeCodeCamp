//DESCRIPTION:
//Add the own properties of canary to the array ownProps.
//ownProps should include the values numLegs and name.
//You should solve this challenge without using the built in method Object.keys().
//You should solve this challenge without hardcoding the ownProps array.

//SOLUTION:

function Bird(name) {
  this.name = name;
  this.numLegs = 2;
}

let canary = new Bird("Tweety");
let ownProps = [];
for (let property in canary) {
if(canary.hasOwnProperty(property)) {
  ownProps.push(property);
}
}