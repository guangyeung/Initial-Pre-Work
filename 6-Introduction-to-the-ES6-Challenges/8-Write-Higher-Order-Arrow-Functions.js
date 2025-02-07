// In this lesson, I learned about higher order functions such as filter and map. I also practiced writing the arrow function. 

const realNumberArray = [4, 5.6, -9.8, 3.14, 42, 6, 8.34, -2];
const squareList = (arr) => {
  "use strict";
  // change code below this line
  const squaredIntegers = arr.filter ( (num) => num > 0 && Number.isInteger(num)).map((num) => Math.pow(num, 2));


  // change code above this line
  return squaredIntegers;
};
// test your code
const squaredIntegers = squareList(realNumberArray);
console.log(squaredIntegers);
