//DESCRIPTION:
//Fill in the body of the add function so it uses currying to add parameters x, y, and z.

//SOLUTION:

function add(x) {
  return function(y) {
    return function(z) {
      return x + y + z;
    };
  };
};

add(10)(20)(30);