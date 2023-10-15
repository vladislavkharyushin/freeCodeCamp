//DESCRIPTION:
//Use the split method inside the splitify function to split str into an array 
//of words. The function should return the array. Note that the words are not always 
//separated by spaces, and the array should not contain punctuation.

//SOLUTION:

function splitify(str) {
  return str.split(/\W/);
}

splitify("Hello World,I-am code");