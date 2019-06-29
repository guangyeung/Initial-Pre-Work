// In this lesson, I learned about the switch statement. It tests a value and that is then compared with the value of each case. Code is executed from the first matched case value until a break is encountered.

function caseInSwitch(val) {
  var answer = "";
  // Only change code below this line
  switch(val) {
    case 1:
      answer = "alpha";
      break;
    case 2:
      answer = "beta";
      break;
    case 3:
      answer = "gamma";
      break;
    case 4:
      answer = "delta";
      break;
  }


  // Only change code above this line
  return answer;
}

// Change this value to test
caseInSwitch(1);
