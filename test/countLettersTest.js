const assertEqual = require('../assertEqual');
const countLetters = require('../countLetters');

//TEST CODE

const actual = countLetters("lighthouse in the house");

assertEqual(actual["l"],1);
assertEqual(actual["h"],4);
assertEqual(actual["i"],2);
assertEqual(actual["e"],2);