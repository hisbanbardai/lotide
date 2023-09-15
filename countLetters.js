const assertEqual = require('./assertEqual');

const countLetters = function(sentence){
  const result = {};
  for (const letter of sentence) {
    if (letter !== " "){
      if(result[letter]){
        result[letter] = result[letter] + 1;
      } else{
        result[letter] = 1;
      }
    }
  }
  return result;
}


const actual = countLetters("lighthouse in the house");

assertEqual(actual["l"],1);
assertEqual(actual["h"],4);
assertEqual(actual["i"],2);
assertEqual(actual["e"],2);


module.exports = countLetters;