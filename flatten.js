//FUNCTION IMPLEMENTATION 
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


module.exports = flatten;