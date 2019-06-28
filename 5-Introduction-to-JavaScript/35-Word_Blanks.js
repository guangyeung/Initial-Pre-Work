// In this lesson I practiced concatenating strings and variables together to create a mad lib sentence. I also got a glimpse of how functions work in Javascript.  

function wordBlanks(myNoun, myAdjective, myVerb, myAdverb) {
  // Your code below this line
  var result = "";

  // Your code above this line
  return result += "My " + myAdjective + " " + myNoun + " " + myVerb + " " + myAdverb + " everyday.";
}

// Change the words here to test your function
wordBlanks("chicken", "cute", "dances", "happily");
