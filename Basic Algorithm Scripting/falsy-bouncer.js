//DESCRIPTION:
//Remove all falsy values from an array. Return a new array; do not mutate the original array.
//Falsy values in JavaScript are false, null, 0, "", undefined, and NaN.
//Hint: Try converting each value to a Boolean.

//SOLUTION:

function bouncer(arr) {
  let myArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i]) myArr.push(arr[i]);
  }
  return myArr;
}

bouncer([7, "ate", "", false, 9]);