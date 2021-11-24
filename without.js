const eqArrays = function (arr1, arr2) {
  if (arr1.length !== arr2.length) return false;
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) return false;
  }
  return true;
}

const assertArraysEqual = function (actual, expected) {
  if (eqArrays(actual, expected)) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
}

const without = function (source, itemsToRemove) {
  let sourceUpdated = [];
  //sourcecursor: 
  for (let i = 0; i < source.length; i++) {
    if (!itemsToRemove.includes(source[i])) {
      sourceUpdated.push(source[i]);
    }
  }
  return sourceUpdated;
};

const words = ["hello", "world", "lighthouse"];
console.log(without(words, ["lighthouse"])); // no need to capture return value for this test case
// Make sure the original array was not altered by the without function
assertArraysEqual(words, ["hello", "world", "lighthouse"]);


// This is the second option if we don't want to use include method:
// line 18 should be behind the line 19.
//   for (let j = 0; j < itemsToRemove.length; j++) {
//     if (source[i] === itemsToRemove[j]) {
//       //sourceUpdated.push(source[i]);
//       continue sourcecursor;
//     }
//   }
//   sourceUpdated.push(source[i]);
// }


