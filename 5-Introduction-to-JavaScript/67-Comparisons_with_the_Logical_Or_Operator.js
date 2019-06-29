// This lesson was about the logical or operator. It returns true if either of the operands is true. It seems like a good to test if a variable is in a certain range.

function testLogicalOr(val) {
  // Only change code below this line

  if (val < 10 || val >20) {
    return "Outside";
  }

  // Only change code above this line
  return "Inside";
}

// Change this value to test
testLogicalOr(15);
