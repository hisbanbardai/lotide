const assertArraysEqual = require('../assertArraysEqual');
const map = require('../map');

//TEST CODE
const words = ["ground", "control", "to", "major", "tom"];

const results1 = map(words, word => word[0]);
const results2 = map(words, word => `Hello ${word}`);
const results3 = map(words, word => word.charAt(2));

assertArraysEqual(results1, [ 'g', 'c', 't', 'm', 't' ]);
assertArraysEqual(results2, [ 'Hello ground','Hello control','Hello to','Hello major','Hello tom']);
assertArraysEqual(results3,['o', 'n', '', 'j', 'm']);