const assertArraysEqual = require('./assertArraysEqual');


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


const actual = letterPositions("lighthouse in the house");
assertArraysEqual(actual["h"],[3,5,15,18]);


module.exports = letterPositions;
