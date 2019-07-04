// In this lesson, I learned that with ES6, the function keyword and colon can be omitted when defining functions inside objects.

// change code below this line
const bicycle = {
  gear: 2,
  setGear (newGear) {
    "use strict";
    this.gear = newGear;
  }
};
// change code above this line
bicycle.setGear(3);
console.log(bicycle.gear);
