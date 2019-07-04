// In this lesson, I learned about the getters and setters. Getter functions can get values from an object, and setter functions set the value of a property within an object. 

function makeClass() {
  "use strict";
  /* Alter code below this line */
  class Thermostat {
    constructor(fahrenheit) {
      this._fahrenheit = fahrenheit;
    }
    // getter
    get temperature(){
      return 5/9 * (this.fahrenheit - 32);
    }
    //setter
    set temperature(celcius){
      return this.fahrenheit = celcius * 9.0 / 5 +32;
    }

  }

  /* Alter code above this line */
  return Thermostat;
}
const Thermostat = makeClass();
const thermos = new Thermostat(76); // setting in Fahrenheit scale
let temp = thermos.temperature; // 24.44 in C
thermos.temperature = 26;
temp = thermos.temperature; // 26 in C
