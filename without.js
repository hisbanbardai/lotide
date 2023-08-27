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

const without = function(source, itemsToRemove ){
  let finalArray = [];

  for (let i = 0; i < source.length; i++){
    let count = 0;
    for (let j = 0; j < itemsToRemove.length; j++){
      if (source[i] === itemsToRemove[j]){
        count += 1 ;
        break;
      }
    }
    if(!count){
      finalArray.push(source[i]);
    }
  }
  return finalArray;
}

assertArraysEqual(without([1,2,3,1],[2,1]),[2,3]);
assertArraysEqual(without([1,2,3,1],[1]),[2,3]);

const words = ["hello", "world", "lighthouse"];
without(words, ["lighthouse"]); // no need to capture return value for this test case
// Make sure the original array was not altered by the without function
assertArraysEqual(words, ["hello", "world", "lighthouse"]);