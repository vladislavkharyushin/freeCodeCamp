//DESCRIPTION:
//Write a function that takes two or more arrays and returns a new array of unique 
//values in the order of the original provided arrays.
//In other words, all values present from all arrays should be included in their original 
//order, but with no duplicates in the final array.
//The unique numbers should be sorted by their original order, but the final array should 
//not be sorted in numerical order.
//Check the assertion tests for examples.

//SOLUTION:

function uniteUnique(arr) {
  let finalArray = [];
  for (let i = 0; i < arguments.length; i++) {
    let arrayArguments = arguments[i];
    for (let j = 0; j < arrayArguments.length; j++) {
      let indexValue = arrayArguments[j];
      if (finalArray.indexOf(indexValue) < 0) {
        finalArray.push(indexValue);
      }
    }
  }
  return finalArray;
}

uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]);