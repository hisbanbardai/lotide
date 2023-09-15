const eqArrays = require('./eqArrays');

//FUNCTION IMPLEMENTATION
const eqObjects = (object1, object2) => {
  if (Object.keys(object1).length !== Object.keys(object2).length) {
    return false;
  } else {
    for (const key1 of Object.keys(object1)) {
      if (Array.isArray(object1[key1]) && Array.isArray(object2[key1])) {
        if (!eqArrays(object1[key1], object2[key1])) {
          return false;
        }
      } else {
        if (object1[key1] !== object2[key1]) {
          return false;
        }
      }
    }
    return true;
  }
};




module.exports = eqObjects;
