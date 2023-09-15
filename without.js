//FUNCTION IMPLEMENTATION
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

module.exports = without;