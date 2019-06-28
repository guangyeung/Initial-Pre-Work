// I learned that a function does not need to include a return statement. When it is called, the code runs but the return value is undefined.

// Example
var sum = 0;
function addThree() {
  sum = sum + 3;
}

// Only change code below this line
function addFive() {
  sum += 5;
}


// Only change code above this line
var returnedValue = addFive();
