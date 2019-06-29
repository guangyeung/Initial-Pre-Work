// This lesson was about &&, the logical and operator. It only returns true if and only if the comparisons to the left and right of it are both true. 

function testLogicalAnd(val) {
  // Only change code below this line

  if (val <= 50 && val >= 25){
    return "Yes";
  }


  // Only change code above this line
  return "No";
}

// Change this value to test
testLogicalAnd(10);
