//FUNCTION IMPLEMENTATION
const findKeyByValue = function (object, value) {
  for (const key of Object.keys(object)) {
    if (object[key] === value){
      return key;
    }
  }
  return undefined;
}



module.exports = findKeyByValue;