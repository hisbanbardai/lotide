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

const middle = function(array) {
  let finalArray = [];
  if (array.length < 3){
    return finalArray;
  } else {
    if (array.length % 2 !== 0){
      finalArray.push(array[Number.parseInt(array.length / 2)]);
      return finalArray;
    } else {
      finalArray.push(array[(array.length / 2) - 1]);
      finalArray.push(array[array.length / 2]);
      return finalArray;
    }
  }
}

assertArraysEqual(middle([1, 2, 3]),[2]);
assertArraysEqual(middle([1, 2]),[]);
assertArraysEqual(middle([1, 2, 3, 4, 5, 6, 7, 8]),[4,5]);