const words = ["ground", "control", "to", "major", "tom"];

const assertArraysEqual = function(actual, expected){
  if (!eqArrays(actual, expected)) {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual}  !==  ${expected}`);
  } else {
    console.log(`✅✅✅ Assertion Passed: ${actual}  ===  ${expected}`);
  }
};

const eqArrays = function(arr1, arr2){
  if (arr1.length !== arr2.length){
    return false;
  } else{
    for (let i = 0; i < arr1.length; i++){
      if (arr1[i] !== arr2[i]){
        return false;
      }
    }
    return true;
  }
}

const map = function(array, callback){
  const results = [];
  for (const item of array) {
    //So what original map function basically does is that it will return a new array with what you want to do i.e. defined in the callback function with each array item
    results.push(callback(item));
  }
  return results;
}

const results1 = map(words, word => word[0]);
const results2 = map(words, word => `Hello ${word}`);
const results3 = map(words, word => word.charAt(2));

assertArraysEqual(results1, [ 'g', 'c', 't', 'm', 't' ]);
assertArraysEqual(results2, [ 'Hello ground','Hello control','Hello to','Hello major','Hello tom']);
assertArraysEqual(results3,['o', 'n', '', 'j', 'm']);