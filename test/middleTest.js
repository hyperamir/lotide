const middle = require('../middle');
const assertArraysEqual = require('../assertArraysEqual')

console.log(assertArraysEqual(middle([]), ([])));
console.log(assertArraysEqual(middle([1, 2, 3, 4, 5]), ([3, 4])));
console.log(assertArraysEqual(middle([1, 2, 3, 4, 5, 6]), ([3, 4])));