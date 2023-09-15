const assertArraysEqual = require('../assertArraysEqual');
const flatten = require('../flatten');

//TEST CODE
assertArraysEqual(flatten([1, 2, [3, 4], 5, [6,11,12]]),[1,2,3,4,5,6,11,12]);