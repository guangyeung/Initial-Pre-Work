// In this lesson, I learned about how ES6 provided support to concisely writing object literal declarations.

const createPerson = (name, age, gender) => {
  "use strict";
  // change code below this line
  return {
     name,
     age,
     gender
  };
  // change code above this line
};
console.log(createPerson("Zodiac Hasbro", 56, "male")); // returns a proper object
