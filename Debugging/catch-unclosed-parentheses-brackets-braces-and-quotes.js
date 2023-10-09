//DESCRIPTION:
//Fix the two pair errors in the code.
//Your code should fix the missing piece of the array.
//Your code should fix the missing piece of the .reduce() method. The console output should show that Sum of array values is: 6.

//SOLUTION:

let myArray = [1, 2, 3];
let arraySum = myArray.reduce((previous, current) =>  previous + current);
console.log(`Sum of array values is: ${arraySum}`);