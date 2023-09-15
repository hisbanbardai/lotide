//FUNCTION IMPLEMENTATION

const findKey = function (object, callback) {
  //Using for of loop
  // for (const key of Object.keys(object)) {
  //   if (callback(object[key])){
  //     return key;
  //   }
  // }

  //Using for in loop
  for (const key in object) {
    if (object.hasOwnProperty(key)) {
      if (callback(object[key])) {
        return key;
      }
    }
  }
  return undefined;
};




module.exports = findKey;
