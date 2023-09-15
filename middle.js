
//Mentor's feedback
const middle = function(array) {
  const length = array.length;
  if(length <= 2){
    return [];
  }
  const middleIndex = Math.floor(length / 2);
  if (length % 2 === 0 && length > 3){
    return [array[middleIndex - 1], array[middleIndex]];
  }

  if (length > 2){
    return [array[middleIndex]];
  }
}

//My code
//   const middle = function(array) {
//   let finalArray = [];
//   if (array.length < 3){
//     return finalArray;
//   } else {
//     if (array.length % 2 !== 0){
//       finalArray.push(array[Number.parseInt(array.length / 2)]);
//       return finalArray;
//     } else {
//       finalArray.push(array[(array.length / 2) - 1]);
//       finalArray.push(array[array.length / 2]);
//       return finalArray;
//     }
//   }
// }

module.exports = middle;