//DESCRIPTION:
//We'll pass you an array of two numbers. Return the sum of those two numbers plus the sum of all the numbers between them. The lowest number will not always come first.
//For example, sumAll([4,1]) should return 10 because sum of all the numbers between 1 and 4 (both inclusive) is 10.

//SOLUTION:

function sumAll(arr) {
  let sumEnd = 0;
  for (let i = Math.min(...arr); i <= Math.max(...arr); i++) {
    sumEnd += i;
  }
  return sumEnd;
}

sumAll([1, 4]);