// This lesson, I learned that objects can be thought of as a dictionary with a key and value storage. The value can also be a list.

// Setup
function phoneticLookup(val) {
  var result = "";

  // Only change code below this line
  var lookup = {
    'alpha': 'Adams',
    'bravo': 'Boston',
    'charlie': 'Chicago',
    'delta': 'Denver',
    'echo': 'Easy',
    'foxtrot': 'Frank'
  };
  result = lookup[val];
  // Only change code above this line
  return result;
}

// Change this value to test
phoneticLookup("charlie");
