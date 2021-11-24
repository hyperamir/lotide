const assertEqual = function (actual, expected) {
  if (actual === expected) {
    return console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    return console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

const countLetters = function (str) {
  const numOfLetters = {};
  for (const letter of str) {
    if (letter !== ' ') {
      if (numOfLetters[letter]) {
        numOfLetters[letter] += 1;
      } else {
        numOfLetters[letter] = 1;
      }
    }
  }
  return numOfLetters;
};

const testStr = 'lighthouse in the house';
const result1 = countLetters(testStr);
console.log(result1);
assertEqual(result1['i'], 2)