// In this lesson, I learned that the variables declared with "let", has its scope  limited inside the block, statement, or expression which it was declared.

function checkScope() {
"use strict";
  let i = "function scope"; 
  if (true) {
   let i = "block scope";
    console.log("Block scope i is: ", i);
  }
  console.log("Function scope i is: ", i);
  return i;
}
