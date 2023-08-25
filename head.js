// FUNCTION IMPLEMENTATION
const assertEqual = function (actual, expected) {
  if (actual !== expected) {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual}  !==  ${expected}`);
  } else {
    console.log(`✅✅✅ Assertion Passed: ${actual}  ===  ${expected}`);
  }
};

const head = function (array) {
  return (array.length) ? array[0] : undefined;
};

// TEST CODE
assertEqual("Lighthouse Labs", "Bootcamp");
assertEqual(1, 1);
assertEqual(1, "1");
assertEqual(head(["5"]), 5);
assertEqual(head([]), 5);
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");
