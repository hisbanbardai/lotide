const assertEqual = require('../assertEqual')
const tail = require('../tail')

// TEST CODE
// Test Case: Check the original array
let words = ["Yo Yo", "Lighthouse", "Labs"];
tail(words); // no need to capture the return value since we are not checking it
assertEqual(words.length, 3); // original array should still have 3 elements!

words = ["Yo Yo"];
tail(words); // no need to capture the return value since we are not checking it
assertEqual(words.length, 3); // original array should still have 1 elements!

words = [""];
let result = tail(words); // An empty array should yield an empty array for its tail
assertEqual(result.length, 3); 

words = ["Hello", "Lighthouse", "Labs"];
result = tail(words);
assertEqual(result.length, 2); // ensure we get back two elements
assertEqual(result[0], "Lighthouse"); // ensure first element is "Lighthouse"
assertEqual(result[1], "Labs"); // ensure second element is "Labs"