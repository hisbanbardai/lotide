//FUNCTION IMPLEMENTATION
const map = function(array, callback){
  const results = [];
  for (const item of array) {
    //So what original map function basically does is that it will return a new array with what you want to do i.e. defined in the callback function with each array item
    results.push(callback(item));
  }
  return results;
}


module.exports = map;