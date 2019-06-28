// This lesson was about how to test for equality of two values with ==, the equality operator. I learned that in Javascript, "3" == 3 evaluates to true because type conversion occurs.  

// Setup
function testEqual(val) {
  if (val == 12) { // Change this line
    return "Equal";
  }
  return "Not Equal";
}

// Change this value to test
testEqual(10);
