//FUNCTION IMPLEMENTATION
const letterPositions = function (sentence) {
  const results = {};
  let count = 0;
  for (const letter of sentence) {
    if (letter !== " " && !results[letter]) {
        results[letter] = [count];
    } else if(results[letter]){
        results[letter].push(count);
      }
      count++;
    }
    return results;
  };


module.exports = letterPositions;
