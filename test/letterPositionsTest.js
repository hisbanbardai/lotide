const assertArraysEqual = require('../assertArraysEqual');
const letterPositions = require('../letterPositions');

//TEST CODE
const actual = letterPositions("lighthouse in the house");
assertArraysEqual(actual["h"],[3,5,15,18]);