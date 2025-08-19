// @tracking
//! Re-Solved Times: 2

/**
 * @param {string} sentence
 * @param {string} searchWord
 * @return {number}
 */

//* 1
////var isPrefixOfWord = function (sentence, searchWord) {
////  const splitWord = sentence.split(' ');
////
////  for (let i = 0; i < splitWord.length; i++) {
////    if (splitWord[i].startsWith(searchWord)) {
////      return i + 1;
////    }
////  }
////
////  return -1;
////};

//* 2
var isPrefixOfWord = function (sentence, searchWord) {
  const split = sentence.split(' ');

  for (let i = 0; i < split.length; i++) {
    if (split[i].startsWith(searchWord)) {
      return i + 1;
    }
  }
  return -1;
};

console.log(isPrefixOfWord('i love eating burger', 'burg')); // 4
// Input: sentence = "i love eating burger", searchWord = "burg"
// Output: 4
// Explanation: "burg" is prefix of "burger" which is the 4th word in the sentence.

console.log(isPrefixOfWord('this problem is an easy problem', 'pro')); // 2

//  If there is no such word return -1.
console.log(isPrefixOfWord('i am tired', 'you')); // -1
