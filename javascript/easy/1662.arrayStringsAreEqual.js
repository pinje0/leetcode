// @tracking
//! Re-Solved Times: 2

/**
 * @param {string[]} word1
 * @param {string[]} word2
 * @return {boolean}
 */

//* 1
////var arrayStringsAreEqual = function (word1, word2) {
////  return word1.join('') === word2.join('') ? true : false;
////};

//* 2
var arrayStringsAreEqual = function (word1, word2) {
  let w1 = '';
  let w2 = '';
  for (let i = 0; i < word1.length; i++) {
    w1 += word1[i];
  }

  for (let i = 0; i < word2.length; i++) {
    w2 += word2[i];
  }

  return w1 === w2 ? true : false;
};

console.log(arrayStringsAreEqual(['ab', 'c'], ['a', 'bc']));

// Input: word1 = ["ab", "c"], word2 = ["a", "bc"]
// Output: true
// Explanation:
// word1 represents string "ab" + "c" -> "abc"
// word2 represents string "a" + "bc" -> "abc"
// The strings are the same, so return true.

console.log(arrayStringsAreEqual(['a', 'cb'], ['ab', 'c'])); // false
console.log(arrayStringsAreEqual(['abc', 'd', 'defg'], ['abcddefg']));
