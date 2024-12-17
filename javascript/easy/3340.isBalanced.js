/**
 * @param {string} num
 * @return {boolean}
 */
var isBalanced = function (num) {
  let evenSum = 0;
  let oddSum = 0;

  for (let i = 0; i < num.length; i++) {
    if (i % 2 === 0) {
      evenSum += Number(num[i]);
    } else {
      oddSum += Number(num[i]);
    }
  }
  return oddSum === evenSum ? true : false;
};

// You are given a string num consisting of only digits. A string of digits is
// called balanced if the sum of the digits at even indices is equal
// to the sum of digits at odd indices.
// Return true if num is balanced, otherwise return false.

console.log(isBalanced("1234")); // false
// Output: false
// Explanation:
// The sum of digits at even indices is 1 + 3 == 4, and the sum of digits at odd indices is 2 + 4 == 6.
// Since 4 is not equal to 6, num is not balanced.

console.log(isBalanced("24123")); // true
// The sum of digits at even indices is 2 + 1 + 3 == 6, and the sum of digits at odd indices is 4 + 2 == 6.
// Since both are equal the num is balanced.