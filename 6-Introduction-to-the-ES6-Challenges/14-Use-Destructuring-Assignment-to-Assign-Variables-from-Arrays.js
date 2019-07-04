// In this lesson, I learned how to use the destructuring assignment to assign elements from arrays to variables.

let a = 8, b = 6;
(() => {
  "use strict";
  // change code below this line
    [b, a] = [a, b]
  // change code above this line
})();
console.log(a); // should be 6
console.log(b); // should be 8
