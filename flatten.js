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

const flatten = function(array){
  let finalArray = [];
  for (let element of array){
    if (!Array.isArray(element)){
      finalArray.push(element);
    }
    else {
      for (let ele of element){
        finalArray.push(ele);
      }
    }
  }
  return finalArray;
}

assertArraysEqual(flatten([1, 2, [3, 4], 5, [6,11,12]]),[1,2,3,4,5,6,11,12]);