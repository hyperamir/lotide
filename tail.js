const assertEqual = function (actual, expected) {

  //first check if length of 2 arrays match
  if (actual.length !== expected.length) return console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);

  //compare every single element of actual with expected array
  for (let i = 0; i < actual.length; i++) {
    if (actual[i] !== expected[i]) {
      return console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
    }
  }
  return console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
};

//using slice instead of splice as we don't have to hange the original array
const tail = function (array) {
  let output = [];
  for (let i = 1; i < array.length; i++) {
    output.push(array[i]);
  }
  return output;
};

const result = tail(["Hello", "Lighthouse", "Labs"]);
assertEqual(result, ["Lighthouse", "Labs"]);


