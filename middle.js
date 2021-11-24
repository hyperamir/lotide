const eqArrays = function (arr1, arr2) {
  if (arr1.length !== arr2.length) return false;
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) return false;
  }
  return true;
}

const assertArraysEqual = function (actual, expected) {
  if (eqArrays(actual, expected)) {
    return `✅✅✅ Assertion Passed: ${actual} === ${expected}`;
  } else {
    return `🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`;
  }
}

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

console.log(assertArraysEqual(middle([]), ([])));
console.log(assertArraysEqual(middle([1, 2, 3, 4, 5]), ([3, 4])));
console.log(assertArraysEqual(middle([1, 2, 3, 4, 5, 6]), ([3, 4])));