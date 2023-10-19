//DESCRIPTION:
//Return an English translated sentence of the passed binary string.
//The binary string will be space separated.

//SOLUTION:

function binaryAgent(str) {
  let aString = str.split(" ");
  let bString = [];
    for (var i = 0; i < aString.length; i++) {
    bString.push(String.fromCharCode(parseInt(aString[i], 2)));
  }
  return bString.join("");
}

binaryAgent("01000001 01110010 01100101 01101110 00100111 01110100 00100000 01100010 01101111 01101110 01100110 01101001 01110010 01100101 01110011 00100000 01100110 01110101 01101110 00100001 00111111");