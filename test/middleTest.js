const assert = require('chai').assert;

const middle = require('../middle');
const assertArraysEqual = require('../assertArraysEqual')

describe('#middle', () => {
  it('returns [3,4] for [1, 2, 3, 4, 5, 6]', () => {
    assert.deepEqual(assertArraysEqual((middle([1, 2, 3, 4, 5, 6])), [3, 4]));
  });
  it('returns [] for []', () => {
    assert.deepEqual(assertArraysEqual((middle([])), []));
  });
});


// console.log(assertArraysEqual(middle([]), ([])));
// console.log(assertArraysEqual(middle([1, 2, 3, 4, 5]), ([3, 4])));
// console.log(assertArraysEqual(middle([1, 2, 3, 4, 5, 6]), ([3, 4])));