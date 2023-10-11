//DESCRIPTION:
//Return the length of the longest word in the provided sentence.
//Your response should be a number.

//SOLUTION:

function findLongestWordLength(str) {
  let words = str.split(' ');
  let maxLength = 0;

  for (let i = 0; i < words.length; i++) {
    if (words[i].length > maxLength) {
      maxLength = words[i].length;
    }
  }

  return maxLength;
}
findLongestWordLength("The quick brown fox jumped over the lazy dog");