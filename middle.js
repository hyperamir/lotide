// We don't need to require these two objects, as they've already
//required in middletest: 
//const eqArrays = require('./eqArrays')
//const assertArraysEqual = require('./assertArraysEqual')

const middle = function (arr) {
  let middleOfArr = [];
  if (arr.length < 3) return middleOfArr;

  const midPosition = Math.floor(arr.length / 2);
  if (arr.length % 2 === 0) {
    middleOfArr.push(arr[midPosition - 1]);
    middleOfArr.push(arr[midPosition]);
    return middleOfArr;
  } else {
    middleOfArr.push(arr[midPosition]);
    return middleOfArr;
  }
};

module.exports = middle;
