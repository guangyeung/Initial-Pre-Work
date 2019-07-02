// In this lesson, I learned about radix. The parseInt() function takes the radix as a second argument. It specifies the base of the number in the string.

function convertToInteger(str) {
  var a = parseInt(str, 2);
  return a;
}

convertToInteger("10011");
