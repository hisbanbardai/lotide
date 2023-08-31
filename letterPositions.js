const letterPositions = function (sentence) {
  const results = {};
  let count = 0;
  for (const letter of sentence) {
    if (letter !== " " && !results[letter]) {
        results[letter] = [count];
    } else if(results[letter]){
        results[letter].push(count);
      }
      count++;
    }
    return results;
  };

const assertArraysEqual = function (actual, expected) {
  if (!eqArrays(actual, expected)) {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual}  !==  ${expected}`);
  } else {
    console.log(`✅✅✅ Assertion Passed: ${actual}  ===  ${expected}`);
  }
};

const eqArrays = function (arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false;
  } else {
    for (let i = 0; i < arr1.length; i++) {
      if (arr1[i] !== arr2[i]) {
        return false;
      }
    }
    return true;
  }
};


const actual = letterPositions("lighthouse in the house");
assertArraysEqual(actual["h"],[3,5,15,18]);
