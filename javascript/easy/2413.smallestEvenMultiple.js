/**
 * @param {number} n
 * @return {number}
 */
var smallestEvenMultiple = function (n) {
  return n % 2 == 0 ? n : n * 2;
};

console.log(smallestEvenMultiple(5));
// Explanation: The smallest multiple of both 5 and 2 is 10.
