const assertArraysEqual = require('./assertArraysEqual');

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


module.exports = flatten;