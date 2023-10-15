//DESCRIPTION:
//Use the every method inside the checkPositive function to check if every element in arr is positive. The function should return a Boolean value.

//SOLUTION:

function checkPositive(arr) {
 return arr.every(val => val > 0);
}

checkPositive([1, 2, 3, -4, 5]);