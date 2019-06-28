// I learned about strict equality. Javascript will not attempt a type conversion when doing comparisons with ===, the strict equality operator.

// Setup
function testStrict(val) {
  if (val === 7) { // Change this line
    return "Equal";
  }
  return "Not Equal";
}

// Change this value to test
testStrict(10);
