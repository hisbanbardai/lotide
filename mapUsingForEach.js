const array = [1,2,3,4,5];


const mapCopy = (array, callback) => {
  const result = [];
  array.forEach((element, index, array) => {
    result.push(callback(element, index, array));
  });
  return result;
}


console.log(mapCopy(array, (element, index, array) => `${element + index}`));