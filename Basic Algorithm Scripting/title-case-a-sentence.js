//DESCRIPTION:
//Return the provided string with the first letter of each word capitalized. Make sure the rest of the word is in lower case.
//For the purpose of this exercise, you should also capitalize connecting words like the and of.

//SOLUTION:

function titleCase(str) {
  let backString = str.split(" ");
  let updatedString = [];
  for (let st in backString) {
    updatedString[st] = backString[st][0].toUpperCase() + backString[st].slice(1).toLowerCase();
  }
  return updatedString.join(" ");
}

titleCase("I'm a little tea pot");