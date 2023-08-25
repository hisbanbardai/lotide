// FUNCTION IMPLEMENTATION
const assertEqual = function(actual, expected) {
  if (actual !== expected) {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual}  !==  ${expected}`);
  } else {
    console.log(`✅✅✅ Assertion Passed: ${actual}  ===  ${expected}`);
  }
};

const tail = function(array = []) {
  return array.slice(1);
};

// TEST CODE
// Test Case: Check the original array
let words = ["Yo Yo", "Lighthouse", "Labs"];
tail(words); // no need to capture the return value since we are not checking it
assertEqual(words.length, 3); // original array should still have 3 elements!

words = ["Yo Yo"];
tail(words); // no need to capture the return value since we are not checking it
assertEqual(words.length, 3); // original array should still have 3 elements!

words = [""];
tail(words); // no need to capture the return value since we are not checking it
assertEqual(words.length, 3); // original array should still have 3 elements!