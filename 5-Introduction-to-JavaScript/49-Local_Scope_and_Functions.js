// I learned that local variables are confined to their function. They cannot be seen outside of their function.

function myLocalScope() {
  'use strict'; // you shouldn't need to edit this line
  var myVar = "It is very hot today.";
  console.log(myVar);
}
myLocalScope();

// Run and check the console
// myVar is not defined outside of myLocalScope


// Now remove the console log line to pass the test
