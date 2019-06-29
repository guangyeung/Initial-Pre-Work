// I practiced replacing long if/ else if chains with a switch statement. For long chains, switch statements seem less cumbersome than if/ else statements. This lesson also reaffirms the fact that switch cases check for strict equality. 

function chainToSwitch(val) {
  var answer = "";
  // Only change code below this line

  switch (val) {
    case "bob":
      answer = "Marley";
      break;
    case 42:
      answer = "The Answer";
      break;
    case 1:
      answer = "There is no #1";
      break;
    case 99:
      answer = "Missed me by this much!";
      break;
    case 7:
      answer = "Ate Nine";
      break;
  }

  // Only change code above this line
  return answer;
}

// Change this value to test
chainToSwitch(7);
