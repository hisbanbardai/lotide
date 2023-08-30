const assertEqual = function(actual, expected) {
  if (actual !== expected) {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual}  !==  ${expected}`);
  } else {
    console.log(`✅✅✅ Assertion Passed: ${actual}  ===  ${expected}`);
  }
};

const countLetters = function(sentence){
  const result = {};
  for (const letter of sentence) {
    if (letter !== " "){
      if(result[letter]){
        result[letter] = result[letter] + 1;
      } else{
        result[letter] = 1;
      }
    }
  }
  return result;
}


const actual = countLetters("lighthouse in the house");

assertEqual(actual["l"],1);
assertEqual(actual["h"],4);
assertEqual(actual["i"],2);
assertEqual(actual["e"],2);