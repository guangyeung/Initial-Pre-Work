// In this lesson, I learned about the differences between the "var" and "let" keywords. "Var" allows a variable with the same name to be declared more than once, unlike "let".

let catName;
let quote;
function catTalk() {
  "use strict";

  catName = "Oliver";
  quote = catName + " says Meow!";
 
}
catTalk();
